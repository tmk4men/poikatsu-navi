import { BaseCrawler, type CrawledDeal } from "./base-crawler";

export class MacromillCrawler extends BaseCrawler {
  readonly siteSlug = "macromill";
  readonly targetUrl = "https://monitor.macromill.com/";

  parseDeals(html: string): CrawledDeal[] {
    const $ = this.loadCheerio(html);
    const deals: CrawledDeal[] = [];

    // NOTE: Macromill is a survey platform, structure may differ.
    // Selectors need adjustment based on actual page HTML.
    $(".survey-item, .campaign-item, .service-item").each((_, el) => {
      const $el = $(el);
      const title = $el.find("h3, .title, .survey-title").first().text().trim();
      const externalId = $el.attr("data-id") || $el.find("a").attr("href")?.match(/\/(\d+)/)?.[1];
      const pointsText = $el.find(".point, .reward").first().text().trim();
      const points = parseInt(pointsText.replace(/[^0-9]/g, ""), 10);

      if (title && externalId) {
        deals.push({
          external_id: String(externalId),
          title,
          points_amount: isNaN(points) ? undefined : points,
          category: "アンケート",
        });
      }
    });

    return deals;
  }
}
