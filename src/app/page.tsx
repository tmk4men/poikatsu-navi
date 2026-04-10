import Link from "next/link";
import Button from "@/components/ui/button";
import SectionReveal from "@/components/ui/section-reveal";

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden bg-background">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-[10%] w-[320px] h-[320px] bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-[5%] w-[200px] h-[200px] bg-accent/5 rounded-full blur-2xl" />
        </div>

        <div className="mx-auto max-w-5xl px-5 pt-16 pb-20 md:pt-28 md:pb-28">
          <div className="md:grid md:grid-cols-[1.1fr_0.9fr] md:gap-16 md:items-center">
            {/* Left: Copy */}
            <div>
              <p className="animate-fade-in text-accent text-[13px] font-medium tracking-wide mb-5">
                ── 初月無料で、まず稼ぐ
              </p>

              <h1 className="animate-fade-in-up font-serif text-[clamp(1.625rem,4.5vw,3rem)] leading-[1.18] font-bold tracking-tight mb-5">
                「ポイ活って何？」
                <br className="md:hidden" />
                から、
                <br className="hidden md:block" />
                <span className="text-primary">初月で数万円</span>の
                <br />
                成果を出すまで。
              </h1>

              <p className="animate-fade-in-up anim-d2 text-muted text-[15px] leading-[1.9] mb-8 max-w-md">
                セルフバック案件を使えば、
                <br className="hidden sm:block" />
                初月から確実にポイントが貯まります。
                <br className="hidden sm:block" />
                登録の仕方から案件の選び方まで、
                <br className="hidden sm:block" />
                全部ガイドに書いてあります。
              </p>

              <div className="animate-fade-in-up anim-d3 flex flex-wrap gap-3">
                <Button href="/signup" size="lg">
                  初月無料で始める
                </Button>
                <Button href="/guides" variant="ghost" size="lg">
                  ガイドを読む →
                </Button>
              </div>

              <p className="animate-fade-in anim-d5 text-[12px] text-muted/50 mt-4">
                30日間無料 → 月額¥20,000。いつでも解約できます。
              </p>
            </div>

            {/* Right: Visual card */}
            <div className="hidden md:block animate-slide-in-right anim-d3">
              <div className="relative">
                <div className="bg-surface rounded-[var(--radius-xl)] border border-border-light shadow-[var(--shadow-xl)] p-7">
                  <p className="text-xs text-muted mb-4 tracking-wide">
                    今月の注目案件
                  </p>
                  <div className="space-y-3">
                    {[
                      { name: "楽天カード発行", site: "ハピタス", amount: "9,000円" },
                      { name: "SBI証券 口座開設", site: "モッピー", amount: "7,500円" },
                      { name: "U-NEXT 無料体験", site: "ハピタス", amount: "1,800円" },
                    ].map((deal, i) => (
                      <div
                        key={deal.name}
                        className="flex items-center justify-between py-2.5 border-b border-border-light last:border-0"
                        style={{ animation: `fadeInUp 0.5s ${0.4 + i * 0.1}s var(--ease-out-cubic) both` }}
                      >
                        <div>
                          <p className="text-sm font-medium">{deal.name}</p>
                          <p className="text-[11px] text-muted">{deal.site}経由</p>
                        </div>
                        <p className="font-serif text-base font-bold text-primary">
                          {deal.amount}
                        </p>
                      </div>
                    ))}
                  </div>
                  <p className="text-[11px] text-muted/60 mt-3 text-right">
                    毎日自動更新
                  </p>
                </div>

                {/* Floating badge */}
                <div className="absolute -top-3 -right-3 bg-accent text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-[var(--shadow-md)] animate-float">
                  初月で¥18,300分
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── What you get ─── */}
      <SectionReveal>
        <section className="py-16 md:py-24 px-5 bg-surface-alt">
          <div className="mx-auto max-w-5xl">
            <div className="md:grid md:grid-cols-[0.4fr_1fr] md:gap-16 md:items-start">
              {/* Left: heading (slide in from left) */}
              <div className="reveal-left mb-8 md:mb-0 md:sticky md:top-24">
                <p className="text-primary text-[13px] font-medium tracking-wide mb-3">
                  ── できること
                </p>
                <h2 className="font-serif text-[clamp(1.375rem,2.5vw,1.75rem)] font-bold leading-snug">
                  未経験でも
                  <br />
                  迷わず進める
                  <br />
                  仕組みがあります
                </h2>
              </div>

              {/* Right: staggered cards */}
              <div className="stagger-children space-y-4">
                {[
                  {
                    title: "セルフバックの手順書",
                    desc: "クレジットカードの発行、証券口座の開設、\n動画サービスの無料体験。\nやることは決まっています。\n画面を見ながら、そのまま進めるだけ。",
                    tag: "初月の収益源",
                  },
                  {
                    title: "毎日更新の案件データ",
                    desc: "モッピー・ハピタス・どこ得など、\n複数サイトの案件を自動で収集。\n「今どこが一番お得か」が\n一目でわかります。",
                    tag: "自動収集",
                  },
                  {
                    title: "ステップ式の攻略ガイド",
                    desc: "「ポイ活って何？」から始めて、\n月5万円を目指すまで。\n必要なことだけを、\n必要な順番で書いてあります。",
                    tag: "読み放題",
                  },
                ].map((item, i) => (
                  <div
                    key={item.title}
                    className={`card-hover bg-surface rounded-[var(--radius-lg)] border border-border-light p-6 md:p-7`}
                    style={{ marginLeft: i === 1 ? "2rem" : "0" }}
                  >
                    <span className="inline-block text-[11px] font-medium text-primary bg-primary-lighter px-2.5 py-0.5 rounded-full mb-3">
                      {item.tag}
                    </span>
                    <h3 className="font-serif text-base font-bold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted leading-[1.85] whitespace-pre-line">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* ─── How it works ─── */}
      <SectionReveal>
        <section className="py-16 md:py-24 px-5">
          <div className="mx-auto max-w-5xl">
            <div className="reveal mb-10">
              <p className="text-primary text-[13px] font-medium tracking-wide mb-3">
                ── 始め方
              </p>
              <h2 className="font-serif text-[clamp(1.375rem,2.5vw,1.75rem)] font-bold">
                登録から収益化まで
              </h2>
            </div>

            <div className="stagger-children grid grid-cols-1 md:grid-cols-3 gap-0">
              {[
                {
                  step: "01",
                  title: "登録する",
                  desc: "メールアドレスだけ。\n30秒で終わります。\nカード登録は不要です。",
                  accent: false,
                },
                {
                  step: "02",
                  title: "ガイド通りにやる",
                  desc: "セルフバック案件を\n順番に実行。\n初月で数万円の成果が出ます。\nここまで無料。",
                  accent: true,
                },
                {
                  step: "03",
                  title: "続ける or やめる",
                  desc: "成果に納得したら継続。\n合わなければ30日以内に解約。\n料金は一切かかりません。",
                  accent: false,
                },
              ].map((item, i) => (
                <div
                  key={item.step}
                  className={`relative p-6 md:p-8 border border-border-light ${
                    i === 0 ? "rounded-t-[var(--radius-lg)] md:rounded-l-[var(--radius-lg)] md:rounded-tr-none" :
                    i === 2 ? "rounded-b-[var(--radius-lg)] md:rounded-r-[var(--radius-lg)] md:rounded-bl-none" : ""
                  } ${item.accent ? "bg-primary text-white border-primary" : "bg-surface"} -mt-[1px] md:mt-0 md:-ml-[1px]`}
                >
                  <span className={`font-serif text-3xl font-bold ${item.accent ? "text-white/30" : "text-border"} block mb-4`}>
                    {item.step}
                  </span>
                  <h3 className={`font-serif text-base font-bold mb-2 ${item.accent ? "text-white" : ""}`}>
                    {item.title}
                  </h3>
                  <p className={`text-sm leading-[1.85] whitespace-pre-line ${item.accent ? "text-indigo-100" : "text-muted"}`}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* ─── Numbers ─── */}
      <SectionReveal>
        <section className="py-14 md:py-20 px-5 border-y border-border-light">
          <div className="mx-auto max-w-4xl">
            <div className="stagger-children flex flex-wrap justify-between gap-8 md:gap-4">
              {[
                { num: "¥0", sub: "初月の料金", note: "30日間完全無料" },
                { num: "30+", sub: "対応サイト", note: "どこ得経由で横断検索" },
                { num: "毎朝", sub: "案件更新", note: "自動クローリング" },
              ].map((item) => (
                <div key={item.sub} className="text-left">
                  <p className="font-serif text-[clamp(2rem,4vw,2.75rem)] font-bold text-foreground leading-none animate-number-pop">
                    {item.num}
                  </p>
                  <p className="text-sm font-medium mt-1">{item.sub}</p>
                  <p className="text-[11px] text-muted mt-0.5">{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* ─── Pricing ─── */}
      <SectionReveal>
        <section className="py-16 md:py-24 px-5 bg-surface-alt">
          <div className="mx-auto max-w-5xl">
            <div className="md:grid md:grid-cols-[1fr_1fr] md:gap-12 md:items-center">
              {/* Left: copy (slide from left) */}
              <div className="reveal-left mb-10 md:mb-0">
                <p className="text-primary text-[13px] font-medium tracking-wide mb-3">
                  ── 料金
                </p>
                <h2 className="font-serif text-[clamp(1.375rem,2.5vw,1.75rem)] font-bold leading-snug mb-4">
                  初月は無料です。
                  <br />
                  合わなければ、
                  <br />
                  やめてください。
                </h2>
                <p className="text-sm text-muted leading-[1.9] max-w-sm">
                  初月のセルフバックだけで
                  <br className="hidden sm:block" />
                  元が取れるように設計しています。
                  <br className="hidden sm:block" />
                  成果が出なければ
                  <br className="hidden sm:block" />
                  続ける理由はありません。
                </p>
              </div>

              {/* Right: pricing card (scale in) */}
              <div className="reveal-scale bg-surface rounded-[var(--radius-xl)] border border-border-light shadow-[var(--shadow-lg)] p-7 md:p-9">
                <div className="flex items-baseline justify-between mb-6">
                  <div>
                    <p className="text-[11px] text-muted tracking-widest uppercase mb-1">
                      Premium
                    </p>
                    <p className="font-serif text-3xl font-bold">
                      ¥20,000
                      <span className="text-sm font-normal text-muted">/月</span>
                    </p>
                  </div>
                  <span className="bg-accent text-white text-[11px] font-bold px-3 py-1 rounded-full">
                    30日無料
                  </span>
                </div>

                <div className="h-[1px] bg-border-light mb-6" />

                <ul className="space-y-2.5 text-[13px] mb-8">
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

                <Button href="/signup" className="w-full">
                  初月無料で始める
                </Button>

                <p className="text-[11px] text-muted text-center mt-3">
                  いつでも解約OK / 解約後も期間内は利用可
                </p>
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* ─── FAQ ─── */}
      <SectionReveal>
        <section className="py-16 md:py-24 px-5">
          <div className="mx-auto max-w-2xl">
            <p className="reveal text-primary text-[13px] font-medium tracking-wide mb-3">
              ── よくある質問
            </p>

            <div className="reveal anim-d1 space-y-0 border border-border-light rounded-[var(--radius-lg)] overflow-hidden divide-y divide-border-light">
              {[
                {
                  q: "本当に初月無料ですか？",
                  a: "はい。30日以内に解約すれば\n一切料金はかかりません。\nカード情報は登録いただきますが、\n課金は31日目からです。",
                },
                {
                  q: "初月でどのくらい稼げますか？",
                  a: "セルフバック案件を中心に進めれば、\n数万円の成果を出せます。\n楽天カード発行だけでも9,000円です。",
                },
                {
                  q: "ポイ活の経験がなくても大丈夫ですか？",
                  a: "大丈夫です。\n「ポイ活って何？」から始められる\nガイドを用意しています。\n画面を見ながらそのまま進めるだけです。",
                },
                {
                  q: "解約はすぐにできますか？",
                  a: "はい。設定画面から\nいつでも解約できます。\n解約後も課金期間の終了まで\nコンテンツを利用できます。",
                },
              ].map(({ q, a }) => (
                <details key={q} className="group bg-surface">
                  <summary className="px-5 py-4 cursor-pointer text-sm font-medium flex items-center justify-between transition-colors hover:text-primary">
                    {q}
                    <svg
                      className="w-4 h-4 text-muted shrink-0 ml-4 transition-transform duration-300 group-open:rotate-45"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </summary>
                  <p className="px-5 pb-4 text-[13px] text-muted leading-[1.85] whitespace-pre-line">
                    {a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* ─── Final CTA ─── */}
      <SectionReveal>
        <section className="py-16 md:py-20 px-5 bg-foreground text-background">
          <div className="reveal mx-auto max-w-3xl md:flex md:items-center md:justify-between md:gap-8">
            <div className="mb-6 md:mb-0">
              <h2 className="font-serif text-[clamp(1.25rem,2.5vw,1.625rem)] font-bold leading-snug">
                考えるより、
                <br className="md:hidden" />
                やってみたほうが
                <br className="hidden md:block" />
                早いです。
              </h2>
              <p className="text-sm text-background/50 mt-2">
                初月無料。
                <br className="sm:hidden" />
                合わなければ解約するだけ。
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/signup"
                className="btn-bounce inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium bg-background text-foreground rounded-full transition-all duration-300 hover:opacity-90"
              >
                無料で始める
              </Link>
            </div>
          </div>
        </section>
      </SectionReveal>
    </>
  );
}
