"use client";

import { Section } from "@/components/Section";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { AnimatedSection } from "@/components/AnimatedSection";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Building2,
  Users,
  Briefcase,
  TrendingUp,
  Search,
  HeartHandshake,
  Shield,
  CheckCircle2,
  Globe,
  ArrowRight,
  Network,
  Target,
  Zap,
  FileCheck,
  Rocket,
} from "lucide-react";

export default function TechMartGlobalClient() {
  return (
    <div className="pt-0">
      {/* Hero Section */}
      <TechMartHero />

      {/* What is TechMart Global */}
      <Section variant="dark">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(234,242,255,0.1)] to-transparent" />
        <AnimatedSection>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-[#2D5BFF]/10 border border-[#2D5BFF]/20 text-[#2D5BFF] text-xs font-semibold uppercase tracking-wider mb-4">
                  Initiative
                </div>
                <SectionHeader
                  title="What is TechMart Global"
                  subtitle="A strategic platform designed to bridge technology ecosystems and facilitate meaningful business connections."
                  align="left"
                />
                <div className="space-y-5 text-[rgba(234,242,255,0.85)] leading-relaxed text-base">
                  <p>
                    TechMart Global is a comprehensive B2B technology marketplace powered by the UK–Pakistan Tech Council. The platform serves as a{" "}
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#2D5BFF]/10 border border-[#2D5BFF]/20 text-[#2D5BFF] text-sm font-medium">
                      trusted intermediary
                    </span>
                    , enabling Pakistani technology companies to showcase their capabilities, products, and services to a global audience.
                  </p>
                  <p>
                    Through{" "}
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#00B140]/10 border border-[#00B140]/20 text-[#00B140] text-sm font-medium">
                      structured matchmaking
                    </span>
                    , transparent processes, and strategic support, TechMart Global facilitates cross-border partnerships, procurement opportunities, and long-term business relationships that drive innovation and economic growth.
                  </p>
                </div>
              </div>
              <div className="relative">
                <MarketplaceVisual />
              </div>
            </div>
          </div>
        </AnimatedSection>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(234,242,255,0.1)] to-transparent" />
      </Section>

      {/* What is TechMart Global */}
      <Section variant="dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                title="What is TechMart Global"
                subtitle="A strategic platform designed to bridge technology ecosystems and facilitate meaningful business connections."
                align="left"
              />
              <div className="space-y-5 text-[rgba(234,242,255,0.85)] leading-relaxed text-base">
                <p>
                  TechMart Global is a comprehensive B2B technology marketplace powered by the UK–Pakistan Tech Council. The platform serves as a trusted intermediary, enabling Pakistani technology companies to showcase their capabilities, products, and services to a global audience.
                </p>
                <p>
                  Through structured matchmaking, transparent processes, and strategic support, TechMart Global facilitates cross-border partnerships, procurement opportunities, and long-term business relationships that drive innovation and economic growth.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-[rgba(255,255,255,0.06)] backdrop-blur-sm rounded-2xl border border-[rgba(234,242,255,0.14)] flex items-center justify-center">
                <span className="text-[rgba(234,242,255,0.5)] text-sm">Image Placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Who TechMart Global Is For */}
      <Section>
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#2D5BFF]/20 to-transparent" />
        <AnimatedSection>
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              title="Who TechMart Global Is For"
              subtitle="Designed to serve diverse stakeholders across the technology ecosystem."
              align="center"
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <AudienceCard
                icon={Rocket}
                title="Tech Startups"
                description="Early-stage technology companies seeking market access, partnerships, and growth opportunities in international markets."
                accentColor="#2D5BFF"
                index={0}
              />
              <AudienceCard
                icon={TrendingUp}
                title="Scale-ups and SMEs"
                description="Growing technology businesses ready to expand their reach and establish strategic relationships with global buyers and partners."
                accentColor="#00B140"
                index={1}
              />
              <AudienceCard
                icon={Building2}
                title="Enterprises and Buyers"
                description="Organizations looking to discover, evaluate, and engage with qualified technology vendors and service providers."
                accentColor="#2D5BFF"
                index={2}
              />
              <AudienceCard
                icon={Briefcase}
                title="Investors and Partners"
                description="Investment firms, strategic partners, and institutions interested in connecting with high-potential technology companies."
                accentColor="#E11D48"
                index={3}
              />
            </div>
          </div>
        </AnimatedSection>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#2D5BFF]/20 to-transparent" />
      </Section>

      {/* What TechMart Global Enables */}
      <Section variant="dark">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(234,242,255,0.1)] to-transparent" />
        <AnimatedSection>
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              title="What TechMart Global Enables"
              subtitle="Key capabilities and opportunities facilitated through the platform."
              align="center"
            />
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <FeatureBlock
                icon={Network}
                title="Cross-border B2B Matchmaking"
                description="Intelligent matching algorithms and curated introductions connect Pakistani tech companies with relevant UK and international buyers based on capabilities, needs, and strategic fit."
                tag="Intelligent Matching"
                index={0}
              />
              <FeatureBlock
                icon={Search}
                title="Market Access and Discovery"
                description="Comprehensive company profiles, service catalogs, and capability showcases enable buyers to discover and evaluate technology solutions efficiently."
                tag="Market Discovery"
                index={1}
              />
              <FeatureBlock
                icon={HeartHandshake}
                title="Strategic Partnerships"
                description="Facilitation of joint ventures, technology licensing, co-development agreements, and long-term strategic alliances between companies."
                tag="Partnerships"
                index={2}
              />
              <FeatureBlock
                icon={Globe}
                title="Trade, Procurement, and Outsourcing"
                description="Direct access to procurement opportunities, outsourcing projects, and trade facilitation services that streamline cross-border transactions."
                tag="Global Trade"
                index={3}
              />
            </div>
          </div>
        </AnimatedSection>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(234,242,255,0.1)] to-transparent" />
      </Section>

      {/* UK Market Access Focus */}
      <Section>
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#2D5BFF]/20 to-transparent" />
        <AnimatedSection>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeader
                  title="UK Market Access Focus"
                  subtitle="Supporting Pakistani technology companies in entering and succeeding in the UK market."
                  align="left"
                />
                <div className="space-y-5 text-[rgba(11,18,32,0.68)] leading-relaxed text-base">
                  <p>
                    TechMart Global places particular emphasis on facilitating entry into the UK market, recognizing its strategic importance as a gateway to broader international opportunities. The platform provides structured support for companies navigating UK market requirements, compliance standards, and business practices.
                  </p>
                  <p>
                    Through partnerships with UK-based organizations, industry associations, and regulatory bodies, TechMart Global helps Pakistani tech companies understand market dynamics, establish credibility, and build relationships with UK buyers, partners, and institutions.
                  </p>
                </div>
              </div>
              <div className="relative">
                <UKMarketPathway />
              </div>
            </div>
          </div>
        </AnimatedSection>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#2D5BFF]/20 to-transparent" />
      </Section>

      {/* How TechMart Global Works */}
      <Section variant="dark">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(234,242,255,0.1)] to-transparent" />
        <AnimatedSection>
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              title="How TechMart Global Works"
              subtitle="A structured process designed to facilitate meaningful connections and successful outcomes."
              align="center"
            />
            <HowItWorksSteps />
          </div>
        </AnimatedSection>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(234,242,255,0.1)] to-transparent" />
      </Section>

      {/* Alignment With UK–Pakistan Tech Council */}
      <Section>
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#2D5BFF]/20 to-transparent" />
        <AnimatedSection>
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              title="Alignment With UK–Pakistan Tech Council"
              subtitle="TechMart Global as a strategic initiative supporting council objectives and ecosystem development."
              align="center"
            />
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="flex flex-wrap gap-3 justify-center">
                <div className="px-4 py-2 rounded-full bg-[#2D5BFF]/10 border border-[#2D5BFF]/20 text-[#2D5BFF] text-sm font-semibold flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Transparency
                </div>
                <div className="px-4 py-2 rounded-full bg-[#00B140]/10 border border-[#00B140]/20 text-[#00B140] text-sm font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  Verification
                </div>
                <div className="px-4 py-2 rounded-full bg-[#2D5BFF]/10 border border-[#2D5BFF]/20 text-[#2D5BFF] text-sm font-semibold flex items-center gap-2">
                  <FileCheck className="w-4 h-4" />
                  Fair Process
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#2D5BFF]/10 to-[#00B140]/5 border border-[#2D5BFF]/20 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#2D5BFF]/20 text-[#2D5BFF] flex items-center justify-center">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg mb-2 text-[#0B1220]">Official Initiative</h3>
                    <p className="text-[rgba(11,18,32,0.68)] leading-relaxed">
                      TechMart Global is an official initiative of the UK–Pakistan Tech Council, designed to advance the council's mission of fostering collaboration, innovation, and economic growth between the UK and Pakistan technology sectors.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-5 text-[rgba(11,18,32,0.68)] leading-relaxed text-base">
                <p>
                  The platform operates with a commitment to transparency, credibility, and ethical business practices. All participants benefit from the council's governance framework, which ensures fair processes, dispute resolution mechanisms, and ongoing support throughout the engagement lifecycle.
                </p>
                <p>
                  By aligning with the UK–Pakistan Tech Council, TechMart Global provides participants with access to a trusted ecosystem, policy insights, regulatory guidance, and strategic connections that extend beyond simple transactional matchmaking. The platform serves as a cornerstone of the council's efforts to build a sustainable, mutually beneficial technology partnership between the UK and Pakistan.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#2D5BFF]/20 to-transparent" />
      </Section>

      {/* Call to Action */}
      <Section variant="dark">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(234,242,255,0.1)] to-transparent" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#2D5BFF] via-[#00B140] to-[#2D5BFF] rounded-full opacity-[0.08] blur-[200px]" />
        </div>
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <SectionHeader
              title="Join TechMart Global"
              subtitle="Connect with the global technology marketplace and unlock new opportunities for growth and collaboration."
              align="center"
            />
            <div className="mt-10 flex flex-col items-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Button variant="primary" size="lg" className="relative">
                  Get Started
                </Button>
              </motion.div>
              <a
                href="/membership"
                className="text-[rgba(234,242,255,0.75)] hover:text-[#EAF2FF] text-sm font-medium transition-colors flex items-center gap-1"
              >
                Learn more about Membership
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </AnimatedSection>
      </Section>
    </div>
  );
}

