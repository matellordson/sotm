"use client";

import Link from "next/link";
import { COLORS } from "@/lib/colors";
import {
  Globe2,
  Cpu,
  Layers,
  Sparkles,
  Plane,
  CheckCircle2,
  Users,
} from "lucide-react";

interface ExhibitionCategory {
  title: string;
  desc: string;
}

const EXHIBITION_CATEGORIES: ExhibitionCategory[] = [
  {
    title: "Geospatial Technologies & GIS Products",
    desc: "Commercial GIS software, open-source geospatial tools, spatial databases, and mapping platforms.",
  },
  {
    title: "Research Innovations & Academic Demos",
    desc: "Cutting-edge findings from university labs, GeoAI models, climate simulators, and reproducible cartography.",
  },
  {
    title: "Startups & Emerging Tech Ventures",
    desc: "Innovative African geospatial startups pitching location-based services, logistics, and data analytics.",
  },
  {
    title: "UAV Technologies & Drone Photogrammetry",
    desc: "Hardware & software solutions for aerial surveying, multispectral sensing, disaster mapping, and precision farming.",
  },
  {
    title: "Earth Observation Applications",
    desc: "Satellite imagery solutions, Google Earth Engine integrations, and Digital Earth Africa implementations.",
  },
  {
    title: "Community & Humanitarian Mapping Projects",
    desc: "Grassroots open data initiatives, youth mapping chapters, citizen science projects, and disaster response tools.",
  },
];

const EXHIBITOR_BENEFITS = [
  "Direct exposure to over 500+ geospatial professionals, academics, government officials, and students",
  "Dedicated physical exhibition booth in the central conference venue at University of Uyo",
  "Demonstration time slot on the conference stage during plenary breaks",
  "Brand logo & company profile featured in the official Conference Book of Proceedings and website",
  "Complimentary full-access delegate passes for your team",
  "Direct B2B and public sector networking opportunities across Nigeria and West Africa",
];

