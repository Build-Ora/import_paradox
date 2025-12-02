import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { EventDetails } from "@/components/event-details"
import { SelectionProcess } from "@/components/selection-process"
import { ThemesSection } from "@/components/themes-section"
import { PrizePool } from "@/components/prize-pool"
import { RulesSection } from "@/components/rules-section"
import { ScheduleSection } from "@/components/schedule-section"
import { FAQSection } from "@/components/faq-section"
import { LinksSection } from "@/components/links-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ComicBackground } from "@/components/comic-background"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      <ComicBackground />

      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <EventDetails />
        <SelectionProcess />
        <ThemesSection />
        <PrizePool />
        <RulesSection />
        <ScheduleSection />
        <FAQSection />
        <LinksSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}
