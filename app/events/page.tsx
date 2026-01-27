"use client";

import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PageHero } from "@/components/PageHero";
import { AnimatedUnderline } from "@/components/AnimatedUnderline";
import { motion, useReducedMotion } from "framer-motion";
import { FeaturedEvent } from "@/components/events/FeaturedEvent";
import { EventGrid } from "@/components/events/EventGrid";
import { PastEvents } from "@/components/events/PastEvents";
import { NewsUpdates } from "@/components/events/NewsUpdates";
import { EventsCTA } from "@/components/events/EventsCTA";

const featuredEvent = {
  title: "Pakistan Business Summit @ Davos 2025",
  date: "20–24 January 2025",
  location: "Davos, Switzerland",
  summary:
    "High-level sideline summit during WEF week focusing on bilateral trade and investment.",
  image: "/image/events/pakistan-business-summit-davos-2025.png",
};

const upcomingEvents = [
  {
    title: "UK–Pakistan Business Summit 2025",
    date: "21 November 2025",
    location: "The Cumberland Hotel, London, United Kingdom",
    summary:
      "Flagship bilateral business summit fostering cross-sector collaborations and policy discussions.",
    image: "/image/events/uk-pakistan-business-summit-2025.png",
  },
  {
    title: "DHA Peshawar UK Road Show 2025",
    date: "4–10 May 2025",
    location: "London, Birmingham, Manchester, Slough",
    summary:
      "Diaspora investment roadshow connecting UK-based investors with development opportunities.",
    image: "/image/events/dha-peshawar-uk-roadshow-2025.png",
  },
];

const pastEvents = [
  {
    title: "Tech Innovation Forum 2024",
    date: "15 October 2024",
    location: "London, United Kingdom",
    summary:
      "Annual technology innovation forum bringing together UK and Pakistan tech leaders.",
    image: "/image/events/pakistan-business-summit-davos-2025.png",
  },
  {
    title: "Startup Pitch Competition 2024",
    date: "22 September 2024",
    location: "Manchester, United Kingdom",
    summary:
      "Competition showcasing innovative startups from both UK and Pakistan ecosystems.",
    image: "/image/events/uk-pakistan-business-summit-2025.png",
  },
  {
    title: "Bilateral Trade Conference 2024",
    date: "10 August 2024",
    location: "Birmingham, United Kingdom",
    summary:
      "Conference focused on strengthening trade relationships between UK and Pakistan.",
    image: "/image/events/dha-peshawar-uk-roadshow-2025.png",
  },
];

const newsItems = [
  {
    title: "UPTECH Announces New Partnership Initiative",
    date: "12 January 2025",
    category: "Partnership",
    summary:
      "UPTECH launches new strategic partnership program to strengthen UK–Pakistan technology collaboration.",
  },
  {
    title: "Tech Excellence Awards 2025 Nominations Open",
    date: "5 January 2025",
    category: "Awards",
    summary:
      "Nominations are now open for the annual Tech Excellence Awards recognizing outstanding contributions.",
  },
  {
    title: "New Member Portal Launched",
    date: "20 December 2024",
    category: "Platform",
    summary:
      "Enhanced member portal with new features for networking, resources, and collaboration opportunities.",
  },
  {
    title: "Quarterly Newsletter: Q4 2024 Highlights",
    date: "15 December 2024",
    category: "News",
    summary:
      "Review of key achievements, events, and initiatives from the fourth quarter of 2024.",
  },
  {
    title: "Upcoming Webinar: AI in Cross-Border Innovation",
    date: "8 December 2024",
    category: "Webinar",
    summary:
      "Join industry experts for an insightful discussion on AI's role in UK–Pakistan technology innovation.",
  },
];

export default function EventsPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <PageHero
        title={
          <span className="relative inline-block">
            Events & Engagements
            <AnimatedUnderline />
          </span>
        }
        subtitle="Stay updated with UPTECH events, news, and activities."
      >
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap justify-center gap-3 pt-4"
        >
          {["UK–Pakistan", "Innovation", "Community"].map((chip, index) => (
            <motion.div
              key={chip}
              initial={
                shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -10 }
              }
              animate={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.9 + index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="px-4 py-1.5 rounded-full bg-[rgba(255,255,255,0.08)] backdrop-blur-sm border border-[rgba(234,242,255,0.15)] text-sm font-medium text-[rgba(234,242,255,0.9)]"
            >
              {chip}
            </motion.div>
          ))}
        </motion.div>
      </PageHero>

      {/* Featured Event Section */}
      <Section variant="dark">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(234,242,255,0.1)] to-transparent" />
        <AnimatedSection>
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              title="Featured Event"
              subtitle="Highlighting our most significant upcoming engagement"
              align="left"
            />
            <FeaturedEvent event={featuredEvent} />
          </div>
        </AnimatedSection>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(234,242,255,0.1)] to-transparent" />
      </Section>

      {/* Upcoming Events Section */}
      {upcomingEvents.length > 0 && (
        <Section>
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#1E40AF]/20 to-transparent" />
          <AnimatedSection>
            <div className="max-w-7xl mx-auto">
              <SectionHeader
                title="Upcoming Events"
                subtitle="Join us at these upcoming engagements and networking opportunities"
                align="center"
              />
              <EventGrid events={upcomingEvents} />
            </div>
          </AnimatedSection>
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#1E40AF]/20 to-transparent" />
        </Section>
      )}

      {/* Past Events Section */}
      <Section variant="dark">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(234,242,255,0.1)] to-transparent" />
        <AnimatedSection>
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              title="Past Events"
              subtitle="A look back at our recent engagements and achievements"
              align="center"
            />
            <PastEvents events={pastEvents} />
          </div>
        </AnimatedSection>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(234,242,255,0.1)] to-transparent" />
      </Section>

      {/* News & Updates Section */}
      <Section>
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#1E40AF]/20 to-transparent" />
        <AnimatedSection>
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              title="News & Updates"
              subtitle="Stay informed with the latest news, announcements, and insights from UPTECH"
              align="center"
            />
            <NewsUpdates items={newsItems} />
          </div>
        </AnimatedSection>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#1E40AF]/20 to-transparent" />
      </Section>

      {/* Call to Action Section */}
      <EventsCTA />
    </div>
  );
}
