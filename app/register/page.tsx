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
  titleLines?: string[];
  currency: string;
  amount: string;
  regType: string;
  paymentLink: string;
}

const REGISTRATION_FORM_URL = "https://forms.gle/RJvswX2xg9mqHy6A6";

export const FEE_TIERS: FeeTier[] = [
  {
    id: "undergraduate",
    category: "Undergraduate Students",
    currency: "₦",
    amount: "15,000",
    regType: "Registration",
    paymentLink: "https://paystack.shop/pay/ugstudent",
  },
  {
    id: "postgraduate",
    category: "Postgraduate Students",
    currency: "₦",
    amount: "20,000",
    regType: "Late Registration",
    paymentLink: "https://paystack.shop/pay/pgstudent",
  },
  {
    id: "osm-contributors",
    category: "OpenStreetMap Nigeria Contributors",
    titleLines: ["OpenStreetMap", "Nigeria Contributors"],
    currency: "₦",
    amount: "25,000",
    regType: "Late Registration",
    paymentLink: "https://paystack.shop/pay/osmcontributors",
  },
  {
    id: "non-members",
    category: "Non-Members",
    currency: "₦",
    amount: "30,000",
    regType: "Late Registration",
    paymentLink: "https://paystack.shop/pay/non_members",
  },
  {
    id: "corporate-5",
    category: "Corporate Bodies (5 persons)",
    titleLines: ["Corporate Bodies", "(5 persons)"],
    currency: "₦",
    amount: "300,000",
    regType: "Late Registration",
    paymentLink: "https://paystack.shop/pay/corporate-bodies",
  },
  {
    id: "corporate-10",
    category: "Corporate Bodies (10 persons)",
    titleLines: ["Corporate Bodies", "(10 persons)"],
    currency: "₦",
    amount: "400,000",
    regType: "Late Registration",
    paymentLink: "https://paystack.shop/pay/corporate-bodies02",
  },
  {
    id: "international",
    category: "International Participant",
    currency: "$",
    amount: "25",
    regType: "Late Registration",
    paymentLink: "https://paystack.shop/pay/xnb8m8bph4",
  },
  {
    id: "online-local",
    category: "Online Participant (Local)",
    currency: "₦",
    amount: "15,000",
    regType: "Registration",
    paymentLink: "https://paystack.shop/pay/online-participants",
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
        .reg-table th, .reg-table td { padding: 14px 18px; border-bottom: 1px solid ${COLORS.line}; text-align: left; }
        .reg-table th { background: #F8FAFC; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; color: ${COLORS.heading}; }
        .reg-grid-cards {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 20px;
        }
        .reg-card {
          background: white;
          border: 1px solid ${COLORS.line};
          display: flex;
          flex-direction: column;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .reg-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
        }
        .reg-card-btn {
          display: inline-block;
          background: ${COLORS.green};
          color: white;
          padding: 10px 24px;
          font-size: 11.5px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          text-decoration: none;
          text-align: center;
          transition: opacity 0.2s ease;
        }
        .reg-card-btn:hover {
          opacity: 0.9;
        }

        @media (max-width: 1024px) {
          .reg-grid-cards { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (max-width: 640px) {
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
        </div>
      </section>

      {/* ---------------- REGISTRATION OPTIONS & PRICING TABLE ---------------- */}
      <section style={{ maxWidth: 1160, margin: "0 auto", padding: "64px 20px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h2 style={{ fontSize: "clamp(15px, 2.6vw, 18px)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", color: COLORS.heading, margin: 0 }}>
            Select Your Registration Category
          </h2>
          <p style={{ marginTop: 8, fontSize: 13, color: COLORS.muted }}>
            Choose the category that matches your status to complete your registration.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="reg-grid-cards">
          {FEE_TIERS.map((tier) => (
            <div key={tier.id} className="reg-card">
              {/* Header */}
              <div
                style={{
                  background: COLORS.heading,
                  color: "white",
                  padding: "16px 12px",
                  minHeight: 68,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    fontSize: 13,
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                    lineHeight: 1.3,
                    color: "white",
                    whiteSpace: "pre-line",
                  }}
                >
                  {tier.titleLines ? tier.titleLines.join("\n") : tier.category}
                </h3>
              </div>

              {/* Body */}
              <div
                style={{
                  padding: "32px 20px 28px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flex: 1,
                  background: "white",
                }}
              >
                {/* Price Display */}
                <div style={{ textAlign: "center" }}>
                  <div style={{ display: "inline-flex", alignItems: "flex-start", justifyContent: "center" }}>
                    <span
                      style={{
                        fontSize: 18,
                        fontWeight: 800,
                        color: COLORS.green,
                        marginTop: 2,
                        marginRight: 3,
                      }}
                    >
                      {tier.currency}
                    </span>
                    <span
                      style={{
                        fontSize: 34,
                        fontWeight: 900,
                        color: COLORS.heading,
                        lineHeight: 1,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {tier.amount}
                    </span>
                  </div>
                  <p
                    style={{
                      margin: "8px 0 0",
                      fontSize: 11.5,
                      color: COLORS.muted,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {tier.regType}
                  </p>
                </div>

                {/* Button */}
                <div style={{ marginTop: 28, width: "100%", display: "flex", justifyContent: "center" }}>
                  <a
                    href={tier.paymentLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="reg-card-btn"
                  >
                    Register Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ---------------- COMPARISON TABLE ---------------- */}
        <div style={{ marginTop: 48, border: `1px solid ${COLORS.line}` }}>
          <div style={{ padding: "18px 24px", background: "#F8FAFC", borderBottom: `1px solid ${COLORS.line}` }}>
            <h3 style={{ margin: 0, fontSize: 13, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", color: COLORS.heading }}>
              Fee Summary Table
            </h3>
          </div>
          <div className="reg-table-container">
            <table className="reg-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Registration Type</th>
                  <th>Fee</th>
                  <th style={{ textAlign: "right" }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {FEE_TIERS.map((tier) => (
                  <tr key={tier.id}>
                    <td style={{ fontWeight: 700, color: COLORS.heading, fontSize: 13 }}>
                      {tier.category}
                    </td>
                    <td style={{ fontWeight: 600, color: COLORS.paragraph, fontSize: 13 }}>
                      {tier.regType}
                    </td>
                    <td style={{ fontWeight: 800, color: COLORS.green, fontSize: 14 }}>
                      {tier.currency}{tier.amount}
                    </td>
                    <td style={{ textAlign: "right" }}>
                      <a
                        href={tier.paymentLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-block",
                          background: COLORS.heading,
                          color: "white",
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
