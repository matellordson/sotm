"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { COLORS } from "@/lib/colors";
import {
  Laptop,
  Presentation,
  Compass,
  Award,
  Clock,
  Calendar,
} from "lucide-react";

interface ScheduleItem {
  time: string;
  title: string;
  type: string;
  description?: string;
  details?: string[];
  track?: string;
}

interface DaySchedule {
  id: string;
  day: string;
  date: string;
  title: string;
  summary: string;
  icon: typeof Laptop;
  sessions: ScheduleItem[];
}

const SCHEDULE_DATA: DaySchedule[] = [
  {
    id: "day-1",
    day: "Tuesday",
    date: "03 November 2026",
    title: "Arrivals, Opening Ceremony & Training Workshops",
    summary: "Hands-on, practical capacity development sessions across GIS, GeoAI, Earth Observation, and UAV technologies. Bring your laptop!",
    icon: Laptop,
    sessions: [
      {
        time: "08:00 – 09:30",
        title: "Registration, Accreditation & Welcome Networking",
        type: "General",
        description: "Badge pick-up, workshop kits distribution, and early morning networking with community members and sponsors.",
      },
      {
        time: "09:30 – 11:00",
        title: "Official Opening Ceremony & Presidential Keynote",
        type: "Plenary",
        description: "Welcome addresses by Unique Mappers Network, University of Uyo dignitaries, government stakeholders, and keynote address on 'Open Geospatial Innovation for Climate Action and Community Resilience'.",
      },
      {
        time: "11:00 – 11:30",
        title: "Tea Break & Group Photograph",
        type: "Break",
      },
      {
        time: "11:30 – 14:00",
        title: "Parallel Training Workshop Sessions (Part 1)",
        type: "Workshop",
        description: "Practical, hands-on masterclasses (Beginner to Advanced):",
        details: [
          "Workshop 1: OpenStreetMap, Open Mapping & QGIS — From Data Capture to Advanced Spatial Cartography",
          "Workshop 2: GeoAI, Artificial Intelligence & Spatial Data Science — Machine Learning in GIS",
          "Workshop 3: Earth Observation, Google Earth Engine & Digital Earth Africa — Satellite Analytics for Climate Resilience",
          "Workshop 4: Citizen Science, Mobile GIS, UAV & Climate/Disaster Mapping — Field Data Collection & Drone Photogrammetry",
        ],
      },
      {
        time: "14:00 – 15:00",
        title: "Lunch Break & Exhibition Networking",
        type: "Break",
      },
      {
        time: "15:00 – 17:30",
        title: "Parallel Training Workshop Sessions (Part 2 — Deep Dive & Practical Labs)",
        type: "Workshop",
        description: "Continuation of practical labs, hands-on coding, dataset building, and troubleshooting with expert facilitators.",
      },
    ],
  },
  {
    id: "day-2",
    day: "Wednesday",
    date: "04 November 2026",
    title: "Conference Presentations (Tracks 1 & 2) & Exhibition Opening",
    summary: "Academic and practical presentations focusing on Geospatial Innovation, Open Mapping, and GeoAI.",
    icon: Presentation,
    sessions: [
      {
        time: "08:30 – 09:00",
        title: "Day 2 Registration & Plenary Recap",
        type: "General",
      },
      {
        time: "09:00 – 10:00",
        title: "Keynote Address: The Future of GeoAI and Open Geospatial Data in Africa",
        type: "Keynote",
        description: "Distinguished guest speaker on leveraging open algorithms and big geospatial data for sustainable development.",
      },
      {
        time: "10:00 – 10:30",
        title: "Official Opening of the Geospatial Exhibition",
        type: "Exhibition",
        description: "Cutting of the ribbon and tour of tech stalls, drone showcases, and research posters.",
      },
      {
        time: "10:30 – 11:00",
        title: "Tea Break & Poster Session",
        type: "Break",
      },
      {
        time: "11:00 – 13:30",
        title: "Track 1: Geospatial Innovation & Open Mapping",
        type: "Presentation Track",
        track: "Track 1",
        description: "Academic & practical paper presentations covering:",
        details: [
          "OpenStreetMap, Open Mapping & Community Mapping",
          "Open-Source GIS, QGIS & Mobile GIS",
          "Earth Observation, Remote Sensing, UAVs & Geospatial Applications",
        ],
      },
      {
        time: "13:30 – 14:30",
        title: "Lunch Break & Exhibition Demonstrations",
        type: "Break",
      },
      {
        time: "14:30 – 17:00",
        title: "Track 2: GeoAI, Artificial Intelligence & Spatial Data Science",
        type: "Presentation Track",
        track: "Track 2",
        description: "Original research and applied technical demonstrations covering:",
        details: [
          "GeoAI, Machine Learning & AI-Assisted Mapping",
          "Computer Vision, Automated Feature Extraction & Spatial Analytics",
          "Big Geospatial Data, Predictive Modelling & Responsible AI",
        ],
      },
      {
        time: "17:00 – 18:30",
        title: "Evening Social & Lightning Talks",
        type: "Social",
        description: "5-minute lightning talks from community members, students, and startups.",
      },
    ],
  },
  {
    id: "day-3",
    day: "Thursday",
    date: "05 November 2026",
    title: "Conference Presentations (Tracks 3 & 4) & Collaborative Mapathon",
    summary: "Climate action, disaster risk reduction, citizen science, and a nationwide collaborative Mapathon.",
    icon: Compass,
    sessions: [
      {
        time: "08:30 – 09:00",
        title: "Morning Welcome & Announcements",
        type: "General",
      },
      {
        time: "09:00 – 11:00",
        title: "Track 3: Climate Action, Disaster Risk Reduction & Community Resilience",
        type: "Presentation Track",
        track: "Track 3",
        description: "Academic research and field case studies:",
        details: [
          "Climate Change Adaptation & Vulnerability Assessment",
          "Flood, Heat, Drought & Environmental Risk Mapping",
          "Disaster Risk Reduction, Emergency Response & Resilient Communities",
        ],
      },
      {
        time: "11:00 – 11:30",
        title: "Tea Break & Networking",
        type: "Break",
      },
      {
        time: "11:30 – 13:30",
        title: "Track 4: Citizen Science, Community Mapping & Humanitarian Action",
        type: "Presentation Track",
        track: "Track 4",
        description: "Community initiatives, grassroots projects, and youth engagement:",
        details: [
          "Citizen Science, Citizen-Generated Data & Participatory Mapping",
          "Humanitarian, Crisis & Community Mapping",
          "Youth, Volunteers, Local Knowledge & Community Empowerment",
        ],
      },
      {
        time: "13:30 – 14:30",
        title: "Lunch Break",
        type: "Break",
      },
      {
        time: "14:30 – 17:30",
        title: "National SOTM Mapathon Session",
        type: "Mapathon",
        description: "High-energy collaborative mapping session focusing on OpenStreetMap humanitarian tasks, flood vulnerability validation, and local infrastructure mapping.",
        details: [
          "OpenStreetMap & Tasking Manager Tasks",
          "Humanitarian & Crisis Mapping Validation",
          "Citizen Science & Community Mapping",
          "Disaster Response & Vulnerability Data Synthesis",
        ],
      },
    ],
  },
  {
    id: "day-4",
    day: "Friday",
    date: "06 November 2026",
    title: "Track 5 Presentations, AGA & Awards Ceremony",
    summary: "SDG geospatial applications, the Annual General Assembly of OSM Nigeria, awards, and grand closing.",
    icon: Award,
    sessions: [
      {
        time: "09:00 – 11:00",
        title: "Track 5: Geospatial Applications, Education, Innovation & Sustainable Development",
        type: "Presentation Track",
        track: "Track 5",
        description: "Cross-disciplinary applications and capacity development:",
        details: [
          "Smart Cities, Health, Agriculture & Infrastructure",
          "Geospatial Education, Capacity Development & Digital Skills",
          "Entrepreneurship, Partnerships, Innovation & SDG Applications",
        ],
      },
      {
        time: "11:00 – 11:30",
        title: "Tea Break & Final Exhibition Visits",
        type: "Break",
      },
      {
        time: "11:30 – 14:00",
        title: "Annual General Assembly (AGA) — OpenStreetMap Nigeria / Unique Mappers Network",
        type: "Governance",
        description: "Community engagement, reporting, leadership transitions, and strategic discussions for the future of open mapping in Nigeria.",
        details: [
          "Annual Activity & Financial Reports",
          "Community Working Groups & Chapter Updates",
          "Strategic Roadmap for 2027 & Beyond",
          "Open Floor & Stakeholder Resolutions",
        ],
      },
      {
        time: "14:00 – 15:00",
        title: "Lunch Break",
        type: "Break",
      },
      {
        time: "15:00 – 17:00",
        title: "Awards, Recognitions, Communiqué & Grand Closing Ceremony",
        type: "Plenary",
        description: "Best Paper Awards, Mapathon Champions Recognition, Outstanding Community Contributor Awards, adoption of Conference Communiqué, and closing remarks.",
      },
    ],
  },
];

