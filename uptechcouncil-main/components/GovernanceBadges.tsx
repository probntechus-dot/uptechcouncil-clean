"use client";

import { motion, useReducedMotion } from "framer-motion";

export function GovernanceBadges() {
  const shouldReduceMotion = useReducedMotion();
  const badges = [
    { label: "Committee", color: "border-[#00B140]/40 bg-[#00B140]/15" },
    { label: "Ethics", color: "border-[#00B140]/40 bg-[#00B140]/15" },
    { label: "Transparency", color: "border-[#1E40AF]/40 bg-[#1E40AF]/15" },
  ];

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {badges.map((badge, index) => (
        <motion.div
          key={badge.label}
          initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -2 }}
          className={`relative px-6 py-3 rounded-full border backdrop-blur-md ${badge.color} text-[#EAF2FF] text-sm font-semibold shadow-sm hover:shadow-glow-primary transition-all duration-300 group cursor-default`}
        >
          {/* Subtle glow on hover */}
          <div className={`absolute inset-0 rounded-full ${badge.color.includes('00B140') ? 'bg-[#00B140]/20' : 'bg-[#1E40AF]/20'} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10`} />
          <span className="relative z-10">{badge.label}</span>
        </motion.div>
      ))}
    </div>
  );
}