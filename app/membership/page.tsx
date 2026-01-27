import type { Metadata } from "next";
import MembershipClient from "./MembershipClient";

export const metadata: Metadata = {
  title: "Become a Member | UPTECH",
  description: "Join a trusted network shaping the future of UK–Pakistan technology collaboration.",
};

export default function MembershipPage() {
  return <MembershipClient />;
}



