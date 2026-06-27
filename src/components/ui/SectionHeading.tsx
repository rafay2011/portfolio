import { Reveal } from "./Reveal";
import { AnimatedText } from "./AnimatedText";
import { cn } from "@/utils/cn";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

/** Consistent section header: eyebrow label + large display title + optional lead. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <Reveal>
        <span className="eyebrow">
          <span className="h-px w-8 bg-accent/60" />
          {eyebrow}
        </span>
      </Reveal>

      <AnimatedText
        as="h2"
        text={title}
        className="max-w-4xl text-display-md font-semibold text-primary text-balance"
      />

      {description && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "max-w-2xl text-base leading-relaxed text-secondary text-pretty sm:text-lg",
              align === "center" && "mx-auto"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
