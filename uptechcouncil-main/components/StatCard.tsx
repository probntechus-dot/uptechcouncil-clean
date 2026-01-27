"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface StatCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  variant?: "light" | "dark";
  className?: string;
  index?: number;
}

export function StatCard({ icon, title, description, variant = "light", className = "", index = 0 }: StatCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={shouldReduceMotion ? {} : { y: -4, scale: 1.02 }}
      className={`relative ${className}`}
    >
      <div className="relative h-full rounded-2xl border border-[rgba(11,18,32,0.08)] bg-white p-8 shadow-sm transition-all duration-500 group hover:shadow-xl hover:border-[#1E40AF]/20 overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#F6F8FC] to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Glass icon badge */}
        {icon && (
          <div className="relative z-10 mb-6 flex justify-center">
            <motion.div
              className="relative w-20 h-20 rounded-full bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-md border border-[rgba(11,18,32,0.08)] shadow-sm flex items-center justify-center group-hover:border-[#1E40AF]/30 group-hover:shadow-lg transition-all duration-500"
              whileHover={shouldReduceMotion ? {} : { scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Subtle glow effect - adapts to icon color */}
              <div className="absolute inset-0 rounded-full bg-[#1E40AF]/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
              
              {/* Icon container with micro-animation */}
              <motion.div
                className="relative z-10"
                whileHover={shouldReduceMotion ? {} : { scale: 1.15 }}
                transition={{ duration: 0.2 }}
              >
                {icon}
              </motion.div>
            </motion.div>
          </div>
        )}
        
        {/* Content */}
        <div className="relative z-10">
          <h3 className="font-heading font-semibold text-xl mb-3 text-[#0B1220] group-hover:text-[#1E40AF] transition-colors duration-300">
            {title}
          </h3>
          <p className="text-[rgba(11,18,32,0.68)] text-base leading-relaxed">
            {description}
          </p>
        </div>
        
        {/* Subtle shine effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
        </div>
      </div>
    </motion.div>
  );
}