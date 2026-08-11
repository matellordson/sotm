"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { COLORS } from "@/lib/colors";

interface ScheduleDay {
  day: string;
  date: string;
}

const SCHEDULE_DAYS: ScheduleDay[] = [
  { day: "Tuesday", date: "03" },
  { day: "Wednesday", date: "04" },
  { day: "Friday", date: "05" },
  { day: "Saturday", date: "06" },
];

interface Feature {
  title: string;
  body: string;
}

const FEATURES: Feature[] = [
  {
    title: "Connect With Expert",
    body: "Meet forward-thinking professionals shaping the future of mapping and geospatial technology.",
  },
  {
    title: "Explore New Technologies",
    body: "Discover the latest advancements in open-source geospatial tools and platforms.",
  },
  {
    title: "Join Interactive Sessions",
    body: "Take part in hands-on workshops, lightning talks, and inspiring keynote presentations.",
  },
  {
    title: "Grow The Ecosystem",
    body: "Contribute to OpenStreetMap and support the development of Nigeria's geospatial community.",
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


// Target date the countdown counts down to (Day 1 of the conference)
const TARGET_DATE: Date = new Date("2026-11-03T00:00:00");

// Venue coordinates — University of Uyo, Akwa Ibom. These are town-center
// coordinates for Uyo; swap for the exact campus lat/lon if you have it
// (Wikipedia notes the main campus sits in Nwaniba, on the edge of town).
const VENUE_LAT: number = 5.0389638;
const VENUE_LON: number = 7.9094699;

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
}

function useCountdown(target: any): TimeLeft {
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

function pad(n: any): string {
  return String(n).padStart(2, "0");
}

// Hero backdrop image — fills its parent section via `fill` + object-fit
// cover so it never stretches, regardless of the section's rendered size.
function MapBackdrop() {
  return (
    <Image
      src="https://discoverakwaibom.com/wp-content/uploads/2024/11/DJI_0822-scaled.jpg"
      alt="banner"
      fill
      sizes="100vw"
      style={{ objectFit: "cover", objectPosition: "center" }}
      priority
    />
  );
}

export default function ConferenceLandingPage(): any {
  const { days, hours, minutes } = useCountdown(TARGET_DATE);

  return (
    <div style={{ color: COLORS.paragraph, background: "white", minHeight: "100vh" }}>
      {/*
        Layout note: this mirrors a FIXED desktop design, not a responsive
        breakpoint system. Grids use real CSS Grid with fixed column counts
        (set below), not Tailwind's sm:/md: prefixes, so the layout renders
        as designed at any preview width instead of collapsing to a single
        column in a narrow panel. One max-width query handles small phones.
        No font-family is set anywhere — everything inherits your app's font.
        Nav/header markup now lives in components/SiteHeader.tsx, rendered
        from app/layout.tsx — this file only owns page content.
      */}
      <style>{`
        .sotm-grid-2 { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .sotm-grid-3 { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; }
        .sotm-grid-4 { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 1px; }

        @media (max-width: 520px) {
          .sotm-grid-2 { grid-template-columns: 1fr; }
          .sotm-grid-3 { grid-template-columns: 1fr; }
          .sotm-grid-4 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
      `}</style>

      {/* ---------------- HERO ---------------- */}
      <section style={{ position: "relative", display: "flex", minHeight: 440, alignItems: "center", overflow: "hidden" }}>
        <MapBackdrop />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.5)" }} />
        <div style={{ position: "relative", width: "100%", maxWidth: 720, margin: "0 auto", padding: "64px 20px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <h1 style={{ fontWeight: 800, textTransform: "uppercase", lineHeight: 1.25, color: "white", fontSize: "clamp(24px, 5vw, 40px)", margin: 0 }}>
            State of the Map Nigeria Conference, Akwa Ibom
          </h1>
          <p style={{ marginTop: 16, maxWidth: 420, fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(255,255,255,0.8)" }}>
            Open geospatial innovation for climate action and community resilience
          </p>
          <div style={{ marginTop: 32, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
            <a href="#about" style={{ border: "1px solid white", padding: "12px 24px", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "white", textDecoration: "none" }}>
              Learn More
            </a>
            <a href="#register" style={{ background: "white", padding: "12px 24px", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: COLORS.heading, textDecoration: "none" }}>
              Register
            </a>
          </div>
        </div>
      </section>

      {/* ---------------- COUNTDOWN ---------------- */}
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
          style={{ maxWidth: 560, margin: "32px auto 0", background: COLORS.line, padding: 1 }}
        >
          {SCHEDULE_DAYS.map((d: ScheduleDay, i: number) => {
            const active = i === 0;
            return (
              <div key={d.day} style={{ padding: "16px 12px", background: active ? COLORS.green : "white" }}>
                <p style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: active ? "rgba(255,255,255,0.85)" : COLORS.muted, margin: 0 }}>
                  {d.day}
                </p>
                <p style={{ marginTop: 8, fontSize: "clamp(20px,4vw,28px)", fontWeight: 800, color: active ? "white" : COLORS.heading }}>
                  {d.date}
                </p>
              </div>
            );
          })}
        </div>
        <p style={{ marginTop: 20, fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: COLORS.heading }}>
          November 2026
        </p>

        {/* ---- Venue map ---- */}
        <div style={{ marginTop: 40, maxWidth: 1500, margin: "40px auto 0" }}>
          <p style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: COLORS.muted, marginBottom: 12 }}>
            University of Uyo, Akwa Ibom
          </p>
          <iframe
            title="University of Uyo location map"
            src={`https://www.openstreetmap.org/export/embed.html?bbox=${VENUE_LON - 0.02}%2C${VENUE_LAT - 0.02}%2C${VENUE_LON + 0.02}%2C${VENUE_LAT + 0.02}&layer=mapnik&marker=${VENUE_LAT}%2C${VENUE_LON}`}
            style={{ border: `1px solid ${COLORS.line}`, width: "100%", height: 300, display: "block" }}
            loading="lazy"
          />


           <a href={`https://www.openstreetmap.org/?mlat=${VENUE_LAT}&mlon=${VENUE_LON}#map=15/${VENUE_LAT}/${VENUE_LON}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "block", marginTop: 8, fontSize: 11, fontWeight: 600, color: COLORS.green, textDecoration: "none" }}
          >
            View larger map →
          </a>
        </div>
      </section>

      {/* ---------------- WHY ATTEND ---------------- */}
      <section id="about" style={{ padding: "64px 0" }}>
        <div style={{ maxWidth: 896, margin: "0 auto", padding: "0 20px" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(14px,2.4vw,16px)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.15em", color: COLORS.heading }}>
            Why Attend SOTM Nigeria 2026?
          </h2>

          <div className="sotm-grid-2" style={{ marginTop: 40, border: `1px solid ${COLORS.line}` }}>
            {FEATURES.map((f: Feature, i: number) => (
              <div
                key={f.title}
                style={{
                  padding: "26px 28px",
                  borderRight: i % 2 === 0 ? `1px solid ${COLORS.line}` : "none",
                  borderBottom: i < 2 ? `1px solid ${COLORS.line}` : "none",
                }}
              >
                <h3 style={{ fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", color: COLORS.green, margin: 0 }}>
                  {f.title}
                </h3>
                <p style={{ marginTop: 12, fontSize: 14, lineHeight: 1.6, color: COLORS.paragraph }}>{f.body}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 40, display: "flex", justifyContent: "center" }}>
            <a href="#register" style={{ background: COLORS.green, color: "white", padding: "14px 40px", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", textDecoration: "none" }}>
              Register
            </a>
          </div>
        </div>
      </section>

      {/* ---------------- SPEAKERS ---------------- */}
      <section style={{ padding: "64px 0" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 20px" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(14px,2.4vw,16px)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.15em", color: COLORS.heading }}>
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


    </div>
  );
}
