import type { Project } from "./types";

/**
 * Web projects — expanded from the CV into case-study structure.
 * Every fact (stack, scope, integrations) comes from the CV.
 * Results are stated qualitatively; no metrics are invented.
 * Screenshots and links are left empty for the owner to add later.
 */
export const webProjects: Project[] = [
  {
    slug: "ticketdrop",
    name: "TicketDrop",
    tagline:
      "Mobile-first events, ticketing, auctions, and lucky draws — one full-stack platform.",
    category: "web",
    type: "Full-Stack · React Native · React.js · Node.js",
    year: "2024",
    featured: true,
    overview:
      "A mobile-first platform that brings events, ticketing, packages, live auctions, and lucky draws together in one app — backed by a React admin panel and a Node.js API. I built it end to end as a full-stack engineer, across the mobile app, the admin dashboard, and the backend.",
    problem:
      "Running events shouldn't mean stitching together separate tools for ticket sales, bundled packages, auctions, and prize draws. Organizers needed one platform to manage it all — and attendees needed a fast, app-native way to browse events, buy, bid, and enter draws from their phone.",
    solution:
      "I built a React Native app where users browse events, add tickets to a basket, buy packages, bid in live auctions, and enter lucky draws — paired with a React.js admin panel to manage events, packages, auctions, and draws, all served by a single Node.js REST API.",
    architecture: [
      "React Native mobile app for iOS and Android (the primary user experience)",
      "React.js admin dashboard for managing events, packages, auctions, and draws",
      "Node.js REST API backend powering both clients from one source of truth",
      "Shared basket and order flow consumed by the mobile app",
    ],
    responsibilities: [
      "Worked full-stack — mobile app, admin panel, and backend",
      "Built the React Native app: events, basket, packages, auctions, and lucky draws",
      "Developed the React.js admin panel to manage events and run auctions and draws",
      "Designed and built the Node.js REST API and data flows behind both clients",
    ],
    features: [
      "Events — browse and discover upcoming events",
      "Basket — add tickets and check out",
      "Packages — bundled ticket and add-on offerings",
      "Auction — bid on items in live auctions",
      "Lucky Draw — enter and win prize draws",
    ],
    stack: ["React Native", "React.js", "Node.js", "REST APIs", "JavaScript"],
    challenges:
      "Keeping auctions and lucky draws consistent and fair across the app while the admin panel ran them live — and sharing one basket and order flow cleanly between the mobile and admin sides over a single API.",
    results:
      "Events, ticketing, packages, auctions, and lucky draws came together in one app-native platform, with an admin panel to run everything and a Node.js backend keeping both clients in sync.",
    future:
      "Room to add push notifications for draw results and auction outbids, richer analytics for organizers, and deeper payment options.",
    screenshots: [],
    links: { live: "", github: "" },
  },
  {
    slug: "rcg-tracker",
    name: "RCG Tracker",
    tagline: "Field-operations management with live GPS, payments, and invoicing.",
    category: "web",
    type: "Full-Stack · Laravel · Vue.js",
    year: "2024",
    featured: true,
    overview:
      "A project-management platform for field operations that brings job scheduling, appointments, live vehicle tracking, payments, and invoicing into a single system.",
    problem:
      "Field teams were juggling scheduling, vehicle whereabouts, payments, and billing across disconnected tools — leaving managers without a single, reliable view of daily operations.",
    solution:
      "I helped build a unified platform where jobs and appointments are scheduled in one place, vehicles are tracked live through Bouncie GPS, and payments and invoicing flow through Square and Bill.com — so operations, money, and movement all live under one roof.",
    architecture: [
      "Laravel REST API backend with a Vue.js single-page frontend",
      "Bouncie GPS integration for live vehicle location data",
      "Square integration for payment processing",
      "Bill.com integration for invoicing and billing workflows",
    ],
    responsibilities: [
      "Built job and appointment scheduling features",
      "Integrated Bouncie GPS for real-time vehicle tracking",
      "Connected Square for payments and Bill.com for invoicing",
      "Developed and maintained Laravel APIs consumed by the Vue.js frontend",
    ],
    features: [
      "Job & appointment scheduling",
      "Live vehicle tracking via Bouncie GPS",
      "Square payment processing",
      "Bill.com invoicing",
      "Vue.js operations dashboard",
    ],
    stack: ["Laravel", "PHP", "Vue.js", "MySQL", "Square API", "Bill.com", "Bouncie GPS", "REST APIs"],
    challenges:
      "Coordinating several third-party services — GPS, payments, and billing — into one coherent workflow meant handling each provider's data and edge cases without letting the user experience fragment.",
    results:
      "Field operations, vehicle tracking, payments, and invoicing came together in a single platform, giving managers one place to run the day instead of switching between separate tools.",
    future:
      "Room to deepen reporting and analytics on jobs and fleet activity, and to expose the workflows through a companion mobile app.",
    screenshots: [],
    links: { live: "", github: "" },
  },
  {
    slug: "crm-platform",
    name: "CRM Platform",
    tagline: "Sales pipeline, upsells, and Stripe payments in one clean backend.",
    category: "web",
    type: "Full-Stack · Laravel · Stripe",
    year: "2023",
    featured: true,
    overview:
      "A CRM that manages the full sales process — from pipeline through upsells and payments — built on a backend designed to stay clean as new features arrive.",
    problem:
      "The business needed the sales process, upsells, and payments handled in one system, with a codebase that wouldn't buckle as requirements kept expanding.",
    solution:
      "I built the backend around the sales workflow, wiring Stripe in for payments and upsells, and kept the structure deliberately clean so each new feature slotted in without friction.",
    architecture: [
      "Laravel backend following MVC conventions",
      "MySQL data model for the sales pipeline and customers",
      "Stripe integration for payments and upsell flows",
    ],
    responsibilities: [
      "Built the CRM backend covering the sales process and upsells",
      "Integrated Stripe for payment handling",
      "Maintained a clean, easily extensible code structure",
    ],
    features: [
      "Sales pipeline management",
      "Upsell handling",
      "Stripe payment processing",
      "Maintainable, modular backend",
    ],
    stack: ["Laravel", "PHP", "MySQL", "Stripe API", "REST APIs"],
    challenges:
      "Keeping the codebase clean and predictable while the feature set kept growing — so velocity stayed high instead of slowing under technical debt.",
    results:
      "Sales, upsells, and payments ran through one backend, and the deliberate structure made ongoing feature work straightforward to add.",
    future:
      "Potential to layer in analytics dashboards and automated follow-up workflows on top of the existing pipeline.",
    screenshots: [],
    links: { live: "", github: "" },
  },
  {
    slug: "chat-messenger",
    name: "Chat Messenger",
    tagline: "Real-time one-to-one and group chat with media and voice notes.",
    category: "web",
    type: "Full-Stack · Laravel · Pusher WebSockets",
    year: "2023",
    featured: true,
    overview:
      "A real-time messaging application supporting one-to-one and group conversations, image sharing, and voice notes — with messages delivered instantly.",
    problem:
      "Users expect chat to feel instant. Messages, images, and voice notes have to arrive live, without a page refresh, across both private and group conversations.",
    solution:
      "I built the app on Laravel and used Pusher WebSockets with Laravel Echo so messages appear the moment they're sent — extending the same real-time experience to images and voice notes across direct and group chats.",
    architecture: [
      "Laravel backend handling messaging and media",
      "Pusher WebSockets with Laravel Echo for live delivery",
      "AJAX-driven frontend interactions",
    ],
    responsibilities: [
      "Built one-to-one and group messaging",
      "Added image sharing and voice notes",
      "Wired up Pusher WebSockets and Laravel Echo for instant delivery",
    ],
    features: [
      "One-to-one messaging",
      "Group messaging",
      "Image sharing",
      "Voice notes",
      "Instant delivery, no page refresh",
    ],
    stack: ["Laravel", "PHP", "AJAX", "Pusher", "Laravel Echo", "MySQL"],
    challenges:
      "Delivering a genuinely real-time feel — keeping messages, media, and voice notes in sync across private and group channels without refreshes or dropped events.",
    results:
      "Conversations updated live across direct and group chats, with images and voice notes flowing through the same instant delivery pipeline.",
    future:
      "Natural extensions include read receipts, presence indicators, and push notifications via a mobile client.",
    screenshots: [],
    links: { live: "", github: "" },
  },
  {
    slug: "erp-system",
    name: "Enterprise Resource Planning (ERP)",
    tagline: "Multi-module ERP across purchase, production, sales, and finance.",
    category: "web",
    type: "Backend · Laravel · MySQL",
    year: "2024",
    featured: false,
    overview:
      "A multi-module ERP platform spanning Purchase, Production, Sales, and Finance, where I built and improved modules and tuned the reporting queries that kept it responsive.",
    problem:
      "An ERP touches every corner of a business — purchasing, production, sales, finance — and as the data grows, reporting queries are usually the first thing to slow down.",
    solution:
      "I built and refined modules across the platform and focused on the reporting layer, rewriting slow queries so the heavy, data-driven reports stayed fast and usable.",
    architecture: [
      "Laravel backend organized by business module",
      "MySQL data model spanning purchase, production, sales, and finance",
      "Optimized queries powering the reporting layer",
    ],
    responsibilities: [
      "Built and improved modules across Purchase, Production, Sales, and Finance",
      "Optimized slow database queries in the reporting sections",
      "Maintained backend reliability as the system grew",
    ],
    features: [
      "Purchase module",
      "Production module",
      "Sales module",
      "Finance module",
      "Optimized reporting",
    ],
    stack: ["Laravel", "PHP", "MySQL", "Query Optimization"],
    challenges:
      "Reporting over large, interconnected datasets without performance falling off a cliff — finding and fixing the queries that dragged the reporting sections down.",
    results:
      "Reporting queries ran noticeably faster after optimization, keeping the ERP's data-heavy sections responsive for everyday use.",
    future:
      "Opportunity to introduce caching and pre-aggregated reporting for even heavier analytical workloads.",
    screenshots: [],
    links: { live: "", github: "" },
  },
  {
    slug: "sales-distribution",
    name: "Sales & Distribution System",
    tagline: "Purchase orders, sales tracking, and core finance for operations.",
    category: "web",
    type: "Backend · Laravel · MySQL",
    year: "2024",
    featured: false,
    overview:
      "A Sales & Distribution platform with backend modules for purchase orders, sales tracking, and core financial features that help a business run its day-to-day operations.",
    problem:
      "Distribution businesses need purchase orders, sales, and finances tracked together — accurately and in one place — to actually understand how operations are performing.",
    solution:
      "I built the backend modules for purchase orders and sales tracking, plus the core financial features, so the business could manage and follow its operations from a single system.",
    architecture: [
      "Laravel backend organized around distribution workflows",
      "MySQL data model for orders, sales, and finance",
    ],
    responsibilities: [
      "Built purchase order modules",
      "Implemented sales tracking",
      "Added core financial features",
    ],
    features: [
      "Purchase orders",
      "Sales tracking",
      "Core financial features",
    ],
    stack: ["Laravel", "PHP", "MySQL", "REST APIs"],
    challenges:
      "Modeling distribution workflows so purchasing, sales, and finance stayed consistent with one another as records moved through the system.",
    results:
      "The business could manage purchasing, sales, and core finances from one system, making day-to-day operations easier to track.",
    future:
      "Room to add inventory forecasting and distributor-facing dashboards on the existing foundation.",
    screenshots: [],
    links: { live: "", github: "" },
  },
];
