import {
  ShoppingBag, ShoppingCart, Flame, ArrowRight, Phone,
  Truck, Shield, CreditCard, Package, ChevronRight,
  HeadphonesIcon, Globe, Star,
} from "lucide-react";

interface LojaPreviewProps {
  name: string;
  slogan: string;
  color: string;
  proofBadges: string[];
  extras: Record<string, unknown>;
}

export default function LojaPreview({ name, slogan, color, proofBadges, extras }: LojaPreviewProps) {
  const produtos = (extras.produtos as { nome: string; preco: string; precoDe: string }[]) || [];
  const freteGratis = extras.freteGratis as string;

  return (
    <div className="@container min-h-full bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">

      {/* ═══ NAVBAR ═══ */}
      <nav className="flex items-center justify-between px-3 py-2 @md:px-6 @md:py-3 @lg:px-10 @lg:py-4 border-b border-gray-200 dark:border-gray-700/50">
        <div className="flex items-center gap-1.5 @md:gap-2 @lg:gap-3">
          <div className="h-6 w-6 @md:h-8 @md:w-8 @lg:h-10 @lg:w-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: color }}>
            <ShoppingBag className="h-3 w-3 @md:h-4 @md:w-4 @lg:h-5 @lg:w-5 text-white" />
          </div>
          <span className="text-xs @md:text-sm @lg:text-base font-bold tracking-tight">{name}</span>
        </div>
        <div className="flex items-center gap-2 @md:gap-3 @lg:gap-5">
          <span className="hidden @md:inline text-[10px] @md:text-xs @lg:text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 cursor-pointer">Catálogo</span>
          <span className="hidden @md:inline text-[10px] @md:text-xs @lg:text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 cursor-pointer">Ofertas</span>
          <span className="hidden @md:inline text-[10px] @md:text-xs @lg:text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 cursor-pointer">Sobre</span>
          <div className="relative">
            <ShoppingCart className="h-4 w-4 @md:h-5 @md:w-5 @lg:h-6 @lg:w-6" style={{ color }} />
            <div className="absolute -top-1.5 -right-2 h-3.5 w-3.5 @md:h-4 @md:w-4 @lg:h-5 @lg:w-5 rounded-full bg-red-500 text-[7px] @md:text-[8px] @lg:text-[10px] text-white flex items-center justify-center font-bold">2</div>
          </div>
        </div>
      </nav>

      {/* ═══ BANNER PROMO ═══ */}
      <div className="px-4 @md:px-8 @lg:px-12 py-6 @md:py-10 @lg:py-14 text-center text-white" style={{ background: `linear-gradient(135deg, ${color}, ${color}cc)` }}>
        <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-white/20 px-2.5 py-0.5 @md:px-4 @md:py-1 @lg:px-5 @lg:py-1.5 text-[10px] @md:text-xs @lg:text-sm font-semibold">
          <Flame className="h-3 w-3 @md:h-4 @md:w-4 @lg:h-5 @lg:w-5" /> OFERTA ESPECIAL
        </div>
        <h1 className="text-xl @md:text-3xl @lg:text-5xl font-bold tracking-tight">{slogan || "50% OFF em Tudo!"}</h1>
        <p className="mt-1.5 @md:mt-2 @lg:mt-3 text-xs @md:text-sm @lg:text-lg text-white/80">Aproveite as ofertas por tempo limitado</p>
        <button className="mt-3 @md:mt-5 @lg:mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 @md:px-8 @md:py-4 @lg:px-10 @lg:py-5 text-xs @md:text-sm @lg:text-base font-bold shadow-lg transition-all hover:scale-105" style={{ color }}>
          Ver Ofertas <ArrowRight className="h-3.5 w-3.5 @md:h-5 @md:w-5 @lg:h-6 @lg:w-6" />
        </button>
      </div>

      {/* ═══ PRODUTOS ═══ */}
      <div className="px-4 @md:px-8 @lg:px-12 py-5 @md:py-8 @lg:py-12">
        <div className="flex items-center justify-between mb-4 @md:mb-6 @lg:mb-8">
          <div>
            <span className="text-[10px] @md:text-xs @lg:text-sm font-bold uppercase tracking-widest" style={{ color }}>Destaques</span>
            <h2 className="text-lg @md:text-2xl @lg:text-3xl font-bold tracking-tight mt-1">Mais Vendidos</h2>
          </div>
          <span className="text-[10px] @md:text-xs @lg:text-sm font-medium cursor-pointer flex items-center gap-1" style={{ color }}>
            Ver todos <ChevronRight className="h-3 w-3 @md:h-4 @md:w-4 @lg:h-5 @lg:w-5" />
          </span>
        </div>
        <div className="grid grid-cols-2 @md:grid-cols-3 @lg:grid-cols-4 gap-2 @md:gap-4 @lg:gap-5">
          {(produtos.length > 0 ? produtos : [
            { nome: "Produto Premium", preco: "49,90", precoDe: "99,90" },
            { nome: "Kit Completo", preco: "74,90", precoDe: "149,90" },
            { nome: "Essencial", preco: "34,90", precoDe: "69,90" },
            { nome: "Profissional", preco: "59,90", precoDe: "119,90" },
          ]).map((prod, i) => (
            <div key={i} className="group rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 overflow-hidden hover:shadow-md transition-all cursor-pointer">
              <div className="relative h-20 @md:h-28 @lg:h-36 w-full flex items-center justify-center" style={{ backgroundColor: `${color}06` }}>
                <Package className="h-7 w-7 @md:h-10 @md:w-10 @lg:h-12 @lg:w-12" style={{ color, opacity: 0.3 }} />
                <div className="absolute top-1.5 left-1.5 @md:top-2 @md:left-2 rounded-full bg-red-500 px-1.5 py-0.5 @md:px-2 @lg:px-3 text-[7px] @md:text-[9px] @lg:text-[10px] font-bold text-white">
                  -50%
                </div>
              </div>
              <div className="p-2.5 @md:p-4 @lg:p-5">
                <div className="text-[11px] @md:text-sm @lg:text-base font-semibold truncate">{prod.nome}</div>
                <div className="flex items-center gap-1.5 @md:gap-2 mt-1">
                  <span className="text-[9px] @md:text-xs @lg:text-sm text-gray-500 dark:text-gray-400 line-through">R$ {prod.precoDe}</span>
                  <span className="text-xs @md:text-sm @lg:text-base font-bold" style={{ color }}>R$ {prod.preco}</span>
                </div>
                <button className="mt-2 w-full rounded-lg py-1.5 @md:py-2 @lg:py-2.5 text-[9px] @md:text-xs @lg:text-sm font-semibold text-white" style={{ backgroundColor: color }}>
                  Adicionar ao Carrinho
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ═══ VANTAGENS ═══ */}
      <div className="px-4 @md:px-8 @lg:px-12 py-5 @md:py-8 @lg:py-12 bg-gray-50 dark:bg-gray-900/50">
        <div className="grid grid-cols-3 @md:grid-cols-3 @lg:grid-cols-3 gap-3 @md:gap-6 @lg:gap-8">
          {[
            { icon: <Truck className="h-4 w-4 @md:h-6 @md:w-6 @lg:h-7 @lg:w-7" />, title: freteGratis || "Frete Grátis", desc: "Acima de R$99" },
            { icon: <Shield className="h-4 w-4 @md:h-6 @md:w-6 @lg:h-7 @lg:w-7" />, title: "Compra Segura", desc: "Pagamento protegido" },
            { icon: <CreditCard className="h-4 w-4 @md:h-6 @md:w-6 @lg:h-7 @lg:w-7" />, title: "Parcelamento", desc: "Até 12x sem juros" },
          ].map((v, i) => (
            <div key={i} className="text-center">
              <div className="mx-auto mb-1.5 @md:mb-2 @lg:mb-3 h-9 w-9 @md:h-12 @md:w-12 @lg:h-16 @lg:w-16 rounded-full flex items-center justify-center" style={{ backgroundColor: `${color}12`, color }}>
                {v.icon}
              </div>
              <div className="text-[10px] @md:text-xs @lg:text-sm font-semibold">{v.title}</div>
              <div className="text-[9px] @md:text-xs @lg:text-sm text-gray-500 dark:text-gray-400 mt-0.5">{v.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ═══ DEPOIMENTOS ═══ */}
      <div className="px-4 @md:px-8 @lg:px-12 py-5 @md:py-8 @lg:py-12">
        <div className="text-center mb-4 @md:mb-6 @lg:mb-8">
          <span className="text-[10px] @md:text-xs @lg:text-sm font-bold uppercase tracking-widest" style={{ color }}>Avaliações</span>
          <h2 className="text-lg @md:text-2xl @lg:text-3xl font-bold tracking-tight mt-1">O que nossos clientes dizem</h2>
        </div>
        <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-3.5 @md:p-5 @lg:p-6 @md:grid @md:grid-cols-2 @md:gap-4 @lg:gap-5">
          <div className="flex items-center gap-0.5 mb-2">
            {[...Array(5)].map((_, j) => <Star key={j} className="h-3 w-3 @md:h-4 @md:w-4 @lg:h-5 @lg:w-5 fill-amber-400 text-amber-400" />)}
          </div>
          <p className="text-[10px] @md:text-xs @lg:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">&ldquo;Produtos de excelente qualidade e entrega super rápida. Recomendo!&rdquo;</p>
          <div className="mt-2.5 @md:mt-3 flex items-center gap-1.5 @md:gap-2">
            <div className="h-6 w-6 @md:h-8 @md:w-8 @lg:h-9 @lg:w-9 rounded-full flex items-center justify-center text-[9px] @md:text-xs @lg:text-sm font-bold text-white" style={{ backgroundColor: color }}>AS</div>
            <div>
              <div className="text-[10px] @md:text-xs @lg:text-sm font-semibold">Ana Silva</div>
              <div className="text-[8px] @md:text-[10px] @lg:text-xs text-gray-500 dark:text-gray-400">Compra verificada</div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ CTA FINAL ═══ */}
      <div className="px-4 @md:px-8 @lg:px-12 py-6 @md:py-10 @lg:py-14 text-center" style={{ background: `linear-gradient(160deg, ${color}06, ${color}12)` }}>
        <h2 className="text-lg @md:text-2xl @lg:text-4xl font-bold tracking-tight">Não perca essas ofertas!</h2>
        <p className="mt-1.5 @md:mt-2 @lg:mt-3 text-xs @md:text-sm @lg:text-lg text-gray-500 dark:text-gray-400">Compre agora pelo WhatsApp e ganhe frete grátis</p>
        <button className="mt-3 @md:mt-5 @lg:mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 @md:px-8 @md:py-4 @lg:px-10 @lg:py-5 text-xs @md:text-sm @lg:text-base font-semibold text-white shadow-lg" style={{ backgroundColor: "#25D366" }}>
          <Phone className="h-3.5 w-3.5 @md:h-5 @md:w-5 @lg:h-6 @lg:w-6" /> Comprar pelo WhatsApp
        </button>
      </div>

      {/* ═══ FOOTER ═══ */}
      <footer className="px-4 @md:px-8 @lg:px-12 py-4 @md:py-6 @lg:py-8 border-t border-gray-200 dark:border-gray-700/50">
        <div className="flex flex-col @md:flex-row @md:items-center @md:justify-between @lg:items-start gap-3 @md:gap-6">
          <div>
            <div className="flex items-center gap-2 mb-1.5 @md:mb-2">
              <div className="h-5 w-5 @md:h-7 @md:w-7 @lg:h-8 @lg:w-8 rounded-md flex items-center justify-center" style={{ backgroundColor: color }}>
                <ShoppingBag className="h-2.5 w-2.5 @md:h-3.5 @md:w-3.5 @lg:h-4 @lg:w-4 text-white" />
              </div>
              <span className="text-[11px] @md:text-sm @lg:text-base font-bold">{name}</span>
            </div>
            <div className="text-[9px] @md:text-xs @lg:text-sm text-gray-500 dark:text-gray-400">© 2026 {name}. Todos os direitos reservados.</div>
          </div>
          <div className="flex flex-col @md:flex-row @md:items-center gap-1.5 @md:gap-4 @lg:gap-6">
            <div className="flex items-center gap-1 text-[9px] @md:text-xs @lg:text-sm text-gray-500 dark:text-gray-400"><Truck className="h-3 w-3 @md:h-4 @md:w-4 @lg:h-5 @lg:w-5" /> Entrega para todo Brasil</div>
            <div className="flex items-center gap-1 text-[9px] @md:text-xs @lg:text-sm text-gray-500 dark:text-gray-400"><HeadphonesIcon className="h-3 w-3 @md:h-4 @md:w-4 @lg:h-5 @lg:w-5" /> Suporte 24h</div>
            <div className="flex items-center gap-1 text-[9px] @md:text-xs @lg:text-sm text-gray-500 dark:text-gray-400"><Globe className="h-3 w-3 @md:h-4 @md:w-4 @lg:h-5 @lg:w-5" /> @{name.toLowerCase().replace(/\s+/g, "")}</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
