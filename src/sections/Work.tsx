import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/project/ProjectCard";
import { ProjectModal } from "@/components/project/ProjectModal";
import { webProjects } from "@/data/projects";
import type { Project } from "@/data/types";
import { staggerContainer } from "@/animations/variants";

export function Work() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <Section id="work">
      <SectionHeading
        eyebrow="Selected Work"
        title="Production systems, real business outcomes."
        description="A selection of platforms I've engineered — from CRM and ERP to payments, real-time, and cross-platform mobile apps. Open any project for the full case study."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="mt-12 grid gap-6 md:grid-cols-2"
      >
        {webProjects.map((project, i) => (
          <ProjectCard
            key={project.slug}
            project={project}
            onOpen={setActive}
            index={i}
          />
        ))}
      </motion.div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </Section>
  );
}
