"use client";

import Image from "next/image";
import { useState } from "react";
import { COLORS } from "@/lib/colors";
import { ChevronDown } from "lucide-react";

/*
  Call for Sponsors page.

  Layout mirrors the original sponsors page (hero → intro copy → featured
  photo with an overlay caption → a dark "Sponsorship Packages" accordion →
  "Past Sponsors & Technical Partners" logo strip), re-skinned with the
  site's current tokens. Dollar figures for the lower tiers were hard to
  read in the source screenshot — flagged with TODOs below, please confirm
  before publishing.
*/

interface Tier {
  name: string;
  range: string;
  intro?: string;
  benefits: string[];
}

const TIERS: Tier[] = [
  {
    name: "Platinum",
    range: "$10,000 & above",
    intro: "Platinum sponsors help us plan a remarkable presence and support the future growth of OpenStreetMap Nigeria with the Unique Mappers Network.",
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
    // TODO: confirm exact range — source screenshot read as roughly $1,000–$2,499
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
    // TODO: confirm exact figure — hard to read in the source screenshot
    name: "Social Event",
    range: "$1,500",
    benefits: [
      "Company-branded event",
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
      "Sponsor of an individual's travel grant support",
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

// Reuses the same sponsor set as the homepage footer — swap in the real
// logos when confirmed for 2026.
const PAST_SPONSORS: Sponsor[] = [
  { name: "Unique Mappers", img: "/sponsors/unique-mappers.webp" },
  { name: "OpenStreetMap", img: "/sponsors/Openstreetmap_logo.svg.webp" },
  { name: "tomtom", img: "/sponsors/tomtom.png" },
  { name: "SciStarter", img: "/sponsors/SCISTARTER.webp" },
  { name: "SpatialMatrix", img: "/sponsors/spatialmatrix-logo.png" },
];

function HeroBackdrop() {
  return (
    <Image
      src="https://www.julius-berger.com/fileadmin/_processed_/b/f/csm_julius_berger_expertise_buildings_stadium_00_d63208b504.jpg"
      alt="banner"
      fill
      sizes="100vw"
      style={{ objectFit: "cover", objectPosition: "center" }}
      priority
    />
  );
}

export default function SponsorsPage(): any {
  const [openTier, setOpenTier] = useState<string | null>(TIERS[0].name);

  return (
    <div style={{ color: COLORS.paragraph, background: "white", minHeight: "100vh" }}>
      <style>{`
        .sponsors-logo-row { display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 20px 32px; }
        .sponsors-grid-2 { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 40px; align-items: center; }
        @media (max-width: 720px) {
          .sponsors-grid-2 { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* ---------------- HERO ---------------- */}
      <section style={{ position: "relative", display: "flex", minHeight: 260, alignItems: "center", overflow: "hidden" }}>
        <HeroBackdrop />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.55)" }} />
        <div style={{ position: "relative", width: "100%", maxWidth: 720, margin: "0 auto", padding: "56px 20px", textAlign: "center" }}>
          <h1 style={{ fontWeight: 800, textTransform: "uppercase", lineHeight: 1.25, color: "white", fontSize: "clamp(24px, 5vw, 38px)", margin: 0 }}>
            Call for Sponsors
          </h1>
        </div>
      </section>

      {/* ---------------- INTRO ---------------- */}
      <section style={{ padding: "56px 0 0" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 20px" }}>
          <p style={{ fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", color: COLORS.green, margin: 0 }}>
            State of the Map Nigeria 2026
          </p>
          <p style={{ marginTop: 14, fontSize: 14, lineHeight: 1.75, color: COLORS.paragraph }}>
            State of the Map Nigeria is the premier annual conference and gathering of OpenStreetMap Nigeria and Unique Mappers Network — an OpenStreetMap local community NGO dedicated to open data development, geospatial innovation, climate action, and community resilience in Nigeria.
          </p>

          <p style={{ marginTop: 32, fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", color: COLORS.green, margin: "32px 0 0" }}>
            5th Annual Edition Sponsorship Opportunities
          </p>
          <p style={{ marginTop: 14, fontSize: 14, lineHeight: 1.75, color: COLORS.paragraph }}>
            We are thrilled to host the <strong>5th Annual Edition of State of the Map Nigeria</strong> from <strong>3–6 November 2026</strong> at the <strong>University of Uyo, Akwa Ibom State</strong> under the theme <em>&quot;Open Geospatial Innovation for Climate Action and Community Resilience&quot;</em>.
          </p>
          <p style={{ marginTop: 14, fontSize: 14, lineHeight: 1.75, color: COLORS.paragraph }}>
            Our sponsorship packages help your organization reach diverse tech leaders, GIS professionals, university researchers, government agencies, and young talent across Africa, while demonstrating your commitment to open data, climate resilience, and sustainable development.
          </p>
          <p style={{ marginTop: 14, fontSize: 14, lineHeight: 1.75, color: COLORS.paragraph }}>
            We invite corporate sponsors, technology providers, and development partners to collaborate with Unique Mappers Network and support SOTM Nigeria 2026.
          </p>
        </div>
      </section>

      {/* ---------------- FEATURED PHOTO ---------------- */}
      <section style={{ padding: "40px 0" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ position: "relative" }}>
            <img
              // TODO: swap for a real community photo
              src="https://placehold.co/1200x520/1D293D/e2e8f0?text=SOTM+Nigeria"
              alt="SOTM Nigeria community"
              style={{ display: "block", width: "100%", height: "auto" }}
            />
            <div style={{ position: "absolute", left: 20, right: 20, bottom: 20, background: COLORS.green, padding: "18px 22px" }}>
              <p style={{ fontWeight: 800, textTransform: "uppercase", color: "white", fontSize: "clamp(13px, 2.4vw, 16px)", margin: 0 }}>
                Welcome to State of the Map Nigeria Conference
              </p>
              <p style={{ marginTop: 6, fontSize: 11, color: "rgba(255,255,255,0.85)", margin: "6px 0 0" }}>
                State of the Map Nigeria unites people around OpenStreetMap, an open-sourced geospatial
                data pool having the most detailed map of Nigeria, Africa and beyond.
              </p>
            </div>
          </div>

          <p style={{ marginTop: 28, fontSize: 14, lineHeight: 1.75, color: COLORS.paragraph }}>
            Our conference draws people representing an incredibly broad range of interests. From
            individual hobbyists to major stakeholders contributing to OpenStreetMap, State of the Map
            Nigeria is envisioned to be the most significant gathering on mapping innovation and
            promise.
          </p>
          <p style={{ marginTop: 14, fontSize: 14, lineHeight: 1.75, color: COLORS.paragraph }}>
            This year's SOTM Nigeria conference will be held in Uyo, Akwa Ibom, Nigeria in November
            2026. It will bring together hundreds of OpenStreetMap enthusiasts, GIS experts and
            industry players from academia, private companies, humanitarian organizations, government
            agencies and geospatial technology sector to learn new map technology and share ideas.
          </p>
        </div>
      </section>

      {/* ---------------- SPONSORSHIP PACKAGES ---------------- */}
      <section style={{ padding: "64px 0", background: COLORS.heading }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 20px" }}>
          <h2 style={{ fontSize: "clamp(18px,2.8vw,22px)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", color: COLORS.green, margin: 0 }}>
            Sponsorship Packages
          </h2>
          <p style={{ marginTop: 10, fontSize: 12, color: "rgba(255,255,255,0.7)" }}>
            NB: Sponsors can use the current exchange rate in Naira for local sponsors.
          </p>

          <a
            href="#"
            style={{ marginTop: 20, display: "inline-block", background: COLORS.green, color: "white", padding: "12px 24px", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", textDecoration: "none" }}
          >
            Download Our Sponsorship Prospectus
          </a>

          <div style={{ marginTop: 32, borderTop: "1px solid rgba(255,255,255,0.15)" }}>
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
                      padding: "18px 4px",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      color: "white",
                    }}
                  >
                    <span style={{ fontSize: 13, fontWeight: 700 }}>
                      {tier.name} ({tier.range})
                    </span>
                    <ChevronDown
                      size={18}
                      color={COLORS.green}
                      style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform 0.2s ease", flexShrink: 0 }}
                    />
                  </button>

                  {open && (
                    <div style={{ padding: "0 4px 22px" }}>
                      {tier.intro && (
                        <p style={{ fontSize: 12.5, lineHeight: 1.7, color: "rgba(255,255,255,0.75)", margin: "0 0 14px" }}>
                          {tier.intro}
                        </p>
                      )}
                      <ul style={{ margin: 0, paddingLeft: 18, display: "flex", flexDirection: "column", gap: 8 }}>
                        {tier.benefits.map((b: string) => (
                          <li key={b} style={{ fontSize: 12.5, lineHeight: 1.6, color: "rgba(255,255,255,0.85)" }}>
                            {b}
                          </li>
                        ))}
                      </ul>
                      <p style={{ marginTop: 16, fontSize: 12.5 }}>
                        Are you interested?{" "}
                        <a href="#register" style={{ color: COLORS.green, fontWeight: 700, textDecoration: "none" }}>
                          Click here to proceed
                        </a>
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- PAST SPONSORS & PARTNERS ---------------- */}
      <section style={{ padding: "64px 0" }}>
        <div className="sponsors-grid-2" style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px" }}>
          <div className="sponsors-logo-row" style={{ border: `1px solid ${COLORS.line}`, padding: "28px 24px" }}>
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
              We hope you'll join us in Uyo for SOTM Nigeria 2026! We welcome all prospective sponsors
              on board — your support makes this conference possible. Contact us at{" "}
              <a href="mailto:stateofthemapnigeria@gmail.com" style={{ color: COLORS.green, fontWeight: 600 }}>
                stateofthemapnigeria@gmail.com
              </a>{" "}
              and we'll work with you to design a sponsorship package that fits your business needs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
