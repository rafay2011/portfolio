import type { Stat } from "./types";

/**
 * Core identity & contact. Derived from CV (confirmed brand decisions):
 * display name "Muhammad Rafay", public email, 3+ years.
 */
export const profile = {
  name: "Muhammad Rafay",
  firstName: "Muhammad",
  lastName: "Rafay",
  title: "Full-Stack Software Engineer",
  specialization: "Laravel · Node.js · React · Vue.js",
  tagline: "I build the software businesses run on.",
  location: "Karachi, Pakistan",
  availability: "Available for select projects",
  email: "abdulrafayansari123@gmail.com",
  phone: "+92 316 6273134",
  resumeUrl: "/resume/Muhammad-Rafay-CV.pdf",
  /**
   * Professional portrait. Drop a photo at public/profile.jpg
   * (professional dress, clean/dark background to match the theme).
   * While empty, a themed placeholder is shown.
   */
  portrait: "/profile.png",

  intro:
    "Backend-focused Full-Stack Software Engineer with 3+ years building production web applications — the CRM, ERP, payment, and real-time systems that businesses depend on every day.",

  socials: {
    linkedin: "https://www.linkedin.com/in/muhammad-rafay-ansari-493452249",
    // Placeholders — to be supplied later by the owner.
    github: "",
    upwork: "",
  },
} as const;

export const stats: Stat[] = [
  { value: 3, suffix: "+", label: "Years Experience" },
  { value: 20, suffix: "+", label: "Technologies" },
];
