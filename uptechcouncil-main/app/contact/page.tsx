import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | UPTECH",
  description: "Get in touch with the UK–Pakistan Tech Council.",
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <Section>
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">Contact</h1>
          <p className="text-lg text-muted-text mb-12">
            Get in touch with the UK–Pakistan Tech Council.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <h3 className="font-heading font-semibold text-xl mb-3">Email</h3>
              <p className="text-muted-text">info@uptech.example.com</p>
            </Card>
            <Card>
              <h3 className="font-heading font-semibold text-xl mb-3">Locations</h3>
              <p className="text-muted-text mb-2">London, UK</p>
              <p className="text-muted-text">Islamabad, PK</p>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  );
}



