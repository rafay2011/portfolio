import { motion } from "framer-motion";
import { User } from "lucide-react";
import { profile } from "@/data/profile";
import { EASE } from "@/animations/variants";

/**
 * Themed portrait frame. The photo sits cleanly inside the frame
 * (object-cover, top-anchored so the face is well placed), with a soft
 * gradient floor so the bottom fades into the frame rather than cutting off.
 * Falls back to a themed placeholder when no photo is set.
 */
export function Portrait() {
  const hasPhoto = Boolean(profile.portrait);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: EASE }}
      className="relative mx-auto w-full max-w-sm"
    >
      {/* Glow */}
      <div className="pointer-events-none absolute -inset-6 -z-10 bg-radial-glow blur-2xl" />

      {/* Frame */}
      <div className="surface-card relative aspect-[4/5] overflow-hidden p-1.5 shadow-card">
        <div className="relative h-full w-full overflow-hidden rounded-[14px] bg-gradient-to-b from-surface to-background">
          {hasPhoto ? (
            <img
              src={profile.portrait}
              alt={`${profile.name} — ${profile.title}`}
              loading="lazy"
              className="h-full w-full select-none object-cover object-top"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-4 text-center">
              <svg
                className="pointer-events-none absolute inset-0 h-full w-full opacity-50"
                aria-hidden
              >
                <defs>
                  <pattern
                    id="portrait-grid"
                    width="32"
                    height="32"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M32 0H0V32"
                      fill="none"
                      stroke="rgba(255,255,255,0.04)"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#portrait-grid)" />
              </svg>
              <span className="flex h-20 w-20 items-center justify-center rounded-full border border-border bg-surface">
                <User size={32} className="text-accent" strokeWidth={1.4} />
              </span>
              <div className="relative">
                <p className="font-display text-lg font-semibold text-primary">
                  {profile.name}
                </p>
                <p className="mt-1 text-xs text-muted">
                  Professional photo coming soon
                </p>
              </div>
            </div>
          )}

          {/* soft gradient floor — fades the bottom into the frame */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>

        {/* corner accents */}
        <span className="pointer-events-none absolute left-3 top-3 z-20 h-5 w-5 border-l border-t border-accent/50" />
        <span className="pointer-events-none absolute bottom-3 right-3 z-20 h-5 w-5 border-b border-r border-accent/50" />
      </div>

      {/* Floating tag */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-4 left-4 z-30 flex items-center gap-2 rounded-full border border-border bg-surface/90 px-4 py-2 backdrop-blur"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
        </span>
        <span className="text-xs text-secondary">{profile.location}</span>
      </motion.div>
    </motion.div>
  );
}
