import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Target,
  Lightbulb,
  Network,
  ListChecks,
  Sparkles,
  AlertTriangle,
  TrendingUp,
  Rocket,
  Github,
  ExternalLink,
} from "lucide-react";
import type { Project } from "@/data/types";
import { ProjectThumb } from "./ProjectThumb";
import { Button } from "@/components/ui/Button";
import { setScrollLock } from "@/hooks/useLenis";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

interface Block {
  icon: typeof Target;
  title: string;
  body?: string;
  list?: string[];
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (project) {
      setScrollLock(true);
      window.addEventListener("keydown", onKey);
    }
    return () => {
      setScrollLock(false);
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  const blocks: Block[] = [
    { icon: Target, title: "The Problem", body: project.problem },
    { icon: Lightbulb, title: "The Solution", body: project.solution },
    { icon: Network, title: "Architecture", list: project.architecture },
    { icon: ListChecks, title: "My Responsibilities", list: project.responsibilities },
    { icon: Sparkles, title: "Key Features", list: project.features },
    { icon: AlertTriangle, title: "Challenges", body: project.challenges },
    { icon: TrendingUp, title: "Results", body: project.results },
    { icon: Rocket, title: "Future Improvements", body: project.future },
  ].filter((b) => b.body || (b.list && b.list.length));

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[9000] flex items-start justify-center overflow-y-auto bg-background/80 p-4 backdrop-blur-md sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          data-lenis-prevent
        >
          <motion.div
            className="surface-card relative my-4 w-full max-w-3xl overflow-hidden shadow-card"
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header visual */}
            <div className="relative aspect-[16/8] overflow-hidden border-b border-border">
              {project.screenshots && project.screenshots.length > 0 ? (
                <img
                  src={project.screenshots[0]}
                  alt={project.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <ProjectThumb project={project} />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />

              <button
                onClick={onClose}
                aria-label="Close"
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/70 text-secondary backdrop-blur transition-colors hover:text-primary"
                data-cursor
              >
                <X size={18} />
              </button>

              <div className="absolute bottom-5 left-6 right-6">
                <p className="font-mono text-xs text-accent">{project.type}</p>
                <h3 className="mt-1 font-display text-3xl font-semibold text-primary">
                  {project.name}
                </h3>
              </div>
            </div>

            {/* Content */}
            <div
              className="max-h-[60vh] overflow-y-auto p-6 sm:p-8"
              data-lenis-prevent
            >
              <p className="text-base leading-relaxed text-secondary text-pretty">
                {project.overview}
              </p>

              <div className="mt-8 space-y-7">
                {blocks.map((block) => {
                  const Icon = block.icon;
                  return (
                    <div key={block.title}>
                      <div className="mb-3 flex items-center gap-2.5">
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-background">
                          <Icon size={15} className="text-accent" />
                        </span>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-primary">
                          {block.title}
                        </h4>
                      </div>
                      {block.body && (
                        <p className="pl-[42px] text-sm leading-relaxed text-secondary text-pretty">
                          {block.body}
                        </p>
                      )}
                      {block.list && (
                        <ul className="space-y-2 pl-[42px]">
                          {block.list.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2.5 text-sm text-secondary"
                            >
                              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Stack */}
              <div className="mt-8 border-t border-border pt-6">
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-background px-3 py-1 text-xs text-secondary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              {(project.links?.live || project.links?.github) && (
                <div className="mt-7 flex flex-wrap gap-3">
                  {project.links.live && (
                    <a href={project.links.live} target="_blank" rel="noreferrer">
                      <Button size="sm" data-cursor>
                        <ExternalLink size={15} /> Live Site
                      </Button>
                    </a>
                  )}
                  {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noreferrer">
                      <Button size="sm" variant="outline" data-cursor>
                        <Github size={15} /> Source
                      </Button>
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
