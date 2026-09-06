import {
  Braces,
  Cloud,
  Database,
  Layers,
  Sparkles,
  Wrench,
} from "lucide-react";

import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    icon: Braces,
    skills: [
      { name: "Python" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "SQL" },
    ],
  },

  {
    category: "Frontend",
    icon: Layers,
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "Tailwind CSS" },
    ],
  },

  {
    category: "Backend & Databases",
    icon: Database,
    skills: [
      { name: "FastAPI" },
      { name: "Node.js" },
      { name: "MySQL" },
      { name: "PostgreSQL" },
      { name: "Supabase" },
    ],
  },

  {
    category: "AI / ML",
    icon: Sparkles,
    skills: [
      { name: "Machine Learning" },
      { name: "NLP" },
      { name: "Generative AI" },
      { name: "RAG" },
      { name: "LangChain" },
      { name: "LangGraph" },
      { name: "Mistral AI" },
      { name: "ChromaDB" },
      { name: "Tavily" },
    ],
  },

  {
    category: "Cloud & Deployment",
    icon: Cloud,
    skills: [
      { name: "Streamlit Cloud" },
      { name: "Vercel" },
      { name: "Docker" },
    ],
  },

  {
    category: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "VS Code" },
      { name: "npm" },
      { name: "pgAdmin 4" },
      { name: "Vitest" },
    ],
  },
];