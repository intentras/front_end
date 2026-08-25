import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, GitBranch, Network, Quote, ShieldCheck } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AgentFlowViz } from "@/components/site/AgentFlowViz";
import { ContactSection } from "@/components/site/ContactSection";
import { CookieConsent } from "@/components/site/CookieConsent";
import { Panel } from "@/components/site/Panel";
import { PricingSection } from "@/components/site/PricingSection";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { TickerStrip } from "@/components/site/TickerStrip";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Intentras — The Infrastructure Layer for Enterprise AI Agents" },
      {
        name: "description",
        content:
          "Intentras is enterprise AI agent infrastructure: deploy agents, orchestrate multi-agent workflows, integrate models and enterprise data, and monitor agent operations at scale.",
      },
      {
        property: "og:title",
        content: "Intentras — The Infrastructure Layer for Enterprise AI Agents",
      },
      {
        property: "og:description",
        content:
          "Deploy, orchestrate, monitor and scale enterprise AI agents from a single governed infrastructure layer.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:site_name", content: "Intentras" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Intentras — The Infrastructure Layer for Enterprise AI Agents",
      },
      {
        name: "twitter:description",
        content:
          "Deploy, orchestrate, monitor and scale enterprise AI agents from a single governed infrastructure layer.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Intentras",
          description:
            "Enterprise AI agent infrastructure for deploying, orchestrating and monitoring intelligent agents at scale.",
          url: "/",
        }),
      },
    ],
  }),
  component: Index,
});

const capabilities = [
  {
    icon: "/agent-infrastructure-engine.svg",
    title: "Agent Infrastructure Engine",
    body: "Run agents in managed execution environments with lifecycle controls, resource management, deployment capabilities, and infrastructure designed to support growing workloads.",
  },
  {
    icon: "/agent-orchestration-engine.svg",
    title: "Agent Orchestration Engine",
    body: "Coordinate agents, delegate tasks, route workflows, and manage execution across complex processes so every agent knows what to do and when to do it.",
  },
  {
    icon: "/enterprise-model-integration.svg",
    title: "Enterprise Model Integration",
    body: "Connect and route AI models based on your workload requirements. Manage inference interactions, model selection, and AI workloads without creating another layer of operational complexity.",
  },
  {
    icon: "/tool-data-integration.svg",
    title: "Tool & Data Integration",
    body: "Connect agents to enterprise applications, APIs, databases, knowledge sources, internal tools, and workflow platforms, giving them the context and capabilities needed to take meaningful action.",
  },
  {
    icon: "/agent-operations.svg",
    title: "Agent Operations",
    body: "Monitor active agents, workflow progress, model usage, execution performance, response activity, and operational analytics from a centralized control layer.",
  },
  {
    icon: "/governed-reliable.svg",
    title: "Governed & Reliable",
    body: "Keep agent execution structured, observable, and dependable with infrastructure health monitoring, operational controls, and governance built into the foundation.",
  },
];

const flow = [
  "Enterprise Data & Tools",
  "AI Models",
  "Agent Runtime",
  "Multi-Agent Orchestration",
  "Enterprise Workflows",
];

const audience = [
  "Enterprise AI teams",
  "AI platform engineering",
  "MLOps teams",
  "Software engineering",
  "Enterprise IT",
  "Automation teams",
  "AI product teams",
  "Agentic AI adopters",
];

const trust = [
  {
    icon: "/isolated-execution.svg",
    title: "Isolated Execution",
    body: "Run agents in controlled environments with scoped credentials and permission based tool access, reducing unnecessary exposure while keeping execution focused.",
  },
  {
    icon: "/enterprise-access-control.svg",
    title: "Enterprise Access Control",
    body: "Support SSO, role-based access, and granular policies across agents, models, tools, and workflows.",
  },
  {
    icon: "/full-audit-trail.svg",
    title: "Full Audit Trail",
    body: "Maintain detailed execution records across agent decisions, tool interactions, model calls, and workflow activity for greater visibility and accountability.",
  },
  {
    icon: "/deploy-anywhere.svg",
    title: "Deploy Business",
    body: "Support managed cloud, private VPC, or dedicated enterprise deployments with options designed around organizational and data-residency requirements.",
  },
  {
    icon: "/governed-by-design.svg",
    title: "Governed by Design",
    body: "Apply guardrails, approval gates, and humans in the loop checkpoints where sensitive actions require additional oversight.",
  },
  {
    icon: "/operational-slas.svg",
    title: "Operational Reliability",
    body: "Monitor system health, manage capacity, and support failover routing to help production agent workloads remain resilient as demand grows.",
  },
];

