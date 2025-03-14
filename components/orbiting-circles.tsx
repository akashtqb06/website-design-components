"use client";
import styles from "./orbiting-circles.module.css";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

export interface OrbitingCirclesProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  radius?: number;
  path?: boolean;
  iconSize?: number;
  speed?: number;
}

export function OrbitingCircles({
  className,
  children,
  reverse = false,
  duration = 10,
  radius = 100,
  path = true,
  iconSize = 40,
  speed = 1,
  ...props
}: OrbitingCirclesProps) {
  const calculatedDuration = duration / speed;
  const childArray = React.Children.toArray(children);

  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className={styles.prefixnamef65ed7}
        >
          <circle
            className="stroke-black/10 stroke-1 dark:stroke-white/10"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
          />
        </svg>
      )}
      {/* Wrapper for orbiting effect */}
      <motion.div
        className="absolute items-center justify-center"
        animate={{
          rotate: reverse ? [-360, 0] : [0, 360] // Smooth continuous rotation
        }}
        transition={{
          duration: calculatedDuration,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {childArray.map((child, index) => {
          const angle = (360 / childArray.length) * index;
          const radians = (angle * Math.PI) / 180;
          const x = radius * Math.cos(radians);
          const y = radius * Math.sin(radians);

          return (
            <motion.div
              key={index}
              className={cn(
                "absolute flex items-center justify-center rounded-full",
                className
              )}
              style={{
                width: `${iconSize}px`,
                height: `${iconSize}px`,
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: "translate(-50%, -50%)" // Center the icons properly
              }}
            >
              {child}
            </motion.div>
          );
        })}
      </motion.div>
    </>
  );
}
