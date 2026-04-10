import * as cheerio from "cheerio";
import { createAdminClient } from "@/lib/supabase/admin";

/**
 * どこ得クローラー
 *
 * どこ得は複数ポイントサイトを横断検索できるため、
 * 人気キーワードで検索 → 全サイトの還元額を比較取得する。
 *
 * HTML構造:
 *   <table>
 *     <tr>
 *       <td class="cashback">9,000 円</td>
 *       <td class="site-name"><a href="...">ハピタス</a></td>
 *       <td class="device">s</td>
 *       <td class="article"><a href="...">楽天カード</a></td>
 *     </tr>
 *   </table>
 */

// 人気の検索キーワード（定期的に見直し）
const SEARCH_KEYWORDS = [
  "楽天カード",
  "三井住友カード",
  "PayPayカード",
  "dカード",
  "au PAY カード",
  "U-NEXT",
  "楽天市場",
  "SBI証券",
  "楽天証券",
  "コインチェック",
  "DMM Bitcoin",
  "食べログ",
  "ホットペッパービューティー",
  "じゃらん",
  "楽天トラベル",
  "dマガジン",
  "Audible",
  "メルカリ",
  "LOHACO",
  "Yahoo!ショッピング",
];

interface DokotokuDeal {
  keyword: string;
  cashback: string;
  cashbackYen: number;
  siteName: string;
  device: string;
  articleTitle: string;
}

const DELAY_MS = 2500; // どこ得への配慮: 2.5秒間隔

export class DokotokuCrawler {
  private readonly baseUrl = "https://dokotoku.jp/";
  private readonly userAgent =
    "PoikatsuNavi-Bot/1.0 (educational; +https://poikatsu-navi.com)";

  async crawl(): Promise<{ success: boolean; message: string }> {
    const supabase = createAdminClient();
    const startedAt = new Date().toISOString();

    try {
      // robots.txt確認
      const robotsOk = await this.checkRobotsTxt();
      if (!robotsOk) {
        await this.logCrawl(supabase, "error", 0, 0, 0, "Blocked by robots.txt", startedAt);
        return { success: false, message: "Blocked by robots.txt" };
      }

      // どこ得サイトレコード取得（なければ作成）
      let { data: site } = await supabase
        .from("poikatsu_sites")
        .select("id")
        .eq("slug", "dokotoku")
        .single();

      if (!site) {
        const { data: newSite } = await supabase
          .from("poikatsu_sites")
          .insert({
            slug: "dokotoku",
            name: "どこ得？（横断検索）",
            url: "https://dokotoku.jp",
            description: "複数ポイントサイトの案件を横断検索・比較",
            is_active: true,
          })
          .select("id")
          .single();
        site = newSite;
      }

      if (!site) {
        await this.logCrawl(supabase, "error", 0, 0, 0, "Failed to get/create site record", startedAt);
        return { success: false, message: "Failed to get/create site record" };
      }

      let totalFound = 0;
      let totalNew = 0;
      let totalUpdated = 0;

      for (const keyword of SEARCH_KEYWORDS) {
        try {
          const deals = await this.searchKeyword(keyword);
          totalFound += deals.length;

          // 各キーワードの上位5件だけ保存（データ量を抑制）
          const topDeals = deals.slice(0, 5);

          for (const deal of topDeals) {
            const externalId = `${keyword}_${deal.siteName}_${deal.articleTitle}`.substring(0, 200);

            const { data: existing } = await supabase
              .from("deals")
              .select("id")
              .eq("site_id", site.id)
              .eq("external_id", externalId)
              .single();

            const dealData = {
              title: deal.articleTitle,
              description: `${deal.siteName}経由で${deal.cashback}還元`,
              points_amount: Math.round(deal.cashbackYen),
              points_currency: "yen",
              yen_equivalent: Math.round(deal.cashbackYen),
              category: this.guessCategory(keyword),
              url: this.baseUrl + "?q=" + encodeURIComponent(keyword),
              crawled_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
            };

            if (existing) {
              await supabase.from("deals").update(dealData).eq("id", existing.id);
              totalUpdated++;
            } else {
              await supabase.from("deals").insert({
                site_id: site.id,
                external_id: externalId,
                ...dealData,
                is_approved: false,
                is_premium: false,
              });
              totalNew++;
            }
          }
        } catch (err) {
          // キーワード単位のエラーはスキップして続行
          console.error(`Failed to crawl keyword: ${keyword}`, err);
        }

        await this.delay();
      }

      await this.logCrawl(supabase, "success", totalFound, totalNew, totalUpdated, null, startedAt);
      return {
        success: true,
        message: `Crawled ${SEARCH_KEYWORDS.length} keywords. Found ${totalFound} deals (${totalNew} new, ${totalUpdated} updated)`,
      };
    } catch (error) {
      const msg = error instanceof Error ? error.message : "Unknown error";
      await this.logCrawl(supabase, "error", 0, 0, 0, msg, startedAt);
      return { success: false, message: msg };
    }
  }

