import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Badge from "@/components/ui/badge";

interface Props {
  params: Promise<{ slug: string }>;
}

const premiumDir = path.join(process.cwd(), "content/premium");

export async function generateStaticParams() {
  if (!fs.existsSync(premiumDir)) return [];
  return fs
    .readdirSync(premiumDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => ({ slug: f.replace(".mdx", "") }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const filePath = path.join(premiumDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return {};
  const { data } = matter(fs.readFileSync(filePath, "utf-8"));
  return {
    title: data.title,
    description: data.description,
  };
}

export default async function PremiumGuidePage({ params }: Props) {
  const { slug } = await params;
  const filePath = path.join(premiumDir, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <div className="mb-8">
        <div className="flex gap-2 mb-3">
          <Badge variant="premium">プレミアム</Badge>
          {data.difficulty && (
            <Badge>{data.difficulty === "beginner" ? "初級" : data.difficulty === "intermediate" ? "中級" : "上級"}</Badge>
          )}
        </div>
        <h1 className="text-3xl font-bold mb-3">{data.title}</h1>
        <p className="text-gray-600">{data.description}</p>
      </div>

      <div className="prose prose-gray max-w-none">
        <MDXRemote source={content} />
      </div>
    </article>
  );
}
