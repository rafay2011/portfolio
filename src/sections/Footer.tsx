import { ArrowUp, Linkedin, Github } from "lucide-react";
import { SiUpwork } from "react-icons/si";
import { profile } from "@/data/profile";
import { navItems } from "@/constants/navigation";
import { scrollToSection } from "@/hooks/useLenis";

export function Footer() {
  const year = 2026; // build-time constant; avoids hydration drift

  const socials = [
    { label: "LinkedIn", href: profile.socials.linkedin, icon: Linkedin },
    { label: "GitHub", href: profile.socials.github, icon: Github },
    { label: "Upwork", href: profile.socials.upwork, icon: SiUpwork },
  ].filter((s) => s.href);

  return (
    <footer className="relative border-t border-border bg-surface/30">
      <div className="container-px py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <button
              onClick={() => scrollToSection("home")}
              className="flex items-center gap-2.5"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background font-display text-sm font-semibold text-gradient-gold">
                MR
              </span>
              <span className="text-base font-medium text-primary">
                {profile.name}
              </span>
            </button>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-secondary">
              {profile.tagline} Backend-focused Full-Stack Engineer building
              CRM, ERP, payment, and real-time systems.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-5 inline-block text-sm text-accent transition-colors hover:text-accent-soft"
            >
              {profile.email}
            </a>
          </div>

          {/* Nav */}
          <div className="lg:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">
              Navigate
            </h3>
            <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-sm text-secondary transition-colors hover:text-primary"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">
              Connect
            </h3>
            {socials.length > 0 ? (
              <div className="mt-5 flex gap-3">
                {socials.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.label}
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-secondary transition-colors hover:border-accent/30 hover:text-accent"
                    >
                      <Icon size={17} />
                    </a>
                  );
                })}
              </div>
            ) : (
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-secondary transition-colors hover:border-accent/30 hover:text-accent"
                aria-label="LinkedIn"
              >
                <Linkedin size={17} />
              </a>
            )}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted">
            © {year} {profile.name}. Crafted with precision.
          </p>
          <button
            onClick={() => scrollToSection("home")}
            className="group flex items-center gap-2 text-xs text-secondary transition-colors hover:text-primary"
            data-cursor
          >
            Back to top
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-border transition-colors group-hover:border-accent/40">
              <ArrowUp size={13} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
