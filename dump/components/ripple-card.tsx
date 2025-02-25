"use client"
import styles from './ripple-card.module.css';
import { Earth, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

const NUM_RIPPLES = 10

export default function RippleCard() {
  return (
    <div className={styles.prefixname8a993c}>
      <div className={styles.prefixname563339}>
        <div className={styles.prefixnameafbced}>
          <div className={styles.prefixname5275e9}>
            <Earth className={styles.prefixname1bbd1c} />
            <p className={styles.prefixname616bcc}>Deploy in a minute</p>
          </div>
          <p className={styles.prefixnamebf1f3a}>
            Deploy in a minute and. <strong>spread across the edge</strong>
          </p>
          <Link href="/download" className={styles.prefixname7379c2}>
            <Button className={styles.prefixnamea98d53}>Start now!</Button>
          </Link>

          {/* Ripple effect background */}
          <div className={`${styles.prefixname235797} [mask-image:linear-gradient(to_bottom,white,transparent)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset]`}>
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