export default function SchedulePage() {
  const [activeDay, setActiveDay] = useState<string>("day-1");

  const currentSchedule = SCHEDULE_DATA.find((d) => d.id === activeDay) || SCHEDULE_DATA[0];

  return (
    <div style={{ color: COLORS.paragraph, background: "white", minHeight: "100vh" }}>
      <style>{`
        .sched-tabs { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 1px; background: ${COLORS.line}; }
        .session-grid { display: grid; grid-template-columns: 140px 1fr; gap: 20px; }

        @media (max-width: 640px) {
          .sched-tabs { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .session-grid { grid-template-columns: 1fr; gap: 8px; }
        }
      `}</style>

      {/* ---------------- HERO ---------------- */}
      <section style={{ background: COLORS.heading, color: "white", padding: "64px 20px 48px", textAlign: "center" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <p style={{ margin: 0, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: COLORS.green }}>
            3–6 November 2026 • University of Uyo
          </p>

          <h1 style={{ marginTop: 14, fontWeight: 900, textTransform: "uppercase", fontSize: "clamp(22px, 4.5vw, 34px)", margin: "14px 0 0" }}>
            Conference Programme &amp; Schedule
          </h1>
          <p style={{ marginTop: 12, fontSize: 13.5, color: "rgba(255,255,255,0.8)", maxWidth: 640, margin: "12px auto 0", lineHeight: 1.6 }}>
            4-day schedule spanning hands-on workshops, 5 thematic presentation tracks, collaborative mapathons, geospatial exhibitions, and the Annual General Assembly.
          </p>
        </div>
      </section>

      {/* ---------------- DAY TABS & SCHEDULE CONTENT ---------------- */}
      <section style={{ maxWidth: 896, margin: "0 auto", padding: "56px 20px 80px" }}>
        {/* Day Switcher */}
        <div className="sched-tabs" style={{ border: `1px solid ${COLORS.line}` }}>
          {SCHEDULE_DATA.map((day) => {
            const active = day.id === activeDay;
            return (
              <button
                key={day.id}
                onClick={() => setActiveDay(day.id)}
                style={{
                  background: active ? COLORS.green : "white",
                  color: active ? "white" : COLORS.heading,
                  border: "none",
                  padding: "16px 12px",
                  cursor: "pointer",
                  textAlign: "center",
                }}
              >
                <span style={{ display: "block", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", opacity: active ? 0.9 : 0.6 }}>
                  {day.day}
                </span>
                <span style={{ display: "block", marginTop: 4, fontSize: 16, fontWeight: 800 }}>
                  {day.date.split(" ")[0]} {day.date.split(" ")[1]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Day Header */}
        <div style={{ marginTop: 32, padding: "24px 28px", border: `1px solid ${COLORS.line}`, background: "#F8FAFC" }}>
          <span style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.12em", color: COLORS.green }}>
            {currentSchedule.day} • {currentSchedule.date}
          </span>
          <h2 style={{ margin: "6px 0 0", fontSize: "clamp(16px, 2.5vw, 20px)", fontWeight: 800, textTransform: "uppercase", color: COLORS.heading }}>
            {currentSchedule.title}
          </h2>
          <p style={{ marginTop: 8, fontSize: 13.5, lineHeight: 1.6, color: COLORS.paragraph, margin: "8px 0 0" }}>
            {currentSchedule.summary}
          </p>
        </div>

        {/* Session Timeline */}
        <div style={{ marginTop: 24, border: `1px solid ${COLORS.line}` }}>
          {currentSchedule.sessions.map((session, idx) => (
            <div
              key={idx}
              className="session-grid"
              style={{
                borderBottom: idx < currentSchedule.sessions.length - 1 ? `1px solid ${COLORS.line}` : "none",
                padding: "20px 24px",
                background: "white",
                alignItems: "start",
              }}
            >
              <div style={{ color: COLORS.heading, fontWeight: 700, fontSize: 13 }}>
                <span style={{ color: COLORS.green, fontWeight: 800, marginRight: 6 }}>•</span>
                <span>{session.time}</span>
              </div>

              <div>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 8 }}>
                  <h3 style={{ margin: 0, fontSize: 14, fontWeight: 800, color: COLORS.heading }}>
                    {session.title}
                  </h3>
                  <span
                    style={{
                      border: `1px solid ${COLORS.line}`,
                      color: COLORS.green,
                      fontSize: 10,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      padding: "2px 6px",
                    }}
                  >
                    {session.type}
                  </span>
                </div>

                {session.description && (
                  <p style={{ marginTop: 6, fontSize: 13, lineHeight: 1.6, color: COLORS.paragraph, margin: "6px 0 0" }}>
                    {session.description}
                  </p>
                )}

                {session.details && (
                  <div style={{ marginTop: 8, display: "flex", flexDirection: "column", gap: 4 }}>
                    {session.details.map((d, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 6, fontSize: 12.5, color: COLORS.paragraph, lineHeight: 1.4 }}>
                        <span style={{ color: COLORS.green, fontWeight: 700 }}>•</span>
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom actions */}
        <div style={{ marginTop: 40, textAlign: "center", padding: "32px 20px", border: `1px solid ${COLORS.line}`, background: "white" }}>
          <h3 style={{ margin: 0, fontSize: 14, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", color: COLORS.heading }}>
            Submit an Abstract or Register to Attend
          </h3>
          <div style={{ marginTop: 20, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
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
              Submit Abstract
            </Link>
            <Link
              href="/register"
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
              Register
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
