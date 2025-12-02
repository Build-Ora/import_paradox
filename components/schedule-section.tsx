"use client"

import { ComicTitle } from "./comic-title"
import { useState } from "react"

const schedule = [
  { time: "08:00 AM - 09:30 AM", activity: "Registration & Check-in" },
  { time: "09:30 AM - 12:00 PM", activity: "Inauguration Ceremony" },
  { time: "12:00 PM - 01:00 PM", activity: "Workspace Setup" },
  { time: "01:00 PM - 02:00 PM", activity: "Lunch Break" },
  { time: "02:00 PM", activity: "HACKING BEGINS" },
  { time: "02:00 PM - 05:00 PM", activity: "PHASE 1" },
  { time: "05:00 PM - 06:30 PM", activity: "Mentoring Round 1" },
  { time: "08:00 PM - 09:00 PM", activity: "Dinner" },
  { time: "09:00 PM - 12:00 AM", activity: "PHASE 2" },

  // Day 2
  { time: "12:00 AM", activity: "Midnight Snacks" },
  { time: "01:00 AM - 02:00 AM", activity: "ICE BREAKER" },
  { time: "02:00 AM", activity: "Hacking Continues" },
  { time: "02:00 AM - 08:00 AM", activity: "PHASE 3" },
  { time: "08:00 AM - 09:30 AM", activity: "Breakfast" },
  { time: "10:00 AM - 11:30 AM", activity: "Mentoring Round 2" },
  { time: "11:30 AM - 01:00 PM", activity: "PHASE 4" },
  { time: "01:00 PM", activity: "CODING FREEZE" },
  { time: "01:00 PM - 04:00 PM", activity: "Judging Starts" },
  { time: "04:00 PM - 05:00 PM", activity: "Valedictory Ceremony" },
  { time: "05:00 PM", activity: "Event Close" },
];
export function ScheduleSection() {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null)

  return (
    <section className="relative py-20 px-4 bg-[var(--comic-blue)]/10 border-t-4 border-foreground">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <ComicTitle>SCHEDULE</ComicTitle>
        </div>

        {/* Schedule table */}
        <div className="border-4 border-foreground shadow-[8px_8px_0_var(--foreground)] overflow-hidden">
          {/* Table header */}
          <div className="grid grid-cols-2 bg-foreground text-background">
            <div className="px-6 py-4 font-black uppercase tracking-wider border-r-4 border-background">TIME</div>
            <div className="px-6 py-4 font-black uppercase tracking-wider">ACTIVITY</div>
          </div>

          {/* Table rows */}
          {schedule.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredRow(index)}
              onMouseLeave={() => setHoveredRow(null)}
              className={`grid grid-cols-2 border-t-4 border-foreground transition-all duration-150 ${
                hoveredRow === index ? "bg-[var(--comic-yellow)] translate-x-2" : "bg-card"
              }`}
            >
              <div
                className={`px-6 py-4 font-mono font-bold border-r-4 border-foreground ${
                  hoveredRow === index ? "text-foreground" : "text-[var(--comic-red)]"
                }`}
              >
                {item.time}
              </div>
              <div className="px-6 py-4 font-mono uppercase">{item.activity}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
