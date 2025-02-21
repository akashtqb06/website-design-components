"use client"

import { LineChart, Plus } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const NUM_BEAMS = 8;

export default function AccelerateCard() {
  return (
    <div className="relative md:grid border-t-2 border-l-[1.2px] dark:[border:0.01px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_rgb(255_255_255_/_0.05)_inset] md:col-span-2 md:grid-cols-2 row-span-2 overflow-hidden bg-white dark:bg-gray-800">
      {/* Animated Beams */}
        {[...Array(NUM_BEAMS)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute origin-top-right top-0 -left-10 bg-gradient-to-b from-primary to-transparent blur-xl"
            initial={{ rotate: 0, width: "10px", height: "1000px" }}
            animate={{
              rotate: [0, 360],
              width: ["10px", "30px", "10px"],
              height: ["1000px", "800px", "1000px"],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: index * (20 / NUM_BEAMS),
            }}
          />
        ))}

      <div className="relative flex top-0 left-0 flex-col p-8 h-full md:absolute md:px-10">
        <div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 items-center">
              <LineChart className="w-4 h-4" />
              <p className="text-gray-600 dark:text-gray-400">Accelerate</p>
            </div>
            <p className="max-w-md text-2xl font-normal tracking-tighter">
              Grow with us and move forward with 10x. <strong>Accelerate as speed of light</strong>
            </p>
            <Image
              src="/analytics-large-dark.png"
              alt="A graph showing a visitor count & clicks"
              width={500}
              height={230}
              className="object-cover md:object-center h-[230px]"
            />
            <p className="mt-2 text-md text-muted-foreground">
              We are always looking for ways to make your experience better.
              <Link href="https://docs.arc-browser.app/themes-store/themes-marketplace" className="text-gray-50 ml-1">
                Learn more
              </Link>
            </p>
          </div>
          <Link href="/download" className="inline-block mt-4">
            <Button>Download arc now!</Button>
          </Link>
        </div>
      </div>
      <Plus className="absolute w-8 h-8 bottom-[-15px] left-[-15px] text-black/20 dark:text-white/40" />
    </div>
  )
}

