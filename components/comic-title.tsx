"use client"

import { cn } from "@/lib/utils"

interface ComicTitleProps {
  children: string
  className?: string
  variant?: "hero" | "section" | "accent"
}

export function ComicTitle({ children, className, variant = "section" }: ComicTitleProps) {
  if (variant === "hero") {
    return (
      <div className={cn("relative inline-block", className)}>
        {/* Background burst effect */}
        <div className="absolute inset-0 -m-4 bg-[var(--comic-yellow)] -rotate-2 -z-10" />
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-black uppercase tracking-tighter text-foreground comic-text-stroke">
          {children}
        </h1>
      </div>
    )
  }

  if (variant === "accent") {
    return (
      <div className={cn("relative inline-block", className)}>
        <div className="absolute inset-0 -m-2 bg-[var(--comic-red)] rotate-1 -z-10" />
        <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-white px-4 py-2">{children}</h2>
      </div>
    )
  }

  return (
    <div className={cn("relative", className)}>
      <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-foreground border-b-4 border-foreground pb-2 inline-block">
        {children}
      </h2>
      {/* Decorative underline accent */}
      <div className="absolute -bottom-1 left-0 w-1/3 h-2 bg-[var(--comic-red)]" />
    </div>
  )
}
