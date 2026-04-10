"use client";

import Link from "next/link";
import { useEffect } from "react";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

const navLinks = [
  { href: "/guides", label: "ガイド", desc: "初心者向けの丁寧な解説" },
  { href: "/deals", label: "案件一覧", desc: "毎日更新のお得情報" },
  { href: "/pricing", label: "料金プラン", desc: "無料 / プレミアム" },
  { href: "/about", label: "このサイトについて", desc: "ポイ活ナビの紹介" },
];

export default function MobileNav({ open, onClose }: MobileNavProps) {
  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-foreground/30 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className={`fixed right-0 top-0 z-50 h-full w-80 max-w-[85vw] bg-surface shadow-[var(--shadow-xl)] transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="flex items-center justify-between p-5 border-b border-border-light">
          <span className="font-serif text-lg font-bold text-primary">メニュー</span>
          <button
            className="w-10 h-10 flex items-center justify-center rounded-[var(--radius-sm)] transition-colors hover:bg-surface-alt"
            onClick={onClose}
            aria-label="メニューを閉じる"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Links */}
        <nav className="p-5 space-y-1">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="block px-4 py-3 rounded-[var(--radius-md)] transition-colors hover:bg-surface-alt group"
              style={{ animationDelay: open ? `${i * 0.05}s` : "0s" }}
            >
              <span className="block text-base font-medium group-hover:text-primary transition-colors">
                {link.label}
              </span>
              <span className="block text-xs text-muted mt-0.5">
                {link.desc}
              </span>
            </Link>
          ))}
        </nav>

        {/* Auth buttons */}
        <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-border-light bg-surface space-y-3">
          <Link
            href="/signup"
            onClick={onClose}
            className="flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-white bg-primary rounded-full transition-colors hover:bg-primary-dark"
          >
            無料で始める
          </Link>
          <Link
            href="/login"
            onClick={onClose}
            className="flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-muted border border-border rounded-full transition-colors hover:text-foreground hover:border-foreground"
          >
            ログイン
          </Link>
        </div>
      </div>
    </>
  );
}
