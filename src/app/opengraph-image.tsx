import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Show-Me Home Ventures — Sell Your House Fast in Springfield, MO";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #1d4ed8 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          <svg
            width="48"
            height="48"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="32" height="32" rx="6" fill="#3b82f6" />
            <path
              d="M16 6L6 14v12a2 2 0 002 2h5v-8h6v8h5a2 2 0 002-2V14L16 6z"
              fill="#ffffff"
            />
          </svg>
          <span style={{ color: "#93c5fd", fontSize: "24px", fontWeight: 600 }}>
            Show-Me Home Ventures
          </span>
        </div>
        <div
          style={{
            color: "#ffffff",
            fontSize: "56px",
            fontWeight: 700,
            lineHeight: 1.15,
            maxWidth: "900px",
          }}
        >
          An Offer You Can Understand. A Close Date You Can Trust.
        </div>
        <div
          style={{
            color: "#94a3b8",
            fontSize: "24px",
            marginTop: "24px",
            maxWidth: "700px",
            lineHeight: 1.4,
          }}
        >
          Open-Book Certainty Offer™ — Springfield, MO &amp; the Ozarks
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            marginTop: "40px",
          }}
        >
          <div
            style={{
              background: "#3b82f6",
              color: "#ffffff",
              padding: "12px 32px",
              borderRadius: "8px",
              fontSize: "20px",
              fontWeight: 600,
            }}
          >
            Get Your Free Offer
          </div>
          <span style={{ color: "#64748b", fontSize: "18px" }}>
            (417) 258-5577
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
