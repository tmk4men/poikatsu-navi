export const PLANS = {
  free: {
    name: "無料プラン",
    description: "基本的なポイ活ガイドと一部の案件情報",
    price: 0,
    features: [
      "初心者向けガイド閲覧",
      "案件情報（一部）",
      "基本的なポイ活ノウハウ",
    ],
  },
  premium: {
    name: "プレミアムプラン",
    description: "すべてのガイドと案件情報にアクセス",
    price: 980,
    priceId: process.env.STRIPE_PRICE_ID!,
    features: [
      "すべてのガイド閲覧",
      "全案件情報（毎日更新）",
      "高還元案件の速報",
      "詳細な攻略法",
      "ブックマーク機能",
    ],
  },
} as const;
