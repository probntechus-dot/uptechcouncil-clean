import { Card } from "./Card";
import { Target, Globe2, Users, Shield } from "lucide-react";

const trustItems = [
  {
    icon: Target,
    title: "AI, FinTech, Cloud, Cybersecurity",
    description: "Focused on cutting-edge technology sectors",
  },
  {
    icon: Globe2,
    title: "UK and Pakistan",
    description: "Active across both nations",
  },
  {
    icon: Users,
    title: "Built by Leaders",
    description: "Professionals, entrepreneurs, and technology leaders",
  },
  {
    icon: Shield,
    title: "Ethical Governance",
    description: "Committed to transparency and long-term impact",
  },
];

export function TrustCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {trustItems.map((item, index) => {
        const Icon = item.icon;
        return (
          <Card key={index} hover className="h-full">
            <div className="w-12 h-12 rounded-xl bg-[#1E40AF]/10 flex items-center justify-center mb-4">
              <Icon className="w-6 h-6 text-[#1E40AF]" />
            </div>
            <h3 className="font-heading font-semibold text-lg mb-2 text-[#0B1220]">{item.title}</h3>
            <p className="text-[rgba(11,18,32,0.68)] text-sm leading-relaxed">{item.description}</p>
          </Card>
        );
      })}
    </div>
  );
}