import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events and News | UPTECH",
  description: "Stay updated with UPTECH events, news, and activities.",
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
