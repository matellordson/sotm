"use client";

import Image from "next/image";
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
} from "lucide-react";

interface ThematicTrack {
  id: string;
  title: string;
  topics: string[];
}

const THEMATIC_TRACKS: ThematicTrack[] = [
  {
    id: "01",
    title: "Geospatial Innovation & Open Mapping",
    topics: [
      "OpenStreetMap, Open Mapping & Community Mapping",
      "Open-Source GIS, QGIS & Mobile GIS",
      "Earth Observation, Remote Sensing, UAVs & Geospatial Applications",
    ],
  },
  {
    id: "02",
    title: "GeoAI, Artificial Intelligence & Spatial Data Science",
    topics: [
      "GeoAI, Machine Learning & AI-Assisted Mapping",
      "Computer Vision, Automated Feature Extraction & Spatial Analytics",
      "Big Geospatial Data, Predictive Modelling & Responsible AI",
    ],
  },
  {
    id: "03",
    title: "Climate Action, Disaster Risk Reduction & Community Resilience",
    topics: [
      "Climate Change Adaptation & Vulnerability Assessment",
      "Flood, Heat, Drought & Environmental Risk Mapping",
      "Disaster Risk Reduction, Emergency Response & Resilient Communities",
    ],
  },
  {
    id: "04",
    title: "Citizen Science, Community Mapping & Humanitarian Action",
    topics: [
      "Citizen Science, Citizen-Generated Data & Participatory Mapping",
      "Humanitarian, Crisis & Community Mapping",
      "Youth, Volunteers, Local Knowledge & Community Empowerment",
    ],
  },
  {
    id: "05",
    title: "Geospatial Applications, Education, Innovation & Sustainable Development",
    topics: [
      "Smart Cities, Health, Agriculture & Infrastructure",
      "Geospatial Education, Capacity Development & Digital Skills",
      "Entrepreneurship, Partnerships, Innovation & SDG Applications",
    ],
  },
];

interface DateItem {
  n: string;
  label: string;
  date: string;
}

