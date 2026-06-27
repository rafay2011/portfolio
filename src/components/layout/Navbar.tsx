import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems } from "@/constants/navigation";
import { profile } from "@/data/profile";
import { scrollToSection, setScrollLock } from "@/hooks/useLenis";
import { useActiveSection } from "@/hooks/useActiveSection";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { cn } from "@/utils/cn";

const sectionIds = navItems.map((n) => n.id);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setScrollLock(open);
    return () => setScrollLock(false);
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
      >
        <nav
          className={cn(
            "flex w-full max-w-content items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500",
            scrolled
              ? "glass border border-border shadow-card"
              : "border border-transparent"
          )}
        >
          {/* Logo */}
          <button
            onClick={() => go("home")}
            className="group flex items-center gap-2.5 pl-2"
            aria-label="Back to top"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-surface font-display text-sm font-semibold text-gradient-gold transition-colors group-hover:border-accent/40">
              MR
            </span>
            <span className="hidden text-sm font-medium tracking-tight text-primary sm:block">
              {profile.name}
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm transition-colors",
                  active === item.id
                    ? "text-primary"
                    : "text-secondary hover:text-primary"
                )}
              >
                {active === item.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-full bg-white/[0.06]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-2">
            <MagneticButton className="hidden sm:block">
              <Button size="sm" onClick={() => go("contact")} data-cursor>
                Hire Me
              </Button>
            </MagneticButton>
            <button
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-primary lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center gap-2">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  onClick={() => go(item.id)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className={cn(
                    "font-display text-3xl font-medium transition-colors",
                    active === item.id ? "text-gradient-gold" : "text-secondary"
                  )}
                >
                  {item.label}
                </motion.button>
              ))}
              <Button
                className="mt-6"
                onClick={() => go("contact")}
                size="lg"
              >
                Hire Me
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
