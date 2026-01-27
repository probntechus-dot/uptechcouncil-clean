import { Card } from "./Card";
import { Code, Rocket, DollarSign, Building2, GraduationCap, Landmark } from "lucide-react";

const audiences = [
  { icon: Code, label: "IT and AI Professionals" },
  { icon: Rocket, label: "Startups and Founders" },
  { icon: DollarSign, label: "Investors and Partners" },
  { icon: Building2, label: "Enterprises and Service Providers" },
  { icon: GraduationCap, label: "Students and Researchers" },
  { icon: Landmark, label: "Government and Institutions" },
];

export function AudienceGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {audiences.map((audience, index) => {
        const Icon = audience.icon;
        return (
          <Card key={index} hover variant="dark" className="text-center">
            <div className="w-12 h-12 rounded-full bg-[#1E40AF]/20 flex items-center justify-center mx-auto mb-4">
              <Icon className="w-6 h-6 text-[#1E40AF]" />
            </div>
            <h3 className="font-heading font-semibold text-lg text-[#EAF2FF]">{audience.label}</h3>
          </Card>
        );
      })}
    </div>
  );
}