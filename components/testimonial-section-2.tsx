"use client"
import styles from './testimonial-section-2.module.css';
import { useState, useEffect } from "react"
import TestimonialGrid from "@/components/testimonial-grid-2"
import FeaturedTestimonial from "@/components/features-testimonial-2"
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export default function TestimonialGridSection() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null
  const isDarkMode = theme === "dark";

  return (
    <section className={styles.prefixnamef42fb7}>
      <div className={styles.prefixname7611f9}>
        <div className={styles.prefixname36733d}>
        <div className="[perspective:400px] [transform-style:preserve-3d]">
        <motion.div
          className={`h-14 w-14 p-[4px] rounded-md mx-auto relative ${
            isDarkMode
              ? "bg-gradient-to-b from-neutral-800 to-neutral-950"
              : "bg-gradient-to-b from-neutral-200 to-neutral-400"
          }`}
          style={{ transform: "rotateX(25deg)", transformOrigin: "center" }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <div
            className={`rounded-[5px] h-full w-full relative z-20 flex justify-center items-center overflow-hidden ${
              isDarkMode ? "bg-[#1a1a1a]" : "bg-white"
            }`}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`h-6 w-6 ${
                isDarkMode ? "text-cyan-500" : "text-cyan-600"
              }`}
            >
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>
          <div
            className={`absolute bottom-0 inset-x-0 opacity-50 rounded-full blur-lg h-4 w-full mx-auto z-30 ${
              isDarkMode ? "bg-neutral-600" : "bg-neutral-400"
            }`}
          />
          <div className={styles.prefixname0f89f9} />
          <div className={styles.prefixnameee3cc4} />
        </motion.div>
      </div>
          <h2 className={styles.prefixname78286f}>
            Used by entrepreneurs
          </h2>
          <h2 className={styles.prefixname3f0720}>
            Proactiv is used by serial entrepreneurs and overachievers.
          </h2>
        </div>
        <div className={styles.prefixnamede7973}>
          <TestimonialGrid />
          <FeaturedTestimonial />
        </div>
      </div>
      <div className={styles.prefixname66a337}></div>
    </section>
  )
}

