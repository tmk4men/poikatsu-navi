import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ポイ活ナビ — 初心者のための完全ガイド";
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
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #4338CA 0%, #6366F1 50%, #818CF8 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Dot pattern overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.08,
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "60px",
          }}
        >
          {/* Logo */}
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: "white",
              marginBottom: 24,
              letterSpacing: "-0.02em",
            }}
          >
            ポイ活ナビ
          </div>

          {/* Divider */}
          <div
            style={{
              width: 80,
              height: 3,
              background: "rgba(255, 255, 255, 0.5)",
              borderRadius: 4,
              marginBottom: 28,
            }}
          />

          {/* Tagline */}
          <div
            style={{
              fontSize: 28,
              color: "rgba(255, 255, 255, 0.9)",
              textAlign: "center",
              lineHeight: 1.5,
            }}
          >
            初心者のための完全ガイド
          </div>

          <div
            style={{
              fontSize: 18,
              color: "rgba(255, 255, 255, 0.6)",
              marginTop: 16,
            }}
          >
            丁寧なガイド × 毎日更新の案件情報
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 16,
            color: "rgba(255, 255, 255, 0.5)",
          }}
        >
          poikatsu-navi.com
        </div>
      </div>
    ),
    { ...size }
  );
}
