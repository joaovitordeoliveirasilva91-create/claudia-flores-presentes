import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, HandHeart, Sparkles, Flower2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Gallery } from "@/components/site/Gallery";
import { Marquee } from "@/components/site/Marquee";
import { ProductCard } from "@/components/site/ProductCard";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Flourish, InstagramIcon, RoseSprig, WhatsAppIcon } from "@/components/site/icons";
import { GIFTS, PRODUCTS, SITE, whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Claudia Flores e Presentes — Floricultura em Roda Velha, BA" },
      {
        name: "description",
        content:
          "Buquês, rosas, girassóis, arranjos e cestas feitos à mão em Roda Velha, São Desidério – BA. Faça seu pedido pelo WhatsApp.",
      },
      { property: "og:title", content: "Claudia Flores e Presentes 🎁" },
      {
        property: "og:description",
        content: "Presentes que marcam momentos: flores, cestas, joias e perfumes em Roda Velha – BA.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />

      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeading
          eyebrow="Nossos produtos"
          title={
            <>
              Feitos à mão, <em className="text-primary">para emocionar</em>
            </>
          }
          description="Cada peça é montada sob encomenda com flores selecionadas. Toque em um produto para pedir pelo WhatsApp."
        />
        <div className="mt-16 grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-3 lg:grid-cols-5 lg:gap-x-6">
          {PRODUCTS.map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} />
          ))}
        </div>
        <Reveal className="mt-14 text-center">
          <Button asChild variant="gold" size="xl">
            <Link to="/produtos">
              Conhecer todos os produtos <ArrowRight />
            </Link>
          </Button>
        </Reveal>
      </section>

      <Craft />

      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <SectionHeading
          eyebrow="Presentes"
          title={
            <>
              Para cada ocasião, <em className="text-primary">um carinho</em>
            </>
          }
        />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {GIFTS.map((g, i) => (
            <Reveal key={g.title} delay={i * 120}>
              <Link to="/presentes" className="group block overflow-hidden rounded-[1.75rem] bg-ivory shadow-soft">
                <div className="img-zoom aspect-[4/3]">
                  <img src={g.image} alt={g.alt} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <div className="p-7">
                  <p className="eyebrow">0{i + 1}</p>
                  <h3 className="mt-3 text-3xl">{g.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{g.description}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary">
                    Ver ideias <ArrowRight className="size-3.5 transition-transform duration-500 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-blush-fade py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Galeria"
            title={
              <>
                Trabalhos <em className="text-primary">reais</em>, clientes felizes
              </>
            }
            description="Fotos dos nossos buquês, cestas e presentes, direto do nosso Instagram."
          />
          <div className="mt-14">
            <Gallery limit={8} showFilters={false} />
          </div>
          <Reveal className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild variant="hero" size="xl">
              <Link to="/galeria">
                Ver galeria completa <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="gold" size="xl">
              <a href={SITE.instagramUrl} target="_blank" rel="noreferrer">
                <InstagramIcon className="!size-5" /> {SITE.instagramHandle}
              </a>
            </Button>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}

function Hero() {
  return (
    <section className="bg-hero grain relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      <RoseSprig className="pointer-events-none absolute -left-12 top-40 hidden h-96 w-64 text-gold/35 animate-float-slow md:block" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <p className="eyebrow flex items-center gap-3">
            <span className="gold-rule inline-block w-10" /> Floricultura · {SITE.city} – BA
          </p>
          <h1 className="mt-6 text-[3.4rem] leading-[0.95] text-foreground sm:text-7xl lg:text-[5.6rem]">
            Flores que dizem
            <br />
            <em className="text-gold font-normal">o que o coração</em>
            <br />
            sente.
          </h1>
          <p className="mt-7 max-w-md text-lg leading-relaxed text-muted-foreground">
            Buquês, girassóis, rosas, cestas e presentes montados à mão com carinho — para transformar qualquer dia em
            uma lembrança inesquecível.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="whatsapp" size="xl">
              <a href={whatsappLink()} target="_blank" rel="noreferrer">
                <WhatsAppIcon className="!size-5" /> Fazer meu pedido
              </a>
            </Button>
            <Button asChild variant="gold" size="xl">
              <Link to="/produtos">
                Ver produtos <ArrowRight />
              </Link>
            </Button>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-[0.2em] text-foreground/60">
            <li>✦ Flores selecionadas</li>
            <li>✦ Sob encomenda</li>
            <li>✦ Joias & perfumes</li>
          </ul>
        </Reveal>

        <Reveal delay={200} className="relative mx-auto w-full max-w-[22rem] sm:max-w-md">
          {/* Rotating gold seal */}
          <svg viewBox="0 0 200 200" className="absolute -right-4 -top-8 z-20 size-28 text-gold-deep animate-spin-slow sm:size-32" aria-hidden="true">
            <defs>
              <path id="seal" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
            </defs>
            <circle cx="100" cy="100" r="96" fill="var(--ivory)" stroke="currentColor" strokeWidth="0.8" />
            <text fill="currentColor" fontSize="13" letterSpacing="3.2" style={{ fontFamily: "var(--font-sans)" }}>
              <textPath href="#seal">CLAUDIA FLORES ✦ E PRESENTES ✦ RODA VELHA ✦</textPath>
            </text>
          </svg>
          <span className="absolute -right-4 -top-8 z-20 flex size-28 items-center justify-center sm:size-32" aria-hidden="true">
            <Flower2 className="size-7 text-primary" strokeWidth={1.2} />
          </span>

          <div className="arch gold-frame relative z-10 shadow-petal">
            <img
              src="/images/buque-girassois.jpg"
              alt="Buquê de girassol e rosa vermelha da Claudia Flores, com chocolates e laço vermelho"
              className="arch aspect-[3/4.2] w-full object-cover"
              fetchPriority="high"
            />
          </div>
          <div className="absolute -bottom-8 -left-6 z-20 w-36 overflow-hidden rounded-full border-4 border-ivory shadow-petal sm:-left-12 sm:w-44">
            <img src="/images/buque-rosas.jpg" alt="Rosas amarelas com mosquitinho" className="aspect-square w-full object-cover" />
          </div>
          <div className="absolute -right-3 bottom-16 z-20 rounded-2xl bg-ivory/95 px-4 py-3 shadow-soft backdrop-blur sm:-right-10">
            <p className="font-script text-2xl leading-none text-primary">feito à mão</p>
            <p className="mt-1 text-[0.6rem] uppercase tracking-[0.25em] text-muted-foreground">com amor</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Craft() {
  const points = [
    { Icon: Flower2, title: "Flores selecionadas", text: "Rosas, girassóis e folhagens escolhidos um a um para cada pedido." },
    { Icon: HandHeart, title: "Personalização", text: "Fotos, cartões escritos à mão, balões com nome e o toque que você imaginar." },
    { Icon: Sparkles, title: "Pedido fácil", text: "Fale com a gente pelo WhatsApp e receba sugestões para o seu orçamento." },
  ];
  return (
    <section className="relative overflow-hidden bg-sage-soft/60 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-2">
        <Reveal className="relative mx-auto w-full max-w-sm">
          <img
            src="/images/atelie-folhagens.jpg"
            alt="Mãos preparando folhagens frescas para um arranjo"
            loading="lazy"
            className="aspect-[3/4] w-full rounded-[2rem] object-cover shadow-petal"
          />
          <img
            src="/images/arranjos-florais.jpg"
            alt="Buquê branco e rosa pronto para entrega"
            loading="lazy"
            className="absolute -bottom-10 -right-6 w-40 rounded-[1.5rem] border-4 border-ivory object-cover shadow-petal sm:-right-14 sm:w-48"
          />
        </Reveal>
        <div>
          <SectionHeading
            align="left"
            eyebrow="Nosso ateliê"
            title={
              <>
                Cada detalhe, <em className="text-sage-deep">pensado com carinho</em>
              </>
            }
            description="Do primeiro corte da folhagem ao laço final, tudo é feito à mão para que o seu presente chegue exatamente como você sonhou."
          />
          <div className="mt-10 space-y-6">
            {points.map(({ Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 120} className="flex gap-5">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-gold/60 bg-ivory text-sage-deep">
                  <Icon className="size-5" strokeWidth={1.4} />
                </span>
                <div>
                  <h3 className="text-2xl">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <Flourish className="h-4 w-32 text-gold" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
