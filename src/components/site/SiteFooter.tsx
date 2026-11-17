import { Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { NAV, SITE, whatsappLink } from "@/lib/site";
import { FacebookIcon, Flourish, InstagramIcon, TikTokIcon, WhatsAppIcon } from "./icons";
import { Logo } from "./Logo";

export function SiteFooter() {
  const socials = [
    { href: SITE.instagramUrl, label: "Instagram", Icon: InstagramIcon },
    { href: whatsappLink(), label: "WhatsApp", Icon: WhatsAppIcon },
    { href: SITE.tiktokUrl, label: "TikTok", Icon: TikTokIcon },
    { href: SITE.facebookUrl, label: "Facebook", Icon: FacebookIcon },
  ];
  return (
    <footer className="relative overflow-hidden bg-rosewood text-rosewood-foreground">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.3fr_1fr_1fr] md:py-20">
        <div>
          <Logo tone="light" />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-rosewood-foreground/70">
            Flores, cestas, joias e perfumes importados. Presentes que marcam momentos, feitos com carinho em Roda Velha.
          </p>
          <div className="mt-6 flex gap-2">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex size-10 items-center justify-center rounded-full border border-gold/40 text-gold-soft transition-all duration-500 hover:bg-gold-gradient hover:text-rosewood"
              >
                <Icon className="size-[18px]" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="eyebrow !text-gold-soft">Navegue</p>
          <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-rosewood-foreground/75 transition-colors hover:text-gold-soft">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow !text-gold-soft">Fale conosco</p>
          <ul className="mt-5 space-y-3 text-sm text-rosewood-foreground/75">
            <li>
              <a href={whatsappLink()} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-gold-soft">
                <WhatsAppIcon className="size-4 text-gold-soft" /> {SITE.whatsappDisplay}
              </a>
            </li>
            <li>
              <a href={SITE.instagramUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-gold-soft">
                <InstagramIcon className="size-4 text-gold-soft" /> {SITE.instagramHandle}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="size-4 text-gold-soft" /> {SITE.city}, {SITE.region}
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-6">
        <Flourish className="mx-auto h-4 w-40 text-gold/60" />
      </div>
      <p className="px-6 py-8 text-center text-xs tracking-[0.15em] text-rosewood-foreground/50">
        © {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.
      </p>
    </footer>
  );
}
