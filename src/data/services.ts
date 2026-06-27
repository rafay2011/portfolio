import type { Service } from "./types";

/**
 * Two core offerings, kept deliberately focused. Detailed capabilities
 * (APIs, integrations, databases, etc.) live in the Skills section.
 */
export const services: Service[] = [
  {
    title: "Web Application Development",
    description:
      "Full-stack web applications — from backend APIs and databases to responsive React and Vue interfaces — engineered for real business workflows and built to scale.",
    icon: "AppWindow",
  },
  {
    title: "Mobile Application Development",
    description:
      "Cross-platform mobile apps with React Native — one codebase across iOS and Android, backed by the same robust APIs that power the web.",
    icon: "Smartphone",
  },
];
