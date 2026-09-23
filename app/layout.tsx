import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export const metadata: Metadata = {
  title: "State of the Map Nigeria 2026 | 5th Annual Conference, Training Workshops & AGA",
  description: "10th – 13th November 2026 | University of Uyo, Akwa Ibom State, Nigeria. Theme: Open Geospatial Innovation for Climate Action and Community Resilience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
