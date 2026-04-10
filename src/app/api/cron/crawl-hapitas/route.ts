import { NextResponse } from "next/server";
import { HapitasCrawler } from "@/lib/crawlers/hapitas";

export async function GET(request: Request) {
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const crawler = new HapitasCrawler();
  const result = await crawler.crawl();

  return NextResponse.json(result);
}
