import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Panel({
  children,
  className,
  label,
}: {
  children: ReactNode;
  className?: string;
  label?: string;
}) {
  return (
    <div className={cn("panel-clip panel-surface relative p-px", className)}>
      <div className="panel-clip relative h-full w-full bg-background/60 p-6 sm:p-8">
        <div className="pointer-events-none absolute inset-0 panel-clip border border-border" />
        <div className="mb-4 flex items-center gap-3">
          <span className="flex gap-[3px]" aria-hidden>
            {[0, 1, 2, 3].map((i) => (
              <span key={i} className="h-3 w-[3px] -skew-x-[20deg] bg-primary/70" />
            ))}
          </span>
          {label ? (
            <span className="font-display text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
              {label}
            </span>
          ) : null}
        </div>
        {children}
      </div>
    </div>
  );
}
