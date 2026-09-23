"use client";

import Image from "next/image";
import Link from "next/link";
import { COLORS } from "@/lib/colors";
import {
  FileText,
  GraduationCap,
  Sparkles,
  Layers,
  Cpu,
  Flame,
  Users,
  Building2,
  CheckCircle2,
  AlertCircle,
  BookOpenCheck,
  Calendar,
  Compass,
  Laptop,
  Phone,
  Mail,
} from "lucide-react";

interface ThematicTrack {
  id: string;
  title: string;
  tagline?: string;
  topics: string[];
}

const THEMATIC_TRACKS: ThematicTrack[] = [
  {
    id: "01",
    title: "Training Workshop Sessions",
    tagline: "Practical • Hands-on • Beginner to Advanced • Bring your Laptop",
    topics: [
      "OpenStreetMap, Open Mapping & QGIS",
      "GeoAI, Artificial Intelligence & Spatial Data Science",
      "Earth Observation, Google Earth Engine & Digital Earth Africa",
      "Citizen Science, Mobile GIS, UAV & Climate/Disaster Mapping",
    ],
  },
  {
    id: "02",
    title: "Geospatial Innovation & Open Mapping",
    topics: [
      "OpenStreetMap, Open Mapping & Community Mapping",
      "Open-Source GIS, QGIS & Mobile GIS",
      "Earth Observation, Remote Sensing, UAVs & Geospatial Applications",
    ],
  },
  {
    id: "03",
    title: "GeoAI, Artificial Intelligence & Spatial Data Science",
    topics: [
      "GeoAI, Machine Learning & AI Assisted Mapping",
      "Computer Vision, Automated Feature Extraction & Spatial Analytics",
      "Big Geospatial Data, Predictive Modelling & Responsible AI",
    ],
  },
  {
    id: "04",
    title: "Climate Action, Disaster Risk Reduction & Community Resilience",
    topics: [
      "Climate Change Adaptation & Vulnerability Assessment",
      "Flood, Heat, Drought & Environmental Risk Mapping",
      "Disaster Risk Reduction, Emergency Response & Resilient Communities",
    ],
  },
  {
    id: "05",
    title: "Citizen Science, Community Mapping & Humanitarian Action",
    topics: [
      "Citizen Science, Citizen-Generated Data & Participatory Mapping",
      "Humanitarian, Crisis & Community Mapping",
      "Youth, Volunteers, Local Knowledge & Community Empowerment",
    ],
  },
  {
    id: "06",
    title: "Geospatial Applications, Education, Innovation & Sustainable Development",
    topics: [
      "Smart Cities, Health, Agriculture, Infrastructure, Transportation & Tourism",
      "Geospatial Education, Capacity Development & Digital Skills",
      "Entrepreneurship, Partnerships, Innovation & SDG Applications",
    ],
  },
  {
    id: "07",
    title: "Mapathon Sessions",
    tagline: "National Collaborative Open Mapping Sprint",
    topics: [
      "OpenStreetMap & Humanitarian Mapping",
      "Citizen Science & Disaster Response Mapping",
      "Community Mapping & Vulnerability Assessments",
    ],
  },
];

interface DateItem {
  n: string;
  label: string;
  date: string;
  highlight?: boolean;
}

const DATES: DateItem[] = [
  { n: "01", label: "Abstract submission begins", date: "1st August 2026" },
  { n: "02", label: "Deadline for Abstract submission", date: "24th October 2026", highlight: true },
  { n: "03", label: "Announcement of accepted papers", date: "3rd October 2026" },
  { n: "04", label: "Progressive review, feedback & full paper submission", date: "5th Sept – 31st Oct 2026" },
  { n: "05", label: "Conference dates (Arrival: 10th | Dep: 13th)", date: "10th – 13th November 2026", highlight: true },
];

function HeroBackdrop() {
  return (
    <Image
      src="https://2024.stateofthemapnigeria.org/wp-content/uploads/2024/06/call-for-abstract.jpg"
      alt="State of the Map Nigeria Call for Papers"
      fill
      sizes="100vw"
      style={{ objectFit: "cover", objectPosition: "center" }}
      priority
    />
  );
}

