"use client"
import styles from './faq-accordion.module.css';
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
    <div className={styles.prefixname40233d}>
      <div className={styles.prefixnamec92def}>
        <div
          className={styles.prefixnamebd56e7}
          style={{ transform: "rotate(-30deg)" }}
        />

        <div className={`${styles.prefixname22b4e6} divide-y divide-white/5`}>
          <div>
            <p className={styles.prefixname9ab3b5}>
              Frequently Asked Questions.
            </p>
            <p className={styles.prefixname4cc0d3}>
              Design assets, icon teardowns, and a community of fellow icon designers where you can ask questions.
            </p>
          </div>

          <dl className={`${styles.prefixname61eb46} divide-y divide-white/10`}>
            {faqs.map((faq, index) => (
              <div key={index} className={styles.prefixname248fe6}>
                <div
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className={styles.prefixname508e30}
                >
                  <span className={styles.prefixnamefbb3e7}>{faq.question}</span>
                  <motion.span
                    className="ml-6 flex h-7 items-center"
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Plus className={styles.prefixname601216} />
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
                      <div className={styles.prefixnamec24fe4}>
                        <p className={styles.prefixname1b80a3}>{faq.answer}</p>
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

