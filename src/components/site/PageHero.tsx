import type { ReactNode } from "react";
import { Flourish, RoseSprig } from "./icons";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  image: string;
  imageAlt: string;
  children?: ReactNode;
};

/** Hero band used at the top of inner pages. */
export function PageHero({ eyebrow, title, description, image, imageAlt, children }: Props) {
  return (
    <section className="bg-hero grain relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      <RoseSprig className="pointer-events-none absolute -left-10 top-24 h-80 w-56 text-gold/40 animate-float-slow" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-[1.15fr_0.85fr]">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-5 text-5xl text-foreground sm:text-6xl md:text-7xl">{title}</h1>
          <Flourish className="mt-6 h-4 w-36 text-gold" />
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">{description}</p>
          {children ? <div className="mt-8 flex flex-wrap gap-3">{children}</div> : null}
        </Reveal>
        <Reveal delay={200} className="mx-auto w-full max-w-xs md:max-w-sm">
          <div className="arch gold-frame shadow-petal">
            <img
              src={image}
              alt={imageAlt}
              className="arch aspect-[3/4] w-full object-cover"
              fetchPriority="high"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
