import { motion } from "framer-motion";
import { AppWindow, Smartphone, ArrowUpRight, type LucideIcon } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/data/services";
import { scrollToSection } from "@/hooks/useLenis";
import { staggerContainer, fadeUp } from "@/animations/variants";

const ICONS: Record<string, LucideIcon> = {
  AppWindow,
  Smartphone,
};

export function Services() {
  return (
    <Section id="services" className="bg-surface/20">
      <SectionHeading
        eyebrow="Services"
        title="What I build for clients."
        description="Two things, done properly — the web platforms businesses run on, and the mobile apps their users carry."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="mt-12 grid gap-6 md:grid-cols-2"
      >
        {services.map((service) => {
          const Icon = ICONS[service.icon] ?? AppWindow;
          return (
            <motion.button
              key={service.title}
              variants={fadeUp}
              onClick={() => scrollToSection("work")}
              data-cursor
              className="group surface-card relative overflow-hidden p-8 text-left transition-colors duration-300 hover:border-accent/30 sm:p-10"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-radial-glow opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative">
                <div className="mb-7 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-background transition-all duration-300 group-hover:border-accent/40 group-hover:shadow-glow-soft">
                    <Icon size={26} className="text-accent" strokeWidth={1.5} />
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  />
                </div>

                <h3 className="text-xl font-semibold text-primary sm:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-secondary text-pretty sm:text-base">
                  {service.description}
                </p>
              </div>
            </motion.button>
          );
        })}
      </motion.div>
    </Section>
  );
}
