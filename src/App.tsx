import { Suspense, lazy, useState } from "react";
import { useLenis } from "@/hooks/useLenis";
import { Loader } from "@/components/layout/Loader";
import { Cursor } from "@/components/layout/Cursor";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Hero } from "@/sections/Hero";
import { Marquee } from "@/sections/Marquee";
import { About } from "@/sections/About";

// Below-the-fold sections are code-split to keep the initial bundle lean.
const Experience = lazy(() =>
  import("@/sections/Experience").then((m) => ({ default: m.Experience }))
);
const Skills = lazy(() =>
  import("@/sections/Skills").then((m) => ({ default: m.Skills }))
);
const Services = lazy(() =>
  import("@/sections/Services").then((m) => ({ default: m.Services }))
);
const Work = lazy(() =>
  import("@/sections/Work").then((m) => ({ default: m.Work }))
);
const Contact = lazy(() =>
  import("@/sections/Contact").then((m) => ({ default: m.Contact }))
);
const Footer = lazy(() =>
  import("@/sections/Footer").then((m) => ({ default: m.Footer }))
);

function SectionFallback() {
  return <div className="min-h-[40vh]" aria-hidden />;
}

export default function App() {
  const [loaded, setLoaded] = useState(false);
  useLenis();

  return (
    <>
      <Loader onComplete={() => setLoaded(true)} />
      <Cursor />
      <ScrollProgress />
      <Navbar />

      <main
        className={`noise-overlay transition-opacity duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Hero />
        <Marquee />
        <About />

        <Suspense fallback={<SectionFallback />}>
          <Experience />
          <Skills />
          <Services />
          <Work />
          <Contact />
          <Footer />
        </Suspense>
      </main>
    </>
  );
}
