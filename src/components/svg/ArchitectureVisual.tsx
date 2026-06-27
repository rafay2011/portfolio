import { motion } from "framer-motion";
import {
  Server,
  Database,
  ShieldCheck,
  Webhook,
  Globe,
  Radio,
} from "lucide-react";

/**
 * Animated backend-architecture schematic for the hero.
 * Nodes represent a real request path: Client → API → Auth/Services → DB,
 * with real-time + webhook branches. Data "pulses" travel the connectors.
 * Fully programmatic — no images.
 */

interface Node {
  id: string;
  label: string;
  x: number;
  y: number;
  icon: typeof Server;
  accent?: boolean;
}

const NODES: Node[] = [
  { id: "client", label: "Client", x: 60, y: 150, icon: Globe },
  { id: "api", label: "REST API", x: 230, y: 150, icon: Server, accent: true },
  { id: "auth", label: "Auth · RBAC", x: 420, y: 60, icon: ShieldCheck },
  { id: "rt", label: "Real-Time", x: 420, y: 150, icon: Radio },
  { id: "hooks", label: "Webhooks", x: 420, y: 240, icon: Webhook },
  { id: "db", label: "Database", x: 600, y: 150, icon: Database, accent: true },
];

const EDGES: [string, string][] = [
  ["client", "api"],
  ["api", "auth"],
  ["api", "rt"],
  ["api", "hooks"],
  ["auth", "db"],
  ["rt", "db"],
  ["hooks", "db"],
];

function nodeById(id: string) {
  return NODES.find((n) => n.id === id)!;
}

export function ArchitectureVisual() {
  return (
    <div className="relative w-full select-none" aria-hidden>
      <svg
        viewBox="0 0 680 300"
        className="h-auto w-full overflow-visible"
        fill="none"
      >
        <defs>
          <linearGradient id="edge-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(201,162,39,0.05)" />
            <stop offset="50%" stopColor="rgba(201,162,39,0.45)" />
            <stop offset="100%" stopColor="rgba(201,162,39,0.05)" />
          </linearGradient>
          <filter id="glow-blur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Edges */}
        {EDGES.map(([from, to], i) => {
          const a = nodeById(from);
          const b = nodeById(to);
          const d = `M ${a.x} ${a.y} C ${(a.x + b.x) / 2} ${a.y}, ${
            (a.x + b.x) / 2
          } ${b.y}, ${b.x} ${b.y}`;
          return (
            <g key={`${from}-${to}`}>
              <path d={d} stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
              <motion.path
                d={d}
                stroke="url(#edge-grad)"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: i * 0.12, ease: "easeOut" }}
              />
              {/* Travelling data pulse */}
              <motion.circle r="3" fill="#E3C766" filter="url(#glow-blur)">
                <animateMotion
                  dur={`${2.4 + (i % 3) * 0.5}s`}
                  begin={`${i * 0.35}s`}
                  repeatCount="indefinite"
                  path={d}
                  keyPoints="0;1"
                  keyTimes="0;1"
                  calcMode="linear"
                />
              </motion.circle>
            </g>
          );
        })}

        {/* Nodes */}
        {NODES.map((node, i) => {
          const Icon = node.icon;
          return (
            <motion.g
              key={node.id}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.2 + i * 0.1,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <rect
                x={node.x - 30}
                y={node.y - 30}
                width="60"
                height="60"
                rx="16"
                fill={node.accent ? "rgba(201,162,39,0.12)" : "rgba(20,20,20,0.9)"}
                stroke={
                  node.accent ? "rgba(201,162,39,0.5)" : "rgba(255,255,255,0.1)"
                }
                strokeWidth="1.5"
              />
              <foreignObject
                x={node.x - 14}
                y={node.y - 26}
                width="28"
                height="28"
              >
                <div className="flex h-7 w-7 items-center justify-center">
                  <Icon
                    size={20}
                    className={node.accent ? "text-accent-soft" : "text-secondary"}
                    strokeWidth={1.6}
                  />
                </div>
              </foreignObject>
              <text
                x={node.x}
                y={node.y + 20}
                textAnchor="middle"
                className="fill-secondary"
                style={{ fontSize: "8px", fontWeight: 500 }}
              >
                {node.label}
              </text>
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
}
