import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ポイ活ナビ — 初月無料で、まず稼ぐ体験から";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#FAFAF8",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "linear-gradient(90deg, #4338CA 0%, #6366F1 60%, #D97706 100%)",
          }}
        />

        {/* Main content */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 80px",
          }}
        >
          {/* Logo */}
          <div
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: "#4338CA",
              marginBottom: 32,
              letterSpacing: "-0.01em",
            }}
          >
            ポイ活ナビ
          </div>

          {/* Headline */}
          <div
            style={{
              fontSize: 52,
              fontWeight: 800,
              color: "#1A1A1A",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              marginBottom: 20,
            }}
          >
            「ポイ活って何？」から、
            <br />
            初月で数万円の成果を。
          </div>

          {/* Sub */}
          <div
            style={{
              fontSize: 20,
              color: "#6B7280",
              lineHeight: 1.6,
            }}
          >
            初月無料。セルフバック案件で確実に成果を出す体験を。
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "24px 80px",
            borderTop: "1px solid #E8E5DF",
          }}
        >
          <div style={{ fontSize: 14, color: "#6B7280" }}>
            poikatsu-site.vercel.app
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontSize: 14,
              fontWeight: 600,
              color: "#D97706",
            }}
          >
            初月無料 → 月額¥20,000
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
