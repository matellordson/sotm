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
  ChevronDown,
  ChevronUp,
} from "lucide-react";

interface ScheduleDay {
  day: string;
  date: string;
  label: string;
}

const SCHEDULE_DAYS: ScheduleDay[] = [
  { day: "Tuesday", date: "17", label: "Workshops & Opening" },
  { day: "Wednesday", date: "18", label: "Paper Tracks & Expo" },
  { day: "Thursday", date: "19", label: "Mapathon & Tracks" },
  { day: "Friday", date: "20", label: "AGA & Closing" },
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
  badge: "Lead Keynote Speaker" | "Keynote Speaker";
  role: string;
  topic?: string;
  bio?: string;
  img: string;
}

interface WorkshopTrainer {
  name: string;
  badge: string;
  role: string;
  workshopTitle: string;
  img: string;
}

const KEYNOTE_SPEAKERS: Speaker[] = [
  {
    name: "Professor Robert Etim Ekpenyong",
    badge: "Lead Keynote Speaker",
    role: "Department of Geography & Natural Resources Management, University of Uyo, Akwa Ibom State",
    topic: "Open Geospatial Innovation for Climate Action and Community Resilience: The Role of Geography, Technology and Communities.",
    bio: "Professor Robert Etim Ekpenyong is a distinguished academic researcher and lecturer in Geography and Natural Resources Management at the University of Uyo. His research specializes in Geographic Information Systems (GIS), Remote Sensing, Cartography, and Environmental & Resources Management, with extensive work in climate change threats, carbon stocks/sequestration, and erosion risk modeling.",
    img: "/speakers/robert_ekpenyong.jpg",
  },
  {
    name: "Dr. Ibrahimaa Cisse",
    badge: "Keynote Speaker",
    role: "Regional Director, Open Mapping Hub West & North Africa — Humanitarian OpenStreetMap Team (HOT)",
    topic: "Citizen Science, Community Mapping & Humanitarian Action",
    bio: "Dr. Ibrahimaa Cisse is the Regional Director for the Open Mapping Hub in Western and Northern Africa at the Humanitarian OpenStreetMap Team (HOT). He leads regional open-mapping initiatives across Africa, mobilizing local communities and global volunteers to leverage open geospatial data for disaster risk reduction, crisis response, and sustainable development.",
    img: "/speakers/ibrahimaa_cisse.svg",
  },
  {
    name: "Dr. Caroline Nickerson",
    badge: "Keynote Speaker",
    role: "Executive Director & Co-Founder, Florida Community Innovation • NASA EMERGE Initiative • CitSci.org",
    topic: "From Citizens to Scientists: Harnessing Citizen Science and Community Data for Climate Action and Resilience",
    bio: "Dr. Caroline Nickerson is a communications and citizen science professional who works at the intersection of community engagement, open data, and civic technology. She is Executive Director and co-founder of Florida Community Innovation, a civic technology nonprofit, and Communications Specialist at Colorado State University's Natural Resource Ecology Laboratory and CitSci.org, a global citizen science platform. She also serves as Communications Lead for the NASA-funded EMERGE initiative at the University of Florida's GeoDI Lab and as Citizen Science Coordinator at the Human Computation Institute. Caroline holds a PhD in Agricultural Education and Communication from the University of Florida. She previously delivered a keynote at State of the Map Nigeria 2024.",
    img: "/speakers/caroline_nickerson.jpg",
  },
  {
    name: "Dr. AA Usman",
    badge: "Keynote Speaker",
    role: "Founder/CEO RESLARC Group • Founder & Executive Chairman, Geospatial Intelligence Foundation of Nigeria (GIFON)",
    topic: "From Geospatial Information to Spatial Intelligence: Democratizing Decision Making in the Digital Age",
    bio: "Dr. AA Usman is the Founder and CEO of RESLARC Group and Founder & Executive Chairman of the Geospatial Intelligence Foundation of Nigeria (GIFON). He is an authority in spatial intelligence, geospatial infrastructure, and democratizing spatial decision-making tools for institutions and grassroots communities.",
    img: "/speakers/aa_usman.svg",
  },
  {
    name: "Prof. Rebecca Boger",
    badge: "Keynote Speaker",
    role: "Professor, Brooklyn College, CUNY • Vice President & Co-Founder, Next Generation Global Collaborative",
    topic: "Geospatial Technologies, Urban Sustainability & Citizen Science Education",
    bio: "Rebecca Boger is a founding member and Vice President of the nonprofit Next Generation Global Collaborative (nextgenglobe.org). She is a professor in the Department of Earth and Environmental Sciences at Brooklyn College, City University of New York (CUNY). She has a background in geospatial technologies, mapping, environmental science, and science education. She teaches geospatial technologies (GIS, remote sensing, and GPS) and urban sustainability courses. She is the Director of Science, Training, Education, and Public Engagement for the NASA GLOBE Implementation Office (GIO-STEPE). In 2022-2023, Rebecca was a Fulbright Scholar in Kenya where she worked with faculty from the United States International University and representatives at the Kenya Space Agency.",
    img: "/speakers/rebecca_boger.jpg",
  },
];

