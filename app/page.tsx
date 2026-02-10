"use client";

import dynamic from "next/dynamic";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";
import { StatCard } from "@/components/StatCard";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Hero } from "@/components/Hero";
import { Globe2, TrendingUp, Award, Shield, Network, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

// Dynamically import heavy below-fold components for code splitting
const PillarGrid = dynamic(() => import("@/components/PillarGrid").then(m => ({ default: m.PillarGrid })));
const InitiativeGrid = dynamic(() => import("@/components/InitiativeGrid").then(m => ({ default: m.InitiativeGrid })));
const AudienceGrid = dynamic(() => import("@/components/AudienceGrid").then(m => ({ default: m.AudienceGrid })));
const EventPreview = dynamic(() => import("@/components/EventPreview").then(m => ({ default: m.EventPreview })));
const TrustCards = dynamic(() => import("@/components/TrustCards").then(m => ({ default: m.TrustCards })));
const SponsorMarquee = dynamic(() => import("@/components/SponsorMarquee").then(m => ({ default: m.SponsorMarquee })));
const EventGallery = dynamic(() => import("@/components/EventGallery").then(m => ({ default: m.EventGallery })));
const GovernanceBadges = dynamic(() => import("@/components/GovernanceBadges").then(m => ({ default: m.GovernanceBadges })));
const JoinUPTECHBackground = dynamic(() => import("@/components/JoinUPTECHBackground").then(m => ({ default: m.JoinUPTECHBackground })));
const ImpactStats = dynamic(() => import("@/components/ImpactStats").then(m => ({ default: m.ImpactStats })));

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <Hero />

      {/* Sponsor Marquee */}
      <section className="relative bg-[#050B14] overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#1E40AF]/20 to-transparent" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#050B14] via-[#050B14]/70 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#050B14] via-[#050B14]/70 to-transparent pointer-events-none" />
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#1E40AF]/40" />
            <h3 className="text-center text-[rgba(234,242,255,0.5)] text-xs font-semibold uppercase tracking-[0.25em]">
              Trusted by Leading Organizations
            </h3>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#1E40AF]/40" />
          </div>
          <SponsorMarquee />
        </div>
      </section>

      {/* Impact Momentum */}
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[520px] h-[520px] bg-gradient-to-br from-[#1E40AF]/8 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[520px] h-[520px] bg-gradient-to-tr from-[#00B140]/8 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10">
          <AnimatedSection>
            <div className="max-w-6xl mx-auto text-center">
              <SectionHeader
                title="Impact Momentum"
                subtitle="A modern technology council engineered to scale collaboration, talent, and investment across the UK–Pakistan corridor."
                align="center"
              />
              <div className="mt-12">
                <ImpactStats />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* Council Snapshot */}
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
        <div className="absolute top-0 left-1/4 w-[520px] h-[520px] bg-gradient-to-br from-[#1E40AF]/6 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[520px] h-[520px] bg-gradient-to-tr from-[#00B140]/6 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10">
          <AnimatedSection>
            <div className="max-w-6xl mx-auto text-center">
              <SectionHeader
                title="Council Snapshot"
                subtitle="A leadership-grade platform built for governance, innovation collaboration, and cross-border market access."
                align="center"
              />
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <StatCard
                  icon={<Shield className="w-10 h-10 text-[#1E40AF]" />}
                  title="Governance by Design"
                  description="Structured oversight, ethics, and accountability embedded into every initiative."
                  index={0}
                />
                <StatCard
                  icon={<Network className="w-10 h-10 text-[#00B140]" />}
                  title="Bilateral Innovation Network"
                  description="Joint R&D, investment, and partnerships across the UK and Pakistan."
                  index={1}
                />
                <StatCard
                  icon={<Cpu className="w-10 h-10 text-[#E11D48]" />}
                  title="Tech-Led Growth"
                  description="AI, digital trade, and transformation programs advancing industry leadership."
                  index={2}
                />
              </div>
              <div className="mt-12">
                <GovernanceBadges />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* Authority and Trust */}
      <Section className="relative overflow-hidden">
        {/* Premium background effects */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.015] pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#E11D48]/5 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#1E40AF]/5 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-[#00B140]/3 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            <AnimatedSection>
              <div>
                <SectionHeader
                  title="Authority and Trust"
                  align="left"
                />
                <p className="text-lg text-[rgba(11,18,32,0.68)] leading-relaxed mb-6">
                  The UK–Pakistan Technology Council (UPTECH) is a bilateral initiative connecting governments, enterprises, investors, startups, and academia to drive technology-led growth.
                </p>
                <p className="text-[rgba(11,18,32,0.68)] leading-relaxed">
                  Built by professionals, entrepreneurs, and technology leaders committed to ethical governance and long-term impact across both nations.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <TrustCards />
            </AnimatedSection>
          </div>
        </div>
      </Section>

      {/* What We Do */}
      <Section variant="dark">
        <AnimatedSection>
          <SectionHeader
            title="What We Do"
            subtitle="Five strategic pillars that power the UK–Pakistan technology corridor."
            align="center"
          />
          <PillarGrid />
        </AnimatedSection>
      </Section>

      {/* Flagship Initiatives */}
      <Section className="relative overflow-hidden">
        {/* Premium background effects with brand colors */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-[#1E40AF]/8 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#00B140]/8 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#E11D48]/8 via-transparent to-transparent rounded-full blur-3xl pointer-events-none -translate-x-1/2" />
        
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-[#1E40AF]/5 to-transparent rounded-full blur-3xl pointer-events-none"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-tr from-[#00B140]/5 to-transparent rounded-full blur-3xl pointer-events-none"
          animate={{
            scale: [1, 1.15, 1],
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-[#E11D48]/5 to-transparent rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        <div className="relative z-10">
          <AnimatedSection>
            <SectionHeader
              title="Flagship Initiatives"
              subtitle="Leading programs driving innovation and collaboration between the UK and Pakistan."
              align="left"
            />
            <InitiativeGrid />
          </AnimatedSection>
        </div>
      </Section>

      {/* Who It's For */}
      <Section variant="dark" className="relative overflow-hidden">
        {/* Premium background effects with brand colors */}
        <div className="absolute inset-0 bg-tech-texture opacity-30 pointer-events-none" />
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-[#1E40AF]/10 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#00B140]/10 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#E11D48]/10 via-transparent to-transparent rounded-full blur-3xl pointer-events-none -translate-x-1/2" />
        
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-[#1E40AF]/8 to-transparent rounded-full blur-3xl pointer-events-none"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 40, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tr from-[#00B140]/8 to-transparent rounded-full blur-3xl pointer-events-none"
          animate={{
            scale: [1, 1.25, 1],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-gradient-to-r from-[#E11D48]/8 to-transparent rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
        
        <div className="relative z-10">
          <AnimatedSection>
            <SectionHeader
              title="Who It's For"
              subtitle="UPTECH serves diverse stakeholders across the technology ecosystem."
              align="center"
            />
            <AudienceGrid />
          </AnimatedSection>
        </div>
      </Section>

      {/* Why UK–Pakistan */}
      <Section className="relative overflow-hidden">
        {/* Subtle background treatment */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1E40AF]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00B140]/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10">
          <AnimatedSection>
            <div className="max-w-5xl mx-auto">
              <SectionHeader
                title="Why UK–Pakistan"
                subtitle="The UK and Pakistan share a growing technology corridor driven by talent, innovation, and digital trade. UPTECH serves as a trusted bridge for collaboration and growth."
                align="center"
              />
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <StatCard
                  icon={<Globe2 className="w-10 h-10 text-[#1E40AF]" />}
                  title="Strong Diaspora"
                  description="Strong Pakistani tech diaspora in the UK"
                  index={0}
                />
                <StatCard
                  icon={<TrendingUp className="w-10 h-10 text-[#00B140]" />}
                  title="Rapid Growth"
                  description="Rapid growth of Pakistan's IT exports"
                  index={1}
                />
                <StatCard
                  icon={<Award className="w-10 h-10 text-[#E11D48]" />}
                  title="UK Leadership"
                  description="UK leadership in AI and enterprise technology"
                  index={2}
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* Leadership and Governance Preview */}
      <Section variant="dark" className="relative overflow-hidden">
        {/* Premium background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/image/governance/governance-bg.jpg')",
          }}
        />
        
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/55" />
        
        {/* Subtle radial gradient vignette */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/30" 
          style={{
            background: "radial-gradient(circle at center, transparent 0%, transparent 40%, rgba(0,0,0,0.3) 100%)",
          }}
        />
        
        {/* Slow moving glow animation */}
        <div className="absolute inset-0 opacity-30 pointer-events-none glow-animation-container">
          <div 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1E40AF]/20 rounded-full blur-3xl"
            style={{
              animation: "glow-move 20s ease-in-out infinite",
            }}
          />
          <div 
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00B140]/20 rounded-full blur-3xl"
            style={{
              animation: "glow-move 25s ease-in-out infinite reverse",
            }}
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          <AnimatedSection>
            <div className="max-w-5xl mx-auto text-center">
              <SectionHeader
                title="Leadership and Governance"
                subtitle="UPTECH operates under a defined governance structure ensuring transparency, ethics, and accountability."
                align="center"
              />
              <div className="mb-10">
                <GovernanceBadges />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block"
              >
                <div className="[&_a]:rounded-full [&_a]:shadow-xl [&_a:hover]:shadow-2xl [&_a:hover]:-translate-y-1">
                  <Button 
                    href="/leadership" 
                    variant="primary" 
                    size="lg" 
                    showArrow
                  >
                    View Leadership and Governance
                  </Button>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      {/* Events and Activity Preview */}
      <Section>
        <AnimatedSection>
          <SectionHeader
            title="Events and Activity"
            subtitle="Stay updated with UPTECH events, news, and activities across both nations."
            align="left"
          />
          <EventPreview />
          <div className="mt-12 text-center">
            <Button href="/events" variant="primary" size="lg" showArrow>
              View All Events
            </Button>
          </div>
          <div className="mt-20 pt-16 border-t border-[rgba(11,18,32,0.06)]">
            <SectionHeader
              title="Event Gallery"
              subtitle="Highlights from recent UK–Pakistan engagements."
              align="left"
            />
            <EventGallery />
          </div>
        </AnimatedSection>
      </Section>

      {/* Membership Invitation */}
      <Section variant="dark" className="relative overflow-hidden">
        <JoinUPTECHBackground />
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <SectionHeader
              title="Join UPTECH"
              subtitle="Join a trusted network shaping the future of UK–Pakistan technology collaboration."
              align="center"
            />
            <Button href="/membership" variant="primary" size="lg" showArrow>
              Become a Member
            </Button>
          </div>
        </AnimatedSection>
      </Section>

      {/* Portal Access Strip */}
      <Section>
        <AnimatedSection>
          <div className="max-w-5xl mx-auto">
            <div className="relative group overflow-hidden rounded-2xl">
              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#1E40AF] via-[#00B140] to-[#E11D48] p-[1px]">
                <div className="w-full h-full rounded-2xl bg-white" />
              </div>

              {/* Main content */}
              <div className="relative bg-white rounded-2xl p-10 md:p-14 transition-all duration-500">
                {/* Top gradient accent */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#1E40AF] via-[#00B140] to-[#E11D48]" />

                <div className="relative z-10 text-center">
                  <SectionHeader
                    title="Member and Partner Portal"
                    subtitle="Access programs, applications, events, and professional networks — all in one place."
                    align="center"
                  />
                  <div className="mt-8">
                    <Button href={siteConfig.portalUrl} variant="primary" size="lg" showArrow>
                      Access Portal
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Section>
    </div>
  );
}