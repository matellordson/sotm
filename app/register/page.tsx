"use client";

import Link from "next/link";
import { COLORS } from "@/lib/colors";
import {
  GraduationCap,
  BookOpen,
  Users,
  UserCheck,
  Building2,
  Globe2,
  Monitor,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

interface FeeTier {
  id: string;
  category: string;
  subtext: string;
  earlyBird: string;
  lateReg: string;
  link: string;
}

const REGISTRATION_FORM_URL = "https://forms.gle/RJvswX2xg9mqHy6A6";

const FEE_TIERS: FeeTier[] = [
  {
    id: "undergraduate",
    category: "Undergraduate",
    subtext: "Current undergraduate students with valid student ID",
    earlyBird: "₦10,000",
    lateReg: "₦15,000",
    link: REGISTRATION_FORM_URL,
  },
  {
    id: "postgraduate",
    category: "Postgraduate",
    subtext: "Masters and PhD students with valid academic ID",
    earlyBird: "₦15,000",
    lateReg: "₦20,000",
    link: REGISTRATION_FORM_URL,
  },
  {
    id: "osm-members",
    category: "OSM Members",
    subtext: "Active OpenStreetMap & Unique Mappers Network community members",
    earlyBird: "₦20,000",
    lateReg: "₦25,000",
    link: REGISTRATION_FORM_URL,
  },
  {
    id: "non-members",
    category: "Non-Members",
    subtext: "General participants, professionals & industry practitioners",
    earlyBird: "₦25,000",
    lateReg: "₦30,000",
    link: REGISTRATION_FORM_URL,
  },
  {
    id: "corporate-5",
    category: "Corporate Bodies (5 Persons)",
    subtext: "Group registration for organizations & institutions (up to 5 delegates)",
    earlyBird: "₦250,000",
    lateReg: "₦300,000",
    link: REGISTRATION_FORM_URL,
  },
  {
    id: "corporate-10",
    category: "Corporate Bodies (10 Persons)",
    subtext: "Group registration for organizations & institutions (up to 10 delegates)",
    earlyBird: "₦350,000",
    lateReg: "₦400,000",
    link: REGISTRATION_FORM_URL,
  },
  {
    id: "international",
    category: "International Participants",
    subtext: "Delegates attending from outside Nigeria (in-person attendance)",
    earlyBird: "$20",
    lateReg: "$25",
    link: REGISTRATION_FORM_URL,
  },
  {
    id: "online",
    category: "Online Participants",
    subtext: "Virtual access to live streams, digital sessions & materials",
    earlyBird: "₦10,000",
    lateReg: "₦15,000",
    link: REGISTRATION_FORM_URL,
  },
];

const INCLUSIONS = [
  "Access to all 4-Day Conference Plenaries, Presentations & Thematic Tracks",
  "Hands-on Training Workshops (OSM, QGIS, GeoAI, EO, UAV Photogrammetry)",
  "Full Participation in National Collaborative Mapathon Sessions",
  "Conference delegate kit, official badge & presentation materials",
  "Daily tea breaks, networking coffee & conference lunches",
  "Official Certificate of Participation & Attendance",
  "Access to Geospatial Exhibition & Tech Demonstrations",
];

export default function RegisterPage() {
  return (
    <div style={{ color: COLORS.paragraph, background: "white", minHeight: "100vh" }}>
      <style>{`
        .reg-table { width: 100%; border-collapse: collapse; }
        .reg-table th, .reg-table td { padding: 16px 20px; border-bottom: 1px solid ${COLORS.line}; text-align: left; }
        .reg-table th { background: #F8FAFC; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; color: ${COLORS.heading}; }
        .reg-grid-cards { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px; }

        @media (max-width: 768px) {
          .reg-grid-cards { grid-template-columns: 1fr; }
          .reg-table-container { overflow-x: auto; }
        }
      `}</style>

      {/* ---------------- HERO ---------------- */}
      <section style={{ background: COLORS.heading, color: "white", padding: "64px 20px 52px", textAlign: "center" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p style={{ margin: 0, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: COLORS.green }}>
            State of the Map Nigeria 2026
          </p>

          <h1 style={{ marginTop: 14, fontWeight: 900, textTransform: "uppercase", fontSize: "clamp(22px, 4.5vw, 36px)", margin: "14px 0 0" }}>
            Conference Registration Fees
          </h1>
          <p style={{ marginTop: 12, fontSize: 13.5, color: "rgba(255,255,255,0.8)", maxWidth: 640, margin: "12px auto 0", lineHeight: 1.6 }}>
            Join geospatial experts, researchers, developers, students, and community mappers from 3–6 November 2026 at the University of Uyo, Akwa Ibom State.
          </p>

          {/* Timeline Badges */}
          <div style={{ marginTop: 28, display: "inline-flex", flexWrap: "wrap", justifyContent: "center", gap: 1, background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.2)" }}>
            <div style={{ padding: "10px 20px", background: COLORS.green, color: "white", fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Early Birds ENDS — 20th SEPT.
            </div>
            <div style={{ padding: "10px 20px", background: "rgba(0,0,0,0.3)", color: "white", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Late Registration — 1st October
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- REGISTRATION OPTIONS & PRICING TABLE ---------------- */}
      <section style={{ maxWidth: 960, margin: "0 auto", padding: "64px 20px" }}>
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <h2 style={{ fontSize: "clamp(15px, 2.6vw, 18px)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", color: COLORS.heading, margin: 0 }}>
            Select Your Registration Category
          </h2>
          <p style={{ marginTop: 8, fontSize: 13, color: COLORS.muted }}>
            Choose the option that matches your status. Click on any category to complete your registration.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="reg-grid-cards">
          {FEE_TIERS.map((tier) => (
            <div
              key={tier.id}
              style={{
                border: `1px solid ${COLORS.line}`,
                padding: "24px 24px",
                background: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div>
                  <span style={{ fontSize: 10, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", color: COLORS.green }}>
                    Category
                  </span>
                  <h3 style={{ margin: "4px 0 0", fontSize: 15, fontWeight: 800, textTransform: "uppercase", color: COLORS.heading }}>
                    {tier.category}
                  </h3>
                </div>

                <p style={{ marginTop: 8, fontSize: 12.5, lineHeight: 1.5, color: COLORS.paragraph }}>
                  {tier.subtext}
                </p>

                {/* Price Display */}
                <div style={{ marginTop: 18, borderTop: `1px solid ${COLORS.line}`, borderBottom: `1px solid ${COLORS.line}`, padding: "14px 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <div>
                    <span style={{ display: "block", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: COLORS.green }}>
                      Early Bird (Till Sep 20)
                    </span>
                    <span style={{ display: "block", marginTop: 4, fontSize: 18, fontWeight: 900, color: COLORS.heading }}>
                      {tier.earlyBird}
                    </span>
                  </div>
                  <div style={{ borderLeft: `1px solid ${COLORS.line}`, paddingLeft: 12 }}>
                    <span style={{ display: "block", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: COLORS.muted }}>
                      Late (From Oct 1)
                    </span>
                    <span style={{ display: "block", marginTop: 4, fontSize: 18, fontWeight: 800, color: COLORS.paragraph }}>
                      {tier.lateReg}
                    </span>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: 20 }}>
                <a
                  href={tier.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "center",
                    background: COLORS.green,
                    color: "white",
                    padding: "12px 16px",
                    fontSize: 11.5,
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    textDecoration: "none",
                  }}
                >
                  Register as {tier.category}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ---------------- COMPARISON TABLE ---------------- */}
        <div style={{ marginTop: 48, border: `1px solid ${COLORS.line}` }}>
          <div style={{ padding: "20px 24px", background: "#F8FAFC", borderBottom: `1px solid ${COLORS.line}` }}>
            <h3 style={{ margin: 0, fontSize: 13, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", color: COLORS.heading }}>
              Fee Summary Table
            </h3>
          </div>
          <div className="reg-table-container">
            <table className="reg-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Early Bird (Ends 20th Sept)</th>
                  <th>Late Registration (1st October)</th>
                  <th style={{ textAlign: "right" }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {FEE_TIERS.map((tier) => (
                  <tr key={tier.id}>
                    <td style={{ fontWeight: 700, color: COLORS.heading, fontSize: 13 }}>
                      {tier.category}
                    </td>
                    <td style={{ fontWeight: 800, color: COLORS.green, fontSize: 13 }}>
                      {tier.earlyBird}
                    </td>
                    <td style={{ fontWeight: 600, color: COLORS.paragraph, fontSize: 13 }}>
                      {tier.lateReg}
                    </td>
                    <td style={{ textAlign: "right" }}>
                      <a
                        href={tier.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-block",
                          border: `1px solid ${COLORS.line}`,
                          color: COLORS.heading,
                          padding: "6px 14px",
                          fontSize: 11,
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                          textDecoration: "none",
                        }}
                      >
                        Register
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ---------------- WHAT YOUR FEE COVERS ---------------- */}
        <div style={{ marginTop: 48, padding: "32px 28px", border: `1px solid ${COLORS.line}`, background: "#F8FAFC" }}>
          <h3 style={{ margin: 0, fontSize: 13, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", color: COLORS.heading }}>
            What Is Included in Your Registration Fee?
          </h3>
          <div style={{ marginTop: 20, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 12 }}>
            {INCLUSIONS.map((item, idx) => (
              <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: COLORS.paragraph, lineHeight: 1.5 }}>
                <CheckCircle2 size={16} color={COLORS.green} style={{ flexShrink: 0, marginTop: 2 }} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ---------------- PAYMENT & ENQUIRIES ---------------- */}
        <div style={{ marginTop: 32, padding: "28px 24px", border: `1px solid ${COLORS.line}`, background: "white" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
            <AlertCircle size={18} color={COLORS.green} style={{ flexShrink: 0, marginTop: 2 }} />
            <div>
              <h4 style={{ margin: 0, fontSize: 13, fontWeight: 800, textTransform: "uppercase", color: COLORS.heading }}>
                Registration &amp; Payment Support
              </h4>
              <p style={{ marginTop: 6, fontSize: 13, lineHeight: 1.6, color: COLORS.paragraph, margin: "6px 0 0" }}>
                For group bookings, invoice requests, institutional sponsorship, or international wire payment queries, please reach out to our organizing committee at{" "}
                <a href="mailto:stateofthemapnigeria@gmail.com" style={{ color: COLORS.green, fontWeight: 700, textDecoration: "none" }}>
                  stateofthemapnigeria@gmail.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>

        {/* ---------------- BOTTOM MOTTO ---------------- */}
        <div style={{ marginTop: 56, textAlign: "center", borderTop: `1px solid ${COLORS.line}`, paddingTop: 28 }}>
          <p style={{ margin: 0, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: COLORS.heading }}>
            MAP TOGETHER • INNOVATE TOGETHER • BUILD RESILIENT COMMUNITIES TOGETHER.
          </p>
        </div>
      </section>
    </div>
  );
}
