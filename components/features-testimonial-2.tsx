"use client"
import styles from './features-testimonial-2.module.css';
;

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
      <div className={styles.prefixname5108d7}>
        <div className={styles.prefixnameecf71a}>
          <div className={`${styles.prefixname67b374} -top-2 -z-10 -mt-6`}>
            <div className={styles.prefixnamef5c96b}>
              <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={1200}
                className={styles.prefixnamef5c96b}
                particleColor="#06b6d4"
              />
            </div>
          </div>
          <div className={styles.prefixname70dfd1}>
            <div className={`${styles.prefixname1592f3} [mask-image:_linear-gradient(0deg,transparent,#FFFFFF_30%,#FFFFFF)] dark:[mask-image:_linear-gradient(0deg,transparent,#FFFFFF_30%,#FFFFFF)]`}>
              <div
                className={`${styles.prefixname94834e} -z-10 before:rounded-full before:absolute before:inset-0 before:bg-gradient-to-b before:from-neutral-300/30 before:to-transparent before:to-20% after:rounded-full after:absolute after:inset-0 after:bg-white dark:after:bg-neutral-900 after:m-px before:-z-20 after:-z-20`}
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
                      className={styles.prefixnamee7ed84}
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
                <div className={styles.prefixname00b4c7}>
                  <div className={styles.prefixname108072}>
                    {featuredTestimonials[currentIndex].content}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className={`${styles.prefixname90bbba} -m-1.5`}>
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
                  <span className={styles.prefixname99c483}>
                    <span className={styles.prefixname5bdbba}>
                      {testimonial.name}
                    </span>
                    <br className={styles.prefixname061090} />
                    <span className={styles.prefixname8ff30a}>
                      -
                    </span>
                    <span className={styles.prefixname8ff30a}>
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
