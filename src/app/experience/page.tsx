import type { Metadata } from "next";
import { Experience } from "@/components/sections/Experience";

export const metadata: Metadata = {
  title: "Experience",
  description: "Work experience and professional background of Mukhtar Moosa.",
};

export default function ExperiencePage() {
  return <Experience />;
}