import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp } from "@/animations/variants";

interface RevealProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  once?: boolean;
  amount?: number;
}

/**
 * Scroll-triggered reveal wrapper. Defaults to a soft fade-up.
 */
export function Reveal({
  children,
  className,
  variants = fadeUp,
  delay = 0,
  once = true,
  amount = 0.3,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
