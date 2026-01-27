import Link from "next/link";
import { Linkedin, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#061B2E] text-[#EAF2FF] relative overflow-hidden">
      <div className="absolute inset-0 bg-tech-texture opacity-30" />
      <div className="relative z-10">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center gap-3 mb-6">
                <div className="relative w-10 h-10 rounded-lg overflow-hidden shadow-md bg-white">
                  <img
                    src="/image/Main Logo/mainlogo.jpeg"
                    alt="UPTECH Logo"
                    className="w-full h-full object-contain p-1"
                  />
                </div>
                <span className="font-heading font-bold text-xl">UPTECH</span>
              </Link>
              <p className="text-[rgba(234,242,255,0.72)] mb-6 max-w-md leading-relaxed">
                A strategic platform strengthening technology, innovation, and digital trade between the United Kingdom and Pakistan.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-[rgba(234,242,255,0.72)] hover:text-[#EAF2FF] transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-[rgba(234,242,255,0.72)] hover:text-[#EAF2FF] transition-colors" aria-label="Twitter">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-[rgba(234,242,255,0.72)] hover:text-[#EAF2FF] transition-colors" aria-label="YouTube">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-heading font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-[rgba(234,242,255,0.72)] hover:text-[#EAF2FF] transition-colors text-sm">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/initiatives" className="text-[rgba(234,242,255,0.72)] hover:text-[#EAF2FF] transition-colors text-sm">
                    Initiatives
                  </Link>
                </li>
                <li>
                  <Link href="/membership" className="text-[rgba(234,242,255,0.72)] hover:text-[#EAF2FF] transition-colors text-sm">
                    Membership
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="text-[rgba(234,242,255,0.72)] hover:text-[#EAF2FF] transition-colors text-sm">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-[rgba(234,242,255,0.72)] hover:text-[#EAF2FF] transition-colors text-sm">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-semibold mb-6">Initiatives</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/initiatives/people-ai" className="text-[rgba(234,242,255,0.72)] hover:text-[#EAF2FF] transition-colors text-sm">
                    People AI
                  </Link>
                </li>
                <li>
                  <Link href="/initiatives/techmart-global" className="text-[rgba(234,242,255,0.72)] hover:text-[#EAF2FF] transition-colors text-sm">
                    TechMart
                  </Link>
                </li>
                <li>
                  <Link href="/initiatives/ai-tech-programs" className="text-[rgba(234,242,255,0.72)] hover:text-[#EAF2FF] transition-colors text-sm">
                    AI Programs
                  </Link>
                </li>
                <li>
                  <Link href="/initiatives/tech-excellence-awards" className="text-[rgba(234,242,255,0.72)] hover:text-[#EAF2FF] transition-colors text-sm">
                    Awards
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-semibold mb-6">Governance</h3>
              <ul className="space-y-3 mb-6">
                <li>
                  <Link href="/leadership" className="text-[rgba(234,242,255,0.72)] hover:text-[#EAF2FF] transition-colors text-sm">
                    Leadership
                  </Link>
                </li>
                <li>
                  <Link href="/code-of-conduct" className="text-[rgba(234,242,255,0.72)] hover:text-[#EAF2FF] transition-colors text-sm">
                    Code of Conduct
                  </Link>
                </li>
                <li>
                  <a href="https://portal.example.com" className="text-[rgba(234,242,255,0.72)] hover:text-[#EAF2FF] transition-colors text-sm">
                    Member Portal
                  </a>
                </li>
              </ul>
              <div>
                <h4 className="font-heading font-semibold mb-3 text-sm">Contact</h4>
                <p className="text-[rgba(234,242,255,0.72)] text-sm">info@uptech.example.com</p>
                <p className="text-[rgba(234,242,255,0.72)] text-sm mt-2">London, UK / Islamabad, PK</p>
              </div>
            </div>
          </div>

          <div className="border-t border-[rgba(234,242,255,0.14)] pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[rgba(234,242,255,0.72)]">
              <p>© {new Date().getFullYear()} UK–Pakistan Tech Council. All rights reserved.</p>
              <div className="flex gap-6">
                <Link href="/privacy" className="hover:text-[#EAF2FF] transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-[#EAF2FF] transition-colors">
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