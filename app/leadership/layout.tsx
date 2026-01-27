import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leadership and Governance | UPTECH",
  description: "Learn about UPTECH's leadership team, governance structure, Board of Directors, Advisory Council, and Executive Leadership.",
};

export default function LeadershipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
