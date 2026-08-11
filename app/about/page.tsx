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

/*
  About page.

  Layout mirrors the original 2024 About page one-for-one (hero → intro →
  "Our Brand" → dark "Audience" grid → Code of Conduct → Anti-Harassment
  Policy), but re-skinned with the site's current design tokens: uppercase
  letter-spaced headings, COLORS.green as the single accent, hairline
  COLORS.line borders, fixed CSS Grid with one small-phone media query.
  Year references updated 2024 → 2026 and venue updated to Uyo, Akwa Ibom
  to match the homepage. Swap placeholder images for real photos.
*/

interface AudienceGroup {
  Icon: typeof MapPin;
  title: string;
  body: string;
}

const AUDIENCE: AudienceGroup[] = [
  { Icon: MapPin, title: "Mapping Enthusiasts and Contributors", body: "To the OpenStreetMap project." },
  { Icon: GraduationCap, title: "Academia", body: "From the geospatial disciplines like Geography, Geoinformation and Surveying, Geosciences…" },
  { Icon: Sparkles, title: "Forward-Thinking Mapping Experts", body: "From established companies like Meta…" },
  { Icon: Rocket, title: "Leaders and Startups", body: "In the geospatial industry like Mapillary, TomTom, Mapbox, ESRI…" },
  { Icon: Building2, title: "Organization", body: "Like Humanitarian OpenStreetMap Team, SciStarter, World Bank and the Nigerian Red Cross." },
  { Icon: Landmark, title: "Government Agencies", body: "From federal, state and local government agencies." },
  { Icon: Briefcase, title: "Professionals", body: "Looking for new job opportunities." },
  { Icon: BookOpen, title: "Students", body: "Seeking a career in mapping and geospatial technology." },
];

function HeroBackdrop() {
  return (
    <Image
      src="https://www.ibomair.com/wp-content/uploads/2022/01/hl81gtkfqex41.jpg"
      alt="banner"
      fill
      sizes="100vw"
      style={{ objectFit: "cover", objectPosition: "center" }}
      priority
    />
  );
}

