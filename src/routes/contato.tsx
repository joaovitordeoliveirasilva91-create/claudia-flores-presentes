import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { Flourish, FacebookIcon, InstagramIcon, TikTokIcon, WhatsAppIcon } from "@/components/site/icons";
import { SITE, mapsEmbedUrl, mapsLink, whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — WhatsApp, Instagram e Localização | Claudia Flores" },
      {
        name: "description",
        content: `Peça flores e presentes pelo WhatsApp ${SITE.whatsappDisplay}. Siga ${SITE.instagramHandle}. Roda Velha, São Desidério – BA.`,
      },
      { property: "og:title", content: "Contato | Claudia Flores e Presentes" },
      { property: "og:description", content: "Fale com a gente pelo WhatsApp, Instagram ou visite nossa loja em Roda Velha – BA." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const OCCASIONS = ["Aniversário", "Namoro / Amor", "Dia das Mães", "Agradecimento", "Surpresa", "Outro"];

function ContactPage() {
  const [name, setName] = useState("");
  const [occasion, setOccasion] = useState(OCCASIONS[0]);
  const [details, setDetails] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const msg = [
      `Olá, Claudia! Meu nome é ${name.trim() || "—"}.`,
      `Ocasião: ${occasion}.`,
      details.trim() ? `Ideia do pedido: ${details.trim()}` : "Gostaria de receber sugestões de presentes.",
    ].join("\n");
    window.open(whatsappLink(msg), "_blank", "noopener,noreferrer");
  };

  const cards = [
    { Icon: WhatsAppIcon, label: "WhatsApp", value: SITE.whatsappDisplay, href: whatsappLink(), cta: "Enviar mensagem" },
    { Icon: InstagramIcon, label: "Instagram", value: SITE.instagramHandle, href: SITE.instagramUrl, cta: "Seguir perfil" },
    { Icon: MapPin, label: "Localização", value: `${SITE.city}, ${SITE.region}`, href: mapsLink, cta: "Abrir no mapa" },
  ];

  return (
    <>
      <section className="bg-hero grain pt-32 pb-16 md:pt-40">
        <Reveal className="mx-auto max-w-3xl px-6 text-center">
          <p className="eyebrow">Contato</p>
          <h1 className="mt-5 text-5xl sm:text-6xl md:text-7xl">
            Vamos <em className="text-gold">conversar?</em>
          </h1>
          <Flourish className="mx-auto mt-6 h-4 w-36 text-gold" />
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Fale com a gente pelo WhatsApp, acompanhe as novidades no Instagram ou venha nos visitar.
          </p>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-6xl gap-5 px-6 md:grid-cols-3">
          {cards.map(({ Icon, label, value, href, cta }, i) => (
            <Reveal key={label} delay={i * 100}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col rounded-[1.75rem] border border-gold/30 bg-ivory p-8 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-petal"
              >
                <span className="flex size-14 items-center justify-center rounded-full bg-blush text-primary transition-colors duration-500 group-hover:bg-gold-gradient group-hover:text-rosewood">
                  <Icon className="size-6" />
                </span>
                <p className="eyebrow mt-6">{label}</p>
                <p className="mt-2 break-words font-display text-2xl sm:text-3xl md:text-xl lg:text-2xl">{value}</p>
                <span className="mt-auto pt-6 text-xs uppercase tracking-[0.2em] text-primary">{cta} →</span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
        <Reveal className="rounded-[2rem] bg-rosewood p-8 text-rosewood-foreground shadow-petal md:p-12">
          <p className="font-script text-4xl text-gold-soft">Monte seu pedido</p>
          <h2 className="mt-2 text-4xl">Conte sua ideia</h2>
          <p className="mt-3 text-sm text-rosewood-foreground/70">
            Preencha e enviaremos sua mensagem pronta pelo WhatsApp.
          </p>
          <form onSubmit={onSubmit} className="mt-8 space-y-5">
            <label className="block">
              <span className="text-xs uppercase tracking-[0.2em] text-gold-soft">Seu nome</span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={60}
                placeholder="Como podemos te chamar?"
                className="mt-2 w-full rounded-xl border border-gold/30 bg-rosewood-foreground/5 px-4 py-3 text-rosewood-foreground placeholder:text-rosewood-foreground/40 focus:border-gold focus:outline-none"
              />
            </label>
            <fieldset>
              <legend className="text-xs uppercase tracking-[0.2em] text-gold-soft">Ocasião</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {OCCASIONS.map((o) => (
                  <button
                    type="button"
                    key={o}
                    onClick={() => setOccasion(o)}
                    aria-pressed={occasion === o}
                    className={
                      occasion === o
                        ? "rounded-full bg-gold-gradient px-4 py-2 text-xs text-rosewood"
                        : "rounded-full border border-gold/30 px-4 py-2 text-xs text-rosewood-foreground/80 hover:border-gold"
                    }
                  >
                    {o}
                  </button>
                ))}
              </div>
            </fieldset>
            <label className="block">
              <span className="text-xs uppercase tracking-[0.2em] text-gold-soft">O que você imagina?</span>
              <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                maxLength={500}
                rows={4}
                placeholder="Ex.: buquê de girassóis com chocolates, para sexta-feira…"
                className="mt-2 w-full resize-none rounded-xl border border-gold/30 bg-rosewood-foreground/5 px-4 py-3 text-rosewood-foreground placeholder:text-rosewood-foreground/40 focus:border-gold focus:outline-none"
              />
            </label>
            <Button type="submit" variant="whatsapp" size="xl" className="w-full">
              <Send /> Enviar pelo WhatsApp
            </Button>
          </form>
        </Reveal>

        <Reveal delay={150} className="flex flex-col gap-6">
          <div className="overflow-hidden rounded-[2rem] border border-gold/30 shadow-soft">
            <iframe
              title={`Mapa — ${SITE.city}, ${SITE.region}`}
              src={mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-80 w-full md:h-96"
            />
          </div>
          <div className="rounded-[2rem] bg-blush p-8">
            <p className="eyebrow">Mais canais</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button asChild variant="gold">
                <a href={SITE.catalogUrl} target="_blank" rel="noreferrer">
                  <BookOpen /> Catálogo online
                </a>
              </Button>
              <Button asChild variant="gold">
                <a href={SITE.tiktokUrl} target="_blank" rel="noreferrer">
                  <TikTokIcon /> TikTok
                </a>
              </Button>
              <Button asChild variant="gold">
                <a href={SITE.facebookUrl} target="_blank" rel="noreferrer">
                  <FacebookIcon /> Facebook
                </a>
              </Button>
              <Button asChild variant="gold">
                <a href={SITE.linktreeUrl} target="_blank" rel="noreferrer">
                  Todos os links
                </a>
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
