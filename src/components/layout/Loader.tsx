import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/data/profile";

/**
 * Premium loading screen: animated counter + monogram, then a curtain wipe
 * reveals the page. Auto-dismisses after assets settle (or instantly when
 * reduced motion is preferred).
 */
export function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  // Keep the latest onComplete without making it an effect dependency —
  // otherwise the loader restarts every time the parent re-renders.
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    const finish = () => onCompleteRef.current();

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setProgress(100);
      setDone(true);
      const t = setTimeout(finish, 200);
      return () => clearTimeout(t);
    }

    let raf = 0;
    let endTimer = 0;
    const start = performance.now();
    const DURATION = 1500;
    const tick = (now: number) => {
      const p = Math.min((now - start) / DURATION, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setProgress(Math.round(eased * 100));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setDone(true);
        endTimer = window.setTimeout(finish, 700);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(endTimer);
    };
    // Run exactly once on mount.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatePresence>
      {!done || progress < 100 ? (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Monogram */}
          <motion.div
            className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-surface"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-display text-2xl font-semibold text-gradient-gold">
              MR
            </span>
          </motion.div>

          <div className="flex items-baseline gap-3">
            <span className="font-display text-5xl font-semibold tabular-nums text-primary">
              {progress}
            </span>
            <span className="text-sm text-muted">%</span>
          </div>

          <p className="mt-4 text-xs uppercase tracking-[0.3em] text-muted">
            {profile.name}
          </p>

          {/* Progress line */}
          <div className="mt-6 h-px w-48 overflow-hidden bg-border">
            <motion.div
              className="h-full bg-gold-gradient"
              style={{ width: `${progress}%` }}
            />
          </div>
        </motion.div>
      ) : null}

      {/* Curtain wipe */}
      {done && (
        <motion.div
          key="curtain"
          className="fixed inset-0 z-[9999] origin-bottom bg-background"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        />
      )}
    </AnimatePresence>
  );
}
