"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { sponsorLogos } from "@/data/sponsor-logos";
import { motion, useReducedMotion, useInView } from "framer-motion";

export function SponsorMarquee() {
  const [isPaused, setIsPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...sponsorLogos, ...sponsorLogos];

  useEffect(() => {
    if (shouldReduceMotion && containerRef.current) {
      containerRef.current.style.animation = "none";
    }
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) {
    return (
      <motion.div
        ref={sectionRef}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-x-auto scrollbar-hide py-8"
      >
        <div className="flex gap-8 min-w-max px-4">
          {sponsorLogos.map((logo, index) => (
            <div
              key={index}
              className="relative flex items-center justify-center h-24 w-36 md:h-28 md:w-44 shrink-0 bg-white rounded-xl border border-gray-200 p-5"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={160}
                height={112}
                className="object-contain h-full w-full"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden py-10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050B14] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050B14] to-transparent z-10 pointer-events-none" />
      
      {/* Animated shine sweep */}
      <motion.div
        className="absolute inset-0 z-20 pointer-events-none"
        initial={{ x: "-100%" }}
        animate={{ x: "200%" }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 2,
        }}
      >
        <div className="w-64 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent blur-xl" />
      </motion.div>
      
      <div className="flex gap-10">
        <div
          ref={containerRef}
          className={`flex gap-10 shrink-0 ${isPaused ? "animation-paused" : "animate-scroll-smooth"}`}
        >
          {duplicatedLogos.map((logo, index) => {
            // Cycle through brand colors for gradient border
            const colorIndex = index % 3;
            const borderColors = [
              "from-[#1E40AF] via-[#1E40AF]/50 to-[#1E40AF]",
              "from-[#00B140] via-[#00B140]/50 to-[#00B140]",
              "from-[#E11D48] via-[#E11D48]/50 to-[#E11D48]",
            ];
            const glowColors = [
              "rgba(30,64,175,0.4)",
              "rgba(0,177,64,0.4)",
              "rgba(225,29,72,0.4)",
            ];

            return (
              <motion.div
                key={`logo-${index}`}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 20 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="group relative flex items-center justify-center h-24 w-36 md:h-28 md:w-44 shrink-0 cursor-pointer"
              >
                {/* Animated gradient border - cycles through brand colors */}
                <motion.div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    background: [
                      `linear-gradient(135deg, #1E40AF, #00B140, #E11D48, #1E40AF)`,
                      `linear-gradient(135deg, #00B140, #E11D48, #1E40AF, #00B140)`,
                      `linear-gradient(135deg, #E11D48, #1E40AF, #00B140, #E11D48)`,
                      `linear-gradient(135deg, #1E40AF, #00B140, #E11D48, #1E40AF)`,
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    padding: "1px",
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                >
                  <div className="w-full h-full rounded-xl bg-white" />
                </motion.div>
                
                {/* Static border for non-hover state */}
                <div className="absolute inset-0 rounded-xl border border-gray-200 group-hover:border-transparent transition-all duration-500 bg-white" />
                
                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                  style={{
                    boxShadow: `0 8px 32px ${glowColors[colorIndex]}`,
                  }}
                />
                
                {/* Subtle inner glow on hover */}
                <div className="absolute inset-[1px] rounded-xl bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:from-[#1E40AF]/5 group-hover:via-[#00B140]/5 group-hover:to-[#E11D48]/5 transition-all duration-500 pointer-events-none" />
                
                {/* Logo image */}
                <div className="relative z-10 w-full h-full flex items-center justify-center p-5">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={160}
                    height={112}
                    className="object-contain h-full w-full"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
