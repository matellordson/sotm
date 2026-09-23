"use client";

import Image from "next/image";
import { COLORS } from "@/lib/colors";
import {
  MapPin,
  GraduationCap,
  Sparkles,
  Rocket,
  Building2,
  Landmark,
  Briefcase,
  BookOpen,
  ShieldCheck,
  ScrollText,
} from "lucide-react";

interface AudienceGroup {
  Icon: typeof MapPin;
  title: string;
  body: string;
}

const AUDIENCE: AudienceGroup[] = [
  { Icon: MapPin, title: "Mapping Enthusiasts & OSM Contributors", body: "Active mappers and grassroots local chapter leaders across Nigeria and Africa." },
  { Icon: GraduationCap, title: "Academia & Researchers", body: "Scholars and students from Geoinformatics, Geography, Surveying, Remote Sensing, and Computer Science." },
  { Icon: Sparkles, title: "Forward-Thinking Mapping Experts", body: "Industry specialists driving digital cartography, AI-assisted feature extraction, and location intelligence." },
  { Icon: Rocket, title: "Startups & Geospatial Leaders", body: "Innovators building commercial GIS tools, satellite data services, and UAV photogrammetry products." },
  { Icon: Building2, title: "Humanitarian & Development Organizations", body: "Partners like HOT, Red Cross, SciStarter, UN agencies, and disaster response teams." },
  { Icon: Landmark, title: "Government Ministries & Agencies", body: "Federal, state, and municipal mapping and environmental protection agencies." },
  { Icon: Briefcase, title: "Geospatial Professionals", body: "Surveyors, GIS analysts, software engineers, and environmental planners." },
  { Icon: BookOpen, title: "Students & Young Professionals", body: "Future leaders building careers in spatial data science, open mapping, and climate technologies." },
];

function HeroBackdrop() {
  return (
    <Image
      src="https://www.ibomair.com/wp-content/uploads/2022/01/hl81gtkfqex41.jpg"
      alt="State of the Map Nigeria Conference Venue - Akwa Ibom State"
      fill
      sizes="100vw"
      style={{ objectFit: "cover", objectPosition: "center" }}
      priority
    />
  );
}

