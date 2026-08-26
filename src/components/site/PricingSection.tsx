import { Check, Minus, ArrowRight } from "lucide-react";

const tiers = [
  {
    name: "Pilot",
    price: "$10",
    cadence: "/ month",
    tagline: "Prove the value.",
    blurb:
      "Start with a focused agent deployment, connect essential tools, and validate your first production workflow.",
    audience: "For teams exploring agentic AI.",
    features: ["Up to 25 active agents", "3 workflow pipelines", "Shared runtime", "Email support"],
    highlight: false,
    checkoutUrl: "https://buy.stripe.com/test_dRm14p8iufO95PB8f72ZO00",
  },
  {
    name: "Scale",
    price: "$30",
    cadence: "/ month",
    tagline: "Orchestrate at enterprise scale.",
    blurb:
      "Expand across teams with multi agent workflows, advanced integrations, monitoring, and centralized operational control.",
    audience: "For organizations scaling AI across the business.",
    features: [
      "Up to 500 active agents",
      "Unlimited workflows",
      "Isolated runtime + VPC peering",
      "SSO, RBAC & audit trails",
    ],
    highlight: true,
    checkoutUrl: "https://buy.stripe.com/test_00wfZj0Q20Tfguf8f72ZO01",
  },
  {
    name: "Enterprise",
    price: "$100",
    cadence: "/ month",
    tagline: "Your infrastructure. Your rules.",
    blurb:
      "Deploy Intentras within your preferred environment with dedicated infrastructure, advanced governance, security controls, and enterprise grade support.",
    audience: "",
    features: [
      "Unlimited agents & regions",
      "On-prem / air-gapped install",
      "Dedicated solution architects",
      "24/7 SLA & compliance packs",
    ],
    highlight: false,
    checkoutUrl: "https://buy.stripe.com/test_dRm00l8iueK50vh52V2ZO02",
  },
];

const comparison: { label: string; values: (string | boolean)[] }[] = [
  { label: "Active agents", values: ["25", "500", "Unlimited"] },
  { label: "Workflow pipelines", values: ["3", "Unlimited", "Unlimited"] },
  { label: "Runtime isolation", values: [false, true, true] },
  { label: "SSO / RBAC", values: [false, true, true] },
  { label: "Audit trails & lineage", values: [false, true, true] },
  { label: "Model ops (NeMo, NIM, Triton)", values: ["Managed", "Managed + BYO", "Full control"] },
  { label: "On-prem / air-gapped", values: [false, false, true] },
  { label: "Support", values: ["Email", "Priority", "24/7 SLA"] },
];

function Cell({ value }: { value: string | boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="mx-auto h-4 w-4 text-primary" role="img" aria-label="Included" />
    ) : (
      <Minus
        className="mx-auto h-4 w-4 text-muted-foreground/60"
        role="img"
        aria-label="Not included"
      />
    );
  }
  return <span className="text-sm text-muted-foreground">{value}</span>;
}

export function PricingSection() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="mx-auto max-w-7xl px-5 py-24 sm:px-8"
    >
      <span className="font-display text-[11px] uppercase tracking-[0.32em] text-primary">
        Pricing preview
      </span>
      <h2 id="pricing-heading" className="mt-4 max-w-2xl text-3xl font-bold sm:text-4xl">
        Start Small. Scale Without Friction.
      </h2>
      <p className="mt-4 max-w-xl text-muted-foreground">
        Whether you're testing your first AI agent or orchestrating an enterprise-wide ecosystem,
        Intentras gives you a path to grow without rebuilding your infrastructure.
      </p>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`panel-clip sheen lift bracketed relative flex flex-col border p-8 ${
              t.highlight ? "border-primary/60" : "border-border"
            }`}
            style={{ background: "var(--gradient-panel)" }}
          >
            {t.highlight ? (
              <span className="absolute right-6 top-6 border border-primary/50 bg-primary/15 px-3 py-1 font-display text-[10px] uppercase tracking-[0.2em] text-primary">
                Most adopted
              </span>
            ) : null}
            <h3 className="font-display text-lg uppercase tracking-[0.16em]">{t.name}</h3>
            <div className="mt-5 flex items-end gap-2">
              <span className="font-display text-4xl font-bold text-primary">{t.price}</span>
              <span className="pb-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {t.cadence}
              </span>
            </div>
            <p className="mt-4 text-sm font-semibold text-foreground">{t.tagline}</p>
            <p className="mt-2 text-sm text-muted-foreground">{t.blurb}</p>
            {t.audience ? (
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-primary">{t.audience}</p>
            ) : null}
            <ul className="mt-7 space-y-3">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href={t.checkoutUrl}
              target="_blank"
              rel="noreferrer noopener"
              className={`group mt-9 inline-flex min-h-11 items-center justify-center gap-3 panel-clip px-6 py-3.5 font-display text-xs font-semibold uppercase tracking-[0.18em] transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                t.highlight
                  ? "bg-primary text-primary-foreground"
                  : "border border-border bg-secondary/30 text-foreground"
              }`}
            >
              {"Start with " + t.name}
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
          </div>
        ))}
      </div>

      {/* Comparison table */}
      <div className="panel-clip mt-14 overflow-x-auto border border-border bg-background/50">
        <table className="w-full min-w-[640px] border-collapse text-left">
          <caption className="sr-only">Feature comparison across Intentras pricing tiers</caption>
          <thead>
            <tr className="border-b border-border/70 bg-secondary/20">
              <th className="px-6 py-4 font-display text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Capability
              </th>
              {tiers.map((t) => (
                <th
                  key={t.name}
                  className="px-6 py-4 text-center font-display text-[11px] uppercase tracking-[0.2em] text-primary"
                >
                  {t.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {comparison.map((row) => (
              <tr key={row.label} className="border-b border-border/50 last:border-0">
                <th scope="row" className="px-6 py-4 text-sm font-normal text-foreground">
                  {row.label}
                </th>
                {row.values.map((v, i) => (
                  <td key={i} className="px-6 py-4 text-center">
                    <Cell value={v} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-xs text-muted-foreground">
        Indicative pricing for preview purposes. Final commercials depend on deployment model and
        usage volume.
      </p>
    </section>
  );
}
