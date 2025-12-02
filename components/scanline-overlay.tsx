"use client"

export function ScanlineOverlay() {
  return (
    <>
      {/* Horizontal scanning line */}
      <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
        <div
          className="absolute left-0 right-0 h-[2px] animate-scanline"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(58, 240, 255, 0.5), transparent)",
            boxShadow: "0 0 20px rgba(58, 240, 255, 0.3)",
          }}
        />
      </div>

      {/* CRT scanlines effect */}
      <div
        className="pointer-events-none fixed inset-0 z-30 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.3) 2px, rgba(0, 0, 0, 0.3) 4px)",
        }}
      />
    </>
  )
}
