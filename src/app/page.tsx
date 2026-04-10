import Button from "@/components/ui/button";
import SectionReveal from "@/components/ui/section-reveal";

/* ─── Feature data ─── */
const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    title: "初月無料で\n実際に稼げる",
    description:
      "最初の1ヶ月は完全無料。\nセルフバック案件を実行して、\n確実に成果を出す体験ができます。",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
      </svg>
    ),
    title: "迷わない\nロードマップ",
    description:
      "「何から始めればいい？」を解消。\n初心者でも月5万円を目指せる\nステップバイステップの道筋。",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182" />
      </svg>
    ),
    title: "毎日更新の\nお得案件情報",
    description:
      "モッピー・ハピタスなど\n人気サイトの案件を毎日自動収集。\n高還元案件を見逃しません。",
  },
];

const steps = [
  {
    number: "01",
    title: "無料で登録する",
    description: "メールアドレスだけでOK。\n30秒で完了、初月は完全無料。",
  },
  {
    number: "02",
    title: "セルフバックで稼ぐ",
    description: "ガイド通りに進めるだけ。\n初月で数万円の成果を実感。",
  },
  {
    number: "03",
    title: "継続して収入を伸ばす",
    description: "毎日更新の案件情報と\n攻略法で、安定した副収入へ。",
  },
];

