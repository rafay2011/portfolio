import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useHasFinePointer } from "@/hooks/useMousePosition";
import { cn } from "@/utils/cn";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  /** Pull strength (0–1). */
  strength?: number;
}

/**
 * Wraps content in a magnetic field — the element drifts toward the cursor
 * on hover and springs back on leave. Disabled on touch devices.
 */
export function MagneticButton({
  children,
  className,
  strength = 0.35,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const fine = useHasFinePointer();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.4 });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!fine || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      className={cn("inline-block", className)}
      data-cursor="magnetic"
    >
      {children}
    </motion.div>
  );
}