  private async searchKeyword(keyword: string): Promise<DokotokuDeal[]> {
    const url = `${this.baseUrl}?q=${encodeURIComponent(keyword)}`;
    const res = await fetch(url, {
      headers: {
        "User-Agent": this.userAgent,
        Accept: "text/html",
      },
    });

    if (!res.ok) throw new Error(`HTTP ${res.status}: ${url}`);

    const html = await res.text();
    const $ = cheerio.load(html);
    const deals: DokotokuDeal[] = [];

    $("table tr").each((_, el) => {
      const $tr = $(el);
      const cashbackText = $tr.find("td.cashback").text().trim();
      const siteName = $tr.find("td.site-name a").text().trim() || $tr.find("td.site-name").text().trim();
      const device = $tr.find("td.device").text().trim();
      const articleTitle = $tr.find("td.article a").text().trim() || $tr.find("td.article").text().trim();

      if (!cashbackText || !siteName || !articleTitle) return;

      // 「9,000 円」→ 9000、「5.5 %」→ スキップ（円のみ対象）
      const yenMatch = cashbackText.match(/([\d,.]+)\s*円/);
      if (!yenMatch) return;

      const cashbackYen = parseFloat(yenMatch[1].replace(/,/g, ""));
      if (isNaN(cashbackYen)) return;

      deals.push({
        keyword,
        cashback: cashbackText,
        cashbackYen,
        siteName,
        device,
        articleTitle,
      });
    });

    return deals;
  }

  private guessCategory(keyword: string): string {
    const categories: Record<string, string[]> = {
      "クレジットカード": ["カード", "CARD"],
      "証券・投資": ["証券", "Bitcoin", "コインチェック"],
      "ショッピング": ["楽天市場", "Yahoo!", "LOHACO", "メルカリ"],
      "動画・音楽": ["U-NEXT", "Audible", "dマガジン"],
      "旅行": ["じゃらん", "楽天トラベル"],
      "グルメ・美容": ["食べログ", "ホットペッパー"],
    };

    for (const [category, keywords] of Object.entries(categories)) {
      if (keywords.some((k) => keyword.includes(k))) {
        return category;
      }
    }
    return "その他";
  }

  private async checkRobotsTxt(): Promise<boolean> {
    try {
      const res = await fetch("https://dokotoku.jp/robots.txt");
      if (!res.ok) return true;
      const text = await res.text();
      // /link/ のみ Disallow — 検索ページ (/?q=) は許可されている
      const lines = text.split("\n");
      let isRelevant = false;
      for (const line of lines) {
        const trimmed = line.trim().toLowerCase();
        if (trimmed.startsWith("user-agent:")) {
          const agent = trimmed.split(":")[1]?.trim();
          isRelevant = agent === "*";
        }
        if (isRelevant && trimmed.startsWith("disallow:")) {
          const disallowed = trimmed.split(":")[1]?.trim();
          // /?q= は /link/ ではないのでOK
          if (disallowed === "/") return false;
        }
      }
      return true;
    } catch {
      return true;
    }
  }

  private delay(): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, DELAY_MS));
  }

  private async logCrawl(
    supabase: ReturnType<typeof createAdminClient>,
    status: string,
    found: number,
    newDeals: number,
    updated: number,
    error: string | null,
    startedAt: string
  ) {
    await supabase.from("crawl_logs").insert({
      site_slug: "dokotoku",
      status,
      deals_found: found,
      deals_new: newDeals,
      deals_updated: updated,
      error_message: error,
      started_at: startedAt,
      finished_at: new Date().toISOString(),
    });
  }
}
