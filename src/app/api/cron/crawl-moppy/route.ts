import { NextResponse } from "next/server";
import { MoppyCrawler } from "@/lib/crawlers/moppy";

export async function GET(request: Request) {
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const crawler = new MoppyCrawler();
  const result = await crawler.crawl();

  return NextResponse.json(result);
}
