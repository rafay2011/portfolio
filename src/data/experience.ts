import type { Experience } from "./types";

/**
 * Work history — companies, roles, and dates are taken verbatim from the CV.
 * Descriptions are rewritten for tone only; no facts added.
 */
export const experiences: Experience[] = [
  {
    company: "Instant Solutions Lab",
    role: "Software Engineer (Full-Stack)",
    start: "2024-12",
    end: "Present",
    period: "Dec 2024 — Present",
    summary:
      "Building and maintaining products across the full stack — web and mobile. Designing REST APIs in Laravel and Node.js, delivering interfaces in Vue.js and React, and building cross-platform mobile apps with React Native.",
    highlights: [
      "Develop and maintain REST APIs in Laravel and Node.js that power core features",
      "Build responsive, component-driven interfaces in Vue.js and React",
      "Develop cross-platform mobile applications with React Native",
      "Collaborate with the team to scope and deliver features on schedule",
    ],
    stack: [
      "Laravel",
      "PHP",
      "Node.js",
      "Vue.js",
      "React.js",
      "React Native",
      "MySQL",
      "REST APIs",
    ],
  },
  {
    company: "Innovative Network",
    role: "Software Engineer — Backend",
    start: "2024-02",
    end: "2024-11",
    period: "Feb 2024 — Nov 2024",
    summary:
      "Engineered backend modules for an ERP platform and a Sales & Distribution system, and tuned database queries to keep reporting and operations fast under real data volumes.",
    highlights: [
      "Built and refined modules across the ERP and Sales & Distribution platforms",
      "Optimized slow database queries to speed up reporting workloads",
      "Strengthened backend reliability as the systems grew in scope",
    ],
    stack: ["Laravel", "PHP", "MySQL", "Query Optimization"],
  },
  {
    company: "Marcel Technologies",
    role: "PHP Laravel Developer",
    start: "2023-10",
    end: "2024-02",
    period: "Oct 2023 — Feb 2024",
    summary:
      "Delivered Laravel backends for a range of client projects — building REST APIs, role-based access control, and third-party integrations to match each client's requirements.",
    highlights: [
      "Built REST APIs powering multiple client applications",
      "Implemented role-based access control (RBAC) and user permissions",
      "Integrated third-party services to extend product capabilities",
    ],
    stack: ["Laravel", "PHP", "REST APIs", "RBAC", "MySQL"],
  },
  {
    company: "Amigoz Tech",
    role: "PHP Laravel Developer",
    start: "2022-10",
    end: "2023-10",
    period: "Oct 2022 — Oct 2023",
    summary:
      "Built the backend for a CRM product — REST APIs and Stripe payment integration — with a constant focus on a clean, well-structured, and maintainable codebase.",
    highlights: [
      "Developed REST APIs for the CRM's core workflows",
      "Integrated Stripe to handle payments end to end",
      "Kept the codebase organized and easy to extend",
    ],
    stack: ["Laravel", "PHP", "Stripe API", "REST APIs", "MySQL"],
  },
];
