import { ReactNode } from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
  children?: ReactNode;
}

export function SectionHeader({ 
  title, 
  subtitle, 
  className = "",
  align = "left",
  children
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";
  
  return (
    <div className={`mb-12 md:mb-16 ${alignClass} ${className}`}>
      <h2 className="font-heading font-bold mb-4">{title}</h2>
      {subtitle && (
        <p className={`text-lg ${align === "center" ? "mx-auto" : ""} max-w-2xl`}>
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}