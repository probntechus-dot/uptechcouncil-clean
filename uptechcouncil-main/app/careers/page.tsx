import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | UPTECH",
  description: "Join the UPTECH team and help shape the future of UK–Pakistan technology collaboration.",
};

export default function CareersPage() {
  return (
    <div className="pt-20">
      <Section>
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">Careers</h1>
          <p className="text-lg text-muted-text mb-12">
            Join the UPTECH team and help shape the future of UK–Pakistan technology collaboration.
          </p>
          <div className="space-y-6">
            <Card>
              <h3 className="font-heading font-semibold text-xl mb-2">Open Positions</h3>
              <p className="text-muted-text">TBD - Open positions will be listed here.</p>
            </Card>
            <Card>
              <h3 className="font-heading font-semibold text-xl mb-2">How to Apply</h3>
              <p className="text-muted-text">TBD - Application process information will be available soon.</p>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  );
}



