import { motion } from "framer-motion";
import {
  Server,
  Database,
  Layout,
  Plug,
  Radio,
  Wrench,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillCategories } from "@/data/skills";
import { cn } from "@/utils/cn";
import { staggerContainer, fadeUp } from "@/animations/variants";

const ICONS: Record<string, LucideIcon> = {
  Server,
  Database,
  Layout,
  Plug,
  Radio,
  Wrench,
  Smartphone,
};

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Capabilities"
        title="Backend depth, full-stack range."
        description="My strongest work lives on the server — APIs, data, and integrations — supported by a frontend skill set that ties it all together."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
      >
        {skillCategories.map((cat) => {
          const Icon = ICONS[cat.icon] ?? Server;
          const isPrimary = cat.emphasis === "primary";
          return (
            <motion.div
              key={cat.key}
              variants={fadeUp}
              className={cn(
                "group surface-card relative overflow-hidden p-7 transition-colors duration-300",
                isPrimary
                  ? "border-accent/20 hover:border-accent/40"
                  : "hover:border-border-strong"
              )}
            >
              {isPrimary && (
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-radial-glow blur-2xl" />
              )}

              <div className="relative">
                <div className="mb-6 flex items-center gap-3">
                  <div
                    className={cn(
                      "flex h-11 w-11 items-center justify-center rounded-xl border",
                      isPrimary
                        ? "border-accent/40 bg-accent/10"
                        : "border-border bg-background"
                    )}
                  >
                    <Icon
                      size={20}
                      className={isPrimary ? "text-accent-soft" : "text-secondary"}
                      strokeWidth={1.6}
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-primary">
                      {cat.title}
                    </h3>
                    {isPrimary && (
                      <span className="text-[11px] uppercase tracking-wider text-accent">
                        Core Strength
                      </span>
                    )}
                  </div>
                </div>

                {/* Skill tags — no percentages, theme-consistent */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <span
                      key={s.name}
                      className={cn(
                        "rounded-lg border px-3 py-1.5 text-sm transition-colors duration-300",
                        isPrimary
                          ? "border-accent/20 bg-accent/[0.06] text-primary hover:border-accent/40"
                          : "border-border bg-background text-secondary hover:border-border-strong hover:text-primary"
                      )}
                    >
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
