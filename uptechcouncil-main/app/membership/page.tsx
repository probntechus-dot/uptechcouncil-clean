import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Become a Member | UPTECH",
  description: "Join a trusted network shaping the future of UK–Pakistan technology collaboration.",
};

export default function MembershipPage() {
  return (
    <div className="pt-20">
      <Section>
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">Become a Member</h1>
          <p className="text-lg text-muted-text mb-12">
            Join a trusted network shaping the future of UK–Pakistan technology collaboration.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card>
              <h3 className="font-heading font-semibold text-xl mb-3">Membership Benefits</h3>
              <ul className="space-y-2 text-muted-text">
                <li>• Access to exclusive events and networking</li>
                <li>• Member portal access</li>
                <li>• Collaboration opportunities</li>
                <li>• Industry insights and resources</li>
              </ul>
            </Card>
            <Card>
              <h3 className="font-heading font-semibold text-xl mb-3">Membership Types</h3>
              <ul className="space-y-2 text-muted-text">
                <li>• Individual Professional</li>
                <li>• Startup/Company</li>
                <li>• Enterprise</li>
                <li>• Academic Institution</li>
              </ul>
            </Card>
          </div>
          <div className="text-center">
            <Button href="https://portal.example.com" variant="primary" showArrow>
              Apply for Membership
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}



