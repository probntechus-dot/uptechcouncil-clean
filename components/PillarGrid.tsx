import { Card } from "./Card";
import { Network, Users, TrendingUp, Cpu, FileText } from "lucide-react";

const pillars = [
  {
    icon: Network,
    title: "Technology and Innovation Collaboration",
    description: "Joint ventures, R&D partnerships, and cross-border innovation driving growth across both nations.",
    color: "#1E40AF",
    number: "01",
  },
  {
    icon: Users,
    title: "Talent and Professional Networks",
    description: "Connecting UK-based Pakistani tech professionals with global opportunities and partnerships.",
    color: "#00B140",
    number: "02",
  },
  {
    icon: TrendingUp,
    title: "Trade, Investment and Market Access",
    description: "Supporting exports, inward investment, and seamless market entry across the corridor.",
    color: "#E11D48",
    number: "03",
  },
  {
    icon: Cpu,
    title: "AI and Digital Transformation Programs",
    description: "AI platforms, collective startups, and digital services accelerating tech-led transformation.",
    color: "#1E40AF",
    number: "04",
  },
  {
    icon: FileText,
    title: "Policy, Research and Advocacy",
    description: "Responsible tech growth, knowledge transfer, and aligned R&D for bilateral progress.",
    color: "#00B140",
    number: "05",
  },
];

export function PillarGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {pillars.map((pillar, index) => {
        const Icon = pillar.icon;
        return (
          <Card key={index} hover variant="dark" className="h-full group">
            <div className="flex items-start justify-between mb-6">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center border"
                style={{
                  backgroundColor: `${pillar.color}20`,
                  borderColor: `${pillar.color}30`,
                }}
              >
                <Icon className="w-7 h-7" style={{ color: pillar.color }} />
              </div>
              <span className="text-[rgba(234,242,255,0.15)] font-heading font-bold text-3xl">{pillar.number}</span>
            </div>
            <h3 className="font-heading font-semibold text-xl mb-3 text-[#EAF2FF] leading-tight">{pillar.title}</h3>
            <p className="text-[rgba(234,242,255,0.6)] leading-relaxed text-[15px]">{pillar.description}</p>
          </Card>
        );
      })}
    </div>
  );
}