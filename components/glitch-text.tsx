"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface GlitchTextProps {
  text: string
  className?: string
}

export function GlitchText({ text, className }: GlitchTextProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span
        className={cn(
          "relative inline-block neon-text transition-all duration-200",
          isHovered && "animate-glitch",
          className,
        )}
      >
        {text}
      </span>

      {/* Glitch layers */}
      {isHovered && (
        <>
          <span
            className={cn("absolute top-0 left-0 opacity-80", className)}
            style={{
              color: "#ff0000",
              clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)",
              transform: "translate(-2px, 0)",
              mixBlendMode: "screen",
            }}
          >
            {text}
          </span>
          <span
            className={cn("absolute top-0 left-0 opacity-80", className)}
            style={{
              color: "#00ffff",
              clipPath: "polygon(0 55%, 100% 55%, 100% 100%, 0 100%)",
              transform: "translate(2px, 0)",
              mixBlendMode: "screen",
            }}
          >
            {text}
          </span>
        </>
      )}
    </div>
  )
}
