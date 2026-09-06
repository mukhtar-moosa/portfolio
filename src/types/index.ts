import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

export interface Skill {
  name: string;
  /** Optional proficiency, 0-100. Leave undefined to hide the meter. */
  level?: number;
}

export interface SkillCategory {
  category: string;
  icon: LucideIcon;
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  sourceUrl?: string;
  featured?: boolean;
}

export type ExperienceType = "work" | "education";

export interface ExperienceItem {
  id: string;
  type: ExperienceType;
  title: string;
  organization: string;
  period: string;
  location?: string;
  description: string;
  tags?: string[];
}

export interface LearningItem {
  name: string;
  category: string;
  icon: LucideIcon;
}

export interface LearningGroup {
  title: string;
  items: LearningItem[];
}
