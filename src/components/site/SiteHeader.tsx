import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Trust", href: "#trust" },
  { label: "Gallery", href: "#gallery" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

function scrollToSection(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    el.setAttribute("tabindex", "-1");
    (el as HTMLElement).focus({ preventScroll: true });
  }
}

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const lastHash = useRef<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.href.replace("#", "")))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;

    lastHash.current = window.location.hash;

    let ticking = false;
    let settleTimer: ReturnType<typeof setTimeout>;

    const syncHash = (current: string) => {
      if (current === lastHash.current) return;
      lastHash.current = current;
      // Go through the router (not raw history.replaceState) so its internal
      // location state stays in sync — otherwise the router loses track of the
      // hash and later Link clicks (e.g. the logo) resolve against a stale
      // location instead of actually resetting to the top of the page.
      navigate({
        hash: current ? current.slice(1) : "",
        replace: true,
        resetScroll: false,
      });
    };

    const updateActiveSection = () => {
      ticking = false;
      let current = "";
      for (const s of sections) {
        if (s.getBoundingClientRect().top <= 140) current = `#${s.id}`;
      }
      // Nav highlighting stays live and cheap on every frame. The URL hash sync
      // is debounced until scrolling actually settles — otherwise, during a
      // long `scroll-behavior: smooth` animation (e.g. clicking the logo to
      // jump to the top), every section the animation passes through would
      // fight that animation by re-writing the hash to match it mid-flight.
      setActive(current);
      clearTimeout(settleTimer);
      settleTimer = setTimeout(() => syncHash(current), 200);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(updateActiveSection);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      clearTimeout(settleTimer);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [navigate]);

  return (
    <>
      <a
        href="#main-content"
        className={`panel-clip sr-only bg-primary px-5 py-3 font-display text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 ${focusRing}`}
      >
        Skip to main content
      </a>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link
            to="/"
            aria-label="Intentras home"
            className={`group flex items-center gap-3 ${focusRing}`}
          >
            <img src="/logo.svg" alt="Intentras" className="h-14 w-auto sm:h-16" />
            <span className="hidden font-display text-[10px] uppercase tracking-[0.3em] text-muted-foreground lg:block">
              Agent Infrastructure
            </span>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-current={active === link.href ? "true" : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`group relative px-3 py-2 font-display text-[11px] uppercase tracking-[0.18em] transition-colors hover:text-foreground aria-[current]:text-primary ${focusRing} ${
                  active === link.href ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className={`absolute bottom-1 left-3 right-3 h-px bg-primary transition-transform group-hover:scale-x-100 ${
                    active === link.href ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/product"
              className={`panel-clip hidden bg-primary px-5 py-2.5 font-display text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-opacity hover:opacity-90 sm:inline-flex ${focusRing}`}
            >
              Agetronix
            </Link>

            {/* Mobile menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <button
                  type="button"
                  aria-label="Open navigation menu"
                  aria-expanded={open}
                  className={`inline-flex h-11 w-11 items-center justify-center border border-border/70 bg-secondary/20 text-foreground transition-colors hover:border-primary/60 hover:text-primary md:hidden ${focusRing}`}
                >
                  <Menu className="h-5 w-5" aria-hidden="true" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                aria-label="Site navigation"
                className="w-full border-border/60 bg-background/95 backdrop-blur-xl sm:max-w-sm"
              >
                <div className="flex h-full flex-col">
                  <div className="flex items-center justify-between border-b border-border/60 pb-4">
                    <img src="/logo.svg" alt="Intentras" className="h-16 w-auto" />
                  </div>
                  <nav aria-label="Mobile navigation" className="mt-8 flex flex-col gap-2">
                    {navLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        aria-current={active === link.href ? "true" : undefined}
                        onClick={(e) => {
                          e.preventDefault();
                          setOpen(false);
                          setTimeout(() => scrollToSection(link.href), 150);
                        }}
                        className={`panel-clip flex min-h-11 items-center justify-between border border-border/60 bg-card/30 px-5 py-4 font-display text-sm uppercase tracking-[0.18em] transition-colors hover:border-primary/60 hover:bg-primary/10 hover:text-primary ${focusRing} ${
                          active === link.href
                            ? "border-primary/60 text-primary"
                            : "text-foreground"
                        }`}
                      >
                        {link.label}
                        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primary" />
                      </a>
                    ))}
                  </nav>
                  <div className="mt-auto pt-8">
                    <Link
                      to="/product"
                      onClick={() => setOpen(false)}
                      className={`panel-clip block w-full bg-primary px-5 py-3 text-center font-display text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground transition-opacity hover:opacity-90 ${focusRing}`}
                    >
                      Agetronix
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}
