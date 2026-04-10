import { NextResponse } from "next/server";
import { DokotokuCrawler } from "@/lib/crawlers/dokotoku";

export const maxDuration = 120; // どこ得は20キーワード×2.5秒 = 最大50秒+パース

export async function GET(request: Request) {
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const crawler = new DokotokuCrawler();
  const result = await crawler.crawl();

  return NextResponse.json(result);
}
