import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/site/CtaBanner";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { WhatsAppIcon } from "@/components/site/icons";
import { PRODUCTS, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/produtos")({
  head: () => ({
    meta: [
      { title: "Produtos — Buquês, Rosas, Girassóis e Cestas | Claudia Flores" },
      {
        name: "description",
        content:
          "Buquês, rosas, girassóis, arranjos personalizados e cestas de café da manhã em Roda Velha – BA. Encomende pelo WhatsApp.",
      },
      { property: "og:title", content: "Produtos | Claudia Flores e Presentes" },
      { property: "og:description", content: "Buquês, rosas, girassóis, arranjos e cestas feitos à mão." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProductsPage,
});

const EXTRAS = [
  { src: "/images/vasos-flores.jpg", title: "Vasos floridos", text: "Crisântemos e flores em vaso para alegrar a casa por muitos dias." },
  { src: "/images/loja-interior.jpg", title: "Orquídeas & mimos", text: "Orquídeas, ursinhos de pelúcia e caixas de presente na nossa loja." },
];

function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Produtos"
        title={
          <>
            Flores com <em className="text-primary">assinatura</em>
          </>
        }
        description="Conheça nossas criações. Todas são montadas sob encomenda e podem ser personalizadas com cartão, chocolates, pelúcias e muito mais."
        image="/images/arranjos-florais.jpg"
        imageAlt="Buquê branco e rosa da Claudia Flores"
      >
        <Button asChild variant="whatsapp" size="xl">
          <a href={whatsappLink("Olá! Gostaria de ver as opções de produtos e valores. 🌷")} target="_blank" rel="noreferrer">
            <WhatsAppIcon className="!size-5" /> Consultar valores
          </a>
        </Button>
      </PageHero>

      <section className="mx-auto max-w-6xl space-y-24 px-6 py-24 md:space-y-32 md:py-32">
        {PRODUCTS.map((p, i) => (
          <article key={p.slug} id={p.slug} className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <Reveal className={cn("mx-auto w-full max-w-sm", i % 2 === 1 && "md:order-2")}>
              <div className="img-zoom arch gold-frame shadow-petal">
                <img src={p.image} alt={p.alt} loading="lazy" className="arch aspect-[3/4] w-full object-cover" />
              </div>
            </Reveal>
            <Reveal delay={150}>
              <p className="font-display text-7xl italic text-gold/70">0{i + 1}</p>
              <h2 className="mt-2 text-5xl md:text-6xl">{p.name}</h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">{p.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="hero" size="xl">
                  <a
                    href={whatsappLink(`Olá! Quero encomendar ${p.name.toLowerCase()}. Quais opções vocês têm? 🌸`)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <WhatsAppIcon className="!size-5" /> Encomendar {p.name.toLowerCase()}
                  </a>
                </Button>
              </div>
            </Reveal>
          </article>
        ))}
      </section>

      <section className="bg-blush-fade py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="Também temos" title={<>Na nossa <em className="text-primary">loja</em></>} />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {EXTRAS.map((e, i) => (
              <Reveal key={e.title} delay={i * 120} className="img-zoom group relative overflow-hidden rounded-[1.75rem] shadow-soft">
                <img src={e.src} alt={e.title} loading="lazy" className="aspect-[4/5] w-full object-cover" />
                <div className="bg-veil absolute inset-0" />
                <div className="absolute inset-x-7 bottom-7 text-ivory">
                  <h3 className="text-4xl">{e.title}</h3>
                  <p className="mt-2 max-w-xs text-sm text-ivory/80">{e.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner title="Não encontrou o que procura?" text="Montamos o presente do seu jeito. Envie uma mensagem e conte sua ideia." />
    </>
  );
}
