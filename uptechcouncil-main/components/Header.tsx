"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "./Button";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const navGroups = [
  {
    label: "About",
    items: [
      { label: "About UPTECH", href: "/about" },
      { label: "Leadership and Governance", href: "/leadership" },
      { label: "Code of Conduct", href: "/code-of-conduct" },
    ],
  },
  {
    label: "Programs",
    items: [
      { label: "AI and Tech Programs", href: "/programs/ai-tech-programs" },
      { label: "Skill Development Center", href: "/programs/skill-development-center" },
      { label: "Incubation and Collective Startups", href: "/programs/incubation-collective-startups" },
    ],
  },
  {
    label: "Initiatives",
    items: [
      { label: "People AI Platform", href: "/initiatives/people-ai" },
      { label: "TechMart Global", href: "/initiatives/techmart-global" },
      { label: "Tech Excellence Awards", href: "/initiatives/tech-excellence-awards" },
    ],
  },
  {
    label: "Ecosystem",
    items: [
      { label: "UK–Pakistan Technology Partnership", href: "/about" },
      { label: "Funding and Grants", href: "/membership" },
      { label: "Trade Delegations and Exhibitions", href: "/events" },
    ],
  },
  {
    label: "Updates",
    items: [
      { label: "Events and News", href: "/events" },
      { label: "Careers", href: "/careers" },
    ],
  },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Improved hover-intent: longer delay + safe bridge area
  const handleMouseEnter = (groupLabel: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setOpenDropdown(groupLabel);
  };

  const handleMouseLeave = (groupLabel: string) => {
    // Increased delay to 300ms for better UX
    hoverTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 300);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[rgba(5,11,20,0.85)] backdrop-blur-xl border-b border-[rgba(234,242,255,0.12)] shadow-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3 group relative z-10">
              <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-white/10 backdrop-blur-sm border border-[rgba(234,242,255,0.1)] group-hover:border-[#1E40AF]/40 transition-all duration-300">
                <img
                  src="/image/Main Logo/mainlogo.jpeg"
                  alt="UPTECH Logo"
                  className="w-full h-full object-contain p-1"
                />
              </div>
              <span className="font-heading font-bold text-xl text-[#EAF2FF]">UPTECH</span>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {navGroups.map((group) => (
                <div
                  key={group.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(group.label)}
                  onMouseLeave={() => handleMouseLeave(group.label)}
                  ref={(el) => (dropdownRefs.current[group.label] = el)}
                >
                  <button className="flex items-center gap-1.5 text-[#EAF2FF]/90 hover:text-[#1E40AF] transition-all duration-300 font-medium text-sm relative group py-2">
                    {group.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-all duration-300 ${
                      openDropdown === group.label 
                        ? "opacity-100 rotate-180 text-[#1E40AF]" 
                        : "opacity-60 group-hover:opacity-100"
                    }`} />
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#1E40AF] to-[#1E40AF]/60 group-hover:w-full transition-all duration-300 ease-out"></span>
                  </button>
                  
                  {/* Extended safe hover bridge - prevents flicker */}
                  <div className="absolute top-full left-0 right-0 h-4 pointer-events-none" />
                  
                  <AnimatePresence>
                    {openDropdown === group.label && (
                      <motion.div
                        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -12, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -12, scale: 0.98 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute top-full left-0 mt-4 w-72 bg-[rgba(5,11,20,0.98)] backdrop-blur-2xl rounded-2xl shadow-2xl border border-[rgba(234,242,255,0.15)] p-2 overflow-hidden"
                        onMouseEnter={() => handleMouseEnter(group.label)}
                        onMouseLeave={() => handleMouseLeave(group.label)}
                        style={{ pointerEvents: "auto" }}
                      >
                        {/* Subtle gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#1E40AF]/5 via-transparent to-transparent pointer-events-none" />
                        
                        {group.items.map((item, idx) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="relative block px-4 py-2.5 text-[#EAF2FF]/90 hover:text-[#1E40AF] hover:bg-[rgba(45,91,255,0.1)] rounded-lg transition-all duration-200 text-sm font-medium group/item"
                            style={{ transitionDelay: `${idx * 10}ms` }}
                          >
                            <span className="relative z-10">{item.label}</span>
                            <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#1E40AF]/0 via-[#1E40AF]/5 to-[#1E40AF]/0 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <Link 
                href="/membership" 
                className="text-[#EAF2FF]/90 hover:text-[#1E40AF] transition-all duration-300 font-medium text-sm relative group py-2"
              >
                Membership
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#1E40AF] to-[#1E40AF]/60 group-hover:w-full transition-all duration-300 ease-out"></span>
              </Link>
            </nav>

            <div className="hidden lg:flex items-center gap-6">
              <Link
                href="https://portal.example.com"
                className="relative text-[#EAF2FF]/80 hover:text-[#1E40AF] transition-all duration-300 text-sm font-medium group px-3 py-2 rounded-lg hover:bg-[rgba(45,91,255,0.08)]"
              >
                <span className="relative z-10">Portal</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#1E40AF] to-[#1E40AF]/60 group-hover:w-full transition-all duration-300 ease-out"></span>
              </Link>
              <Link
                href="/membership"
                className="relative inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold text-white rounded-xl overflow-hidden group transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1E40AF] focus:ring-offset-2 focus:ring-offset-[#050B14]"
                style={{
                  background: "linear-gradient(135deg, #1E40AF 0%, #1E3A8A 50%, #1E3A8A 100%)",
                  boxShadow: "0 4px 20px rgba(45, 91, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                }}
              >
                {/* Shine effect */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
                
                {/* Hover glow */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-[#1E40AF] via-[#1E3A8A] to-[#1E40AF] blur-xl"></span>
                
                <span className="relative z-10 flex items-center gap-2">
                  Become a Member
                  <motion.span
                    className="inline-block"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    →
                  </motion.span>
                </span>
                
                {/* Hover shadow enhancement */}
                <span 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    boxShadow: "0 8px 32px rgba(45, 91, 255, 0.5), 0 0 0 1px rgba(45, 91, 255, 0.2)",
                  }}
                />
              </Link>
            </div>

            <button
              className="lg:hidden p-2 text-[#EAF2FF] transition-colors duration-300"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Gradient accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-[#1E40AF]/0 via-[#1E40AF]/30 via-[#00B140]/20 via-[#E11D48]/20 to-[#1E40AF]/0"></div>
      </header>

      {/* Mobile Menu - Premium slide-over */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden fixed inset-0 bg-[#050B14]/80 backdrop-blur-sm z-40"
              onClick={() => setIsMobileOpen(false)}
            />
            
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden fixed inset-y-0 right-0 w-80 bg-[#050B14] backdrop-blur-2xl shadow-2xl z-50 overflow-y-auto border-l border-[rgba(234,242,255,0.15)]"
            >
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <Link href="/" className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-white/10 border border-[rgba(234,242,255,0.1)]">
                    <img
                      src="/image/Main Logo/mainlogo.jpeg"
                      alt="UPTECH Logo"
                      className="w-full h-full object-contain p-1"
                    />
                  </div>
                  <span className="font-heading font-bold text-xl text-[#EAF2FF]">UPTECH</span>
                </Link>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="p-2 text-[#EAF2FF]"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="space-y-2">
                {navGroups.map((group) => (
                  <div key={group.label}>
                    <button
                      className="flex items-center justify-between w-full py-3 px-4 text-[#EAF2FF]/90 hover:text-[#1E40AF] hover:bg-[rgba(45,91,255,0.08)] rounded-lg transition-all duration-200 font-medium text-sm"
                      onClick={() =>
                        setOpenDropdown(openDropdown === group.label ? null : group.label)
                      }
                    >
                      {group.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          openDropdown === group.label ? "rotate-180 text-[#1E40AF]" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {openDropdown === group.label && (
                        <motion.div
                          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="pl-6 pr-4 space-y-1 overflow-hidden"
                        >
                          {group.items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="block py-2.5 px-4 text-[rgba(234,242,255,0.75)] hover:text-[#1E40AF] hover:bg-[rgba(45,91,255,0.1)] rounded-lg transition-all duration-200 text-sm"
                              onClick={() => setIsMobileOpen(false)}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
                <Link
                  href="/membership"
                  className="block py-3 px-4 text-[#EAF2FF]/90 font-medium hover:text-[#1E40AF] hover:bg-[rgba(45,91,255,0.08)] rounded-lg transition-all duration-200 text-sm"
                  onClick={() => setIsMobileOpen(false)}
                >
                  Membership
                </Link>
              </nav>

              <div className="mt-8 pt-6 border-t border-[rgba(234,242,255,0.1)] space-y-3">
                <Link
                  href="https://portal.example.com"
                  className="block text-center py-3 px-4 text-[#EAF2FF]/80 hover:text-[#1E40AF] hover:bg-[rgba(45,91,255,0.08)] rounded-lg transition-all duration-200 text-sm font-medium"
                  onClick={() => setIsMobileOpen(false)}
                >
                  Portal
                </Link>
                <Link
                  href="/membership"
                  className="block w-full text-center py-3 px-6 text-sm font-semibold text-white rounded-xl transition-all duration-300 relative overflow-hidden group"
                  style={{
                    background: "linear-gradient(135deg, #1E40AF 0%, #1E3A8A 50%, #1E3A8A 100%)",
                    boxShadow: "0 4px 20px rgba(45, 91, 255, 0.3)",
                  }}
                  onClick={() => setIsMobileOpen(false)}
                >
                  <span className="relative z-10">Become a Member</span>
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
                </Link>
              </div>
            </div>
          </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}