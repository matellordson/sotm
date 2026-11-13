
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
    { name: "Unique Mappers Network", img: "/sponsors/unique-mappers.webp" },
    { name: "University of Uyo", img: "/sponsors/uniuyo.jpg" },
    { name: "SciStarter", img: "/sponsors/scistarter.png" },
    { name: "Geospatial Intelligence Foundation of Nigeria (GIFON)", img: "/sponsors/gifon.png" },
    { name: "NASRDA", img: "/sponsors/nasrda.png" },
    { name: "UN Mappers", img: "/sponsors/unmappers.png" },
    { name: "Digital Earth Africa", img: "/sponsors/digital-earth-africa.png" },
    { name: "OpenStreetMap Foundation", img: "/sponsors/osmf.jpg" },
    { name: "TomTom", img: "/sponsors/tomtom.jpg" },
    { name: "Fotoshi", img: "/sponsors/fotoshi.jpg" },
    { name: "Geokloud", img: "/sponsors/gkc.jpg" },
    { name: "Spatialmatrix", img: "/sponsors/spatialmatrix-logo.png" },
    { name: "HOT OSM", img: "/sponsors/hotosm.png" },
    { name: "University of Port Harcourt", img: "/sponsors/uniport.png" },
    { name: "University of Science & Technology", img: "/sponsors/ust.png" },
    { name: "Federal University Otuoke", img: "/sponsors/otuoke.png" },
    { name: "University of Nigeria Nsukka", img: "/sponsors/unn.jpg" },
    { name: "University of Abuja", img: "/sponsors/uniabuja.png" },
  ];
  return (
  <footer style={{ background: COLORS.heading }}>
    <div style={{ maxWidth: 1080, margin: "0 auto", padding: "40px 20px" }}>
      <div style={{ textAlign: "center", marginBottom: 16 }}>
        <span style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.12em", color: COLORS.green }}>
          Partners &amp; Sponsors
        </span>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "24px 36px", background: "white", padding: "32px 24px", borderRadius: 4 }}>
        {SPONSORS.map((s: Sponsor) => (
          <img
            key={s.name}
            src={s.img}
            alt={s.name}
            title={s.name}
            style={{ maxHeight: 42, maxWidth: 140, width: "auto", height: "auto", objectFit: "contain" }}
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
