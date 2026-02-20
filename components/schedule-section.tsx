"use client"

import { ComicTitle } from "./comic-title"
import { useState } from "react"

const day1Schedule = [
  { time: "08:00 AM - 09:30 AM", activity: "Registration & Check-in" },
  { time: "09:30 AM - 12:00 PM", activity: "Inauguration Ceremony" },
  { time: "12:00 PM - 01:00 PM", activity: "Workspace Setup" },
  { time: "01:00 PM - 02:00 PM", activity: "Lunch Break" },
  { time: "02:00 PM", activity: "HACKING BEGINS" },
  { time: "02:00 PM - 05:00 PM", activity: "PHASE 1" },
  { time: "05:00 PM - 06:30 PM", activity: "Mentoring Round 1" },
  { time: "08:00 PM - 09:00 PM", activity: "Dinner" },
  { time: "09:00 PM - 12:00 AM", activity: "PHASE 2 Begins" },
]

const day2Schedule = [
  { time: "12:00 AM", activity: "Midnight Snacks" },
  { time: "01:00 AM - 02:00 AM", activity: "ICE BREAKER" },
  { time: "02:00 AM", activity: "Hacking Continues" },
  { time: "02:00 AM - 08:00 AM", activity: "PHASE 3 Begins" },
  { time: "08:00 AM - 09:30 AM", activity: "Breakfast" },
  { time: "10:00 AM - 11:30 AM", activity: "Mentoring Round 2" },
  { time: "11:30 AM - 01:00 PM", activity: "PHASE 4 Begins" },
  { time: "01:00 PM", activity: "CODING FREEZE" },
  { time: "01:00 PM - 04:00 PM", activity: "Judging Starts" },
  { time: "04:00 PM - 05:00 PM", activity: "Valedictory Ceremony" },
  { time: "05:00 PM", activity: "Event Close" },
]

export function ScheduleSection() {
  const [activeDay, setActiveDay] = useState<1 | 2>(1)

  return (
    <section className="relative py-20 px-4 bg-(--comic-blue)/10 border-t-4 border-foreground">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-12">
          <ComicTitle>SCHEDULE</ComicTitle>
        </div>

        {/* DAY TOGGLE */}
        <div className="flex justify-center mb-10">
          <div className="flex border-4 border-foreground shadow-[6px_6px_0_var(--foreground)]">
            
            <button
              onClick={() => setActiveDay(1)}
              className={`px-8 py-3 font-black transition-all duration-200 ${
                activeDay === 1
                  ? "bg-(--comic-yellow)"
                  : "bg-card hover:bg-(--comic-blue)/30"
              }`}
            >
              DAY 1
            </button>

            <button
              onClick={() => setActiveDay(2)}
              className={`px-8 py-3 font-black border-l-4 border-foreground transition-all duration-200 ${
                activeDay === 2
                  ? "bg-(--comic-yellow)"
                  : "bg-card hover:bg-(--comic-blue)/30"
              }`}
            >
              DAY 2
            </button>

          </div>
        </div>

        {/* ANIMATED SWITCH */}
        <div
          key={activeDay}
          className="transition-all duration-300 animate-fadeIn"
        >
          <ScheduleTable
            data={activeDay === 1 ? day1Schedule : day2Schedule}
          />
        </div>

      </div>
    </section>
  )
}


function ScheduleTable({ data }: { data: typeof day1Schedule }) {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null)

  return (
    <div className="border-4 border-foreground shadow-[8px_8px_0_var(--foreground)] overflow-hidden mb-12">
      {/* Header */}
      <div className="grid grid-cols-2 bg-foreground text-background">
        <div className="px-6 py-4 font-black uppercase tracking-wider border-r-4 border-background">
          TIME
        </div>
        <div className="px-6 py-4 font-black uppercase tracking-wider">
          ACTIVITY
        </div>
      </div>

      {/* Rows */}
      {data.map((item, index) => (
        <div
          key={index}
          onMouseEnter={() => setHoveredRow(index)}
          onMouseLeave={() => setHoveredRow(null)}
          className={`grid grid-cols-2 border-t-4 border-foreground transition-all duration-150 ${
            hoveredRow === index
              ? "bg-(--comic-yellow) translate-x-2"
              : "bg-card"
          }`}
        >
          <div
            className={`px-6 py-4 font-mono font-bold border-r-4 border-foreground ${
              hoveredRow === index
                ? "text-foreground"
                : "text-(--comic-red)"
            }`}
          >
            {item.time}
          </div>
          <div className="px-6 py-4 font-mono uppercase">
            {item.activity}
          </div>
        </div>
      ))}
    </div>
  )
}
