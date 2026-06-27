import {
  Server,
  Target,
  Network,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Portrait } from "@/components/ui/Portrait";
import { aboutContent } from "@/data/about";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/animations/variants";

const ICONS: Record<string, LucideIcon> = {
  Server,
  Target,
  Network,
  Sparkles,
};

export function About() {
  return (
    <Section id="about">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left — portrait */}
        <div className="lg:col-span-5">
          <Portrait />
        </div>

        {/* Right — narrative */}
        <div className="lg:col-span-7">
          <SectionHeading eyebrow="About" title={aboutContent.heading} />
          <div className="mt-8 space-y-5">
            {aboutContent.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="text-base leading-relaxed text-secondary text-pretty sm:text-lg">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Pillars — full width below */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {aboutContent.pillars.map((pillar) => {
          const Icon = ICONS[pillar.icon] ?? Server;
          return (
            <motion.div
              key={pillar.title}
              variants={fadeUp}
              className="group surface-card p-6 transition-colors duration-300 hover:border-accent/30"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background transition-colors group-hover:border-accent/40">
                <Icon size={20} className="text-accent" strokeWidth={1.6} />
              </div>
              <h3 className="text-sm font-semibold text-primary">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-secondary">
                {pillar.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
