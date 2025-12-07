"use client"

import { ComicTitle } from "./comic-title"
import { SpeechBubble } from "./speech-bubble"
import { PowBadge } from "./pow-badge"

export function AboutSection() {
  return (
    <section className="relative py-20 px-4 border-t-4 border-foreground">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <ComicTitle>ABOUT THE EVENT</ComicTitle>
        </div>

        <div className="relative">
          {/* Main content in speech bubble */}
          <SpeechBubble className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl leading-relaxed font-mono">
  <span className="font-black text-[var(--comic-red)]">import paradox</span> is a
  24-hour offline hackathon by <span className="font-black">Build-Ora</span>,
  hosted at <span className="font-black">Ramaiah University of Applied Sciences, Bangalore</span>.
  The event brings together students, developers, designers, and innovators to
  build bold, impactful solutions under tight deadlines. Teams of{" "}
  <span className="bg-[var(--comic-yellow)] px-1 font-bold">2–4 members</span> will
  work on exciting themes like <span className="font-black">Agentic AI</span> and{" "}
  <span className="font-black">IoT</span> — all while vibing with retro energy.
  All work must be built during the event —{" "}
  <span className="bg-foreground text-background px-1">
    no pre-built projects allowed!
  </span>
</p>

          </SpeechBubble>

          {/* Decorative badges */}
          <div className="absolute -top-6 -right-4 hidden md:block">
            <PowBadge text="MENTORSHIP!" color="blue" size="sm" />
          </div>
          <div className="absolute -bottom-6 -left-4 hidden md:block">
            <PowBadge text="FREE FOOD!" color="yellow" size="sm" />
          </div>
        </div>
      </div>
    </section>
  )
}
