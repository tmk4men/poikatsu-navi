"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import MobileNav from "./mobile-nav";

const navLinks = [
  { href: "/guides", label: "ガイド" },
  { href: "/deals", label: "案件" },
  { href: "/pricing", label: "料金" },
];

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
          ? "bg-background/90 backdrop-blur-xl border-b border-border-light"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-5xl px-5 flex items-center justify-between h-14 md:h-16">
        <Link href="/" className="font-serif text-lg font-bold text-primary">
          ポイ活ナビ
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3.5 py-1.5 text-[13px] text-muted transition-colors hover:text-foreground rounded-full hover:bg-surface-alt"
            >
              {link.label}
            </Link>
          ))}

          <span className="w-[1px] h-4 bg-border mx-3" />

          <Link
            href="/login"
            className="px-3.5 py-1.5 text-[13px] text-muted transition-colors hover:text-foreground"
          >
            ログイン
          </Link>
          <Link
            href="/signup"
            className="ml-1 px-4 py-1.5 text-[13px] font-medium text-white bg-foreground rounded-full transition-opacity hover:opacity-80"
          >
            無料で始める
          </Link>
        </nav>

        {/* Mobile */}
        <button
          className="md:hidden w-9 h-9 flex items-center justify-center"
          onClick={() => setMobileOpen(true)}
          aria-label="メニュー"
        >
          <div className="w-[18px] flex flex-col gap-[4px]">
            <span className="block h-[1.5px] w-full bg-foreground rounded-full" />
            <span className="block h-[1.5px] w-3/4 bg-foreground rounded-full" />
          </div>
        </button>
      </div>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
