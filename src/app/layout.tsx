import type { Metadata } from "next";
import { Zen_Kaku_Gothic_New, Shippori_Mincho_B1 } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const zenKaku = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
  display: "swap",
});

const shippori = Shippori_Mincho_B1({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ポイ活ナビ — 初心者のための完全ガイド",
    template: "%s — ポイ活ナビ",
  },
  description:
    "ポイ活が初めてでも安心。丁寧なガイドと毎日更新の案件情報で、あなたのお小遣い稼ぎをサポートします。",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
  ),
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "ポイ活ナビ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${zenKaku.variable} ${shippori.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans antialiased text-foreground bg-background">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