const gallery = [
  {
    src: "/agent-runtime-infrastructure.jpg",
    title: "Agent runtime infrastructure",
    body: "Elastic execution capacity for thousands of concurrent agents.",
  },
  {
    src: "/reasoning-model-layer.jpg",
    title: "Reasoning & model layer",
    body: "Routed inference across enterprise models and providers.",
  },
  {
    src: "/governed-autonomy.jpg",
    title: "Governed autonomy",
    body: "Autonomous execution with human oversight where it matters.",
  },
  {
    src: "/continuous-observability.jpg",
    title: "Continuous observability",
    body: "Every workflow, decision and latency spike accounted for.",
  },
];

const testimonials = [
  {
    quote:
      "Before Intentras, scaling agents meant stitching together models, tools, workflows, and monitoring ourselves. Now we have a unified infrastructure layer that gives our team visibility and control without slowing experimentation.",
    name: "Tony Dolly",
    role: "AI Platform Lead",
    org: "Enterprise Technology Company",
    avatar: "/testimonial-tony-dolly.jpg",
  },
  {
    quote:
      "The real value isn't having more agents, it's having them work together. Intentras gives us the orchestration layer to coordinate tasks, connect enterprise systems, and manage complex workflows from one place.",
    name: "Jonathan Adams",
    role: "Director of AI Engineering",
    org: "",
    avatar: "/testimonial-jonathan-adams.jpg",
  },
  {
    quote:
      "Intentras gives us the operational foundation we were missing. We can monitor agent activity, manage access, track execution, and scale workloads with much greater confidence. It has changed how we think about deploying agentic AI across the business.",
    name: "Steve Parker",
    role: "Head of Enterprise Automation",
    org: "",
    avatar: "/testimonial-steve-parker.jpg",
  },
];

