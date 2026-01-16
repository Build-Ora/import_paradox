"use client"

import { ComicButton } from "./comic-button"
import { ComicTitle } from "./comic-title"
import { RibbonMarquee } from "./ribbon-marquee"
import { MapPin, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      <RibbonMarquee text="24 HOUR HACKATHON" color="red" />

      {/* Main hero content */}
      <div className="flex-1 flex items-center justify-center px-4 py-20 relative">
        {/* Background comic burst */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[120%] h-[120%] halftone-yellow opacity-20 animate-halftone-pulse" />
        </div>

        {/* Speed lines */}
        <div className="absolute left-0 top-1/4 w-40 h-1 bg-linear-to-r from-(--comic-red) to-transparent" />
        <div className="absolute left-0 top-1/3 w-60 h-1 bg-linear-to-r from-foreground/30 to-transparent" />
        <div className="absolute right-0 bottom-1/4 w-40 h-1 bg-linear-to-l from-(--comic-red) to-transparent" />
        <div className="absolute right-0 bottom-1/3 w-60 h-1 bg-linear-to-l from-foreground/30 to-transparent" />

        <div className="text-center max-w-6xl mx-auto relative z-10">
          {/* Main title */}
          <div className="mb-8">
            <ComicTitle variant="hero">import paradox</ComicTitle>
          </div>

          {/* Subtitle in speech bubble style */}
          <div className="mb-8 inline-block bg-card border-4 border-foreground p-4 shadow-[6px_6px_0_var(--foreground)] -rotate-1">
            <p className="text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-wide text-foreground flex items-center gap-3">
              <Zap className="w-8 h-8 text-(--comic-red)" />
              OFFLINE HACKATHON
              <Zap className="w-8 h-8 text-(--comic-red)" />
            </p>
          </div>

          {/* Location and organizers */}
          <div className="mb-10 space-y-4">
            <a
              href="https://maps.app.goo.gl/WBMb5f7i4bdwHtfE7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-(--comic-yellow) border-4 border-foreground px-6 py-3 shadow-[4px_4px_0_var(--foreground)] rotate-1 hover:-translate-y-1 hover:-translate-x-1 transition-all"
            >
              <MapPin className="w-6 h-6 text-foreground" />
              <span className="font-mono font-bold uppercase">Faculty of Pharmacy, Ramaiah University of Applied Sciences, Bengaluru</span>
            </a>

            <p className="text-lg font-mono font-bold">
              <span className="bg-foreground text-background px-2 py-1">Nava Chaitanya</span>
              <span className="mx-2">×</span>
              <span className="bg-foreground text-background px-2 py-1">Build-Ora</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="https://unstop.com/hackathons/import-paradox-m-s-ramaiah-university-of-applied-sciences-msruas-bengaluru-karnataka-1623948" target="_blank" rel="noopener noreferrer">
              <ComicButton variant="primary">REGISTER NOW!</ComicButton>
            </a>

            <a
              href="https://docs.google.com/presentation/d/18LuCMBHyDVI-IuLYzyQqNPxA7NfHhJcL/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ComicButton variant="secondary">PPTX TEMPLATE</ComicButton>
            </a>
          </div>

          {/* Decorative comic elements */}
          <div className="absolute -top-10 -right-10 w-24 h-24 border-4 border-foreground bg-(--comic-blue) opacity-50 rotate-12 animate-comic-float" />
          <div
            className="absolute -bottom-10 -left-10 w-20 h-20 border-4 border-foreground bg-(--comic-red) opacity-50 -rotate-12 animate-comic-float"
            style={{ animationDelay: "1s" }}
          />
        </div>
      </div>
    </section>
  )
}
