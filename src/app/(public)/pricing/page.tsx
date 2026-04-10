"use client";

import Button from "@/components/ui/button";
import SectionReveal from "@/components/ui/section-reveal";

export default function PricingPage() {
  async function handleSubscribe() {
    const res = await fetch("/api/stripe/checkout", { method: "POST" });
    const { url } = await res.json();
    if (url) window.location.href = url;
  }

  return (
    <>
      <section className="py-16 md:py-24 px-5">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-medium tracking-wider mb-3">PRICING</p>
            <h1 className="font-serif text-[clamp(1.75rem,4vw,2.5rem)] font-bold mb-4">
              料金プラン
            </h1>
            <p className="text-muted max-w-md mx-auto leading-relaxed">
              まずは無料で始めて、
              <br className="sm:hidden" />
              もっと詳しく知りたくなったら
              <br />
              プレミアムへアップグレード。
            </p>
          </div>

          <SectionReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {/* Free plan */}
              <div className="reveal delay-1 bg-surface rounded-[var(--radius-lg)] border border-border-light p-8">
                <p className="text-xs text-muted font-medium tracking-widest uppercase mb-2">Free</p>
                <h2 className="font-serif text-xl font-bold mb-1">無料プラン</h2>
                <p className="flex items-baseline gap-1 mb-8">
                  <span className="font-serif text-4xl font-bold">¥0</span>
                  <span className="text-sm text-muted">/月</span>
                </p>

                <ul className="space-y-3 text-sm mb-8">
                  {["初心者向けガイド閲覧", "案件情報（一部）", "基本的なポイ活ノウハウ"].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-success shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Button href="/signup" variant="outline" className="w-full">
                  無料で登録
                </Button>
              </div>

              {/* Premium plan */}
              <div className="reveal delay-2 relative bg-surface rounded-[var(--radius-lg)] border-2 border-primary p-8 shadow-[var(--shadow-lg)]">
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full tracking-wider">
                  おすすめ
                </span>

                <p className="text-xs text-primary font-medium tracking-widest uppercase mb-2">Premium</p>
                <h2 className="font-serif text-xl font-bold mb-1">プレミアムプラン</h2>
                <p className="flex items-baseline gap-1 mb-8">
                  <span className="font-serif text-4xl font-bold">¥980</span>
                  <span className="text-sm text-muted">/月</span>
                </p>

                <ul className="space-y-3 text-sm mb-8">
                  {["すべてのガイド閲覧", "全案件情報（毎日更新）", "高還元案件の速報", "詳細な攻略法", "ブックマーク機能"].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Button onClick={handleSubscribe} className="w-full">
                  プレミアムで始める
                </Button>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* FAQ */}
      <SectionReveal>
        <section className="py-16 px-5 bg-surface-alt">
          <div className="reveal mx-auto max-w-2xl">
            <h2 className="font-serif text-xl font-bold text-center mb-8">よくある質問</h2>
            <div className="space-y-3">
              {[
                {
                  q: "いつでも解約できますか？",
                  a: "はい、いつでも解約できます。\n解約後も、現在の課金期間の終了まではプレミアムコンテンツをご利用いただけます。",
                },
                {
                  q: "支払い方法は？",
                  a: "クレジットカード\n（Visa、Mastercard、JCB、American Express）\nでお支払いいただけます。",
                },
                {
                  q: "無料プランでも使えますか？",
                  a: "はい。基本的なポイ活ガイドと一部の案件情報は、\n無料プランでもご覧いただけます。",
                },
              ].map(({ q, a }) => (
                <details
                  key={q}
                  className="group bg-surface rounded-[var(--radius-md)] border border-border-light overflow-hidden"
                >
                  <summary className="px-6 py-4 cursor-pointer font-medium text-sm flex items-center justify-between transition-colors hover:text-primary">
                    {q}
                    <svg
                      className="w-4 h-4 text-muted shrink-0 ml-4 transition-transform duration-300 group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  </summary>
                  <p className="px-6 pb-4 text-sm text-muted leading-relaxed whitespace-pre-line">
                    {a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>
    </>
  );
}
