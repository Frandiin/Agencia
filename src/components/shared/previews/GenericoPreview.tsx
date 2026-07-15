import {
  Briefcase, Zap, ArrowRight, Phone, MapPin, Mail,
  MessageCircle, BadgeCheck, Star,
} from "lucide-react";

interface GenericoPreviewProps {
  name: string;
  slogan: string;
  color: string;
  services: string[];
  proofBadges: string[];
}

export default function GenericoPreview({ name, slogan, color, services, proofBadges }: GenericoPreviewProps) {
  return (
    <div className="@container min-h-full bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">

      {/* ═══ NAVBAR ═══ */}
      <nav className="flex items-center justify-between px-3 py-2 @md:px-6 @md:py-3 @lg:px-10 @lg:py-4 border-b border-gray-200 dark:border-gray-700/50">
        <div className="flex items-center gap-1.5 @md:gap-2 @lg:gap-3">
          <div className="h-6 w-6 @md:h-8 @md:w-8 @lg:h-10 @lg:w-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: color }}>
            <Briefcase className="h-3 w-3 @md:h-4 @md:w-4 @lg:h-5 @lg:w-5 text-white" />
          </div>
          <span className="text-xs @md:text-sm @lg:text-base font-bold tracking-tight">{name}</span>
        </div>
        <div className="flex items-center gap-2 @md:gap-3 @lg:gap-5">
          <span className="hidden @md:inline text-[10px] @md:text-xs @lg:text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 cursor-pointer">Serviços</span>
          <span className="hidden @md:inline text-[10px] @md:text-xs @lg:text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 cursor-pointer">Sobre</span>
          <span className="hidden @md:inline text-[10px] @md:text-xs @lg:text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 cursor-pointer">Contato</span>
          <div className="rounded-full px-2.5 py-1 @md:px-4 @md:py-1.5 @lg:px-5 @lg:py-2 text-[10px] @md:text-xs @lg:text-sm font-semibold text-white" style={{ backgroundColor: color }}>
            Fale Conosco
          </div>
        </div>
      </nav>

      {/* ═══ HERO ═══ */}
      <div className="relative px-4 @md:px-8 @lg:px-12 pt-6 @md:pt-10 @lg:pt-16 pb-8 @md:pb-14 @lg:pb-20 text-center overflow-hidden" style={{ background: `linear-gradient(160deg, ${color}06, ${color}12)` }}>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, ${color} 1px, transparent 0)`, backgroundSize: "24px 24px" }} />
        <div className="relative z-10">
          <div className="mb-2 @md:mb-3 @lg:mb-4 inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 @md:px-4 @md:py-1 @lg:px-5 @lg:py-1.5 text-[10px] @md:text-xs @lg:text-sm font-semibold" style={{ color, backgroundColor: `${color}12` }}>
            <Zap className="h-3 w-3 @md:h-4 @md:w-4 @lg:h-5 @lg:w-5" /> {name}
          </div>
          <h1 className="text-xl @md:text-3xl @lg:text-5xl font-bold tracking-tight leading-tight max-w-xs @md:max-w-lg @lg:max-w-2xl mx-auto">
            {slogan || "Soluções que geram resultado para o seu negócio"}
          </h1>
          <p className="mt-2 @md:mt-3 @lg:mt-4 text-xs @md:text-sm @lg:text-lg text-gray-500 dark:text-gray-400 max-w-xs @md:max-w-md @lg:max-w-xl mx-auto">
            Cada dia sem uma presença digital é uma venda perdida. Vamos mudar isso juntos.
          </p>
          <div className="mt-4 @md:mt-6 @lg:mt-8 flex items-center justify-center gap-2 @md:gap-3 @lg:gap-4">
            <button className="inline-flex items-center gap-2 rounded-full px-4 py-2 @md:px-6 @md:py-3 @lg:px-8 @lg:py-4 text-xs @md:text-sm @lg:text-base font-semibold text-white shadow-lg transition-all hover:scale-105" style={{ backgroundColor: color }}>
              Fale Conosco <ArrowRight className="h-3.5 w-3.5 @md:h-4 @md:w-4 @lg:h-5 @lg:w-5" />
            </button>
            <button className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-gray-700 px-4 py-2 @md:px-6 @md:py-3 @lg:px-8 @lg:py-4 text-xs @md:text-sm @lg:text-base font-semibold text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all">
              Nossos Serviços
            </button>
          </div>
        </div>
      </div>

      {/* ═══ STATS ═══ */}
      <div className="grid grid-cols-3 border-b border-gray-200 dark:border-gray-700/50">
        {[
          { num: "500+", label: "Clientes atendidos" },
          { num: "99%", label: "Satisfação" },
          { num: "30d", label: "Prazo de entrega" },
        ].map((s, i) => (
          <div key={i} className="px-2 @md:px-4 @lg:px-6 py-3 @md:py-5 @lg:py-6 text-center border-r border-gray-200 dark:border-gray-700/50 last:border-r-0">
            <div className="text-base @md:text-xl @lg:text-3xl font-bold" style={{ color }}>{s.num}</div>
            <div className="text-[9px] @md:text-xs @lg:text-sm text-gray-500 dark:text-gray-400 mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      {/* ═══ SERVIÇOS ═══ */}
      <div className="px-4 @md:px-8 @lg:px-12 py-5 @md:py-8 @lg:py-12">
        <div className="text-center mb-4 @md:mb-6 @lg:mb-8">
          <span className="text-[10px] @md:text-xs @lg:text-sm font-bold uppercase tracking-widest" style={{ color }}>Serviços</span>
          <h2 className="text-lg @md:text-2xl @lg:text-3xl font-bold tracking-tight mt-1">O que oferecemos</h2>
        </div>
        <div className="grid grid-cols-3 @lg:grid-cols-6 gap-2 @md:gap-4 @lg:gap-5">
          {services.map((svc, i) => (
            <div key={i} className="group rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-3 @md:p-4 @lg:p-6 text-center hover:shadow-md transition-all cursor-pointer">
              <div className="mx-auto mb-2 @md:mb-3 @lg:mb-4 h-10 w-10 @md:h-14 @md:w-14 @lg:h-16 @lg:w-16 rounded-full flex items-center justify-center" style={{ backgroundColor: `${color}12`, color }}>
                <Briefcase className="h-4 w-4 @md:h-6 @md:w-6 @lg:h-7 @lg:w-7" />
              </div>
              <div className="text-[10px] @md:text-sm @lg:text-base font-semibold">{svc}</div>
              <div className="text-[9px] @md:text-xs @lg:text-sm text-gray-500 dark:text-gray-400 mt-0.5 @md:mt-1">Saiba mais</div>
            </div>
          ))}
        </div>
      </div>

      {/* ═══ CONFIANÇA ═══ */}
      <div className="px-4 @md:px-8 @lg:px-12 py-5 @md:py-8 @lg:py-10 bg-gray-50 dark:bg-gray-900/50">
        <div className="text-center mb-4 @md:mb-6 @lg:mb-8">
          <span className="text-[10px] @md:text-xs @lg:text-sm font-bold uppercase tracking-widest" style={{ color }}>Por que nos escolher</span>
          <h2 className="text-lg @md:text-2xl @lg:text-3xl font-bold tracking-tight mt-1">Nossa garantia</h2>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 @md:gap-6 @lg:gap-8">
          {proofBadges.map((b, i) => (
            <div key={i} className="flex items-center gap-1 @md:gap-1.5 @lg:gap-2">
              <BadgeCheck className="h-3.5 w-3.5 @md:h-5 @md:w-5 @lg:h-6 @lg:w-6" style={{ color }} />
              <span className="text-[10px] @md:text-xs @lg:text-sm font-medium">{b}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ═══ DEPOIMENTOS ═══ */}
      <div className="px-4 @md:px-8 @lg:px-12 py-5 @md:py-8 @lg:py-12">
        <div className="text-center mb-4 @md:mb-6 @lg:mb-8">
          <span className="text-[10px] @md:text-xs @lg:text-sm font-bold uppercase tracking-widest" style={{ color }}>Depoimentos</span>
          <h2 className="text-lg @md:text-2xl @lg:text-3xl font-bold tracking-tight mt-1">O que dizem sobre nós</h2>
        </div>
        <div className="space-y-2 @md:space-y-0 @md:grid @md:grid-cols-2 @md:gap-4 @lg:gap-5">
          {[
            { name: "Carlos M.", text: "Profissionais excepcionais. Nosso faturamento triplicou depois do novo site.", role: "CEO, TechCorp" },
            { name: "Fernanda L.", text: "Entrega no prazo e resultado acima do esperado. Super recomendo!", role: "Diretora, Moda Express" },
          ].map((dep, i) => (
            <div key={i} className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-3 @md:p-5 @lg:p-6">
              <div className="flex items-center gap-0.5 mb-2">
                {[...Array(5)].map((_, j) => <Star key={j} className="h-3 w-3 @md:h-4 @md:w-4 @lg:h-5 @lg:w-5 fill-amber-400 text-amber-400" />)}
              </div>
              <p className="text-[10px] @md:text-xs @lg:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">&ldquo;{dep.text}&rdquo;</p>
              <div className="mt-2 flex items-center gap-1.5 @md:gap-2">
                <div className="h-5 w-5 @md:h-7 @md:w-7 @lg:h-8 @lg:w-8 rounded-full flex items-center justify-center text-[8px] @md:text-[10px] @lg:text-xs font-bold text-white" style={{ backgroundColor: color }}>
                  {dep.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <div className="text-[9px] @md:text-xs @lg:text-sm font-semibold">{dep.name}</div>
                  <div className="text-[8px] @md:text-[10px] @lg:text-xs text-gray-500 dark:text-gray-400">{dep.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ═══ CTA FINAL ═══ */}
      <div className="px-4 @md:px-8 @lg:px-12 py-6 @md:py-10 @lg:py-14 text-center" style={{ background: `linear-gradient(160deg, ${color}06, ${color}12)` }}>
        <h2 className="text-lg @md:text-2xl @lg:text-4xl font-bold tracking-tight">Cada dia sem site é venda perdida</h2>
        <p className="mt-1.5 @md:mt-2 @lg:mt-3 text-xs @md:text-sm @lg:text-lg text-gray-500 dark:text-gray-400">Vamos criar sua presença digital agora</p>
        <button className="mt-3 @md:mt-5 @lg:mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 @md:px-8 @md:py-4 @lg:px-10 @lg:py-5 text-xs @md:text-sm @lg:text-base font-semibold text-white shadow-lg" style={{ backgroundColor: color }}>
          <MessageCircle className="h-3.5 w-3.5 @md:h-5 @md:w-5 @lg:h-6 @lg:w-6" /> Quero meu site agora
        </button>
      </div>

      {/* ═══ FOOTER ═══ */}
      <footer className="px-4 @md:px-8 @lg:px-12 py-4 @md:py-6 @lg:py-8 border-t border-gray-200 dark:border-gray-700/50">
        <div className="flex flex-col @md:flex-row @md:items-center @md:justify-between @lg:items-start gap-3 @md:gap-6">
          <div>
            <div className="flex items-center gap-2 mb-1.5 @md:mb-2">
              <div className="h-5 w-5 @md:h-7 @md:w-7 @lg:h-8 @lg:w-8 rounded-md flex items-center justify-center" style={{ backgroundColor: color }}>
                <Briefcase className="h-2.5 w-2.5 @md:h-3.5 @md:w-3.5 @lg:h-4 @lg:w-4 text-white" />
              </div>
              <span className="text-[11px] @md:text-sm @lg:text-base font-bold">{name}</span>
            </div>
            <div className="text-[9px] @md:text-xs @lg:text-sm text-gray-500 dark:text-gray-400">© 2026 {name}. Todos os direitos reservados.</div>
          </div>
          <div className="flex flex-col @md:flex-row @md:items-center gap-1.5 @md:gap-4 @lg:gap-6">
            <div className="flex items-center gap-1 text-[9px] @md:text-xs @lg:text-sm text-gray-500 dark:text-gray-400"><MapPin className="h-3 w-3 @md:h-4 @md:w-4 @lg:h-5 @lg:w-5" /> São Paulo, SP</div>
            <div className="flex items-center gap-1 text-[9px] @md:text-xs @lg:text-sm text-gray-500 dark:text-gray-400"><Phone className="h-3 w-3 @md:h-4 @md:w-4 @lg:h-5 @lg:w-5" /> (11) 99999-9999</div>
            <div className="flex items-center gap-1 text-[9px] @md:text-xs @lg:text-sm text-gray-500 dark:text-gray-400"><Mail className="h-3 w-3 @md:h-4 @md:w-4 @lg:h-5 @lg:w-5" /> contato@{name.toLowerCase().replace(/\s+/g, "")}.com</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
