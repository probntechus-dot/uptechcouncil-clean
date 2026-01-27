import { Section } from "@/components/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | UPTECH",
  description: "UPTECH's privacy policy and data protection practices.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-20">
      <Section>
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-text">
              TBD - Privacy policy content will be available soon.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}



