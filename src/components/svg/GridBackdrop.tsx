import { cn } from "@/utils/cn";

/**
 * Subtle perspective grid drawn with SVG + a radial fade mask.
 * Evokes a schematic / blueprint feel behind hero and section areas.
 */
export function GridBackdrop({ className }: { className?: string }) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 -z-10", className)}
      aria-hidden
    >
      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="grid"
            width="56"
            height="56"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 56 0 L 0 0 0 56"
              fill="none"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="1"
            />
          </pattern>
          <radialGradient id="grid-fade" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="white" stopOpacity="0.9" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="grid-mask">
            <rect width="100%" height="100%" fill="url(#grid-fade)" />
          </mask>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="url(#grid)"
          mask="url(#grid-mask)"
        />
      </svg>
    </div>
  );
}