const stats = [
  { value: "¥0", label: "初月の料金" },
  { value: "50+", label: "紹介案件数" },
  { value: "毎日", label: "案件を自動更新" },
  { value: "月5万〜", label: "目指せる収入" },
];

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-primary-lighter via-transparent to-transparent opacity-60 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-accent-lighter via-transparent to-transparent opacity-40 rounded-full blur-3xl" />
        </div>

        <div className="mx-auto max-w-5xl px-5 pt-20 pb-24 md:pt-32 md:pb-36">
          <div className="text-center">
            <p className="animate-fade-in inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-lighter text-accent text-xs font-medium tracking-wider mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              初月無料 ― まずは稼ぐ体験から
            </p>

            <h1 className="animate-fade-in-up font-serif text-[clamp(1.75rem,5vw,3.5rem)] leading-[1.15] font-bold tracking-tight mb-6">
              ポイ活で、
              <span className="relative inline-block">
                <span className="relative z-10 text-primary">初月から成果</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-accent-light/60 -z-0 rounded" />
              </span>
              を
              <br className="hidden sm:block" />
              出しませんか？
            </h1>

            <p className="animate-fade-in-up delay-2 text-muted text-[clamp(0.9375rem,1vw+0.75rem,1.125rem)] leading-relaxed max-w-xl mx-auto mb-10">
              初月は完全無料。
              <br className="sm:hidden" />
              セルフバック案件で確実に成果を出して、
              <br />
              その後も毎日更新の案件情報と攻略法で
              <br className="sm:hidden" />
              安定した副収入を目指せます。
            </p>

            <div className="animate-fade-in-up delay-3 flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/signup" size="lg">
                初月無料で始める
              </Button>
              <Button href="/guides" variant="outline" size="lg">
                ガイドを見てみる
              </Button>
            </div>

            <p className="animate-fade-in delay-5 text-xs text-muted/60 mt-4">
              ※ 初月無料、2ヶ月目から月額20,000円。いつでも解約OK。
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-8 md:h-12 fill-surface-alt">
            <path d="M0,60 L0,20 Q300,0 600,20 Q900,40 1200,20 L1200,60 Z" />
          </svg>
        </div>
      </section>

      {/* ─── Stats bar ─── */}
      <SectionReveal>
        <section className="bg-surface-alt py-12 md:py-16">
          <div className="mx-auto max-w-4xl px-5">
            <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, i) => (
                <div key={stat.label} className={`delay-${i + 1}`}>
                  <p className="font-serif text-3xl md:text-4xl font-bold text-primary mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* ─── Features ─── */}
      <SectionReveal>
        <section className="py-20 md:py-28 px-5">
          <div className="mx-auto max-w-5xl">
            <div className="reveal text-center mb-16">
              <p className="text-primary text-sm font-medium tracking-wider mb-3">FEATURES</p>
              <h2 className="font-serif text-[clamp(1.5rem,3vw,2.25rem)] font-bold">
                選ばれる3つの理由
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className={`reveal delay-${i + 1} group relative bg-surface rounded-[var(--radius-lg)] border border-border-light p-8 transition-all duration-300 hover:shadow-[var(--shadow-lg)] hover:-translate-y-1`}
                >
                  <div className="w-14 h-14 rounded-[var(--radius-md)] bg-primary-lighter text-primary flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    {feature.icon}
                  </div>

                  <h3 className="font-serif text-lg font-bold mb-3 whitespace-pre-line leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed whitespace-pre-line">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* ─── How it works ─── */}
      <SectionReveal>
        <section className="py-20 md:py-28 px-5 bg-surface-alt relative overflow-hidden">
          <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-border opacity-30" />

          <div className="mx-auto max-w-4xl relative">
            <div className="reveal text-center mb-16">
              <p className="text-primary text-sm font-medium tracking-wider mb-3">HOW IT WORKS</p>
              <h2 className="font-serif text-[clamp(1.5rem,3vw,2.25rem)] font-bold">
                初月無料で稼ぐまでの
                <br className="sm:hidden" />
                3ステップ
              </h2>
            </div>

            <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-3 md:gap-8 relative">
              <div className="hidden md:block absolute top-10 left-[16.666%] right-[16.666%] h-[1px] bg-border" />

              {steps.map((step, i) => (
                <div key={i} className={`reveal delay-${i + 1} relative text-center`}>
                  <div className="w-20 h-20 rounded-full bg-surface border-2 border-primary text-primary font-serif text-2xl font-bold flex items-center justify-center mx-auto mb-6 relative z-10 transition-all duration-300 hover:bg-primary hover:text-white">
                    {step.number}
                  </div>

                  <h3 className="font-serif text-lg font-bold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed whitespace-pre-line">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* ─── Pricing ─── */}
      <SectionReveal>
        <section className="py-20 md:py-28 px-5">
          <div className="mx-auto max-w-4xl">
            <div className="reveal text-center mb-16">
              <p className="text-primary text-sm font-medium tracking-wider mb-3">PRICING</p>
              <h2 className="font-serif text-[clamp(1.5rem,3vw,2.25rem)] font-bold mb-4">
                まずは無料で、
                <br className="sm:hidden" />
                稼ぐ体験を
              </h2>
              <p className="text-muted max-w-md mx-auto">
                初月は完全無料。
                <br />
                セルフバックで成果を実感してから、
                <br className="sm:hidden" />
                続けるか決められます。
              </p>
            </div>

            <div className="reveal delay-1 relative bg-surface rounded-[var(--radius-lg)] border-2 border-primary p-8 md:p-10 shadow-[var(--shadow-lg)] max-w-lg mx-auto">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full tracking-wider">
                初月無料
              </span>

              <p className="text-sm text-primary font-medium mb-2">Premium Plan</p>
              <h3 className="font-serif text-xl font-bold mb-1">プレミアムプラン</h3>

              <div className="flex items-baseline gap-3 mb-2">
                <p className="flex items-baseline gap-1">
                  <span className="font-serif text-4xl font-bold">¥20,000</span>
                  <span className="text-sm text-muted">/月</span>
                </p>
              </div>
              <p className="text-xs text-accent font-medium mb-6">
                ※ 最初の30日間は無料でお試しいただけます
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

              <Button href="/signup" className="w-full" size="lg">
                初月無料で始める
              </Button>

              <p className="text-xs text-muted text-center mt-4">
                いつでも解約OK。解約後も期間終了まで利用可能。
              </p>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* ─── Final CTA ─── */}
      <SectionReveal>
        <section className="relative py-24 md:py-32 px-5 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-dark via-primary to-primary-light" />
          <div className="absolute inset-0 -z-10 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)", backgroundSize: "32px 32px" }} />

          <div className="reveal mx-auto max-w-3xl text-center text-white">
            <h2 className="font-serif text-[clamp(1.5rem,3.5vw,2.5rem)] font-bold mb-5 leading-tight">
              初月無料。
              <br className="sm:hidden" />
              まずは稼ぐ体験から。
            </h2>
            <p className="text-indigo-200 mb-10 text-[clamp(0.875rem,1vw+0.75rem,1.0625rem)] leading-relaxed">
              セルフバックで確実に成果を出して、
              <br className="sm:hidden" />
              続けるか決めてください。
            </p>
            <Button
              href="/signup"
              size="lg"
              className="bg-white text-primary hover:bg-indigo-50 border-none"
            >
              初月無料で始める
            </Button>
          </div>
        </section>
      </SectionReveal>
    </>
  );
}
