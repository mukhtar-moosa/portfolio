import type { Metadata } from "next";
import { About } from "@/components/sections/About";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Mukhtar Moosa, an AI and Full-Stack Developer.",
};

export default function AboutPage() {
  return <About />;
}