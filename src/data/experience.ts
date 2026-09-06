import type { ExperienceItem } from "@/types";

// Mix "work" and "education" items freely — they render on one combined timeline,
// sorted in the order you list them here (most recent first is typical).

export const experience: ExperienceItem[] = [
  {
    id: "exp-1",
    type: "work",
    title: "Balochi Sentence Validation & Speech Recording Intern",
    organization: "Thaheer Production",
    period: "2026 — Present",
    location: "Turbat, Balochistan, Pakistan",
    description:
      "Validating Balochi sentences for grammatical accuracy, spelling, and consistency in Arabic-based Balochi script. Recording spoken Balochi readings for speech-data purposes and preparing validated language data for NLP workflows, including parsing, tokenization, and language model training.",
    tags: [
      "Balochi NLP",
      "Sentence Validation",
      "Speech Recording",
      "Transcription",
      "Language Data",
      "NLP",
    ],
  },

  {
    id: "exp-2",
    type: "work",
    title: "AI & Full-Stack Developer",
    organization: "Self-Employed",
    period: "Present",
    location: "Turbat, Balochistan, Pakistan",
    description:
      "Developing intelligent and practical web applications by combining AI/ML technologies with modern full-stack development. Building AI-powered solutions, RAG applications, automation tools, and responsive web interfaces with a focus on clean, scalable, and user-friendly experiences.",
    tags: [
      "Python",
      "AI/ML",
      "Generative AI",
      "RAG",
      "React",
      "Next.js",
      "TypeScript",
      "FastAPI",
      "Databases",
    ],
  },

  {
    id: "edu-1",
    type: "education",
    title: "Bachelor of Science in Computer Science",
    organization: "University of Turbat",
    period: "Present",
    location: "Turbat, Balochistan, Pakistan",
    description:
      "Currently pursuing a Bachelor's degree in Computer Science with a strong focus on artificial intelligence, machine learning, software development, databases, and modern web technologies. Building practical skills through academic projects, hands-on development, and continuous learning.",
    tags: [
      "Computer Science",
      "AI/ML",
      "Software Development",
      "Databases",
    ],
  },
];