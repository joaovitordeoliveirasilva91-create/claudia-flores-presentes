import { createFileRoute } from "@tanstack/react-router";
import { Cake, Gem, Gift, Heart, MessageCircleHeart, PartyPopper, SprayCan } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/site/CtaBanner";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { WhatsAppIcon } from "@/components/site/icons";
import { GIFTS, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/presentes")({
  head: () => ({
    meta: [
      { title: "Presentes para Aniversários e Datas Especiais | Claudia Flores" },
      {
        name: "description",
        content:
          "Cestas, balões personalizados, joias, perfumes importados e flores para aniversários, datas especiais e surpresas em Roda Velha – BA.",
      },
      { property: "og:title", content: "Presentes | Claudia Flores e Presentes" },
      { property: "og:description", content: "Ideias de presentes para aniversários, datas especiais e surpresas." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GiftsPage,
});

const EXTRAS = [
  { Icon: Gem, title: "Joias", text: "Colares e peças delicadas para presentear." },
  { Icon: SprayCan, title: "Perfumes importados", text: "Fragrâncias marcantes para completar o mimo." },
  { Icon: PartyPopper, title: "Balões personalizados", text: "Com nome, frase ou a mensagem que você quiser." },
  { Icon: MessageCircleHeart, title: "Cartões escritos", text: "Sua mensagem com uma caligrafia caprichada." },
  { Icon: Heart, title: "Pelúcias & chocolates", text: "Ursinhos e doces que derretem corações." },
  { Icon: Cake, title: "Cestas de café", text: "Frutas, frios e guloseimas para começar o dia." },
];

function GiftsPage() {
  return (
    <>
      <PageHero
        eyebrow="Presentes"
        title={
          <>
            Surpreenda quem <em className="text-primary">você ama</em>
          </>
        }
        description="Combinamos flores, cestas, joias e perfumes em presentes únicos para aniversários, datas especiais e surpresas fora de hora."
        image="/images/cestas-presentes.jpg"
        imageAlt="Cesta de café da manhã com frutas e laço azul"
      >
        <Button asChild variant="whatsapp" size="xl">
          <a href={whatsappLink("Olá! Quero ajuda para escolher um presente. 🎁")} target="_blank" rel="noreferrer">
            <WhatsAppIcon className="!size-5" /> Montar meu presente
          </a>
        </Button>
      </PageHero>

      <section className="mx-auto max-w-6xl space-y-10 px-6 py-24 md:py-32">
        {GIFTS.map((g, i) => (
          <Reveal key={g.title}>
            <article
              className={cn(
                "grid overflow-hidden rounded-[2rem] bg-ivory shadow-soft md:grid-cols-2",
                i % 2 === 1 && "md:[&>*:first-child]:order-2",
              )}
            >
              <div className="img-zoom aspect-[4/3] md:aspect-auto">
                <img src={g.image} alt={g.alt} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-14">
                <p className="eyebrow flex items-center gap-2">
                  <Gift className="size-3.5" /> Ocasião 0{i + 1}
                </p>
                <h2 className="mt-4 text-5xl">{g.title}</h2>
                <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{g.description}</p>
                <div className="mt-8">
                  <Button asChild variant="hero" size="xl">
                    <a href={whatsappLink(g.message)} target="_blank" rel="noreferrer">
                      <WhatsAppIcon className="!size-5" /> Pedir para {g.title.toLowerCase()}
                    </a>
                  </Button>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="bg-sage-soft/60 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Complete o presente"
            title={
              <>
                Pequenos detalhes, <em className="text-sage-deep">grandes emoções</em>
              </>
            }
          />
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {EXTRAS.map(({ Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 80} className="group rounded-[1.5rem] border border-gold/30 bg-ivory p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-petal">
                <span className="flex size-14 items-center justify-center rounded-full bg-blush text-primary transition-colors duration-500 group-hover:bg-gold-gradient group-hover:text-rosewood">
                  <Icon className="size-6" strokeWidth={1.3} />
                </span>
                <h3 className="mt-6 text-3xl">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner message="Olá! Quero montar um presente especial. 🎁" />
    </>
  );
}
