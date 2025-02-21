"use client"

import { Earth, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

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
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-ripple rounded-full bg-foreground/25 shadow-xl border"
                style={{
                  width: `${180 + i * 70}px`,
                  height: `${180 + i * 70}px`,
                  opacity: Math.max(0, 0.2 - i * 0.03),
                  animationDelay: `${i * 0.06}s`,
                  borderStyle: i === 9 ? "dashed" : "solid",
                  borderWidth: "1px",
                  borderColor: `hsl(var(--foreground), ${0.05 + i * 0.05})`,
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%) scale(1)",
                }}
              />
            ))}
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

