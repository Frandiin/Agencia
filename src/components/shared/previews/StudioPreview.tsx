import {
  Palette, Sparkles, ArrowRight, Phone, Globe, Zap,
  TrendingUp, MapPin, Mail,
} from "lucide-react";

interface StudioPreviewProps {
  name: string;
  slogan: string;
  color: string;
  proofBadges: string[];
  extras: Record<string, unknown>;
}

export default function StudioPreview({ name, slogan, color, proofBadges, extras }: StudioPreviewProps) {
  const projetos = (extras.projetos as number) || 6;
  const etapas = (extras.etapas as string[]) || [];

  const projetoColors = [
    `${color}30`, `${color}18`, `${color}25`,
    `${color}12`, `${color}22`, `${color}15`,
  ];

  return (
    <div className="@container min-h-full bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">

      {/* ═══ NAVBAR ═══ */}
      <nav className="flex items-center justify-between px-3 py-2 @md:px-6 @md:py-3 @lg:px-10 @lg:py-4 border-b border-gray-200 dark:border-gray-700/50">
        <div className="flex items-center gap-1.5 @md:gap-2 @lg:gap-3">
          <div className="h-6 w-6 @md:h-8 @md:w-8 @lg:h-10 @lg:w-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: color }}>
            <Palette className="h-3 w-3 @md:h-4 @md:w-4 @lg:h-5 @lg:w-5 text-white" />
          </div>
          <span className="text-xs @md:text-sm @lg:text-base font-bold tracking-tight">{name}</span>
        </div>
        <div className="flex items-center gap-2 @md:gap-3 @lg:gap-5">
          <span className="hidden @md:inline text-[10px] @md:text-xs @lg:text-sm text-gray-500 dark:text-gray-400" aria-hidden="true">Portfólio</span>
          <span className="hidden @md:inline text-[10px] @md:text-xs @lg:text-sm text-gray-500 dark:text-gray-400" aria-hidden="true">Serviços</span>
          <span className="hidden @md:inline text-[10px] @md:text-xs @lg:text-sm text-gray-500 dark:text-gray-400" aria-hidden="true">Sobre</span>
          <div className="rounded-full px-2.5 py-1 @md:px-4 @md:py-1.5 @lg:px-5 @lg:py-2 text-[10px] @md:text-xs @lg:text-sm font-semibold text-white" style={{ backgroundColor: color }}>
            Orçamento
          </div>
        </div>
      </nav>

      {/* ═══ HERO ═══ */}
      <div className="relative px-4 @md:px-8 @lg:px-12 pt-8 @md:pt-14 @lg:pt-20 pb-10 @md:pb-16 @lg:pb-24 text-center overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`, backgroundSize: "32px 32px" }} />
        <div className="relative z-10">
          <div className="mb-3 @md:mb-4 @lg:mb-5 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-0.5 @md:px-4 @md:py-1 @lg:px-5 @lg:py-1.5 text-[10px] @md:text-xs @lg:text-sm font-semibold text-white/80">
            <Sparkles className="h-3 w-3 @md:h-4 @md:w-4 @lg:h-5 @lg:w-5" /> Estúdio Criativo
          </div>
          <h1 className="text-xl @md:text-3xl @lg:text-5xl font-bold tracking-tight leading-tight max-w-xs @md:max-w-lg @lg:max-w-2xl mx-auto text-white">
            {slogan || "Transformamos ideias em experiências digitais"}
          </h1>
          <p className="mt-2 @md:mt-3 @lg:mt-4 text-xs @md:text-sm @lg:text-lg text-gray-400 max-w-xs @md:max-w-md @lg:max-w-xl mx-auto">
            Criamos sites, sistemas e marcas que geram resultado. Seu projeto merece um time que entrega.
          </p>
          <div className="mt-4 @md:mt-6 @lg:mt-8 flex items-center justify-center gap-2 @md:gap-3 @lg:gap-4">
            <button className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 @md:px-6 @md:py-3 @lg:px-8 @lg:py-4 text-xs @md:text-sm @lg:text-base font-semibold text-gray-900 dark:text-gray-100 shadow-lg transition-all hover:scale-105">
              Ver Portfólio <ArrowRight className="h-3.5 w-3.5 @md:h-4 @md:w-4 @lg:h-5 @lg:w-5" />
            </button>
            <button className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 @md:px-6 @md:py-3 @lg:px-8 @lg:py-4 text-xs @md:text-sm @lg:text-base font-semibold text-white hover:bg-white/10 transition-all">
              <Phone className="h-3.5 w-3.5 @md:h-4 @md:w-4 @lg:h-5 @lg:w-5" /> Fale Conosco
            </button>
          </div>
        </div>
      </div>

      {/* ═══ STATS ═══ */}
      <div className="grid grid-cols-3 border-b border-gray-200 dark:border-gray-700/50">
        {[
          { num: `${projetos + 40}+`, label: "Projetos entregues" },
          { num: "98%", label: "Clientes satisfeitos" },
          { num: "5+", label: "Anos de experiência" },
        ].map((s, i) => (
          <div key={i} className="px-2 @md:px-4 @lg:px-6 py-3 @md:py-5 @lg:py-6 text-center border-r border-gray-200 dark:border-gray-700/50 last:border-r-0">
            <div className="text-base @md:text-xl @lg:text-3xl font-bold" style={{ color }}>{s.num}</div>
            <div className="text-[9px] @md:text-xs @lg:text-sm text-gray-500 dark:text-gray-400 mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      {/* ═══ PORTFÓLIO ═══ */}
      <div className="px-4 @md:px-8 @lg:px-12 py-5 @md:py-8 @lg:py-12">
        <div className="text-center mb-4 @md:mb-6 @lg:mb-8">
          <span className="text-[10px] @md:text-xs @lg:text-sm font-bold" style={{ color }}>Portfólio</span>
          <h2 className="text-lg @md:text-2xl @lg:text-3xl font-bold tracking-tight mt-1">Nossos Trabalhos</h2>
        </div>
        <div className="grid grid-cols-3 @md:grid-cols-3 @lg:grid-cols-4 gap-2 @md:gap-3 @lg:gap-4">
          <div className="col-span-2 rounded-xl p-3 @md:p-4 @lg:p-6 flex items-end min-h-[60px] @md:min-h-[90px] @lg:min-h-[120px]" style={{ backgroundColor: projetoColors[0] }}>
            <div>
              <div className="text-[9px] @md:text-xs @lg:text-sm font-semibold text-gray-900/80 dark:text-white/80">E-commerce Premium</div>
              <div className="text-[8px] @md:text-[10px] @lg:text-xs text-gray-900/50 dark:text-white/50">Loja Virtual</div>
            </div>
          </div>
          <div className="rounded-xl p-2 @md:p-3 @lg:p-5 flex items-center justify-center min-h-[60px] @md:min-h-[90px] @lg:min-h-[120px]" style={{ backgroundColor: projetoColors[1] }}>
            <div className="text-center">
              <div className="text-[9px] @md:text-xs @lg:text-sm font-semibold text-gray-900/80 dark:text-white/80">App Mobile</div>
              <div className="text-[8px] @md:text-[10px] @lg:text-xs text-gray-900/50 dark:text-white/50">iOS & Android</div>
            </div>
          </div>
          <div className="rounded-xl p-2 @md:p-3 @lg:p-5 flex items-center justify-center min-h-[60px] @md:min-h-[90px] @lg:min-h-[120px]" style={{ backgroundColor: projetoColors[2] }}>
            <div className="text-center">
              <div className="text-[9px] @md:text-xs @lg:text-sm font-semibold text-gray-900/80 dark:text-white/80">SaaS Platform</div>
              <div className="text-[8px] @md:text-[10px] @lg:text-xs text-gray-900/50 dark:text-white/50">Dashboard</div>
            </div>
          </div>
          <div className="col-span-2 rounded-xl p-3 @md:p-4 @lg:p-6 flex items-end min-h-[60px] @md:min-h-[90px] @lg:min-h-[120px]" style={{ backgroundColor: projetoColors[3] }}>
            <div>
              <div className="text-[9px] @md:text-xs @lg:text-sm font-semibold text-gray-900/80 dark:text-white/80">Landpage Corporativa</div>
              <div className="text-[8px] @md:text-[10px] @lg:text-xs text-gray-900/50 dark:text-white/50">Conversão Alta</div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ SERVIÇOS ═══ */}
      <div className="px-4 @md:px-8 @lg:px-12 py-5 @md:py-8 @lg:py-12 bg-gray-50 dark:bg-gray-900/50">
        <div className="text-center mb-4 @md:mb-6 @lg:mb-8">
          <span className="text-[10px] @md:text-xs @lg:text-sm font-bold" style={{ color }}>Serviços</span>
          <h2 className="text-lg @md:text-2xl @lg:text-3xl font-bold tracking-tight mt-1">O que fazemos</h2>
        </div>
        <div className="grid grid-cols-2 @md:grid-cols-3 @lg:grid-cols-4 gap-2 @md:gap-4 @lg:gap-5">
          {[
            { icon: <Globe className="h-4 w-4 @md:h-6 @md:w-6 @lg:h-7 @lg:w-7" />, title: "Sites & Landing Pages", desc: "Design moderno e alta conversão" },
            { icon: <Zap className="h-4 w-4 @md:h-6 @md:w-6 @lg:h-7 @lg:w-7" />, title: "Sistemas sob Medida", desc: "Automatize processos do seu negócio" },
            { icon: <Palette className="h-4 w-4 @md:h-6 @md:w-6 @lg:h-7 @lg:w-7" />, title: "Identidade Visual", desc: "Marca que transmite confiança" },
            { icon: <TrendingUp className="h-4 w-4 @md:h-6 @md:w-6 @lg:h-7 @lg:w-7" />, title: "Tráfego Pago", desc: "Atraia clientes certos" },
          ].map((svc, i) => (
            <div key={i} className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-3 @md:p-4 @lg:p-6">
              <div className="mb-2 h-7 w-7 @md:h-9 @md:w-9 @lg:h-12 @lg:w-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${color}12`, color }}>
                {svc.icon}
              </div>
              <div className="text-[11px] @md:text-sm @lg:text-base font-semibold">{svc.title}</div>
              <div className="text-[9px] @md:text-xs @lg:text-sm text-gray-500 dark:text-gray-400 mt-0.5">{svc.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ═══ PROCESSO ═══ */}
      <div className="px-4 @md:px-8 @lg:px-12 py-5 @md:py-8 @lg:py-12">
        <div className="text-center mb-4 @md:mb-6 @lg:mb-8">
          <span className="text-[10px] @md:text-xs @lg:text-sm font-bold" style={{ color }}>Processo</span>
          <h2 className="text-lg @md:text-2xl @lg:text-3xl font-bold tracking-tight mt-1">Como trabalhamos</h2>
        </div>
        <div className="flex gap-2 @md:gap-4 @lg:gap-8">
          {(etapas.length > 0 ? etapas : ["Briefing", "Design", "Desenvolvimento", "Entrega"]).map((etapa, i) => (
            <div key={i} className="flex-1 text-center">
              <div className="mx-auto mb-1.5 @md:mb-2 @lg:mb-3 h-8 w-8 @md:h-12 @md:w-12 @lg:h-16 @lg:w-16 rounded-full flex items-center justify-center text-xs @md:text-base @lg:text-lg font-bold text-white" style={{ backgroundColor: color }}>
                {i + 1}
              </div>
              <div className="text-[9px] @md:text-xs @lg:text-sm font-semibold">{etapa}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ═══ CTA FINAL ═══ */}
      <div className="px-4 @md:px-8 @lg:px-12 py-6 @md:py-10 @lg:py-14 text-center bg-gradient-to-b from-gray-900 to-gray-800">
        <h2 className="text-lg @md:text-2xl @lg:text-4xl font-bold tracking-tight text-white">Pronto para começar?</h2>
        <p className="mt-1.5 @md:mt-2 @lg:mt-3 text-xs @md:text-sm @lg:text-lg text-gray-400">Vamos transformar sua ideia em realidade</p>
        <button className="mt-3 @md:mt-5 @lg:mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 @md:px-8 @md:py-4 @lg:px-10 @lg:py-5 text-xs @md:text-sm @lg:text-base font-semibold text-gray-900 dark:text-gray-100 shadow-lg">
          <ArrowRight className="h-3.5 w-3.5 @md:h-5 @md:w-5 @lg:h-6 @lg:w-6" /> Pedir Orçamento Grátis
        </button>
      </div>

      {/* ═══ FOOTER ═══ */}
      <footer className="px-4 @md:px-8 @lg:px-12 py-4 @md:py-6 @lg:py-8 border-t border-gray-200 dark:border-gray-700/50">
        <div className="flex flex-col @md:flex-row @md:items-center @md:justify-between @lg:items-start gap-3 @md:gap-6">
          <div>
            <div className="flex items-center gap-2 mb-1.5 @md:mb-2">
              <div className="h-5 w-5 @md:h-7 @md:w-7 @lg:h-8 @lg:w-8 rounded-md flex items-center justify-center" style={{ backgroundColor: color }}>
                <Palette className="h-2.5 w-2.5 @md:h-3.5 @md:w-3.5 @lg:h-4 @lg:w-4 text-white" />
              </div>
              <span className="text-[11px] @md:text-sm @lg:text-base font-bold">{name}</span>
            </div>
            <div className="text-[9px] @md:text-xs @lg:text-sm text-gray-500 dark:text-gray-400">© 2026 {name}. Todos os direitos reservados.</div>
          </div>
          <div className="flex flex-col @md:flex-row @md:items-center gap-1.5 @md:gap-4 @lg:gap-6">
            <div className="flex items-center gap-1 text-[9px] @md:text-xs @lg:text-sm text-gray-500 dark:text-gray-400"><MapPin className="h-3 w-3 @md:h-4 @md:w-4 @lg:h-5 @lg:w-5" /> São Paulo, SP</div>
            <div className="flex items-center gap-1 text-[9px] @md:text-xs @lg:text-sm text-gray-500 dark:text-gray-400"><Mail className="h-3 w-3 @md:h-4 @md:w-4 @lg:h-5 @lg:w-5" /> contato@studio.com</div>
            <div className="flex items-center gap-1 text-[9px] @md:text-xs @lg:text-sm text-gray-500 dark:text-gray-400"><Globe className="h-3 w-3 @md:h-4 @md:w-4 @lg:h-5 @lg:w-5" /> @{name.toLowerCase().replace(/\s+/g, "")}</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
