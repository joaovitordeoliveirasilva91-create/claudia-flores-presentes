import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { NAV, SITE, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";
import { InstagramIcon, WhatsAppIcon } from "./icons";
import { Logo } from "./Logo";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-500",
        scrolled ? "bg-background/85 py-3 shadow-soft backdrop-blur-xl" : "py-5",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: true }}
              className="nav-link text-[0.82rem] uppercase tracking-[0.18em] text-foreground/80 transition-colors hover:text-primary data-[status=active]:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={SITE.instagramUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="hidden size-10 items-center justify-center rounded-full border border-border text-foreground/80 transition-colors hover:border-gold hover:text-primary sm:flex"
          >
            <InstagramIcon className="size-[18px]" />
          </a>
          <Button asChild variant="hero" className="hidden h-10 px-5 sm:inline-flex">
            <a href={whatsappLink()} target="_blank" rel="noreferrer">
              <WhatsAppIcon /> Pedir agora
            </a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                className="flex size-11 items-center justify-center rounded-full border border-border bg-background/70 text-foreground lg:hidden"
                aria-label="Abrir menu"
              >
                <Menu className="size-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="flex w-[86vw] max-w-sm flex-col bg-hero border-l-gold/40 px-8 pt-16">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <Logo />
              <nav className="mt-10 flex flex-col gap-1" aria-label="Menu móvel">
                {NAV.map((item, i) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    activeOptions={{ exact: true }}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 border-b border-border/70 py-4 font-display text-3xl text-foreground transition-colors hover:text-primary data-[status=active]:text-primary"
                  >
                    <span className="font-sans text-xs tracking-[0.2em] text-gold-deep">0{i + 1}</span>
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-3 pb-10">
                <Button asChild variant="whatsapp" size="xl">
                  <a href={whatsappLink()} target="_blank" rel="noreferrer">
                    <WhatsAppIcon className="!size-5" /> Pedir pelo WhatsApp
                  </a>
                </Button>
                <Button asChild variant="gold" size="xl">
                  <a href={SITE.instagramUrl} target="_blank" rel="noreferrer">
                    <InstagramIcon className="!size-5" /> {SITE.instagramHandle}
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
