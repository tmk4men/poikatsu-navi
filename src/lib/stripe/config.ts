export const PLANS = {
  free: {
    name: "無料体験",
    description: "最初の1ヶ月は無料。セルフバックで実際に稼ぐ体験を。",
    price: 0,
    features: [
      "セルフバック案件の完全ガイド",
      "初月で成果を出すためのロードマップ",
      "基本的なポイ活ノウハウ",
    ],
  },
  premium: {
    name: "プレミアムプラン",
    description: "すべてのガイド・案件情報・攻略法にフルアクセス",
    price: 20000,
    priceId: process.env.STRIPE_PRICE_ID!,
    trialDays: 30,
    features: [
      "すべてのガイド・攻略法が読み放題",
      "全案件情報（毎日自動更新）",
      "高還元案件の速報",
      "月5万円以上を目指す実践ノウハウ",
      "ブックマーク・お気に入り機能",
    ],
  },
} as const;
