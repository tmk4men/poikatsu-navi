import * as cheerio from "cheerio";
import { createAdminClient } from "@/lib/supabase/admin";

export interface CrawledDeal {
  external_id: string;
  title: string;
  description?: string;
  points_amount?: number;
  points_currency?: string;
  yen_equivalent?: number;
  category?: string;
  url?: string;
  image_url?: string;
  starts_at?: string;
  ends_at?: string;
}

export abstract class BaseCrawler {
  abstract readonly siteSlug: string;
  abstract readonly targetUrl: string;
  protected delayMs = 2000;

  abstract parseDeals(html: string): CrawledDeal[];

  async crawl(): Promise<{ success: boolean; message: string }> {
    const supabase = createAdminClient();
    const startedAt = new Date().toISOString();

    try {
      // Check robots.txt
      const robotsOk = await this.checkRobotsTxt();
      if (!robotsOk) {
        await this.logCrawl(supabase, "error", 0, 0, 0, "Blocked by robots.txt", startedAt);
        return { success: false, message: "Blocked by robots.txt" };
      }

      // Fetch page
      const html = await this.fetchPage(this.targetUrl);
      const deals = this.parseDeals(html);

      // Get site_id
      const { data: site } = await supabase
        .from("poikatsu_sites")
        .select("id")
        .eq("slug", this.siteSlug)
        .single();

      if (!site) {
        await this.logCrawl(supabase, "error", 0, 0, 0, "Site not found in DB", startedAt);
        return { success: false, message: "Site not found" };
      }

      let newCount = 0;
      let updatedCount = 0;

      for (const deal of deals) {
        const { data: existing } = await supabase
          .from("deals")
          .select("id")
          .eq("site_id", site.id)
          .eq("external_id", deal.external_id)
          .single();

        if (existing) {
          await supabase
            .from("deals")
            .update({
              title: deal.title,
              description: deal.description,
              points_amount: deal.points_amount,
              points_currency: deal.points_currency ?? "pt",
              yen_equivalent: deal.yen_equivalent,
              category: deal.category,
              url: deal.url,
              image_url: deal.image_url,
              starts_at: deal.starts_at,
              ends_at: deal.ends_at,
              crawled_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
            })
            .eq("id", existing.id);
          updatedCount++;
        } else {
          await supabase.from("deals").insert({
            site_id: site.id,
            external_id: deal.external_id,
            title: deal.title,
            description: deal.description,
            points_amount: deal.points_amount,
            points_currency: deal.points_currency ?? "pt",
            yen_equivalent: deal.yen_equivalent,
            category: deal.category,
            url: deal.url,
            image_url: deal.image_url,
            starts_at: deal.starts_at,
            ends_at: deal.ends_at,
            is_approved: false,
          });
          newCount++;
        }

        await this.delay();
      }

      await this.logCrawl(supabase, "success", deals.length, newCount, updatedCount, null, startedAt);
      return {
        success: true,
        message: `Found ${deals.length} deals (${newCount} new, ${updatedCount} updated)`,
      };
    } catch (error) {
      const msg = error instanceof Error ? error.message : "Unknown error";
      await this.logCrawl(supabase, "error", 0, 0, 0, msg, startedAt);
      return { success: false, message: msg };
    }
  }

  protected async fetchPage(url: string): Promise<string> {
    const res = await fetch(url, {
      headers: {
        "User-Agent": "PoikatsuNavi-Bot/1.0 (educational; +https://poikatsu-navi.com)",
        Accept: "text/html",
      },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}: ${url}`);
    return res.text();
  }

  protected async checkRobotsTxt(): Promise<boolean> {
    try {
      const url = new URL(this.targetUrl);
      const robotsUrl = `${url.protocol}//${url.host}/robots.txt`;
      const res = await fetch(robotsUrl);
      if (!res.ok) return true; // No robots.txt = allowed
      const text = await res.text();
      const targetPath = url.pathname;
      const lines = text.split("\n");
      let isRelevant = false;

      for (const line of lines) {
        const trimmed = line.trim().toLowerCase();
        if (trimmed.startsWith("user-agent:")) {
          const agent = trimmed.split(":")[1]?.trim();
          isRelevant = agent === "*" || agent === "poikatsunavi-bot";
        }
        if (isRelevant && trimmed.startsWith("disallow:")) {
          const disallowed = trimmed.split(":")[1]?.trim();
          if (disallowed && targetPath.startsWith(disallowed)) {
            return false;
          }
        }
      }
      return true;
    } catch {
      return true;
    }
  }

  protected loadCheerio(html: string) {
    return cheerio.load(html);
  }

  protected delay(): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, this.delayMs));
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
      site_slug: this.siteSlug,
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
