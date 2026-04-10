-- profiles: extends Supabase auth.users
CREATE TABLE profiles (
  id UUID REFERENCES auth.users PRIMARY KEY,
  display_name TEXT,
  email TEXT,
  role TEXT DEFAULT 'user' CHECK (role IN ('user', 'admin')),
  stripe_customer_id TEXT UNIQUE,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read" ON profiles FOR SELECT USING (true);
CREATE POLICY "Own update" ON profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Auto insert" ON profiles FOR INSERT WITH CHECK (auth.uid() = id);

-- Auto-create profile on signup
CREATE OR REPLACE FUNCTION handle_new_user() RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, display_name)
  VALUES (NEW.id, NEW.email, NEW.raw_user_meta_data->>'display_name');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- subscriptions: synced from Stripe webhooks
CREATE TABLE subscriptions (
  id TEXT PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) NOT NULL,
  stripe_customer_id TEXT NOT NULL,
  stripe_price_id TEXT,
  status TEXT NOT NULL,
  current_period_start TIMESTAMPTZ,
  current_period_end TIMESTAMPTZ,
  cancel_at_period_end BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Own read" ON subscriptions FOR SELECT USING (auth.uid() = user_id);

-- poikatsu_sites: master list of tracked sites
CREATE TABLE poikatsu_sites (
  id SERIAL PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  url TEXT NOT NULL,
  logo_url TEXT,
  description TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE poikatsu_sites ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read" ON poikatsu_sites FOR SELECT USING (true);

-- Seed initial sites
INSERT INTO poikatsu_sites (slug, name, url, description) VALUES
  ('moppy', 'モッピー', 'https://pc.moppy.jp', '国内最大級のポイントサイト'),
  ('hapitas', 'ハピタス', 'https://hapitas.jp', '高還元率が魅力のポイントサイト'),
  ('macromill', 'マクロミル', 'https://monitor.macromill.com', 'アンケートで稼げるリサーチサイト'),
  ('dokotoku', 'どこ得？（横断検索）', 'https://dokotoku.jp', '複数ポイントサイトの案件を横断検索・比較');

-- deals: crawled campaigns/offers
CREATE TABLE deals (
  id SERIAL PRIMARY KEY,
  site_id INTEGER REFERENCES poikatsu_sites(id),
  external_id TEXT,
  title TEXT NOT NULL,
  description TEXT,
  points_amount INTEGER,
  points_currency TEXT DEFAULT 'pt',
  yen_equivalent INTEGER,
  category TEXT,
  url TEXT,
  image_url TEXT,
  starts_at TIMESTAMPTZ,
  ends_at TIMESTAMPTZ,
  is_featured BOOLEAN DEFAULT false,
  is_premium BOOLEAN DEFAULT false,
  is_approved BOOLEAN DEFAULT false,
  crawled_at TIMESTAMPTZ DEFAULT now(),
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(site_id, external_id)
);

ALTER TABLE deals ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public approved free deals" ON deals
  FOR SELECT USING (is_approved = true AND is_premium = false);
CREATE POLICY "Premium deals for subscribers" ON deals
  FOR SELECT USING (
    is_approved = true AND is_premium = true AND EXISTS (
      SELECT 1 FROM subscriptions
      WHERE user_id = auth.uid() AND status = 'active'
    )
  );
CREATE POLICY "Admin full access" ON deals
  FOR ALL USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- bookmarks
CREATE TABLE bookmarks (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) NOT NULL,
  deal_id INTEGER REFERENCES deals(id) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(user_id, deal_id)
);

ALTER TABLE bookmarks ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Own bookmarks" ON bookmarks
  FOR ALL USING (auth.uid() = user_id);

-- crawl_logs
CREATE TABLE crawl_logs (
  id SERIAL PRIMARY KEY,
  site_slug TEXT NOT NULL,
  status TEXT NOT NULL,
  deals_found INTEGER DEFAULT 0,
  deals_new INTEGER DEFAULT 0,
  deals_updated INTEGER DEFAULT 0,
  error_message TEXT,
  started_at TIMESTAMPTZ DEFAULT now(),
  finished_at TIMESTAMPTZ
);
