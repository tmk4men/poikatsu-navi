import { createClient } from "@/lib/supabase/server";
import Card from "@/components/ui/card";
import Badge from "@/components/ui/badge";
import type { Deal } from "@/types/deal";

export const metadata = {
  title: "全案件一覧（プレミアム）",
};

export default async function PremiumDealsPage() {
  const supabase = await createClient();

  const { data: deals } = await supabase
    .from("deals")
    .select("*, site:poikatsu_sites(*)")
    .eq("is_approved", true)
    .order("crawled_at", { ascending: false })
    .limit(100);

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-2xl font-bold mb-2">全案件一覧</h1>
      <p className="text-gray-600 mb-8">
        プレミアム会員限定。すべての案件を閲覧できます。
      </p>

      {!deals || deals.length === 0 ? (
        <Card>
          <p className="text-gray-500 text-center py-8">案件情報は準備中です。</p>
        </Card>
      ) : (
        <div className="space-y-4">
          {(deals as Deal[]).map((deal) => (
            <Card key={deal.id} className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex-1">
                <div className="flex gap-2 mb-1">
                  {deal.site && <Badge>{deal.site.name}</Badge>}
                  {deal.category && <Badge>{deal.category}</Badge>}
                  {deal.is_featured && <Badge variant="hot">注目</Badge>}
                </div>
                <h2 className="font-semibold">{deal.title}</h2>
                {deal.description && (
                  <p className="text-sm text-gray-600 mt-1">{deal.description}</p>
                )}
                {deal.ends_at && (
                  <p className="text-xs text-gray-500 mt-1">
                    期限: {new Date(deal.ends_at).toLocaleDateString("ja-JP")}
                  </p>
                )}
              </div>
              {deal.points_amount && (
                <div className="text-right shrink-0">
                  <p className="text-2xl font-bold text-primary">
                    {deal.points_amount.toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-500">
                    {deal.points_currency === "yen" ? "円" : "ポイント"}
                  </p>
                </div>
              )}
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
