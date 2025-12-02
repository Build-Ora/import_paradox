"use client"

import { ComicCard } from "./comic-card"
import { ComicTitle } from "./comic-title"
import { PowBadge } from "./pow-badge"
import { Bot, Cpu, Shield, Brain } from "lucide-react"

const themes = [
  { icon: Bot, name: "Agentic AI", description: "Build autonomous AI agents that can reason and act" },
  { icon: Cpu, name: "IoT", description: "Connect the physical world with smart devices" },
  { icon: Shield, name: "Cyber Security & Blockchain", description: "Secure systems, networks, and applications" },
];

export function ThemesSection() {
  return (
    <section className="relative py-20 px-4 border-t-4 border-foreground">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <ComicTitle>HACKATHON THEMES</ComicTitle>
        </div>

        {/* Themes grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
  {themes.map((theme, index) => (
    <div key={index} className="relative w-full max-w-xs">
      {/* Badge */}
      <div className="absolute -top-3 -right-3 z-10">
        <PowBadge text={theme.badge} color={index === 0 ? "red" : index === 1 ? "blue" : "yellow"} size="sm" />
      </div>

      <ComicCard variant="panel" rotate={(index % 2 === 0 ? -1 : 1) * 2} className="text-center h-full group">
        <div className="mb-4 inline-block p-4 bg-[var(--comic-yellow)] border-4 border-foreground">
          <theme.icon className="w-12 h-12 text-foreground transition-transform group-hover:rotate-12" />
        </div>
        <h3 className="text-xl font-black uppercase mb-2">{theme.name}</h3>
        <p className="text-sm font-mono opacity-70">{theme.description}</p>
      </ComicCard>
    </div>
  ))}
</div>

      </div>
    </section>
  )
}
