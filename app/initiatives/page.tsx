import { Section } from "@/components/Section";
import { InitiativeGrid } from "@/components/InitiativeGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Initiatives | UPTECH",
  description: "Explore UPTECH's flagship initiatives including People AI, TechMart Global, and more.",
};

export default function InitiativesPage() {
  return (
    <div className="pt-20">
      <Section>
        <div className="max-w-6xl mx-auto">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">Initiatives</h1>
          <p className="text-lg text-muted-text mb-12">
            UPTECH's flagship initiatives driving innovation and collaboration between the UK and Pakistan.
          </p>
          <InitiativeGrid />
        </div>
      </Section>
    </div>
  );
}



