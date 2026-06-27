import { motion } from "framer-motion";
import { ArrowDown, Download, Sparkles } from "lucide-react";
import { profile, stats } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { AuroraBackground } from "@/components/svg/AuroraBackground";
import { GridBackdrop } from "@/components/svg/GridBackdrop";
import { Particles } from "@/components/svg/Particles";
import { ArchitectureVisual } from "@/components/svg/ArchitectureVisual";
import { CodeSnippet } from "@/components/svg/CodeSnippet";
import { scrollToSection } from "@/hooks/useLenis";
import { useCountUp } from "@/hooks/useCountUp";
import { EASE } from "@/animations/variants";

const TITLE_LINE_1 = "Full-Stack";
const TITLE_LINE_2 = "Engineer";

function StatItem({ value, suffix, label }: (typeof stats)[number]) {
  const { ref, value: animated } = useCountUp(value);
  return (
    <div className="flex flex-col">
      <span className="font-display text-3xl font-semibold text-primary sm:text-4xl">
        <span ref={ref} className="tabular-nums">
          {animated}
        </span>
        <span className="text-gradient-gold">{suffix}</span>
      </span>
      <span className="mt-1 text-xs text-secondary sm:text-sm">{label}</span>
    </div>
  );
}

function HeroTitle({ text, delay }: { text: string; delay: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1, ease: EASE, delay }}
      >
        {text}
      </motion.span>
    </span>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pb-16 pt-32 lg:pt-28"
    >
      <AuroraBackground />
      <GridBackdrop />
      <Particles count={22} />

      <div className="container-px">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left — copy */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs text-secondary backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {profile.availability}
            </motion.div>

            <h1 className="font-display text-display-xl font-semibold leading-[0.92] text-primary">
              <HeroTitle text={TITLE_LINE_1} delay={0.35} />
              <span className="block overflow-hidden">
                <motion.span
                  className="block text-gradient-gold"
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1, ease: EASE, delay: 0.45 }}
                >
                  {TITLE_LINE_2}
                </motion.span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mt-7 max-w-xl text-base leading-relaxed text-secondary text-pretty sm:text-lg"
            >
              {profile.intro}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.85 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <MagneticButton>
                <Button size="lg" onClick={() => scrollToSection("work")} data-cursor>
                  View Projects
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("contact")}
                  data-cursor
                >
                  <Sparkles size={16} className="text-accent" />
                  Hire Me
                </Button>
              </MagneticButton>
              <a
                href={profile.resumeUrl}
                download="Muhammad-Rafay-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="ghost" data-cursor>
                  <Download size={16} />
                  Resume
                </Button>
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-12 flex max-w-xl flex-wrap gap-x-14 gap-y-8 border-t border-border pt-8"
            >
              {stats.map((s) => (
                <StatItem key={s.label} {...s} />
              ))}
            </motion.div>
          </div>

          {/* Right — visuals */}
          <div className="relative lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6, ease: EASE }}
              className="surface-card relative p-6 shadow-card"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.2em] text-muted">
                  System Architecture
                </span>
                <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-accent" />
              </div>
              <ArchitectureVisual />
            </motion.div>

            <motion.div
              className="absolute -bottom-10 -left-6 hidden w-72 sm:block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1, ease: EASE }}
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <CodeSnippet />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.button
        onClick={() => scrollToSection("about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted lg:flex"
        aria-label="Scroll to about"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.button>
    </section>
  );
}
