"use client"

import { Github,MessageSquare,  Instagram, Linkedin } from "lucide-react"

const socials = [
  { icon: Github, href: "https://github.com/Build-Ora", label: "GitHub" },
  { icon: MessageSquare, href: "https://chat.whatsapp.com/FDAWxG0EiujB1LjRIRmyVu", label: "WhatsApp" },
  { icon: Instagram, href: "https://www.instagram.com/build__ora", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/build-ora", label: "LinkedIn" },
]


export function Footer() {
  return (
    <footer className="relative py-12 px-4 bg-foreground text-background border-t-4 border-background">
      <div className="max-w-4xl mx-auto">
        {/* Social icons */}
        <div className="flex items-center justify-center gap-4 mb-8">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="p-3 bg-background border-4 border-background text-foreground shadow-[4px_4px_0_var(--comic-red)] hover:shadow-[6px_6px_0_var(--comic-yellow)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
              aria-label={social.label}
            >
              <social.icon className="w-6 h-6" />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center space-y-2">
          <p className="font-mono font-bold">
            <span className="bg-[var(--comic-red)] text-white px-2 py-1">import paradox</span>
            <span className="ml-2">© 2025</span>
          </p>
          <p className="font-mono text-sm opacity-80">
            Built with {"<CODE/>"} by Build-Ora
          </p>
        </div>

        {/* Decorative border */}
        <div className="mt-8 flex justify-center gap-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-8 h-2 bg-background" style={{ transform: `rotate(${(i - 2) * 5}deg)` }} />
          ))}
        </div>
      </div>
    </footer>
  )
}
