import FeaturesSection from "@/components/features-section"
import LandingPage from "@/components/landing-page"
import HeroSection from "@/components/hero-section"
import FAQAccordion from "@/components/faq-accordion"
import SparklesCore from "@/components/ui/particles"
import {Footer} from "@/components/footer"

export default function Home() {
  return (
    <main className="flex min-h-screen overflow-x-hidden flex-col items-center justify-start">
      <LandingPage />
      <FeaturesSection />
      <FAQAccordion/>
      <HeroSection/>
    </main>
  )
}

