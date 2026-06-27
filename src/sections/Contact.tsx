import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Linkedin,
  Github,
  ArrowUpRight,
  Clock,
} from "lucide-react";
import { SiUpwork } from "react-icons/si";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Reveal } from "@/components/ui/Reveal";
import { profile } from "@/data/profile";
import { EASE } from "@/animations/variants";

export function Contact() {
  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
    "Project inquiry"
  )}`;

  const socials = [
    { label: "LinkedIn", href: profile.socials.linkedin, icon: Linkedin },
    { label: "GitHub", href: profile.socials.github, icon: Github },
    { label: "Upwork", href: profile.socials.upwork, icon: SiUpwork },
  ].filter((s) => s.href);

  return (
    <Section id="contact">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        {/* Left — pitch + details */}
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Contact"
            title="Let's build something that lasts."
            description="Have a product to build or a system to scale? Tell me about it — I reply to every serious inquiry."
          />

          <div className="mt-10 space-y-4">
            <Reveal>
              <a
                href={mailto}
                className="group flex items-center gap-4 rounded-xl border border-border bg-surface/40 p-4 transition-colors hover:border-accent/30"
                data-cursor
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-background">
                  <Mail size={18} className="text-accent" />
                </span>
                <span className="flex-1">
                  <span className="block text-xs text-muted">Email</span>
                  <span className="block text-sm text-primary">
                    {profile.email}
                  </span>
                </span>
                <ArrowUpRight
                  size={16}
                  className="text-muted transition-colors group-hover:text-accent"
                />
              </a>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="flex items-center gap-4 rounded-xl border border-border bg-surface/40 p-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-background">
                  <MapPin size={18} className="text-accent" />
                </span>
                <span className="flex-1">
                  <span className="block text-xs text-muted">Location</span>
                  <span className="block text-sm text-primary">
                    {profile.location}
                  </span>
                </span>
              </div>
            </Reveal>
          </div>

          {socials.length > 0 && (
            <Reveal delay={0.16}>
              <div className="mt-6 flex flex-wrap gap-3">
                {socials.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-surface/40 text-secondary transition-colors hover:border-accent/30 hover:text-accent"
                      aria-label={s.label}
                      data-cursor
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </Reveal>
          )}
        </div>

        {/* Right — direct CTA panel */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="surface-card relative flex h-full flex-col justify-center overflow-hidden p-8 sm:p-12"
          >
            {/* glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-radial-glow blur-3xl" />

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-xs text-secondary">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                {profile.availability}
              </span>

              <h3 className="mt-6 font-display text-3xl font-semibold text-primary text-balance sm:text-4xl">
                Have a project in mind?
              </h3>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-secondary text-pretty">
                The fastest way to reach me is email. Tell me what you're
                building, your timeline, and what you need — and I'll get back to
                you personally.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <MagneticButton>
                  <a href={mailto}>
                    <Button size="lg" data-cursor>
                      <Mail size={17} /> Email Me
                    </Button>
                  </a>
                </MagneticButton>
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button size="lg" variant="outline" data-cursor>
                    <Linkedin size={17} /> Connect on LinkedIn
                  </Button>
                </a>
              </div>

              <div className="mt-8 flex items-center gap-2 border-t border-border pt-6 text-sm text-muted">
                <Clock size={15} className="text-accent" />
                Usually responds within a day.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
