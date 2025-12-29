"use client"

import { useState } from "react"
import { Github, MessageSquare, Instagram, Linkedin } from "lucide-react"

const socials = [
  { icon: Github, href: "https://github.com/import-paradox", label: "GitHub" },
  { icon: MessageSquare, href: "https://chat.whatsapp.com/GRTWTycr30gIuIo9TP8Hax", label: "WhatsApp" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/build-ora", label: "LinkedIn" },
]

export function Footer() {
  const [open, setOpen] = useState(false)

  return (
    <footer className="relative py-12 px-4 bg-foreground text-background border-t-4 border-background">
      <div className="max-w-4xl mx-auto">

        {/* Social icons */}
        <div className="flex items-center justify-center gap-4 mb-8">

          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="p-3 bg-background border-4 border-background text-foreground
                         shadow-[4px_4px_0_var(--comic-red)]
                         hover:shadow-[6px_6px_0_var(--comic-yellow)]
                         hover:-translate-x-1 hover:-translate-y-1 transition-all"
            >
              <social.icon className="w-6 h-6" />
            </a>
          ))}

          {/* Instagram tap dropdown */}
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              aria-label="Instagram"
              className="p-3 bg-background border-4 border-background text-foreground
                         shadow-[4px_4px_0_var(--comic-red)]
                         hover:shadow-[6px_6px_0_var(--comic-yellow)]
                         hover:-translate-x-1 hover:-translate-y-1 transition-all"
            >
              <Instagram className="w-6 h-6" />
            </button>

            {open && (
              <div
                className="absolute left-1/2 text-black -translate-x-1/2 mt-3 w-44
                           bg-background border-4 border-foreground z-50"
              >
                <a
                  href="https://www.instagram.com/build__ora"
                  className="block px-3 py-2 font-mono text-sm
                             hover:bg-foreground hover:text-background"
                >
                  Build-Ora
                </a>
                <a
                  href="https://www.instagram.com/rotaract_navachaitanya"
                  className="block px-3 py-2 font-mono text-sm
                             hover:bg-foreground hover:text-background"
                >
                 NAVA CHAITANYA
                </a>
              </div>
            )}
          </div>

        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="font-mono font-bold">
            <span className="bg-(--comic-red) text-white px-2 py-1">
              import paradox
            </span>
            <span className="ml-2">© 2025</span>
          </p>
        </div>

        {/* Decorative bars */}
        <div className="mt-8 flex justify-center gap-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-8 h-2 bg-background"
              style={{ transform: `rotate(${(i - 2) * 5}deg)` }}
            />
          ))}
        </div>

      </div>
    </footer>
  )
}
