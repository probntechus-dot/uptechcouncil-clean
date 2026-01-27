import { Section } from "@/components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | UPTECH",
  description: "UPTECH's terms of service and usage guidelines.",
};

export default function TermsPage() {
  return (
    <div className="pt-20">
      <Section>
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">Terms of Service</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-text">
              TBD - Terms of service content will be available soon.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}



