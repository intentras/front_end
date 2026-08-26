import { useForm, ValidationError } from "@formspree/react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

import { Panel } from "@/components/site/Panel";

const CONTACT_FORM_ID = "myegrldb";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const fieldClass = `w-full border border-border/70 bg-secondary/20 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground ${focusRing}`;

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@intentras.com",
    href: "mailto:contact@intentras.com",
  },
  {
    icon: MapPin,
    label: "Sri Lanka Office",
    value: "No. 12, Union Place, Colombo 02",
  },
  {
    icon: Phone,
    label: "Sri Lanka Phone",
    value: "+94 70 142 2342",
    href: "tel:+94701422342",
  },
  {
    icon: MapPin,
    label: "USA Office",
    value: "741 Riverside Drive, Forest Hills, NY 11375",
  },
  {
    icon: Phone,
    label: "USA Phone",
    value: "+1 332 242 3073",
    href: "tel:+13322423073",
  },
];

export function ContactSection() {
  const [state, handleSubmit, resetForm] = useForm(CONTACT_FORM_ID);

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-y border-border/60 bg-card/30 py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <span className="font-display text-[11px] uppercase tracking-[0.32em] text-primary">
          Let's talk about your AI
        </span>
        <h2 id="contact-heading" className="mt-4 max-w-2xl text-3xl font-bold sm:text-4xl">
          Have an AI Challenge You're Ready to Solve?
        </h2>
        <div className="mt-5 max-w-2xl space-y-3 text-muted-foreground">
          <p>
            Maybe you're moving beyond AI pilots. Maybe your agents need to connect with more
            systems, coordinate complex workflows, or operate reliably at scale.
          </p>
          <p>Whatever you're building, you don't have to figure out the infrastructure alone.</p>
          <p>
            Tell us what you're trying to achieve, where your current setup gets complicated, or
            what you want your AI agents to do next. We'll help you explore a practical path from
            idea to production.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="font-display text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
              Get in touch
            </span>
            <div className="mt-6 space-y-4">
              {contactInfo.map((c) => (
                <div key={c.label} className="flex items-start gap-3">
                  <c.icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {c.label}
                    </p>
                    {c.href ? (
                      <a
                        href={c.href}
                        className={`text-sm text-foreground underline-offset-4 hover:text-primary hover:underline ${focusRing}`}
                      >
                        {c.value}
                      </a>
                    ) : (
                      <p className="text-sm text-foreground">{c.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Panel label="Tell us what you're building">
            {state.succeeded ? (
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Thanks — your message is in. Our team will follow up shortly.
                </p>
                <button
                  type="button"
                  onClick={resetForm}
                  className={`text-xs font-display uppercase tracking-[0.18em] text-primary underline-offset-4 hover:underline ${focusRing}`}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="text-xs uppercase tracking-[0.18em] text-muted-foreground"
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      className={`mt-2 ${fieldClass}`}
                    />
                    <ValidationError
                      prefix="Name"
                      field="name"
                      errors={state.errors}
                      className="mt-1 text-xs text-destructive"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="text-xs uppercase tracking-[0.18em] text-muted-foreground"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      placeholder="Your business email"
                      className={`mt-2 ${fieldClass}`}
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                      className="mt-1 text-xs text-destructive"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="text-xs uppercase tracking-[0.18em] text-muted-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="What are you looking to build, connect, or scale?"
                    className={`mt-2 resize-none ${fieldClass}`}
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="mt-1 text-xs text-destructive"
                  />
                </div>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className={`group inline-flex items-center gap-3 panel-clip bg-primary px-7 py-3.5 font-display text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60 ${focusRing}`}
                >
                  {state.submitting ? "Sending..." : "Talk to Intentras"}
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </button>
              </form>
            )}
          </Panel>
        </div>

        <div className="mt-14 border-t border-border/60 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Your next AI system starts with the right foundation.
          </p>
          <p className="mt-1 font-display text-xs uppercase tracking-[0.24em] text-primary">
            Intentras — Infrastructure for the Agentic Enterprise
          </p>
        </div>
      </div>
    </section>
  );
}
