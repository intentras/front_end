import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  Activity,
  Boxes,
  Cpu,
  Database,
  GitBranch,
  Gauge,
  Plug,
  ShieldCheck,
  Terminal,
} from "lucide-react";

import { Panel } from "@/components/site/Panel";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import agentEye from "@/assets/agent-eye.jpg";

export const Route = createFileRoute("/product")({
  head: () => ({
    meta: [
      { title: "Intentras Platform — Agent Runtime & Orchestration" },
      {
        name: "description",
        content:
          "Inside the Intentras platform: agent runtime, multi-agent orchestration, model operations, enterprise connectivity and the agent operations dashboard.",
      },
      { property: "og:title", content: "Intentras Platform — Agent Runtime & Orchestration" },
      {
        property: "og:description",
        content:
          "Agent runtime, orchestration engine, model operations and enterprise integrations in one control plane.",
      },
    ],
  }),
  component: ProductPage,
});

const inputs = [
  "AI models",
  "Enterprise applications",
  "Business APIs",
  "Databases",
  "Knowledge systems",
  "Internal tools",
  "Workflow platforms",
  "Data sources",
];

const pipeline = [
  "Enterprise data ingestion",
  "Model interaction layer",
  "Agent reasoning engine",
  "Tool integration layer",
  "Multi-agent orchestration",
  "Workflow execution",
  "Monitoring & governance",
];

const metrics = [
  { label: "Active AI agents", value: "1,284", icon: Boxes },
  { label: "Running workflows", value: "342", icon: GitBranch },
  { label: "Task completion", value: "99.2%", icon: Activity },
  { label: "Response latency", value: "184ms", icon: Gauge },
  { label: "Model utilization", value: "71%", icon: Cpu },
  { label: "Infrastructure health", value: "Nominal", icon: ShieldCheck },
];

const docs = [
  "Agent APIs",
  "Agent runtime documentation",
  "Model integration guides",
  "Tool connectivity APIs",
  "Workflow orchestration resources",
];

function ProductPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-border/60 pt-32 pb-20">
        <div className="absolute inset-0 grid-lines opacity-25" aria-hidden />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <span className="font-display text-[11px] uppercase tracking-[0.32em] text-primary">
              The Platform
            </span>
            <h1 className="mt-5 text-4xl leading-[1.05] font-bold sm:text-5xl">
              Agent runtime, orchestration and{" "}
              <span className="text-primary text-glow">model operations</span>
            </h1>
            <p className="mt-5 max-w-xl text-muted-foreground">
              Intentras unifies agent execution, model routing, enterprise connectivity and workflow
              orchestration into one governed control plane — with full operational visibility.
            </p>
            <a
              href="https://hub.intentras.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="mt-8 inline-flex items-center gap-3 panel-clip bg-primary px-7 py-4 font-display text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-opacity hover:opacity-90"
              style={{ boxShadow: "var(--shadow-glow)" }}
            >
              Open Dashboard
            </a>
          </div>
          <div className="panel-clip relative overflow-hidden border border-border">
            <img
              src={agentEye}
              alt="Robotic eye representing Intentras agent observability"
              width={1280}
              height={912}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Input layer + process */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <Panel label="Widget A · Input Layer">
            <h2 className="text-2xl font-bold">Connect your enterprise surface</h2>
            <div className="mt-6 grid grid-cols-2 gap-2">
              {inputs.map((i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 border border-border/70 bg-secondary/20 px-3 py-2.5 text-sm text-muted-foreground"
                >
                  <Plug className="h-3.5 w-3.5 shrink-0 text-primary" />
                  {i}
                </div>
              ))}
            </div>
          </Panel>

          <Panel label="Widget B · Infrastructure Process">
            <h2 className="text-2xl font-bold">Agent execution pipeline</h2>
            <ol className="mt-6 space-y-2">
              {pipeline.map((step, idx) => (
                <li
                  key={step}
                  className="flex items-center gap-4 border-l-2 border-primary/60 bg-secondary/15 px-4 py-2.5"
                >
                  <span className="font-display text-xs text-primary">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm">{step}</span>
                </li>
              ))}
            </ol>
          </Panel>
        </div>
      </section>

      {/* Ops dashboard preview */}
      <section className="border-y border-border/60 bg-card/30 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <span className="font-display text-[11px] uppercase tracking-[0.32em] text-primary">
            Widget C · Agent Operations
          </span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Operations command center</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="panel-clip border border-border bg-background/70 p-6 transition-colors hover:border-primary/60"
              >
                <m.icon className="h-5 w-5 text-primary" />
                <p className="mt-5 font-display text-3xl font-bold">{m.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology showcase */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold sm:text-4xl">Technology integration</h2>
            <p className="mt-4 text-muted-foreground">
              Compatible with advanced model and inference technologies used across enterprise AI
              stacks.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {["NeMo", "NIM", "Nemotron", "Triton"].map((t) => (
              <div
                key={t}
                className="panel-clip border border-border bg-secondary/20 px-6 py-5 text-center font-display text-sm font-semibold tracking-wide"
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Docs */}
      <section className="border-t border-border/60 bg-card/30 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-8 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <span className="font-display text-[11px] uppercase tracking-[0.32em] text-primary">
              Coming soon
            </span>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Developer API & documentation</h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Full reference for building on the Intentras agent runtime.
            </p>
          </div>
          <Panel label="Reference">
            <ul className="space-y-2">
              {docs.map((d) => (
                <li
                  key={d}
                  className="flex items-center gap-3 border border-border/70 bg-background/50 px-4 py-3 text-sm text-muted-foreground"
                >
                  <Terminal className="h-4 w-4 shrink-0 text-primary" />
                  {d}
                </li>
              ))}
            </ul>
          </Panel>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div
          className="panel-clip border border-primary/40 p-10 text-center sm:p-14"
          style={{ background: "var(--gradient-panel)" }}
        >
          <Database className="mx-auto h-6 w-6 text-primary" />
          <h2 className="mt-6 text-3xl font-bold sm:text-4xl">Enter the control plane</h2>
          <a
            href="https://hub.intentras.com/"
            target="_blank"
            rel="noreferrer noopener"
            className="mt-8 inline-flex panel-clip bg-primary px-8 py-4 font-display text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-opacity hover:opacity-90"
          >
            Open Dashboard
          </a>
          <p className="mt-6 text-xs text-muted-foreground">
            <Link to="/" className="underline underline-offset-4 hover:text-primary">
              Back to Intentras overview
            </Link>
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
