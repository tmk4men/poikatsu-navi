import { createClient } from "@/lib/supabase/server";
import { getSubscription, isSubscriptionActive } from "@/lib/stripe/helpers";
import Badge from "@/components/ui/badge";
import Button from "@/components/ui/button";

export const metadata = {
  title: "ダッシュボード",
};

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const subscription = await getSubscription();
  const isPremium = isSubscriptionActive(subscription);

  return (
    <section className="py-16 md:py-24 px-5">
      <div className="mx-auto max-w-4xl">
        <h1 className="font-serif text-2xl font-bold mb-8">ダッシュボード</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Profile card */}
          <div className="bg-surface rounded-[var(--radius-lg)] border border-border-light p-6 md:p-8">
            <h2 className="font-serif text-base font-bold mb-4">
              アカウント情報
            </h2>
            <p className="text-sm text-muted mb-3">
              {user?.email}
            </p>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-sm text-muted">プラン:</span>
              {isPremium ? (
                <Badge variant="premium">プレミアム</Badge>
              ) : (
                <Badge>無料</Badge>
              )}
            </div>
            <Button href="/settings" variant="outline" size="sm">
              設定
            </Button>
          </div>

          {/* Quick links */}
          <div className="bg-surface rounded-[var(--radius-lg)] border border-border-light p-6 md:p-8">
            <h2 className="font-serif text-base font-bold mb-4">
              クイックリンク
            </h2>
            <div className="space-y-2">
              {[
                { href: "/guides", icon: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25", label: "ガイドを読む" },
                { href: "/deals", icon: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z", label: "案件を探す" },
              ].map((link) => (
                <Button key={link.href} href={link.href} variant="ghost" className="w-full justify-start gap-3">
                  <svg className="w-4 h-4 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={link.icon} />
                  </svg>
                  {link.label}
                </Button>
              ))}

              {!isPremium && (
                <Button href="/pricing" variant="ghost" className="w-full justify-start gap-3 text-accent">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                  </svg>
                  プレミアムにアップグレード
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
