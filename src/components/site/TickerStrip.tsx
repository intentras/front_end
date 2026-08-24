const items = [
  "Agent Runtime",
  "Multi-Agent Orchestration",
  "Model Routing",
  "Enterprise Data Fabric",
  "Tool & API Registry",
  "Observability",
  "Guardrails",
  "Audit Lineage",
  "Policy Engine",
];

export function TickerStrip() {
  const loop = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-border/60 bg-card/30 py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
      <div className="flex w-max animate-marquee items-center gap-10 px-6" aria-hidden>
        {loop.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="flex items-center gap-4 font-display text-[11px] whitespace-nowrap uppercase tracking-[0.28em] text-muted-foreground"
          >
            <span className="h-1 w-1 rotate-45 bg-primary" />
            {t}
          </span>
        ))}
      </div>
      <span className="sr-only">Intentras platform capabilities: {items.join(", ")}</span>
    </div>
  );
}
