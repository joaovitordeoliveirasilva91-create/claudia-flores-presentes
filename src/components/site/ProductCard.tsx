import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/lib/site";
import { whatsappLink } from "@/lib/site";
import { Reveal } from "./Reveal";

export function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <Reveal delay={index * 90} className="group">
      <a
        href={whatsappLink(`Olá! Tenho interesse em ${product.name.toLowerCase()}. Pode me mostrar as opções? 🌸`)}
        target="_blank"
        rel="noreferrer"
        className="block"
      >
        <div className="img-zoom arch relative aspect-[3/4] bg-blush shadow-soft">
          <img src={product.image} alt={product.alt} loading="lazy" decoding="async" className="h-full w-full object-cover" />
          <div className="bg-veil absolute inset-0 opacity-70 transition-opacity duration-700 group-hover:opacity-90" />
          <span className="absolute left-5 top-[22%] font-sans text-[0.65rem] tracking-[0.3em] text-ivory/80">
            0{index + 1}
          </span>
          <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-3">
            <h3 className="text-2xl text-ivory sm:text-3xl md:text-4xl lg:text-[1.7rem]">{product.name}</h3>
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-ivory/90 text-rosewood transition-all duration-500 group-hover:rotate-45 group-hover:bg-gold-soft">
              <ArrowUpRight className="size-4" />
            </span>
          </div>
        </div>
        <p className="mt-5 px-1 text-sm leading-relaxed text-muted-foreground">{product.description}</p>
        <p className="mt-3 px-1 text-xs uppercase tracking-[0.22em] text-primary">Pedir pelo WhatsApp →</p>
      </a>
    </Reveal>
  );
}
