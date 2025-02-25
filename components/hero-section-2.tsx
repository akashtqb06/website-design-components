import styles from './hero-section-2.module.css';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import AnimatedBadge from "./animated-badge";
import HeroImage from "./hero-image";
import BackgroundEffects from "./background-effect";

export default function HeroSection() {
  return (
    <section className={styles.prefixname48c43f}>
      <BackgroundEffects />

      <AnimatedBadge />
      <h1 className={`${styles.prefixname9b87d3} [--animation-delay:200ms]`}>
        UI is the new way
        <br className={styles.prefixnamed58f63} /> to build landing pages.
      </h1>
      <p className={`${styles.prefixname02bd49} [--animation-delay:400ms]`}>
        Beautifully designed, animated components and templates built with
        <br className={styles.prefixnamed58f63} /> Tailwind CSS, React, and Framer
        Motion.
      </p>
      <Button
        className={`${styles.prefixnamedcb578} [--animation-delay:600ms]`}
        size="lg"
      >
        <span>Get Started for free</span>
        <ArrowRight className={`${styles.prefixnameecb181} group-hover:translate-x-1`} />
      </Button>
      <HeroImage />
    </section>
  );
}
