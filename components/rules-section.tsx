"use client"

import { ComicTitle } from "./comic-title"
import { useState } from "react"

const rules = [
  "All code must be written during the 24-hour hackathon period.",
  "Teams must consist of 2-4 members.",
  "Pre-built projects or code are strictly prohibited.",
  "Use of open-source libraries and frameworks is allowed.",
  "Final submissions must include a working demo and pitch presentation.",
  "Participants must adhere to the code of conduct at all times.",
  "Decisions made by judges are final and binding.",
  "All intellectual property created belongs to the respective teams.",
]

export function RulesSection() {
  const [hoveredLine, setHoveredLine] = useState<number | null>(null)

  return (
    <section className="relative py-20 px-4 border-t-4 border-foreground">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <ComicTitle>THE RULES</ComicTitle>
        </div>

        {/* Comic panel style rules */}
        <div className="border-8 border-foreground bg-card shadow-[12px_12px_0_var(--foreground)]">
          {/* Header bar */}
          <div className="bg-(--comic-red) border-b-4 border-foreground px-6 py-4 flex items-center gap-4">
            <div className="w-4 h-4 bg-background border-2 border-foreground" />
            <div className="w-4 h-4 bg-(--comic-yellow) border-2 border-foreground" />
            <div className="w-4 h-4 bg-(--comic-blue) border-2 border-foreground" />
            <span className="font-mono font-bold uppercase text-white ml-4">RULES.TXT</span>
          </div>

          {/* Rules list */}
          <div className="p-6 font-mono">
            {rules.map((rule, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredLine(index)}
                onMouseLeave={() => setHoveredLine(null)}
                className={`py-3 px-4 -mx-4 border-b-2 border-foreground/20 last:border-b-0 transition-all duration-150 cursor-default flex gap-4 ${
                  hoveredLine === index ? "bg-(--comic-yellow) -translate-x-2" : ""
                }`}
              >
                <span className="font-black text-(--comic-red) w-8">{String(index + 1).padStart(2, "0")}</span>
                <span className={hoveredLine === index ? "font-bold" : ""}>{rule}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
