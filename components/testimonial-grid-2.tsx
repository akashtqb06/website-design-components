"use client"
import styles from './testimonial-grid-2.module.css';
import { motion } from "framer-motion"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Manu Arora",
    role: "Tech Innovator & Entrepreneur",
    content:
      "What a fantastic AI Proactiv AI is, I just love it. It has completely transformed the way I approach problems and develop solutions.",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 1,
    name: "Manu Arora",
    role: "Tech Innovator & Entrepreneur",
    content:
      "What a fantastic AI Proactiv AI is, I just love it. It has completely transformed the way I approach problems and develop solutions.",
    avatar: "https://i.pravatar.cc/150?img=1",
  },{
    id: 1,
    name: "Manu Arora",
    role: "Tech Innovator & Entrepreneur",
    content:
      "What a fantastic AI Proactiv AI is, I just love it. It has completely transformed the way I approach problems and develop solutions.",
    avatar: "https://i.pravatar.cc/150?img=1",
  },{
    id: 1,
    name: "Manu Arora",
    role: "Tech Innovator & Entrepreneur",
    content:
      "What a fantastic AI Proactiv AI is, I just love it. It has completely transformed the way I approach problems and develop solutions.",
    avatar: "https://i.pravatar.cc/150?img=1",
  },{
    id: 1,
    name: "Manu Arora",
    role: "Tech Innovator & Entrepreneur",
    content:
      "What a fantastic AI Proactiv AI is, I just love it. It has completely transformed the way I approach problems and develop solutions.",
    avatar: "https://i.pravatar.cc/150?img=1",
  },{
    id: 1,
    name: "Manu Arora",
    role: "Tech Innovator & Entrepreneur",
    content:
      "What a fantastic AI Proactiv AI is, I just love it. It has completely transformed the way I approach problems and develop solutions.",
    avatar: "https://i.pravatar.cc/150?img=1",
  },{
    id: 1,
    name: "Manu Arora",
    role: "Tech Innovator & Entrepreneur",
    content:
      "What a fantastic AI Proactiv AI is, I just love it. It has completely transformed the way I approach problems and develop solutions.",
    avatar: "https://i.pravatar.cc/150?img=1",
  },{
    id: 1,
    name: "Manu Arora",
    role: "Tech Innovator & Entrepreneur",
    content:
      "What a fantastic AI Proactiv AI is, I just love it. It has completely transformed the way I approach problems and develop solutions.",
    avatar: "https://i.pravatar.cc/150?img=1",
  },{
    id: 1,
    name: "Manu Arora",
    role: "Tech Innovator & Entrepreneur",
    content:
      "What a fantastic AI Proactiv AI is, I just love it. It has completely transformed the way I approach problems and develop solutions.",
    avatar: "https://i.pravatar.cc/150?img=1",
  },{
    id: 1,
    name: "Manu Arora",
    role: "Tech Innovator & Entrepreneur",
    content:
      "What a fantastic AI Proactiv AI is, I just love it. It has completely transformed the way I approach problems and develop solutions.",
    avatar: "https://i.pravatar.cc/150?img=1",
  },{
    id: 1,
    name: "Manu Arora",
    role: "Tech Innovator & Entrepreneur",
    content:
      "What a fantastic AI Proactiv AI is, I just love it. It has completely transformed the way I approach problems and develop solutions.",
    avatar: "https://i.pravatar.cc/150?img=1",
  },{
    id: 1,
    name: "Manu Arora",
    role: "Tech Innovator & Entrepreneur",
    content:
      "What a fantastic AI Proactiv AI is, I just love it. It has completely transformed the way I approach problems and develop solutions.",
    avatar: "https://i.pravatar.cc/150?img=1",
  },{
    id: 1,
    name: "Manu Arora",
    role: "Tech Innovator & Entrepreneur",
    content:
      "What a fantastic AI Proactiv AI is, I just love it. It has completely transformed the way I approach problems and develop solutions.",
    avatar: "https://i.pravatar.cc/150?img=1",
  },{
    id: 1,
    name: "Manu Arora",
    role: "Tech Innovator & Entrepreneur",
    content:
      "What a fantastic AI Proactiv AI is, I just love it. It has completely transformed the way I approach problems and develop solutions.",
    avatar: "https://i.pravatar.cc/150?img=1",
  },{
    id: 1,
    name: "Manu Arora",
    role: "Tech Innovator & Entrepreneur",
    content:
      "What a fantastic AI Proactiv AI is, I just love it. It has completely transformed the way I approach problems and develop solutions.",
    avatar: "https://i.pravatar.cc/150?img=1",
  },{
    id: 1,
    name: "Manu Arora",
    role: "Tech Innovator & Entrepreneur",
    content:
      "What a fantastic AI Proactiv AI is, I just love it. It has completely transformed the way I approach problems and develop solutions.",
    avatar: "https://i.pravatar.cc/150?img=1",
  }
]

export default function TestimonialGrid() {
    return (
      <div className={`${styles.prefixnamea3b570} [mask-image:radial-gradient(circle_at_center,transparent_10%,white_90%)] dark:[mask-image:radial-gradient(circle_at_center,transparent_10%,black_90%)]`}>
        <div className={styles.prefixname2c2bfd}>
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="grid gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className={`${styles.prefixname8ef75a} border group`}>
                <h3 className={styles.prefixname450f34}>{testimonial.content}</h3>
                <div className={styles.prefixname212c74}>
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className={styles.prefixnamefee2ce}
                  />
                  <div className={styles.prefixname06858a}>
                    <p className={styles.prefixname12f4ba}>{testimonial.name}</p>
                    <p className={styles.prefixnamec4693f}>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    )
  }

