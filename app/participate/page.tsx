"use client";

import Image from "next/image";
import { COLORS } from "@/lib/colors";

/*
  Call for Participation page.

  This intentionally reuses the visual system already established on the
  homepage rather than introducing a new one: uppercase, letter-spaced
  headings; a dark-overlay hero; hairline-bordered grids in COLORS.line;
  COLORS.green as the single accent; fixed CSS Grid (not Tailwind
  breakpoints) with one max-width media query for small phones. Swap the
  hero image and dates below for the real 2026 assets/copy when ready —
  marked with TODOs.
*/

interface SubTheme {
  n: string;
  title: string;
}

const SUB_THEMES: SubTheme[] = [
  { n: "01", title: "OpenStreetMap Application and Data Use Cases" },
  { n: "02", title: "Open Source GIS" },
  { n: "03", title: "Open Source and AI" },
  { n: "04", title: "Open Map Development" },
  { n: "05", title: "Open Data Development and Data Rights Protection" },
  { n: "06", title: "OpenStreetMap Community Growth and Expansion" },
  { n: "07", title: "Youth Empowerment" },
  { n: "08", title: "Open Map and Gender Programs" },
];

interface Requirement {
  label: string;
  body: string;
}

const REQUIREMENTS: Requirement[] = [
  { label: "Title", body: "A clear, descriptive title for your talk or workshop." },
  { label: "Authors", body: "Full names of all authors and their affiliation." },
  { label: "General talk abstract", body: "No more than 250 words, 12-point Times New Roman." },
  { label: "Academic extended abstract", body: "800–1200 words covering problem, aim/objectives, methodology, and results." },
];

interface DateItem {
  n: string;
  label: string;
  date: string;
}

// TODO: confirm 2026 submission dates before publishing — carried over
// structure from the prior call for participation as placeholders.
const DATES: DateItem[] = [
  { n: "01", label: "Abstract submission opens", date: "1 June 2026" },
  { n: "02", label: "Abstract submission deadline", date: "31 Aug 2026 · 23:59 WAT" },
  { n: "03", label: "Notification of acceptance", date: "September 2026" },
  { n: "04", label: "Registration opens", date: "July 2026" },
  { n: "05", label: "Full paper submission deadline", date: "9 Oct 2026 · 23:59 WAT" },
];

function HeroBackdrop() {
  return (
    <Image
      // TODO: swap for a real photo (e.g. reviewers marking up an abstract)
      src="https://2024.stateofthemapnigeria.org/wp-content/uploads/2024/06/call-for-abstract.jpg"
      alt="Reviewers going over a submitted abstract"
      fill
      sizes="100vw"
      style={{ objectFit: "cover", objectPosition: "center" }}
      priority
    />
  );
}

export default function ParticipatePage(): any {
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
      <section style={{ position: "relative", display: "flex", minHeight: 320, alignItems: "center", overflow: "hidden" }}>
        <HeroBackdrop />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.55)" }} />
        <div style={{ position: "relative", width: "100%", maxWidth: 720, margin: "0 auto", padding: "64px 20px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <h1 style={{ fontWeight: 800, textTransform: "uppercase", lineHeight: 1.25, color: "white", fontSize: "clamp(24px, 5vw, 40px)", margin: 0 }}>
            Call for Participation
          </h1>
          <p style={{ marginTop: 16, maxWidth: 460, fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(255,255,255,0.8)" }}>
            General and academic track presentations, State of the Map Nigeria 2026
          </p>
        </div>
      </section>

      {/* ---------------- INTRO / SUBMIT ---------------- */}
      <section style={{ padding: "64px 0 0" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 20px", textAlign: "center" }}>
          <p style={{ fontSize: 14, lineHeight: 1.7, color: COLORS.paragraph }}>
            Abstract submissions for general track presentations and workshops open 1 June 2026.
            Paper presentations and workshops should focus on one of the sub-themes below.
          </p>
          <div style={{ marginTop: 28, display: "flex", justifyContent: "center" }}>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdvvUy3Z-_z_HRaSPtciF6Gb5Ue4yOoXiswKWLaUoEaHWjyQw/viewform?usp=pp_url" style={{ background: COLORS.green, color: "white", padding: "14px 40px", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", textDecoration: "none" }}>
              Submit Your Abstract
            </a>
          </div>
        </div>
      </section>

      {/* ---------------- SUB-THEMES ---------------- */}
      <section style={{ padding: "56px 0" }}>
        <div style={{ maxWidth: 896, margin: "0 auto", padding: "0 20px" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(14px,2.4vw,16px)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.15em", color: COLORS.heading }}>
            Sub-Themes
          </h2>

          <div className="cfp-grid-2" style={{ marginTop: 40, border: `1px solid ${COLORS.line}` }}>
            {SUB_THEMES.map((t: SubTheme, i: number) => {
              const lastRow = i >= SUB_THEMES.length - 2;
              const rightBorder = i % 2 === 0;
              return (
                <div
                  key={t.n}
                  style={{
                    padding: "22px 28px",
                    display: "flex",
                    gap: 16,
                    borderRight: rightBorder ? `1px solid ${COLORS.line}` : "none",
                    borderBottom: lastRow ? "none" : `1px solid ${COLORS.line}`,
                  }}
                >
                  <span style={{ fontSize: 12, fontWeight: 800, color: COLORS.green, flexShrink: 0 }}>{t.n}</span>
                  <p style={{ fontSize: 14, lineHeight: 1.5, color: COLORS.paragraph, margin: 0 }}>{t.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- SUBMISSION REQUIREMENTS ---------------- */}
      <section style={{ padding: "56px 0", background: "#F8FAFC" }}>
        <div style={{ maxWidth: 896, margin: "0 auto", padding: "0 20px" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(14px,2.4vw,16px)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.15em", color: COLORS.heading }}>
            What To Include
          </h2>

          <div className="cfp-grid-2" style={{ marginTop: 40, border: `1px solid ${COLORS.line}`, background: "white" }}>
            {REQUIREMENTS.map((r: Requirement, i: number) => {
              const rightBorder = i % 2 === 0;
              const lastRow = i >= REQUIREMENTS.length - 2;
              return (
                <div
                  key={r.label}
                  style={{
                    padding: "26px 28px",
                    borderRight: rightBorder ? `1px solid ${COLORS.line}` : "none",
                    borderBottom: lastRow ? "none" : `1px solid ${COLORS.line}`,
                  }}
                >
                  <h3 style={{ fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", color: COLORS.green, margin: 0 }}>
                    {r.label}
                  </h3>
                  <p style={{ marginTop: 12, fontSize: 14, lineHeight: 1.6, color: COLORS.paragraph }}>{r.body}</p>
                </div>
              );
            })}
          </div>

          <p style={{ marginTop: 32, fontSize: 13, lineHeight: 1.7, color: COLORS.muted, textAlign: "center", maxWidth: 640, marginLeft: "auto", marginRight: "auto" }}>
            Accepted academic full papers will be peer-reviewed for publication in a special edition
            of a Scopus-indexed international journal.
          </p>
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
              const active = i === 1; // the deadline that matters most
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
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdvvUy3Z-_z_HRaSPtciF6Gb5Ue4yOoXiswKWLaUoEaHWjyQw/viewform?usp=pp_url" style={{ background: COLORS.green, color: "white", padding: "14px 40px", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", textDecoration: "none" }}>
          Click Here To Submit Abstract
        </a>
      </section>
    </div>
  );
}
