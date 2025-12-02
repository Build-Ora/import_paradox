"use client"

import { cn } from "@/lib/utils"

interface PowBadgeProps {
  text: string
  className?: string
  color?: "red" | "yellow" | "blue"
  size?: "sm" | "md" | "lg"
}

export function PowBadge({ text, className, color = "yellow", size = "md" }: PowBadgeProps) {
  const colors = {
    red: "bg-[var(--comic-red)] text-white",
    yellow: "bg-[var(--comic-yellow)] text-foreground",
    blue: "bg-[var(--comic-blue)] text-foreground",
  }

  const sizes = {
    sm: "text-xs px-3 py-1",
    md: "text-sm px-4 py-2",
    lg: "text-lg px-6 py-3",
  }

  return (
    <div
      className={cn(
        "inline-block font-black uppercase tracking-wider border-4 border-foreground rotate-[-3deg] shadow-[3px_3px_0_var(--foreground)] animate-stamp-in",
        colors[color],
        sizes[size],
        className,
      )}
    >
      {text}
    </div>
  )
}
