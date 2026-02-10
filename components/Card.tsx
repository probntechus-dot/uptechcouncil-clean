import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  variant?: "light" | "dark";
}

export function Card({ children, className = "", hover = false, variant = "light" }: CardProps) {
  const baseStyles = "rounded-2xl border p-7 transition-all duration-500 relative overflow-hidden group/card";
  const variantStyles = variant === "dark"
    ? "bg-[rgba(255,255,255,0.04)] backdrop-blur-sm border-[rgba(234,242,255,0.10)] text-[#EAF2FF]"
    : "bg-white border-[rgba(11,18,32,0.08)] text-[#0B1220] shadow-sm";

  const hoverClass = hover
    ? variant === "dark"
      ? "hover:-translate-y-1.5 hover:bg-[rgba(255,255,255,0.08)] hover:border-[#1E40AF]/30 hover:shadow-[0_8px_32px_rgba(30,64,175,0.15)] cursor-pointer"
      : "hover:-translate-y-1.5 hover:shadow-xl hover:border-[#1E40AF]/25 cursor-pointer"
    : "";

  return (
    <div className={`${baseStyles} ${variantStyles} ${hoverClass} ${className}`}>
      {hover && (
        <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#1E40AF]/40 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
      )}
      {children}
    </div>
  );
}