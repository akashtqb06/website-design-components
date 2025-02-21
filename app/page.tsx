import FeaturesSection from "@/components/features-section"
import LandingPage from "@/components/landing-page"
import HeroSection from "@/components/hero-section"
import FAQAccordion from "@/components/faq-accordion"
import SparklesCore from "@/components/particles"
import {Footer} from "@/components/footer"

export default function Home() {
  return (
    <main className="flex min-h-screen overflow-x-hidden flex-col items-center justify-start">
     <SparklesCore background="transparent" minSize={0.6}
          maxSize={1.4} particleDensity={5} className="fixed inset-0 -z-10 w-full h-full bg-transparent pointer-events-none" />
      <LandingPage />
      <FeaturesSection />
      <FAQAccordion/>
      <HeroSection/>
      <Footer/>
    </main>
  )
}

