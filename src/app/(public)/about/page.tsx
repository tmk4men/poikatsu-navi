import Button from "@/components/ui/button";
import SectionReveal from "@/components/ui/section-reveal";

export const metadata = {
  title: "このサイトについて",
};

export default function AboutPage() {
  return (
    <section className="py-16 md:py-24 px-5">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12">
          <p className="text-primary text-sm font-medium tracking-wider mb-3">ABOUT</p>
          <h1 className="font-serif text-[clamp(1.75rem,4vw,2.5rem)] font-bold">
            ポイ活ナビについて
          </h1>
        </div>

        <SectionReveal>
          <div className="reveal space-y-8 text-[15px] leading-[2]">
            <p>
              ポイ活ナビは、
              <br className="sm:hidden" />
              ポイ活（ポイント活動）を始めたい方を
              <br className="sm:hidden" />
              応援するサイトです。
            </p>

            <div className="bg-surface-alt rounded-[var(--radius-lg)] p-6 md:p-8 space-y-2">
              <p className="text-muted italic">
                「ポイ活に興味はあるけど、
                <br className="sm:hidden" />
                何から始めればいいかわからない」
              </p>
              <p className="text-muted italic">
                「たくさんのサイトがあって、
                <br className="sm:hidden" />
                どれを使えばいいかわからない」
              </p>
            </div>

            <p>
              そんな方のために、
              <br className="sm:hidden" />
              初心者でもわかりやすいガイドと、
              <br />
              複数のポイントサイトから集めた
              <br className="sm:hidden" />
              最新の案件情報をお届けしています。
            </p>

            <div className="reveal anim-d2">
              <h2 className="font-serif text-xl font-bold mb-4">特徴</h2>
              <div className="space-y-3">
                {[
                  { icon: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25", text: "ポイ活初心者に寄り添った\n丁寧な解説" },
                  { icon: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182", text: "モッピー・ハピタスなど\n人気サイトの案件を毎日自動収集" },
                  { icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z", text: "本当にお得な案件だけを\n厳選して紹介" },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-4 p-4 bg-surface rounded-[var(--radius-md)] border border-border-light">
                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                    <span className="text-sm whitespace-pre-line">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal anim-d3">
              <h2 className="font-serif text-xl font-bold mb-4">ご利用にあたって</h2>
              <p className="text-sm text-muted leading-relaxed">
                当サイトで紹介している案件情報は、
                <br className="sm:hidden" />
                各ポイントサイトの公開情報を元にしています。
                <br />
                案件の詳細や条件は、
                <br className="sm:hidden" />
                必ず各サイトでご確認ください。
              </p>
            </div>
          </div>

          <div className="reveal anim-d4 mt-12">
            <Button href="/guides">ガイドを読んでみる</Button>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
