import Button from "@/components/ui/button";
import SectionReveal from "@/components/ui/section-reveal";

/* ─── Feature data ─── */
const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    title: "画像つきの\nやさしいガイド",
    description:
      "「登録ってどうやるの？」という方でも安心。\nスクリーンショット付きで、\n一つひとつ丁寧に解説します。",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182" />
      </svg>
    ),
    title: "毎日自動で\n案件を収集",
    description:
      "モッピー・ハピタスなど\n人気サイトの案件を毎日チェック。\n高還元の見逃しを防ぎます。",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    title: "厳選された\nお得案件だけ",
    description:
      "数百件の案件から本当にお得なものだけを\n厳選してご紹介。\n初心者が迷わない案件選びを。",
  },
];

const steps = [
  {
    number: "01",
    title: "無料で登録する",
    description: "メールアドレスだけでOK。\n30秒で完了します。",
  },
  {
    number: "02",
    title: "ガイドで学ぶ",
    description: "初心者向けガイドで、\nポイ活の基本を身につけましょう。",
  },
  {
    number: "03",
    title: "案件に挑戦する",
    description: "自分に合った案件を見つけて、\nポイントを貯め始めましょう。",
  },
];

const stats = [
  { value: "50+", label: "紹介案件数" },
  { value: "3", label: "対応サイト" },
  { value: "毎日", label: "案件を自動更新" },
  { value: "¥0", label: "から始められる" },
];

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-primary-lighter via-transparent to-transparent opacity-60 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-accent-lighter via-transparent to-transparent opacity-40 rounded-full blur-3xl" />
        </div>

        <div className="mx-auto max-w-5xl px-5 pt-20 pb-24 md:pt-32 md:pb-36">
          <div className="text-center">
            {/* Eyebrow */}
            <p className="animate-fade-in inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-lighter text-primary text-xs font-medium tracking-wider mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              初心者向けポイ活ガイド
            </p>

            {/* Headline — serif, dramatic jump ratio */}
            <h1 className="animate-fade-in-up font-serif text-[clamp(1.75rem,5vw,3.5rem)] leading-[1.15] font-bold tracking-tight mb-6">
              ポイ活、
              <span className="relative inline-block">
                <span className="relative z-10 text-primary">はじめての方</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-accent-light/60 -z-0 rounded" />
              </span>
              でも
              <br className="hidden sm:block" />
              安心して始められます
            </h1>

            {/* Subheading */}
            <p className="animate-fade-in-up delay-2 text-muted text-[clamp(0.9375rem,1vw+0.75rem,1.125rem)] leading-relaxed max-w-xl mx-auto mb-10">
              丁寧なガイドと毎日更新の案件情報で、
              <br className="sm:hidden" />
              あなたのポイ活をサポート。
              <br />
              手取り18万円でも、コツコツ貯めれば
              <br className="sm:hidden" />
              毎月のお小遣いに。
            </p>

            {/* CTA */}
            <div className="animate-fade-in-up delay-3 flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/signup" size="lg">
                無料で始める
              </Button>
              <Button href="/guides" variant="outline" size="lg">
                ガイドを見てみる
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom wave divider */}
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
                ポイ活ナビの特徴
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className={`reveal delay-${i + 1} group relative bg-surface rounded-[var(--radius-lg)] border border-border-light p-8 transition-all duration-300 hover:shadow-[var(--shadow-lg)] hover:-translate-y-1`}
                >
                  {/* Icon */}
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
          {/* Decorative circle */}
          <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-border opacity-30" />

          <div className="mx-auto max-w-4xl relative">
            <div className="reveal text-center mb-16">
              <p className="text-primary text-sm font-medium tracking-wider mb-3">HOW IT WORKS</p>
              <h2 className="font-serif text-[clamp(1.5rem,3vw,2.25rem)] font-bold">
                かんたん3ステップで
                <br className="sm:hidden" />
                始められます
              </h2>
            </div>

            <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-3 md:gap-8 relative">
              {/* Connecting line (desktop) */}
              <div className="hidden md:block absolute top-10 left-[16.666%] right-[16.666%] h-[1px] bg-border" />

              {steps.map((step, i) => (
                <div key={i} className={`reveal delay-${i + 1} relative text-center`}>
                  {/* Number circle */}
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
                まずは無料で始めましょう
              </h2>
              <p className="text-muted max-w-md mx-auto">
                基本的なガイドは無料で読めます。
                <br />
                もっと詳しく知りたくなったら、
                <br className="sm:hidden" />
                プレミアムプランへ。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {/* Free plan */}
              <div className="reveal delay-1 bg-surface rounded-[var(--radius-lg)] border border-border-light p-8">
                <p className="text-sm text-muted font-medium mb-2">Free</p>
                <h3 className="font-serif text-xl font-bold mb-1">無料プラン</h3>
                <p className="flex items-baseline gap-1 mb-6">
                  <span className="font-serif text-4xl font-bold">¥0</span>
                  <span className="text-sm text-muted">/月</span>
                </p>

                <ul className="space-y-3 text-sm mb-8">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-success shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <span>初心者向けガイド閲覧</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-success shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <span>案件情報（一部）</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-success shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <span>基本的なポイ活ノウハウ</span>
                  </li>
                </ul>

                <Button href="/signup" variant="outline" className="w-full">
                  無料で登録
                </Button>
              </div>

              {/* Premium plan */}
              <div className="reveal delay-2 relative bg-surface rounded-[var(--radius-lg)] border-2 border-primary p-8 shadow-[var(--shadow-lg)]">
                {/* Badge */}
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full tracking-wider">
                  おすすめ
                </span>

                <p className="text-sm text-primary font-medium mb-2">Premium</p>
                <h3 className="font-serif text-xl font-bold mb-1">プレミアムプラン</h3>
                <p className="flex items-baseline gap-1 mb-6">
                  <span className="font-serif text-4xl font-bold">¥980</span>
                  <span className="text-sm text-muted">/月</span>
                </p>

                <ul className="space-y-3 text-sm mb-8">
                  {[
                    "すべてのガイド閲覧",
                    "全案件情報（毎日更新）",
                    "高還元案件の速報",
                    "詳細な攻略法",
                    "ブックマーク機能",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Button href="/signup" className="w-full">
                  プレミアムで始める
                </Button>
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* ─── Final CTA ─── */}
      <SectionReveal>
        <section className="relative py-24 md:py-32 px-5 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-dark via-primary to-primary-light" />
          <div className="absolute inset-0 -z-10 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)", backgroundSize: "32px 32px" }} />

          <div className="reveal mx-auto max-w-3xl text-center text-white">
            <h2 className="font-serif text-[clamp(1.5rem,3.5vw,2.5rem)] font-bold mb-5 leading-tight">
              今日からポイ活を
              <br className="sm:hidden" />
              始めてみませんか？
            </h2>
            <p className="text-indigo-200 mb-10 text-[clamp(0.875rem,1vw+0.75rem,1.0625rem)] leading-relaxed">
              登録は無料。メールアドレスだけで、
              <br className="sm:hidden" />
              すぐにガイドが読めます。
            </p>
            <Button
              href="/signup"
              size="lg"
              className="bg-white text-primary hover:bg-indigo-50 border-none"
            >
              無料で登録する
            </Button>
          </div>
        </section>
      </SectionReveal>
    </>
  );
}
