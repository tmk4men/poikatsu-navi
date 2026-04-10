import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Badge from "@/components/ui/badge";
import Button from "@/components/ui/button";

interface Props {
  params: Promise<{ slug: string }>;
}

const guidesDir = path.join(process.cwd(), "content/guides");

export async function generateStaticParams() {
  if (!fs.existsSync(guidesDir)) return [];
  return fs
    .readdirSync(guidesDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => ({ slug: f.replace(".mdx", "") }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const filePath = path.join(guidesDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return {};
  const { data } = matter(fs.readFileSync(filePath, "utf-8"));
  return {
    title: data.title,
    description: data.description,
  };
}

const difficultyLabel: Record<string, string> = {
  beginner: "初級",
  intermediate: "中級",
  advanced: "上級",
};

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const filePath = path.join(guidesDir, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  if (data.isPremium) {
    notFound();
  }

  return (
    <article className="py-16 md:py-24 px-5">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-12">
          <div className="flex gap-2 mb-4 flex-wrap">
            <Badge>{difficultyLabel[data.difficulty] ?? "初級"}</Badge>
            {data.site && <Badge>{data.site}</Badge>}
          </div>
          <h1 className="font-serif text-[clamp(1.5rem,4vw,2.25rem)] font-bold leading-tight mb-4">
            {data.title}
          </h1>
          <p className="text-muted leading-relaxed">
            {data.description}
          </p>
          <div className="mt-6 h-[1px] bg-border" />
        </div>

        {/* MDX content */}
        <div className="prose">
          <MDXRemote source={content} />
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-surface-alt rounded-[var(--radius-lg)] p-8 text-center">
          <p className="font-serif text-lg font-bold mb-2">
            もっと詳しく知りたい方へ
          </p>
          <p className="text-sm text-muted mb-6">
            プレミアムプランで、
            <br className="sm:hidden" />
            すべてのガイドと案件情報にアクセスできます。
          </p>
          <Button href="/pricing" size="md">
            プランを見る
          </Button>
        </div>
      </div>
    </article>
  );
}
