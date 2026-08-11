
import { COLORS } from "@/lib/colors";


export function SiteFooter() {
  // Sponsor logos. Swap each `img` for the real asset/URL when you have it —
  // the row just renders whatever's here at a fixed 40px height so mismatched
  // source dimensions still line up.

  interface Sponsor {
    name: string;
    img: string;
  }

  const SPONSORS: Sponsor[] = [
    { name: "Unique Mappers", img: "/sponsors/unique-mappers.webp" },
    { name: "OpenStreetMap", img: "/sponsors/Openstreetmap_logo.svg.webp" },
    { name: "tomtom", img: "/sponsors/tomtom.png" },
    { name: "SciStarter", img: "/sponsors/SCISTARTER.webp" },
    { name: "SpatialMatrix", img: "/sponsors/spatialmatrix-logo.png" },
  ];
  return (
  <footer style={{ background: COLORS.heading }}>
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "40px 20px" }}>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "24px 40px", background: "white", padding: "32px 24px" }}>
        {SPONSORS.map((s: Sponsor) => (
          <img
            key={s.name}
            src={s.img}
            alt={s.name}
            style={{ height: 40, width: "auto", objectFit: "contain" }}
          />
        ))}
      </div>
    </div>
    <div style={{ padding: "20px 0", textAlign: "center", fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(255,255,255,0.5)" }}>
      &copy; 2026 State of the Map Nigeria. All rights reserved.
    </div>
  </footer>
  );
}
