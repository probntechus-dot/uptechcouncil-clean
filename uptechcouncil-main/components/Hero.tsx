"use client";

import { motion, useReducedMotion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { Button } from "./Button";
import { Shield, Globe2, Network, Sparkles } from "lucide-react";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#050B14] pt-20">
      {/* Enhanced Background Animation Layer */}
      <HeroBackground shouldReduceMotion={shouldReduceMotion} />

      {/* Subtle Noise Texture */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }}></div>

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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(30,64,175,0.15)] border border-[#1E40AF]/30 backdrop-blur-sm"
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
                className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-[#EAF2FF] relative"
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
                <span className="relative inline-block mt-2">
                  Tech Council
                  <motion.div
                    className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[#1E40AF] via-[#00B140] to-[#E11D48] rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                  />
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
                    className={`group relative flex items-center gap-3 px-5 py-3 rounded-xl border ${chip.color} backdrop-blur-md hover:${chip.glow} transition-all duration-300 cursor-pointer`}
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

          {/* Right Premium Tech Visualization */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-xl rounded-3xl border border-[rgba(234,242,255,0.15)] p-10 lg:p-12 overflow-hidden min-h-[550px] shadow-2xl">
              {/* Enhanced Gradient Border Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#1E40AF]/25 via-[#00B140]/15 to-[#E11D48]/15 opacity-80 blur-3xl -z-10"></div>
              
              {/* Animated corner accents */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#1E40AF]/20 to-transparent rounded-tl-3xl"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#00B140]/20 to-transparent rounded-br-3xl"></div>
              
              {/* Premium 3D Network Visualization */}
              <PremiumNetworkVisualization shouldReduceMotion={shouldReduceMotion} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Enhanced Cinematic Background
function HeroBackground({ shouldReduceMotion }: { shouldReduceMotion: boolean | null }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated Grid */}
      {!shouldReduceMotion && (
        <motion.div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(30, 64, 175, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(30, 64, 175, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "100px 100px"],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      )}

      {/* Enhanced Radial Glows */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[900px] h-[900px] bg-[#1E40AF] rounded-full opacity-[0.12] blur-[200px]"
        animate={shouldReduceMotion ? {} : {
          x: [0, 50, -40, 0],
          y: [0, -50, 40, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 right-1/3 w-[700px] h-[700px] bg-[#00B140] rounded-full opacity-[0.1] blur-[160px]"
        animate={shouldReduceMotion ? {} : {
          x: [0, -60, 50, 0],
          y: [0, 60, -40, 0],
          scale: [1, 1.25, 0.85, 1],
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/2 w-[650px] h-[650px] bg-[#E11D48] rounded-full opacity-[0.1] blur-[150px]"
        animate={shouldReduceMotion ? {} : {
          x: [0, 40, -50, 0],
          y: [0, -40, 50, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 42,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Depth Layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050B14]/60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050B14]/40 via-transparent to-[#050B14]/40 pointer-events-none" />
    </div>
  );
}

// Enhanced Premium Network Visualization
function PremiumNetworkVisualization({ shouldReduceMotion }: { shouldReduceMotion: boolean | null }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { damping: 50, stiffness: 100 };
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [5, -5]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-5, 5]), springConfig);

  useEffect(() => {
    if (shouldReduceMotion || !containerRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      mouseX.set(x);
      mouseY.set(y);
    };

    const container = containerRef.current;
    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, shouldReduceMotion]);

  const nodes = [
    { id: 1, x: 80, y: 120, color: "#1E40AF", connections: [2, 3] },
    { id: 2, x: 200, y: 100, color: "#1E40AF", connections: [1, 4, 5] },
    { id: 3, x: 120, y: 200, color: "#1E40AF", connections: [1, 4, 6] },
    { id: 4, x: 280, y: 180, color: "#1E40AF", connections: [2, 3, 7] },
    { id: 5, x: 60, y: 280, color: "#00B140", connections: [2, 6, 8] },
    { id: 6, x: 220, y: 260, color: "#00B140", connections: [3, 5, 9] },
    { id: 7, x: 320, y: 240, color: "#00B140", connections: [4, 8, 9] },
    { id: 8, x: 140, y: 320, color: "#E11D48", connections: [5, 7, 9] },
    { id: 9, x: 300, y: 300, color: "#E11D48", connections: [6, 7, 8] },
  ];

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden"
      style={{
        perspective: "1500px",
        transformStyle: "preserve-3d",
      }}
    >
      <motion.svg
        className="w-full h-full"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          transform: shouldReduceMotion
            ? undefined
            : `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E40AF" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#1E40AF" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#1E40AF" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="connectionGradientGreen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00B140" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#00B140" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#00B140" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="connectionGradientRed" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E11D48" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#E11D48" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#E11D48" stopOpacity="0.6" />
          </linearGradient>
          
          <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Connection Lines */}
        {nodes.map((node) =>
          node.connections.map((targetId) => {
            const target = nodes.find((n) => n.id === targetId);
            if (!target) return null;

            const gradientId =
              node.color === "#1E40AF"
                ? "connectionGradient"
                : node.color === "#00B140"
                ? "connectionGradientGreen"
                : "connectionGradientRed";

            return (
              <motion.line
                key={`${node.id}-${targetId}`}
                x1={node.x}
                y1={node.y}
                x2={target.x}
                y2={target.y}
                stroke={`url(#${gradientId})`}
                strokeWidth="2"
                strokeLinecap="round"
                initial={shouldReduceMotion ? { pathLength: 1, opacity: 0.5 } : { pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.5 }}
                transition={{
                  duration: 1.5,
                  delay: (node.id + targetId) * 0.06,
                  ease: "easeOut",
                }}
              />
            );
          })
        )}

        {/* Enhanced Nodes */}
        {nodes.map((node, index) => (
          <g key={node.id}>
            {/* Pulse rings */}
            {!shouldReduceMotion && (
              <>
                <motion.circle
                  cx={node.x}
                  cy={node.y}
                  r="12"
                  fill="none"
                  stroke={node.color}
                  strokeWidth="1.5"
                  strokeOpacity="0.3"
                  animate={{
                    scale: [1, 1.8, 1],
                    opacity: [0.3, 0, 0.3],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    delay: index * 0.5,
                    ease: "easeInOut",
                  }}
                />
              </>
            )}
            
            {/* Main node */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="6"
              fill={node.color}
              stroke="#EAF2FF"
              strokeWidth="1"
              filter="url(#nodeGlow)"
              initial={shouldReduceMotion ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 1.2 + index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
            
            {/* Inner core */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="3"
              fill="#EAF2FF"
              initial={shouldReduceMotion ? { scale: 1 } : { scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 0.4,
                delay: 1.5 + index * 0.12,
                ease: "easeOut",
              }}
            />
          </g>
        ))}

        {/* Data Flow Particles */}
        {!shouldReduceMotion &&
          nodes.slice(0, 6).map((node, idx) => {
            const target = nodes[node.connections[0] - 1];
            if (!target) return null;

            return (
              <motion.circle
                key={`particle-${node.id}`}
                cx={node.x}
                cy={node.y}
                r="3"
                fill={node.color}
                filter="url(#nodeGlow)"
                initial={{ opacity: 0 }}
                animate={{
                  cx: [node.x, target.x, node.x],
                  cy: [node.y, target.y, node.y],
                  opacity: [0, 1, 1, 0],
                  scale: [0.5, 1.2, 1.2, 0.5],
                }}
                transition={{
                  duration: 3 + idx * 0.3,
                  repeat: Infinity,
                  delay: idx * 0.5,
                  ease: "easeInOut",
                }}
              />
            );
          })}
      </motion.svg>
    </div>
  );
}