export default function ParticipatePage() {
  return (
    <div style={{ color: COLORS.paragraph, background: "white", minHeight: "100vh" }}>
      <style>{`
        .cfp-grid-2 { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .cfp-dates { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 1px; }
        .inquiry-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; }

        @media (max-width: 900px) {
          .inquiry-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 768px) {
          .cfp-grid-2 { grid-template-columns: 1fr; }
          .cfp-dates { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* ---------------- HERO ---------------- */}
      <section style={{ position: "relative", display: "flex", minHeight: 380, alignItems: "center", overflow: "hidden" }}>
        <HeroBackdrop />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.68)" }} />
        
        <div style={{ position: "relative", width: "100%", maxWidth: 840, margin: "0 auto", padding: "64px 20px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 16px",
              background: "rgba(0, 166, 62, 0.2)",
              border: "1px solid rgba(0, 166, 62, 0.45)",
              color: "#34D399",
              fontSize: 11,
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              marginBottom: 14,
            }}
          >
            <Calendar size={13} />
            10th – 13th November 2026 • University of Uyo Campus
          </div>

          <h1 style={{ fontWeight: 900, textTransform: "uppercase", lineHeight: 1.15, color: "white", fontSize: "clamp(24px, 5vw, 38px)", margin: "0 0 10px" }}>
            State of the Map Nigeria 2026
          </h1>

          <p style={{ maxWidth: 640, fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.95)", margin: "0 0 20px" }}>
            5th Annual Conference/Workshop &amp; AGA • Akwa Ibom State
          </p>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.2)", borderBottom: "1px solid rgba(255,255,255,0.2)", padding: "14px 20px", maxWidth: 760 }}>
            <p style={{ margin: 0, fontSize: 10.5, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.15em", color: COLORS.green }}>
              Conference Theme
            </p>
            <p style={{ margin: "6px 0 0", fontSize: "clamp(13px, 2.2vw, 16px)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.04em", color: "white" }}>
              Open Geospatial Innovation for Climate Action and Community Resilience
            </p>
          </div>

          <div style={{ marginTop: 18, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#34D399" }}>
            <span>FOCUS AREAS:</span>
            <span>GEOAI</span>
            <span>•</span>
            <span>CITIZEN SCIENCE</span>
            <span>•</span>
            <span>OPEN MAPPING</span>
            <span>•</span>
            <span>CLIMATE ACTION</span>
          </div>
        </div>
      </section>

      {/* ---------------- INTRO / SUBMISSION GUIDELINES ---------------- */}
      <section style={{ padding: "64px 0 0" }}>
        <div style={{ maxWidth: 840, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ textAlign: "center", marginBottom: 24 }}>
            <span style={{ fontSize: 11.5, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.12em", color: COLORS.green }}>
              Call for Papers
            </span>
            <h2 style={{ fontSize: "clamp(20px, 3vw, 26px)", fontWeight: 900, textTransform: "uppercase", color: COLORS.heading, margin: "6px 0 0" }}>
              Submission Guidelines
            </h2>
          </div>

          <p style={{ fontSize: 14, lineHeight: 1.8, color: COLORS.paragraph, textAlign: "justify", margin: "0 0 16px" }}>
            State of the Map Nigeria 2026 invites submissions for the <strong>Conference Presentation Track</strong>, including academic research, technical presentations, practical projects, case studies, community mapping, experiences, innovations, policy perspectives, and applied geospatial solutions. Authors should select the thematic track that best fits their submission. The thematic tracks are intended as guidance for programme organization and are not restrictive.
          </p>

          <div style={{ background: "#F8FAFC", border: `1px solid ${COLORS.line}`, padding: "20px 24px", margin: "24px 0" }}>
            <h4 style={{ margin: 0, fontSize: 12.5, fontWeight: 800, textTransform: "uppercase", color: COLORS.heading }}>
              General Note
            </h4>
            <p style={{ fontSize: 13, lineHeight: 1.7, color: COLORS.paragraph, margin: "8px 0 12px" }}>
              The suggested topics under each thematic track are indicative and not exhaustive. Authors are encouraged to submit original research papers, technical papers, case studies, project reports, innovative applications, community mapping experiences, policy perspectives, and practical solutions that align with the conference theme, focus areas, and thematic tracks.
            </p>
            <p style={{ fontSize: 12.5, lineHeight: 1.65, color: COLORS.muted, margin: 0 }}>
              Submissions are particularly welcome from researchers, academics, government agencies, development partners, geospatial professionals, students, young professionals, OpenStreetMap contributors, citizen scientists, humanitarian organizations, innovators, and technology practitioners.
            </p>
          </div>

          <div style={{ display: "flex", justifyContent: "center", marginTop: 28 }}>
            <a
              href="https://forms.gle/Evv1D2tv8cw9AvYP7"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: COLORS.green,
                color: "white",
                padding: "14px 40px",
                fontSize: 12,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              Submit Your Abstract (Google Form)
            </a>
          </div>
        </div>
      </section>

      {/* ---------------- THEMATIC TRACKS ---------------- */}
      <section style={{ padding: "64px 0 40px" }}>
        <div style={{ maxWidth: 896, margin: "0 auto", padding: "0 20px" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(15px,2.4vw,18px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.12em", color: COLORS.heading, margin: "0 0 32px" }}>
            Thematic Tracks &amp; Focus Sessions
          </h2>

          <div style={{ border: `1px solid ${COLORS.line}` }}>
            {THEMATIC_TRACKS.map((t, i) => (
              <div
                key={t.id}
                style={{
                  padding: "24px 28px",
                  borderBottom: i < THEMATIC_TRACKS.length - 1 ? `1px solid ${COLORS.line}` : "none",
                  display: "grid",
                  gridTemplateColumns: "50px 1fr",
                  gap: 16,
                  alignItems: "start",
                  background: i % 2 === 0 ? "white" : "#FAFAFA",
                }}
              >
                <span style={{ fontSize: 13, fontWeight: 900, color: COLORS.green }}>{t.id}</span>
                <div>
                  <h3 style={{ margin: 0, fontSize: 14, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.04em", color: COLORS.heading }}>
                    {t.title}
                  </h3>
                  {t.tagline && (
                    <p style={{ margin: "4px 0 8px", fontSize: 11.5, fontWeight: 700, color: COLORS.green, textTransform: "uppercase" }}>
                      {t.tagline}
                    </p>
                  )}
                  <div style={{ marginTop: 8, display: "flex", flexDirection: "column", gap: 6 }}>
                    {t.topics.map((topic, idx) => (
                      <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: COLORS.paragraph, lineHeight: 1.5 }}>
                        <span style={{ color: COLORS.green, fontWeight: 700 }}>•</span>
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- SUBMISSION REQUIREMENTS ---------------- */}
      <section style={{ padding: "56px 0", background: "#F8FAFC", borderTop: `1px solid ${COLORS.line}`, borderBottom: `1px solid ${COLORS.line}` }}>
        <div style={{ maxWidth: 896, margin: "0 auto", padding: "0 20px" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(15px,2.4vw,18px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.12em", color: COLORS.heading }}>
            Submission Categories &amp; Requirements
          </h2>

          <div className="cfp-grid-2" style={{ marginTop: 36, border: `1px solid ${COLORS.line}`, background: "white" }}>
            {/* Category A */}
            <div style={{ padding: "28px 28px", borderRight: `1px solid ${COLORS.line}` }}>
              <span style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", color: COLORS.green }}>Category A</span>
              <h3 style={{ marginTop: 6, fontSize: 14, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", color: COLORS.heading, margin: "6px 0 0" }}>
                General / Practical Presentations
              </h3>
              <p style={{ marginTop: 12, fontSize: 13.5, lineHeight: 1.6, color: COLORS.paragraph }}>
                For practical projects, case studies, community initiatives, mapping experiences, technical applications, and policy perspectives.
              </p>
              <div style={{ marginTop: 16, borderTop: `1px solid ${COLORS.line}`, paddingTop: 14, fontSize: 13, color: COLORS.paragraph }}>
                <p style={{ fontWeight: 700, margin: "0 0 8px", color: COLORS.heading }}>Requirements:</p>
                <ul style={{ margin: 0, paddingLeft: 18, display: "flex", flexDirection: "column", gap: 6 }}>
                  <li>Title of presentation</li>
                  <li>Full name(s) and affiliation(s)</li>
                  <li>Email address of corresponding author</li>
                  <li>Selected thematic track</li>
                  <li><strong>Abstract not more than 250 words</strong></li>
                </ul>
              </div>
            </div>

            {/* Category B */}
            <div style={{ padding: "28px 28px" }}>
              <span style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", color: COLORS.green }}>Category B</span>
              <h3 style={{ marginTop: 6, fontSize: 14, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", color: COLORS.heading, margin: "6px 0 0" }}>
                Academic / Research Presentations
              </h3>
              <p style={{ marginTop: 12, fontSize: 13.5, lineHeight: 1.6, color: COLORS.paragraph }}>
                For original research studies, methodological contributions, empirical studies, and evidence-based geospatial applications.
              </p>
              <div style={{ marginTop: 16, borderTop: `1px solid ${COLORS.line}`, paddingTop: 14, fontSize: 13, color: COLORS.paragraph }}>
                <p style={{ fontWeight: 700, margin: "0 0 8px", color: COLORS.heading }}>Extended Abstract (800–1,200 words):</p>
                <ul style={{ margin: 0, paddingLeft: 18, display: "flex", flexDirection: "column", gap: 6 }}>
                  <li>Background / Problem Statement</li>
                  <li>Aim and Objectives</li>
                  <li>Methodology &amp; Datasets</li>
                  <li>Key Findings / Results</li>
                  <li>Scientific Contribution &amp; Implications</li>
                  <li>Conclusion</li>
                </ul>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 32, padding: "24px 28px", border: `1px solid ${COLORS.line}`, background: "white" }}>
            <h3 style={{ margin: 0, fontSize: 12.5, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", color: COLORS.heading }}>
              Submission Format &amp; Publication
            </h3>
            <div style={{ marginTop: 12, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12, fontSize: 13, color: COLORS.paragraph }}>
              <div>• <strong>Font:</strong> Times New Roman, 12-point</div>
              <div>• <strong>Language:</strong> English</div>
              <div>• <strong>Format:</strong> MS Word (.doc/.docx) or PDF</div>
              <div>• <strong>Keywords:</strong> 3–5 keywords</div>
            </div>
            <p style={{ marginTop: 16, fontSize: 13, lineHeight: 1.7, color: COLORS.muted, margin: "16px 0 0" }}>
              Authors of accepted academic presentations may be invited to submit full papers for peer review and publication in a Special Edition of the State of the Map Nigeria Conference Book of Proceedings.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- IMPORTANT DATES ---------------- */}
      <section style={{ padding: "64px 0" }}>
        <div style={{ maxWidth: 1040, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <span style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.15em", color: COLORS.green }}>
              Timeline &amp; Deadlines
            </span>
            <h2 style={{ fontSize: "clamp(16px,2.4vw,20px)", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.1em", color: COLORS.heading, margin: "6px 0 0" }}>
              Important Dates
            </h2>
          </div>

          <div className="cfp-dates" style={{ maxWidth: 1000, margin: "0 auto", background: COLORS.line, padding: 1 }}>
            {DATES.map((d: DateItem) => {
              const active = d.highlight;
              return (
                <div key={d.n} style={{ padding: "22px 16px", background: active ? COLORS.green : "white", textAlign: "center" }}>
                  <p style={{ fontSize: 10, fontWeight: 800, color: active ? "rgba(255,255,255,0.85)" : COLORS.muted, margin: 0 }}>{d.n}</p>
                  <p style={{ marginTop: 10, fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", lineHeight: 1.4, color: active ? "white" : COLORS.heading }}>
                    {d.label}
                  </p>
                  <p style={{ marginTop: 8, fontSize: 11.5, fontWeight: 700, color: active ? "white" : COLORS.green }}>{d.date}</p>
                </div>
              );
            })}
          </div>

          {/* Arrival & Departure note */}
          <div style={{ marginTop: 24, textAlign: "center", display: "flex", justifyContent: "center", gap: 24, fontSize: 13, color: COLORS.paragraph }}>
            <span><strong>Arrival Date:</strong> 10th-Nov-2026</span>
            <span>•</span>
            <span><strong>Departure Date:</strong> 13th-Nov-2026</span>
          </div>
        </div>
      </section>

      {/* ---------------- INQUIRIES & CONTACT PERSONS ---------------- */}
      <section style={{ padding: "48px 0 64px", background: "#F8FAFC", borderTop: `1px solid ${COLORS.line}` }}>
        <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ textAlign: "center", marginBottom: 28 }}>
            <span style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", color: COLORS.green }}>
              Organizing Committee Support
            </span>
            <h3 style={{ margin: "4px 0 0", fontSize: 16, fontWeight: 900, textTransform: "uppercase", color: COLORS.heading }}>
              For Inquiries, Contact Unique Mappers Network, Nigeria
            </h3>
          </div>

          <div className="inquiry-grid">
            <div style={{ padding: "20px", background: "white", border: `1px solid ${COLORS.line}` }}>
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
                style={{ fontSize: 13, color: COLORS.paragraph, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6, marginTop: 8 }}
              >
                <Phone size={14} color={COLORS.green} /> +234 806 390 8020 (WhatsApp)
              </a>
            </div>

            <div style={{ padding: "20px", background: "white", border: `1px solid ${COLORS.line}` }}>
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
                style={{ fontSize: 13, color: COLORS.paragraph, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6, marginTop: 8 }}
              >
                <Phone size={14} color={COLORS.green} /> +234 901 872 6215 (WhatsApp)
              </a>
            </div>

            <div style={{ padding: "20px", background: "white", border: `1px solid ${COLORS.line}` }}>
              <span style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", color: COLORS.green, display: "block" }}>
                Co-Chair / Logistics / Academic Track
              </span>
              <strong style={{ fontSize: 14, color: COLORS.heading, display: "block", marginTop: 4 }}>
                Prof. Joseph Udoh
              </strong>
              <a
                href="tel:+2348038673326"
                style={{ fontSize: 13, color: COLORS.paragraph, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6, marginTop: 8 }}
              >
                <Phone size={14} color={COLORS.green} /> +234 803 867 3326
              </a>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: 24 }}>
            <p style={{ margin: 0, fontSize: 13, color: COLORS.paragraph }}>
              Official Secretariat Email:{" "}
              <a href="mailto:stateofthemapnigeria@gmail.com" style={{ color: COLORS.green, fontWeight: 700, textDecoration: "none" }}>
                stateofthemapnigeria@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- CLOSING CTA ---------------- */}
      <section id="submit" style={{ padding: "50px 0 80px", textAlign: "center" }}>
        <a
          href="https://forms.gle/Evv1D2tv8cw9AvYP7"
          target="_blank"
          rel="noopener noreferrer"
          style={{ background: COLORS.green, color: "white", padding: "14px 40px", fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", textDecoration: "none" }}
        >
          Click Here To Submit Abstract
        </a>

        <div style={{ marginTop: 40, borderTop: `1px solid ${COLORS.line}`, maxWidth: 840, margin: "40px auto 0", paddingTop: 24 }}>
          <p style={{ margin: 0, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: COLORS.heading }}>
            MAP TOGETHER • INNOVATE TOGETHER • BUILD RESILIENT COMMUNITIES TOGETHER.
          </p>
        </div>
      </section>
    </div>
  );
}
