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
        <div className="mx-auto max-w-5xl">
          <SectionReveal>
            <div className="reveal md:grid md:grid-cols-[1fr_1fr] md:gap-12 md:items-start">
              {/* Left */}
              <div className="mb-10 md:mb-0">
                <p className="text-primary text-[13px] font-medium tracking-wide mb-3">
                  ── 料金
                </p>
                <h1 className="font-serif text-[clamp(1.5rem,3.5vw,2.25rem)] font-bold leading-snug mb-5">
                  初月は無料です。
                  <br />
                  稼いでから決めて
                  <br />
                  ください。
                </h1>
                <p className="text-sm text-muted leading-[1.9] max-w-sm mb-8">
                  最初の30日間でセルフバック案件を実行すれば、
                  月額以上の成果を出せるように設計しています。
                  成果が出なければ解約するだけです。
                </p>

                {/* Flow */}
                <div className="space-y-3">
                  {[
                    { step: "1", title: "無料登録", desc: "メールアドレスだけ。30秒で完了。" },
                    { step: "2", title: "初月：セルフバックで稼ぐ", desc: "ガイド通りに進めて、確実に成果を出す。" },
                    { step: "3", title: "続ける or 解約", desc: "30日以内なら料金ゼロ。" },
                  ].map(({ step, title, desc }) => (
                    <div key={step} className="flex gap-3 items-start">
                      <span className="w-6 h-6 rounded-full bg-surface-alt text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {step}
                      </span>
                      <div>
                        <p className="text-sm font-medium">{title}</p>
                        <p className="text-[12px] text-muted">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: card */}
              <div className="reveal anim-d2 bg-surface rounded-[var(--radius-xl)] border border-border-light shadow-[var(--shadow-lg)] p-7 md:p-9">
                <div className="flex items-baseline justify-between mb-5">
                  <div>
                    <p className="text-[11px] text-muted tracking-widest uppercase mb-1">Premium</p>
                    <p className="font-serif text-3xl font-bold">
                      ¥20,000<span className="text-sm font-normal text-muted">/月</span>
                    </p>
                  </div>
                  <span className="bg-accent text-white text-[11px] font-bold px-3 py-1 rounded-full">
                    30日無料
                  </span>
                </div>

                <div className="h-[1px] bg-border-light mb-5" />

                <ul className="space-y-2.5 text-[13px] mb-7">
                  {[
                    "すべてのガイド・攻略法",
                    "全案件情報（毎日自動更新）",
                    "セルフバック完全ガイド",
                    "高還元案件の速報",
                    "ブックマーク機能",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Button onClick={handleSubscribe} className="w-full">
                  初月無料で始める
                </Button>

                <p className="text-[11px] text-muted text-center mt-3">
                  いつでも解約OK
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* FAQ */}
      <SectionReveal>
        <section className="py-16 px-5 bg-surface-alt">
          <div className="reveal mx-auto max-w-2xl">
            <p className="text-primary text-[13px] font-medium tracking-wide mb-6">
              ── よくある質問
            </p>

            <div className="space-y-0 border border-border-light rounded-[var(--radius-lg)] overflow-hidden divide-y divide-border-light">
              {[
                {
                  q: "本当に初月無料ですか？",
                  a: "はい。30日以内に解約すれば一切料金はかかりません。カード情報は登録いただきますが、課金は31日目からです。",
                },
                {
                  q: "初月でどのくらい稼げますか？",
                  a: "セルフバック案件を中心に進めれば、数万円の成果を出せます。楽天カード発行だけでも9,000円です。",
                },
                {
                  q: "ポイ活の経験がなくても大丈夫ですか？",
                  a: "大丈夫です。「ポイ活って何？」から始められるガイドを用意しています。画面を見ながらそのまま進めるだけです。",
                },
                {
                  q: "解約はすぐにできますか？",
                  a: "はい。設定画面からいつでも解約できます。解約後も課金期間の終了までコンテンツを利用できます。",
                },
              ].map(({ q, a }) => (
                <details key={q} className="group bg-surface">
                  <summary className="px-5 py-4 cursor-pointer text-sm font-medium flex items-center justify-between transition-colors hover:text-primary">
                    {q}
                    <svg className="w-4 h-4 text-muted shrink-0 ml-4 transition-transform duration-300 group-open:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </summary>
                  <p className="px-5 pb-4 text-[13px] text-muted leading-[1.85]">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>
    </>
  );
}
