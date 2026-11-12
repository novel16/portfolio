import { ImageResponse } from "next/og";
import { profile } from "./portfolio-data";

export const alt = "Novel P. Chavez — Full-stack web developer. Thoughtful code. Useful products.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Generate the share card from the same profile used on the homepage.
export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100%", padding: "56px 64px", background: "#101617", color: "#edf3ef", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: 26, borderBottom: "1px solid #2b3836" }}>
        <span style={{ fontSize: 26 }}>{profile.name}</span>
        <span style={{ fontSize: 20, color: "#a4b3af" }}>{profile.location}</span>
      </div>
      <div style={{ display: "flex", flex: 1, alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: 72, fontWeight: 700, letterSpacing: -3 }}>Thoughtful code.</span>
          <span style={{ fontSize: 72, fontWeight: 700, letterSpacing: -3, color: "#77dfc8" }}>Useful products.</span>
          <span style={{ fontSize: 25, marginTop: 24, color: "#a4b3af" }}>{profile.role}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 190, height: 190, border: "1px solid #37574e", borderRadius: 32, background: "#192b27", fontSize: 116, fontWeight: 700 }}>
          n<span style={{ color: "#77dfc8" }}>.</span>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #2b3836", paddingTop: 24, fontSize: 20 }}>
        <span style={{ color: "#77dfc8" }}>Laravel · Next.js · REST APIs</span>
        <span style={{ color: "#a4b3af" }}>Selected work & experience</span>
      </div>
    </div>,
    size,
  );
}
