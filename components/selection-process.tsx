"use client"

import { ComicTitle } from "./comic-title"
import { PowBadge } from "./pow-badge"
import { Zap, Filter, Ticket } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "ONLINE ROUND",
    description: "All participants must complete an online screening round.",
    icon: Zap,
    color: "yellow" as const,
    bgColor: "bg-[var(--comic-yellow)]",
    rotate: -2,
    badge: null,
  },
  {
    number: "02",
    title: "SHORTLISTING",
    description: "Only shortlisted teams will be selected for the offline hackathon.",
    icon: Filter,
    color: "red" as const,
    bgColor: "bg-[var(--comic-red)]",
    rotate: 1,
    badge: "POW!",
  },
  {
    number: "03",
    title: "PAYMENT & OFFLINE ROUND",
    description:
      "Shortlisted teams must pay the registration fee to confirm participation in the offline 24-hour hackathon at RUAS, Bangalore.",
    icon: Ticket,
    color: "blue" as const,
    bgColor: "bg-[var(--comic-blue)]",
    rotate: -1,
    badge: null,
  },
]

export function SelectionProcess() {
  return (
    <section className="relative py-20 px-4 md:px-8 overflow-hidden">
      {/* Halftone background */}
      <div className="absolute inset-0 halftone-yellow opacity-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section title */}
        <div className="text-center mb-16">
          <ComicTitle variant="accent">SELECTION PROCESS</ComicTitle>
        </div>

        {/* 3-step flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative group"
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            >
              {/* Connector arrow for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 z-20">
                  <div className="w-8 h-8 border-t-4 border-r-4 border-foreground rotate-45 translate-x-1" />
                </div>
              )}

              {/* Main card */}
              <div
                className={`relative border-4 border-foreground bg-card p-6 shadow-[6px_6px_0_var(--foreground)] transition-all duration-200 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[10px_10px_0_var(--foreground)] animate-comic-float`}
                style={{
                  transform: `rotate(${step.rotate}deg)`,
                  animationDelay: `${index * 0.3}s`,
                }}
              >
                {/* Zoom burst background */}
                <div
                  className={`absolute -top-3 -left-3 w-16 h-16 ${step.bgColor} border-4 border-foreground flex items-center justify-center -z-10`}
                  style={{ transform: "rotate(-5deg)" }}
                >
                  <span className="font-black text-2xl text-foreground">{step.number}</span>
                </div>

                {/* POW badge for step 2 */}
                {step.badge && (
                  <div className="absolute -top-4 -right-4 z-30">
                    <PowBadge text={step.badge} color="red" size="md" />
                  </div>
                )}

                {/* Icon with burst effect */}
                <div className="flex justify-center mb-4 mt-8">
                  <div
                    className={`relative w-20 h-20 ${step.bgColor} border-4 border-foreground flex items-center justify-center group-hover:animate-comic-shake`}
                  >
                    {/* Speed lines */}
                    <div className="absolute inset-0 overflow-hidden">
                      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-foreground opacity-0 group-hover:animate-[speed-lines_0.5s_ease-out]" />
                      <div
                        className="absolute top-1/3 left-0 w-full h-0.5 bg-foreground opacity-0 group-hover:animate-[speed-lines_0.5s_ease-out_0.1s]"
                        style={{ animationDelay: "0.1s" }}
                      />
                    </div>
                    <step.icon className="w-10 h-10 text-foreground" strokeWidth={3} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-black text-xl md:text-2xl uppercase text-center mb-3 tracking-tight border-b-4 border-foreground pb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="font-mono text-sm text-center text-muted-foreground leading-relaxed">
                  {step.description}
                </p>

                {/* Corner accent */}
                <div
                  className={`absolute bottom-0 right-0 w-8 h-8 ${step.bgColor} border-l-4 border-t-4 border-foreground`}
                />
              </div>

              {/* Mobile connector */}
              {index < steps.length - 1 && (
                <div className="md:hidden flex justify-center my-4">
                  <div className="w-8 h-8 border-b-4 border-r-4 border-foreground rotate-45" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-16 h-16 border-4 border-foreground bg-[var(--comic-blue)] opacity-50 rotate-12 hidden lg:block" />
        <div className="absolute bottom-20 left-10 w-12 h-12 border-4 border-foreground bg-[var(--comic-red)] opacity-50 -rotate-6 hidden lg:block" />
      </div>
    </section>
  )
}
