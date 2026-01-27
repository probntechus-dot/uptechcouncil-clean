"use client";

import { useState, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Brain, Globe, GraduationCap, Award, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const initiatives = [
  {
    icon: Brain,
    title: "People AI Platform",
    description: "Human-centric AI support systems integrating technology with professional services.",
    href: "/initiatives/people-ai",
    image: "/image/Initiatives/people-ai-platform.png",
    fallbackGradient: "from-[#1E40AF]/25 to-[#00B140]/25",
    iconColor: "#1E40AF",
    brandColor: "#1E40AF", // Blue
    accentColor: "#00B140", // Green
  },
  {
    icon: Globe,
    title: "TechMart Global",
    description: "A cross-border marketplace connecting IT vendors, buyers, and resellers.",
    href: "/initiatives/techmart-global",
    image: "/image/Initiatives/techmart-global.png",
    fallbackGradient: "from-[#00B140]/25 to-[#E11D48]/25",
    iconColor: "#00B140",
    brandColor: "#00B140", // Green
    accentColor: "#E11D48", // Red
  },
  {
    icon: GraduationCap,
    title: "AI and Tech Programs",
    description: "Training, certifications, incubation, and collective startup models.",
    href: "/initiatives/ai-tech-programs",
    image: "/image/Initiatives/ai-tech-programs.png",
    fallbackGradient: "from-[#1E40AF]/25 to-[#00B140]/25",
    iconColor: "#1E40AF",
    brandColor: "#1E40AF", // Blue
    accentColor: "#00B140", // Green
  },
  {
    icon: Award,
    title: "UK–Pakistan Tech Excellence Awards",
    description: "Celebrating innovation, partnership, and digital leadership.",
    href: "/initiatives/tech-excellence-awards",
    image: "/image/Initiatives/uk-pakistan-tech-excellence-awards.png",
    fallbackGradient: "from-[#E11D48]/25 to-[#1E40AF]/25",
    iconColor: "#E11D48",
    brandColor: "#E11D48", // Red
    accentColor: "#1E40AF", // Blue
  },
];

function InitiativeCard({ initiative, index, isInView }: { initiative: typeof initiatives[0]; index: number; isInView: boolean }) {
  const [imageError, setImageError] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { damping: 25, stiffness: 200 };
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [-5, 5]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [5, -5]), springConfig);

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

  const Icon = initiative.icon;
  const rgbColor = initiative.brandColor === "#1E40AF" ? "30,64,175" : initiative.brandColor === "#00B140" ? "0,177,64" : "225,29,72";
  const accentRgb = initiative.accentColor === "#1E40AF" ? "30,64,175" : initiative.accentColor === "#00B140" ? "0,177,64" : "225,29,72";

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -12, scale: 1.02 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative"
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Premium card container */}
      <div className="relative h-full bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
        {/* Animated gradient border glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          animate={{
            background: [
              `linear-gradient(135deg, rgba(${rgbColor},0.3), rgba(${accentRgb},0.3), rgba(${rgbColor},0.3))`,
              `linear-gradient(135deg, rgba(${accentRgb},0.3), rgba(${rgbColor},0.3), rgba(${accentRgb},0.3))`,
              `linear-gradient(135deg, rgba(${rgbColor},0.3), rgba(${accentRgb},0.3), rgba(${rgbColor},0.3))`,
            ],
          }}
          transition={{
            duration: 3,
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
          <div className="w-full h-full rounded-2xl bg-white" />
        </motion.div>

        {/* 3D tilt effect */}
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          className="relative"
        >
          {/* Image container with premium effects */}
          <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
            {!imageError && (
              <motion.div
                className="absolute inset-0"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src={initiative.image}
                  alt={initiative.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  onError={() => setImageError(true)}
                />
              </motion.div>
            )}

            {/* Gradient overlay with brand colors */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${initiative.fallbackGradient} ${
                imageError ? "opacity-100" : "opacity-0 group-hover:opacity-40"
              } transition-opacity duration-500`}
            />

            {/* Animated shine sweep */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100"
              initial={{ x: "-100%" }}
              whileHover={{ x: "200%" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <div className="w-32 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
            </motion.div>

            {/* Icon fallback */}
            {imageError && (
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Icon className="w-20 h-20" style={{ color: initiative.iconColor, opacity: 0.8 }} />
                </motion.div>
              </div>
            )}

            {/* Premium overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

            {/* Brand color accent bars */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:from-[rgba(30,64,175,0.6)] group-hover:via-[rgba(0,177,64,0.6)] group-hover:to-[rgba(225,29,72,0.6)] transition-all duration-500" />
          </div>

          {/* Content section */}
          <div className="p-6 relative">
            {/* Icon badge */}
            <motion.div
              className={`relative inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${
                initiative.brandColor === "#1E40AF"
                  ? "bg-gradient-to-br from-[#1E40AF]/10 to-[#1E40AF]/5 border border-[#1E40AF]/20"
                  : initiative.brandColor === "#00B140"
                  ? "bg-gradient-to-br from-[#00B140]/10 to-[#00B140]/5 border border-[#00B140]/20"
                  : "bg-gradient-to-br from-[#E11D48]/10 to-[#E11D48]/5 border border-[#E11D48]/20"
              } group-hover:scale-110 transition-transform duration-500`}
              whileHover={{ rotate: 5 }}
            >
              <Icon className={`w-6 h-6`} style={{ color: initiative.iconColor }} />
              
              {/* Icon glow */}
              <motion.div
                className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500`}
                style={{
                  backgroundColor: initiative.brandColor,
                  opacity: 0.3,
                }}
              />
            </motion.div>

            {/* Title */}
            <motion.h3
              className="font-heading font-semibold text-xl mb-3 text-[#0B1220] group-hover:text-[#1E40AF] transition-colors duration-300"
              whileHover={{ x: 4 }}
            >
              {initiative.title}
            </motion.h3>

            {/* Description */}
            <p className="text-[rgba(11,18,32,0.68)] mb-6 leading-relaxed">
              {initiative.description}
            </p>

            {/* Premium CTA button */}
            <Link href={initiative.href}>
              <motion.div
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#1E40AF] group-hover:text-[#1E3A8A] transition-colors duration-300"
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Learn more</span>
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </motion.div>
            </Link>
          </div>

          {/* Decorative corner accent */}
          <motion.div
            className={`absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
              initiative.brandColor === "#1E40AF"
                ? "bg-gradient-to-br from-[#1E40AF]/10 to-transparent"
                : initiative.brandColor === "#00B140"
                ? "bg-gradient-to-br from-[#00B140]/10 to-transparent"
                : "bg-gradient-to-br from-[#E11D48]/10 to-transparent"
            } rounded-bl-full`}
            initial={{ scale: 0 }}
            whileHover={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Outer glow effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
          style={{
            boxShadow: `0 0 40px rgba(${rgbColor},0.3), 0 0 80px rgba(${rgbColor},0.15)`,
          }}
        />
      </div>
    </motion.div>
  );
}

export function InitiativeGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {initiatives.map((initiative, index) => (
        <InitiativeCard
          key={index}
          initiative={initiative}
          index={index}
          isInView={isInView}
        />
      ))}
    </div>
  );
}
