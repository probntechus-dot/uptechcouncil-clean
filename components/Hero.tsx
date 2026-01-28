"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "./Button";
import { AnimatedUnderline } from "./AnimatedUnderline";
import { Shield, Globe2, Network, Sparkles } from "lucide-react";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadVideo(true);
          const playPromise = video.play();
          if (playPromise && typeof playPromise.catch === "function") {
            playPromise.catch(() => {});
          }
        } else {
          video.pause();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [shouldReduceMotion]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#050B14] pt-20"
    >
      {/* Background Video with Fallback */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {!shouldReduceMotion ? (
          <>
            <Image
              src="/image/home/heroimg.jpeg"
              alt=""
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/image/home/heroimg.jpeg"
              className="absolute inset-0 w-full h-full object-cover"
              aria-hidden
            >
              {shouldLoadVideo && (
                <>
                  <source src="/image/home/banner_video_720.mp4" type="video/mp4" media="(max-width: 767px)" />
                  <source src="/image/home/banner_video.mp4" type="video/mp4" media="(min-width: 768px)" />
                  <source src="/image/home/banner_video.mp4" type="video/mp4" />
                </>
              )}
            </video>
          </>
        ) : (
          <Image
            src="/image/home/heroimg.jpeg"
            alt="UK-Pakistan Tech Council"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050B14]/25 to-[#050B14]/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050B14]/55 via-transparent to-[#050B14]/45" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 w-full py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-10"
          >
            {/* Premium Badge */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(30,64,175,0.15)] border border-[#1E40AF]/30"
            >
              <Sparkles className="w-4 h-4 text-[#1E40AF]" />
              <span className="text-sm font-medium text-[#EAF2FF]/90">Bilateral Technology Council</span>
            </motion.div>

            <div className="space-y-8">
              {/* Headline with gradient text effect */}
              <motion.h1
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-[#EAF2FF] relative"
              >
                <span className="relative inline-block">
                  UK–Pakistan
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-[#1E40AF] via-[#00B140] to-[#1E40AF] bg-clip-text text-transparent opacity-0"
                    animate={{ opacity: [0, 0.3, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    UK–Pakistan
                  </motion.span>
                </span>
                <br />
                <span className="relative inline-block">
                  Tech Council
                  <AnimatedUnderline />
                </span>
              </motion.h1>

              <motion.p
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="text-xl md:text-2xl text-[#EAF2FF]/95 font-medium leading-relaxed tracking-tight"
              >
                Bridging Innovation. Uniting Talent. Empowering Futures.
              </motion.p>
              
              <motion.p
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="text-lg text-[rgba(234,242,255,0.75)] leading-relaxed max-w-xl"
              >
                A strategic platform strengthening technology, innovation, and digital trade between the United Kingdom and Pakistan.
              </motion.p>
            </div>

            {/* Enhanced CTAs */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <Button href="/about" variant="primary" size="lg" showArrow>
                Explore the Council
              </Button>
              <Button
                href="https://portal.example.com"
                variant="glass"
                size="lg"
                showArrow
              >
                Access Portal
              </Button>
            </motion.div>

            {/* Premium Trust Chips */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              {[
                { 
                  icon: Globe2, 
                  text: "UK and Pakistan", 
                  color: "border-[#1E40AF]/40 bg-[#1E40AF]/15",
                  iconColor: "text-[#1E40AF]",
                  glow: "shadow-[0_0_20px_rgba(30,64,175,0.2)]"
                },
                { 
                  icon: Shield, 
                  text: "Ethical Governance", 
                  color: "border-[#00B140]/50 bg-[#00B140]/20",
                  iconColor: "text-[#00B140]",
                  glow: "shadow-[0_0_20px_rgba(0,177,64,0.2)]"
                },
                { 
                  icon: Network, 
                  text: "Cross-border Innovation", 
                  color: "border-[#E11D48]/50 bg-[#E11D48]/20",
                  iconColor: "text-[#E11D48]",
                  glow: "shadow-[0_0_20px_rgba(225,29,72,0.2)]"
                },
              ].map((chip, index) => {
                const Icon = chip.icon;
                return (
                  <motion.div
                    key={index}
                    initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.9 + index * 0.15,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`group relative flex items-center gap-3 px-5 py-3 rounded-xl border ${chip.color} hover:${chip.glow} transition-all duration-300 cursor-pointer`}
                  >
                    <div className={`relative ${chip.iconColor}`}>
                      <Icon className="w-5 h-5 relative z-10" />
                      <motion.div
                        className={`absolute inset-0 ${chip.iconColor} opacity-0 group-hover:opacity-30 blur-md`}
                        animate={shouldReduceMotion ? {} : {
                          scale: [1, 1.3, 1],
                        }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      />
                    </div>
                    <span className="text-sm text-[#EAF2FF]/95 font-semibold">{chip.text}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Hero Visual */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-[28px] border border-white/15 bg-[#0B1220]/60 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.35)]">
              <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-[#1E40AF]/20 via-transparent to-[#00B140]/10" />
              <div className="relative h-[520px] rounded-2xl border border-white/10 bg-[#050B14]/60">
                <TechCouncilVisual shouldReduceMotion={shouldReduceMotion} />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050B14]/35" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Tech Council Network Visual (no stats)
function TechCouncilVisual({ shouldReduceMotion }: { shouldReduceMotion: boolean | null }) {
  const nodes = [
    { x: 80, y: 80 },
    { x: 200, y: 60 },
    { x: 320, y: 100 },
    { x: 120, y: 200 },
    { x: 260, y: 200 },
    { x: 420, y: 170 },
    { x: 160, y: 320 },
    { x: 320, y: 320 },
    { x: 460, y: 300 },
  ];

  const links = [
    [0, 1],
    [1, 2],
    [0, 3],
    [1, 3],
    [1, 4],
    [2, 5],
    [3, 4],
    [4, 5],
    [3, 6],
    [4, 7],
    [5, 8],
    [6, 7],
    [7, 8],
  ];

  const pulses = [
    { from: 0, to: 4, color: "#1E40AF" },
    { from: 3, to: 7, color: "#00B140" },
    { from: 2, to: 6, color: "#E11D48" },
  ];

  return (
    <motion.svg
      className="w-full h-full"
      viewBox="0 0 520 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="519" height="379" rx="20" stroke="rgba(234,242,255,0.08)" />

      {links.map(([from, to], index) => (
        <motion.line
          key={`${from}-${to}`}
          x1={nodes[from].x}
          y1={nodes[from].y}
          x2={nodes[to].x}
          y2={nodes[to].y}
          stroke="rgba(125,154,255,0.35)"
          strokeWidth="2"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          initial={shouldReduceMotion ? { opacity: 0.6 } : { opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 0.8, delay: index * 0.05, ease: "easeOut" }}
        />
      ))}

      {nodes.map((node, index) => (
        <g key={`node-${index}`}>
          {!shouldReduceMotion && (
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="10"
              fill="none"
              stroke="rgba(30,64,175,0.35)"
              strokeWidth="1.5"
              animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
              transition={{ duration: 4.5, repeat: Infinity, delay: index * 0.4, ease: "easeInOut" }}
            />
          )}
          <circle cx={node.x} cy={node.y} r="5" fill="#EAF2FF" />
          <circle cx={node.x} cy={node.y} r="3" fill="#1E40AF" />
        </g>
      ))}

      {!shouldReduceMotion &&
        pulses.map((pulse, index) => (
          <motion.circle
            key={`pulse-${index}`}
            r="4"
            fill={pulse.color}
            animate={{
              cx: [nodes[pulse.from].x, nodes[pulse.to].x],
              cy: [nodes[pulse.from].y, nodes[pulse.to].y],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3.5 + index,
              repeat: Infinity,
              ease: "linear",
              delay: index * 0.8,
            }}
          />
        ))}
    </motion.svg>
  );
}
