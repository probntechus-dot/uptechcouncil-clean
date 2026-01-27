"use client";

import { useState, useRef, useEffect } from "react";
import { sponsorLogos } from "@/data/sponsor-logos";
import { useReducedMotion } from "framer-motion";

export function SponsorMarquee() {
  const [isPaused, setIsPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...sponsorLogos, ...sponsorLogos];

  useEffect(() => {
    if (shouldReduceMotion && containerRef.current) {
      containerRef.current.style.animation = "none";
    }
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) {
    return (
      <div className="relative overflow-x-auto scrollbar-hide py-8">
        <div className="flex gap-8 min-w-max px-4">
          {sponsorLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-20 w-32 md:h-24 md:w-40 shrink-0 bg-[rgba(255,255,255,0.05)] backdrop-blur-sm rounded-xl border border-[rgba(234,242,255,0.12)] p-4 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={logo}
                alt={`Sponsor logo ${index + 1}`}
                className="object-contain h-full w-full"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative overflow-hidden py-10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050B14] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050B14] to-transparent z-10 pointer-events-none" />
      
      <div className="flex gap-10">
        <div
          ref={containerRef}
          className={`flex gap-10 shrink-0 ${isPaused ? "animation-paused" : "animate-scroll-smooth"}`}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`logo-${index}`}
              className="group relative flex items-center justify-center h-24 w-36 md:h-28 md:w-44 shrink-0 bg-[rgba(255,255,255,0.04)] backdrop-blur-md rounded-xl border border-[rgba(234,242,255,0.12)] p-5 grayscale opacity-50 hover:opacity-100 hover:grayscale-0 hover:border-[#1E40AF]/50 hover:bg-[rgba(255,255,255,0.08)] hover:shadow-[0_8px_32px_rgba(30,64,175,0.25)] hover:scale-105 transition-all duration-500 cursor-pointer"
            >
              {/* Subtle glow on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#1E40AF]/0 via-[#1E40AF]/0 to-[#1E40AF]/0 group-hover:from-[#1E40AF]/10 group-hover:via-[#1E40AF]/5 group-hover:to-transparent transition-all duration-500 opacity-0 group-hover:opacity-100" />
              
              <img
                src={logo}
                alt={`Sponsor logo ${index + 1}`}
                className="object-contain h-full w-full relative z-10"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}