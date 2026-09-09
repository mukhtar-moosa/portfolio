import type { Metadata } from "next";
import { Skills } from "@/components/sections/Skills";
import { CurrentlyLearning } from "@/components/sections/CurrentlyLearning";

export const metadata: Metadata = {
  title: "Skills",
  description: "Tools, technologies, and skills of Mukhtar Moosa.",
};

export default function SkillsPage() {
  return (
    <>
      <Skills />
      <CurrentlyLearning />
    </>
  );
}