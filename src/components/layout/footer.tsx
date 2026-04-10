import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border-light mt-auto">
      <div className="mx-auto max-w-5xl px-5 py-10 md:py-12">
        <div className="md:flex md:items-start md:justify-between md:gap-12">
          <div className="mb-8 md:mb-0">
            <Link href="/" className="font-serif text-lg font-bold text-primary">
              ポイ活ナビ
            </Link>
            <p className="text-[12px] text-muted mt-2 max-w-[200px] leading-relaxed">
              ポイ活初心者のための
              <br />
              ガイド＆案件情報サイト
            </p>
          </div>

          <div className="flex gap-12 text-[13px]">
            <div>
              <p className="text-[11px] text-muted tracking-widest uppercase mb-3">サイト</p>
              <ul className="space-y-2">
                {[
                  { href: "/guides", label: "ガイド" },
                  { href: "/deals", label: "案件一覧" },
                  { href: "/pricing", label: "料金" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-muted hover:text-foreground transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] text-muted tracking-widest uppercase mb-3">その他</p>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-muted hover:text-foreground transition-colors">
                    このサイトについて
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border-light">
          <p className="text-[11px] text-muted/50">
            &copy; {new Date().getFullYear()} ポイ活ナビ
          </p>
        </div>
      </div>
    </footer>
  );
}
