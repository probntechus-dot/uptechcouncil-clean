"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import CountUp from "react-countup";
import { Globe2, Sparkles, TrendingUp, Users } from "lucide-react";

const stats = [
  {
    label: "Strategic Members",
    value: 120,
    suffix: "+",
    description: "Enterprises, startups, and public sector allies driving the mission.",
    icon: Users,
    accent: "from-[#1E40AF]/15 via-transparent to-transparent",
    glow: "shadow-[0_0_30px_rgba(30,64,175,0.2)]",
  },
  {
    label: "Innovation Programs",
    value: 48,
    suffix: "+",
    description: "Active initiatives across AI, trade, and digital transformation.",
    icon: Sparkles,
    accent: "from-[#00B140]/15 via-transparent to-transparent",
    glow: "shadow-[0_0_30px_rgba(0,177,64,0.18)]",
  },
  {
    label: "Cross-Border Ventures",
    value: 32,
    suffix: "+",
    description: "Investment and partnership pipelines between the UK and Pakistan.",
    icon: Globe2,
    accent: "from-[#E11D48]/15 via-transparent to-transparent",
    glow: "shadow-[0_0_30px_rgba(225,29,72,0.18)]",
  },
  {
    label: "Export Growth Lift",
    value: 285,
    suffix: "%",
    description: "Momentum in digital trade outcomes accelerated by UPTECH.",
    icon: TrendingUp,
    accent: "from-[#1E40AF]/15 via-transparent to-transparent",
    glow: "shadow-[0_0_30px_rgba(30,64,175,0.2)]",
  },
];

export function ImpactStats() {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <div ref={sectionRef} className="grid gap-6 lg:grid-cols-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={stat.label}
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.6,
              delay: index * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={shouldReduceMotion ? {} : { y: -6, scale: 1.02 }}
            className="relative"
          >
            <div className="relative h-full rounded-2xl border border-[rgba(11,18,32,0.08)] bg-white p-6 shadow-sm transition-all duration-500 hover:border-[#1E40AF]/20 hover:shadow-xl overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.accent} opacity-0 hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10 flex items-start justify-between gap-4">
                <div className="space-y-3">
                  <div className="text-4xl font-semibold text-[#0B1220]">
                    {shouldReduceMotion ? (
                      `${stat.value}${stat.suffix}`
                    ) : isInView ? (
                      <CountUp end={stat.value} duration={2.4} suffix={stat.suffix} separator="," />
                    ) : (
                      "0"
                    )}
                  </div>
                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1E40AF]">
                    {stat.label}
                  </div>
                </div>
                <div className={`relative flex h-12 w-12 items-center justify-center rounded-full bg-white/70 border border-[rgba(11,18,32,0.08)] ${stat.glow}`}>
                  <Icon className="h-6 w-6 text-[#0B1220]" />
                </div>
              </div>

              <p className="relative z-10 mt-4 text-sm leading-relaxed text-[rgba(11,18,32,0.68)]">
                {stat.description}
              </p>

              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#1E40AF]/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