export default function AboutPage(): any {
  return (
    <div style={{ color: COLORS.paragraph, background: "white", minHeight: "100vh" }}>
      <style>{`
        .about-grid-2 { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 40px; align-items: center; }
        .about-audience-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 20px; }

        @media (max-width: 720px) {
          .about-grid-2 { grid-template-columns: 1fr; }
        }
        @media (max-width: 640px) {
          .about-audience-grid { grid-template-columns: 1fr; }
        }
        @media (min-width: 641px) and (max-width: 900px) {
          .about-audience-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
      `}</style>

      {/* ---------------- HERO ---------------- */}
      <section style={{ position: "relative", display: "flex", minHeight: 340, alignItems: "center", overflow: "hidden" }}>
        <HeroBackdrop />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.55)" }} />
        <div style={{ position: "relative", width: "100%", maxWidth: 760, margin: "0 auto", padding: "64px 20px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <h1 style={{ fontWeight: 800, textTransform: "uppercase", lineHeight: 1.3, color: "white", fontSize: "clamp(22px, 4.5vw, 34px)", margin: 0 }}>
            Welcome to State of the Map
            <br />
            Nigeria Conference
          </h1>
          <p style={{ marginTop: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", color: COLORS.green, fontSize: "clamp(16px, 3vw, 22px)" }}>
            Uyo 2026
          </p>
        </div>
      </section>

      {/* ---------------- INTRO ---------------- */}
      <section style={{ padding: "64px 0" }}>
        <div className="about-grid-2" style={{ maxWidth: 1040, margin: "0 auto", padding: "0 20px" }}>
          <div>
            <p style={{ fontWeight: 700, fontSize: 14, lineHeight: 1.7, color: COLORS.heading }}>
              State of the Map Nigeria unites people around OpenStreetMap, an open-sourced geospatial
              data pool having the most detailed map of Nigeria, Africa and beyond.
            </p>
            <p style={{ marginTop: 16, fontSize: 14, lineHeight: 1.7, color: COLORS.paragraph }}>
              Our conference draws people representing an incredibly broad range of interests. From
              individual hobbyists to major stakeholders contributing to OpenStreetMap, State of the
              Map Nigeria is envisioned to be the most significant gathering on mapping innovation and
              promise.
            </p>
            <p style={{ marginTop: 16, fontSize: 14, lineHeight: 1.7, color: COLORS.paragraph }}>
              This conference in November 2026 will be held in the city of Uyo, Akwa Ibom, Nigeria. It
              will bring together hundreds of OpenStreetMap enthusiasts from academia, private
              companies, humanitarian organizations, government agencies and hopefully the technology
              sector to learn new map technology and share ideas.
            </p>
          </div>
          <img
            // TODO: swap for a real photo from the community
            src="https://placehold.co/640x480/1D293D/e2e8f0?text=SOTM+Nigeria"
            alt="State of the Map Nigeria community"
            style={{ display: "block", width: "100%", height: "auto", border: `1px solid ${COLORS.line}` }}
          />
        </div>
      </section>

      {/* ---------------- OUR BRAND ---------------- */}
      <section style={{ padding: "64px 0", background: "#EAF2FB" }}>
        <div className="about-grid-2" style={{ maxWidth: 1040, margin: "0 auto", padding: "0 20px" }}>
          <div>
            <h2 style={{ fontSize: "clamp(20px,3vw,26px)", fontWeight: 800, color: COLORS.heading, margin: 0 }}>
              Our Brand
            </h2>
            <p style={{ marginTop: 16, fontSize: 14, lineHeight: 1.7, color: COLORS.paragraph }}>
              Unique Mappers Network is an NGO for Open Data Development, Mobile Data Collection,
              OpenStreetMap Nigeria Community, Citizen Science Projects, Open Source Geospatial,
              GeoForAll Lab, Flying Lab, Youth/Women Empowerment, SDGs, and Humanitarian Response.
            </p>
          </div>
          <img
            // TODO: swap for a real community photo
            src="https://placehold.co/640x480/45556C/e2e8f0?text=Unique+Mappers+Network"
            alt="Unique Mappers Network community"
            style={{ display: "block", width: "100%", height: "auto", border: `1px solid ${COLORS.line}` }}
          />
        </div>
      </section>

      {/* ---------------- AUDIENCE ---------------- */}
      <section style={{ padding: "64px 0", background: COLORS.heading }}>
        <div style={{ maxWidth: 1040, margin: "0 auto", padding: "0 20px" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(20px,3vw,28px)", fontWeight: 800, color: "white", margin: 0 }}>
            Audience
          </h2>
          <div style={{ margin: "16px auto 0", width: 60, height: 3, background: COLORS.green }} />
          <p style={{ marginTop: 20, textAlign: "center", fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.7)" }}>
            During the event you will meet and be welcomed by:
          </p>

          <div className="about-audience-grid" style={{ marginTop: 40 }}>
            {AUDIENCE.map(({ Icon, title, body }: AudienceGroup) => (
              <div key={title} style={{ background: "white", border: `1px solid ${COLORS.line}`, padding: "24px 22px" }}>
                <Icon size={22} color={COLORS.green} strokeWidth={1.75} />
                <p style={{ marginTop: 14, fontSize: 13, fontWeight: 800, color: COLORS.heading, margin: "14px 0 0" }}>{title}</p>
                <p style={{ marginTop: 8, fontSize: 12.5, lineHeight: 1.6, color: COLORS.muted, margin: "8px 0 0" }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CODE OF CONDUCT ---------------- */}
      <section style={{ padding: "64px 0" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ border: `1px solid ${COLORS.line}`, padding: "40px 32px" }}>
            <h2 style={{ textAlign: "center", fontSize: "clamp(18px,2.8vw,22px)", fontWeight: 800, color: COLORS.heading, margin: 0 }}>
              SOTM 2026 Code of Conduct
            </h2>
            <div style={{ marginTop: 20, display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
              <span style={{ height: 1, width: 64, background: COLORS.line }} />
              <ScrollText size={18} color={COLORS.green} strokeWidth={1.75} />
              <span style={{ height: 1, width: 64, background: COLORS.line }} />
            </div>

            <p style={{ marginTop: 28, fontSize: 13.5, lineHeight: 1.75, color: COLORS.paragraph }}>
              Our goal is to bring together the diverse users that make up the humanitarian open
              mapping community — open-sourced users — and to make everyone feel welcome to
              participate, speak up, ask questions, and engage in the event, sessions, and
              conversations. The growing diversity of the OpenStreetMap community includes hobbyists
              and professionals, people of different ethnic backgrounds and gender identities, rich
              and poor, etc. This is the OpenStreetMap community and are all welcome and encouraged to
              attend the State of the Map Nigeria Conference.
            </p>
            <p style={{ marginTop: 16, fontSize: 13.5, lineHeight: 1.75, color: COLORS.paragraph }}>
              To achieve this we require that everyone participating in the conference and events
              treat everyone with respect and kindness and acknowledge that people from different
              backgrounds have different understandings of what is offensive, derogatory, and
              unwelcoming, and commit to bridging this through positive communication.
            </p>
            <p style={{ marginTop: 16, fontSize: 13.5, lineHeight: 1.75, color: COLORS.paragraph }}>
              To ensure that the conference and related events are welcoming and safe experiences for
              everyone who attends, including in a virtual environment, we have adopted the following
              code of conduct.
            </p>
            <p style={{ marginTop: 16, fontSize: 13.5, lineHeight: 1.75, color: COLORS.paragraph }}>
              The 2026 conference is dedicated to providing a harassment-free hybrid conference
              experience for everyone regardless of gender, gender identity and expression, sexual
              orientation, disability, physical appearance, body size, race, age, religion or
              background. We do not tolerate harassment of conference participants in any form.
              Sexual language and imagery is not appropriate for any conference session; conference
              participants violating these rules may be sanctioned or expelled from the conference at
              the discretion of the conference organizers.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- ANTI-HARASSMENT POLICY ---------------- */}
      <section style={{ padding: "0 0 80px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ border: `1px solid ${COLORS.line}`, padding: "40px 32px" }}>
            <h2 style={{ textAlign: "center", fontSize: "clamp(18px,2.8vw,22px)", fontWeight: 800, color: COLORS.heading, margin: 0 }}>
              SOTM 2026 Conference
              <br />
              Anti-Harassment Policy
            </h2>
            <div style={{ marginTop: 20, display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
              <span style={{ height: 1, width: 64, background: COLORS.line }} />
              <ShieldCheck size={18} color={COLORS.green} strokeWidth={1.75} />
              <span style={{ height: 1, width: 64, background: COLORS.line }} />
            </div>

            <p style={{ marginTop: 28, fontSize: 13.5, lineHeight: 1.75, color: COLORS.paragraph }}>
              Harassment includes offensive verbal comments related to gender, gender identity and
              expression, sexual orientation, disability, physical appearance, body size, race, age,
              religion or background; sexual images in public spaces; deliberate intimidation;
              stalking; following; harassing photography or recording; sustained disruption of talks
              or other events; inappropriate physical contact; and unwelcome sexual attention.
              Participants asked to stop any harassing behavior are expected to comply immediately.
            </p>
            <p style={{ marginTop: 16, fontSize: 13.5, lineHeight: 1.75, color: COLORS.paragraph }}>
              If a participant engages in harassing behavior, the conference organizers may take any
              action they deem appropriate, including warning the offender or expulsion from the
              conference.
            </p>
            <p style={{ marginTop: 16, fontSize: 13.5, lineHeight: 1.75, color: COLORS.paragraph }}>
              If you are being harassed, notice that someone else is being harassed, or have any other
              concerns, please contact a member of conference staff immediately by emailing us at{" "}
              <a href="mailto:stateofthemapnigeria@gmail.com" style={{ color: COLORS.green, fontWeight: 600 }}>
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
