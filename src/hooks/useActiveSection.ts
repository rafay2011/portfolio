import { useEffect, useState } from "react";

/**
 * Tracks which section is currently in view.
 *
 * Uses a scroll-position calculation (not a thin IntersectionObserver band)
 * so that short, trailing sections like Contact reliably become active —
 * including when the page is scrolled all the way to the bottom.
 */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? "");

  useEffect(() => {
    let ticking = false;

    const compute = () => {
      ticking = false;
      const scrollY = window.scrollY;
      const viewportH = window.innerHeight;
      const docH = document.documentElement.scrollHeight;

      // At the very bottom, force the last tracked section active.
      if (scrollY + viewportH >= docH - 4) {
        setActive(ids[ids.length - 1]);
        return;
      }

      // The "reading line" sits ~38% down the viewport.
      const line = scrollY + viewportH * 0.38;
      let current = ids[0];

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.offsetTop <= line) current = id;
      }

      setActive(current);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(compute);
      }
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ids]);

  return active;
}
