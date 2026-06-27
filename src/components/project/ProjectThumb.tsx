import type { Project } from "@/data/types";

/**
 * Deterministic generative thumbnail for projects without screenshots yet.
 * Each project gets a distinct abstract "schematic" derived from its slug,
 * so the grid looks intentional rather than empty.
 */
function hashString(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (h << 5) - h + s.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

export function ProjectThumb({ project }: { project: Project }) {
  const h = hashString(project.slug);
  const rows = 3 + (h % 3);
  const cols = 5 + (h % 4);
  const cells: { x: number; y: number; on: boolean }[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const seed = hashString(`${project.slug}-${r}-${c}`);
      cells.push({ x: c, y: r, on: seed % 5 < 2 });
    }
  }
  const cellW = 100 / cols;
  const cellH = 100 / rows;

  return (
    <div className="relative h-full w-full bg-gradient-to-br from-surface to-background">
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
      >
        <defs>
          <linearGradient id={`pt-${project.slug}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#E3C766" stopOpacity="0.9" />
            <stop offset="1" stopColor="#9A7B16" stopOpacity="0.5" />
          </linearGradient>
        </defs>

        {/* faint grid */}
        {Array.from({ length: cols + 1 }).map((_, i) => (
          <line
            key={`v${i}`}
            x1={i * cellW}
            y1="0"
            x2={i * cellW}
            y2="100"
            stroke="rgba(255,255,255,0.04)"
            strokeWidth="0.3"
          />
        ))}
        {Array.from({ length: rows + 1 }).map((_, i) => (
          <line
            key={`h${i}`}
            x1="0"
            y1={i * cellH}
            x2="100"
            y2={i * cellH}
            stroke="rgba(255,255,255,0.04)"
            strokeWidth="0.3"
          />
        ))}

        {/* active cells */}
        {cells
          .filter((c) => c.on)
          .map((c, i) => (
            <rect
              key={i}
              x={c.x * cellW + cellW * 0.18}
              y={c.y * cellH + cellH * 0.18}
              width={cellW * 0.64}
              height={cellH * 0.64}
              rx={1.5}
              fill={`url(#pt-${project.slug})`}
              opacity={0.12 + ((i % 5) / 5) * 0.55}
            />
          ))}

        {/* connector accent */}
        <path
          d={`M ${cellW} ${cellH * 1.5} H ${100 - cellW}`}
          stroke="rgba(201,162,39,0.4)"
          strokeWidth="0.5"
          strokeDasharray="2 2"
        />
      </svg>

      <div className="absolute inset-0 flex items-end p-5">
        <span className="font-display text-2xl font-semibold text-white/10">
          {project.name}
        </span>
      </div>
    </div>
  );
}
