import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://poikatsu-navi.com";

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/guides`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/deals`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/legal`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Guide pages from MDX files
  const guidesDir = path.join(process.cwd(), "content/guides");
  let guidePages: MetadataRoute.Sitemap = [];

  if (fs.existsSync(guidesDir)) {
    guidePages = fs
      .readdirSync(guidesDir)
      .filter((f) => f.endsWith(".mdx"))
      .map((file) => {
        const raw = fs.readFileSync(path.join(guidesDir, file), "utf-8");
        const { data } = matter(raw);
        const slug = file.replace(".mdx", "");

        return {
          url: `${baseUrl}/guides/${slug}`,
          lastModified: data.publishedAt ? new Date(data.publishedAt) : new Date(),
          changeFrequency: "monthly" as const,
          priority: 0.7,
        };
      });
  }

  return [...staticPages, ...guidePages];
}
