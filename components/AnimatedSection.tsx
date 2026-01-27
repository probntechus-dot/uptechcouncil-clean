"use client";

import { ReactNode, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
}

export function AnimatedSection({ children, className = "", stagger = false }: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
      animate={shouldReduceMotion || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : {
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
              staggerChildren: stagger ? 0.1 : undefined,
            }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}