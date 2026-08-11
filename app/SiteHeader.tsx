"use client";

import Image from "next/image";
import { useState } from "react";
import { COLORS } from "@/lib/colors";

const NAV_LINKS: string[] = ["Home", "About", "Participate", "Schedule", "Exhibition", "Sponsorship"];

export default function SiteHeader(): any {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 30, background: "white", boxShadow: "0 1px 2px rgba(0,0,0,0.06)" }}>
      <style>{`
        .sotm-nav-links { display: flex; align-items: center; gap: 28px; }
        .sotm-nav-toggle { display: none; }
        .sotm-nav-register { display: inline-block; }
        .sotm-mobile-menu { display: none; }

        @media (max-width: 520px) {
          .sotm-nav-links { display: none; }
          .sotm-nav-toggle { display: block; }
          .sotm-nav-register { display: none; }
          .sotm-mobile-menu.open { display: flex; }
        }
      `}</style>

      <div style={{ maxWidth: 1152, minHeight: 60, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 20px" }}>
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
          <Image
            src="/logo.png"
            alt="logo"
            width={80}
            height={80}
            priority
            style={{ height: "clamp(32px, 6vw, 44px)", width: "clamp(32px, 6vw, 44px)" }}
          />
        </a>

        <nav className="sotm-nav-links" style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
          {NAV_LINKS.map((link: string, i: number) => (
            <a key={link} href="#" style={{ color: i === 0 ? COLORS.green : COLORS.heading, textDecoration: "none" }}>
              {link}
            </a>
          ))}
        </nav>


       <a  href="#register"
          className="sotm-nav-register"
          style={{ background: COLORS.green, color: "white", padding: "10px 20px", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", textDecoration: "none" }}
        >
          Register
        </a>

        <button
          className="sotm-nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          style={{ color: COLORS.heading, background: "none", border: "none", cursor: "pointer", padding: 4 }}
        >
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      <nav
        className={`sotm-mobile-menu${menuOpen ? " open" : ""}`}
        style={{
          flexDirection: "column",
          gap: 4,
          padding: "8px 20px 20px",
          borderTop: `1px solid ${COLORS.line}`,
          background: "white",
        }}
      >
        {NAV_LINKS.map((link: string, i: number) => (

           <a key={link}
            href="#"
            onClick={() => setMenuOpen(false)}
            style={{
              padding: "10px 0",
              fontSize: 13,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              color: i === 0 ? COLORS.green : COLORS.heading,
              textDecoration: "none",
            }}
          >
            {link}
          </a>
        ))}

         <a href="#register"
          onClick={() => setMenuOpen(false)}
          style={{
            marginTop: 8,
            textAlign: "center",
            background: COLORS.green,
            color: "white",
            padding: "12px 20px",
            fontSize: 12,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            textDecoration: "none",
          }}
        >
          Register
        </a>
      </nav>
    </header>
  );
}
