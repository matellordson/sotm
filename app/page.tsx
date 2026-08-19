"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { COLORS } from "@/lib/colors";
import {
  Laptop,
  Presentation,
  MapPin,
  Compass,
  Users,
  Award,
  ArrowRight,
  Calendar,
  Layers,
  Cpu,
  Flame,
  Globe2,
  BookOpenCheck,
} from "lucide-react";

interface ScheduleDay {
  day: string;
  date: string;
  label: string;
}

const SCHEDULE_DAYS: ScheduleDay[] = [
  { day: "Tuesday", date: "03", label: "Workshops & Opening" },
  { day: "Wednesday", date: "04", label: "Paper Tracks & Expo" },
  { day: "Thursday", date: "05", label: "Mapathon & Tracks" },
  { day: "Friday", date: "06", label: "AGA & Closing" },
];

const FOCUS_AREAS = [
  { name: "GeoAI", icon: Cpu, desc: "Artificial Intelligence, ML & Spatial Data Science" },
  { name: "Citizen Science", icon: Users, desc: "Participatory Mapping & Local Knowledge" },
  { name: "Open Mapping", icon: Layers, desc: "OpenStreetMap, QGIS & Open-Source GIS" },
  { name: "Climate Action", icon: Flame, desc: "Disaster Risk Reduction & Resilience" },
];

interface ProgrammePillar {
  num: string;
  title: string;
  tagline: string;
  icon: typeof Laptop;
  points: string[];
}

const PROGRAMME_PILLARS: ProgrammePillar[] = [
  {
    num: "01",
    title: "Training Workshop Sessions",
    tagline: "Practical • Hands-on • Beginner to Advanced • Bring Your Laptop",
    icon: Laptop,
    points: [
      "OpenStreetMap, Open Mapping & QGIS",
      "GeoAI, Artificial Intelligence & Spatial Data Science",
      "Earth Observation, Google Earth Engine & Digital Earth Africa",
      "Citizen Science, Mobile GIS, UAV & Climate/Disaster Mapping",
    ],
  },
  {
    num: "02",
    title: "Conference Presentation Tracks",
    tagline: "5 Thematic Tracks for Academic Research & Practical Innovation",
    icon: Presentation,
    points: [
      "Geospatial Innovation & Open Mapping",
      "GeoAI, Artificial Intelligence & Spatial Data Science",
      "Climate Action, Disaster Risk Reduction & Community Resilience",
      "Citizen Science, Community Mapping & Humanitarian Action",
      "Geospatial Applications, Education, Innovation & SDGs",
    ],
  },
  {
    num: "03",
    title: "Mapathon Sessions",
    tagline: "Collaborative Community Mapping",
    icon: Compass,
    points: [
      "OpenStreetMap Collaborative Mapping",
      "Humanitarian & Crisis Mapping",
      "Citizen Science & Community Mapping",
      "Disaster Response & Vulnerability Assessments",
    ],
  },
  {
    num: "04",
    title: "Geospatial Exhibition",
    tagline: "Showcasing Technologies, Research & Innovations",
    icon: Globe2,
    points: [
      "Geospatial Technologies & Research Innovations",
      "Startups & Commercial GIS Products",
      "UAV Technologies & Earth Observation Applications",
      "Community & Youth Mapping Projects",
    ],
  },
  {
    num: "05",
    title: "Annual General Assembly (AGA)",
    tagline: "Leadership, Community Engagement & Strategic Discussions",
    icon: Award,
    points: [
      "OpenStreetMap Nigeria Community Engagement",
      "Annual Reporting & Milestone Review",
      "Ecosystem Leadership & Strategic Discussions",
      "Networking & Recognition of Outstanding Contributors",
    ],
  },
];

interface Speaker {
  name: string;
  role: string;
  img: string;
}

const SPEAKERS: Speaker[] = [
  {
    name: "Rev. Surv. Ez. Ndukwu Emmanuel Chiemelu",
    role: "University of Nigeria, Enugu",
    img: "https://placehold.co/300x300/1D293D/e2e8f0?text=Photo",
  },
  {
    name: "Laura Mujeha",
    role: "Member - Board of Directors",
    img: "https://placehold.co/300x300/45556C/e2e8f0?text=Photo",
  },
  {
    name: "Captain Tobi Sowole",
    role: "CEO, SpatialMatrix",
    img: "https://placehold.co/300x300/90A1B9/1D293D?text=Photo",
  },
];

