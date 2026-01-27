import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  variant?: "light" | "dark";
}

export function Card({ children, className = "", hover = false, variant = "light" }: CardProps) {
  const baseStyles = "rounded-[16px] border p-6 transition-all duration-300";
  const variantStyles = variant === "dark"
    ? "bg-[rgba(255,255,255,0.06)] border-[rgba(234,242,255,0.14)] text-[#EAF2FF]"
    : "bg-white border-[rgba(11,18,32,0.10)] text-[#0B1220] shadow-sm";
  
  const hoverClass = hover 
    ? "hover:-translate-y-1 hover:shadow-lg hover:border-[#1E40AF]/40 cursor-pointer" 
    : "";
  
  return (
    <div className={`${baseStyles} ${variantStyles} ${hoverClass} ${className}`}>
      {children}
    </div>
  );
}