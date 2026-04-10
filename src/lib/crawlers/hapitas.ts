import { BaseCrawler, type CrawledDeal } from "./base-crawler";

export class HapitasCrawler extends BaseCrawler {
  readonly siteSlug = "hapitas";
  readonly targetUrl = "https://hapitas.jp/service/";

  parseDeals(html: string): CrawledDeal[] {
    const $ = this.loadCheerio(html);
    const deals: CrawledDeal[] = [];

    // NOTE: Selectors need adjustment based on actual Hapitas HTML structure.
    $(".service-item, .item-box, [data-service-id]").each((_, el) => {
      const $el = $(el);
      const title = $el.find(".service-name, .item-title, h3").first().text().trim();
      const externalId = $el.attr("data-service-id") || $el.find("a").attr("href")?.match(/\/service\/(\d+)/)?.[1];
      const pointsText = $el.find(".point, .pt-value").first().text().trim();
      const points = parseInt(pointsText.replace(/[^0-9]/g, ""), 10);
      const link = $el.find("a").first().attr("href");
      const imageUrl = $el.find("img").first().attr("src");

      if (title && externalId) {
        deals.push({
          external_id: String(externalId),
          title,
          points_amount: isNaN(points) ? undefined : points,
          url: link ? (link.startsWith("http") ? link : `https://hapitas.jp${link}`) : undefined,
          image_url: imageUrl,
        });
      }
    });

    return deals;
  }
}
