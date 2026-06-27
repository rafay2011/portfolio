import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

interface Token {
  text: string;
  color?: string;
}

const C = {
  kw: "#E3C766", // keyword — gold
  fn: "#7DA9FF", // function — blue
  str: "#9ECE9E", // string — green
  cm: "#5A5A66", // comment — muted
  pl: "#A1A1AA", // plain
  cls: "#D7A0E8", // class — violet
};

/** A small Laravel-flavoured snippet — illustrative of real backend work. */
const LINES: Token[][] = [
  [
    { text: "Route", color: C.cls },
    { text: "::", color: C.pl },
    { text: "middleware", color: C.fn },
    { text: "(", color: C.pl },
    { text: "'auth:api'", color: C.str },
    { text: ")->", color: C.pl },
  ],
  [
    { text: "    ", color: C.pl },
    { text: "post", color: C.fn },
    { text: "(", color: C.pl },
    { text: "'/payments'", color: C.str },
    { text: ", ", color: C.pl },
    { text: "[", color: C.pl },
    { text: "PaymentController", color: C.cls },
    { text: "::", color: C.pl },
    { text: "class", color: C.kw },
    { text: ", ", color: C.pl },
    { text: "'store'", color: C.str },
    { text: "]);", color: C.pl },
  ],
  [{ text: "", color: C.pl }],
  [
    { text: "// webhook keeps status in sync, in real time", color: C.cm },
  ],
  [
    { text: "Stripe", color: C.cls },
    { text: "::", color: C.pl },
    { text: "handle", color: C.fn },
    { text: "(", color: C.pl },
    { text: "$event", color: C.pl },
    { text: ")->", color: C.pl },
    { text: "dispatch", color: C.fn },
    { text: "();", color: C.pl },
  ],
];

export function CodeSnippet({ className }: { className?: string }) {
  return (
    <motion.div
      className={cn(
        "surface-card w-full max-w-sm overflow-hidden font-mono text-[11px] leading-relaxed shadow-card sm:text-xs",
        className
      )}
      initial={{ opacity: 0, y: 24, rotateX: 8 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/80" />
        <span className="ml-2 text-[10px] text-muted">routes/api.php</span>
      </div>
      {/* Code */}
      <div className="space-y-1 px-4 py-4">
        {LINES.map((line, i) => (
          <motion.div
            key={i}
            className="flex whitespace-pre"
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.12, duration: 0.4 }}
          >
            <span className="mr-4 select-none text-muted/50">{i + 1}</span>
            <span>
              {line.map((tok, j) => (
                <span key={j} style={{ color: tok.color }}>
                  {tok.text}
                </span>
              ))}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