export default function ExhibitionPage() {
  return (
    <div style={{ color: COLORS.paragraph, background: "white", minHeight: "100vh" }}>
      <style>{`
        .expo-grid-3 { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; }
        .expo-grid-2 { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 32px; align-items: start; }

        @media (max-width: 860px) {
          .expo-grid-3 { grid-template-columns: 1fr; }
          .expo-grid-2 { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* ---------------- HERO ---------------- */}
      <section style={{ background: COLORS.heading, color: "white", padding: "64px 20px 56px", textAlign: "center" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p style={{ margin: 0, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: COLORS.green }}>
            State of the Map Nigeria 2026
          </p>

          <h1 style={{ marginTop: 14, fontWeight: 900, textTransform: "uppercase", fontSize: "clamp(22px, 4.5vw, 36px)", margin: "14px 0 0" }}>
            Geospatial Exhibition
          </h1>
          <p style={{ marginTop: 12, fontSize: 13.5, color: "rgba(255,255,255,0.8)", maxWidth: 640, margin: "12px auto 0", lineHeight: 1.6 }}>
            Showcase your technologies, research innovations, commercial GIS products, UAV equipment, and community initiatives at Nigeria&apos;s leading open geospatial gathering.
          </p>
        </div>
      </section>

      {/* ---------------- WHAT WE SHOWCASE ---------------- */}
      <section style={{ padding: "64px 0" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ textAlign: "center", maxWidth: 740, margin: "0 auto 40px" }}>
            <h2 style={{ fontSize: "clamp(14px, 2.4vw, 16px)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.15em", color: COLORS.heading, margin: 0 }}>
              What Is Showcased at SOTM Nigeria 2026?
            </h2>
            <p style={{ marginTop: 10, fontSize: 13.5, color: COLORS.muted }}>
              A collaborative marketplace uniting academia, industry vendors, innovators, and grassroots cartographers.
            </p>
          </div>

          <div className="expo-grid-3">
            {EXHIBITION_CATEGORIES.map((cat) => (
              <div
                key={cat.title}
                style={{
                  border: `1px solid ${COLORS.line}`,
                  padding: "24px 22px",
                  background: "white",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h3 style={{ margin: 0, fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", color: COLORS.green, lineHeight: 1.4 }}>
                  {cat.title}
                </h3>
                <p style={{ marginTop: 10, fontSize: 13, lineHeight: 1.6, color: COLORS.paragraph, margin: "10px 0 0" }}>
                  {cat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- WHY EXHIBIT ---------------- */}
      <section style={{ padding: "64px 0", background: "#F8FAFC", borderTop: `1px solid ${COLORS.line}`, borderBottom: `1px solid ${COLORS.line}` }}>
        <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px" }}>
          <div className="expo-grid-2">
            <div>
              <h2 style={{ fontSize: "clamp(14px, 2.4vw, 16px)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.15em", color: COLORS.heading, margin: 0 }}>
                Why Exhibit at SOTM Nigeria 2026?
              </h2>
              <p style={{ marginTop: 14, fontSize: 13.5, lineHeight: 1.7, color: COLORS.paragraph }}>
                As an exhibitor, you gain direct access to decision-makers in spatial data science, disaster management ministries, university faculty, young tech talent, and non-profit leaders from across Nigeria.
              </p>

              <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 12 }}>
                {EXHIBITOR_BENEFITS.map((benefit, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <CheckCircle2 size={16} color={COLORS.green} style={{ flexShrink: 0, marginTop: 2 }} />
                    <span style={{ fontSize: 13, lineHeight: 1.5, color: COLORS.heading, fontWeight: 600 }}>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: "white", border: `1px solid ${COLORS.line}`, padding: "32px 28px" }}>
              <span style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", color: COLORS.green }}>
                Reserve Your Space
              </span>
              <h3 style={{ margin: "6px 0 0", fontSize: 16, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", color: COLORS.heading }}>
                Exhibition Packages
              </h3>
              <p style={{ marginTop: 10, fontSize: 13, lineHeight: 1.6, color: COLORS.paragraph }}>
                Exhibition spaces are available as part of our Platinum, Gold, Silver sponsorship tiers or standalone vendor booth registrations.
              </p>

              <div style={{ marginTop: 20, padding: "16px", background: "#F1F5F9", border: `1px solid ${COLORS.line}` }}>
                <p style={{ margin: 0, fontSize: 12, fontWeight: 700, color: COLORS.heading }}>
                  📍 Venue: University of Uyo Main Exhibition Hall
                </p>
                <p style={{ margin: "4px 0 0", fontSize: 12, color: COLORS.muted }}>
                  Includes standard booth, 1 table, 2 chairs, power outlet &amp; Wi-Fi.
                </p>
              </div>

              <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 10 }}>
                <Link
                  href="/sponsorship"
                  style={{
                    background: COLORS.green,
                    color: "white",
                    padding: "12px 20px",
                    fontSize: 12,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    textDecoration: "none",
                    textAlign: "center",
                  }}
                >
                  View Sponsorship &amp; Booth Packages
                </Link>
                <a
                  href="mailto:stateofthemapnigeria@gmail.com?subject=SOTM%20Nigeria%202026%20Exhibition%20Inquiry"
                  style={{
                    border: `1px solid ${COLORS.line}`,
                    color: COLORS.heading,
                    padding: "12px 20px",
                    fontSize: 12,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    textDecoration: "none",
                    textAlign: "center",
                  }}
                >
                  Email Exhibition Inquiry
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- MOTTO BANNER ---------------- */}
      <section style={{ padding: "40px 20px", textAlign: "center" }}>
        <p style={{ margin: 0, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: COLORS.heading }}>
          MAP TOGETHER • INNOVATE TOGETHER • BUILD RESILIENT COMMUNITIES TOGETHER.
        </p>
      </section>
    </div>
  );
}

