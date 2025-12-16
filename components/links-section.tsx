"use client"

import { ComicCard } from "./comic-card"
import { ComicTitle } from "./comic-title"
import { Users, Github, Presentation, MessageSquare } from "lucide-react"

const links = [
  { icon: Presentation, label: "PPT Template", href: "https://docs.google.com/presentation/d/18LuCMBHyDVI-IuLYzyQqNPxA7NfHhJcL/edit?usp=drivesdk&ouid=101920307489314200500&rtpof=true&sd=true", description: "Download PPT Template" },
  { icon: Github, label: "Github", href: "https://github.com/import-paradox", description: "View github" },
  { icon: Users, label: "Discord", href: "https://discord.gg/T2SJUyWp", description: "Join our community" },
  { icon: MessageSquare, label: "WhatsApp", href: "https://chat.whatsapp.com/GRTWTycr30gIuIo9TP8Hax", description: "Get instant updates" },
]


export function LinksSection() {
  return (
    <section className="relative py-20 px-4 bg-(--comic-red)/10 border-t-4 border-foreground">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <ComicTitle>IMPORTANT LINKS</ComicTitle>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {links.map((link, index) => (
            <a key={link.label} href={link.href} className="block group">
              <ComicCard variant="default" rotate={(index % 2 === 0 ? -1 : 1) * 2} className="text-center h-full">
                <div className="inline-block p-3 bg-(--comic-yellow) border-4 border-foreground mb-4 transition-transform group-hover:rotate-12">
                  <link.icon className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="font-black uppercase mb-1">{link.label}</h3>
                <p className="text-xs font-mono opacity-70">{link.description}</p>
              </ComicCard>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
