import { useCallback, useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { GALLERY, GALLERY_CATEGORIES, type GalleryItem } from "@/lib/site";
import { cn } from "@/lib/utils";

type Props = { limit?: number; showFilters?: boolean };

export function Gallery({ limit, showFilters = true }: Props) {
  const [filter, setFilter] = useState<(typeof GALLERY_CATEGORIES)[number]>("Todos");
  const [active, setActive] = useState<number | null>(null);

  const items = useMemo<GalleryItem[]>(() => {
    const list = filter === "Todos" ? GALLERY : GALLERY.filter((g) => g.category === filter);
    return limit ? list.slice(0, limit) : list;
  }, [filter, limit]);

  const go = useCallback(
    (dir: 1 | -1) => setActive((i) => (i === null ? i : (i + dir + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, go]);

  const current = active !== null ? items[active] : null;

  return (
    <div>
      {showFilters ? (
        <div className="-mx-6 mb-10 flex gap-2 overflow-x-auto px-6 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0" role="tablist" aria-label="Filtrar galeria">
          {GALLERY_CATEGORIES.map((c) => (
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
      ) : null}

      <div className="columns-2 gap-3 sm:gap-5 md:columns-3 lg:columns-4">
        {items.map((item, i) => (
          <button
            key={item.src}
            onClick={() => setActive(i)}
            className="img-zoom group relative mb-3 block w-full break-inside-avoid rounded-2xl bg-blush text-left shadow-soft animate-in fade-in duration-700 sm:mb-5"
            aria-label={`Ampliar foto: ${item.caption}`}
          >
            <img src={item.src} alt={item.alt} loading="lazy" decoding="async" className="w-full rounded-2xl object-cover" />
            <div className="bg-veil absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute inset-x-4 bottom-4 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-[0.6rem] uppercase tracking-[0.25em] text-gold-soft">{item.category}</p>
              <p className="font-display text-xl text-ivory">{item.caption}</p>
            </div>
          </button>
        ))}
      </div>

      <Dialog open={current !== null} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-[min(92vw,560px)] border-none bg-transparent p-0 shadow-none [&>button]:hidden">
          {current ? (
            <div className="relative">
              <DialogTitle className="sr-only">{current.caption}</DialogTitle>
              <img src={current.src} alt={current.alt} className="max-h-[78vh] w-full rounded-3xl object-contain" />
              <div className="mt-4 flex items-center justify-between gap-4 text-ivory">
                <div>
                  <p className="text-[0.6rem] uppercase tracking-[0.25em] text-gold-soft">{current.category}</p>
                  <p className="font-display text-2xl">{current.caption}</p>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => go(-1)} aria-label="Foto anterior" className="flex size-11 items-center justify-center rounded-full bg-ivory/90 text-rosewood hover:bg-gold-soft">
                    <ChevronLeft className="size-5" />
                  </button>
                  <button onClick={() => go(1)} aria-label="Próxima foto" className="flex size-11 items-center justify-center rounded-full bg-ivory/90 text-rosewood hover:bg-gold-soft">
                    <ChevronRight className="size-5" />
                  </button>
                  <button onClick={() => setActive(null)} aria-label="Fechar" className="flex size-11 items-center justify-center rounded-full bg-ivory/90 text-rosewood hover:bg-gold-soft">
                    <X className="size-5" />
                  </button>
                </div>
              </div>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}
