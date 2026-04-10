export interface GuideMeta {
  slug: string;
  title: string;
  description: string;
  site?: string;
  isPremium: boolean;
  difficulty: "beginner" | "intermediate" | "advanced";
  sortOrder: number;
  publishedAt: string;
}

export interface Guide extends GuideMeta {
  content: string;
}
