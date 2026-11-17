// Business facts and catalog content for Claudia Flores e Presentes.
// Photos live in /public/images and come from the shop's public Instagram profile.

export const SITE = {
  name: "Claudia Flores e Presentes",
  shortName: "Claudia Flores",
  tagline: "Presentes que marcam momentos",
  instagramHandle: "@claudia_floresepresentes",
  instagramUrl: "https://www.instagram.com/claudia_floresepresentes/",
  tiktokUrl: "https://www.tiktok.com/@claudia_floresepresentes",
  facebookUrl: "https://www.facebook.com/claudiaa",
  linktreeUrl: "https://linktr.ee/claudioneliab",
  catalogUrl: "https://menu.agoramenu.com.br/claudia_flores_e_presidente",
  whatsappNumber: "5577999560588",
  whatsappDisplay: "(77) 99956-0588",
  city: "Roda Velha",
  region: "São Desidério – BA",
  mapsQuery: "Roda Velha, São Desidério - BA",
} as const;

export function whatsappLink(message?: string) {
  const text =
    message ?? "Olá, Claudia! Vim pelo site e gostaria de fazer um pedido. 🌷";
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(SITE.mapsQuery)}&output=embed`;
export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.mapsQuery)}`;

export type Product = {
  slug: string;
  name: string;
  category: string;
  description: string;
  image: string;
  alt: string;
};

export const PRODUCTS: Product[] = [
  {
    slug: "buques",
    name: "Buquês",
    category: "Buquês",
    description:
      "Buquês montados à mão com alstroemérias, rosas e folhagens frescas, embalados com acabamento delicado.",
    image: "/images/arranjos-florais.jpg",
    alt: "Buquê branco e rosa com alstroemérias e rosas, embalado em papel branco",
  },
  {
    slug: "rosas",
    name: "Rosas",
    category: "Rosas",
    description:
      "Rosas amarelas, vermelhas e brancas com mosquitinho — o clássico que nunca sai de moda.",
    image: "/images/buque-rosas.jpg",
    alt: "Rosas amarelas com mosquitinho e alstroemérias brancas",
  },
  {
    slug: "girassois",
    name: "Girassóis",
    category: "Girassóis",
    description:
      "Girassóis que iluminam qualquer dia, combinados com rosas vermelhas, chocolates e laço de cetim.",
    image: "/images/buque-girassois.jpg",
    alt: "Buquê de girassol e rosa vermelha em papel preto com laço vermelho e chocolates",
  },
  {
    slug: "arranjos",
    name: "Arranjos",
    category: "Arranjos",
    description:
      "Arranjos personalizados com fotos, flores do campo e girassóis para eternizar memórias.",
    image: "/images/arranjo-girassois-fotos.jpg",
    alt: "Arranjo com girassóis, rosas vermelhas, alstroemérias e fotos do casal",
  },
  {
    slug: "cestas",
    name: "Cestas",
    category: "Cestas",
    description:
      "Cestas de café da manhã com frutas frescas, frios e doces, preparadas com carinho e laços.",
    image: "/images/cestas-presentes.jpg",
    alt: "Cesta de café da manhã com uvas no coco, morangos e biscoitos",
  },
];

export type GiftOccasion = {
  title: string;
  description: string;
  image: string;
  alt: string;
  message: string;
};

export const GIFTS: GiftOccasion[] = [
  {
    title: "Aniversários",
    description:
      "Cestas de café da manhã, buquês e balões personalizados com o nome de quem você ama.",
    image: "/images/cesta-cafe-manha.jpg",
    alt: "Cesta de café da manhã com frios, uvas e laço azul",
    message: "Olá! Quero montar um presente de aniversário. 🎂",
  },
  {
    title: "Datas especiais",
    description:
      "Dia dos Namorados, Dia das Mães, bodas e formaturas — flores, joias e perfumes para cada ocasião.",
    image: "/images/joias-presente.jpg",
    alt: "Colar dourado delicado com girassol, peça de joia para presente",
    message: "Olá! Quero um presente para uma data especial. 💝",
  },
  {
    title: "Surpresas",
    description:
      "Balões personalizados, cartões escritos à mão e entregas que fazem o coração disparar.",
    image: "/images/balao-personalizado.jpg",
    alt: "Balão transparente personalizado com nome em letras azuis",
    message: "Olá! Quero preparar uma surpresa especial. ✨",
  },
];

export type GalleryCategory = "Buquês" | "Cestas" | "Presentes" | "Ateliê";

export type GalleryItem = {
  src: string;
  alt: string;
  category: GalleryCategory;
  caption: string;
};

export const GALLERY: GalleryItem[] = [
  { src: "/images/buque-girassois.jpg", alt: "Buquê de girassol e rosa vermelha em papel preto", category: "Buquês", caption: "Girassol & rosa vermelha" },
  { src: "/images/arranjos-florais.jpg", alt: "Buquê branco e rosa com alstroemérias", category: "Buquês", caption: "Buquê branco romântico" },
  { src: "/images/cestas-presentes.jpg", alt: "Cesta de café da manhã com frutas", category: "Cestas", caption: "Cesta café da manhã" },
  { src: "/images/buque-rosas.jpg", alt: "Rosas amarelas com mosquitinho", category: "Buquês", caption: "Rosas amarelas" },
  { src: "/images/joias-presente.jpg", alt: "Colar dourado com pingentes delicados", category: "Presentes", caption: "Joias para presentear" },
  { src: "/images/vasos-flores.jpg", alt: "Cliente segurando vasos de flores na loja", category: "Ateliê", caption: "Vasos floridos" },
  { src: "/images/cesta-cafe-manha.jpg", alt: "Cesta com frios, uvas e laço azul", category: "Cestas", caption: "Cesta com frios" },
  { src: "/images/arranjo-girassois-fotos.jpg", alt: "Arranjo com girassóis e fotos", category: "Buquês", caption: "Arranjo com fotos" },
  { src: "/images/balao-personalizado.jpg", alt: "Balão personalizado com nome", category: "Presentes", caption: "Balão personalizado" },
  { src: "/images/atelie-arranjo.jpg", alt: "Florista no ateliê com arranjo de girassóis e rosas", category: "Ateliê", caption: "No nosso ateliê" },
  { src: "/images/cartao-personalizado.jpg", alt: "Cartão vermelho escrito à mão", category: "Presentes", caption: "Cartões com mensagem" },
  { src: "/images/loja-interior.jpg", alt: "Interior da loja com orquídeas, ursinhos e caixas", category: "Ateliê", caption: "Nossa loja" },
  { src: "/images/atelie-folhagens.jpg", alt: "Mãos preparando folhagens para um arranjo", category: "Ateliê", caption: "Feito à mão" },
];

export const GALLERY_CATEGORIES: ("Todos" | GalleryCategory)[] = [
  "Todos",
  "Buquês",
  "Cestas",
  "Presentes",
  "Ateliê",
];

export const NAV = [
  { to: "/", label: "Início" },
  { to: "/produtos", label: "Produtos" },
  { to: "/galeria", label: "Galeria" },
  { to: "/presentes", label: "Presentes" },
  { to: "/sobre", label: "Sobre nós" },
  { to: "/contato", label: "Contato" },
] as const;
