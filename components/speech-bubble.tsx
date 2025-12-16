"use client"

import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface SpeechBubbleProps {
  children: ReactNode
  className?: string
  direction?: "bottom" | "left" | "right"
}

export function SpeechBubble({ children, className, direction = "bottom" }: SpeechBubbleProps) {
  const tailStyles = {
    bottom:
      "after:bottom-[-20px] after:left-[30px] after:border-t-foreground before:bottom-[-12px] before:left-[34px] before:border-t-card",
    left: "after:left-[-20px] after:top-[30px] after:border-r-foreground after:border-t-transparent before:left-[-12px] before:top-[34px] before:border-r-card before:border-t-transparent",
    right:
      "after:right-[-20px] after:top-[30px] after:border-l-foreground after:border-t-transparent before:right-[-12px] before:top-[34px] before:border-l-card before:border-t-transparent",
  }

  return (
    <div
      className={cn(
        "relative bg-card border-4 border-foreground p-6 animate-speech-bounce",
        "after:content-[''] after:absolute after:border-10 after:border-transparent",
        "before:content-[''] before:absolute before:border-[6px] before:border-transparent before:z-10",
        tailStyles[direction],
        className,
      )}
    >
      {children}
    </div>
  )
}
