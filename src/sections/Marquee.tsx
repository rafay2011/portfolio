import { techMarquee } from "@/data/skills";

/** Infinite horizontal marquee of technologies. Pure CSS animation. */
export function Marquee() {
  const items = [...techMarquee, ...techMarquee];
  return (
    <div className="relative border-y border-border bg-surface/30 py-6">
      <div className="mask-fade-x flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee items-center gap-12 pr-12">
          {items.map((tech, i) => (
            <span
              key={i}
              className="flex items-center gap-12 whitespace-nowrap text-lg font-medium text-secondary/70 sm:text-xl"
            >
              {tech}
              <span className="text-accent/50">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
