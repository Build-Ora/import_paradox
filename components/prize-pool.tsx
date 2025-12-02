"use client"
import { Trophy } from "lucide-react"

const prizes = [
  { place: "1ST PLACE", amount: "₹75,000", color: "bg-[var(--comic-red)]" },
  { place: "2ND PLACE", amount: "₹50,000", color: "bg-[var(--comic-yellow)]" },
  { place: "3RD PLACE", amount: "₹25,000", color: "bg-[var(--comic-blue)]" },
]

export function PrizePool() {
  return (
    <section className="relative py-20 px-4 bg-foreground text-background border-t-4 border-background">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight border-b-4 border-background pb-2 inline-block text-background">
            PRIZE POOL
          </h2>
        </div>

        {/* Total prize pool */}
        <div className="text-center mb-12">
          <div className="inline-block bg-[var(--comic-yellow)] border-4 border-background px-8 py-4 -rotate-2 shadow-[8px_8px_0_var(--comic-red)]">
            <span className="text-5xl md:text-7xl font-black text-foreground">₹2,00,000+</span>
          </div>
          <p className="text-lg font-mono mt-4 uppercase tracking-wider text-background">TOTAL PRIZE POOL</p>
        </div>

        {/* Prize cards */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {prizes.map((prize, index) => (
    <div
      key={prize.place}
      className={`${prize.color} border-4 border-background p-8 text-center shadow-[6px_6px_0_var(--background)]`}
      style={{ transform: `rotate(${(index - 1) * 3}deg)` }}
    >
      <div className="inline-block p-4 bg-background border-4 border-foreground mb-4">
        <Trophy className="w-12 h-12 text-foreground" />
      </div>
      <p className="text-sm font-mono uppercase tracking-widest mb-2 text-foreground">{prize.place}</p>
      <p className="text-4xl font-black text-foreground">{prize.amount}</p>
    </div>
  ))}
</div>

{/* Special Prizes Section (paste this) */}
<div className="mt-16 text-center">
  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-background mb-6">
    SPECIAL PRIZES
  </h3>

  <div className="inline-block bg-[var(--comic-blue)] border-4 border-background px-8 py-4 -rotate-1 shadow-[6px_6px_0_var(--comic-yellow)]">
    <p className="text-3xl md:text-4xl font-black text-foreground">₹10,000 × 5</p>
  </div>

  <p className="text-sm font-mono mt-3 uppercase tracking-wider text-background">
    FOR OUTSTANDING TRACK WINNERS
  </p>
</div>

      </div>
    </section>
  )
}