const WORKSHOP_TRAINERS: WorkshopTrainer[] = [
  {
    name: "Samson Feranmi Ayodele",
    badge: "Workshop Trainer",
    role: "Geospatial Analyst & Climate Data Specialist",
    workshopTitle: "Use of Climate Data: From Downloading to Data Embellishment",
    img: "/speakers/samson_ayodele.jpg",
  },
];

// Target date the countdown counts down to (Day 1 of the conference: Nov 17, 2026)
const TARGET_DATE: Date = new Date("2026-11-17T09:00:00");

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
  const [expandedBio, setExpandedBio] = useState<string | null>(null);
  const toggleBio = (name: string) => setExpandedBio((prev) => (prev === name ? null : name));

  return (
    <div style={{ color: COLORS.paragraph, background: "white", minHeight: "100vh" }}>
      <style>{`
        .sotm-grid-2 { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .sotm-grid-3 { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; }
        .sotm-grid-4 { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 1px; }

        .speakers-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }
        @media (max-width: 900px) {
          .speakers-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (max-width: 580px) {
          .speakers-grid {
            grid-template-columns: 1fr;
          }
        }

        /* Focus Areas Responsive Grid */
        .focus-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          border: 1px solid ${COLORS.line};
          background: white;
        }
        .focus-card {
          padding: 26px 28px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .focus-card:nth-child(odd) {
          border-right: 1px solid ${COLORS.line};
        }
        .focus-card:nth-child(-n+2) {
          border-bottom: 1px solid ${COLORS.line};
        }

        /* Programme Structure Responsive Grid */
        .programme-container {
          margin-top: 40px;
          border: 1px solid ${COLORS.line};
          background: white;
        }
        .programme-item {
          padding: 24px 28px;
          display: grid;
          grid-template-columns: 64px 1fr;
          gap: 20px;
          align-items: start;
        }
        .programme-item:not(:last-child) {
          border-bottom: 1px solid ${COLORS.line};
        }
        .programme-header {
          display: flex;
          flex-wrap: wrap;
          align-items: baseline;
          justify-content: space-between;
          gap: 8px;
        }
        .programme-points-grid {
          margin-top: 12px;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 8px 24px;
        }

        @media (max-width: 768px) {
          .sotm-grid-2 { grid-template-columns: 1fr; }
          .sotm-grid-3 { grid-template-columns: 1fr; }
          .sotm-grid-4 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }

        @media (max-width: 680px) {
          .focus-grid {
            grid-template-columns: 1fr;
          }
          .focus-card {
            padding: 20px 18px;
          }
          .focus-card:nth-child(odd) {
            border-right: none;
          }
          .focus-card:nth-child(-n+2) {
            border-bottom: none;
          }
          .focus-card:not(:last-child) {
            border-bottom: 1px solid ${COLORS.line};
          }

          .programme-item {
            padding: 20px 16px;
            display: flex;
            flex-direction: column;
            gap: 12px;
          }
          .programme-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 4px;
          }
          .programme-points-grid {
            grid-template-columns: 1fr;
            gap: 8px;
          }
        }
      `}</style>

      {/* ---------------- HERO ---------------- */}
      <section style={{ position: "relative", display: "flex", minHeight: 460, alignItems: "center", overflow: "hidden" }}>
        <MapBackdrop />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0, 0, 0, 0.65)" }} />
        
        <div style={{ position: "relative", width: "100%", maxWidth: 840, margin: "0 auto", padding: "72px 20px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          
          <p style={{ margin: 0, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: COLORS.green }}>
            17th – 20th November 2026 • University of Uyo, Nigeria
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
            <a
              href="https://paystack.shop/pay/sotmnigeria2025_donation"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "transparent",
                border: "2px solid rgba(255,255,255,0.7)",
                padding: "12px 28px",
                fontSize: 12,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "white",
                textDecoration: "none",
              }}
            >
              Donate (₦ Naira)
            </a>
            <a
              href="https://paystack.shop/pay/sotmnigeria2025donation"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "transparent",
                border: "2px solid rgba(255,255,255,0.7)",
                padding: "12px 28px",
                fontSize: 12,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "white",
                textDecoration: "none",
              }}
            >
              Donate ($ USD)
            </a>
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
          17th – 20th November 2026 • University of Uyo
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

          <div className="focus-grid" style={{ marginTop: 40 }}>
            {FOCUS_AREAS.map((fa) => {
              const IconComp = fa.icon;
              return (
                <div key={fa.name} className="focus-card">
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: 6,
                        background: "rgba(0, 166, 62, 0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <IconComp size={16} color={COLORS.green} />
                    </div>
                    <h3 style={{ fontSize: 13, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", color: COLORS.green, margin: 0 }}>
                      {fa.name}
                    </h3>
                  </div>
                  <p style={{ marginTop: 4, fontSize: 13.5, lineHeight: 1.6, color: COLORS.paragraph, margin: 0 }}>
                    {fa.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- PROGRAMME STRUCTURE (5 PILLARS) ---------------- */}
      <section style={{ padding: "64px 0" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(14px,2.4vw,16px)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.15em", color: COLORS.heading, margin: 0 }}>
            Conference Programme Structure
          </h2>

          <div className="programme-container">
            {PROGRAMME_PILLARS.map((pillar) => {
              const IconComp = pillar.icon;
              return (
                <div key={pillar.num} className="programme-item">
                  {/* Left Column (Desktop) / Top badge row (Mobile) */}
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ fontSize: 18, fontWeight: 900, color: COLORS.green, lineHeight: 1 }}>
                      {pillar.num}
                    </span>
                    <div
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: 4,
                        background: "rgba(0, 166, 62, 0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <IconComp size={15} color={COLORS.green} />
                    </div>
                  </div>

                  {/* Right Column: Header & Points */}
                  <div style={{ width: "100%" }}>
                    <div className="programme-header">
                      <h3 style={{ margin: 0, fontSize: 14, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", color: COLORS.heading }}>
                        {pillar.title}
                      </h3>
                      <span style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", color: COLORS.muted }}>
                        {pillar.tagline}
                      </span>
                    </div>

                    <div className="programme-points-grid">
                      {pillar.points.map((pt, idx) => (
                        <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: COLORS.paragraph, lineHeight: 1.5 }}>
                          <span style={{ color: COLORS.green, fontWeight: 700, flexShrink: 0 }}>•</span>
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
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

      {/* ---------------- KEYNOTE SPEAKERS ---------------- */}
      <section style={{ padding: "72px 0 64px", background: "#FFFFFF" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.15em", color: COLORS.green }}>
              Distinguished Guests &amp; Thought Leaders
            </span>
            <h2 style={{ fontSize: "clamp(20px, 3.5vw, 28px)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", color: COLORS.heading, margin: "8px 0 0" }}>
              Keynote Speakers
            </h2>
            <p style={{ maxWidth: 640, margin: "10px auto 0", fontSize: 13.5, color: COLORS.paragraph, lineHeight: 1.6 }}>
              Leading scholars, practitioners, and advocates shaping the future of open geospatial innovation, GeoAI, citizen science, and climate resilience.
            </p>
          </div>

          <div className="speakers-grid">
            {KEYNOTE_SPEAKERS.map((s: Speaker) => {
              const isLead = s.badge === "Lead Keynote Speaker";
              const isExpanded = expandedBio === s.name;
              return (
                <div
                  key={s.name}
                  style={{
                    border: isLead ? `2px solid ${COLORS.green}` : `1px solid ${COLORS.line}`,
                    background: "white",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 3,
                    overflow: "hidden",
                    boxShadow: isLead ? "0 4px 16px rgba(46,125,50,0.14)" : "0 1px 3px rgba(0,0,0,0.04)",
                  }}
                >
                  <div style={{ position: "relative", width: "100%", aspectRatio: "1 / 1", background: "#F1F5F9", overflow: "hidden" }}>
                    <img
                      src={s.img}
                      alt={s.name}
                      style={{
                        display: "block",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "top center",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: 12,
                        left: 12,
                        background: isLead ? COLORS.green : COLORS.heading,
                        color: "white",
                        fontSize: 10,
                        fontWeight: 800,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        padding: "5px 10px",
                        borderRadius: 2,
                        boxShadow: "0 2px 4px rgba(0,0,0,0.25)",
                      }}
                    >
                      {s.badge}
                    </div>
                  </div>

                  <div style={{ padding: "20px 18px", display: "flex", flexDirection: "column", flex: 1 }}>
                    <h3 style={{ fontSize: 16, fontWeight: 800, lineHeight: 1.35, color: COLORS.heading, margin: 0 }}>
                      {s.name}
                    </h3>
                    <p style={{ marginTop: 6, fontSize: 12, fontWeight: 600, color: COLORS.paragraph, lineHeight: 1.45 }}>
                      {s.role}
                    </p>

                    {s.topic && (
                      <div
                        style={{
                          marginTop: 14,
                          padding: "10px 12px",
                          background: "#F8FAFC",
                          borderLeft: `3px solid ${isLead ? COLORS.green : COLORS.heading}`,
                          borderRadius: 2,
                        }}
                      >
                        <span style={{ fontSize: 9.5, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", color: isLead ? COLORS.green : COLORS.muted, display: "block", marginBottom: 3 }}>
                          Keynote Presentation
                        </span>
                        <p style={{ margin: 0, fontSize: 12, fontWeight: 700, color: COLORS.heading, lineHeight: 1.4 }}>
                          &ldquo;{s.topic}&rdquo;
                        </p>
                      </div>
                    )}

                    {s.bio && (
                      <div style={{ marginTop: "auto", paddingTop: 14 }}>
                        <button
                          type="button"
                          onClick={() => toggleBio(s.name)}
                          style={{
                            background: "transparent",
                            border: "none",
                            padding: 0,
                            color: COLORS.green,
                            fontSize: 12,
                            fontWeight: 700,
                            cursor: "pointer",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 4,
                          }}
                        >
                          {isExpanded ? "Hide Biography" : "Read Biography"}
                          {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                        </button>
                        {isExpanded && (
                          <p style={{ marginTop: 8, fontSize: 12, lineHeight: 1.6, color: COLORS.paragraph, background: "#F8FAFC", padding: "12px", border: `1px solid ${COLORS.line}`, borderRadius: 2 }}>
                            {s.bio}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* ---------------- WORKSHOP TRAINERS (SEPARATED) ---------------- */}
          <div style={{ marginTop: 72, paddingTop: 56, borderTop: `1px solid ${COLORS.line}` }}>
            <div style={{ textAlign: "center", marginBottom: 36 }}>
              <span style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.15em", color: COLORS.green }}>
                Practical Masterclasses &amp; Labs
              </span>
              <h3 style={{ fontSize: "clamp(18px, 3vw, 24px)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", color: COLORS.heading, margin: "8px 0 0" }}>
                Workshop Trainers
              </h3>
              <p style={{ maxWidth: 640, margin: "8px auto 0", fontSize: 13.5, color: COLORS.paragraph, lineHeight: 1.6 }}>
                Expert instructors leading practical capacity development sessions and technical masterclasses.
              </p>
            </div>

            <div style={{ maxWidth: 640, margin: "0 auto" }}>
              {WORKSHOP_TRAINERS.map((t: WorkshopTrainer) => (
                <div
                  key={t.name}
                  style={{
                    border: `1px solid ${COLORS.line}`,
                    background: "white",
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    alignItems: "center",
                    gap: 20,
                    padding: 20,
                    borderRadius: 3,
                    boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                  }}
                >
                  <div style={{ width: 120, height: 120, flexShrink: 0, position: "relative", borderRadius: 2, overflow: "hidden", background: "#F1F5F9" }}>
                    <img
                      src={t.img}
                      alt={t.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                  <div style={{ flex: 1, minWidth: 240 }}>
                    <span
                      style={{
                        display: "inline-block",
                        background: "#0284C7",
                        color: "white",
                        fontSize: 9.5,
                        fontWeight: 800,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        padding: "3px 8px",
                        borderRadius: 2,
                        marginBottom: 6,
                      }}
                    >
                      {t.badge}
                    </span>
                    <h4 style={{ margin: "2px 0 4px", fontSize: 16, fontWeight: 800, color: COLORS.heading }}>
                      {t.name}
                    </h4>
                    <p style={{ margin: "0 0 10px", fontSize: 12, color: COLORS.paragraph }}>
                      {t.role}
                    </p>
                    <div style={{ padding: "8px 12px", background: "#F0F9FF", borderLeft: "3px solid #0284C7", borderRadius: 2 }}>
                      <span style={{ fontSize: 9.5, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", color: "#0284C7", display: "block" }}>
                        Workshop Masterclass
                      </span>
                      <p style={{ margin: "2px 0 0", fontSize: 12.5, fontWeight: 700, color: COLORS.heading }}>
                        &ldquo;{t.workshopTitle}&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