// Hero Component
function TechMartHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-[#050B14] pt-20">
      {/* Animated Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-[#2D5BFF] rounded-full opacity-[0.12] blur-[200px]"
          animate={shouldReduceMotion ? {} : {
            x: [0, 40, -30, 0],
            y: [0, -40, 30, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-[600px] h-[600px] bg-[#00B140] rounded-full opacity-[0.06] blur-[160px]"
          animate={shouldReduceMotion ? {} : {
            x: [0, -50, 40, 0],
            y: [0, 50, -40, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/2 w-[500px] h-[500px] bg-[#E11D48] rounded-full opacity-[0.04] blur-[150px]"
          animate={shouldReduceMotion ? {} : {
            x: [0, 30, -40, 0],
            y: [0, -30, 40, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      {/* Grid Texture */}
      {!shouldReduceMotion && (
        <motion.div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(45, 91, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(45, 91, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "80px 80px"],
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      )}

      {/* Noise Overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 w-full py-24 lg:py-32">
        <AnimatedSection>
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-[#EAF2FF]">
              TechMart Global
            </h1>
            <p className="text-xl md:text-2xl text-[rgba(234,242,255,0.85)] leading-relaxed">
              A global B2B technology marketplace and collaboration platform connecting Pakistani tech companies with UK and international buyers, partners, investors, and institutions.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Button variant="primary" size="lg" className="bg-gradient-to-r from-[#2D5BFF] to-[#1E3A8A]">
                  Get Started
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Button variant="glass" size="lg">
                  Learn More
                </Button>
              </motion.div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <TrustChip label="B2B Marketplace" />
              <TrustChip label="UK–Pakistan Corridor" />
              <TrustChip label="Verified Connections" />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

// Trust Chip Component
function TrustChip({ label }: { label: string }) {
  return (
    <div className="px-4 py-2 rounded-full bg-[rgba(255,255,255,0.08)] backdrop-blur-sm border border-[rgba(234,242,255,0.15)] text-[rgba(234,242,255,0.85)] text-sm font-medium">
      {label}
    </div>
  );
}

// Marketplace Visual Component
function MarketplaceVisual() {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
      animate={shouldReduceMotion || isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative rounded-2xl bg-[rgba(255,255,255,0.06)] backdrop-blur-xl border border-[rgba(234,242,255,0.15)] p-12 overflow-hidden min-h-[400px]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#2D5BFF]/10 via-transparent to-[#00B140]/5 opacity-50" />
      <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="networkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2D5BFF" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#00B140" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#2D5BFF" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        {[...Array(8)].map((_, i) => {
          const angle = (i * 360) / 8;
          const x = 200 + 120 * Math.cos((angle * Math.PI) / 180);
          const y = 200 + 120 * Math.sin((angle * Math.PI) / 180);
          return (
            <g key={i}>
              <motion.circle
                cx={x}
                cy={y}
                r="8"
                fill="url(#networkGradient)"
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0 }}
                animate={shouldReduceMotion || isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              />
              <motion.line
                x1="200"
                y1="200"
                x2={x}
                y2={y}
                stroke="url(#networkGradient)"
                strokeWidth="1"
                initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
                animate={shouldReduceMotion || isInView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 + 0.3 }}
              />
            </g>
          );
        })}
        <motion.circle
          cx="200"
          cy="200"
          r="12"
          fill="#2D5BFF"
          initial={{ opacity: 0.6 }}
          animate={shouldReduceMotion ? { opacity: 0.6 } : { opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
      <div className="relative z-10 text-center">
        <Network className="w-16 h-16 text-[#2D5BFF] mx-auto mb-4 opacity-80" />
        <p className="text-[rgba(234,242,255,0.6)] text-sm">Global Marketplace Network</p>
      </div>
    </motion.div>
  );
}

// Audience Card Component
function AudienceCard({
  icon: Icon,
  title,
  description,
  accentColor,
  index,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  accentColor: string;
  index: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
      animate={shouldReduceMotion || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={shouldReduceMotion ? {} : { y: -4, transition: { duration: 0.3 } }}
      className="group relative bg-[#F6F8FC] rounded-xl border-2 border-[rgba(11,18,32,0.10)] p-6 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
    >
      <div
        className="absolute top-0 left-0 right-0 h-1 rounded-t-xl"
        style={{ backgroundColor: accentColor }}
      />
      <div className="relative z-10">
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
          style={{ backgroundColor: `${accentColor}15`, color: accentColor }}
        >
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="font-heading font-bold text-lg mb-3 text-[#0B1220]">{title}</h3>
        <p className="text-sm text-[rgba(11,18,32,0.68)] leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

// Feature Block Component
function FeatureBlock({
  icon: Icon,
  title,
  description,
  tag,
  index,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  tag: string;
  index: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
      animate={shouldReduceMotion || isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={shouldReduceMotion ? {} : { y: -4, borderColor: "rgba(234,242,255,0.3)", transition: { duration: 0.3 } }}
      className="group relative bg-[rgba(255,255,255,0.06)] backdrop-blur-sm rounded-xl border border-[rgba(234,242,255,0.14)] p-6 hover:bg-[rgba(255,255,255,0.1)] transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#2D5BFF]/20 text-[#2D5BFF] flex items-center justify-center">
          <Icon className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-heading font-bold text-lg text-[#EAF2FF]">{title}</h3>
            <span className="px-2 py-0.5 rounded-md bg-[#2D5BFF]/10 border border-[#2D5BFF]/20 text-[#2D5BFF] text-xs font-medium">
              {tag}
            </span>
          </div>
          <p className="text-sm text-[rgba(234,242,255,0.75)] leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

// UK Market Pathway Component
function UKMarketPathway() {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const steps = [
    { label: "Market Entry", icon: Target },
    { label: "Compliance", icon: Shield },
    { label: "Partnership", icon: HeartHandshake },
  ];

  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
      animate={shouldReduceMotion || isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative bg-gradient-to-br from-[#F6F8FC] to-white rounded-2xl border-2 border-[rgba(11,18,32,0.10)] p-8 shadow-lg"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#E11D48]/10 to-transparent rounded-tr-2xl" />
      <h3 className="font-heading font-bold text-lg mb-6 text-[#0B1220]">UK Entry Pathway</h3>
      <div className="space-y-6">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={index}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -20 }}
              animate={shouldReduceMotion || isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex items-center gap-4"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#2D5BFF]/10 text-[#2D5BFF] flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </div>
              <div className="text-sm font-semibold text-[#0B1220]">{step.label}</div>
            </motion.div>
          );
        })}
      </div>
      <div className="mt-6 pt-6 border-t border-[rgba(11,18,32,0.10)]">
        <p className="text-xs text-[rgba(11,18,32,0.5)] italic">Structured support for UK market requirements</p>
      </div>
    </motion.div>
  );
}

// How It Works Steps Component
function HowItWorksSteps() {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const steps = [
    { number: 1, title: "Discover", description: "Browse company profiles, service catalogs, and capability showcases to identify potential partners, vendors, or buyers that match your needs.", icon: Search },
    { number: 2, title: "Connect", description: "Initiate contact through the platform's communication tools, request introductions, or respond to opportunities posted by other members.", icon: Network },
    { number: 3, title: "Validate", description: "Engage in due diligence, capability assessments, and preliminary discussions to ensure alignment and mutual fit before proceeding.", icon: FileCheck },
    { number: 4, title: "Scale", description: "Execute agreements, launch partnerships, and leverage platform resources to scale relationships and achieve long-term business objectives.", icon: Rocket },
  ];

  return (
    <div ref={containerRef} className="relative mt-12">
      {/* Connecting Line (Desktop Only) */}
      <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 -translate-y-1/2 z-0">
        <motion.div
          className="h-full bg-gradient-to-r from-[#2D5BFF] via-[#00B140] to-[#2D5BFF] opacity-20"
          initial={shouldReduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
          animate={shouldReduceMotion || isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "left" }}
        />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={index}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
              animate={shouldReduceMotion || isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={shouldReduceMotion ? {} : { y: -8, scale: 1.02, transition: { duration: 0.3 } }}
              className="group relative bg-[rgba(255,255,255,0.06)] backdrop-blur-sm rounded-2xl border border-[rgba(234,242,255,0.14)] p-6 hover:bg-[rgba(255,255,255,0.1)] hover:border-[rgba(234,242,255,0.25)] transition-all duration-500 overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                style={{ backgroundColor: index % 2 === 0 ? "#2D5BFF" : "#00B140" }}
              />
              <motion.div
                className="relative mb-6"
                whileHover={shouldReduceMotion ? {} : { scale: 1.1, transition: { duration: 0.3 } }}
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg bg-gradient-to-br from-[#2D5BFF] to-[#1E3A8A]">
                  {step.number}
                </div>
                <motion.div
                  className="absolute inset-0 rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"
                  style={{ backgroundColor: "#2D5BFF" }}
                />
              </motion.div>
              <div className="w-10 h-10 rounded-lg bg-[#2D5BFF]/20 text-[#2D5BFF] flex items-center justify-center mb-4">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-3 text-[#EAF2FF]">{step.title}</h3>
              <p className="text-sm text-[rgba(234,242,255,0.75)] leading-relaxed">{step.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
