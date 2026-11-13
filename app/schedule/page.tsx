"use client";

import Link from "next/link";
import { useState } from "react";
import { COLORS } from "@/lib/colors";
import {
  Laptop,
  Presentation,
  Compass,
  Award,
} from "lucide-react";

interface ScheduleItem {
  time: string;
  title: string;
  type: string;
  facilitator?: string;
  description?: string;
  details?: string[];
  track?: string;
}

interface DaySchedule {
  id: string;
  day: string;
  date: string;
  title: string;
  venue?: string;
  summary: string;
  icon: typeof Laptop;
  sessions: ScheduleItem[];
}

const SCHEDULE_DATA: DaySchedule[] = [
  {
    id: "day-1",
    day: "Tuesday",
    date: "17 November 2026",
    title: "Arrival, Registration, Courtesy Visits & Welcome Mapathon Party",
    venue: "Geography Laboratory, Town Campus, University of Uyo",
    summary: "Arrival, registration, courtesy visits and Welcome Map Nigeria Mapathon Party.",
    icon: Laptop,
    sessions: [
      {
        time: "12:00 noon",
        title: "Arrival and registration",
        type: "Registration",
        facilitator: "Grace Martins-Ateli; Dr. Edidiong Etim",
      },
      {
        time: "1:00 p.m.",
        title: "Courtesy visits to the Vice-Chancellor and ASTAL",
        type: "Courtesy Visit",
        facilitator: "Prof. Joseph Udoh; Dr. Victor N. Sunday",
      },
      {
        time: "2:00 p.m.",
        title: "Welcome Mapathon Party and Training Workshop 1 and 2: OpenStreetMap, HOT Tasking Manager and photo mapping",
        type: "Workshop & Mapathon",
        facilitator: "Dr. Victor N. Sunday; Salvation Okoh; Godwin Archibong",
      },
    ],
  },
  {
    id: "day-2",
    day: "Wednesday",
    date: "18 November 2026",
    title: "Main Conference: Opening, Keynote Addresses, Citizen Science Training, Paper Presentations & GIS Day Activities",
    venue: "Barth Ebong Hall, Town Campus Annex (Selected practical sessions at Geography Laboratory)",
    summary: "Main conference opening, keynote addresses, citizen science training, paper presentations and GIS Day activities.",
    icon: Presentation,
    sessions: [
      {
        time: "8:00 a.m.",
        title: "Arrival of guests and participants; registration",
        type: "Registration",
        facilitator: "Rania; Godswill; Unique Mappers team",
      },
      {
        time: "8:00 a.m. – 10:00 a.m.",
        title: "GIS Day Events – with Invited Secondary Schools, Posters, Exhibition & Mapathon",
        type: "Special Event",
        facilitator: "Stella, Grace, & Richard",
      },
      {
        time: "10:00 a.m.",
        title: "Opening prayer and National Anthem",
        type: "Plenary",
        facilitator: "Master of Ceremonies (MC)",
      },
      {
        time: "10:10 a.m.",
        title: "Introduction of dignitaries and participants",
        type: "Plenary",
        facilitator: "Master of Ceremonies (MC)",
      },
      {
        time: "10:20 a.m.",
        title: "Opening remarks",
        type: "Plenary",
        facilitator: "Vice-Chancellor / Head of Department",
      },
      {
        time: "10:30 a.m.",
        title: "Welcome address",
        type: "Plenary",
        facilitator: "Dr. Victor N. Sunday; Prof. Joseph Udoh",
      },
      {
        time: "10:40 a.m.",
        title: "LEAD KEYNOTE 1: Open Geospatial Innovation for Climate Action and Community Resilience: The Role of Geography, Technology and Communities",
        type: "Lead Keynote",
        facilitator: "Prof. Robert Etim Ekpenyong",
      },
      {
        time: "11:10 a.m.",
        title: "LEAD KEYNOTE 2: From Geospatial Information to Spatial Intelligence: Democratizing Decision-Making in the Digital Age",
        type: "Lead Keynote",
        facilitator: "Dr. A. A. Usman (GIFON)",
      },
      {
        time: "11:40 a.m.",
        title: "KEYNOTE: From Community Mapping to Intelligent Maps: Strengthening OpenStreetMap, GeoAI and Location Intelligence for Africa",
        type: "Keynote",
        facilitator: "Kingsley Chika Chukwu (TomTom)",
      },
      {
        time: "12:00 p.m.",
        title: "KEYNOTE: Community Mapping for Climate Change",
        type: "Keynote",
        facilitator: "Craig Allan, OpenStreetMap Foundation - Chairperson",
      },
      {
        time: "12:20 p.m.",
        title: "Keynote conversation and audience interaction 1",
        type: "Interactive",
        facilitator: "Moderator / keynote speakers",
      },
      {
        time: "12:40 p.m.",
        title: "Tea break, poster viewing and group photograph",
        type: "Break",
        facilitator: "Organising Committee",
      },
      {
        time: "1:00 p.m.",
        title: "TRAINING WORKSHOP 3: Discover Citizen Science – Deepen Your Skills and Earn a Digital Badge / Champion Certificate (Free attendance/certificate for participant)",
        type: "Workshop",
        facilitator: "Prof. Darlene Cavalier, SciStarter / Arizona State University",
      },
      {
        time: "1:40 p.m.",
        title: "KEYNOTE: GeoAI – Image Recognition",
        type: "Keynote",
        facilitator: "Christopher Beddow",
      },
      {
        time: "2:00 p.m.",
        title: "KEYNOTE: Citizen Science, Science Diplomacy and Emerging Technologies: Engaging Volunteers and Open Mapping Communities for Climate Action and Global Collaboration",
        type: "Keynote",
        facilitator: "Prof. Rebecca Boger",
      },
      {
        time: "2:20 p.m.",
        title: "KEYNOTE: From Citizens to Scientists: Harnessing Citizen Science and Community Data for Climate Action and Resilience",
        type: "Keynote",
        facilitator: "Dr. Caroline Nickerson",
      },
      {
        time: "2:40 p.m.",
        title: "Keynote conversation and audience interaction 2",
        type: "Interactive",
        facilitator: "Moderator / keynote speakers",
      },
      {
        time: "3:00 p.m.",
        title: "LUNCH BREAK",
        type: "Break",
        facilitator: "Organising Committee",
      },
      {
        time: "3:20 p.m.",
        title: "PAPER 1: Integrating Open Mapping and Digital Geospatial Technologies for Monitoring, Mapping and Evaluation of School Outreach Delivery in Uyo, Akwa Ibom State, Nigeria",
        type: "Paper Presentation",
        facilitator: "Victor N. Sunday, Salvation Pere Okoh, and Godwin Akpan",
      },
      {
        time: "3:30 p.m.",
        title: "POSTER PRESENTATION: GIS-Based Campus Mapping and Spatial Information Management at the University of Uyo, Nigeria",
        type: "Poster Presentation",
        description: "By Robert Etim Ekpenyong, Uwem Jona Ituen, Joseph C. Udo, Richard Thomas Garba, Samuel Etim Inwang and Idiongomfon Joseph Udoh.",
        facilitator: "A Poster Presentation by Listed co-authors",
      },
      {
        time: "3:40 p.m.",
        title: "PAPER 2: A Geospatial Framework for Land Surface Temperature Assessment and Mitigation: A Case Study of Uyo Metropolis, Nigeria",
        type: "Paper Presentation",
        facilitator: "Akan Tom; Joseph Udoh",
      },
      {
        time: "3:50 p.m.",
        title: "PAPER 3: Spatiotemporal Analysis of Mangrove Cover Dynamics in Burutu Local Government, Delta State, Nigeria (1986-2025): A Landsat and Google Earth Engine Assessment",
        type: "Paper Presentation",
        facilitator: "Victor N. Sunday and Salvation Pere Okoh",
      },
      {
        time: "4:00 p.m.",
        title: "PAPER 4: Citizen Science and Community Mapping for Climate Resilience in Nigeria: Opportunities for Young Geographers",
        type: "Paper Presentation",
        facilitator: "Godswill Akpan Isaiah",
      },
      {
        time: "4:10 p.m.",
        title: "PAPER 5: Spatial Consistency and Relative Completeness of Open Building Footprint Datasets: Implications for Urban Density Estimation in Ibadan, Nigeria",
        type: "Paper Presentation",
        facilitator: "Stella Fagbuyi 1,2 and Victor N. Sunday 1,3",
      },
      {
        time: "4:20 p.m.",
        title: "Transition to Geography Laboratory",
        type: "Transition",
        facilitator: "Organising Committee",
      },
      {
        time: "4:30 p.m.",
        title: "GIS Day Celebration with GIS (QGIS/ARCGIS) / MapRoulette Training Workshops 4 and 5",
        type: "Workshop",
        facilitator: "Unique Mappers Network; TomTom Africa | Geography Laboratory",
      },
      {
        time: "5:30 p.m.",
        title: "Group photograph and close of day",
        type: "Plenary",
        facilitator: "Organising Committee",
      },
    ],
  },
  {
    id: "day-3",
    day: "Thursday",
    date: "19 November 2026",
    title: "Keynote Addresses, Paper Presentations, Technical Workshops, Panel Discussion & Annual General Assembly",
    venue: "Barth Ebong Hall, Town Campus Annex (Practical workshops at Geography Laboratory)",
    summary: "Keynote addresses, paper presentations, technical workshops, panel discussion and Annual General Assembly.",
    icon: Compass,
    sessions: [
      {
        time: "8:00 a.m.",
        title: "Arrival and registration",
        type: "Registration",
        facilitator: "Organising Committee",
      },
      {
        time: "9:00 a.m.",
        title: "Housekeeping and programme briefing",
        type: "Plenary",
        facilitator: "Master of Ceremonies",
      },
      {
        time: "9:30 a.m.",
        title: "LEAD KEYNOTE 3: Space-Based Earth Observation and Geospatial Innovation for Climate Action, Disaster Risk Reduction and Sustainable Development in the Niger Delta",
        type: "Lead Keynote",
        facilitator: "Dr. Esther Hanson (ASTAL-NASRDA)",
      },
      {
        time: "10:00 a.m.",
        title: "KEYNOTE: Open Earth Observation for Climate Intelligence and Community Resilience in Nigeria",
        type: "Keynote",
        facilitator: "Dr. Joseph Tuyishimire (DE Africa)",
      },
      {
        time: "10:30 a.m.",
        title: "KEYNOTE: Open Geospatial Information for Peace, Development and Resilience: The UN Mappers Approach to Capacity Building, Collaborative Mapping and Humanitarian Action",
        type: "Keynote",
        facilitator: "Diego Gonzalez Ferreiro",
      },
      {
        time: "10:50 a.m.",
        title: "KEYNOTE: From Geospatial Data to Intelligent Solutions: Advancing Open Geospatial Innovation for Sustainable Development in Nigeria",
        type: "Keynote",
        facilitator: "Capt. (Dr.) Tobi Sowole",
      },
      {
        time: "11:20 a.m.",
        title: "Keynote conversation and group photograph",
        type: "Interactive",
        facilitator: "Moderator / keynote speakers",
      },
      {
        time: "11:30 a.m.",
        title: "PAPER 6: Fast and Wide – Rapid Profiling of Informal Waterfront Settlements",
        type: "Paper Presentation",
        facilitator: "Chicoco Maps",
      },
      {
        time: "11:50 a.m.",
        title: "PAPER 7: GIS-Based Estimation of Flood-Exposed Roads and Buildings in Uyo, Nigeria: A Zonal Analysis of Urban Infrastructure at Risk",
        type: "Paper Presentation",
        facilitator: "Akan Tom; Comfort Abraham",
      },
      {
        time: "12:00 p.m.",
        title: "PAPER 8: Open Geospatial Mapping of Malaria Habitat Suitability and Observed RDT Positivity in Akwa Ibom State, Nigeria",
        type: "Paper Presentation",
        facilitator: "Edidiong Robert Etim; Etiobong Simeon Ema; Chidimma Chisom Maduka",
      },
      {
        time: "12:10 p.m.",
        title: "PAPER 9: Integrating Open Mapping and Digital Geospatial Technologies for Monitoring, Mapping and Evaluation of School Outreach Delivery in Uyo, Akwa Ibom State, Nigeria",
        type: "Paper Presentation",
        facilitator: "Victor N. Sunday, Salvation Pere Okoh and Godswill Akpan",
      },
      {
        time: "12:20 p.m.",
        title: "PAPER 10: Barriers to Mainstreaming Geospatial Nature-Based Solutions in Urban Flood Management in Nigerian Cities",
        type: "Paper Presentation",
        facilitator: "Amarachi Sunday",
      },
      {
        time: "12:30 p.m.",
        title: "Participants' interaction, tea break and transition",
        type: "Break",
        facilitator: "Organising Committee",
      },
      {
        time: "12:50 p.m.",
        title: "TRAINING WORKSHOPS 6 and 7: Geospatial Information Generation; Fieldwork and Ground-Truthing Exercise",
        type: "Workshop",
        facilitator: "ASTAL team | Geography Laboratory / field location",
      },
      {
        time: "1:30 p.m.",
        title: "TRAINING WORKSHOP 8: GeoAI, Geospatial Data Science and Climate Applications",
        type: "Workshop",
        facilitator: "GeoKloud | Geography Laboratory",
      },
      {
        time: "3:30 p.m.",
        title: "LUNCH BREAK",
        type: "Break",
        facilitator: "Organising Committee",
      },
      {
        time: "4:00 p.m.",
        title: "Panel discussion: The Future of Open Mapping and Geospatial Innovation in Nigeria",
        type: "Panel",
        facilitator: "Moderator and panelists",
      },
      {
        time: "4:30 p.m.",
        title: "Annual General Assembly – Unique Mappers Network / OpenStreetMap Community in Nigeria",
        type: "Plenary",
        facilitator: "Dr. Victor N. Sunday, National Coordinator",
      },
      {
        time: "5:00 p.m.",
        title: "Closing ceremony: awards, recognition, remarks and acknowledgements",
        type: "Plenary",
        facilitator: "Prof. Joseph Udoh; Dr. Victor N. Sunday",
      },
    ],
  },
  {
    id: "day-4",
    day: "Friday",
    date: "20 November 2026",
    title: "Excursion and Departure",
    venue: "Uyo, Akwa Ibom State",
    summary: "Guided local excursion and official conference departure.",
    icon: Award,
    sessions: [
      {
        time: "10:00 a.m. – 12:00 noon",
        title: "Excursion and departure",
        type: "Excursion",
        facilitator: "Local Organising Committee",
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
        <div style={{ maxWidth: 840, margin: "0 auto" }}>
          <p style={{ margin: 0, fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: COLORS.green }}>
            17th – 20th November 2026 • University of Uyo
          </p>

          <h1 style={{ marginTop: 14, fontWeight: 900, textTransform: "uppercase", fontSize: "clamp(22px, 4.5vw, 34px)", margin: "14px 0 0" }}>
            Conference Programme &amp; Schedule
          </h1>

          <p style={{ marginTop: 10, fontSize: 13.5, fontWeight: 700, color: COLORS.green, letterSpacing: "0.03em" }}>
            Theme: Open Geospatial Innovation for Climate Action and Community Resilience
          </p>

          <div style={{ marginTop: 18, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10, fontSize: 12.5, color: "rgba(255,255,255,0.9)" }}>
            <span style={{ background: "rgba(255,255,255,0.1)", padding: "6px 12px", borderRadius: 3, border: "1px solid rgba(255,255,255,0.15)" }}>
              🏛️ <strong>Main Venue:</strong> Barth Ebong Hall, Town Campus Annex, UniUyo
            </span>
            <span style={{ background: "rgba(255,255,255,0.1)", padding: "6px 12px", borderRadius: 3, border: "1px solid rgba(255,255,255,0.15)" }}>
              💻 <strong>Workshops Venue:</strong> Geography Lab, Town Campus, UniUyo
            </span>
          </div>

          <p style={{ marginTop: 14, fontSize: 11.5, color: "rgba(255,255,255,0.6)", fontStyle: "italic" }}>
            State of the Map Nigeria 2026 | Proposed Programme – Subject to LOC Confirmation
          </p>
        </div>
      </section>

      {/* ---------------- DAY TABS & SCHEDULE CONTENT ---------------- */}
      <section style={{ maxWidth: 960, margin: "0 auto", padding: "56px 20px 80px" }}>
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
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
            <span style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.12em", color: COLORS.green }}>
              {currentSchedule.day} • {currentSchedule.date}
            </span>
            {currentSchedule.venue && (
              <span style={{ fontSize: 11.5, fontWeight: 700, color: COLORS.heading, background: "#E2E8F0", padding: "4px 10px", borderRadius: 3 }}>
                📍 {currentSchedule.venue}
              </span>
            )}
          </div>
          <h2 style={{ margin: "8px 0 0", fontSize: "clamp(16px, 2.5vw, 20px)", fontWeight: 800, textTransform: "uppercase", color: COLORS.heading }}>
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
                  <h3 style={{ margin: 0, fontSize: 14.5, fontWeight: 800, color: COLORS.heading, lineHeight: 1.4 }}>
                    {session.title}
                  </h3>
                  <span
                    style={{
                      border: `1px solid ${COLORS.line}`,
                      color: COLORS.green,
                      background: "#F0FDF4",
                      fontSize: 10,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      padding: "2px 8px",
                      borderRadius: 2,
                    }}
                  >
                    {session.type}
                  </span>
                </div>

                {session.facilitator && (
                  <div style={{ marginTop: 8, fontSize: 12.5, color: COLORS.heading, display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: 6 }}>
                    <span style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em", color: COLORS.green }}>
                      Facilitator / Presenter:
                    </span>
                    <span style={{ fontWeight: 600 }}>{session.facilitator}</span>
                  </div>
                )}

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
