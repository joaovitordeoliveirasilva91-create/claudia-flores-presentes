import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  CATALOG,
  CATALOG_CATEGORIES,
  formatPrice,
  whatsappLink,
  type CatalogItem,
} from "@/lib/site";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "./icons";

type Filter = (typeof CATALOG_CATEGORIES)[number];

export function Catalog() {
  const [filter, setFilter] = useState<Filter>("Todos");

  const items = useMemo(
    () => (filter === "Todos" ? CATALOG : CATALOG.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <div>
      <div
        className="-mx-6 mb-12 flex gap-2 overflow-x-auto px-6 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0"
        role="tablist"
        aria-label="Filtrar catálogo"
      >
        {CATALOG_CATEGORIES.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={filter === c}
            onClick={() => setFilter(c)}
            className={cn(
              "shrink-0 rounded-full border px-5 py-2 text-xs uppercase tracking-[0.2em] transition-all duration-500",
              filter === c
                ? "border-primary bg-primary text-primary-foreground shadow-soft"
                : "border-border bg-ivory text-foreground/70 hover:border-gold hover:text-primary",
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <CatalogCard key={item.slug} item={item} />
        ))}
      </div>
    </div>
  );
}

function CatalogCard({ item }: { item: CatalogItem }) {
  const [open, setOpen] = useState(false);
  const message = item.price
    ? `Olá! Tenho interesse no ${item.name} (${formatPrice(item.price)}). Ainda está disponível? 🌸`
    : `Olá! Tenho interesse no ${item.name}. Qual o valor? 🌸`;

  return (
    <article id={item.slug} className="flex flex-col animate-in fade-in duration-700">
      <div className="img-zoom overflow-hidden rounded-[1.75rem] bg-blush shadow-soft">
        <img
          src={item.image}
          alt={item.alt}
          loading="lazy"
          decoding="async"
          className="aspect-[4/5] w-full object-cover"
        />
      </div>
      <div className="mt-5 flex flex-1 flex-col px-1">
        <p className="text-[0.65rem] uppercase tracking-[0.25em] text-gold">{item.category}</p>
        <div className="mt-1 flex items-baseline justify-between gap-4">
          <h3 className="text-3xl leading-tight">{item.name}</h3>
          <p className="shrink-0 font-display text-2xl text-primary">
            {item.price ? (
              formatPrice(item.price)
            ) : (
              <span className="text-base italic">Consulte</span>
            )}
          </p>
        </div>
        <p
          className={cn(
            "mt-3 text-sm leading-relaxed text-muted-foreground",
            !open && "line-clamp-3",
          )}
        >
          {item.description}
        </p>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="mt-1 self-start text-xs uppercase tracking-[0.2em] text-primary/80 hover:text-primary"
        >
          {open ? "Ver menos" : "Ler mais"}
        </button>
        <div className="mt-auto pt-5">
          <Button asChild variant="whatsapp" size="lg" className="w-full">
            <a href={whatsappLink(message)} target="_blank" rel="noreferrer">
              <WhatsAppIcon className="!size-5" /> Pedir pelo WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </article>
  );
}
