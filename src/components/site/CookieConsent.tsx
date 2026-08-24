import { useEffect, useState } from "react";

const KEY = "intentras-cookie-consent";

export function CookieConsent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(KEY)) setOpen(true);
  }, []);

  const decide = (value: "accepted" | "essential") => {
    localStorage.setItem(KEY, value);
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4 sm:p-6">
      <div className="panel-clip panel-surface mx-auto flex max-w-4xl flex-col gap-4 border border-border p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div className="flex items-start gap-3">
          <span className="mt-1 h-2 w-2 shrink-0 animate-pulse rounded-full bg-primary" />
          <p className="text-sm text-muted-foreground">
            <span className="font-display font-semibold text-foreground">Cookies.</span> We use
            essential cookies to run Intentras and optional analytics cookies to understand how the
            platform is used. You control what you allow.
          </p>
        </div>
        <div className="flex shrink-0 gap-2">
          <button
            onClick={() => decide("essential")}
            className="panel-clip border border-border bg-secondary/40 px-4 py-2.5 font-display text-xs font-semibold uppercase tracking-[0.16em] text-foreground transition-colors hover:bg-secondary"
          >
            Essential only
          </button>
          <button
            onClick={() => decide("accepted")}
            className="panel-clip bg-primary px-4 py-2.5 font-display text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-opacity hover:opacity-90"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
