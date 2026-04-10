"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import MobileNav from "./mobile-nav";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface/90 backdrop-blur-xl shadow-[var(--shadow-sm)] border-b border-border-light"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-5 flex items-center justify-between h-16 md:h-[72px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-serif text-xl md:text-2xl font-bold text-primary tracking-tight transition-colors group-hover:text-primary-dark">
            ポイ活ナビ
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {[
            { href: "/guides", label: "ガイド" },
            { href: "/deals", label: "案件一覧" },
            { href: "/pricing", label: "料金プラン" },
            { href: "/about", label: "このサイトについて" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 text-sm font-medium text-muted transition-colors hover:text-foreground after:absolute after:bottom-0.5 after:left-4 after:right-4 after:h-[2px] after:bg-primary after:rounded-full after:scale-x-0 after:transition-transform after:duration-300 after:origin-center hover:after:scale-x-100"
            >
              {link.label}
            </Link>
          ))}

          <div className="ml-4 flex items-center gap-3">
            <Link
              href="/login"
              className="px-4 py-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              ログイン
            </Link>
            <Link
              href="/signup"
              className="px-5 py-2.5 text-sm font-medium text-white bg-primary rounded-full transition-all duration-300 hover:bg-primary-dark hover:shadow-[var(--shadow-md)]"
            >
              無料で始める
            </Link>
          </div>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-[var(--radius-sm)] transition-colors hover:bg-surface-alt"
          onClick={() => setMobileOpen(true)}
          aria-label="メニューを開く"
        >
          <div className="w-5 flex flex-col gap-[5px]">
            <span className="block h-[1.5px] w-full bg-foreground rounded-full" />
            <span className="block h-[1.5px] w-3/4 bg-foreground rounded-full" />
            <span className="block h-[1.5px] w-1/2 bg-foreground rounded-full" />
          </div>
        </button>
      </div>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
