import {
  BrainCircuit,
  Database,
  FolderKanban,
  Globe,
  Link,
  Network,
  Sparkles,
} from "lucide-react";
import type { LearningGroup } from "@/types";

export const learningGroups: LearningGroup[] = [
  {
    title: "Currently learning",
    items: [
      { name: "PostgreSQL", category: "Database", icon: Database },
      { name: "Machine Learning", category: "Artificial intelligence", icon: BrainCircuit },
      { name: "RAG", category: "AI systems", icon: Sparkles },
      { name: "LangChain", category: "AI framework", icon: Link },
      { name: "Next.js", category: "Web development", icon: Globe },
    ],
  },
  {
    title: "Current project",
    items: [
      { name: "University Management Database", category: "Database project", icon: Database },
      { name: "AI E-commerce", category: "AI application", icon: FolderKanban },
    ],
  },
  {
    title: "Next",
    items: [
      { name: "Deep Learning", category: "Artificial intelligence", icon: BrainCircuit },
      { name: "LangGraph", category: "AI framework", icon: Network },
    ],
  },
];
