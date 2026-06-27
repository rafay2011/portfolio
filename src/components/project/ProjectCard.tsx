import { motion } from "framer-motion";
import { ArrowUpRight, ImageOff } from "lucide-react";
import type { Project } from "@/data/types";
import { fadeUp } from "@/animations/variants";
import { ProjectThumb } from "./ProjectThumb";

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
  index: number;
}

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <motion.button
      variants={fadeUp}
      onClick={() => onOpen(project)}
      data-cursor
      className="group surface-card relative flex flex-col overflow-hidden text-left transition-colors duration-300 hover:border-border-strong"
    >
      {/* Visual */}
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
        {project.screenshots && project.screenshots.length > 0 ? (
          <img
            src={project.screenshots[0]}
            alt={project.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <ProjectThumb project={project} />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

        {project.featured && (
          <span className="absolute left-4 top-4 rounded-full border border-accent/30 bg-background/70 px-3 py-1 text-[11px] font-medium text-accent backdrop-blur">
            Featured
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-primary">
              {project.name}
            </h3>
            <p className="mt-1 font-mono text-xs text-accent">{project.type}</p>
          </div>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-background transition-all duration-300 group-hover:border-accent/40 group-hover:bg-accent/10">
            <ArrowUpRight
              size={16}
              className="text-secondary transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
            />
          </span>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-secondary text-pretty">
          {project.tagline}
        </p>

        <div className="mt-5 flex flex-wrap gap-2 pt-1">
          {project.stack.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-background px-2.5 py-0.5 text-[11px] text-secondary"
            >
              {t}
            </span>
          ))}
          {project.stack.length > 4 && (
            <span className="rounded-full border border-border bg-background px-2.5 py-0.5 text-[11px] text-muted">
              +{project.stack.length - 4}
            </span>
          )}
        </div>

        {!project.screenshots?.length && (
          <span className="mt-4 inline-flex items-center gap-1.5 text-[11px] text-muted">
            <ImageOff size={12} /> Screenshots coming soon
          </span>
        )}
      </div>
    </motion.button>
  );
}
