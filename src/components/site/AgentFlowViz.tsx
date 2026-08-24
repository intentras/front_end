/**
 * Animated multi-agent architecture visualization.
 * Pure SVG + CSS keyframes defined in src/styles.css (no runtime deps).
 */
const agents = [
  { cx: 300, cy: 60, label: "Agent A" },
  { cx: 400, cy: 140, label: "Agent B" },
  { cx: 300, cy: 220, label: "Agent C" },
  { cx: 200, cy: 140, label: "Agent D" },
];

const sources = [
  { y: 50, label: "Data" },
  { y: 105, label: "Models" },
  { y: 160, label: "Tools" },
  { y: 215, label: "APIs" },
];

export function AgentFlowViz() {
  return (
    <div className="panel-clip animate-float-soft relative w-full border border-border bg-background/55 p-4 backdrop-blur-md">
      <div className="mb-3 flex items-center justify-between px-1">
        <span className="font-display text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          Agent Runtime · Live Topology
        </span>
        <span className="flex items-center gap-2 font-display text-[10px] uppercase tracking-[0.2em] text-primary">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
          Executing
        </span>
      </div>

      <svg
        viewBox="0 0 520 280"
        className="w-full"
        role="img"
        aria-label="Animated diagram of enterprise data and models flowing through the Intentras agent runtime into orchestrated enterprise workflows"
      >
        <defs>
          <radialGradient id="coreGlow">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* enterprise sources */}
        {sources.map((s, i) => (
          <g key={s.label}>
            <rect
              x="10"
              y={s.y - 14}
              width="86"
              height="28"
              fill="var(--secondary)"
              fillOpacity="0.35"
              stroke="var(--border)"
            />
            <text
              x="53"
              y={s.y + 4}
              textAnchor="middle"
              fontSize="11"
              fill="var(--muted-foreground)"
              fontFamily="var(--font-sans)"
            >
              {s.label}
            </text>
            <path
              d={`M96 ${s.y} C 140 ${s.y}, 150 140, 190 140`}
              fill="none"
              stroke="var(--primary)"
              strokeOpacity="0.55"
              strokeWidth="1.4"
              className="animate-flow"
              style={{ animationDelay: `${i * 0.35}s` }}
            />
          </g>
        ))}

        {/* orchestration core */}
        <circle cx="300" cy="140" r="70" fill="url(#coreGlow)" opacity="0.35" />
        <g className="animate-orbit">
          <circle
            cx="300"
            cy="140"
            r="84"
            fill="none"
            stroke="var(--primary)"
            strokeOpacity="0.35"
            strokeDasharray="3 12"
          />
        </g>
        <circle cx="300" cy="140" r="26" fill="var(--card)" stroke="var(--primary)" />
        <text
          x="300"
          y="137"
          textAnchor="middle"
          fontSize="9"
          fill="var(--primary)"
          fontFamily="var(--font-display)"
        >
          CORE
        </text>
        <text
          x="300"
          y="149"
          textAnchor="middle"
          fontSize="7"
          fill="var(--muted-foreground)"
          fontFamily="var(--font-sans)"
        >
          runtime
        </text>

        {/* agents around core */}
        {agents.map((a, i) => (
          <g key={a.label}>
            <line
              x1="300"
              y1="140"
              x2={a.cx}
              y2={a.cy}
              stroke="var(--primary)"
              strokeOpacity="0.5"
              strokeWidth="1.2"
              className="animate-flow"
              style={{ animationDelay: `${i * 0.5}s` }}
            />
            <circle
              cx={a.cx}
              cy={a.cy}
              r="7"
              fill="var(--primary)"
              className="animate-node"
              style={{ animationDelay: `${i * 0.4}s` }}
            />
            <text
              x={a.cx}
              y={a.cy - 14}
              textAnchor="middle"
              fontSize="9"
              fill="var(--muted-foreground)"
              fontFamily="var(--font-sans)"
            >
              {a.label}
            </text>
          </g>
        ))}

        {/* workflow outputs */}
        {[70, 140, 210].map((y, i) => (
          <g key={y}>
            <path
              d={`M410 140 C 445 140, 445 ${y}, 470 ${y}`}
              fill="none"
              stroke="var(--primary)"
              strokeOpacity="0.55"
              strokeWidth="1.4"
              className="animate-flow"
              style={{ animationDelay: `${i * 0.4}s` }}
            />
            <rect
              x="470"
              y={y - 10}
              width="40"
              height="20"
              fill="var(--primary)"
              fillOpacity="0.16"
              stroke="var(--primary)"
              strokeOpacity="0.5"
            />
          </g>
        ))}
        <text
          x="490"
          y="252"
          textAnchor="middle"
          fontSize="9"
          fill="var(--muted-foreground)"
          fontFamily="var(--font-sans)"
        >
          Workflows
        </text>
      </svg>

      <div className="mt-3 grid grid-cols-3 gap-2 border-t border-border/70 pt-3">
        {[
          ["Agents", "1,284"],
          ["Workflows", "342"],
          ["Latency", "184ms"],
        ].map(([k, v]) => (
          <div key={k}>
            <p className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground">{k}</p>
            <p className="font-display text-sm font-bold text-primary">{v}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
