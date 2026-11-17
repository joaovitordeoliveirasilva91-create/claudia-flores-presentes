import { createFileRoute } from "@tanstack/react-router";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Gallery } from "@/components/site/Gallery";
import { Reveal } from "@/components/site/Reveal";
import { Flourish } from "@/components/site/icons";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galeria de Fotos — Claudia Flores e Presentes" },
      {
        name: "description",
        content: "Fotos reais dos buquês, cestas, presentes e do ateliê da Claudia Flores em Roda Velha – BA.",
      },
      { property: "og:title", content: "Galeria | Claudia Flores e Presentes" },
      { property: "og:description", content: "Buquês, cestas e presentes reais feitos pela nossa floricultura." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <section className="bg-hero grain pt-32 pb-10 md:pt-40">
        <Reveal className="mx-auto max-w-3xl px-6 text-center">
          <p className="eyebrow">Galeria</p>
          <h1 className="mt-5 text-5xl sm:text-6xl md:text-7xl">
            Momentos que <em className="text-gold">florescem</em>
          </h1>
          <Flourish className="mx-auto mt-6 h-4 w-36 text-gold" />
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Fotografias reais dos nossos trabalhos. Filtre por categoria e toque em uma foto para ampliar.
          </p>
        </Reveal>
      </section>
      <section className="mx-auto max-w-6xl px-6 pb-10 pt-6">
        <Gallery />
      </section>
      <CtaBanner title="Gostou de algum?" text="Envie a foto pelo WhatsApp e preparamos um igualzinho — ou ainda mais especial." />
    </>
  );
}
