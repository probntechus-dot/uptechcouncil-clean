import { ReactNode } from "react";
import { Container } from "./Container";

interface SectionProps {
  children: ReactNode;
  variant?: "light" | "dark";
  className?: string;
}

export function Section({ children, variant = "light", className = "" }: SectionProps) {
  const bgClass = variant === "dark" 
    ? "bg-dark text-on-dark relative overflow-hidden section-transition" 
    : "bg-light text-on-light section-transition";
  
  const textureClass = variant === "dark" ? "bg-tech-texture" : "";
  
  return (
    <section className={`${bgClass} ${textureClass} ${className}`}>
      {variant === "dark" && (
        <>
          <div className="absolute inset-0 bg-hero-glow opacity-30 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#061B2E]/20 pointer-events-none" />
        </>
      )}
      <div className="relative z-10">
        <Container className="py-20 md:py-28 lg:py-32">{children}</Container>
      </div>
    </section>
  );
}