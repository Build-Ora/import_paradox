"use client"

import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface ComicCardProps {
  children: ReactNode
  className?: string
  variant?: "default" | "accent" | "speech" | "panel"
  rotate?: number
}

export function ComicCard({ children, className, variant = "default", rotate = 0 }: ComicCardProps) {
  const variants = {
    default: "bg-card comic-border",
    accent: "bg-[var(--comic-yellow)] comic-border-accent",
    speech: "bg-card speech-bubble",
    panel: "bg-card border-[6px] border-foreground shadow-[8px_8px_0_var(--comic-red)]",
  }

  return (
    <div
      className={cn(
        "p-6 transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0_var(--foreground)]",
        variants[variant],
        className,
      )}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </div>
  )
}
