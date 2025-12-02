"use client"

import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface ComicButtonProps {
  children: ReactNode
  variant?: "primary" | "secondary" | "outline"
  className?: string
  onClick?: () => void
}

export function ComicButton({ children, variant = "primary", className, onClick }: ComicButtonProps) {
  const variants = {
    primary:
      "bg-[var(--comic-red)] text-white border-4 border-foreground shadow-[4px_4px_0_var(--foreground)] hover:shadow-[6px_6px_0_var(--foreground)] hover:translate-x-[-2px] hover:translate-y-[-2px]",
    secondary:
      "bg-[var(--comic-yellow)] text-foreground border-4 border-foreground shadow-[4px_4px_0_var(--foreground)] hover:shadow-[6px_6px_0_var(--foreground)] hover:translate-x-[-2px] hover:translate-y-[-2px]",
    outline:
      "bg-transparent text-foreground border-4 border-foreground shadow-[4px_4px_0_var(--foreground)] hover:bg-foreground hover:text-background",
  }

  return (
    <button
      onClick={onClick}
      className={cn(
        "px-8 py-4 font-mono font-bold uppercase tracking-wider transition-all duration-150 animate-comic-shake",
        variants[variant],
        className,
      )}
    >
      {children}
    </button>
  )
}
