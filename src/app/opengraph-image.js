import { ImageResponse } from "next/og";

export const alt = "Adeboss | Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 90px",
          color: "#ffffff",
          background: "linear-gradient(135deg, #030712 0%, #111827 55%, #1e3a8a 100%)",
        }}
      >
        <div style={{ display: "flex", fontSize: 112, fontWeight: 700 }}>
          Adeboss<span style={{ color: "#60a5fa" }}>.</span>
        </div>
        <div style={{ display: "flex", marginTop: 12, fontSize: 48, color: "#60a5fa" }}>
          Full-Stack Developer
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            maxWidth: 900,
            fontSize: 34,
            lineHeight: 1.4,
            color: "#d1d5db",
          }}
        >
          Modern web applications and end-to-end ML systems, from adaptive
          study tools to real-time fraud detection.
        </div>
      </div>
    ),
    size
  );
}
