import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Show-Me Home Ventures — Sell your Springfield house for cash and see every number";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0e1c2b",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        <svg
          width="104"
          height="104"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="0.5"
            width="39"
            height="39"
            rx="9"
            fill="#0e1c2b"
            stroke="#344d6a"
            strokeWidth="1"
          />
          <path
            d="M8.5 21.5 20 11l11.5 10.5"
            stroke="#ffffff"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M12.5 20.5V29a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-8.5"
            stroke="#ffffff"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <rect x="17.8" y="23.4" width="4.4" height="6.6" rx="0.9" fill="#d9b654" />
        </svg>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#ffffff",
              fontSize: "84px",
              fontWeight: 600,
              letterSpacing: "-2px",
              lineHeight: 1.05,
              maxWidth: "1020px",
            }}
          >
            Show-Me Home Ventures
          </div>
          <div
            style={{
              color: "#a1b8d0",
              fontSize: "32px",
              lineHeight: 1.4,
              marginTop: "28px",
              maxWidth: "880px",
            }}
          >
            Sell your Springfield house for cash — and see every number.
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div style={{ width: "40px", height: "3px", background: "#d9b654" }} />
          <div style={{ color: "#d9b654", fontSize: "26px", letterSpacing: "1px" }}>
            showmehv.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
