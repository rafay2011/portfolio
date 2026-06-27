import { motion } from "framer-motion";
import { EASE } from "@/animations/variants";
import { cn } from "@/utils/cn";

interface AnimatedTextProps {
  text: string;
  className?: string;
  /** Delay before the first word animates in. */
  delay?: number;
  /** Stagger between words. */
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

/**
 * Reveals text word-by-word with a clipped slide-up.
 * Each word sits in an overflow-hidden mask for a premium "type set" feel.
 */
export function AnimatedText({
  text,
  className,
  delay = 0,
  stagger = 0.06,
  as = "span",
}: AnimatedTextProps) {
  const words = text.split(" ");
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={cn("inline-block", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden align-bottom"
          aria-hidden
        >
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "110%" },
              visible: { y: "0%" },
            }}
            transition={{
              duration: 0.8,
              ease: EASE,
              delay: delay + i * stagger,
            }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
