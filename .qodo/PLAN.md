# Plano: Apple-like Stack para Agência Digital

## Contexto
O projeto é um Next.js 16 + TailwindCSS v4 + shadcn/ui recém-criado (estado boilerplate). O objetivo é construir uma homepage de agência digital com animações Apple-like (GSAP + ScrollTrigger + Lenis smooth scroll), dark mode toggle, e parallax profissional.

---

## Stack a ser instalado

| Pacote | Versão | Propósito |
|--------|--------|-----------|
| `gsap` | ^3.12 | Motor de animação |
| `@studio-freight/lenis` | ^1.0 | Smooth scroll profissional |
| `next-themes` | ^0.4 | Dark mode toggle |

**Nota:** ScrollTrigger já vem incluso no pacote `gsap`.

---

## Estrutura de diretórios

```
src/
├── app/
│   ├── layout.tsx          # Root layout com Providers (Lenis, ThemeProvider)
│   ├── page.tsx            # Homepage com todas as seções
│   └── globals.css         # Estilos globais + dark mode vars
├── components/
│   ├── ui/                 # shadcn/ui (já existe button.tsx)
│   ├── layout/
│   │   ├── Navbar.tsx      # Navegação fixa com logo + links + theme toggle
│   │   └── Footer.tsx      # Footer da agência
│   ├── sections/
│   │   ├── Hero.tsx        # Hero impactante com GSAP entrance
│   │   ├── Services.tsx    # Serviços com scroll reveal
│   │   ├── Cases.tsx       # Portfolio/cases com parallax
│   │   ├── About.tsx       # Sobre a agência com sticky section
│   │   └── CTA.tsx         # Call to action final
│   └── shared/
│       ├── ThemeToggle.tsx # Botão de alternância dark/light
│       └── SmoothScroll.tsx # Provider do Lenis
├── lib/
│   ├── utils.ts            # cn() utility (já existe)
│   └── animations/
│       ├── gsap-config.ts  # Registro do ScrollTrigger
│       ├── fade-in.ts      # Animação de fade in genérica
│       ├── parallax.ts     # Utilitário de parallax
│       └── sticky.ts       # Utilitário de sticky sections
└── hooks/
    ├── useGsap.ts          # Hook genérico para GSAP em componentes
    └── useScrollProgress.ts # Hook de progresso do scroll
```

---

## Implementação passo a passo

### Passo 1: Instalar dependências
```bash
pnpm add gsap @studio-freight/lenis next-themes
```

### Passo 2: Configurar Lenis Smooth Scroll
- Criar `src/components/shared/SmoothScroll.tsx` como Client Component
- Integrar Lenis com ScrollTrigger.update
- Envolver as children no layout.tsx

### Passo 3: Configurar Dark Mode
- Criar `src/components/shared/ThemeToggle.tsx`
- Usar `next-themes` ThemeProvider no layout
- Atualizar globals.css com variáveis dark mode (já existe parcialmente)

### Passo 4: Criar utilitários de animação
- `gsap-config.ts`: Registrar ScrollTrigger plugin
- `fade-in.ts`: Animação genérica (fromTo com y, opacity)
- `parallax.ts`: Animação com scrub sincronizado ao scroll
- `sticky.ts`: ScrollTrigger.create com pin

### Passo 5: Criar hooks customizados
- `useGsap.ts`: Hook que aceita ref + animação, configura no useEffect
- `useScrollProgress.ts`: Retorna progresso do scroll (0-1) para um elemento

### Passo 6: Construir Navbar
- Logo à esquerda, links ao centro, theme toggle à direita
- Background blur/transparente ao scrollar
- Animação de entrada com GSAP

### Passo 7: Construir seções da homepage
1. **Hero**: Título gigante + subtítulo + CTA, animação de entrada staggered
2. **Services**: Grid de cards com scroll reveal sequencial
3. **Cases**: Grid de projetos com parallax nas imagens
4. **About**: Sticky section com conteúdo animando dentro
5. **CTA**: Seção final com frase de impacto

### Passo 8: Construir Footer
- Links de navegação, redes sociais, copyright

### Passo 9: Montar homepage
- Compor todas as seções em `page.tsx`
- Configurar metadata (title, description)

### Passo 10: Verificar performance
- Rodar `pnpm build` para verificar erros
- Rodar `pnpm dev` e testar animações

---

## Princípios de animação (Apple-like)

1. **Só `transform` e `opacity`** — nunca animar top/left/width
2. **`scrub: true`** no ScrollTrigger para parallax sincronizado
3. **`ease: "power3.out"`** para entradas suaves
4. **Staggered animations** — elementos entram em sequência
5. **Espaço em branco** — tipografia gigante, poucos elementos
6. **Ritmo** — durações entre 0.8s e 1.5s, nada rápido

---

## Arquivos a serem criados/modificados

| Arquivo | Ação |
|---------|------|
| `package.json` | Modificar (adicionar deps) |
| `src/app/layout.tsx` | Modificar (adicionar providers) |
| `src/app/page.tsx` | Modificar (compor seções) |
| `src/app/globals.css` | Modificar (refs dark mode) |
| `src/components/layout/Navbar.tsx` | Criar |
| `src/components/layout/Footer.tsx` | Criar |
| `src/components/sections/Hero.tsx` | Criar |
| `src/components/sections/Services.tsx` | Criar |
| `src/components/sections/Cases.tsx` | Criar |
| `src/components/sections/About.tsx` | Criar |
| `src/components/sections/CTA.tsx` | Criar |
| `src/components/shared/ThemeToggle.tsx` | Criar |
| `src/components/shared/SmoothScroll.tsx` | Criar |
| `src/lib/animations/gsap-config.ts` | Criar |
| `src/lib/animations/fade-in.ts` | Criar |
| `src/lib/animations/parallax.ts` | Criar |
| `src/lib/animations/sticky.ts` | Criar |
| `src/hooks/useGsap.ts` | Criar |
| `src/hooks/useScrollProgress.ts` | Criar |

**Total:** 9 arquivos modificados/criados

---

## Validação

1. `pnpm build` — sem erros de TypeScript
2. `pnpm dev` — site carrega sem erros no console
3. Testar manualmente:
   - Smooth scroll funciona (Lenis)
   - Animações GSAP disparam no scroll
   - Parallax nas imagens dos cases
   - Dark mode toggle funciona
   - Navbar muda estilo ao scrollar
   - Responsivo em mobile
