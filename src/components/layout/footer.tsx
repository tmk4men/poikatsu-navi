import Link from "next/link";

const footerLinks = {
  contents: [
    { href: "/guides", label: "ガイド一覧" },
    { href: "/deals", label: "案件一覧" },
    { href: "/pricing", label: "料金プラン" },
  ],
  support: [
    { href: "/about", label: "このサイトについて" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-surface-alt border-t border-border-light mt-auto">
      <div className="mx-auto max-w-5xl px-5 py-16">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-10 md:gap-16">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="font-serif text-xl font-bold text-primary">
                ポイ活ナビ
              </span>
            </Link>
            <p className="text-sm text-muted leading-relaxed max-w-xs">
              ポイ活初心者でも安心。
              <br />
              丁寧なガイドと最新案件で、
              <br />
              あなたのお小遣い稼ぎを
              <br />
              サポートします。
            </p>
          </div>

          {/* Content links */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-muted mb-4">
              コンテンツ
            </h4>
            <ul className="space-y-3">
              {footerLinks.contents.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support links */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-muted mb-4">
              サポート
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border-light flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} ポイ活ナビ
          </p>
          <p className="text-xs text-muted/60">
            ポイ活で、毎日をちょっとお得に。
          </p>
        </div>
      </div>
    </footer>
  );
}
