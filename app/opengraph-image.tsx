import { ImageResponse } from "next/og";
import siteCore from "@/content/en/global.site-core.json";

export const dynamic = "force-static";
export const alt = "Emma Kwon — Official Site";
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
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #070707 0%, #11100e 100%)",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#b88a3b",
            display: "flex",
          }}
        >
          Official Site
        </div>

        <div
          style={{
            marginTop: 28,
            fontSize: 120,
            color: "#f7f1e8",
            fontWeight: 700,
            letterSpacing: -2,
            display: "flex",
          }}
        >
          Emma Kwon
        </div>

        <div
          style={{
            marginTop: 36,
            width: 160,
            height: 2,
            background: "#d8c6a3",
            display: "flex",
          }}
        />

        <div
          style={{
            marginTop: 36,
            maxWidth: 800,
            fontSize: 28,
            lineHeight: 1.4,
            color: "#d8c6a3",
            display: "flex",
            textAlign: "center",
          }}
        >
          {siteCore.description}
        </div>

        <div
          style={{
            marginTop: 56,
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#8d8780",
            display: "flex",
            gap: 24,
          }}
        >
          <span style={{ display: "flex" }}>EMMAESTRO</span>
          <span style={{ display: "flex" }}>BORN RARE</span>
          <span style={{ display: "flex" }}>K-MAMA</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
