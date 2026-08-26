import { useForm, ValidationError } from "@formspree/react";
import { Link } from "@tanstack/react-router";
import { Facebook, Linkedin, Send, Twitter, Youtube } from "lucide-react";

import { MediumIcon } from "@/components/site/MediumIcon";

const NEWSLETTER_FORM_ID = "meajyvln";

const socialLinks = [
  { label: "Facebook", href: "https://facebook.com", icon: Facebook },
  { label: "Twitter", href: "https://twitter.com", icon: Twitter },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { label: "YouTube", href: "https://youtube.com", icon: Youtube },
  { label: "Medium", href: "https://medium.com", icon: MediumIcon },
];

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function SiteFooter() {
  const [state, handleSubscribe, resetForm] = useForm(NEWSLETTER_FORM_ID);

  return (
    <footer className="border-t border-border/60 bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.1fr_1fr_1fr]">
        <div>
          <img src="/logo.svg" alt="Intentras" className="h-20 w-auto" />
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            The infrastructure layer for enterprise AI agents.
          </p>
          <div className="mt-6 flex items-center gap-2">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={s.label}
                className={`flex h-9 w-9 items-center justify-center border border-border/70 bg-secondary/20 text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary ${focusRing}`}
              >
                <s.icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <span className="font-display text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
            Newsletter
          </span>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Product updates and agent infrastructure notes, roughly once a month.
          </p>
          {state.succeeded ? (
            <div className="mt-4 flex items-center gap-3">
              <p className="text-sm text-primary">You're subscribed — welcome aboard.</p>
              <button
                type="button"
                onClick={resetForm}
                className={`text-xs font-display uppercase tracking-[0.18em] text-muted-foreground underline-offset-4 hover:text-primary hover:underline ${focusRing}`}
              >
                Subscribe another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="mt-4 flex max-w-sm gap-2">
              <label htmlFor="footer-newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-newsletter-email"
                type="email"
                name="email"
                required
                placeholder="you@company.com"
                className={`h-11 min-w-0 flex-1 border border-border/70 bg-secondary/20 px-3 text-sm text-foreground placeholder:text-muted-foreground ${focusRing}`}
              />
              <button
                type="submit"
                disabled={state.submitting}
                aria-label="Subscribe to newsletter"
                className={`panel-clip flex h-11 w-11 shrink-0 items-center justify-center bg-primary text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60 ${focusRing}`}
              >
                <Send className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>
          )}
          {!state.succeeded ? (
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="mt-1 text-xs text-destructive"
            />
          ) : null}
        </div>

        <div className="flex flex-col gap-3 lg:items-end">
          <span className="font-display text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
            Contact
          </span>
          <a
            href="mailto:contact@intentras.com"
            className={`text-sm text-foreground underline-offset-4 hover:text-primary hover:underline ${focusRing}`}
          >
            contact@intentras.com
          </a>
          <a
            href="#contact"
            className={`text-sm text-muted-foreground underline-offset-4 hover:text-primary hover:underline ${focusRing}`}
          >
            Get in touch →
          </a>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="font-display text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
            © {new Date().getFullYear()} Intentras · Enterprise AI
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy-policy"
              className={`font-display text-[11px] uppercase tracking-[0.28em] text-muted-foreground transition-colors hover:text-primary ${focusRing}`}
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-and-conditions"
              className={`font-display text-[11px] uppercase tracking-[0.28em] text-muted-foreground transition-colors hover:text-primary ${focusRing}`}
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
