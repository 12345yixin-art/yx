import { ImageResponse } from "next/og";

export const alt = "ARK Legacy Partner";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#111827",
          color: "#ffffff",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: "70px",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            border: "1px solid rgba(216, 194, 147, 0.58)",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "space-between",
            padding: "58px",
            width: "100%",
          }}
        >
          <div style={{ color: "#d8c293", fontSize: 28, fontWeight: 700, letterSpacing: "0.16em" }}>
            ARK LEGACY PARTNER
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontFamily: "Georgia, serif",
                fontSize: 82,
                fontWeight: 600,
                lineHeight: 1,
              }}
            >
              <span>Plan Today.</span>
              <span>Protect Tomorrow.</span>
              <span>Build Beyond.</span>
            </div>
            <div style={{ background: "#b89652", height: 2, width: 220 }} />
          </div>
          <div style={{ color: "#d8c293", fontSize: 24 }}>
            Financial Planning · Protection · Legacy
          </div>
        </div>
        <div
          style={{
            border: "1px solid rgba(216, 194, 147, 0.32)",
            borderRadius: "999px",
            height: 360,
            position: "absolute",
            right: -90,
            top: 110,
            width: 360,
          }}
        />
      </div>
    ),
    size,
  );
}
