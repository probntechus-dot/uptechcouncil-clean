"use client";

import { useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { 
  Code, 
  Rocket, 
  DollarSign, 
  Building2, 
  GraduationCap, 
  Landmark,
  Sparkles,
  Zap,
  TrendingUp
} from "lucide-react";

const audiences = [
  { 
    icon: Code, 
    label: "IT and AI Professionals",
    brandColor: "#1E40AF", // Blue
    accentColor: "#00B140", // Green
    description: "Tech experts driving innovation",
    premiumIcon: Sparkles,
  },
  { 
    icon: Rocket, 
    label: "Startups and Founders",
    brandColor: "#00B140", // Green
    accentColor: "#E11D48", // Red
    description: "Entrepreneurs building the future",
    premiumIcon: Zap,
  },
  { 
    icon: DollarSign, 
    label: "Investors and Partners",
    brandColor: "#E11D48", // Red
    accentColor: "#1E40AF", // Blue
    description: "Capital and strategic alliances",
    premiumIcon: TrendingUp,
  },
  { 
    icon: Building2, 
    label: "Enterprises and Service Providers",
    brandColor: "#1E40AF", // Blue
    accentColor: "#00B140", // Green
    description: "Leading organizations and solutions",
    premiumIcon: Building2,
  },
  { 
    icon: GraduationCap, 
    label: "Students and Researchers",
    brandColor: "#00B140", // Green
    accentColor: "#E11D48", // Red
    description: "Next generation of innovators",
    premiumIcon: GraduationCap,
  },
  { 
    icon: Landmark, 
    label: "Government and Institutions",
    brandColor: "#E11D48", // Red
    accentColor: "#1E40AF", // Blue
    description: "Policy makers and public sector",
    premiumIcon: Landmark,
  },
];

function AudienceCard({ audience, index, isInView }: { audience: typeof audiences[0]; index: number; isInView: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { damping: 30, stiffness: 200 };
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [-8, 8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [8, -8]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  const Icon = audience.icon;
  const PremiumIcon = audience.premiumIcon || audience.icon;
  const rgbColor = audience.brandColor === "#1E40AF" ? "30,64,175" : audience.brandColor === "#00B140" ? "0,177,64" : "225,29,72";
  const accentRgb = audience.accentColor === "#1E40AF" ? "30,64,175" : audience.accentColor === "#00B140" ? "0,177,64" : "225,29,72";

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.9 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -10, scale: 1.03 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative"
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Premium card container */}
      <div className="relative h-full bg-[rgba(255,255,255,0.06)] backdrop-blur-xl rounded-2xl border border-[rgba(234,242,255,0.14)] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 text-center p-8">
        {/* Animated gradient border */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          animate={{
            background: [
              `linear-gradient(135deg, rgba(${rgbColor},0.4), rgba(${accentRgb},0.4), rgba(${rgbColor},0.4))`,
              `linear-gradient(135deg, rgba(${accentRgb},0.4), rgba(${rgbColor},0.4), rgba(${accentRgb},0.4))`,
              `linear-gradient(135deg, rgba(${rgbColor},0.4), rgba(${accentRgb},0.4), rgba(${rgbColor},0.4))`,
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            padding: "2px",
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        >
          <div className="w-full h-full rounded-2xl bg-[rgba(255,255,255,0.06)] backdrop-blur-xl" />
        </motion.div>

        {/* 3D tilt effect */}
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          className="relative z-10"
        >
          {/* Premium icon container with glow */}
          <motion.div
            className={`relative w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center ${
              audience.brandColor === "#1E40AF"
                ? "bg-gradient-to-br from-[#1E40AF]/20 to-[#1E40AF]/10 border border-[#1E40AF]/30"
                : audience.brandColor === "#00B140"
                ? "bg-gradient-to-br from-[#00B140]/20 to-[#00B140]/10 border border-[#00B140]/30"
                : "bg-gradient-to-br from-[#E11D48]/20 to-[#E11D48]/10 border border-[#E11D48]/30"
            } group-hover:scale-110 transition-all duration-500`}
            whileHover={{ rotate: 5, scale: 1.1 }}
          >
            {/* Main icon */}
            <Icon 
              className={`w-10 h-10`} 
              style={{ color: audience.brandColor }}
            />
            
            {/* Premium icon overlay */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              initial={{ scale: 0, rotate: -180 }}
              whileHover={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.4 }}
            >
              <PremiumIcon 
                className={`w-8 h-8`} 
                style={{ color: audience.accentColor }}
              />
            </motion.div>
            
            {/* Icon glow effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
              style={{
                backgroundColor: audience.brandColor,
                opacity: 0.4,
              }}
            />
            
            {/* Pulsing ring */}
            <motion.div
              className={`absolute inset-0 rounded-2xl border-2 ${
                audience.brandColor === "#1E40AF"
                  ? "border-[#1E40AF]"
                  : audience.brandColor === "#00B140"
                  ? "border-[#00B140]"
                  : "border-[#E11D48]"
              } opacity-0 group-hover:opacity-100`}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
          </motion.div>

          {/* Title */}
          <motion.h3
            className="font-heading font-semibold text-xl mb-3 text-[#EAF2FF] group-hover:text-white transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
          >
            {audience.label}
          </motion.h3>

          {/* Description */}
          <motion.p
            className="text-[rgba(234,242,255,0.6)] text-sm leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: index * 0.1 + 0.3 }}
          >
            {audience.description}
          </motion.p>
        </motion.div>

        {/* Background gradient overlay */}
        <motion.div
          className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
            audience.brandColor === "#1E40AF"
              ? "bg-gradient-to-br from-[#1E40AF]/10 via-transparent to-[#00B140]/5"
              : audience.brandColor === "#00B140"
              ? "bg-gradient-to-br from-[#00B140]/10 via-transparent to-[#E11D48]/5"
              : "bg-gradient-to-br from-[#E11D48]/10 via-transparent to-[#1E40AF]/5"
          } rounded-2xl`}
        />

        {/* Decorative corner accents */}
        <motion.div
          className={`absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
            audience.brandColor === "#1E40AF"
              ? "bg-gradient-to-br from-[#1E40AF]/10 to-transparent"
              : audience.brandColor === "#00B140"
              ? "bg-gradient-to-br from-[#00B140]/10 to-transparent"
              : "bg-gradient-to-br from-[#E11D48]/10 to-transparent"
          } rounded-bl-full`}
          initial={{ scale: 0 }}
          whileHover={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className={`absolute bottom-0 left-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
            audience.accentColor === "#1E40AF"
              ? "bg-gradient-to-tr from-[#1E40AF]/10 to-transparent"
              : audience.accentColor === "#00B140"
              ? "bg-gradient-to-tr from-[#00B140]/10 to-transparent"
              : "bg-gradient-to-tr from-[#E11D48]/10 to-transparent"
          } rounded-tr-full`}
          initial={{ scale: 0 }}
          whileHover={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        />

        {/* Outer glow effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
          style={{
            boxShadow: `0 0 40px rgba(${rgbColor},0.4), 0 0 80px rgba(${rgbColor},0.2)`,
          }}
        />

        {/* Animated particles effect */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-1 h-1 rounded-full ${
                audience.brandColor === "#1E40AF"
                  ? "bg-[#1E40AF]"
                  : audience.brandColor === "#00B140"
                  ? "bg-[#00B140]"
                  : "bg-[#E11D48]"
              } opacity-0 group-hover:opacity-100`}
              style={{
                left: `${20 + i * 30}%`,
                top: `${20 + i * 25}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0, 0.6, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function AudienceGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {audiences.map((audience, index) => (
        <AudienceCard
          key={index}
          audience={audience}
          index={index}
          isInView={isInView}
        />
      ))}
    </div>
  );
}
