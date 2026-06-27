import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Initializes Lenis smooth scrolling and exposes it on window for
 * anchor-based navigation. Respects prefers-reduced-motion.
 */
export function useLenis() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
    });

    // expose for programmatic scroll (navbar)
    (window as unknown as { lenis?: Lenis }).lenis = lenis;

    let frame = 0;
    function raf(time: number) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    }
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      delete (window as unknown as { lenis?: Lenis }).lenis;
    };
  }, []);
}

/**
 * Lock/unlock page scrolling for overlays (modals, mobile menu).
 * Pauses Lenis instead of fighting it with body overflow — which previously
 * left the page unscrollable after a modal closed. Falls back to body
 * overflow when Lenis isn't active (e.g. reduced-motion users).
 */
export function setScrollLock(locked: boolean) {
  const lenis = (window as unknown as { lenis?: Lenis }).lenis;
  if (lenis) {
    if (locked) lenis.stop();
    else lenis.start();
  }
  document.body.style.overflow = locked ? "hidden" : "";
}

/** Smoothly scroll to a section id, falling back to native scroll. */
export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const lenis = (window as unknown as { lenis?: Lenis }).lenis;
  if (lenis) {
    lenis.scrollTo(el, { offset: -8, duration: 1.2 });
  } else {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
