import type { SkillCategory } from "./types";

/**
 * Skills grouped to match the CV exactly. Backend is intentionally weighted
 * first and marked "primary" so it visually dominates the section.
 * Levels are relative emphasis for the UI, not formal certifications.
 */
export const skillCategories: SkillCategory[] = [
  {
    key: "backend",
    title: "Backend Engineering",
    icon: "Server",
    emphasis: "primary",
    skills: [
      { name: "PHP", level: 95 },
      { name: "Laravel", level: 95 },
      { name: "Node.js", level: 78 },
      { name: "RESTful APIs", level: 92 },
      { name: "RBAC", level: 88 },
      { name: "MVC Architecture", level: 90 },
    ],
  },
  {
    key: "database",
    title: "Database & Performance",
    icon: "Database",
    emphasis: "primary",
    skills: [
      { name: "MySQL", level: 92 },
      { name: "MongoDB", level: 74 },
      { name: "Query Optimization", level: 88 },
      { name: "Database Design", level: 88 },
    ],
  },
  {
    key: "frontend",
    title: "Frontend",
    icon: "Layout",
    emphasis: "secondary",
    skills: [
      { name: "JavaScript (ES6+)", level: 88 },
      { name: "React.js", level: 85 },
      { name: "Vue.js", level: 80 },
      { name: "HTML5", level: 92 },
      { name: "CSS3", level: 88 },
      { name: "Bootstrap", level: 85 },
      { name: "jQuery", level: 82 },
      { name: "AJAX", level: 85 },
    ],
  },
  {
    key: "mobile",
    title: "Mobile",
    icon: "Smartphone",
    emphasis: "secondary",
    skills: [
      { name: "React Native", level: 82 },
      { name: "iOS", level: 80 },
      { name: "Android", level: 80 },
      { name: "Cross-Platform Apps", level: 82 },
    ],
  },
  {
    key: "integrations",
    title: "Tools & Integrations",
    icon: "Plug",
    emphasis: "secondary",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Stripe API", level: 90 },
      { name: "Square API", level: 82 },
      { name: "Bill.com", level: 80 },
      { name: "Bouncie GPS", level: 80 },
      { name: "Third-Party API Integration", level: 90 },
    ],
  },
  {
    key: "realtime",
    title: "Real-Time",
    icon: "Radio",
    emphasis: "secondary",
    skills: [
      { name: "Pusher", level: 85 },
      { name: "WebSockets", level: 85 },
      { name: "Laravel Echo", level: 84 },
      { name: "Webhooks", level: 86 },
    ],
  },
];

/** Marquee strip of technologies — sourced from the CV skills list. */
export const techMarquee: string[] = [
  "PHP",
  "Laravel",
  "Node.js",
  "Vue.js",
  "React.js",
  "React Native",
  "MySQL",
  "MongoDB",
  "REST APIs",
  "Stripe",
  "Square",
  "Pusher",
  "Bill.com",
  "Bouncie GPS",
  "RBAC",
  "Laravel Echo",
  "JavaScript",
  "Git",
];
