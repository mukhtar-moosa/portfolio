import type { Metadata } from "next";
import { Education } from "@/components/sections/Education";

export const metadata: Metadata = {
  title: "Education",
  description: "Academic background and education of Mukhtar Moosa.",
};

export default function EducationPage() {
  return <Education />;
}