"use client";
import React, { ReactNode } from "react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
};

export default function AnimationSection({
  children,
  className = "",
  delay = 0,
  direction = "up" 
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-20px" });

  const variants = {
    hidden: (direction: string) => {
      const offsets: Record<string, { x: number; y: number }> = {
        up: { x: 0, y: 150 },
        down: { x: 0, y: -150 },
        left: { x: 150, y: 0 },
        right: { x: -150, y: 0 },
      };
      return {
        opacity: 0,
        x: offsets[direction].x,
        y: offsets[direction].y,
        scale: 0.85,
      };
    },
    visible: { opacity: 1, x: 0, y: 0, scale: 1 },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      custom={direction}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
}
