"use client"
import { ComicTitle } from "./comic-title"
import { SpeechBubble } from "./speech-bubble"
import { User, Mail, Phone } from "lucide-react"

const contacts = [
  {
    name: "Nava Chaitanya",
    email: "racnavachaitanya3192@gmail.com",
    phone: "+91 7892864515",
  },
  {
    name: "Build-ora",
    email: "build.ora201@gmail.com",
    phone: "+91 9019823296",
  },
  {
    name: "RAHUL RAO",
    phone: "+91 8088524072",
  }
]

export function ContactSection() {
  return (
    <section className="relative py-20 px-4 border-t-4 border-foreground">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-12">
          <ComicTitle>CONTACT US</ComicTitle>
        </div>

        {/* All contacts in one row */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 flex-wrap">
  {contacts.map((c, index) => (
    <SpeechBubble key={index} className="text-center w-full sm:w-auto">
      <div className="space-y-6">

        {/* Name */}
        <div className="inline-flex items-center gap-4 bg-(--comic-yellow) border-4 border-foreground px-6 py-3 shadow-[4px_4px_0_var(--foreground)]">
          <User className="w-6 h-6" />
          <span className="font-black uppercase">{c.name}</span>
        </div>

        {/* Email & Phone */}
        <div className="flex flex-col items-center gap-4">

          {/* Email only for first contact */}
          {index === 1 && (
            <a
              href={`mailto:${c.email}`}
              className="inline-flex items-center gap-3 border-4 border-foreground px-4 py-2 shadow-[3px_3px_0_var(--foreground)] hover:bg-(--comic-yellow) hover:shadow-[5px_5px_0_var(--foreground)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
            >
              <Mail className="w-5 h-5" />
              <span className="font-mono text-sm">{c.email}</span>
            </a>
          )}

          {/* Phone for all */}
          <a
            href={`tel:${c.phone}`}
            className="inline-flex items-center gap-3 border-4 border-foreground px-4 py-2 shadow-[3px_3px_0_var(--foreground)] hover:bg-(--comic-blue) hover:shadow-[5px_5px_0_var(--foreground)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
          >
            <Phone className="w-5 h-5" />
            <span className="font-mono text-sm">{c.phone}</span>
          </a>

        </div>

      </div>
    </SpeechBubble>
  ))}
</div>


      </div>
    </section>
  )
}
