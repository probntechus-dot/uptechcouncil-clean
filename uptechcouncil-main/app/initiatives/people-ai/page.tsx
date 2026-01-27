import type { Metadata } from "next";
import PeopleAIClient from "./PeopleAIClient";

export const metadata: Metadata = {
  title: "People AI Platform | UPTECH",
  description: "Empowering people and organizations through human-centric AI support systems that integrate technology with professional services.",
};

export default function PeopleAIPage() {
  return <PeopleAIClient />;
}
