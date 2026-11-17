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

export type CatalogCategory = "Buquês" | "Cestas" | "Pelúcias & Balões";

export type CatalogItem = {
  slug: string;
  name: string;
  category: CatalogCategory;
  /** Preço em reais; null = "Consulte o valor". */
  price: number | null;
  description: string;
  image: string;
  alt: string;
};

const cat = (file: string) => `/images/catalogo/${file}.jpg`;

export const CATALOG: CatalogItem[] = [
  // Buquês
  {
    slug: "buque-explosao-de-cores",
    name: "Buquê Explosão de Cores",
    category: "Buquês",
    price: 199.9,
    description:
      "Para quem merece receber muito mais do que flores: merece uma explosão de alegria! Uma combinação vibrante de rosas, gérberas e flores coloridas que transmite energia, carinho e felicidade. É impossível receber uma surpresa dessas sem abrir um sorriso!",
    image: cat("buque-explosao-de-cores"),
    alt: "Buquê colorido com rosas, gérberas e flores variadas em papel verde-claro com laço vermelho",
  },
  {
    slug: "buque-encanto-de-rosas",
    name: "Buquê Encanto de Rosas",
    category: "Buquês",
    price: 199.9,
    description:
      "Um presente para quem deseja demonstrar carinho de uma maneira inesquecível! A combinação de rosas vermelhas, flores delicadas e folhagens cria um arranjo cheio de personalidade e romantismo.",
    image: cat("buque-encanto-de-rosas"),
    alt: "Buquê de rosas vermelhas com alstroemérias amarelas e mosquitinho em papel rosado",
  },
  {
    slug: "buque-encanto-de-rosas-02",
    name: "Buquê Encanto de Rosas 02",
    category: "Buquês",
    price: 199.9,
    description:
      "Um presente para quem deseja demonstrar carinho de uma maneira inesquecível! A combinação de rosas vermelhas, flores delicadas e folhagens cria um arranjo cheio de personalidade e romantismo.",
    image: cat("buque-encanto-de-rosas-02"),
    alt: "Buquê de rosas vermelhas com alstroemérias brancas em papel branco e laço vermelho",
  },
  {
    slug: "buque-encanto-de-rosas-vermelhas",
    name: "Buquê Encanto de Rosas",
    category: "Buquês",
    price: null,
    description:
      "Um presente para quem deseja demonstrar carinho de uma maneira inesquecível! Rosas vermelhas, flores delicadas e folhagens em um arranjo cheio de personalidade e romantismo.",
    image: cat("buque-encanto-de-rosas-vermelhas"),
    alt: "Buquê de rosas vermelhas com tango amarelo e samambaia em papel verde-sálvia",
  },
  {
    slug: "buque-ma-chere",
    name: "Buquê Ma Chère",
    category: "Buquês",
    price: null,
    description:
      "Para quem não tem medo de demonstrar o que sente! Rosas vermelhas em uma apresentação sofisticada, com embalagem preta e vermelha que transmite personalidade, romantismo e intensidade.",
    image: cat("buque-ma-chere"),
    alt: "Buquê de rosas vermelhas com tango amarelo em embalagem preta e vermelha",
  },
  {
    slug: "buque-encanto-especial",
    name: "Buquê Encanto Especial",
    category: "Buquês",
    price: 199.9,
    description:
      "Uma mistura encantadora de cores, delicadeza e romantismo. Rosas vermelhas e alaranjadas se unem às flores brancas, criando uma composição elegante e cheia de vida.",
    image: cat("buque-encanto-especial"),
    alt: "Buquê de rosas vermelhas e laranjas com alstroemérias brancas em papel branco",
  },
  {
    slug: "buque-raio-de-sol",
    name: "Buquê Raio de Sol",
    category: "Buquês",
    price: 199.9,
    description:
      "Um pedacinho de alegria transformado em flores! Girassol, rosas alaranjadas e flores amarelas formam uma combinação radiante, perfeita para iluminar o dia de alguém especial.",
    image: cat("buque-raio-de-sol"),
    alt: "Buquê com girassol, rosas laranjas e alstroemérias amarelas em papel vinho",
  },
  {
    slug: "buque-nossa-historia",
    name: "Buquê Nossa História",
    category: "Buquês",
    price: 234.9,
    description:
      "Um buquê encantador com girassóis, rosas e flores delicadas, acompanhado de fotografias que transformam esse presente em uma lembrança única. Não são apenas flores: são histórias e memórias que vocês construíram juntos.",
    image: cat("buque-nossa-historia"),
    alt: "Buquê de girassóis e rosas vermelhas com fotos do casal presas entre as flores",
  },
  {
    slug: "buque-girassois-da-felicidade",
    name: "Buquê Girassóis da Felicidade",
    category: "Buquês",
    price: 149.9,
    description:
      "Se a intenção é arrancar um sorriso, esse é o presente perfeito! Girassóis exuberantes em uma combinação alegre, moderna e cheia de personalidade. Não presenteie apenas com flores. Presenteie com felicidade!",
    image: cat("buque-girassois-da-felicidade"),
    alt: "Buquê de girassóis com mosquitinho em papel creme",
  },
  {
    slug: "buque-requinte-tropical",
    name: "Buquê Requinte Tropical",
    category: "Buquês",
    price: 189.9,
    description:
      "Uma composição marcante para quem gosta de surpreender com beleza e sofisticação. Rosas vermelhas, flores amarelas e detalhes delicados se encontram em um arranjo que encanta pelos contrastes e pela riqueza de cores.",
    image: cat("buque-requinte-tropical"),
    alt: "Buquê com girassol, gérberas vermelhas, lírios e flores coloridas com laço amarelo",
  },
  {
    slug: "buque-sentimento-unico",
    name: "Buquê Sentimento Único",
    category: "Buquês",
    price: 59.9,
    description:
      "A beleza está nos detalhes! Rosa vermelha combinada com flores delicadas em um contraste clássico e sofisticado. Porque presentear também é uma forma de dizer: você é especial para mim.",
    image: cat("buque-sentimento-unico"),
    alt: "Buquê pequeno com rosa vermelha e alstroemérias em papel vinho com laço vermelho",
  },
  {
    slug: "buque-elegancia",
    name: "Buquê Elegância",
    category: "Buquês",
    price: 59.9,
    description:
      "A beleza está nos detalhes! Rosa cor-de-rosa combinada com flores rosas ou brancas, em um arranjo clássico, delicado e sofisticado. Ideal para aniversários, declarações de amor e agradecimentos.",
    image: cat("buque-elegancia"),
    alt: "Buquê pequeno com rosa cor-de-rosa e flores lilás em papel verde e rosa",
  },
  {
    slug: "buque-ma-jolie",
    name: "Buquê Ma Jolie",
    category: "Buquês",
    price: 189.9,
    description:
      "Delicado, romântico e cheio de personalidade! Rosas em tons suaves, gérberas pink e flores delicadas, em um arranjo que encanta pela beleza e transmite carinho em cada detalhe.",
    image: cat("buque-ma-jolie"),
    alt: "Buquê de rosas cor-de-rosa e gérberas pink em papel rosa com laço",
  },
  {
    slug: "buque-paixao-eterna",
    name: "Buquê Paixão Eterna",
    category: "Buquês",
    price: 199.9,
    description:
      "Existem sentimentos que merecem ser demonstrados em grande estilo. Rosas vermelhas representam paixão e os girassóis acrescentam alegria e elegância. Uma combinação perfeita para declarar seu amor sem dizer uma palavra.",
    image: cat("buque-paixao-eterna"),
    alt: "Buquê de rosas vermelhas e girassóis com tango amarelo em papel verde-sálvia",
  },
  {
    slug: "buque-mabel",
    name: "Buquê Mabel",
    category: "Buquês",
    price: null,
    description:
      "Flores, chocolate e carinho reunidos em um presente inesquecível! Rosas vermelhas e chocolates Ferrero Rocher, pensados para surpreender aquela mulher que merece se sentir única.",
    image: cat("buque-mabel"),
    alt: "Buquê de rosas vermelhas e flores brancas com bombons dourados",
  },
  {
    slug: "buque-doce-encanto",
    name: "Buquê Doce Encanto",
    category: "Buquês",
    price: null,
    description:
      "Delicado, romântico e cheio de personalidade! Rosas em tons suaves, gérberas pink e flores delicadas, criando um arranjo que encanta pela beleza e transmite carinho em cada detalhe.",
    image: cat("buque-doce-encanto"),
    alt: "Buquê de rosas cor-de-rosa e gérberas em papel salmão com laço dourado",
  },
  {
    slug: "buque-margarete",
    name: "Buquê Margarete",
    category: "Buquês",
    price: 99.9,
    description:
      "Um presente que transmite alegria, beleza e delicadeza! Uma composição colorida e elegante, ideal para aniversários, agradecimentos, conquistas ou simplesmente para dizer: lembrei de você!",
    image: cat("buque-margarete"),
    alt: "Buquê com rosas vermelhas, margaridas brancas e alstroemérias laranjas em papel vinho",
  },
  {
    slug: "buque-jardim-encantado",
    name: "Buquê Jardim Encantado",
    category: "Buquês",
    price: 239.9,
    description:
      "Uma combinação vibrante de rosas, lírios e flores coloridas que transmite energia, carinho e felicidade. É impossível receber uma surpresa dessas sem abrir um sorriso!",
    image: cat("buque-jardim-encantado"),
    alt: "Buquê com lírios cor-de-rosa, gérbera, rosas amarelas e alstroemérias em papel preto",
  },
  {
    slug: "buque-helena",
    name: "Buquê Helena",
    category: "Buquês",
    price: 199.9,
    description:
      "Um presente que transmite alegria, beleza e delicadeza! Uma composição elegante, com flores selecionadas para criar uma experiência especial a quem recebe.",
    image: cat("buque-helena"),
    alt: "Buquê de rosas vermelhas e rosadas com alstroemérias brancas em papel verde-claro",
  },
  {
    slug: "buque-dia-de-sol",
    name: "Buquê Dia de Sol",
    category: "Buquês",
    price: 79.9,
    description:
      "Se a intenção é arrancar um sorriso, esse é o presente perfeito! Girassol em uma embalagem azul sofisticada. Uma maneira linda de dizer: desejo que seus dias sejam sempre iluminados!",
    image: cat("buque-dia-de-sol"),
    alt: "Buquê com um girassol, mosquitinho e tango em papel azul com laço azul-claro",
  },
  {
    slug: "buque-brisa-suave",
    name: "Buquê Brisa Suave",
    category: "Buquês",
    price: 199.9,
    description:
      "Rosas brancas, lírios, astromélias e delicadas flores em tons de rosa. Perfeito para celebrar momentos importantes, como a chegada de um bebê: a delicadeza das flores acompanha a beleza de um novo começo.",
    image: cat("buque-brisa-suave"),
    alt: "Buquê branco com rosas brancas, lírios, alstroemérias e cravos rosados",
  },
  {
    slug: "buque-presente-encantado",
    name: "Buquê Presente Encantado",
    category: "Buquês",
    price: 214.9,
    description:
      "Flores e presentes especiais em um só mimo: um girassol, uma rosa vermelha e um conjunto com agenda e caneta. Flores para encantar, uma agenda para planejar sonhos e uma caneta para escrever novas histórias!",
    image: cat("buque-presente-encantado"),
    alt: "Buquê com girassol, rosa vermelha, agenda e caneta em papel preto com laço vermelho",
  },
  {
    slug: "buque-beleza-e-amor",
    name: "Buquê Beleza & Amor",
    category: "Buquês",
    price: null,
    description:
      "Flores, beleza e carinho reunidos em um presente inesquecível! Rosas vermelhas, flores delicadas e produtos de beleza, pensados para surpreender aquela mulher que merece se sentir única.",
    image: cat("buque-beleza-e-amor"),
    alt: "Buquê de rosas vermelhas com produtos de maquiagem em papel preto e rosa",
  },
  {
    slug: "buque-blue",
    name: "Buquê Blue",
    category: "Buquês",
    price: 199.9,
    description:
      "Rosas azuis envolvidas por delicadas flores brancas e folhagens verdes, em uma composição sofisticada e cheia de personalidade. Para alguém extraordinário, um presente fora do comum!",
    image: cat("buque-blue"),
    alt: "Buquê de rosas azuis com mosquitinho e folhagens",
  },
  {
    slug: "buque-amor-em-flor",
    name: "Buquê Amor em Flor",
    category: "Buquês",
    price: 39.9,
    description:
      "Às vezes, uma única rosa é capaz de dizer tudo. Uma rosa vermelha em embalagem elegante, com flores brancas delicadas e laço de cetim. Não é sobre a quantidade de flores, mas sobre a intensidade do sentimento!",
    image: cat("buque-amor-em-flor"),
    alt: "Uma rosa vermelha em embalagem vinho com laço de cetim lilás",
  },
  // Cestas
  {
    slug: "cesta-abraco-de-carinho",
    name: "Cesta Abraço de Carinho",
    category: "Cestas",
    price: 359.9,
    description:
      "Girassóis, um ursinho de pelúcia superfofo e chocolates especiais em uma elegante caixa de presente. Um abraço em forma de presente, com flores para encantar e chocolates para adoçar o momento!",
    image: cat("cesta-abraco-de-carinho"),
    alt: "Caixa LOVE com ursinho branco, girassóis e chocolates com laço dourado",
  },
  {
    slug: "cesta-amo-voce",
    name: "Cesta Amo Você",
    category: "Cestas",
    price: 349.9,
    description:
      "Tem presentes que dizem “eu te amo” antes mesmo de serem abertos! Rosas vermelhas, um ursinho de pelúcia encantador e chocolates especiais. Flores para declarar, chocolates para adoçar e um ursinho para eternizar o carinho.",
    image: cat("cesta-amo-voce"),
    alt: "Caixa vermelha 'amo você' com ursinho marrom, rosas vermelhas e chocolates",
  },
  {
    slug: "cesta-melhores-momentos",
    name: "Cesta Melhores Momentos",
    category: "Cestas",
    price: 289.9,
    description: "Vinho, chocolates finos e flores em uma cesta de madeira com laço vermelho. Perfeita para brindar os melhores momentos a dois.",
    image: cat("cesta-melhores-momentos"),
    alt: "Cesta de madeira com vinho, chocolates e flores rosas com laço vermelho",
  },
  {
    slug: "cesta-amor-perfeito",
    name: "Cesta Amor Perfeito",
    category: "Cestas",
    price: 259.9,
    description: "Cesta com alça, flores em vaso, chocolates e guloseimas, finalizada com laço rosa. Um presente delicado para quem adora um mimo doce.",
    image: cat("cesta-amor-perfeito"),
    alt: "Cesta de alça com kalanchoe rosa, chocolates e balas com laço rosa",
  },
  {
    slug: "cesta-cacau-show",
    name: "Cesta Cacau Show",
    category: "Cestas",
    price: 229.9,
    description: "Ursinho de pelúcia acompanhado de chocolates e mimos em caixa decorada com laço vermelho.",
    image: cat("cesta-cacau-show"),
    alt: "Caixa com ursinho de pelúcia, chocolates e laço vermelho",
  },
  {
    slug: "cesta-trufa-de-amor",
    name: "Cesta Trufa de Amor",
    category: "Cestas",
    price: 198.9,
    description: "Flores rosas em vaso com trufas em uma caixinha de coração e laço de cetim. Doce e delicada na medida certa.",
    image: cat("cesta-trufa-de-amor"),
    alt: "Vaso creme com kalanchoe rosa, caixa de trufas em formato de coração e laço pink",
  },
  {
    slug: "cesta-de-cervejas",
    name: "Cesta de Cervejas",
    category: "Cestas",
    price: 189.9,
    description: "Cervejas, chocolates e petiscos em uma cesta rústica de madeira com laço azul. Ideal para presentear o pai, o namorado ou aquele amigo especial.",
    image: cat("cesta-de-cervejas"),
    alt: "Cesta rústica de madeira com cervejas, chocolates e laço azul",
  },
  {
    slug: "cesta-doce-desejo",
    name: "Cesta Doce Desejo",
    category: "Cestas",
    price: 179.9,
    description: "Flores vermelhas, chocolate e mimos em uma caixa de corações. Um presente cheio de carinho e doçura.",
    image: cat("cesta-doce-desejo"),
    alt: "Caixa redonda de corações com kalanchoe vermelho e barra de chocolate",
  },
  {
    slug: "cesta-carinho",
    name: "Cesta Carinho",
    category: "Cestas",
    price: 179.9,
    description: "Flores vermelhas em vaso acompanhadas de chocolates finos, em um vaso elegante com detalhe dourado.",
    image: cat("cesta-carinho"),
    alt: "Vaso branco e dourado com kalanchoe vermelho e caixas de chocolate",
  },
  // Pelúcias & Balões
  {
    slug: "urso-fizzy-grande",
    name: "Urso Fizzy Grande",
    category: "Pelúcias & Balões",
    price: 399.9,
    description: "Ursinho de pelúcia grande e macio com coração “Amor”. Um abraço que dura para sempre.",
    image: cat("urso-fizzy-grande"),
    alt: "Urso de pelúcia grande creme segurando um coração vermelho escrito Amor",
  },
  {
    slug: "urso-cestinha-amor",
    name: "Urso Cestinha Amor",
    category: "Pelúcias & Balões",
    price: 195,
    description: "Ursinho de pelúcia com cestinha de corações “Amor” e laço vermelho.",
    image: cat("urso-cestinha-amor"),
    alt: "Urso de pelúcia creme com cestinha de corações escrita AMOR e laço vermelho",
  },
  {
    slug: "arranjo-baloes-mesa",
    name: "Arranjo de Balões para Mesa",
    category: "Pelúcias & Balões",
    price: 59.9,
    description: "Arranjo de balões personalizado para decorar a mesa da festa, com o nome e o tema que você escolher.",
    image: cat("arranjo-baloes-mesa"),
    alt: "Arranjo de balões azuis e laranjas com balão transparente personalizado com nome",
  },
  {
    slug: "bubble-personalizado",
    name: "Bubble Personalizado",
    category: "Pelúcias & Balões",
    price: 29.9,
    description: "Balão bubble transparente com confetes, personalizado com nome ou mensagem.",
    image: cat("bubble-personalizado"),
    alt: "Balão bubble transparente escrito Parabéns com balões coloridos e laço lilás",
  },
];

