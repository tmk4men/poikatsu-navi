import { NextResponse } from "next/server";
import { MacromillCrawler } from "@/lib/crawlers/macromill";

export async function GET(request: Request) {
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const crawler = new MacromillCrawler();
  const result = await crawler.crawl();

  return NextResponse.json(result);
}