// Target date the countdown counts down to (Day 1 of the conference: Nov 3, 2026)
const TARGET_DATE: Date = new Date("2026-11-03T09:00:00");

// Venue coordinates — University of Uyo, Akwa Ibom State, Nigeria
const VENUE_LAT: number = 5.0418;
const VENUE_LON: number = 7.9205;

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
}

function useCountdown(target: Date): TimeLeft {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = target.getTime() - Date.now();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000 * 30);
    return () => clearInterval(id);
  }, [target]);

  return timeLeft;
}

function pad(n: number): string {
  return String(n).padStart(2, "0");
}

function MapBackdrop() {
  return (
    <Image
      src="https://discoverakwaibom.com/wp-content/uploads/2024/11/DJI_0822-scaled.jpg"
      alt="State of the Map Nigeria Conference Venue - Akwa Ibom"
      fill
      sizes="100vw"
      style={{ objectFit: "cover", objectPosition: "center" }}
      priority
    />
  );
}

export default function ConferenceLandingPage() {
  const { days, hours, minutes } = useCountdown(TARGET_DATE);

  return (
    <div style={{ color: COLORS.paragraph, background: "white", minHeight: "100vh" }}>
      <style>{`
        .sotm-grid-2 { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .sotm-grid-3 { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; }
        .sotm-grid-4 { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 1px; }

        @media (max-width: 768px) {
          .sotm-grid-2 { grid-template-columns: 1fr; }
          .sotm-grid-3 { grid-template-columns: 1fr; }
          .sotm-grid-4 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
      `}</style>

      {/* ---------------- HERO ---------------- */}
      <section style={{ position: "relative", display: "flex", minHeight: 460, alignItems: "center", overflow: "hidden" }}>
        <MapBackdrop />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0, 0, 0, 0.65)" }} />
        
        <div style={{ position: "relative", width: "100%", maxWidth: 840, margin: "0 auto", padding: "72px 20px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          
          <p style={{ margin: 0, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: COLORS.green }}>
            3–6 November 2026 • University of Uyo, Nigeria
          </p>

          <h1 style={{ marginTop: 14, fontWeight: 900, textTransform: "uppercase", lineHeight: 1.15, color: "white", fontSize: "clamp(26px, 5.5vw, 44px)", margin: "14px 0 0", letterSpacing: "0.02em" }}>
            State of the Map Nigeria 2026
          </h1>

          <p style={{ marginTop: 14, fontSize: "clamp(13px, 2vw, 16px)", fontWeight: 600, color: "rgba(255,255,255,0.9)", maxWidth: 640, lineHeight: 1.6, margin: "14px auto 0" }}>
            Open Geospatial Innovation for Climate Action and Community Resilience
          </p>

          <div style={{ marginTop: 32, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
            <Link
              href="/register"
              style={{
                background: COLORS.green,
                padding: "14px 32px",
                fontSize: 12,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "white",
                textDecoration: "none",
              }}
            >
              Register
            </Link>
            <Link
              href="/participate"
              style={{
                background: "white",
                padding: "14px 28px",
                fontSize: 12,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: COLORS.heading,
                textDecoration: "none",
              }}
            >
              Call for Papers
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- COUNTDOWN & SCHEDULE ---------------- */}
      <section style={{ maxWidth: 896, margin: "0 auto", padding: "64px 20px", textAlign: "center" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", gap: 12, fontWeight: 800, color: COLORS.heading, fontSize: "clamp(28px, 5vw, 36px)" }}>
          <span>{pad(days)}</span>
          <span style={{ color: COLORS.muted }}>:</span>
          <span>{pad(hours)}</span>
          <span style={{ color: COLORS.muted }}>:</span>
          <span>{pad(minutes)}</span>
        </div>
        <div style={{ marginTop: 4, display: "flex", justifyContent: "center", gap: 32, fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: COLORS.muted }}>
          <span>Days</span>
          <span>Hours</span>
          <span>Min</span>
        </div>

        <div
          className="sotm-grid-4"
          style={{ maxWidth: 640, margin: "32px auto 0", background: COLORS.line, padding: 1 }}
        >
          {SCHEDULE_DAYS.map((d: ScheduleDay, i: number) => {
            const active = i === 0;
            return (
              <div key={d.day} style={{ padding: "16px 12px", background: active ? COLORS.green : "white" }}>
                <p style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: active ? "rgba(255,255,255,0.85)" : COLORS.muted, margin: 0 }}>
                  {d.day}
                </p>
                <p style={{ marginTop: 8, fontSize: "clamp(20px,4vw,28px)", fontWeight: 800, color: active ? "white" : COLORS.heading, margin: "8px 0 0" }}>
                  {d.date}
                </p>
                <p style={{ marginTop: 4, fontSize: 10, fontWeight: 600, color: active ? "rgba(255,255,255,0.9)" : COLORS.paragraph, margin: "4px 0 0" }}>
                  {d.label}
                </p>
              </div>
            );
          })}
        </div>
        <p style={{ marginTop: 20, fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: COLORS.heading }}>
          3–6 November 2026 • University of Uyo
        </p>

        {/* ---- Venue map ---- */}
        <div style={{ marginTop: 48 }}>
          <p style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: COLORS.heading, marginBottom: 4 }}>
            Conference Venue
          </p>
          <p style={{ fontSize: 13, color: COLORS.paragraph, marginBottom: 16 }}>
            University of Uyo, Ikpa Road, Uyo, Akwa Ibom State, Nigeria
          </p>
          <iframe
            title="University of Uyo location map"
            src={`https://www.openstreetmap.org/export/embed.html?bbox=${(VENUE_LON - 0.008).toFixed(5)}%2C${(VENUE_LAT - 0.005).toFixed(5)}%2C${(VENUE_LON + 0.008).toFixed(5)}%2C${(VENUE_LAT + 0.005).toFixed(5)}&layer=mapnik&marker=${VENUE_LAT}%2C${VENUE_LON}`}
            style={{ border: `1px solid ${COLORS.line}`, width: "100%", height: 320, display: "block" }}
            loading="lazy"
          />

          <a
            href={`https://www.openstreetmap.org/?mlat=${VENUE_LAT}&mlon=${VENUE_LON}#map=16/${VENUE_LAT}/${VENUE_LON}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "block", marginTop: 10, fontSize: 11.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: COLORS.green, textDecoration: "none" }}
          >
            View on OpenStreetMap →
          </a>
        </div>
      </section>

      {/* ---------------- FOCUS AREAS ---------------- */}
      <section style={{ padding: "64px 0", background: "#F8FAFC", borderTop: `1px solid ${COLORS.line}`, borderBottom: `1px solid ${COLORS.line}` }}>
        <div style={{ maxWidth: 896, margin: "0 auto", padding: "0 20px" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(14px,2.4vw,16px)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.15em", color: COLORS.heading, margin: 0 }}>
            Focus Areas
          </h2>

          <div className="sotm-grid-2" style={{ marginTop: 40, border: `1px solid ${COLORS.line}`, background: "white" }}>
            {FOCUS_AREAS.map((fa, i) => (
              <div
                key={fa.name}
                style={{
                  padding: "26px 28px",
                  borderRight: i % 2 === 0 ? `1px solid ${COLORS.line}` : "none",
                  borderBottom: i < 2 ? `1px solid ${COLORS.line}` : "none",
                }}
              >
                <h3 style={{ fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", color: COLORS.green, margin: 0 }}>
                  {fa.name}
                </h3>
                <p style={{ marginTop: 10, fontSize: 13.5, lineHeight: 1.6, color: COLORS.paragraph, margin: "10px 0 0" }}>
                  {fa.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- PROGRAMME STRUCTURE (5 PILLARS) ---------------- */}
      <section style={{ padding: "64px 0" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(14px,2.4vw,16px)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.15em", color: COLORS.heading, margin: 0 }}>
            Conference Programme Structure
          </h2>

          <div style={{ marginTop: 40, border: `1px solid ${COLORS.line}` }}>
            {PROGRAMME_PILLARS.map((pillar, i) => (
              <div
                key={pillar.num}
                style={{
                  padding: "24px 28px",
                  borderBottom: i < PROGRAMME_PILLARS.length - 1 ? `1px solid ${COLORS.line}` : "none",
                  display: "grid",
                  gridTemplateColumns: "60px 1fr",
                  gap: 20,
                  alignItems: "start",
                }}
              >
                <span style={{ fontSize: 16, fontWeight: 900, color: COLORS.green }}>{pillar.num}</span>

                <div>
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", justifyContent: "space-between", gap: 8 }}>
                    <h3 style={{ margin: 0, fontSize: 14, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", color: COLORS.heading }}>
                      {pillar.title}
                    </h3>
                    <span style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", color: COLORS.muted }}>
                      {pillar.tagline}
                    </span>
                  </div>

                  <div style={{ marginTop: 12, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 6 }}>
                    {pillar.points.map((pt, idx) => (
                      <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: COLORS.paragraph, lineHeight: 1.5 }}>
                        <span style={{ color: COLORS.green, fontWeight: 700 }}>•</span>
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 32, display: "flex", justifyContent: "center" }}>
            <Link
              href="/schedule"
              style={{
                background: COLORS.heading,
                color: "white",
                padding: "12px 28px",
                fontSize: 12,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                textDecoration: "none",
              }}
            >
              View Full Schedule →
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- CALL FOR PAPERS BANNER ---------------- */}
      <section style={{ background: COLORS.heading, color: "white", padding: "64px 0" }}>
        <div style={{ maxWidth: 840, margin: "0 auto", padding: "0 20px", textAlign: "center" }}>
          <p style={{ margin: 0, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: COLORS.green }}>
            Call for Papers
          </p>
          <h2 style={{ fontSize: "clamp(18px, 3vw, 24px)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", margin: "10px 0 0" }}>
            Submit Your Academic Research &amp; Practical Presentations
          </h2>
          <p style={{ marginTop: 14, fontSize: 13.5, lineHeight: 1.7, color: "rgba(255,255,255,0.8)" }}>
            Submissions are open for General / Practical Presentations (abstract ≤ 250 words) and Academic / Research Studies (extended abstract 800–1,200 words). Accepted papers will be peer-reviewed for publication in the Conference Book of Proceedings.
          </p>

          <div style={{ marginTop: 28, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
            <Link
              href="/participate"
              style={{
                background: COLORS.green,
                color: "white",
                padding: "12px 28px",
                fontSize: 12,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                textDecoration: "none",
              }}
            >
              Submission Guidelines
            </Link>
            <a
              href="https://forms.gle/Evv1D2tv8cw9AvYP7"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "white",
                color: COLORS.heading,
                padding: "12px 28px",
                fontSize: 12,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                textDecoration: "none",
              }}
            >
              Submit Abstract
            </a>
          </div>
        </div>
      </section>

      {/* ---------------- SPEAKERS ---------------- */}
      <section style={{ padding: "64px 0" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(14px,2.4vw,16px)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.15em", color: COLORS.heading, margin: 0 }}>
            Conference Speakers
          </h2>

          <div className="sotm-grid-3" style={{ marginTop: 40 }}>
            {SPEAKERS.map((s: Speaker) => (
              <div key={s.name} style={{ border: `1px solid ${COLORS.line}` }}>
                <img src={s.img} alt={s.name} style={{ display: "block", width: "100%", aspectRatio: "1 / 1", objectFit: "cover" }} />
                <div style={{ padding: 16 }}>
                  <p style={{ fontSize: 14, fontWeight: 700, lineHeight: 1.35, color: COLORS.green, margin: 0 }}>{s.name}</p>
                  <p style={{ marginTop: 4, fontSize: 12, color: COLORS.muted, margin: "4px 0 0" }}>{s.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- MOTTO BANNER ---------------- */}
      <section style={{ background: COLORS.green, color: "white", padding: "28px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: 840, margin: "0 auto" }}>
          <p style={{ margin: 0, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em" }}>
            MAP TOGETHER • INNOVATE TOGETHER • BUILD RESILIENT COMMUNITIES TOGETHER.
          </p>
        </div>
      </section>
    </div>
  );
}
