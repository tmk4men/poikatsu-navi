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
              まずは無料で、稼ぐ体験を
            </h1>
            <p className="text-muted max-w-lg mx-auto leading-relaxed">
              最初の30日間は完全無料。
              <br />
              セルフバック案件で実際に成果を出してから、
              <br className="sm:hidden" />
              続けるか決められます。
            </p>
          </div>

          <SectionReveal>
            {/* Single plan card */}
            <div className="reveal delay-1 relative bg-surface rounded-[var(--radius-lg)] border-2 border-primary p-8 md:p-10 shadow-[var(--shadow-lg)] max-w-lg mx-auto">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full tracking-wider">
                30日間無料
              </span>

              <p className="text-xs text-primary font-medium tracking-widest uppercase mb-2">Premium Plan</p>
              <h2 className="font-serif text-xl font-bold mb-1">プレミアムプラン</h2>

              <div className="mb-2">
                <p className="flex items-baseline gap-1">
                  <span className="font-serif text-4xl font-bold">¥20,000</span>
                  <span className="text-sm text-muted">/月</span>
                </p>
              </div>
              <p className="text-xs text-accent font-medium mb-8">
                ※ 最初の30日間は無料。いつでも解約OK。
              </p>

              <ul className="space-y-3 text-sm mb-8">
                {[
                  "すべてのガイド・攻略法が読み放題",
                  "全案件情報（毎日自動更新）",
                  "高還元案件の速報",
                  "月5万円以上を目指す実践ノウハウ",
                  "セルフバック完全ガイド（初月で成果）",
                  "ブックマーク・お気に入り機能",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Button onClick={handleSubscribe} className="w-full" size="lg">
                初月無料で始める
              </Button>

              <p className="text-xs text-muted text-center mt-4">
                解約後も期間終了まで利用可能です
              </p>
            </div>

            {/* Flow explanation */}
            <div className="reveal delay-2 mt-16 max-w-2xl mx-auto">
              <h2 className="font-serif text-lg font-bold text-center mb-8">ご利用の流れ</h2>
              <div className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "無料登録",
                    desc: "メールアドレスで登録。\nクレジットカード情報を入力しますが、30日間は課金されません。",
                  },
                  {
                    step: "2",
                    title: "初月：セルフバックで稼ぐ",
                    desc: "ガイドに沿ってセルフバック案件を実行。\n初月で確実に成果を体験できます。",
                  },
                  {
                    step: "3",
                    title: "2ヶ月目〜：継続or解約",
                    desc: "成果を実感できたら継続。\n合わなければ30日以内に解約すれば料金はかかりません。",
                  },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="flex gap-4 p-5 bg-surface rounded-[var(--radius-md)] border border-border-light">
                    <div className="w-8 h-8 rounded-full bg-primary-lighter text-primary font-serif text-sm font-bold flex items-center justify-center shrink-0">
                      {step}
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{title}</h3>
                      <p className="text-sm text-muted whitespace-pre-line">{desc}</p>
                    </div>
                  </div>
                ))}
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
                  q: "本当に初月は無料ですか？",
                  a: "はい、最初の30日間は完全無料です。\n登録時にカード情報を入力いただきますが、\n30日以内に解約すれば一切課金されません。",
                },
                {
                  q: "初月でどのくらい稼げますか？",
                  a: "セルフバック案件を中心に進めれば、\n数万円の成果を出すことが可能です。\n具体的な案件と手順はガイドでご案内します。",
                },
                {
                  q: "いつでも解約できますか？",
                  a: "はい、いつでも解約できます。\n解約後も、現在の課金期間の終了まで\nすべてのコンテンツをご利用いただけます。",
                },
                {
                  q: "支払い方法は？",
                  a: "クレジットカード\n（Visa、Mastercard、JCB、American Express）\nでお支払いいただけます。",
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
