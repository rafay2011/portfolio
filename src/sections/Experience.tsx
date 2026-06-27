import { motion } from "framer-motion";
import { Briefcase, Check } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experiences } from "@/data/experience";
import { education, languages } from "@/data/education";
import { Reveal } from "@/components/ui/Reveal";
import { EASE } from "@/animations/variants";

export function Experience() {
  return (
    <Section id="experience" className="bg-surface/20">
      <SectionHeading
        eyebrow="Career"
        title="A track record across business-critical systems."
        description="Four roles, one through-line: building and maintaining the backends behind CRM, ERP, and real-time products."
      />

      <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Timeline */}
        <div className="lg:col-span-8">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[15px] top-2 h-full w-px bg-gradient-to-b from-accent/40 via-border to-transparent" />

            <div className="space-y-10">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: i * 0.05, ease: EASE }}
                  className="relative pl-12"
                >
                  {/* Node */}
                  <span className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-surface">
                    <span className="h-2.5 w-2.5 rounded-full bg-gold-gradient shadow-glow" />
                  </span>

                  <div className="surface-card p-6 transition-colors duration-300 hover:border-border-strong">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-lg font-semibold text-primary">
                        {exp.company}
                      </h3>
                      <span className="font-mono text-xs text-accent">
                        {exp.period}
                      </span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-secondary">
                      {exp.role}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-secondary text-pretty">
                      {exp.summary}
                    </p>

                    <ul className="mt-4 space-y-2">
                      {exp.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2.5 text-sm text-secondary"
                        >
                          <Check
                            size={15}
                            className="mt-0.5 shrink-0 text-accent"
                          />
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {exp.stack.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-border bg-background px-3 py-1 text-xs text-secondary"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Education + languages sidebar */}
        <div className="space-y-8 lg:col-span-4">
          <Reveal>
            <div className="surface-card p-6">
              <div className="mb-5 flex items-center gap-2.5">
                <Briefcase size={16} className="text-accent" />
                <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Education
                </h3>
              </div>
              <div className="space-y-5">
                {education.map((e) => (
                  <div key={e.institution} className="border-l border-border pl-4">
                    <p className="text-sm font-medium text-primary">
                      {e.institution}
                    </p>
                    <p className="mt-0.5 text-sm text-secondary">
                      {e.credential}
                    </p>
                    <p className="mt-1 font-mono text-xs text-muted">
                      {e.period}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="surface-card p-6">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
                Languages
              </h3>
              <div className="space-y-3">
                {languages.map((l) => (
                  <div
                    key={l.name}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm text-primary">{l.name}</span>
                    <span className="text-xs text-secondary">{l.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
