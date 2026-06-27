import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  /** Removes default vertical padding when a section manages its own. */
  bare?: boolean;
}

/** Standard full-width section with consistent rhythm and a scroll anchor. */
export function Section({ id, children, className, bare }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full scroll-mt-24",
        !bare && "py-16 sm:py-20 lg:py-24",
        className
      )}
    >
      <div className="container-px">{children}</div>
    </section>
  );
}
