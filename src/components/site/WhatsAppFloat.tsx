import { whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Fazer pedido pelo WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 md:bottom-8 md:right-8"
    >
      <span className="hidden rounded-full bg-ivory px-4 py-2 text-sm text-rosewood shadow-soft transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 md:block md:translate-x-2 md:opacity-0">
        Faça seu pedido
      </span>
      <span className="relative flex size-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-petal">
        <span className="absolute inset-0 rounded-full bg-whatsapp animate-pulse-ring" />
        <WhatsAppIcon className="relative size-7" />
      </span>
    </a>
  );
}
