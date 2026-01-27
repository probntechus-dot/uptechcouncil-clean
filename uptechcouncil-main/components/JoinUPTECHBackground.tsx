"use client";

import { motion, useReducedMotion } from "framer-motion";

interface DotProps {
  color: "blue" | "green" | "red";
  size: number;
  shouldReduceMotion: boolean;
}

function GlowingDot({ color, size, shouldReduceMotion }: DotProps) {
  const colorClasses = {
    blue: {
      bg: "bg-[#1E40AF]/80",
      shadow: "shadow-[0_0_30px_rgba(30,64,175,1),0_0_60px_rgba(30,64,175,0.6),0_0_90px_rgba(30,64,175,0.3),0_0_120px_rgba(30,64,175,0.15)]",
      glow: "bg-[#1E40AF]/40",
    },
    green: {
      bg: "bg-[#00B140]/80",
      shadow: "shadow-[0_0_30px_rgba(0,177,64,1),0_0_60px_rgba(0,177,64,0.6),0_0_90px_rgba(0,177,64,0.3),0_0_120px_rgba(0,177,64,0.15)]",
      glow: "bg-[#00B140]/40",
    },
    red: {
      bg: "bg-[#E11D48]/80",
      shadow: "shadow-[0_0_30px_rgba(225,29,72,1),0_0_60px_rgba(225,29,72,0.6),0_0_90px_rgba(225,29,72,0.3),0_0_120px_rgba(225,29,72,0.15)]",
      glow: "bg-[#E11D48]/40",
    },
  };

  const colors = colorClasses[color];

  return (
    <motion.div
      className="absolute"
      style={{
        top: 0,
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
      animate={
        shouldReduceMotion
          ? { scale: 1, opacity: 0.7 }
          : {
              scale: [1, 1.15, 1],
              opacity: [0.7, 1, 0.7],
            }
      }
      transition={
        shouldReduceMotion
          ? {}
          : {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }
      }
    >
      {/* Outer glow layer - enhanced */}
      <div
        className={`absolute rounded-full ${colors.glow} blur-2xl`}
        style={{
          width: `${size * 4}px`,
          height: `${size * 4}px`,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
      {/* Main dot with enhanced shadow */}
      <div
        className={`absolute rounded-full ${colors.bg} ${colors.shadow}`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </motion.div>
  );
}

interface RingGroupProps {
  radius: number;
  duration: number;
  dots: Array<{ color: "blue" | "green" | "red"; size: number }>;
  shouldReduceMotion: boolean;
  reverse?: boolean;
  startAngle?: number;
}

function RingGroup({ radius, duration, dots, shouldReduceMotion, reverse = false, startAngle = 0 }: RingGroupProps) {
  const adjustedDuration = shouldReduceMotion ? duration * 4 : duration;
  const rotationDirection = reverse ? -360 : 360;

  return (
    <>
      {/* SVG Ring - static, visible circle */}
      <svg
        className="absolute"
        style={{
          top: "50%",
          left: "50%",
          width: `${radius * 2}px`,
          height: `${radius * 2}px`,
          transform: "translate(-50%, -50%)",
        }}
        viewBox={`0 0 ${radius * 2} ${radius * 2}`}
      >
        <circle
          cx={radius}
          cy={radius}
          r={radius - 1}
          fill="none"
          stroke="rgba(234, 242, 255, 0.25)"
          strokeWidth="1"
        />
      </svg>

      {/* Rotating container for dots */}
      <motion.div
        className="absolute"
        style={{
          top: "50%",
          left: "50%",
          width: `${radius * 2}px`,
          height: `${radius * 2}px`,
          transform: `translate(-50%, -50%) rotate(${startAngle}deg)`,
          transformOrigin: "center center",
        }}
        animate={{
          rotate: startAngle + rotationDirection,
        }}
        transition={{
          repeat: Infinity,
          duration: adjustedDuration,
          ease: "linear",
        }}
      >
        {/* Dots evenly distributed around the ring */}
        {dots.map((dot, index) => {
          // Evenly distribute dots around 360 degrees
          const angle = (index * (360 / dots.length));
          const radian = (angle * Math.PI) / 180;
          const x = radius + radius * Math.cos(radian);
          const y = radius + radius * Math.sin(radian);

          return (
            <div
              key={index}
              className="absolute"
              style={{
                left: `${x}px`,
                top: `${y}px`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <GlowingDot color={dot.color} size={dot.size} shouldReduceMotion={shouldReduceMotion} />
            </div>
          );
        })}
      </motion.div>
    </>
  );
}

export function JoinUPTECHBackground() {
  const shouldReduceMotion = useReducedMotion() ?? false;

  // Define 4 rings with different sizes, speeds, and dots
  // Each ring rotates, creating perfect circular orbits for dots
  // Some rings rotate in reverse for visual variety
  const rings = [
    {
      radius: 120,
      duration: 40, // seconds for full rotation
      reverse: false,
      startAngle: 0,
      dots: [
        { color: "blue" as const, size: 9 },
        { color: "green" as const, size: 8 },
        { color: "red" as const, size: 9 },
        { color: "blue" as const, size: 8 },
      ],
    },
    {
      radius: 200,
      duration: 60,
      reverse: true, // Reverse rotation
      startAngle: 45,
      dots: [
        { color: "red" as const, size: 10 },
        { color: "blue" as const, size: 9 },
        { color: "green" as const, size: 8 },
        { color: "red" as const, size: 9 },
        { color: "blue" as const, size: 8 },
        { color: "green" as const, size: 9 },
      ],
    },
    {
      radius: 280,
      duration: 80,
      reverse: false,
      startAngle: 90,
      dots: [
        { color: "green" as const, size: 9 },
        { color: "red" as const, size: 8 },
        { color: "blue" as const, size: 9 },
        { color: "green" as const, size: 8 },
        { color: "red" as const, size: 9 },
      ],
    },
    {
      radius: 360,
      duration: 100,
      reverse: true, // Reverse rotation
      startAngle: 135,
      dots: [
        { color: "blue" as const, size: 9 },
        { color: "red" as const, size: 10 },
        { color: "green" as const, size: 8 },
        { color: "blue" as const, size: 9 },
        { color: "red" as const, size: 8 },
        { color: "green" as const, size: 9 },
        { color: "blue" as const, size: 8 },
      ],
    },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Rings and orbiting dots */}
      {rings.map((ring, index) => (
        <RingGroup
          key={index}
          radius={ring.radius}
          duration={ring.duration}
          dots={ring.dots}
          shouldReduceMotion={shouldReduceMotion}
          reverse={ring.reverse}
          startAngle={ring.startAngle}
        />
      ))}

      {/* Soft dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20" />
    </div>
  );
}
