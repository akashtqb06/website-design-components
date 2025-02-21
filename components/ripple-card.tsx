"use client"

import { Earth, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

const NUM_RIPPLES = 10

export default function RippleCard() {
  return (
    <div className="overflow-visible relative grid-cols-2 row-span-1 h-full md:grid md:col-span-3 dark:border-b-0 border-t-[1.2px] md:border-b-[1.2px]">
      <div className="top-0 left-0 p-16 pt-10 w-full h-full md:absolute md:px-10">
        <div className="flex flex-col justify-center items-center w-full">
          <div className="flex gap-2 items-center">
            <Earth className="w-4 h-4" />
            <p className="text-gray-600 dark:text-gray-400">Deploy in a minute</p>
          </div>
          <p className="mx-auto mt-4 max-w-lg text-4xl font-normal tracking-tighter text-center md:text-4xl">
            Deploy in a minute and. <strong>spread across the edge</strong>
          </p>
          <Link href="/download" className="z-50">
            <Button className="h-9 p-5 mt-4 ml-auto rounded-lg">Start now!</Button>
          </Link>

          {/* Ripple effect background */}
          <div className="absolute opacity-65 w-full inset-0 flex items-center justify-center bg-white/5 [mask-image:linear-gradient(to_bottom,white,transparent)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset]">
            {[...Array(NUM_RIPPLES)].map((_, i) =>{
        const size = 180 + i * 70;
        const opacity =  0.24 - i * 0.03;
        const borderStyle = i === NUM_RIPPLES - 1 ? "dashed" : "solid";
        const borderOpacity = 5 + i * 5;

        return (
              <motion.div
            key={i}
            initial={{ scale: 1, opacity,x: "-50%",
                  y: "-50%", }}
            animate={{ scale: [1, 0.9, 1], opacity }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
            className="absolute top-1/2 left-1/2 rounded-full border bg-foreground/25 shadow-xl"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              borderStyle,
              borderWidth: "1px",
              borderColor: `hsl(var(--foreground), ${borderOpacity / 100})`,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />);
            })}
          </div>
        </div>
      </div>

      {/* Corner decorations */}
      {[
        { position: "bottom-[-15px] left-[-15px]" },
        { position: "bottom-[-15px] right-[-15px]" },
        { position: "top-[-15px] left-[-15px]" },
      ].map((pos, i) => (
        <Plus key={i} className={`absolute w-8 h-8 ${pos.position} text-black/20 dark:text-white/40`} />
      ))}
    </div>
  )
}

