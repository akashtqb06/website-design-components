import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import AnimatedBadge from "./animated-badge";
import HeroImage from "./hero-image";
import BackgroundEffects from "./background-effect";

export default function HeroSection() {
  return (
    <section className="relative mx-auto mt-32 max-w-[80rem] px-6 text-center md:px-8">
      <BackgroundEffects />

      <AnimatedBadge />
      <h1 className="bg-gradient-to-br from-black from-30% to-black/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] dark:from-white dark:to-white/40">
        UI is the new way
        <br className="hidden md:block" /> to build landing pages.
      </h1>
      <p className="mb-12 text-lg tracking-tight text-gray-400 md:text-xl text-balance translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        Beautifully designed, animated components and templates built with
        <br className="hidden md:block" /> Tailwind CSS, React, and Framer
        Motion.
      </p>
      <Button
        className="translate-y-[-1rem] animate-fade-in opacity-0 ease-in-out [--animation-delay:600ms]"
        size="lg"
      >
        <span>Get Started for free</span>
        <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
      </Button>
      <HeroImage />
    </section>
  );
}
