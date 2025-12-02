"use client"

import { ComicTitle } from "./comic-title"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "Who can participate?",
    answer:
      "Anyone with a passion for technology can participate. Whether you're a student, professional, or hobbyist, you're welcome to join. Teams must consist of 2-4 members.",
  },
  {
    question: "What should I bring?",
    answer:
      "Bring your laptop, charger, any hardware you might need, and your enthusiasm! We'll provide food, drinks, internet, and workspace.",
  },
  {
    question: "Do I need to have a team beforehand?",
    answer:
      "Yeah, individual participation is not allowed",
  },
  {
    question: "What are the judging criteria?",
    answer:
      "Projects will be judged on innovation, technical complexity, design, practicality, and presentation quality.",
  },
  {
    question: "Can I use pre-existing code?",
    answer:
      "No, all code must be written during the hackathon. You can use open-source libraries and frameworks, but the core project must be built from scratch.",
  }
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="relative py-20 px-4 border-t-4 border-foreground">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <ComicTitle>FAQ</ComicTitle>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={cn(
                "border-4 border-foreground transition-all duration-150",
                openIndex === index
                  ? "shadow-[6px_6px_0_var(--comic-red)] -translate-x-1 -translate-y-1"
                  : "shadow-[4px_4px_0_var(--foreground)]",
              )}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={cn(
                  "w-full px-6 py-4 flex items-center justify-between text-left font-bold uppercase",
                  openIndex === index ? "bg-[var(--comic-yellow)]" : "bg-card hover:bg-[var(--comic-yellow)]/50",
                )}
              >
                <span className="font-mono">{faq.question}</span>
                <ChevronDown
                  className={cn("w-6 h-6 transition-transform duration-200", openIndex === index && "rotate-180")}
                />
              </button>

              <div
                className={cn(
                  "overflow-hidden transition-all duration-200",
                  openIndex === index ? "max-h-48" : "max-h-0",
                )}
              >
                <div className="px-6 pb-4 font-mono text-sm border-t-4 border-foreground pt-4 bg-card">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