const faqs = [
  {
    q: "What is Intentras?",
    a: "Intentras is an enterprise AI agent infrastructure platform designed to help organizations deploy, orchestrate, connect, monitor, and scale AI agents across business environments. It provides the infrastructure layer needed to move from individual AI assistants to coordinated, production ready agent systems.",
  },
  {
    q: "Why do enterprises need AI agent infrastructure?",
    a: "Building an AI agent is only one part of the challenge. At enterprise scale, agents need access to models, data, applications, tools, workflows, and operational controls. Intentras brings these components together, making complex agent ecosystems easier to manage, coordinate, and scale.",
  },
  {
    q: "Can Intentras support multiple AI agents working together?",
    a: "Yes. Intentras is designed for multi agent orchestration, allowing organizations to coordinate agents, delegate tasks, route workflows, and manage execution across complex business processes.",
  },
  {
    q: "Can Intentras connect with our existing enterprise systems?",
    a: "Intentras is designed to connect AI agents with the systems your organization already uses, including enterprise applications, APIs, databases, knowledge sources, internal tools, and workflow platforms.",
  },
  {
    q: "How does Intentras help teams monitor AI agents?",
    a: "Intentras provides a centralized operational view of your agent ecosystem. Teams can monitor active agents, workflow execution, model usage, performance, response activity, and infrastructure health to understand what is happening across their AI environment.",
  },
  {
    q: "Is Intentras suitable for enterprise and regulated environments?",
    a: "Intentras is designed with enterprise requirements in mind, including access controls, scoped permissions, execution governance, auditability, deployment flexibility, and operational monitoring. Organizations can choose deployment approaches that align with their infrastructure and governance requirements.",
  },
  {
    q: "Can we start small and scale later?",
    a: "Absolutely. Intentras is designed to support the journey from initial AI pilots to large scale agent operations. Start with a focused workflow, validate the value, and expand into multi agent orchestration and broader enterprise deployments as your needs grow.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main id="main-content">
        {/* Hero */}
        <section
          aria-label="Introduction"
          className="relative min-h-[92vh] overflow-hidden border-b border-border/60"
        >
          <img
            src="/home-hero.jpg"
            alt="Intentras agent infrastructure hero visual"
            width={750}
            height={375}
            decoding="async"
            className="absolute top-0 right-0 h-full w-full object-cover object-right opacity-70 lg:w-3/5"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, oklch(0 0 0) 8%, oklch(0 0 0 / 82%) 45%, transparent 100%)",
            }}
            aria-hidden
          />
          <div className="absolute inset-0 grid-lines opacity-20" aria-hidden />

          <div className="relative mx-auto grid min-h-[92vh] max-w-7xl items-center gap-12 px-5 pt-28 pb-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-3 border border-primary/40 bg-primary/10 px-4 py-1.5">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
                <span className="font-display text-[10px] uppercase tracking-[0.3em] text-primary">
                  Enterprise AI Agent Infrastructure
                </span>
              </div>

              <h1 className="mt-7 text-4xl leading-[1.03] font-bold sm:text-6xl">
                The Infrastructure Layer for{" "}
                <span className="text-primary text-glow">Enterprise AI Agents</span>
              </h1>

              <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
                Intentras provides the infrastructure layer that brings your models, agents, data,
                tools, and workflows together so intelligent systems can operate as one.
              </p>

              <Link
                to="/product"
                className="group mt-9 inline-flex items-center gap-3 panel-clip bg-primary px-8 py-4 font-display text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-opacity hover:opacity-90"
                style={{ boxShadow: "var(--shadow-glow)" }}
              >
                Agetronix
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-border/70 pt-7">
                {[
                  ["Agents orchestrated", "10k+"],
                  ["Model routes", "Unified"],
                  ["Deployment", "Enterprise"],
                ].map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                      {label}
                    </dt>
                    <dd className="mt-1 font-display text-xl font-bold text-primary">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="w-full">
              <AgentFlowViz />
            </div>
          </div>
        </section>

        <TickerStrip />

        {/* About */}
        <section
          id="about"
          aria-labelledby="about-heading"
          className="relative overflow-hidden py-24"
        >
          <img
            src="/about-section-image.jpg"
            alt="Multi-agent network visualization"
            width={380}
            height={446}
            loading="lazy"
            decoding="async"
            className="absolute inset-y-0 left-0 hidden h-full w-1/2 object-cover object-top opacity-45 lg:block"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(270deg, oklch(0 0 0) 25%, oklch(0 0 0 / 75%) 60%, transparent 100%)",
            }}
            aria-hidden
          />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2">
            <div className="hidden lg:block" />
            <Panel label="About Intentras">
              <h2 id="about-heading" className="text-3xl font-bold sm:text-4xl">
                About <span className="text-primary">Intentras</span>
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Your AI agents shouldn't work in isolation. They need the right models, data, tools,
                applications, and workflows to turn intelligence into action. Intentras brings it
                all together through one unified infrastructure layer, helping you orchestrate
                agents, connect enterprise systems, manage execution, and scale with confidence.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Move beyond scattered AI assistants. Build intelligent systems that work.
              </p>
            </Panel>
          </div>
        </section>

        {/* Problem / Solution */}
        <section className="border-y border-border/60 bg-card/30 py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-6 lg:grid-cols-2">
              <Panel label="The real-world problem">
                <h2 className="text-2xl font-bold sm:text-3xl">
                  AI Gets Smarter. Operations Get Messier.
                </h2>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  Adding more AI agents shouldn't mean adding more complexity. But when every agent
                  depends on different models, tools, data sources, and workflows, your AI ecosystem
                  can quickly become fragmented, difficult to coordinate, and nearly impossible to
                  monitor from one place.
                </p>
                <p className="mt-4 text-sm font-medium text-foreground">
                  More agents. More systems. More moving parts. Less control.
                </p>
              </Panel>
              <Panel label="The Intentras solution">
                <h2 className="text-2xl font-bold sm:text-3xl">
                  One <span className="text-primary">control plane</span>
                </h2>
                <div className="mt-6 grid gap-2 sm:grid-cols-2">
                  {[
                    "AI agent orchestration",
                    "Agent execution infrastructure",
                    "Model integration",
                    "Enterprise tool connectivity",
                    "Workflow management",
                    "Monitoring & analytics",
                  ].map((s) => (
                    <div
                      key={s}
                      className="border border-border/70 bg-secondary/20 px-3 py-3 text-sm text-foreground"
                    >
                      {s}
                    </div>
                  ))}
                </div>
              </Panel>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section
          id="capabilities"
          aria-labelledby="capabilities-heading"
          className="mx-auto max-w-7xl px-5 py-24 sm:px-8"
        >
          <span className="font-display text-[11px] uppercase tracking-[0.32em] text-primary">
            Platform capabilities
          </span>
          <h2 id="capabilities-heading" className="mt-4 max-w-2xl text-3xl font-bold sm:text-4xl">
            Everything Your AI Agents Need to Work at Enterprise Scale
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c) => (
              <div
                key={c.title}
                className="panel-clip group border border-border bg-card/50 p-7 transition-colors hover:border-primary/60"
              >
                <img
                  src={c.icon}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  className="h-9 w-9"
                />
                <h3 className="mt-6 font-display text-lg font-semibold">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Architecture flow */}
        <section className="border-y border-border/60 bg-card/30 py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="flex items-center gap-3">
              <Network className="h-5 w-5 text-primary" />
              <span className="font-display text-[11px] uppercase tracking-[0.32em] text-primary">
                Architecture
              </span>
            </div>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">How Intentras executes</h2>
            <div className="mt-12 flex flex-col items-stretch gap-3 lg:flex-row lg:items-center">
              {flow.map((node, i) => (
                <div key={node} className="flex flex-1 items-center gap-3">
                  <div className="panel-clip flex-1 border border-border bg-background/70 px-5 py-6 text-center">
                    <span className="font-display text-[10px] tracking-[0.22em] text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-2 text-sm font-medium">{node}</p>
                  </div>
                  {i < flow.length - 1 && (
                    <GitBranch className="hidden h-4 w-4 shrink-0 text-primary/70 lg:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision / Mission */}
        <section className="mx-auto grid max-w-7xl gap-6 px-5 py-24 sm:px-8 lg:grid-cols-2">
          <Panel label="Our Vision">
            <h2 className="text-2xl font-bold sm:text-3xl">Make Enterprise AI</h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              We aim to become the infrastructure layer behind that future, bringing{" "}
              <span className="text-primary">intelligence, orchestration, and control</span>{" "}
              together so enterprises can run agentic AI reliably at scale.
            </p>
          </Panel>
          <Panel label="Our Mission">
            <h2 className="text-2xl font-bold sm:text-3xl">Turn AI Potential</h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Our teams have the infrastructure to deploy, coordinate, govern, and scale AI agents
              across real business workflows, transforming AI capabilities into{" "}
              <span className="text-primary">measurable outcomes</span>, greater efficiency, and
              intelligent operations.
            </p>
          </Panel>
        </section>

        {/* Trust / enterprise readiness */}
        <section
          id="trust"
          aria-labelledby="trust-heading"
          className="mx-auto max-w-7xl px-5 py-24 sm:px-8"
        >
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-primary" aria-hidden="true" />
            <span className="font-display text-[11px] uppercase tracking-[0.32em] text-primary">
              Enterprise readiness
            </span>
          </div>
          <h2 id="trust-heading" className="mt-4 max-w-2xl text-3xl font-bold sm:text-4xl">
            AI You Can Scale Without Losing Control
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Intentras is designed for organizations where AI agents must operate responsibly,
            securely, and reliably across critical business environments.
          </p>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {trust.map((t) => (
              <div
                key={t.title}
                className="panel-clip border border-border bg-card/50 p-7 transition-colors hover:border-primary/60"
              >
                <img
                  src={t.icon}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  className="h-8 w-8"
                />
                <h3 className="mt-6 font-display text-base font-semibold">{t.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {["SOC 2 aligned", "SSO / SAML", "Data residency", "Private VPC", "Audit logging"].map(
              (b) => (
                <span
                  key={b}
                  className="border border-primary/30 bg-primary/5 px-4 py-2 font-display text-[10px] uppercase tracking-[0.22em] text-primary"
                >
                  {b}
                </span>
              ),
            )}
          </div>
        </section>

        {/* Visual gallery */}
        <section
          id="gallery"
          aria-labelledby="gallery-heading"
          className="border-y border-border/60 bg-card/30 py-24"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <h2 id="gallery-heading" className="text-3xl font-bold sm:text-4xl">
              Inside the infrastructure
            </h2>
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {gallery.map((g) => (
                <figure
                  key={g.title}
                  className="panel-clip group relative overflow-hidden border border-border"
                >
                  <img
                    src={g.src}
                    alt={g.title}
                    width={1280}
                    height={912}
                    loading="lazy"
                    decoding="async"
                    className="h-64 w-full object-cover opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100 sm:h-72"
                  />
                  <figcaption
                    className="absolute inset-x-0 bottom-0 p-6"
                    style={{
                      background: "linear-gradient(0deg, oklch(0 0 0 / 92%) 10%, transparent 100%)",
                    }}
                  >
                    <h3 className="font-display text-lg font-semibold">{g.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{g.body}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <span className="font-display text-[11px] uppercase tracking-[0.32em] text-primary">
            Enterprise voices
          </span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Why Enterprise Teams Choose Intentras
          </h2>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote
                key={t.name}
                className="panel-clip flex flex-col border border-border bg-card/50 p-7 transition-colors hover:border-primary/60"
              >
                <Quote className="h-5 w-5 text-primary" />
                <p className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                  “{t.quote}”
                </p>
                <footer className="mt-7 flex items-center gap-4 border-t border-border/70 pt-5">
                  <img
                    src={t.avatar}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    className="h-10 w-10 shrink-0 rounded-full border border-primary/40 object-cover"
                  />
                  <div>
                    <p className="font-display text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {t.role}
                      {t.org ? ` · ${t.org}` : ""}
                    </p>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        <PricingSection />

        {/* FAQ */}
        <section
          id="faq"
          aria-labelledby="faq-heading"
          className="border-y border-border/60 bg-card/30 py-24"
        >
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <span className="font-display text-[11px] uppercase tracking-[0.32em] text-primary">
                FAQ
              </span>
              <h2 id="faq-heading" className="mt-4 text-3xl font-bold sm:text-4xl">
                From Questions to Clarity
              </h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`} className="border-border/70">
                  <AccordionTrigger className="text-left font-display text-base hover:text-primary hover:no-underline">
                    <span className="mr-3 text-primary">{String(i + 1).padStart(2, "0")}.</span>
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Audience */}
        <section className="border-y border-border/60 bg-card/30 py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <h2 className="text-3xl font-bold sm:text-4xl">Built for enterprise teams</h2>
            <div className="mt-10 flex flex-wrap gap-3">
              {audience.map((a) => (
                <span
                  key={a}
                  className="border border-border bg-secondary/25 px-5 py-2.5 text-sm text-muted-foreground"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA -> product page */}
        <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <div
            className="panel-clip border border-primary/40 p-10 text-center sm:p-16"
            style={{ background: "var(--gradient-panel)" }}
          >
            <h2 className="mx-auto max-w-2xl text-3xl font-bold sm:text-4xl">
              Your Agents Are Ready. Is Your Infrastructure?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
              Build the foundation that turns enterprise AI into intelligent, scalable action.
            </p>
            <Link
              to="/product"
              className="group mt-9 inline-flex items-center gap-3 panel-clip bg-primary px-8 py-4 font-display text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-opacity hover:opacity-90"
            >
              Agetronix
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </section>

        <ContactSection />
      </main>

      <SiteFooter />
      <CookieConsent />
    </div>
  );
}
