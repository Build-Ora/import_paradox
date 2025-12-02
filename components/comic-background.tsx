"use client"

export function ComicBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Halftone pattern overlay */}
      <div className="absolute inset-0 halftone-bg opacity-[0.03]" />

      {/* Comic panel lines */}
      <div className="absolute top-0 left-[20%] w-1 h-full bg-foreground/5" />
      <div className="absolute top-0 left-[80%] w-1 h-full bg-foreground/5" />
      <div className="absolute top-[30%] left-0 w-full h-1 bg-foreground/5" />
      <div className="absolute top-[70%] left-0 w-full h-1 bg-foreground/5" />

      {/* Decorative comic elements */}
      <div
        className="absolute top-20 right-10 w-32 h-32 border-4 border-foreground/10 rotate-12 animate-comic-float"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="absolute bottom-40 left-10 w-24 h-24 border-4 border-foreground/10 -rotate-6 animate-comic-float"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/2 right-1/4 w-16 h-16 bg-[var(--comic-yellow)] opacity-10 rotate-45 animate-comic-float"
        style={{ animationDelay: "2s" }}
      />

      {/* Speed lines on sides */}
      <div className="absolute top-1/4 left-0 w-20 h-[2px] bg-gradient-to-r from-foreground/20 to-transparent" />
      <div className="absolute top-1/3 left-0 w-32 h-[2px] bg-gradient-to-r from-foreground/15 to-transparent" />
      <div className="absolute top-2/5 left-0 w-16 h-[2px] bg-gradient-to-r from-foreground/25 to-transparent" />

      <div className="absolute bottom-1/4 right-0 w-20 h-[2px] bg-gradient-to-l from-foreground/20 to-transparent" />
      <div className="absolute bottom-1/3 right-0 w-32 h-[2px] bg-gradient-to-l from-foreground/15 to-transparent" />
      <div className="absolute bottom-2/5 right-0 w-16 h-[2px] bg-gradient-to-l from-foreground/25 to-transparent" />
    </div>
  )
}
