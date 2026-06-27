# Muhammad Rafay — Portfolio

A premium, single-page portfolio for a backend-focused Full-Stack Software Engineer.
Built with **React + Vite + TypeScript + Tailwind + Framer Motion + Lenis**.

All written content is derived from the source CV (`CV.html`). Nothing about
the experience, projects, or stack was invented.

## Scripts

```bash
npm install      # install dependencies
npm run dev      # start dev server (http://localhost:5173)
npm run build    # type-check + production build to /dist
npm run preview  # preview the production build
```

## Architecture

```
src/
├─ animations/        # Framer Motion variants & shared easing
├─ components/
│  ├─ layout/         # Loader, Navbar, Cursor, Section, ScrollProgress
│  ├─ project/        # ProjectCard, ProjectModal, generative ProjectThumb
│  ├─ svg/            # Aurora, grid, particles, architecture & code visuals
│  └─ ui/             # Button, MagneticButton, Reveal, AnimatedText, SectionHeading
├─ constants/         # navigation
├─ data/              # SINGLE SOURCE OF TRUTH — all CV content lives here
├─ hooks/             # useLenis, useActiveSection, useCountUp, useMousePosition
├─ sections/          # Hero → Footer, one file per section
├─ styles/            # globals.css (Tailwind layers + design tokens)
└─ utils/             # cn() class merger
```

## How to add your content later (no layout changes needed)

Everything below plugs into the `src/data/` files — edit data, not components.

### 1. Project screenshots
Drop image files into `public/screenshots/`, then add the paths to the matching
project in `src/data/projects.ts`:

```ts
screenshots: ["/screenshots/rcg-tracker-1.png", "/screenshots/rcg-tracker-2.png"],
```

The generative placeholder thumbnail is replaced automatically once a
screenshot is present.

### 2. Live URLs & GitHub repos
On each project in `src/data/projects.ts`:

```ts
links: { live: "https://...", github: "https://github.com/..." },
```

### 3. React Native apps
Replace the placeholder entries in `src/data/mobileProjects.ts` with real
projects (set `comingSoon: false` and fill in the case-study fields).

### 4. GitHub / Upwork profile links
Fill in `src/data/profile.ts → socials.github` and `socials.upwork`.
Empty values are hidden automatically across the nav, contact, and footer.

### 5. Testimonials
Add objects to the `testimonials` array in `src/data/process.ts`. The section
swaps from the "coming soon" state to a testimonial grid automatically.

### 6. Resume PDF
Place your PDF at `public/resume/Muhammad-Rafay-CV.pdf` (the path the
"Resume" buttons already point to in `src/data/profile.ts`).

## Notes
- Fully responsive (mobile → ultra-wide), dark luxury theme.
- Respects `prefers-reduced-motion`.
- SEO: meta tags, Open Graph, Twitter cards, JSON-LD Person schema, sitemap, robots.
- Update the canonical domain in `index.html`, `sitemap.xml`, and `robots.txt`
  when you deploy.
```
