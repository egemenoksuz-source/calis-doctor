"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
};

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) {
  const initialPosition =
    direction === "left"
      ? { x: -45, y: 0 }
      : direction === "right"
        ? { x: 45, y: 0 }
        : { x: 0, y: 40 };

  return (
    <motion.div
      initial={{
        opacity: 0,
        filter: "blur(8px)",
        ...initialPosition,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.75,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}