import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useHasFinePointer } from "@/hooks/useMousePosition";

/**
 * Custom interactive cursor: a small dot + a trailing ring that grows and
 * shifts to gold over interactive elements ([data-cursor], a, button).
 * Only renders on fine-pointer devices.
 */
export function Cursor() {
  const fine = useHasFinePointer();
  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden] = useState(true);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 350, damping: 28, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 350, damping: 28, mass: 0.5 });

  useEffect(() => {
    if (!fine) return;
    document.documentElement.classList.add("has-custom-cursor");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setHidden(false);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHovering(
        !!t.closest("a, button, [data-cursor], input, textarea, [role='button']")
      );
    };
    const leave = () => setHidden(true);

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    document.addEventListener("mouseleave", leave);
    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      document.removeEventListener("mouseleave", leave);
    };
  }, [fine, x, y]);

  if (!fine) return null;

  return (
    <>
      {/* Dot */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 rounded-full bg-accent mix-blend-difference"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        animate={{ opacity: hidden ? 0 : 1, scale: hovering ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      />
      {/* Ring */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] rounded-full border border-accent"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          opacity: hidden ? 0 : hovering ? 1 : 0.5,
          width: hovering ? 48 : 28,
          height: hovering ? 48 : 28,
          backgroundColor: hovering
            ? "rgba(201,162,39,0.10)"
            : "rgba(201,162,39,0)",
        }}
        transition={{ duration: 0.22, ease: "easeOut" }}
      />
    </>
  );
}
