"use client"

import { Zap } from "lucide-react"

interface RibbonMarqueeProps {
  text: string
  color?: "red" | "yellow" | "blue"
}

export function RibbonMarquee({ text, color = "red" }: RibbonMarqueeProps) {
  const colorClasses = {
    red: "bg-[var(--comic-red)]",
    yellow: "bg-[var(--comic-yellow)]",
    blue: "bg-[var(--comic-blue)]",
  }

  const items = Array(10).fill(text)

  return (
    <div className="w-full overflow-hidden border-y-0 border-foreground py-3 relative">
      <div className={`${colorClasses[color]} absolute inset-0`} />
      <div className="flex animate-ribbon-flow whitespace-nowrap relative">
        {items.map((item, i) => (
          <div key={i} className="flex items-center shrink-0">
            <span className="font-bold uppercase text-lg md:text-xl tracking-wider text-foreground px-4">{item}</span>
            <Zap className="w-5 h-5 text-foreground shrink-0" />
          </div>
        ))}
        {items.map((item, i) => (
          <div key={`dup-${i}`} className="flex items-center shrink-0">
            <span className="font-bold uppercase text-lg md:text-xl tracking-wider text-foreground px-4">{item}</span>
            <Zap className="w-5 h-5 text-foreground shrink-0" />
          </div>
        ))}
      </div>
    </div>
  )
}
