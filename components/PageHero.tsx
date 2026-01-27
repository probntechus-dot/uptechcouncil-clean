"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { HeroBubbles } from "./HeroBubbles";

interface PageHeroProps {
  title: string | ReactNode;
  subtitle?: string | ReactNode;
  children?: ReactNode;
  align?: "center" | "left";
  showBubbles?: boolean;
  className?: string;
}

export function PageHero({
  title,
  subtitle,
  children,
  align = "center",
  showBubbles = true,
  className = "",
}: PageHeroProps) {
  const shouldReduceMotion = useReducedMotion();

  // Animation variants
  const containerVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  const titleVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  };

  const subtitleVariants = {
    initial: { opacity: 0, y: 25 },
    animate: { opacity: 1, y: 0 },
  };

  // Transition configs
  const containerTransition = {
    duration: 1,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  const titleTransition = {
    duration: 0.9,
    delay: 0.3,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  const subtitleTransition = {
    duration: 0.8,
    delay: 0.5,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  // Radial glow animations
  const glowBlueVariants = {
    animated: {
      x: [0, 50, -40, 0],
      y: [0, -50, 40, 0],
      scale: [1, 1.2, 0.9, 1],
    },
    static: {},
  };

  const glowGreenVariants = {
    animated: {
      x: [0, -60, 50, 0],
      y: [0, 60, -40, 0],
      scale: [1, 1.25, 0.85, 1],
    },
    static: {},
  };

  const glowRedVariants = {
    animated: {
      x: [0, 40, -50, 0],
      y: [0, -40, 50, 0],
      scale: [1, 1.15, 0.9, 1],
    },
    static: {},
  };

  const glowTransition = {
    duration: 40,
    repeat: Infinity,
    ease: "easeInOut" as const,
  };

  const glowGreenTransition = {
    duration: 45,
    repeat: Infinity,
    ease: "easeInOut" as const,
  };

  const glowRedTransition = {
    duration: 42,
    repeat: Infinity,
    ease: "easeInOut" as const,
  };

  return (
    <section
      className={`relative min-h-screen flex items-center overflow-hidden bg-[#050B14] pt-20 ${className}`}
    >
      {/* Background layers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle Noise Texture */}
        <div
          className="absolute inset-0 opacity-[0.015] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Enhanced Radial Glows */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[900px] h-[900px] bg-[#1E40AF] rounded-full opacity-[0.12] blur-[200px]"
          animate={shouldReduceMotion ? glowBlueVariants.static : glowBlueVariants.animated}
          transition={glowTransition}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-[700px] h-[700px] bg-[#00B140] rounded-full opacity-[0.1] blur-[160px]"
          animate={shouldReduceMotion ? glowGreenVariants.static : glowGreenVariants.animated}
          transition={glowGreenTransition}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/2 w-[650px] h-[650px] bg-[#E11D48] rounded-full opacity-[0.1] blur-[150px]"
          animate={shouldReduceMotion ? glowRedVariants.static : glowRedVariants.animated}
          transition={glowRedTransition}
        />

        {/* Depth Layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050B14]/60 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050B14]/40 via-transparent to-[#050B14]/40 pointer-events-none" />

        {/* Floating Bubbles */}
        {showBubbles && <HeroBubbles />}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 w-full py-24 lg:py-32">
        <div
          className={`flex flex-col ${
            align === "center" ? "items-center text-center" : "items-start text-left"
          } max-w-4xl ${align === "center" ? "mx-auto" : ""}`}
        >
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : containerVariants.initial}
            animate={containerVariants.animate}
            transition={containerTransition}
            className="space-y-10 w-full"
          >
            {typeof title === "string" ? (
              <motion.h1
                initial={shouldReduceMotion ? { opacity: 1 } : titleVariants.initial}
                animate={titleVariants.animate}
                transition={titleTransition}
                className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-[#EAF2FF] relative"
              >
                {title}
              </motion.h1>
            ) : (
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : titleVariants.initial}
                animate={titleVariants.animate}
                transition={titleTransition}
                className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-[#EAF2FF] relative"
              >
                {title}
              </motion.div>
            )}

            {subtitle && (
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : subtitleVariants.initial}
                animate={subtitleVariants.animate}
                transition={subtitleTransition}
                className={typeof subtitle === "string" ? "text-xl md:text-2xl text-[#EAF2FF]/95 font-medium leading-relaxed tracking-tight" : ""}
              >
                {typeof subtitle === "string" ? (
                  <p className="text-xl md:text-2xl text-[#EAF2FF]/95 font-medium leading-relaxed tracking-tight">{subtitle}</p>
                ) : (
                  subtitle
                )}
              </motion.div>
            )}

            {children && (
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                {children}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
