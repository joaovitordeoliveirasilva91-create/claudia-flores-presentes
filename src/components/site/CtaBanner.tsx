import { Button } from "@/components/ui/button";
import { SITE, whatsappLink } from "@/lib/site";
import { InstagramIcon, RoseSprig, WhatsAppIcon } from "./icons";
import { Reveal } from "./Reveal";

type Props = {
  title?: string;
  text?: string;
  message?: string;
};

export function CtaBanner({
  title = "Vamos criar algo inesquecível?",
  text = "Conte para nós a ocasião, o estilo e o orçamento. Montamos o presente perfeito, preparado com todo o carinho.",
  message,
}: Props) {
  return (
    <section className="px-4 py-20 md:py-28">
      <Reveal className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-rosewood px-6 py-16 text-center text-rosewood-foreground shadow-petal md:px-16 md:py-20">
        <RoseSprig className="pointer-events-none absolute -right-6 -top-10 h-72 w-48 text-gold/30" />
        <RoseSprig className="pointer-events-none absolute -bottom-16 -left-8 h-72 w-48 rotate-180 text-gold/20" />
        <p className="font-script text-4xl text-gold-soft md:text-5xl">com amor,</p>
        <h2 className="mx-auto mt-2 max-w-2xl text-4xl md:text-6xl">{title}</h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-rosewood-foreground/75 md:text-lg">{text}</p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild variant="whatsapp" size="xl">
            <a href={whatsappLink(message)} target="_blank" rel="noreferrer">
              <WhatsAppIcon className="!size-5" /> Pedir pelo WhatsApp
            </a>
          </Button>
          <Button asChild variant="ivory" size="xl">
            <a href={SITE.instagramUrl} target="_blank" rel="noreferrer">
              <InstagramIcon className="!size-5" /> Ver no Instagram
            </a>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
