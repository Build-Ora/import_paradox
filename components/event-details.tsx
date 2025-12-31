"use client"

import { ComicCard } from "./comic-card"
import { ComicTitle } from "./comic-title"
import { Wifi, Calendar, Clock, Users, CreditCard, MapPin, Zap, CalendarDays } from "lucide-react"

const details = [
  { icon: Wifi, label: "Event Status", value: "OFFLINE", accent: true },
  { icon: Calendar, label: "Registration Deadline", value: "COMING SOON" },
  { icon: Clock, label: "Duration", value: "24 HOURS", accent: true },
  { icon: Users, label: "Participation", value: "TEAM (2–4)" },
  { icon: CreditCard, label: "Registration Fee", value: "₹1799" },
  { icon: MapPin, label: "Location", value: "RUAS, BANGALORE", accent: true},
  { icon: Zap, label: "Skill Level", value: "ALL LEVELS" },
  { icon: CalendarDays, label: "Event Date", value: "21-02-2026",accent: true },
]

export function EventDetails() {
  return (
    <section className="relative py-20 px-4 bg-(--comic-yellow)/10 border-t-4 border-foreground">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <ComicTitle variant="accent">EVENT DETAILS</ComicTitle>
        </div>

        {/* Details grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {details.map((detail, index) => (
            <ComicCard
              key={detail.label}
              variant={detail.accent ? "accent" : "default"}
              rotate={(index % 2 === 0 ? 1 : -1) * ((index % 3) + 1)}
              className="text-center group"
            >
              <detail.icon className="w-10 h-10 mx-auto mb-4 text-foreground transition-transform group-hover:scale-125" />
              <p className="text-xs font-mono uppercase tracking-wider mb-2 opacity-70">{detail.label}</p>
              <p className={`text-lg font-black uppercase ${detail.accent ? "text-foreground" : ""}`}>{detail.value}</p>
            </ComicCard>
          ))}
        </div>
      </div>
    </section>
  )
}