export default function AboutPage() {
  return (
    <div style={{ color: COLORS.paragraph, background: "white", minHeight: "100vh" }}>
      <style>{`
        .about-grid-2 { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 40px; align-items: start; }
        .about-audience-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 1px; background: ${COLORS.line}; }

        @media (max-width: 900px) {
          .about-audience-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .about-grid-2 { grid-template-columns: 1fr; }
        }
        @media (max-width: 560px) {
          .about-audience-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* ---------------- HERO ---------------- */}
      <section style={{ position: "relative", display: "flex", minHeight: 360, alignItems: "center", overflow: "hidden" }}>
        <HeroBackdrop />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.65)" }} />
        
        <div style={{ position: "relative", width: "100%", maxWidth: 760, margin: "0 auto", padding: "64px 20px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <p style={{ margin: 0, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: COLORS.green }}>
            5th Annual Conference, Training Workshops &amp; AGA
          </p>

          <h1 style={{ marginTop: 14, fontWeight: 900, textTransform: "uppercase", lineHeight: 1.2, color: "white", fontSize: "clamp(24px, 5vw, 38px)", margin: "14px 0 0" }}>
            State of the Map Nigeria 2026
          </h1>
          <p style={{ marginTop: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(255,255,255,0.9)", fontSize: "clamp(12px, 2.2vw, 15px)" }}>
            10th – 13th November 2026 • University of Uyo, Akwa Ibom State
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

      {/* ---------------- INTRO / ABOUT SOTM ---------------- */}
      <section style={{ padding: "64px 0" }}>
        <div className="about-grid-2" style={{ maxWidth: 896, margin: "0 auto", padding: "0 20px" }}>
          <div>
            <h2 style={{ fontSize: "clamp(16px, 2.8vw, 20px)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", color: COLORS.heading, margin: "0 0 16px" }}>
              Nigeria&apos;s Flagship Open Geospatial Conference
            </h2>
            <p style={{ fontWeight: 600, fontSize: 13.5, lineHeight: 1.7, color: COLORS.heading }}>
              State of the Map Nigeria (SOTM Nigeria) is the official annual conference bringing together contributors, researchers, developers, and practitioners of OpenStreetMap and open geospatial technology across Nigeria and beyond.
            </p>
            <p style={{ marginTop: 14, fontSize: 13.5, lineHeight: 1.7, color: COLORS.paragraph }}>
              Now in its <strong>5th Annual Edition</strong>, SOTM Nigeria 2026 takes place at the <strong>University of Uyo, Akwa Ibom State</strong> from <strong>10th – 13th November 2026</strong>. The event provides a collaborative platform to explore cutting-edge developments in GeoAI, Citizen Science, Open Mapping, and Climate Action.
            </p>
            <p style={{ marginTop: 14, fontSize: 13.5, lineHeight: 1.7, color: COLORS.paragraph }}>
              Through hands-on training workshops, peer-reviewed academic presentations, dynamic mapathons, commercial exhibitions, and the Annual General Assembly (AGA), SOTM Nigeria accelerates community empowerment and evidence-based decision-making.
            </p>
          </div>
          
          <div style={{ border: `1px solid ${COLORS.line}`, background: "#F8FAFC", padding: "28px 24px" }}>
            <h3 style={{ margin: 0, fontSize: 13, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", color: COLORS.heading }}>
              Conference Focus Areas
            </h3>
            <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { name: "GeoAI & Spatial Data Science", desc: "Machine learning, automated feature extraction, predictive analytics" },
                { name: "Citizen Science & Humanitarian Action", desc: "Participatory mapping, local knowledge, grassroots empowerment" },
                { name: "Open Mapping & Open-Source GIS", desc: "OpenStreetMap, QGIS, mobile GIS tools, and open geospatial data pools" },
                { name: "Climate Action & DRR", desc: "Vulnerability mapping, disaster risk reduction, and resilient infrastructure" },
              ].map((area, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <span style={{ color: COLORS.green, fontWeight: 800 }}>•</span>
                  <div>
                    <span style={{ fontSize: 13, fontWeight: 700, color: COLORS.heading }}>{area.name}</span>
                    <p style={{ margin: "2px 0 0", fontSize: 12, color: COLORS.muted }}>{area.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- ORGANIZERS / OUR BRAND ---------------- */}
      <section style={{ padding: "64px 0", background: "#F8FAFC", borderTop: `1px solid ${COLORS.line}`, borderBottom: `1px solid ${COLORS.line}` }}>
        <div className="about-grid-2" style={{ maxWidth: 896, margin: "0 auto", padding: "0 20px" }}>
          <div>
            <h2 style={{ fontSize: "clamp(16px, 2.8vw, 20px)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", color: COLORS.heading, margin: "0 0 16px" }}>
              Unique Mappers Network &amp; OSM Nigeria
            </h2>
            <p style={{ fontSize: 13.5, lineHeight: 1.7, color: COLORS.paragraph }}>
              <strong>Unique Mappers Network</strong> is an NGO and active OpenStreetMap community hub dedicated to Open Data Development, Mobile Data Collection, Citizen Science Projects, Open Source Geospatial, GeoForAll Lab, Flying Lab, Youth &amp; Women Empowerment, SDGs, and Humanitarian Crisis Response in Nigeria and Africa.
            </p>
            <p style={{ marginTop: 14, fontSize: 13.5, lineHeight: 1.7, color: COLORS.paragraph }}>
              Together with nationwide chapters, academic institutions, and international mapping partners, we organize State of the Map Nigeria to build resilient, data-empowered communities.
            </p>
          </div>

          <div style={{ padding: "32px 28px", background: "white", border: `1px solid ${COLORS.line}`, textAlign: "center" }}>
            <h3 style={{ margin: 0, fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", color: COLORS.heading }}>
              Our Conference Motto
            </h3>
            <p style={{ margin: "16px 0 0", fontSize: 13, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", color: COLORS.green, lineHeight: 1.6 }}>
              MAP TOGETHER • INNOVATE TOGETHER • BUILD RESILIENT COMMUNITIES TOGETHER.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- AUDIENCE ---------------- */}
      <section style={{ padding: "64px 0", background: COLORS.heading }}>
        <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ textAlign: "center" }}>
            <h2 style={{ fontSize: "clamp(16px,2.8vw,22px)", fontWeight: 800, color: "white", margin: 0, textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Who Attends SOTM Nigeria?
            </h2>
            <p style={{ marginTop: 8, fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.7)" }}>
              A cross-disciplinary network of practitioners
            </p>
          </div>

          <div className="about-audience-grid" style={{ marginTop: 32, border: `1px solid ${COLORS.line}` }}>
            {AUDIENCE.map(({ title, body }: AudienceGroup) => (
              <div key={title} style={{ background: "white", padding: "20px 18px" }}>
                <p style={{ margin: 0, fontSize: 12, fontWeight: 800, color: COLORS.heading, lineHeight: 1.3, textTransform: "uppercase" }}>{title}</p>
                <p style={{ marginTop: 6, fontSize: 12, lineHeight: 1.5, color: COLORS.muted, margin: "6px 0 0" }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CODE OF CONDUCT ---------------- */}
      <section style={{ padding: "64px 0" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ border: `1px solid ${COLORS.line}`, padding: "36px 32px" }}>
            <h2 style={{ textAlign: "center", fontSize: "clamp(16px,2.5vw,18px)", fontWeight: 800, color: COLORS.heading, margin: 0, textTransform: "uppercase", letterSpacing: "0.05em" }}>
              SOTM 2026 Code of Conduct
            </h2>

            <p style={{ marginTop: 20, fontSize: 13.5, lineHeight: 1.75, color: COLORS.paragraph }}>
              Our goal is to bring together the diverse users that make up the humanitarian open
              mapping community — open-sourced users — and to make everyone feel welcome to
              participate, speak up, ask questions, and engage in the event, sessions, and
              conversations. The growing diversity of the OpenStreetMap community includes hobbyists
              and professionals, people of different ethnic backgrounds and gender identities, rich
              and poor. All are welcome and encouraged to attend the State of the Map Nigeria Conference.
            </p>
            <p style={{ marginTop: 14, fontSize: 13.5, lineHeight: 1.75, color: COLORS.paragraph }}>
              To achieve this we require that everyone participating in the conference and events
              treat everyone with respect and kindness and commit to positive, inclusive communication.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- ANTI-HARASSMENT POLICY ---------------- */}
      <section style={{ padding: "0 0 80px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ border: `1px solid ${COLORS.line}`, padding: "36px 32px" }}>
            <h2 style={{ textAlign: "center", fontSize: "clamp(16px,2.5vw,18px)", fontWeight: 800, color: COLORS.heading, margin: 0, textTransform: "uppercase", letterSpacing: "0.05em" }}>
              Anti-Harassment Policy
            </h2>

            <p style={{ marginTop: 20, fontSize: 13.5, lineHeight: 1.75, color: COLORS.paragraph }}>
              State of the Map Nigeria 2026 is dedicated to providing a harassment-free experience for everyone regardless of gender, gender identity, disability, physical appearance, race, age, religion or background.
            </p>
            <p style={{ marginTop: 14, fontSize: 13.5, lineHeight: 1.75, color: COLORS.paragraph }}>
              If you notice unacceptable behavior or have any concerns, please contact conference organizers immediately by emailing{" "}
              <a href="mailto:stateofthemapnigeria@gmail.com" style={{ color: COLORS.green, fontWeight: 700 }}>
                stateofthemapnigeria@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}


