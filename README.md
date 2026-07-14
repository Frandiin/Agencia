# Agencia — Landing Page para PMEs

Site institucional de agência digital focada em pequenas e médias empresas. landpages que convertem visitantes em clientes e sistemas sob medida que automatizam processos.

## Funcionalidades

- **Hero animado** — texto revelado palavra por palavra com GSAP + efeito 3D rotateX
- **MagneticButton** — botões que seguem o cursor no hover
- **Contadores animados** — números que contam ao entrar no viewport (CountUp)
- **Cards com flip** — serviços com frente/verso, clique no mobile com botão "Ver mais"
- **Seção Before/After** — wireframes SVG com animação de desenho
- **Preview Generator** — formulário que gera preview ao vivo de landpage com 5 layouts por nicho (Restaurante, Clínica, Loja, Studio, Genérico)
- **FAQ interativo** — accordion com animação
- **WhatsApp FAB** — botão flutuante com link direto
- **Smooth scroll** — lenis + GSAP ScrollTrigger
- **SEO completo** — sitemap, robots.txt, OpenGraph, Twitter Cards, schema.org JSON-LD
- **Acessibilidade** — aria-labelledby, focus-visible, prefers-reduced-motion
- **Dark mode** — toggle com next-themes

## Tech Stack

| Tecnologia | Uso |
|---|---|
| Next.js 16 | Framework React (App Router) |
| TypeScript | Tipagem estática |
| Tailwind CSS 4 | Estilização |
| GSAP | Animações (ScrollTrigger, DrawSVG nativo) |
| lenis | Smooth scroll |
| shadcn/ui | Componentes base |
| Lucide React | Ícones |
| pnpm | Gerenciador de pacotes |

## Tipografia

| Fonte | Papel |
|---|---|
| Space Grotesk | Headings, brand, números de destaque |
| Geist Sans | Body text, botões, badges |

## Estrutura do Projeto

```
src/
├── app/
│   ├── layout.tsx          # Layout raiz, metadata, JSON-LD
│   ├── page.tsx            # Server Component wrapper
│   ├── globals.css         # Tema, variáveis CSS, estilos base
│   └── sitemap.ts          # Sitemap dinâmico
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Navegação fixa + menu mobile
│   │   └── Footer.tsx      # Rodapé com links e contato
│   ├── sections/
│   │   ├── Hero.tsx        # Hero com animação de texto
│   │   ├── Services.tsx    # Cards de serviço com flip
│   │   ├── BeforeAfter.tsx # Comparação antes/depois
│   │   ├── About.tsx       # Sobre a agência
│   │   ├── Results.tsx     # Métricas com CountUp
│   │   ├── HowItWorks.tsx  # Passo a passo
│   │   ├── PreviewGenerator.tsx # Gerador de preview
│   │   ├── Testimonials.tsx # FAQ accordion
│   │   └── CTA.tsx         # Chamada para ação final
│   └── shared/
│       ├── BrowserSvg.tsx   # SVG animado do browser
│       ├── CountUp.tsx      # Contador animado
│       ├── MagneticButton.tsx # Botão magnético
│       ├── SitePreview.tsx  # Preview de landpage
│       ├── WhatsAppFAB.tsx  # Botão flutuante WhatsApp
│       └── Intro.tsx        # Tela de loading
├── hooks/
│   └── useSmoothScroll.ts  # Hook lenis + ScrollTrigger
└── lib/
    └── animations/
        ├── gsap-config.ts   # Registro centralizado do GSAP
        ├── text-split.ts    # Split de texto para animação
        ├── fade-in.ts       # Animação de entrada
        ├── parallax.ts      # Efeito parallax
        └── sticky.ts        # Scroll sticky
```

## Como Rodar

```bash
# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm dev

# Build de produção
pnpm build

# Iniciar produção
pnpm start
```

Acesse [http://localhost:3000](http://localhost:3000).

## Deploy

O projeto está configurado para deploy na Vercel. Basta conectar o repositório GitHub e o deploy será automático.

## Contato

- WhatsApp: (11) 95839-4250
