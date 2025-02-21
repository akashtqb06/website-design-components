"use client"

import * as React from "react"
import { Plus } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const faqs = [
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "The flag is a big plus. But seriously, Switzerland offers stunning landscapes, excellent chocolate, precise timepieces, and a high quality of life that's hard to beat.",
  },
  {
    question: "What's the best thing?",
    answer:
      "That's subjective and depends on personal preferences. Some might say experiences, others relationships, and some might argue it's the pursuit of growth and learning.",
  },
  {
    question: "What's about Switzerland?",
    answer:
      "Switzerland is known for its neutrality, banking system, mountains, cheese, chocolate, watches, and high standard of living. It's a multilingual country with four national languages.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "Switzerland's combination of natural beauty, political stability, economic prosperity, and cultural diversity makes it unique. The Swiss Alps, efficient public transport, and high-quality education are notable features.",
  },
  {
    question: "What's the best thing about Switzerland?",
    answer:
      "Among Switzerland's many attractions are its pristine environment, direct democracy system, innovative technology sector, and world-class healthcare. It consistently ranks among the happiest countries.",
  },
]

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null)

  return (
    <div className="bg-transparent relative w-full z-20">
      <div className="mx-auto max-w-full px-8 py-24 sm:py-32 lg:px-10 lg:py-32 relative">
        <div
          className="absolute left-0 top-44 h-56 w-[90%] opacity-10 overflow-x-hidden bg-[#9560EB] bg-opacity-40 blur-[337.4px]"
          style={{ transform: "rotate(-30deg)" }}
        />

        <div className="mx-auto max-w-4xl divide-y divide-white/5">
          <div>
            <p className="mt-8 max-w-2xl mx-auto font-geist text-center text-5xl font-normal tracking-tight text-gray-800 dark:text-gray-200">
              Frequently Asked Questions.
            </p>
            <p className="mt-4 max-w-xl mx-auto pt-4 text-lg text-center tracking-tight text-black/60 dark:text-gray-400">
              Design assets, icon teardowns, and a community of fellow icon designers where you can ask questions.
            </p>
          </div>

          <dl className="mt-10 space-y-6 divide-y divide-white/10">
            {faqs.map((faq, index) => (
              <div key={index} className="pt-6">
                <div
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="cursor-pointer flex w-full items-start justify-between text-left text-black dark:text-white"
                >
                  <span className="text-base relative cursor-pointer font-semibold leading-7">{faq.question}</span>
                  <motion.span
                    className="ml-6 flex h-7 items-center"
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Plus className="h-6 w-6" />
                  </motion.span>
                </div>
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                        transition: {
                          height: {
                            duration: 0.3,
                          },
                          opacity: {
                            duration: 0.25,
                            delay: 0.15,
                          },
                        },
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                          height: {
                            duration: 0.3,
                          },
                          opacity: {
                            duration: 0.25,
                          },
                        },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="mt-2 pr-12">
                        <p className="text-base leading-7 text-gray-600 dark:text-gray-400">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

