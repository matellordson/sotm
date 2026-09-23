"use client";

import Image from "next/image";
import { useState } from "react";
import { COLORS } from "@/lib/colors";
import {
  ChevronDown,
  Download,
  Phone,
  Mail,
  Globe,
  Calendar,
  MapPin,
  TrendingUp,
  Users,
  Award,
  Sparkles,
  CheckCircle2,
  ExternalLink,
  FileText,
  ArrowRight,
  Eye,
} from "lucide-react";

/*
  State of the Map Nigeria 2026 - Sponsorship Prospectus & Call for Sponsors
  Updated with latest official prospectus details:
  - Dates: 10th – 13th November 2026
  - Location: Uyo, Akwa Ibom State
  - Theme: Climate Action - Open Mapping
  - Slogan: "Open Mapping for Change, Community Empowerment, and Sustainable Development in Nigeria"
  - Official Prospectus Pages: Introduction, Vision & Mission, Benefits for Sponsors, Participant Growth
  - Official Contact: +234 808 390 8020 | stateofthemapnigeria@gmail.com | uniquemappersinfo@gmail.com
*/

interface Tier {
  name: string;
  range: string;
  badge?: string;
  intro?: string;
  benefits: string[];
}

const TIERS: Tier[] = [
  {
    name: "Platinum",
    range: "$10,000 & above",
    badge: "Premier Partner",
    intro:
      "Platinum sponsors help us plan a remarkable presence and support the future growth of OpenStreetMap Nigeria with the Unique Mappers Network.",
    benefits: [
      "Double-sided exhibit table, prominently positioned",
      "Logo at a strategic location at the event",
      "Twelve (12) complimentary conference registrations",
      "Double-page feature in the conference program",
      "Verbal acknowledgement during the opening address by Unique Mappers Network leadership",
      "Recognition in pre-conference email marketing and a dedicated email announcing sponsorship",
      "Logo and link to your URL on the SOTM Nigeria website",
      "Six (6) social media mentions from State of the Map Nigeria on Twitter, Facebook and LinkedIn",
      "Attendance at a sponsor event with OpenStreetMap stakeholders",
    ],
  },
  {
    name: "Gold",
    range: "$5,000 – $9,999",
    badge: "Major Partner",
    benefits: [
      "Single-sided exhibit table, positioned",
      "Full page in the conference program",
      "Verbal acknowledgement during the opening address by Unique Mappers Network leadership",
      "Recognition in pre-conference email marketing and a dedicated email announcing sponsorship",
      "Logo and link to your URL on the SOTM Nigeria website",
      "Three (3) social media mentions from State of the Map Nigeria on Twitter, Facebook and LinkedIn",
      "Attendance at a sponsor event with OpenStreetMap stakeholders",
      "Six (6) complimentary conference registrations",
    ],
  },
  {
    name: "Silver",
    range: "$2,500 – $4,999",
    benefits: [
      "Exhibit space at the event hall",
      "Verbal acknowledgement during the opening address by Unique Mappers Network leadership",
      "Recognition in pre-conference email marketing and a dedicated email announcing sponsorship",
      "Logo and link to your URL on the SOTM Nigeria website",
      "Two (2) social media mentions from State of the Map Nigeria on Twitter, Facebook and LinkedIn",
      "Attendance at a sponsor event with OpenStreetMap stakeholders",
      "Half-page feature in the conference program",
      "Four (4) complimentary conference registrations",
    ],
  },
  {
    name: "Bronze",
    range: "$1,000 – $2,499",
    benefits: [
      "Two (2) complimentary conference registrations",
      "Verbal acknowledgement during the opening address by Unique Mappers Network leadership",
      "Logo and link to your URL on the SOTM Nigeria website",
      "One (1) social media mention from State of the Map Nigeria on Twitter, Facebook and LinkedIn",
      "Attendance at a sponsor event with OpenStreetMap stakeholders",
      "Quarter-page feature in the conference program",
    ],
  },
  {
    name: "Social Event",
    range: "$1,500",
    benefits: [
      "Company-branded social event / evening reception",
      "One (1) complimentary conference registration",
      "Mention in the conference program",
      "Sponsor name on the SOTM Nigeria website",
    ],
  },
  {
    name: "Travel Grant Supporters",
    range: "$1,000",
    benefits: [
      "Mention in the conference program",
      "Listed on the SOTM Nigeria website",
      "Sponsor of an individual's travel grant support to attend the conference",
    ],
  },
  {
    name: "Supporters Sponsorship",
    range: "$100 – $500",
    benefits: [
      "One (1) complimentary conference registration",
      "Mention in the conference program",
      "Sponsor name on the SOTM Nigeria website",
    ],
  },
];

