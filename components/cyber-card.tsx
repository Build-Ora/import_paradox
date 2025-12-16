"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { type ReactNode, useRef, useState } from "react"

interface CyberCardProps {
  children: ReactNode
  className?: string
  floatDelay?: number
}

export function CyberCard({ children, className, floatDelay = 0 }: CyberCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState("")
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((y - centerY) / centerY) * -10
    const rotateY = ((x - centerX) / centerX) * 10

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`)
  }

  const handleMouseLeave = () => {
    setTransform("")
    setIsHovered(false)
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative border border-neon/30 bg-card/80 backdrop-blur-sm p-6 transition-all duration-300",
        isHovered && "border-neon/80",
        className,
      )}
      style={{
        transform: transform || undefined,
        animation: `float ${3 + floatDelay}s ease-in-out infinite`,
        animationDelay: `${floatDelay}s`,
        boxShadow: isHovered
          ? "0 0 30px rgba(58, 240, 255, 0.3), inset 0 0 20px rgba(58, 240, 255, 0.05)"
          : "0 0 10px rgba(58, 240, 255, 0.1)",
      }}
    >
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-neon" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-neon" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-neon" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon" />

      {/* Traveling light effect on border */}
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-0 left-0 right-0 h-0.5 animate-traveling-light"
            style={{
              background: "linear-gradient(90deg, transparent 0%, #3AF0FF 50%, transparent 100%)",
              backgroundSize: "200% 100%",
            }}
          />
        </div>
      )}

      {children}
    </div>
  )
}
