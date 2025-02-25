"use client"

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
      <div className="absolute inset-0 h-full w-full bg-background opacity-30 [mask-image:radial-gradient(circle_at_center,transparent_10%,white_90%)] dark:[mask-image:radial-gradient(circle_at_center,transparent_10%,black_90%)]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto relative z-10">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="grid gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="p-8 rounded-xl border border-border bg-card/30 shadow-sm group">
                <h3 className="text-base font-semibold text-card-foreground py-2">{testimonial.content}</h3>
                <div className="flex gap-2 items-center mt-8">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div className="flex flex-col">
                    <p className="text-sm font-normal max-w-sm text-foreground">{testimonial.name}</p>
                    <p className="text-sm font-normal max-w-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    )
  }

