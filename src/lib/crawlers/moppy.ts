import { BaseCrawler, type CrawledDeal } from "./base-crawler";

export class MoppyCrawler extends BaseCrawler {
  readonly siteSlug = "moppy";
  readonly targetUrl = "https://pc.moppy.jp/ad/list/";

  parseDeals(html: string): CrawledDeal[] {
    const $ = this.loadCheerio(html);
    const deals: CrawledDeal[] = [];

    // NOTE: Selectors below are examples and need to be adjusted
    // based on the actual Moppy page structure.
    // Run the crawler once manually and inspect the HTML to fix selectors.
    $(".ad-list-item, .campaign-item, [data-ad-id]").each((_, el) => {
      const $el = $(el);
      const title = $el.find(".ad-title, .item-title, h3").first().text().trim();
      const externalId = $el.attr("data-ad-id") || $el.find("a").attr("href")?.match(/\/ad\/(\d+)/)?.[1];
      const pointsText = $el.find(".point-value, .ad-point").first().text().trim();
      const points = parseInt(pointsText.replace(/[^0-9]/g, ""), 10);
      const link = $el.find("a").first().attr("href");
      const imageUrl = $el.find("img").first().attr("src");

      if (title && externalId) {
        deals.push({
          external_id: String(externalId),
          title,
          points_amount: isNaN(points) ? undefined : points,
          url: link ? (link.startsWith("http") ? link : `https://pc.moppy.jp${link}`) : undefined,
          image_url: imageUrl,
          category: $el.find(".category, .tag").first().text().trim() || undefined,
        });
      }
    });

    return deals;
  }
}
