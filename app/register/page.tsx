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
  Calendar,
  CreditCard,
  Phone,
  Mail,
  Copy,
  Check,
} from "lucide-react";
import { useState } from "react";

interface FeeTier {
  id: string;
  category: string;
  titleLines?: string[];
  currency: string;
  earlyBird: string;
  lateReg: string;
  paymentLink: string;
}

const REGISTRATION_FORM_URL = "https://forms.gle/RJvswX2xg9mqHy6A6";

export const FEE_TIERS: FeeTier[] = [
  {
    id: "undergraduate",
    category: "Undergraduate Students",
    currency: "₦",
    earlyBird: "10,000",
    lateReg: "15,000",
    paymentLink: "https://paystack.shop/pay/ugstudent",
  },
  {
    id: "postgraduate",
    category: "Postgraduate Students",
    currency: "₦",
    earlyBird: "15,000",
    lateReg: "20,000",
    paymentLink: "https://paystack.shop/pay/pgstudent",
  },
  {
    id: "osm-contributors",
    category: "OSM Members",
    titleLines: ["OSM Members", "(OpenStreetMap Contributors)"],
    currency: "₦",
    earlyBird: "20,000",
    lateReg: "25,000",
    paymentLink: "https://paystack.shop/pay/osmcontributors",
  },
  {
    id: "non-members",
    category: "Non-Members",
    currency: "₦",
    earlyBird: "25,000",
    lateReg: "30,000",
    paymentLink: "https://paystack.shop/pay/non_members",
  },
  {
    id: "corporate-5",
    category: "Corporate Bodies (5 persons)",
    titleLines: ["Corporate Bodies", "(5 persons)"],
    currency: "₦",
    earlyBird: "250,000",
    lateReg: "300,000",
    paymentLink: "https://paystack.shop/pay/corporate-bodies",
  },
  {
    id: "corporate-10",
    category: "Corporate Bodies (10 persons)",
    titleLines: ["Corporate Bodies", "(10 persons)"],
    currency: "₦",
    earlyBird: "350,000",
    lateReg: "400,000",
    paymentLink: "https://paystack.shop/pay/corporate-bodies02",
  },
  {
    id: "international",
    category: "International Participants",
    currency: "$",
    earlyBird: "20",
    lateReg: "25",
    paymentLink: "https://paystack.shop/pay/xnb8m8bph4",
  },
  {
    id: "online-local",
    category: "Online Participants",
    currency: "₦",
    earlyBird: "10,000",
    lateReg: "15,000",
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
  const [copied, setCopied] = useState(false);

  const copyAccountNo = () => {
    navigator.clipboard.writeText("1225974127");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

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
          padding: 10px 20px;
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
        .inquiry-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }

        @media (max-width: 1024px) {
          .reg-grid-cards { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .inquiry-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 640px) {
          .reg-grid-cards { grid-template-columns: 1fr; }
          .reg-table-container { overflow-x: auto; }
        }
      `}</style>

      {/* ---------------- HERO ---------------- */}
      <section style={{ background: COLORS.heading, color: "white", padding: "64px 20px 52px", textAlign: "center" }}>
        <div style={{ maxWidth: 840, margin: "0 auto" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 16px",
              background: "rgba(0, 166, 62, 0.2)",
              border: "1px solid rgba(0, 166, 62, 0.4)",
              color: "#34D399",
              fontSize: 11,
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              marginBottom: 16,
            }}
          >
            <Calendar size={13} />
            10th – 13th November 2026 • University of Uyo Campus
          </div>

          <h1 style={{ fontWeight: 900, textTransform: "uppercase", fontSize: "clamp(22px, 4.5vw, 36px)", margin: "0 0 14px" }}>
            Conference Registration Fees 2026
          </h1>
          <p style={{ fontSize: 13.5, color: "rgba(255,255,255,0.85)", maxWidth: 680, margin: "0 auto", lineHeight: 1.6 }}>
            State of the Map Nigeria 2026 — 5th Annual Conference/Workshop &amp; AGA. Join geospatial experts, researchers, developers, students, and community mappers in Uyo, Akwa Ibom State.
          </p>

          {/* Timeline Badges */}
          <div style={{ marginTop: 28, display: "inline-flex", flexWrap: "wrap", justifyContent: "center", gap: 1, background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.2)" }}>
            <div style={{ padding: "10px 20px", background: COLORS.green, color: "white", fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Early Birds ENDS — 26th October
            </div>
            <div style={{ padding: "10px 20px", background: "rgba(0,0,0,0.35)", color: "white", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Late Registration — 27th October
            </div>
          </div>

          {/* Dates Strip */}
          <div style={{ marginTop: 18, display: "flex", justifyContent: "center", gap: 24, fontSize: 12, color: "rgba(255,255,255,0.8)" }}>
            <span><strong>Arrival Date:</strong> 10th-Nov-2026</span>
            <span>•</span>
            <span><strong>Departure Date:</strong> 13th-Nov-2026</span>
          </div>
        </div>
      </section>

      {/* ---------------- REGISTRATION OPTIONS & PRICING TABLE ---------------- */}
      <section style={{ maxWidth: 1160, margin: "0 auto", padding: "64px 20px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h2 style={{ fontSize: "clamp(16px, 2.6vw, 20px)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", color: COLORS.heading, margin: 0 }}>
            Select Your Registration Category
          </h2>
          <p style={{ marginTop: 8, fontSize: 13, color: COLORS.muted }}>
            Choose the category that matches your status. Pay via Paystack online or through direct bank deposit.
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
                  padding: "24px 18px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flex: 1,
                  background: "white",
                }}
              >
                {/* Dual Price Display: Early Bird & Late Registration */}
                <div style={{ width: "100%", borderTop: `1px solid ${COLORS.line}`, borderBottom: `1px solid ${COLORS.line}`, padding: "14px 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, textAlign: "center" }}>
                  <div>
                    <span style={{ display: "block", fontSize: 9.5, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", color: COLORS.green }}>
                      Early Bird (Till Oct 26)
                    </span>
                    <span style={{ display: "block", marginTop: 4, fontSize: 18, fontWeight: 900, color: COLORS.heading }}>
                      {tier.currency}{tier.earlyBird}
                    </span>
                  </div>
                  <div style={{ borderLeft: `1px solid ${COLORS.line}`, paddingLeft: 8 }}>
                    <span style={{ display: "block", fontSize: 9.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: COLORS.muted }}>
                      Late (From Oct 27)
                    </span>
                    <span style={{ display: "block", marginTop: 4, fontSize: 18, fontWeight: 800, color: COLORS.paragraph }}>
                      {tier.currency}{tier.lateReg}
                    </span>
                  </div>
                </div>

                {/* Button */}
                <div style={{ marginTop: 24, width: "100%", display: "flex", justifyContent: "center" }}>
                  <a
                    href={tier.paymentLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="reg-card-btn"
                    style={{ width: "100%" }}
                  >
                    Pay Online
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
                  <th>Early Bird (Ends 26th October)</th>
                  <th>Late Registration (From 27th October)</th>
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
                      {tier.currency}{tier.earlyBird}
                    </td>
                    <td style={{ fontWeight: 700, color: COLORS.paragraph, fontSize: 13 }}>
                      {tier.currency}{tier.lateReg}
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

        {/* ---------------- BANK ACCOUNT DETAILS ---------------- */}
        <div
          style={{
            marginTop: 48,
            padding: "32px 28px",
            border: `2px solid ${COLORS.green}`,
            background: "rgba(0, 166, 62, 0.04)",
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16, borderBottom: `1px solid ${COLORS.line}`, paddingBottom: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <CreditCard size={24} color={COLORS.green} />
              <div>
                <h3 style={{ margin: 0, fontSize: 15, fontWeight: 900, textTransform: "uppercase", color: COLORS.heading }}>
                  Direct Bank Transfer / Deposit Details
                </h3>
                <p style={{ margin: "2px 0 0", fontSize: 12, color: COLORS.muted }}>
                  For Nigerian local participants and organizations paying via direct bank transfer
                </p>
              </div>
            </div>
            <button
              onClick={copyAccountNo}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                background: COLORS.green,
                color: "white",
                border: "none",
                padding: "8px 16px",
                fontSize: 11.5,
                fontWeight: 800,
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              {copied ? "Copied Account No!" : "Copy Account Number"}
            </button>
          </div>

          <div style={{ marginTop: 24, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            <div>
              <span style={{ display: "block", fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", color: COLORS.muted }}>
                Bank Name
              </span>
              <span style={{ display: "block", marginTop: 4, fontSize: 16, fontWeight: 800, color: COLORS.heading }}>
                Zenith Bank PLC.
              </span>
            </div>
            <div>
              <span style={{ display: "block", fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", color: COLORS.muted }}>
                Account Name
              </span>
              <span style={{ display: "block", marginTop: 4, fontSize: 16, fontWeight: 800, color: COLORS.heading }}>
                UNIQUE MAPPERS NETWORK-SOTM
              </span>
            </div>
            <div>
              <span style={{ display: "block", fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", color: COLORS.muted }}>
                Account Number
              </span>
              <span style={{ display: "block", marginTop: 4, fontSize: 20, fontWeight: 900, color: COLORS.green, letterSpacing: "0.05em" }}>
                1225974127
              </span>
            </div>
          </div>

          <p style={{ marginTop: 20, fontSize: 12.5, color: COLORS.paragraph, lineHeight: 1.6, borderTop: `1px solid ${COLORS.line}`, paddingTop: 14 }}>
            <strong>Note after bank payment:</strong> Please send your payment receipt / teller screenshot and full name to{" "}
            <a href="mailto:stateofthemapnigeria@gmail.com" style={{ color: COLORS.green, fontWeight: 700 }}>
              stateofthemapnigeria@gmail.com
            </a>{" "}
            or via WhatsApp to <strong>+234 806 390 8020</strong> to confirm accreditation and issue your delegate confirmation code.
          </p>
        </div>

        {/* ---------------- WHAT YOUR FEE COVERS ---------------- */}
        <div style={{ marginTop: 40, padding: "32px 28px", border: `1px solid ${COLORS.line}`, background: "#F8FAFC" }}>
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

        {/* ---------------- INQUIRIES & CONTACTS ---------------- */}
        <div style={{ marginTop: 40, padding: "32px 28px", border: `1px solid ${COLORS.line}`, background: "white" }}>
          <div style={{ textAlign: "center", marginBottom: 24 }}>
            <p style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", color: COLORS.green, margin: 0 }}>
              Need Help Registering?
            </p>
            <h3 style={{ margin: "4px 0 0", fontSize: 16, fontWeight: 900, textTransform: "uppercase", color: COLORS.heading }}>
              For Inquiries, Contact Unique Mappers Network, Nigeria
            </h3>
          </div>

          <div className="inquiry-grid">
            <div style={{ padding: "16px 20px", background: "#F8FAFC", border: `1px solid ${COLORS.line}` }}>
              <span style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", color: COLORS.green, display: "block" }}>
                National Coordinator / SOTM Nigeria Chair
              </span>
              <strong style={{ fontSize: 14, color: COLORS.heading, display: "block", marginTop: 4 }}>
                Dr. Victor N. Sunday
              </strong>
              <a
                href="https://wa.me/2348063908020"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: 13, color: COLORS.paragraph, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6, marginTop: 6 }}
              >
                <Phone size={14} color={COLORS.green} /> +234 806 390 8020 (WhatsApp)
              </a>
            </div>

            <div style={{ padding: "16px 20px", background: "#F8FAFC", border: `1px solid ${COLORS.line}` }}>
              <span style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", color: COLORS.green, display: "block" }}>
                LoC Programs
              </span>
              <strong style={{ fontSize: 14, color: COLORS.heading, display: "block", marginTop: 4 }}>
                Martins-Ateli Grace
              </strong>
              <a
                href="https://wa.me/2349018726215"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: 13, color: COLORS.paragraph, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6, marginTop: 6 }}
              >
                <Phone size={14} color={COLORS.green} /> +234 901 872 6215 (WhatsApp)
              </a>
            </div>

            <div style={{ padding: "16px 20px", background: "#F8FAFC", border: `1px solid ${COLORS.line}` }}>
              <span style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", color: COLORS.green, display: "block" }}>
                Co-Chair / Logistics / Academic Track
              </span>
              <strong style={{ fontSize: 14, color: COLORS.heading, display: "block", marginTop: 4 }}>
                Prof. Joseph Udoh
              </strong>
              <a
                href="tel:+2348038673326"
                style={{ fontSize: 13, color: COLORS.paragraph, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6, marginTop: 6 }}
              >
                <Phone size={14} color={COLORS.green} /> +234 803 867 3326
              </a>
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
