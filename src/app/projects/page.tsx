import type { Metadata } from "next";
import { Projects } from "@/components/sections/Projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore AI and full-stack projects built by Mukhtar Moosa.",
};

export default function ProjectsPage() {
  return <Projects />;
}