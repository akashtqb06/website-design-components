import FeaturesSection from "@/components/features-section"
import LandingPage from "@/components/landing-page"
import HeroSection from "@/components/heroSections/hero-section"
import FAQAccordion from "@/components/faq-accordion"

export default function Home() {
  return (
    <>
      <LandingPage />
      <FeaturesSection />
      <FAQAccordion/>
      <HeroSection/>
    </>
  )
}

