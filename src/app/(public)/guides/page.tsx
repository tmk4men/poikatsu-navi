import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Badge from "@/components/ui/badge";
import SectionReveal from "@/components/ui/section-reveal";
import type { GuideMeta } from "@/types/guide";

export const metadata = {
  title: "ガイド一覧",
  description:
    "ポイ活初心者向けのガイド一覧。ステップバイステップで丁寧に解説します。",
};

function getGuides(): GuideMeta[] {
  const guidesDir = path.join(process.cwd(), "content/guides");
  if (!fs.existsSync(guidesDir)) return [];

  const files = fs.readdirSync(guidesDir).filter((f) => f.endsWith(".mdx"));

  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(guidesDir, file), "utf-8");
      const { data } = matter(raw);
      return {
        slug: file.replace(".mdx", ""),
        title: data.title ?? "",
        description: data.description ?? "",
        site: data.site,
        isPremium: data.isPremium ?? false,
        difficulty: data.difficulty ?? "beginner",
        sortOrder: data.sortOrder ?? 0,
        publishedAt: data.publishedAt ?? "",
      } satisfies GuideMeta;
    })
    .sort((a, b) => a.sortOrder - b.sortOrder);
}

const difficultyLabel = {
  beginner: "初級",
  intermediate: "中級",
  advanced: "上級",
};

export default function GuidesPage() {
  const guides = getGuides();

  return (
    <section className="py-16 md:py-24 px-5">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12">
          <p className="text-primary text-sm font-medium tracking-wider mb-3">GUIDES</p>
          <h1 className="font-serif text-[clamp(1.75rem,4vw,2.5rem)] font-bold mb-3">
            ポイ活ガイド
          </h1>
          <p className="text-muted leading-relaxed">
            はじめてでも安心。
            <br className="sm:hidden" />
            ステップバイステップで丁寧に解説します。
          </p>
        </div>

        {guides.length === 0 ? (
          <div className="text-center py-16 bg-surface-alt rounded-[var(--radius-lg)]">
            <p className="text-muted">ガイドは近日公開予定です。</p>
          </div>
        ) : (
          <SectionReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {guides.map((guide, i) => (
                <Link
                  key={guide.slug}
                  href={
                    guide.isPremium
                      ? `/premium/guides/${guide.slug}`
                      : `/guides/${guide.slug}`
                  }
                >
                  <div
                    className={`reveal delay-${i + 1} group bg-surface rounded-[var(--radius-lg)] border border-border-light p-6 md:p-8 transition-all duration-300 hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 h-full`}
                  >
                    <div className="flex gap-2 mb-3 flex-wrap">
                      <Badge>{difficultyLabel[guide.difficulty]}</Badge>
                      {guide.isPremium && (
                        <Badge variant="premium">プレミアム</Badge>
                      )}
                      {guide.site && <Badge>{guide.site}</Badge>}
                    </div>

                    <h2 className="font-serif text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                      {guide.title}
                    </h2>
                    <p className="text-sm text-muted leading-relaxed">
                      {guide.description}
                    </p>

                    {/* Read more arrow */}
                    <div className="mt-4 flex items-center gap-1 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      読む
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </SectionReveal>
        )}
      </div>
    </section>
  );
}
