import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About UPTECH | UK–Pakistan Tech Council",
  description: "Learn about the UK–Pakistan Technology Council and our mission to strengthen technology collaboration.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