export const CATALOG_CATEGORIES: ("Todos" | CatalogCategory)[] = [
  "Todos",
  "Buquês",
  "Cestas",
  "Pelúcias & Balões",
];

export function formatPrice(price: number) {
  return price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

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
      "Balões personalizados, cartões escritos à mão e mimos que fazem o coração disparar.",
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
  { src: cat("buque-explosao-de-cores"), alt: "Buquê colorido com rosas e gérberas", category: "Buquês", caption: "Explosão de cores" },
  { src: cat("cesta-gerbera-e-mimos"), alt: "Cesta com gérbera rosa, rosas vermelhas, bebidas e biscoitos", category: "Cestas", caption: "Cesta com gérbera e mimos" },
  { src: cat("buque-raio-de-sol"), alt: "Buquê com girassol e rosas laranjas", category: "Buquês", caption: "Raio de sol" },
  { src: cat("baloes-dia-dos-pais"), alt: "Balão personalizado Feliz Dia dos Pais com balões azuis", category: "Presentes", caption: "Balões Dia dos Pais" },
  { src: cat("buque-nossa-historia"), alt: "Buquê de girassóis com fotos do casal", category: "Buquês", caption: "Nossa história" },
  { src: cat("cesta-abraco-de-carinho"), alt: "Caixa com ursinho, girassóis e chocolates", category: "Cestas", caption: "Abraço de carinho" },
  { src: cat("rosa-amarela-unica"), alt: "Rosa amarela com alstroemérias laranjas em papel vinho", category: "Buquês", caption: "Rosa amarela" },
  { src: cat("buque-blue"), alt: "Buquê de rosas azuis com mosquitinho", category: "Buquês", caption: "Rosas azuis" },
  { src: cat("arranjo-baloes-mesa"), alt: "Arranjo de balões personalizado com nome", category: "Presentes", caption: "Balões personalizados" },
  { src: cat("buque-jardim-encantado"), alt: "Buquê com lírios, gérbera e rosas amarelas", category: "Buquês", caption: "Jardim encantado" },
  { src: cat("cesta-melhores-momentos"), alt: "Cesta com vinho, chocolates e flores", category: "Cestas", caption: "Melhores momentos" },
  { src: cat("urso-fizzy-grande"), alt: "Urso de pelúcia grande com coração Amor", category: "Presentes", caption: "Pelúcias" },
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
