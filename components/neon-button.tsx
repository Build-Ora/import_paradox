"use client"

import { cn } from "@/lib/utils"
import { type ReactNode, useState } from "react"

interface NeonButtonProps {
  children: ReactNode
  variant?: "primary" | "secondary"
  className?: string
  onClick?: () => void
}

export function NeonButton({ children, variant = "primary", className, onClick }: NeonButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative px-8 py-4 font-mono font-bold uppercase tracking-wider transition-all duration-300",
        "border-2 border-neon",
        variant === "primary" ? "bg-neon text-background" : "bg-transparent text-neon",
        isHovered && "scale-105",
        className,
      )}
      style={{
        boxShadow: isHovered
          ? "0 0 30px rgba(58, 240, 255, 0.6), 0 0 60px rgba(58, 240, 255, 0.3), inset 0 0 20px rgba(58, 240, 255, 0.2)"
          : "0 0 10px rgba(58, 240, 255, 0.3)",
      }}
    >
      {/* Ripple effect on hover */}
      {isHovered && (
        <span
          className="absolute inset-0 animate-ping opacity-30"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(58, 240, 255, 0.3), transparent)",
          }}
        />
      )}
      <span className="relative z-10">{children}</span>
    </button>
  )
}
