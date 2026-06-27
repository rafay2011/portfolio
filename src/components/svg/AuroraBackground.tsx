import { cn } from "@/utils/cn";

/**
 * Programmatic animated gradient "aurora" — soft drifting gold/violet blobs.
 * Pure CSS animation, GPU-friendly, no images.
 */
export function AuroraBackground({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className
      )}
      aria-hidden
    >
      <div className="absolute -left-[10%] top-[-20%] h-[55vw] w-[55vw] rounded-full bg-[radial-gradient(circle,rgba(201,162,39,0.16),transparent_65%)] blur-[80px] animate-float" />
      <div
        className="absolute right-[-15%] top-[10%] h-[48vw] w-[48vw] rounded-full bg-[radial-gradient(circle,rgba(120,90,255,0.10),transparent_65%)] blur-[90px] animate-float"
        style={{ animationDelay: "-3s", animationDuration: "9s" }}
      />
      <div
        className="absolute bottom-[-25%] left-[20%] h-[50vw] w-[50vw] rounded-full bg-[radial-gradient(circle,rgba(201,162,39,0.10),transparent_60%)] blur-[100px] animate-float"
        style={{ animationDelay: "-5s", animationDuration: "11s" }}
      />
    </div>
  );
}
