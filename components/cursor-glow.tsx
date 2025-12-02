"use client"

import { useEffect, useState } from "react"

export function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => setIsVisible(false)

    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <div
      className="pointer-events-none fixed z-50 transition-all duration-150 ease-out"
      style={{
        opacity: isVisible ? 1 : 0,
        left: position.x - 150,
        top: position.y - 150,
      }}
    >
      <div
        className="h-[300px] w-[300px]"
        style={{
          background:
            "radial-gradient(circle, rgba(58, 240, 255, 0.15) 0%, rgba(58, 240, 255, 0.05) 40%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />
    </div>
  )
}
