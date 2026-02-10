import type { Metadata } from "next";
import CareersClient from "./CareersClient";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the UPTECH team and help shape the future of UK–Pakistan technology collaboration. View open positions and internship opportunities.",
  openGraph: {
    title: "Careers | UPTECH",
    description: "Join the UPTECH team and help shape the future of UK–Pakistan technology collaboration.",
  },
};

export default function CareersPage() {
  return <CareersClient />;
}



