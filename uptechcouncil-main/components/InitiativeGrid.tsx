"use client";

import { useState } from "react";
import { Card } from "./Card";
import { Button } from "./Button";
import { Brain, Globe, GraduationCap, Award } from "lucide-react";
import Image from "next/image";

const initiatives = [
  {
    icon: Brain,
    title: "People AI Platform",
    description: "Human-centric AI support systems integrating technology with professional services.",
    href: "/initiatives/people-ai",
    image: "/image/Initiatives/people-ai-platform.png",
    fallbackGradient: "from-[#1E40AF]/25 to-[#00B140]/25",
    iconColor: "#1E40AF",
  },
  {
    icon: Globe,
    title: "TechMart Global",
    description: "A cross-border marketplace connecting IT vendors, buyers, and resellers.",
    href: "/initiatives/techmart-global",
    image: "/image/Initiatives/techmart-global.png",
    fallbackGradient: "from-[#00B140]/25 to-[#E11D48]/25",
    iconColor: "#00B140",
  },
  {
    icon: GraduationCap,
    title: "AI and Tech Programs",
    description: "Training, certifications, incubation, and collective startup models.",
    href: "/initiatives/ai-tech-programs",
    image: "/image/Initiatives/ai-tech-programs.png",
    fallbackGradient: "from-[#1E40AF]/25 to-[#00B140]/25",
    iconColor: "#1E40AF",
  },
  {
    icon: Award,
    title: "UK–Pakistan Tech Excellence Awards",
    description: "Celebrating innovation, partnership, and digital leadership.",
    href: "/initiatives/tech-excellence-awards",
    image: "/image/Initiatives/uk-pakistan-tech-excellence-awards.png",
    fallbackGradient: "from-[#E11D48]/25 to-[#1E40AF]/25",
    iconColor: "#E11D48",
  },
];

export function InitiativeGrid() {
  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>({});

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {initiatives.map((initiative, index) => {
        const Icon = initiative.icon;
        const imageFailed = imageErrors[index];
        
        return (
          <Card key={index} hover className="overflow-hidden group">
            <div className={`aspect-video bg-gradient-to-br ${initiative.fallbackGradient} mb-6 rounded-lg relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500`}>
              {/* Background image with fallback gradient */}
              {!imageFailed && (
                <div className="absolute inset-0">
                  <Image
                    src={initiative.image}
                    alt={initiative.title}
                    fill
                    className="object-cover rounded-2xl"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    onError={() => {
                      setImageErrors(prev => ({ ...prev, [index]: true }));
                    }}
                  />
                </div>
              )}
              
              {/* Fallback gradient (shows if image fails or on hover) */}
              <div className={`absolute inset-0 bg-gradient-to-br ${initiative.fallbackGradient} ${imageFailed ? 'opacity-100' : 'opacity-0 group-hover:opacity-30'} transition-opacity duration-300`} />
              
              {/* Icon fallback (shows if image fails) */}
              {imageFailed && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon className={`w-16 h-16`} style={{ color: initiative.iconColor, opacity: 0.8 }} />
                </div>
              )}
              
              {/* Subtle overlay for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
              
              {/* Grid pattern overlay (subtle) */}
              <div className="absolute inset-0 bg-grid-pattern opacity-5" />
            </div>
            <h3 className="font-heading font-semibold text-xl mb-3 text-[#0B1220] group-hover:text-[#1E40AF] transition-colors duration-300">{initiative.title}</h3>
            <p className="text-[rgba(11,18,32,0.68)] mb-6 leading-relaxed">{initiative.description}</p>
            <Button href={initiative.href} variant="ghost" showArrow>
              Learn more
            </Button>
          </Card>
        );
      })}
    </div>
  );
}