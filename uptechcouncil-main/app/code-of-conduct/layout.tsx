import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Code of Conduct | UPTECH",
  description: "UPTECH's code of conduct and ethical guidelines for maintaining the highest standards of ethical conduct, transparency, and accountability.",
};

export default function CodeOfConductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
