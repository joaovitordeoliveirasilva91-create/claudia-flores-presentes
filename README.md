# Welcome to your Lovable project

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS

## Claudia Flores e Presentes

- Fotos reais da loja ficam em `public/images/` (salvas do Instagram público @claudia_floresepresentes) e são usadas pelo caminho `/images/<arquivo>.jpg`.
- Textos, produtos, galeria e contatos ficam em `src/lib/site.ts`.

### Publicar na Vercel

1. Importe o repositório do GitHub na Vercel (Add New → Project).
2. Framework preset: **Other**. Build command: `bun run build` (ou `npm run build`). Deixe o output em branco.
3. Se o build gerar saída para Cloudflare em vez de Vercel, adicione a variável de ambiente `NITRO_PRESET=vercel` e publique de novo.
