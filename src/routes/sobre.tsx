import { createFileRoute } from "@tanstack/react-router";
import { Flower2, HandHeart, Sparkles } from "lucide-react";
import { CtaBanner } from "@/components/site/CtaBanner";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre Nós — Claudia Flores e Presentes, Roda Velha BA" },
      {
        name: "description",
        content: "Conheça a Claudia Flores e Presentes: floricultura e loja de presentes em Roda Velha, São Desidério – BA.",
      },
      { property: "og:title", content: "Sobre nós | Claudia Flores e Presentes" },
      { property: "og:description", content: "Uma floricultura feita de carinho, flores frescas e presentes que marcam momentos." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  { Icon: Flower2, title: "Beleza natural", text: "Flores frescas e folhagens escolhidas com cuidado para cada criação." },
  { Icon: HandHeart, title: "Feito com carinho", text: "Cada buquê e cesta é montado à mão, pensando em quem vai receber." },
  { Icon: Sparkles, title: "Momentos únicos", text: "Ajudamos você a transformar sentimentos em presentes inesquecíveis." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Sobre nós"
        title={
          <>
            Presentes que <em className="text-primary">marcam momentos</em>
          </>
        }
        description={`Em ${SITE.city}, a ${SITE.name} une flores, cestas, joias e perfumes importados para ajudar você a dizer o que sente — do jeito mais bonito.`}
        image="/images/atelie-arranjo.jpg"
        imageAlt="Florista no ateliê da Claudia Flores ao lado de um arranjo de girassóis e rosas"
      />

      <section className="mx-auto grid max-w-6xl items-center gap-16 px-6 py-24 md:grid-cols-2 md:py-32">
        <Reveal className="grid grid-cols-2 gap-4">
          <img src="/images/loja-interior.jpg" alt="Interior da loja com orquídeas e ursinhos" loading="lazy" className="aspect-[3/4] w-full rounded-[1.5rem] object-cover shadow-soft" />
          <img src="/images/vasos-flores.jpg" alt="Cliente com vasos de flores" loading="lazy" className="mt-12 aspect-[3/4] w-full rounded-[1.5rem] object-cover shadow-soft" />
        </Reveal>
        <div>
          <SectionHeading align="left" eyebrow="Nossa história" title={<>Um cantinho <em className="text-primary">cheio de flores</em></>} />
          <Reveal delay={150} className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              A Claudia Flores e Presentes nasceu do amor por flores e da alegria de ver alguém se emocionar ao receber
              um presente feito com dedicação.
            </p>
            <p>
              Na nossa loja em {SITE.city}, você encontra buquês, girassóis, rosas, arranjos personalizados, cestas de
              café da manhã, pelúcias, joias e perfumes importados — tudo pensado para tornar cada data ainda mais
              especial.
            </p>
            <p className="font-script text-4xl text-primary">Com carinho, Claudia</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-blush-fade py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="Nossos valores" title={<>O que nos <em className="text-primary">inspira</em></>} />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {VALUES.map(({ Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 120} className="rounded-[1.75rem] bg-ivory p-9 text-center shadow-soft">
                <span className="mx-auto flex size-16 items-center justify-center rounded-full border border-gold/60 text-gold-deep">
                  <Icon className="size-7" strokeWidth={1.2} />
                </span>
                <h3 className="mt-6 text-3xl">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
