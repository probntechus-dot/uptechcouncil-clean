import { Section } from "@/components/Section";
import { EventPreview } from "@/components/EventPreview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events and News | UPTECH",
  description: "Stay updated with UPTECH events, news, and activities.",
};

export default function EventsPage() {
  return (
    <div className="pt-20">
      <Section>
        <div className="max-w-6xl mx-auto">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">Events and News</h1>
          <p className="text-lg text-muted-text mb-12">
            Stay updated with UPTECH events, news, and activities.
          </p>
          <EventPreview />
          <div className="mt-12 h-32 bg-gradient-to-r from-border-grey to-border-grey/50 rounded-lg flex items-center justify-center">
            <span className="text-muted-text text-sm">Image Gallery Strip Placeholder</span>
          </div>
        </div>
      </Section>
    </div>
  );
}



