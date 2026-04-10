import { createClient } from "@/lib/supabase/server";
import Badge from "@/components/ui/badge";
import Button from "@/components/ui/button";
import SectionReveal from "@/components/ui/section-reveal";
import type { Deal } from "@/types/deal";

export const metadata = {
  title: "案件一覧",
  description:
    "ポイ活の最新案件情報。毎日自動更新でお得な案件を見逃さない。",
};

export default async function DealsPage() {
  const supabase = await createClient();

  const { data: deals } = await supabase
    .from("deals")
    .select("*, site:poikatsu_sites(*)")
    .eq("is_approved", true)
    .eq("is_premium", false)
    .order("crawled_at", { ascending: false })
    .limit(10);

  const { count: totalCount } = await supabase
    .from("deals")
    .select("*", { count: "exact", head: true })
    .eq("is_approved", true);

  return (
    <section className="py-16 md:py-24 px-5">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12">
          <p className="text-primary text-sm font-medium tracking-wider mb-3">DEALS</p>
          <h1 className="font-serif text-[clamp(1.75rem,4vw,2.5rem)] font-bold mb-3">
            案件一覧
          </h1>
          <p className="text-muted leading-relaxed">
            人気ポイントサイトの案件を
            <br className="sm:hidden" />
            毎日自動収集しています。
          </p>
        </div>

        {!deals || deals.length === 0 ? (
          <div className="text-center py-16 bg-surface-alt rounded-[var(--radius-lg)]">
            <svg className="w-12 h-12 mx-auto text-muted/30 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
            </svg>
            <p className="text-muted font-medium mb-1">
              案件情報は準備中です
            </p>
            <p className="text-sm text-muted/70">
              近日公開予定。お楽しみに。
            </p>
          </div>
        ) : (
          <SectionReveal>
            <div className="space-y-4">
              {(deals as Deal[]).map((deal, i) => (
                <div
                  key={deal.id}
                  className={`reveal delay-${Math.min(i + 1, 6)} bg-surface rounded-[var(--radius-lg)] border border-border-light p-5 md:p-6 flex flex-col sm:flex-row sm:items-center gap-4 transition-all duration-300 hover:shadow-[var(--shadow-md)] hover:border-primary/20`}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex gap-2 mb-1.5 flex-wrap">
                      {deal.site && <Badge>{deal.site.name}</Badge>}
                      {deal.category && <Badge>{deal.category}</Badge>}
                      {deal.is_featured && <Badge variant="hot">注目</Badge>}
                    </div>
                    <h2 className="font-medium truncate">{deal.title}</h2>
                    {deal.description && (
                      <p className="text-sm text-muted mt-1 line-clamp-2">
                        {deal.description}
                      </p>
                    )}
                    {deal.ends_at && (
                      <p className="text-xs text-muted/70 mt-1.5 flex items-center gap-1">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        {new Date(deal.ends_at).toLocaleDateString("ja-JP")} まで
                      </p>
                    )}
                  </div>
                  {deal.points_amount && (
                    <div className="text-right shrink-0">
                      <p className="font-serif text-2xl font-bold text-primary">
                        {deal.points_amount.toLocaleString()}
                      </p>
                      <p className="text-xs text-muted">
                        {deal.points_currency === "yen" ? "円" : "ポイント"}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {totalCount && totalCount > 10 && (
              <div className="mt-12 text-center">
                <p className="text-muted mb-4">
                  他にも{" "}
                  <span className="font-bold text-foreground">
                    {(totalCount - 10).toLocaleString()}件以上
                  </span>{" "}
                  の案件があります
                </p>
                <Button href="/pricing">
                  プレミアムで全件表示
                </Button>
              </div>
            )}
          </SectionReveal>
        )}
      </div>
    </section>
  );
}
