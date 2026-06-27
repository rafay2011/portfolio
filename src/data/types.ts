/**
 * Shared domain types for the portfolio data layer.
 * All content is derived strictly from the source CV.
 */

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface Experience {
  company: string;
  role: string;
  start: string;
  end: string;
  period: string;
  summary: string;
  highlights: string[];
  stack: string[];
}

export interface SkillCategory {
  key: string;
  title: string;
  icon: string; // lucide icon name reference handled in component
  emphasis: "primary" | "secondary";
  skills: { name: string; level?: number }[];
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export type ProjectCategory = "web" | "mobile";

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  category: ProjectCategory;
  type: string;
  year?: string;
  featured?: boolean;
  /** Set true for not-yet-released placeholder cards (e.g. React Native). */
  comingSoon?: boolean;
  overview: string;
  problem: string;
  solution: string;
  architecture: string[];
  responsibilities: string[];
  features: string[];
  stack: string[];
  challenges: string;
  results: string;
  future: string;
  /** Filled in later when the user uploads screenshots. */
  screenshots?: string[];
  links?: {
    live?: string;
    github?: string;
    caseStudy?: string;
  };
}

export interface EducationItem {
  institution: string;
  credential: string;
  period: string;
}

export interface ProcessStep {
  index: string;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar?: string;
}
