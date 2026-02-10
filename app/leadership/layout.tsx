import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leadership & Governance",
  description: "Meet UPTECH’s leadership team, board of directors, executive council, and governance structure driving UK–Pakistan tech collaboration.",
  openGraph: {
    title: "Leadership & Governance | UPTECH",
    description: "Meet the leaders driving UK–Pakistan technology collaboration.",
  },
};

export default function LeadershipLayout({ children }: { children: React.ReactNode }) {
  return children;
}
