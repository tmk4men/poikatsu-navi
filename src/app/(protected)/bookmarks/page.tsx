import { createClient } from "@/lib/supabase/server";
import Card from "@/components/ui/card";
import Badge from "@/components/ui/badge";
import type { Deal } from "@/types/deal";

export const metadata = {
  title: "ブックマーク",
};

export default async function BookmarksPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: bookmarks } = await supabase
    .from("bookmarks")
    .select("*, deal:deals(*, site:poikatsu_sites(*))")
    .eq("user_id", user!.id)
    .order("created_at", { ascending: false });

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-2xl font-bold mb-8">ブックマーク</h1>

      {!bookmarks || bookmarks.length === 0 ? (
        <Card>
          <p className="text-gray-500 text-center py-8">
            まだブックマークした案件がありません。
          </p>
        </Card>
      ) : (
        <div className="space-y-4">
          {bookmarks.map((bm) => {
            const deal = bm.deal as unknown as Deal;
            if (!deal) return null;
            return (
              <Card key={bm.id} className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-1">
                  <div className="flex gap-2 mb-1">
                    {deal.site && <Badge>{deal.site.name}</Badge>}
                  </div>
                  <h2 className="font-semibold">{deal.title}</h2>
                </div>
                {deal.points_amount && (
                  <div className="text-right shrink-0">
                    <p className="text-xl font-bold text-primary">
                      {deal.points_amount.toLocaleString()} pt
                    </p>
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
