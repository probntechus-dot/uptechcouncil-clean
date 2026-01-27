"use client";

import { Target, Globe2, Users, Shield } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const trustItems = [
  {
    icon: Target,
    title: "AI, FinTech, Cloud, Cybersecurity",
    description: "Focused on cutting-edge technology sectors",
    color: "#1E40AF", // Blue
  },
  {
    icon: Globe2,
    title: "UK and Pakistan",
    description: "Active across both nations",
    color: "#00B140", // Green
  },
  {
    icon: Users,
    title: "Built by Leaders",
    description: "Professionals, entrepreneurs, and technology leaders",
    color: "#E11D48", // Red
  },
  {
    icon: Shield,
    title: "Ethical Governance",
    description: "Committed to transparency and long-term impact",
    color: "#1E40AF", // Blue
  },
];

export function TrustCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  return (
    <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {trustItems.map((item, index) => {
        const Icon = item.icon;
        const isRed = item.color === "#E11D48";
        
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative"
          >
            <div className="relative h-full bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
              {/* Premium gradient background on hover */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: isRed
                    ? "linear-gradient(135deg, rgba(225,29,72,0.05) 0%, rgba(225,29,72,0.02) 100%)"
                    : `linear-gradient(135deg, rgba(${item.color === "#1E40AF" ? "30,64,175" : "0,177,64"},0.05) 0%, rgba(${item.color === "#1E40AF" ? "30,64,175" : "0,177,64"},0.02) 100%)`,
                }}
              />
              
              {/* Animated border glow on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  boxShadow: isRed
                    ? "0 0 0 1px rgba(225,29,72,0.2), 0 8px 32px rgba(225,29,72,0.15)"
                    : `0 0 0 1px rgba(${item.color === "#1E40AF" ? "30,64,175" : "0,177,64"},0.2), 0 8px 32px rgba(${item.color === "#1E40AF" ? "30,64,175" : "0,177,64"},0.15)`,
                }}
              />
              
              {/* Subtle shine effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                initial={{ x: "-100%" }}
                whileHover={{ x: "200%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <div className="w-32 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
              </motion.div>
              
              {/* Icon container with premium styling */}
              <motion.div
                className={`relative w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${
                  isRed
                    ? "bg-gradient-to-br from-[#E11D48]/10 to-[#E11D48]/5 border border-[#E11D48]/20"
                    : item.color === "#1E40AF"
                    ? "bg-gradient-to-br from-[#1E40AF]/10 to-[#1E40AF]/5 border border-[#1E40AF]/20"
                    : "bg-gradient-to-br from-[#00B140]/10 to-[#00B140]/5 border border-[#00B140]/20"
                } group-hover:scale-110 transition-transform duration-500`}
              >
                <Icon
                  className={`w-6 h-6 ${
                    isRed
                      ? "text-[#E11D48]"
                      : item.color === "#1E40AF"
                      ? "text-[#1E40AF]"
                      : "text-[#00B140]"
                  }`}
                />
                
                {/* Icon glow effect */}
                <motion.div
                  className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 ${
                    isRed
                      ? "bg-[#E11D48]"
                      : item.color === "#1E40AF"
                      ? "bg-[#1E40AF]"
                      : "bg-[#00B140]"
                  }`}
                  style={{ opacity: 0.3 }}
                />
              </motion.div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="font-heading font-semibold text-lg mb-2 text-[#0B1220] group-hover:text-[#0B1220] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-[rgba(11,18,32,0.68)] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
              
              {/* Decorative corner accent */}
              <div
                className={`absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  isRed
                    ? "bg-gradient-to-br from-[#E11D48]/5 to-transparent"
                    : item.color === "#1E40AF"
                    ? "bg-gradient-to-br from-[#1E40AF]/5 to-transparent"
                    : "bg-gradient-to-br from-[#00B140]/5 to-transparent"
                } rounded-bl-full`}
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
