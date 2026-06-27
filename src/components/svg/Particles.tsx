import { useMemo } from "react";
import { motion } from "framer-motion";

/**
 * Lightweight floating particle field. Deterministic positions (seeded)
 * so SSR/CSR match and there's no layout jump.
 */
function seeded(i: number) {
  const x = Math.sin(i * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

export function Particles({ count = 26 }: { count?: number }) {
  const dots = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        left: seeded(i) * 100,
        top: seeded(i + 100) * 100,
        size: 1 + seeded(i + 200) * 2.5,
        duration: 6 + seeded(i + 300) * 8,
        delay: seeded(i + 400) * -10,
        opacity: 0.15 + seeded(i + 500) * 0.35,
      })),
    [count]
  );

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
      {dots.map((d, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-accent"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: d.size,
            height: d.size,
            opacity: d.opacity,
          }}
          animate={{ y: [0, -22, 0], opacity: [d.opacity, d.opacity * 0.3, d.opacity] }}
          transition={{
            duration: d.duration,
            delay: d.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
