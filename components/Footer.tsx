import Link from "next/link";
import Image from "next/image";
import { Linkedin, Twitter, Youtube } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-[#050B14] text-[#EAF2FF] relative overflow-hidden">
      {/* Gradient top border */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#1E40AF]/40 via-[#00B140]/30 via-[#E11D48]/30 to-transparent" />
      <div className="absolute inset-0 bg-tech-texture opacity-20" />
      <div className="relative z-10">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center gap-3 mb-6 group">
                <Image
                  src="/image/main-logo/mainlogo.png"
                  alt="UPTECH Logo"
                  width={50}
                  height={50}
                  className="h-[50px] w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                />
                <span className="font-heading font-bold text-xl">UPTECH</span>
              </Link>
              <p className="text-[rgba(234,242,255,0.6)] mb-8 max-w-md leading-relaxed text-[15px]">
                A strategic platform strengthening technology, innovation, and digital trade between the United Kingdom and Pakistan.
              </p>
              <div className="flex gap-3">
                {[
                  { icon: Linkedin, label: "LinkedIn" },
                  { icon: Twitter, label: "Twitter" },
                  { icon: Youtube, label: "YouTube" },
                ].map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href="#"
                      className="w-10 h-10 rounded-xl bg-[rgba(255,255,255,0.06)] border border-[rgba(234,242,255,0.1)] flex items-center justify-center text-[rgba(234,242,255,0.6)] hover:text-white hover:bg-[#1E40AF]/20 hover:border-[#1E40AF]/40 transition-all duration-300"
                      aria-label={social.label}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="font-heading font-semibold mb-6 text-sm uppercase tracking-wider text-[rgba(234,242,255,0.9)]">Quick Links</h3>
              <ul className="space-y-3.5">
                <li>
                  <Link href="/about" className="text-[rgba(234,242,255,0.55)] hover:text-[#1E40AF] transition-colors duration-300 text-sm">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/initiatives" className="text-[rgba(234,242,255,0.55)] hover:text-[#1E40AF] transition-colors duration-300 text-sm">
                    Initiatives
                  </Link>
                </li>
                <li>
                  <Link href="/membership" className="text-[rgba(234,242,255,0.55)] hover:text-[#1E40AF] transition-colors duration-300 text-sm">
                    Membership
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="text-[rgba(234,242,255,0.55)] hover:text-[#1E40AF] transition-colors duration-300 text-sm">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-[rgba(234,242,255,0.55)] hover:text-[#1E40AF] transition-colors duration-300 text-sm">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-semibold mb-6 text-sm uppercase tracking-wider text-[rgba(234,242,255,0.9)]">Initiatives</h3>
              <ul className="space-y-3.5">
                <li>
                  <Link href="/initiatives/people-ai" className="text-[rgba(234,242,255,0.55)] hover:text-[#1E40AF] transition-colors duration-300 text-sm">
                    People AI
                  </Link>
                </li>
                <li>
                  <Link href="/initiatives/techmart-global" className="text-[rgba(234,242,255,0.55)] hover:text-[#1E40AF] transition-colors duration-300 text-sm">
                    TechMart
                  </Link>
                </li>
                <li>
                  <Link href="/initiatives/ai-tech-programs" className="text-[rgba(234,242,255,0.55)] hover:text-[#1E40AF] transition-colors duration-300 text-sm">
                    AI Programs
                  </Link>
                </li>
                <li>
                  <Link href="/initiatives/tech-excellence-awards" className="text-[rgba(234,242,255,0.55)] hover:text-[#1E40AF] transition-colors duration-300 text-sm">
                    Awards
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-semibold mb-6 text-sm uppercase tracking-wider text-[rgba(234,242,255,0.9)]">Governance</h3>
              <ul className="space-y-3.5 mb-8">
                <li>
                  <Link href="/leadership" className="text-[rgba(234,242,255,0.55)] hover:text-[#1E40AF] transition-colors duration-300 text-sm">
                    Leadership
                  </Link>
                </li>
                <li>
                  <Link href="/code-of-conduct" className="text-[rgba(234,242,255,0.55)] hover:text-[#1E40AF] transition-colors duration-300 text-sm">
                    Code of Conduct
                  </Link>
                </li>
                <li>
                  <a href={siteConfig.portalUrl} className="text-[rgba(234,242,255,0.55)] hover:text-[#1E40AF] transition-colors duration-300 text-sm">
                    Member Portal
                  </a>
                </li>
              </ul>
              <div>
                <h4 className="font-heading font-semibold mb-3 text-sm uppercase tracking-wider text-[rgba(234,242,255,0.9)]">Contact</h4>
                <p className="text-[rgba(234,242,255,0.55)] text-sm">info@uptechcouncil.org</p>
                <p className="text-[rgba(234,242,255,0.55)] text-sm mt-2">London, UK / Islamabad, PK</p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-[rgba(234,242,255,0.08)] pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[rgba(234,242,255,0.45)]">
              <p>&copy; {new Date().getFullYear()} UK&ndash;Pakistan Tech Council. All rights reserved.</p>
              <div className="flex gap-8">
                <Link href="/privacy" className="hover:text-[#1E40AF] transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-[#1E40AF] transition-colors duration-300">
                  Terms
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}