interface Sponsor {
  name: string;
  img: string;
}

const PAST_SPONSORS: Sponsor[] = [
  { name: "Unique Mappers", img: "/sponsors/unique-mappers.webp" },
  { name: "OpenStreetMap", img: "/sponsors/Openstreetmap_logo.svg.webp" },
  { name: "tomtom", img: "/sponsors/tomtom.png" },
  { name: "SciStarter", img: "/sponsors/SCISTARTER.webp" },
  { name: "SpatialMatrix", img: "/sponsors/spatialmatrix-logo.png" },
];

const PROSPECTUS_PAGES = [
  { title: "Cover", src: "/prospectus/cover.png", desc: "Cover & Official Theme" },
  { title: "Introduction", src: "/prospectus/page-1-intro.png", desc: "Page 1: Conference Overview" },
  { title: "Vision & Mission", src: "/prospectus/page-2-vision-mission.png", desc: "Page 2: Strategic Pillars" },
  { title: "Sponsor Benefits", src: "/prospectus/page-3-benefits.png", desc: "Page 3: Four Strategic Pillars" },
  { title: "Participant Reach", src: "/prospectus/page-4-participants.png", desc: "Page 4: 2025 vs 2026 Growth" },
];

export default function SponsorsPage(): any {
  const [openTier, setOpenTier] = useState<string | null>(TIERS[0].name);
  const [activePreviewIndex, setActivePreviewIndex] = useState<number>(0);

  return (
    <div style={{ color: COLORS.paragraph, background: "white", minHeight: "100vh" }}>
      <style>{`
        .sponsors-logo-row { display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 20px 32px; }
        .sponsors-grid-2 { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 40px; align-items: center; }
        .benefits-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px; }
        .stats-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px; }
        .prospectus-thumbs { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 12px; }
        .contact-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 20px; }
        .cta-btn-primary {
          background: ${COLORS.green};
          color: white;
          padding: 13px 26px;
          font-size: 12.5px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: transform 0.15s ease, opacity 0.15s ease;
        }
        .cta-btn-primary:hover {
          opacity: 0.92;
          transform: translateY(-1px);
        }
        .cta-btn-secondary {
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.3);
          color: white;
          padding: 13px 24px;
          font-size: 12.5px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: background 0.15s ease;
        }
        .cta-btn-secondary:hover {
          background: rgba(255,255,255,0.22);
        }
        @media (max-width: 860px) {
          .sponsors-grid-2 { grid-template-columns: 1fr; }
          .benefits-grid { grid-template-columns: 1fr; }
          .stats-grid { grid-template-columns: 1fr; }
          .contact-grid { grid-template-columns: 1fr; }
          .prospectus-thumbs { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }
        @media (max-width: 540px) {
          .prospectus-thumbs { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
      `}</style>

      {/* ---------------- HERO ---------------- */}
      <section
        style={{
          position: "relative",
          display: "flex",
          minHeight: 380,
          alignItems: "center",
          overflow: "hidden",
          background: COLORS.heading,
        }}
      >
        <Image
          src="https://www.julius-berger.com/fileadmin/_processed_/b/f/csm_julius_berger_expertise_buildings_stadium_00_d63208b504.jpg"
          alt="Uyo Akwa Ibom State"
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center", opacity: 0.35 }}
          priority
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(29,41,61,0.85) 0%, rgba(29,41,61,0.96) 100%)",
          }}
        />

        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: 960,
            margin: "0 auto",
            padding: "56px 20px",
            textAlign: "center",
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 16px",
              background: "rgba(0, 166, 62, 0.18)",
              border: "1px solid rgba(0, 166, 62, 0.45)",
              color: "#34D399",
              fontSize: 11.5,
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: 16,
            }}
          >
            <Calendar size={13} />
            10th – 13th Nov. 2026 • Uyo, Akwa Ibom State
          </div>

          <h1
            style={{
              fontWeight: 900,
              textTransform: "uppercase",
              lineHeight: 1.15,
              color: "white",
              fontSize: "clamp(26px, 5.5vw, 46px)",
              margin: "0 auto 16px",
              maxWidth: 820,
              letterSpacing: "-0.01em",
            }}
          >
            Sponsorship Prospectus
          </h1>

          <p
            style={{
              fontSize: "clamp(14px, 2vw, 17px)",
              fontWeight: 600,
              color: "#E2E8F0",
              maxWidth: 720,
              margin: "0 auto 12px",
              lineHeight: 1.5,
            }}
          >
            For State of the Map, Nigeria 2026
          </p>

          <p
            style={{
              fontSize: 13.5,
              color: "rgba(255,255,255,0.75)",
              fontStyle: "italic",
              maxWidth: 680,
              margin: "0 auto 30px",
              lineHeight: 1.6,
            }}
          >
            “Open Mapping for Change, Community Empowerment, and Sustainable Development in Nigeria”
          </p>

          {/* Call to Actions */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 14,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a
              href="/prospectus/SOTM_Nigeria_2026_Sponsorship_Prospectus.pdf"
              download="SOTM_Nigeria_2026_Sponsorship_Prospectus.pdf"
              className="cta-btn-primary"
            >
              <Download size={15} />
              Download Prospectus (PDF)
            </a>
            <a href="#packages" className="cta-btn-secondary">
              <Award size={15} />
              Sponsorship Packages
            </a>
            <a href="#contact" className="cta-btn-secondary">
              <Mail size={15} />
              Contact Sponsorship Team
            </a>
          </div>
        </div>
      </section>

      {/* ---------------- HIGHLIGHT STRIP ---------------- */}
      <section
        style={{
          background: "#0F172A",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          padding: "16px 20px",
        }}
      >
        <div
          style={{
            maxWidth: 960,
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 16,
            color: "white",
            fontSize: 12.5,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Calendar size={15} color={COLORS.green} />
            <span>
              <strong>Dates:</strong> 10th – 13th November 2026
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <MapPin size={15} color={COLORS.green} />
            <span>
              <strong>Host City:</strong> Uyo, Akwa Ibom State
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Sparkles size={15} color={COLORS.green} />
            <span>
              <strong>Focus:</strong> Climate Action • Open Mapping • GeoAI
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Globe size={15} color={COLORS.green} />
            <span>
              <strong>Organizer:</strong> Unique Mappers Network
            </span>
          </div>
        </div>
      </section>

      {/* ---------------- INTRODUCTION & THEME ---------------- */}
      <section style={{ padding: "64px 0 40px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px" }}>
          <div className="sponsors-grid-2">
            {/* Left: Text */}
            <div>
              <p
                style={{
                  fontSize: 11.5,
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: COLORS.green,
                  margin: 0,
                }}
              >
                Official Conference Overview
              </p>
              <h2
                style={{
                  fontSize: "clamp(22px, 3.2vw, 30px)",
                  fontWeight: 900,
                  color: COLORS.heading,
                  margin: "8px 0 20px",
                  lineHeight: 1.25,
                }}
              >
                State of the Map Nigeria 2026
              </h2>
              <p style={{ fontSize: 14, lineHeight: 1.8, color: COLORS.paragraph, margin: "0 0 16px" }}>
                <strong>State of the Map Nigeria (SotM Nigeria)</strong> is the premier national
                conference dedicated to OpenStreetMap (OSM) and open geospatial technologies in
                Nigeria. Bringing together a vibrant and diverse community of mappers, developers,
                researchers, humanitarian actors, government stakeholders, private sector leaders,
                and tech innovators under one roof.
              </p>
              <p style={{ fontSize: 14, lineHeight: 1.8, color: COLORS.paragraph, margin: "0 0 16px" }}>
                Organized by <strong>Unique Mappers Network</strong>, Nigeria&apos;s foremost OSM
                community NGO, SotM Nigeria offers a powerful platform to explore how open
                mapping, AI-assisted geospatial solutions, and citizen engagement are shaping
                sustainable development across Nigeria and Africa.
              </p>
              <p style={{ fontSize: 14, lineHeight: 1.8, color: COLORS.paragraph, margin: "0 0 20px" }}>
                With a growing footprint and international appeal, this year&apos;s conference is
                themed:
              </p>

              {/* Theme highlight card */}
              <div
                style={{
                  borderLeft: `4px solid ${COLORS.green}`,
                  background: "#F8FAFC",
                  padding: "16px 20px",
                  marginBottom: 20,
                }}
              >
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: COLORS.heading,
                    margin: 0,
                    lineHeight: 1.5,
                  }}
                >
                  “Open Mapping for Change, Community Empowerment and Sustainable Development in Nigeria”
                </p>
                <p
                  style={{
                    fontSize: 11.5,
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: COLORS.green,
                    margin: "8px 0 0",
                  }}
                >
                  Recall: • Climate Action • Open Mapping
                </p>
              </div>

              <p
                style={{
                  fontSize: 13,
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  color: COLORS.heading,
                }}
              >
                Mapping. Innovation. Impact.
              </p>
            </div>

            {/* Right: Featured Cover & Download Preview */}
            <div
              style={{
                background: "#F8FAFC",
                border: `1px solid ${COLORS.line}`,
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: 320,
                  boxShadow: "0 14px 30px rgba(0,0,0,0.12)",
                  border: `1px solid ${COLORS.line}`,
                  overflow: "hidden",
                }}
              >
                <img
                  src="/prospectus/cover.png"
                  alt="State of the Map Nigeria 2026 Sponsorship Prospectus Cover"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>

              <div style={{ marginTop: 20, width: "100%" }}>
                <p
                  style={{
                    fontSize: 13,
                    fontWeight: 800,
                    color: COLORS.heading,
                    margin: 0,
                    textTransform: "uppercase",
                  }}
                >
                  Official Prospectus Document
                </p>
                <p style={{ fontSize: 12, color: COLORS.muted, margin: "4px 0 16px" }}>
                  Includes sponsorship tiers, participant data &amp; full partnership benefits
                </p>
                <a
                  href="/prospectus/SOTM_Nigeria_2026_Sponsorship_Prospectus.pdf"
                  download="SOTM_Nigeria_2026_Sponsorship_Prospectus.pdf"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    width: "100%",
                    background: COLORS.heading,
                    color: "white",
                    padding: "12px 18px",
                    fontSize: 12,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    textDecoration: "none",
                  }}
                >
                  <Download size={14} /> Download Full PDF Prospectus
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- VISION & MISSION ---------------- */}
      <section style={{ padding: "48px 0", background: "#F8FAFC", borderTop: `1px solid ${COLORS.line}`, borderBottom: `1px solid ${COLORS.line}` }}>
        <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 40px" }}>
            <p
              style={{
                fontSize: 11.5,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: COLORS.green,
                margin: 0,
              }}
            >
              Our Foundation
            </p>
            <h2
              style={{
                fontSize: "clamp(22px, 3vw, 28px)",
                fontWeight: 900,
                color: COLORS.heading,
                margin: "8px 0 0",
              }}
            >
              Vision &amp; Mission
            </h2>
          </div>

          <div className="sponsors-grid-2">
            {/* Vision Card */}
            <div
              style={{
                background: "white",
                border: `1px solid ${COLORS.line}`,
                borderTop: `4px solid ${COLORS.green}`,
                padding: "36px 30px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  padding: "6px 14px",
                  border: `2px solid ${COLORS.green}`,
                  borderRadius: 18,
                  fontSize: 12,
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: COLORS.heading,
                  marginBottom: 20,
                  alignSelf: "flex-start",
                }}
              >
                Vision
              </div>
              <p
                style={{
                  fontSize: 15.5,
                  lineHeight: 1.75,
                  color: COLORS.heading,
                  fontWeight: 600,
                  margin: 0,
                }}
              >
                “To be the leading platform in Nigeria for advancing open geospatial data,
                technology, and community collaboration to support inclusive and sustainable
                development.”
              </p>
            </div>

            {/* Mission Card */}
            <div
              style={{
                background: "white",
                border: `1px solid ${COLORS.line}`,
                borderTop: `4px solid ${COLORS.heading}`,
                padding: "32px 30px",
                height: "100%",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  padding: "6px 14px",
                  border: `2px solid ${COLORS.green}`,
                  borderRadius: 18,
                  fontSize: 12,
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: COLORS.heading,
                  marginBottom: 20,
                }}
              >
                Mission
              </div>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                }}
              >
                {[
                  "Promote OpenStreetMap awareness and participation",
                  "Empower local mapping communities",
                  "Support open geospatial education and innovation",
                  "Encourage data use for sustainable development",
                  "Foster collaboration across sectors",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 12,
                      fontSize: 13.5,
                      lineHeight: 1.5,
                      color: COLORS.paragraph,
                    }}
                  >
                    <span
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: "#E85D04",
                        marginTop: 7,
                        flexShrink: 0,
                      }}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- BENEFITS FOR SPONSORS ---------------- */}
      <section style={{ padding: "64px 0" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 48px" }}>
            <p
              style={{
                fontSize: 11.5,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: COLORS.green,
                margin: 0,
              }}
            >
              Why Partner With Us
            </p>
            <h2
              style={{
                fontSize: "clamp(22px, 3.2vw, 30px)",
                fontWeight: 900,
                color: COLORS.heading,
                margin: "8px 0 12px",
              }}
            >
              Benefits for Sponsors
            </h2>
            <p style={{ fontSize: 14, color: COLORS.paragraph, margin: 0, lineHeight: 1.6 }}>
              Direct access, visibility, and lasting impact in Nigeria&apos;s fastest growing open
              technology and geospatial ecosystem.
            </p>
          </div>

          <div className="benefits-grid">
            {[
              {
                num: "01",
                title: "National & Global Exposure",
                desc: "Gain exposure to a national and international audience through banners, media coverage, website features, and conference materials.",
              },
              {
                num: "02",
                title: "Strategic Cross-Sector Connections",
                desc: "Connect directly with government agencies, NGOs, academia, tech communities, and leading mapping professionals.",
              },
              {
                num: "03",
                title: "Access to Top Innovators & Talent",
                desc: "Access a pool of skilled youth, volunteers, and innovators passionate about geospatial technology, AI, and sustainable development.",
              },
              {
                num: "04",
                title: "Demonstrate CSR & Impact Leadership",
                desc: "Showcase your organization's commitment to open data, digital inclusion, environmental sustainability, and youth empowerment.",
              },
            ].map((benefit) => (
              <div
                key={benefit.num}
                style={{
                  border: `1px solid ${COLORS.line}`,
                  padding: "28px 24px",
                  display: "flex",
                  gap: 20,
                  alignItems: "flex-start",
                  background: "white",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    background: COLORS.green,
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 900,
                    fontSize: 20,
                    flexShrink: 0,
                    clipPath: "polygon(0 0, 75% 0, 100% 50%, 75% 100%, 0 100%)",
                    paddingRight: 6,
                  }}
                >
                  {benefit.num.replace(/^0/, "")}
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: 15,
                      fontWeight: 800,
                      color: COLORS.heading,
                      margin: "0 0 8px",
                      lineHeight: 1.35,
                    }}
                  >
                    {benefit.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 13.5,
                      lineHeight: 1.65,
                      color: COLORS.paragraph,
                      margin: 0,
                    }}
                  >
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- PARTICIPANT REACH & GROWTH (2025 vs 2026) ---------------- */}
      <section
        style={{
          padding: "64px 0",
          background: "#0B132B",
          color: "white",
        }}
      >
        <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 48px" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                color: "#34D399",
                fontSize: 11.5,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: 8,
              }}
            >
              <TrendingUp size={14} /> Proven Community Growth
            </div>
            <h2
              style={{
                fontSize: "clamp(22px, 3.2vw, 30px)",
                fontWeight: 900,
                color: "white",
                margin: "4px 0 14px",
              }}
            >
              2025 Impact vs. 2026 Projections
            </h2>
            <p style={{ fontSize: 13.5, color: "rgba(255,255,255,0.75)", margin: 0, lineHeight: 1.6 }}>
              Data-backed attendance and travel grant growth demonstrating the expanding footprint of
              State of the Map Nigeria across local and international sectors.
            </p>
          </div>

          <div className="stats-grid">
            {/* 2025 Actual */}
            <div
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.12)",
                padding: "28px 24px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: "1px solid rgba(255,255,255,0.15)",
                  paddingBottom: 14,
                  marginBottom: 20,
                }}
              >
                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 900,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: "#F97316",
                    margin: 0,
                  }}
                >
                  2025 Participants (Actual)
                </h3>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    background: "rgba(255,255,255,0.1)",
                    padding: "4px 10px",
                    color: "rgba(255,255,255,0.8)",
                  }}
                >
                  Enugu State Edition
                </span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                {[
                  { label: "Local In-person Attendees", val: 100, max: 300 },
                  { label: "Online Participants", val: 270, max: 300 },
                  { label: "Local Travel Grantees", val: 40, max: 100 },
                  { label: "International Participants", val: 5, max: 50 },
                  { label: "International Travel Grantees", val: 1, max: 30 },
                ].map((item, idx) => (
                  <div key={idx}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: 12.5,
                        marginBottom: 6,
                      }}
                    >
                      <span style={{ color: "rgba(255,255,255,0.85)" }}>{item.label}</span>
                      <strong style={{ color: "white" }}>{item.val}</strong>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: 8,
                        background: "rgba(255,255,255,0.1)",
                        borderRadius: 4,
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          width: `${(item.val / item.max) * 100}%`,
                          height: "100%",
                          background: "#00A63E",
                          borderRadius: 4,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 2026 Expected */}
            <div
              style={{
                background: "rgba(0, 166, 62, 0.08)",
                border: "1px solid rgba(0, 166, 62, 0.4)",
                padding: "28px 24px",
                position: "relative",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: "1px solid rgba(255,255,255,0.15)",
                  paddingBottom: 14,
                  marginBottom: 20,
                }}
              >
                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 900,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: "#34D399",
                    margin: 0,
                  }}
                >
                  2026 Expected (Projected)
                </h3>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 800,
                    background: COLORS.green,
                    color: "white",
                    padding: "4px 10px",
                  }}
                >
                  Uyo Edition (Projected)
                </span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                {[
                  { label: "Local In-person Attendees", val: 200, max: 300, growth: "+100%" },
                  { label: "Online Participants", val: 300, max: 300, growth: "+11%" },
                  { label: "Local Travel Grantees", val: 100, max: 100, growth: "+150%" },
                  { label: "International Participants", val: 50, max: 50, growth: "10x" },
                  { label: "International Travel Grantees", val: 30, max: 30, growth: "30x" },
                ].map((item, idx) => (
                  <div key={idx}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontSize: 12.5,
                        marginBottom: 6,
                      }}
                    >
                      <span style={{ color: "rgba(255,255,255,0.9)" }}>{item.label}</span>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <span
                          style={{
                            fontSize: 10.5,
                            fontWeight: 800,
                            color: "#34D399",
                            background: "rgba(52, 211, 153, 0.15)",
                            padding: "2px 6px",
                            borderRadius: 3,
                          }}
                        >
                          {item.growth}
                        </span>
                        <strong style={{ color: "white" }}>{item.val}</strong>
                      </div>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: 8,
                        background: "rgba(255,255,255,0.1)",
                        borderRadius: 4,
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          width: `${(item.val / item.max) * 100}%`,
                          height: "100%",
                          background: "#34D399",
                          borderRadius: 4,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- PROSPECTUS PAGE VIEWER ---------------- */}
      <section style={{ padding: "64px 0", background: "#F1F5F9" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 36px" }}>
            <p
              style={{
                fontSize: 11.5,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: COLORS.green,
                margin: 0,
              }}
            >
              Document Gallery
            </p>
            <h2
              style={{
                fontSize: "clamp(22px, 3.2vw, 30px)",
                fontWeight: 900,
                color: COLORS.heading,
                margin: "8px 0 10px",
              }}
            >
              Browse Prospectus Pages
            </h2>
            <p style={{ fontSize: 13.5, color: COLORS.paragraph, margin: 0 }}>
              Click any page below to inspect the high-resolution prospectus spread.
            </p>
          </div>

          {/* Thumbnails row */}
          <div className="prospectus-thumbs" style={{ marginBottom: 28 }}>
            {PROSPECTUS_PAGES.map((page, idx) => {
              const isActive = activePreviewIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActivePreviewIndex(idx)}
                  style={{
                    background: isActive ? "white" : "rgba(255,255,255,0.6)",
                    border: isActive ? `2px solid ${COLORS.green}` : `1px solid ${COLORS.line}`,
                    padding: 8,
                    cursor: "pointer",
                    textAlign: "center",
                    transition: "all 0.15s ease",
                    boxShadow: isActive ? "0 8px 18px rgba(0,0,0,0.08)" : "none",
                  }}
                >
                  <img
                    src={page.src}
                    alt={page.title}
                    style={{
                      width: "100%",
                      height: 90,
                      objectFit: "cover",
                      objectPosition: "top",
                      display: "block",
                      marginBottom: 8,
                    }}
                  />
                  <span
                    style={{
                      display: "block",
                      fontSize: 11,
                      fontWeight: 800,
                      color: isActive ? COLORS.green : COLORS.heading,
                    }}
                  >
                    {page.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Preview */}
          <div
            style={{
              background: "white",
              border: `1px solid ${COLORS.line}`,
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "100%",
                maxWidth: 620,
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                border: `1px solid ${COLORS.line}`,
                marginBottom: 20,
              }}
            >
              <img
                src={PROSPECTUS_PAGES[activePreviewIndex].src}
                alt={PROSPECTUS_PAGES[activePreviewIndex].title}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 16,
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                maxWidth: 620,
                paddingTop: 16,
                borderTop: `1px solid ${COLORS.line}`,
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: 13,
                    fontWeight: 800,
                    color: COLORS.heading,
                    margin: 0,
                  }}
                >
                  {PROSPECTUS_PAGES[activePreviewIndex].title}
                </p>
                <p style={{ fontSize: 11.5, color: COLORS.muted, margin: "2px 0 0" }}>
                  {PROSPECTUS_PAGES[activePreviewIndex].desc}
                </p>
              </div>

              <a
                href="/prospectus/SOTM_Nigeria_2026_Sponsorship_Prospectus.pdf"
                download="SOTM_Nigeria_2026_Sponsorship_Prospectus.pdf"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  background: COLORS.green,
                  color: "white",
                  padding: "9px 18px",
                  fontSize: 11.5,
                  fontWeight: 800,
                  textTransform: "uppercase",
                  textDecoration: "none",
                }}
              >
                <Download size={14} /> Download Entire PDF
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SPONSORSHIP PACKAGES (ACCORDION) ---------------- */}
      <section id="packages" style={{ padding: "64px 0", background: COLORS.heading }}>
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <p
              style={{
                fontSize: 11.5,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "#34D399",
                margin: 0,
              }}
            >
              Investment Options
            </p>
            <h2
              style={{
                fontSize: "clamp(22px,3.2vw,30px)",
                fontWeight: 900,
                textTransform: "uppercase",
                letterSpacing: "0.04em",
                color: "white",
                margin: "8px 0 10px",
              }}
            >
              Sponsorship Packages
            </h2>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", margin: "0 auto", maxWidth: 600 }}>
              Tailored tiers to align with your corporate objectives, community impact goals, and
              marketing targets.
            </p>
            <p
              style={{
                marginTop: 10,
                fontSize: 12,
                color: "#34D399",
                fontWeight: 600,
              }}
            >
              NB: Local sponsors can use the current exchange rate in Nigerian Naira (₦).
            </p>
          </div>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}>
            {TIERS.map((tier: Tier) => {
              const open = openTier === tier.name;
              return (
                <div key={tier.name} style={{ borderBottom: "1px solid rgba(255,255,255,0.15)" }}>
                  <button
                    onClick={() => setOpenTier(open ? null : tier.name)}
                    aria-expanded={open}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 12,
                      padding: "20px 8px",
                      background: open ? "rgba(255,255,255,0.03)" : "none",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      color: "white",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
                      <span style={{ fontSize: 15, fontWeight: 800 }}>
                        {tier.name}
                      </span>
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 700,
                          color: COLORS.green,
                          background: "rgba(0, 166, 62, 0.15)",
                          padding: "2px 8px",
                          borderRadius: 3,
                        }}
                      >
                        {tier.range}
                      </span>
                      {tier.badge && (
                        <span
                          style={{
                            fontSize: 10,
                            fontWeight: 800,
                            textTransform: "uppercase",
                            letterSpacing: "0.06em",
                            background: "rgba(255,255,255,0.12)",
                            color: "rgba(255,255,255,0.85)",
                            padding: "2px 6px",
                          }}
                        >
                          {tier.badge}
                        </span>
                      )}
                    </div>
                    <ChevronDown
                      size={20}
                      color={COLORS.green}
                      style={{
                        transform: open ? "rotate(180deg)" : "none",
                        transition: "transform 0.2s ease",
                        flexShrink: 0,
                      }}
                    />
                  </button>

                  {open && (
                    <div style={{ padding: "0 8px 24px" }}>
                      {tier.intro && (
                        <p
                          style={{
                            fontSize: 13.5,
                            lineHeight: 1.7,
                            color: "rgba(255,255,255,0.8)",
                            margin: "0 0 16px",
                          }}
                        >
                          {tier.intro}
                        </p>
                      )}
                      <ul
                        style={{
                          margin: 0,
                          padding: 0,
                          listStyle: "none",
                          display: "flex",
                          flexDirection: "column",
                          gap: 10,
                        }}
                      >
                        {tier.benefits.map((b: string) => (
                          <li
                            key={b}
                            style={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: 10,
                              fontSize: 13,
                              lineHeight: 1.6,
                              color: "rgba(255,255,255,0.9)",
                            }}
                          >
                            <CheckCircle2
                              size={15}
                              color={COLORS.green}
                              style={{ flexShrink: 0, marginTop: 3 }}
                            />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>

                      <div
                        style={{
                          marginTop: 24,
                          paddingTop: 16,
                          borderTop: "1px solid rgba(255,255,255,0.1)",
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 14,
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <span style={{ fontSize: 13, color: "rgba(255,255,255,0.7)" }}>
                          Ready to sponsor at the <strong>{tier.name}</strong> level?
                        </span>
                        <a
                          href={`mailto:stateofthemapnigeria@gmail.com?subject=State%20of%20the%20Map%20Nigeria%202026%20-%20${encodeURIComponent(tier.name)}%20Sponsorship`}
                          style={{
                            background: COLORS.green,
                            color: "white",
                            padding: "9px 20px",
                            fontSize: 12,
                            fontWeight: 800,
                            textTransform: "uppercase",
                            letterSpacing: "0.06em",
                            textDecoration: "none",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 6,
                          }}
                        >
                          Confirm {tier.name} Tier <ArrowRight size={14} />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- CONTACT & SPONSORSHIP INQUIRIES ---------------- */}
      <section id="contact" style={{ padding: "64px 0", background: "white" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 40px" }}>
            <p
              style={{
                fontSize: 11.5,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: COLORS.green,
                margin: 0,
              }}
            >
              Direct Communication
            </p>
            <h2
              style={{
                fontSize: "clamp(22px, 3.2vw, 30px)",
                fontWeight: 900,
                color: COLORS.heading,
                margin: "8px 0 10px",
              }}
            >
              Contact the Sponsorship Committee
            </h2>
            <p style={{ fontSize: 13.5, color: COLORS.paragraph, margin: 0 }}>
              Prepared by <strong>SotMNigeria 2026</strong>. We are ready to answer your questions
              and formulate custom sponsorship agreements.
            </p>
          </div>

          <div className="contact-grid">
            {/* Phone */}
            <div
              style={{
                border: `1px solid ${COLORS.line}`,
                padding: "28px 24px",
                textAlign: "center",
                background: "#F8FAFC",
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  background: "rgba(0, 166, 62, 0.12)",
                  color: COLORS.green,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px",
                }}
              >
                <Phone size={20} />
              </div>
              <h3 style={{ fontSize: 14, fontWeight: 800, color: COLORS.heading, margin: "0 0 6px" }}>
                Phone / WhatsApp
              </h3>
              <p style={{ fontSize: 13, color: COLORS.paragraph, margin: "0 0 14px" }}>
                Call or message our coordinators directly
              </p>
              <a
                href="tel:+2348083908020"
                style={{
                  fontWeight: 800,
                  color: COLORS.green,
                  fontSize: 14,
                  textDecoration: "none",
                }}
              >
                +234 808 390 8020
              </a>
            </div>

            {/* Email */}
            <div
              style={{
                border: `1px solid ${COLORS.line}`,
                padding: "28px 24px",
                textAlign: "center",
                background: "#F8FAFC",
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  background: "rgba(0, 166, 62, 0.12)",
                  color: COLORS.green,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px",
                }}
              >
                <Mail size={20} />
              </div>
              <h3 style={{ fontSize: 14, fontWeight: 800, color: COLORS.heading, margin: "0 0 6px" }}>
                Sponsorship Emails
              </h3>
              <p style={{ fontSize: 12, color: COLORS.paragraph, margin: "0 0 6px" }}>
                <a
                  href="mailto:stateofthemapnigeria@gmail.com"
                  style={{ color: COLORS.green, fontWeight: 700, textDecoration: "none" }}
                >
                  stateofthemapnigeria@gmail.com
                </a>
              </p>
              <p style={{ fontSize: 12, color: COLORS.paragraph, margin: 0 }}>
                <a
                  href="mailto:uniquemappersinfo@gmail.com"
                  style={{ color: COLORS.paragraph, fontWeight: 600, textDecoration: "none" }}
                >
                  uniquemappersinfo@gmail.com
                </a>
              </p>
            </div>

            {/* Official Website */}
            <div
              style={{
                border: `1px solid ${COLORS.line}`,
                padding: "28px 24px",
                textAlign: "center",
                background: "#F8FAFC",
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  background: "rgba(0, 166, 62, 0.12)",
                  color: COLORS.green,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px",
                }}
              >
                <Globe size={20} />
              </div>
              <h3 style={{ fontSize: 14, fontWeight: 800, color: COLORS.heading, margin: "0 0 6px" }}>
                Official Website
              </h3>
              <p style={{ fontSize: 13, color: COLORS.paragraph, margin: "0 0 14px" }}>
                Conference updates &amp; portals
              </p>
              <a
                href="https://2026.stateofthemapnigeria.org"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontWeight: 800,
                  color: COLORS.green,
                  fontSize: 13,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                2026.stateofthemapnigeria.org <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- PAST SPONSORS & PARTNERS ---------------- */}
      <section style={{ padding: "56px 0", borderTop: `1px solid ${COLORS.line}` }}>
        <div className="sponsors-grid-2" style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px" }}>
          <div className="sponsors-logo-row" style={{ border: `1px solid ${COLORS.line}`, padding: "28px 24px", background: "#F8FAFC" }}>
            {PAST_SPONSORS.map((s: Sponsor) => (
              <img key={s.name} src={s.img} alt={s.name} style={{ height: 36, width: "auto", objectFit: "contain" }} />
            ))}
          </div>
          <div>
            <h2 style={{ fontSize: "clamp(16px,2.4vw,18px)", fontWeight: 800, color: COLORS.heading, margin: 0 }}>
              Past Sponsors &amp; Technical Partners
            </h2>
            <p style={{ marginTop: 14, fontSize: 13.5, lineHeight: 1.7, color: COLORS.paragraph }}>
              Thank you to every sponsor who made past editions of State of the Map Nigeria a reality.
              We look forward to welcoming you to Uyo for SOTM Nigeria 2026! We welcome all prospective
              sponsors on board — your support makes this conference possible.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
