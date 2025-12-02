"use client"

import { useEffect, useState } from "react"

export function ParallaxGrid() {
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20
      const y = (e.clientY / window.innerHeight - 0.5) * 20
      setOffset({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Background grid - slowest */}
      <div
        className="absolute inset-[-50px] cyber-grid transition-transform duration-700 ease-out"
        style={{ transform: `translate(${offset.x * 0.5}px, ${offset.y * 0.5}px)` }}
      />

      {/* Floating holographic blocks - mid layer */}
      <div
        className="absolute inset-0 transition-transform duration-500 ease-out"
        style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
      >
        <div className="absolute top-[10%] left-[5%] w-16 h-16 border border-neon/20 animate-float opacity-30" />
        <div className="absolute top-[20%] right-[10%] w-24 h-24 border border-neon/10 animate-float-delayed opacity-20" />
        <div className="absolute top-[60%] left-[15%] w-12 h-12 border border-neon/15 animate-float opacity-25" />
        <div className="absolute top-[70%] right-[20%] w-20 h-20 border border-neon/20 animate-float-delayed opacity-20" />
        <div className="absolute top-[40%] left-[80%] w-8 h-8 border border-neon/25 animate-float opacity-30" />
        <div className="absolute top-[85%] left-[40%] w-14 h-14 border border-neon/10 animate-float-delayed opacity-15" />
      </div>
    </div>
  )
}
