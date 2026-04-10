export interface Deal {
  id: number;
  site_id: number;
  external_id: string | null;
  title: string;
  description: string | null;
  points_amount: number | null;
  points_currency: string;
  yen_equivalent: number | null;
  category: string | null;
  url: string | null;
  image_url: string | null;
  starts_at: string | null;
  ends_at: string | null;
  is_featured: boolean;
  is_premium: boolean;
  is_approved: boolean;
  crawled_at: string;
  created_at: string;
  updated_at: string;
  site?: PoikatsuSite;
}

export interface PoikatsuSite {
  id: number;
  slug: string;
  name: string;
  url: string;
  logo_url: string | null;
  description: string | null;
  is_active: boolean;
}