const DATES: DateItem[] = [
  { n: "01", label: "Abstract submission opens", date: "1 June 2026" },
  { n: "02", label: "Abstract submission deadline", date: "31 Aug 2026 · 23:59 WAT" },
  { n: "03", label: "Notification of acceptance", date: "15 September 2026" },
  { n: "04", label: "Full paper submission deadline", date: "9 Oct 2026 · 23:59 WAT" },
  { n: "05", label: "Conference dates", date: "3–6 November 2026" },
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

        @media (max-width: 640px) {
          .cfp-grid-2 { grid-template-columns: 1fr; }
          .cfp-dates { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* ---------------- HERO ---------------- */}
      <section style={{ position: "relative", display: "flex", minHeight: 360, alignItems: "center", overflow: "hidden" }}>
        <HeroBackdrop />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.65)" }} />
        
        <div style={{ position: "relative", width: "100%", maxWidth: 760, margin: "0 auto", padding: "64px 20px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <p style={{ margin: 0, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: COLORS.green }}>
            Call for Papers &amp; Participation
          </p>

          <h1 style={{ marginTop: 14, fontWeight: 900, textTransform: "uppercase", lineHeight: 1.2, color: "white", fontSize: "clamp(24px, 5vw, 38px)", margin: "14px 0 0" }}>
            State of the Map Nigeria 2026
          </h1>

          <p style={{ marginTop: 12, maxWidth: 520, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.9)" }}>
            5th Annual Conference, Training Workshops &amp; AGA • 3–6 November 2026
          </p>

          <div style={{ marginTop: 24, borderTop: "1px solid rgba(255,255,255,0.2)", borderBottom: "1px solid rgba(255,255,255,0.2)", padding: "14px 20px" }}>
            <p style={{ margin: 0, fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: COLORS.green }}>
              Conference Theme
            </p>
            <p style={{ margin: "6px 0 0", fontSize: "clamp(12px, 2.2vw, 15px)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.04em", color: "white" }}>
              Open Geospatial Innovation for Climate Action and Community Resilience
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- INTRO / SUBMIT ---------------- */}
      <section style={{ padding: "64px 0 0" }}>
        <div style={{ maxWidth: 740, margin: "0 auto", padding: "0 20px", textAlign: "center" }}>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: COLORS.paragraph }}>
            State of the Map Nigeria 2026 invites submissions for the <strong>Conference Presentation Track</strong>, including academic research, technical presentations, practical projects, case studies, community mapping experiences, innovations, policy perspectives, and applied geospatial solutions.
          </p>
          <div style={{ marginTop: 28, display: "flex", justifyContent: "center" }}>
            <a
              href="https://forms.gle/Evv1D2tv8cw9AvYP7"
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: COLORS.green, color: "white", padding: "14px 40px", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", textDecoration: "none" }}
            >
              Submit Your Abstract
            </a>
          </div>
        </div>
      </section>

      {/* ---------------- THEMATIC TRACKS ---------------- */}
      <section style={{ padding: "56px 0" }}>
        <div style={{ maxWidth: 896, margin: "0 auto", padding: "0 20px" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(14px,2.4vw,16px)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.15em", color: COLORS.heading }}>
            Conference Thematic Tracks
          </h2>

          <div style={{ marginTop: 40, border: `1px solid ${COLORS.line}` }}>
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
                }}
              >
                <span style={{ fontSize: 12, fontWeight: 800, color: COLORS.green }}>{t.id}</span>
                <div>
                  <h3 style={{ margin: 0, fontSize: 14, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.04em", color: COLORS.heading }}>
                    {t.title}
                  </h3>
                  <div style={{ marginTop: 10, display: "flex", flexDirection: "column", gap: 6 }}>
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
          <h2 style={{ textAlign: "center", fontSize: "clamp(14px,2.4vw,16px)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.15em", color: COLORS.heading }}>
            Submission Categories &amp; Guidelines
          </h2>

          <div className="cfp-grid-2" style={{ marginTop: 40, border: `1px solid ${COLORS.line}`, background: "white" }}>
            {/* Category A */}
            <div style={{ padding: "28px 28px", borderRight: `1px solid ${COLORS.line}` }}>
              <span style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", color: COLORS.green }}>Category A</span>
              <h3 style={{ marginTop: 6, fontSize: 13, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", color: COLORS.heading, margin: "6px 0 0" }}>
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
              <h3 style={{ marginTop: 6, fontSize: 13, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", color: COLORS.heading, margin: "6px 0 0" }}>
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
            <h3 style={{ margin: 0, fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", color: COLORS.heading }}>
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
          <h2 style={{ textAlign: "center", fontSize: "clamp(14px,2.4vw,16px)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.15em", color: COLORS.heading }}>
            Important Dates
          </h2>

          <div className="cfp-dates" style={{ maxWidth: 960, margin: "40px auto 0", background: COLORS.line, padding: 1 }}>
            {DATES.map((d: DateItem, i: number) => {
              const active = i === 1;
              return (
                <div key={d.n} style={{ padding: "20px 16px", background: active ? COLORS.green : "white", textAlign: "center" }}>
                  <p style={{ fontSize: 10, fontWeight: 700, color: active ? "rgba(255,255,255,0.85)" : COLORS.muted, margin: 0 }}>{d.n}</p>
                  <p style={{ marginTop: 10, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", lineHeight: 1.4, color: active ? "white" : COLORS.heading }}>
                    {d.label}
                  </p>
                  <p style={{ marginTop: 8, fontSize: 11, fontWeight: 600, color: active ? "rgba(255,255,255,0.85)" : COLORS.muted }}>{d.date}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- CLOSING CTA ---------------- */}
      <section id="submit" style={{ padding: "0 0 80px", textAlign: "center" }}>
        <a
          href="https://forms.gle/Evv1D2tv8cw9AvYP7"
          target="_blank"
          rel="noopener noreferrer"
          style={{ background: COLORS.green, color: "white", padding: "14px 40px", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", textDecoration: "none" }}
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


