"use client"

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
    <section className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="pb-20">
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
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-px w-[60%] mx-auto" />
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-r from-transparent via-cyan-600 blur-sm to-transparent h-[8px] w-[60%] mx-auto" />
        </motion.div>
      </div>
          <h2 className="max-w-5xl mx-auto text-center tracking-tight font-medium text-foreground text-3xl md:text-5xl md:leading-tight pt-4">
            Used by entrepreneurs
          </h2>
          <h2 className="text-sm md:text-base max-w-4xl my-4 mx-auto text-muted-foreground text-center font-normal">
            Proactiv is used by serial entrepreneurs and overachievers.
          </h2>
        </div>
        <div className="py-60 relative">
          <TestimonialGrid />
          <FeaturedTestimonial />
        </div>
      </div>
      <div className="absolute bottom-0 z-10 inset-x-0 h-40 w-full bg-gradient-to-t from-background to-transparent"></div>
    </section>
  )
}

