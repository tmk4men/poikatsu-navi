"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import Card from "@/components/ui/card";
import Badge from "@/components/ui/badge";
import Button from "@/components/ui/button";
import type { Deal } from "@/types/deal";

export default function AdminDealsPage() {
  const [deals, setDeals] = useState<Deal[]>([]);
  const [filter, setFilter] = useState<"pending" | "approved" | "all">("pending");

  useEffect(() => {
    loadDeals();
  }, [filter]);

  async function loadDeals() {
    const supabase = createClient();
    let query = supabase.from("deals").select("*, site:poikatsu_sites(*)").order("crawled_at", { ascending: false }).limit(50);

    if (filter === "pending") query = query.eq("is_approved", false);
    if (filter === "approved") query = query.eq("is_approved", true);

    const { data } = await query;
    setDeals((data as Deal[]) ?? []);
  }

  async function approveDeal(id: number) {
    const supabase = createClient();
    await supabase.from("deals").update({ is_approved: true }).eq("id", id);
    loadDeals();
  }

  async function togglePremium(id: number, current: boolean) {
    const supabase = createClient();
    await supabase.from("deals").update({ is_premium: !current }).eq("id", id);
    loadDeals();
  }

  async function toggleFeatured(id: number, current: boolean) {
    const supabase = createClient();
    await supabase.from("deals").update({ is_featured: !current }).eq("id", id);
    loadDeals();
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-2xl font-bold mb-4">案件管理</h1>

      <div className="flex gap-2 mb-6">
        {(["pending", "approved", "all"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === f ? "bg-primary text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {f === "pending" ? "未承認" : f === "approved" ? "承認済み" : "すべて"}
          </button>
        ))}
      </div>

      {deals.length === 0 ? (
        <p className="text-gray-500">該当する案件がありません。</p>
      ) : (
        <div className="space-y-4">
          {deals.map((deal) => (
            <Card key={deal.id} className="flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="flex-1">
                <div className="flex gap-2 mb-1 flex-wrap">
                  {deal.site && <Badge>{deal.site.name}</Badge>}
                  {deal.is_approved ? (
                    <Badge variant="new">承認済み</Badge>
                  ) : (
                    <Badge variant="hot">未承認</Badge>
                  )}
                  {deal.is_premium && <Badge variant="premium">プレミアム</Badge>}
                  {deal.is_featured && <Badge variant="hot">注目</Badge>}
                </div>
                <h2 className="font-semibold">{deal.title}</h2>
                {deal.description && (
                  <p className="text-sm text-gray-600 mt-1">{deal.description}</p>
                )}
                {deal.points_amount && (
                  <p className="text-sm font-medium text-primary mt-1">
                    {deal.points_amount.toLocaleString()} {deal.points_currency}
                  </p>
                )}
                <p className="text-xs text-gray-400 mt-1">
                  取得: {new Date(deal.crawled_at).toLocaleString("ja-JP")}
                </p>
              </div>
              <div className="flex gap-2 shrink-0 flex-wrap">
                {!deal.is_approved && (
                  <Button onClick={() => approveDeal(deal.id)} size="sm">
                    承認
                  </Button>
                )}
                <Button
                  onClick={() => togglePremium(deal.id, deal.is_premium)}
                  variant="outline"
                  size="sm"
                >
                  {deal.is_premium ? "無料に変更" : "プレミアムに"}
                </Button>
                <Button
                  onClick={() => toggleFeatured(deal.id, deal.is_featured)}
                  variant="ghost"
                  size="sm"
                >
                  {deal.is_featured ? "注目解除" : "注目に"}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
