import { describe, expect, it } from "vitest";
import { SITE, whatsappLink } from "@/lib/site";

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
