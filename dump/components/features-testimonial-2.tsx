"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import SparklesCore from "@/components/ui/particles";

const featuredTestimonials = [
  {
    id: 1,
    name: "Tyler Durden",
    role: "Creative Director & Business Owner",
    content:
      "I made a soap with the help of AI, it was so easy to use. I'm so glad this happened because it revolutionized my entire business model and production process.",
    avatar: "https://i.pravatar.cc/150?img=2"
  },
  {
    id: 3,
    name: "Manu Arora",
    role: "Tech Innovator & Entrepreneur",
    content:
      "What a fantastic AI Proactiv AI is, I just love it. It has completely transformed the way I approach problems and develop solutions.",
    avatar: "https://i.pravatar.cc/150?img=1"
  },
  {
    id: 2,
    name: "Alice Johnson",
    role: "Senior Software Engineer",
    content:
      "This AI has transformed the way I work! It's like having a brilliant assistant who knows exactly what I need before I even ask.",
    avatar: "https://i.pravatar.cc/150?img=3"
  }
];

export default function FeaturedTestimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section>
      <div className="max-w-3xl mx-auto relative z-40 h-80">
        <div className="relative pb-12 md:pb-20">
          <div className="absolute left-1/2 -translate-x-1/2 -top-2 -z-10 w-80 h-20 -mt-6">
            <div className="w-full h-full">
              <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={1200}
                className="w-full h-full"
                particleColor="#06b6d4"
              />
            </div>
          </div>
          <div className="text-center">
            <div className="relative h-40 [mask-image:_linear-gradient(0deg,transparent,#FFFFFF_30%,#FFFFFF)] md:[mask-image:_linear-gradient(0deg,transparent,#FFFFFF_40%,#FFFFFF)] dark:[mask-image:_linear-gradient(0deg,transparent,#FFFFFF_30%,#FFFFFF)]">
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[480px] h-[480px] -z-10 pointer-events-none 
                  before:rounded-full rounded-full 
                  before:absolute before:inset-0 
                  before:bg-gradient-to-b before:from-neutral-300/30 before:to-transparent before:to-20% 
                  after:rounded-full after:absolute after:inset-0 
                  after:bg-white dark:after:bg-neutral-900 
                  after:m-px before:-z-20 after:-z-20"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 h-full -z-10"
                  >
                    <Image
                      src={
                        featuredTestimonials[currentIndex].avatar ||
                        "/placeholder.svg"
                      }
                      alt={featuredTestimonials[currentIndex].name}
                      width={56}
                      height={56}
                      className="relative top-11 left-1/2 -translate-x-1/2 rounded-full"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="mb-10 transition-all duration-150 delay-300 ease-in-out px-8 sm:px-6"
                style={{ height: "84px" }}
              >
                <div className="relative flex flex-col">
                  <div className="text-base md:text-xl font-bold text-foreground">
                    {featuredTestimonials[currentIndex].content}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="flex flex-wrap justify-center -m-1.5 px-8 sm:px-6">
              {featuredTestimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  className={`px-2 py-1 rounded-full m-1.5 text-xs border transition duration-150 ease-in-out bg-background relative before:absolute before:inset-0 before:bg-muted/30 before:rounded-full before:pointer-events-none ${
                    index === currentIndex
                      ? "border-[var(--color-one)]"
                      : "border-transparent opacity-70"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                >
                  <span className="relative">
                    <span className="text-foreground font-bold">
                      {testimonial.name}
                    </span>
                    <br className="block sm:hidden" />
                    <span className="text-muted-foreground hidden sm:inline-block">
                      -
                    </span>
                    <span className="text-muted-foreground hidden sm:inline-block">
                      {testimonial.role}
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
