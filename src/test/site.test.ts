import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { CATALOG, GALLERY, SITE, formatPrice, whatsappLink } from "@/lib/site";

const publicFile = (src: string) => join(process.cwd(), "public", src);

describe("Catálogo de produtos", () => {
  it("tem um slug diferente para cada produto", () => {
    const slugs = CATALOG.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("aponta só para fotos que existem na pasta public", () => {
    for (const src of [...CATALOG.map((p) => p.image), ...GALLERY.map((g) => g.src)]) {
      expect(existsSync(publicFile(src)), src).toBe(true);
    }
  });

  it("mostra o preço no formato brasileiro", () => {
    expect(formatPrice(199.9).replace(/\s/g, " ")).toBe("R$ 199,90");
  });
});

describe("Contatos da floricultura", () => {
  it("abre o WhatsApp no número (77) 99956-0588", () => {
    expect(whatsappLink()).toMatch(/^https:\/\/wa\.me\/5577999560588\?text=/);
  });

  it("leva a mensagem do pedido junto no link do WhatsApp", () => {
    const url = new URL(whatsappLink("Quero um buquê de girassóis"));
    expect(url.searchParams.get("text")).toBe("Quero um buquê de girassóis");
  });

  it("aponta para o Instagram @claudia_floresepresentes", () => {
    expect(SITE.instagramUrl).toBe("https://www.instagram.com/claudia_floresepresentes/");
  });
});
