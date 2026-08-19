"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { COLORS } from "@/lib/colors";

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Participate", href: "/participate" },
  { label: "Schedule", href: "/schedule" },
  { label: "Exhibition", href: "/exhibition" },
  { label: "Sponsorship", href: "/sponsorship" },
  { label: "Register", href: "/register" },
];

export default function SiteHeader(): any {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();

  // Exact match for "/", prefix match for everything else so nested
  // routes (e.g. /schedule/day-1) still highlight their parent link.
  const isActive = (href: string): boolean =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

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
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
          <Image
            src="/logo.png"
            alt="logo"
            width={120}
            height={120}
            priority
            style={{ height: "clamp(48px, 8vw, 68px)", width: "clamp(48px, 8vw, 68px)" }}
          />
        </Link>
        <nav className="sotm-nav-links" style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
          {NAV_LINKS.map((link: NavLink) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              style={{ color: isActive(link.href) ? COLORS.green : COLORS.heading, textDecoration: "none" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/register"
          className="sotm-nav-register"
          style={{ background: COLORS.green, color: "white", padding: "10px 20px", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", textDecoration: "none" }}
        >
          Register
        </Link>
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
        {NAV_LINKS.map((link: NavLink) => (
          <Link
            key={link.href}
            href={link.href}
            aria-current={isActive(link.href) ? "page" : undefined}
            onClick={() => setMenuOpen(false)}
            style={{
              padding: "10px 0",
              fontSize: 13,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              color: isActive(link.href) ? COLORS.green : COLORS.heading,
              textDecoration: "none",
            }}
          >
            {link.label}
          </Link>
        ))}

        <Link
          href="/register"
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
        </Link>
      </nav>
    </header>
  );
}
