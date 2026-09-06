"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface AnimatedItemProps {
  children: ReactNode;
  className?: string;
  index?: number;
}

/**
 * Use inside a grid/list to stagger-reveal individual cards as the section scrolls in.
 */
export function AnimatedItem({ children, className, index = 0 }: AnimatedItemProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
    >
      {children}
    </motion.div>
  );
}
