"use client";

import { useRef, useCallback } from "react";
import {
  Check, Clock, Truck, ShoppingCart, Calendar, ArrowRight, Phone,
  Utensils, Stethoscope, ShoppingBag, Palette, Briefcase,
  MapPin, Baby, Heart, User, Flame, Package, Sparkles, Star,
} from "lucide-react";

interface SitePreviewProps {
  businessName: string;
  businessType: string;
  slogan: string;
  color: string;
  services: string[];
  proofBadges: string[];
  extras: Record<string, unknown>;
}

function BrowserChrome({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-border/50 bg-muted/50 px-4 py-2.5">
      <div className="flex gap-1.5">
        <div className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
        <div className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
      </div>
      <div className="flex-1 mx-4">
        <div className="mx-auto max-w-[200px] rounded-md bg-background px-3 py-1 text-[10px] text-muted-foreground text-center truncate">
          {name.toLowerCase().replace(/\s+/g, "")}.com.br
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════ */
/*  RESTAURANTE                                               */
/* ═══════════════════════════════════════════════════════════ */
function RestaurantePreview({ name, slogan, color, proofBadges, extras }: {
  name: string; slogan: string; color: string; proofBadges: string[];
  extras: Record<string, unknown>;
}) {
  const menu = (extras.menu as { nome: string; preco: string }[]) || [];
  const horario = (extras.horario as string) || "18h - 23h";
  const tempoEntrega = (extras.tempoEntrega as string) || "30-45min";

  return (
    <div className="bg-background">
      {/* Navbar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-border/30">
        <div className="flex items-center gap-1.5">
          <Utensils className="h-3 w-3" style={{ color }} />
          <span className="text-[10px] font-bold tracking-tight" style={{ color }}>
            {name.length > 14 ? name.slice(0, 14) + "..." : name}
          </span>
        </div>
        <div className="flex items-center gap-2.5">
          <span className="text-[8px] text-muted-foreground">Cardápio</span>
          <span className="text-[8px] text-muted-foreground">Pedidos</span>
          <div className="flex items-center gap-1 rounded-full bg-emerald-500 px-2 py-0.5 text-[7px] font-semibold text-white">
            <Phone className="h-2 w-2" /> WhatsApp
          </div>
        </div>
      </div>

      {/* Hero - fundo escuro */}
      <div className="relative px-5 pt-7 pb-8 text-center overflow-hidden bg-gradient-to-b from-stone-900 to-stone-800">
        <div className="absolute top-2 left-3 grid grid-cols-4 gap-[3px] opacity-10">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="h-[2px] w-[2px] rounded-full bg-amber-400" />
          ))}
        </div>
        <div className="absolute bottom-2 right-3 grid grid-cols-4 gap-[3px] opacity-10">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="h-[2px] w-[2px] rounded-full bg-amber-400" />
          ))}
        </div>

        <div className="mb-2 inline-flex items-center gap-1 rounded-full bg-amber-500/20 px-2 py-0.5 text-[7px] font-semibold text-amber-400">
          <Clock className="h-2 w-2" /> Aberto agora
        </div>
        <h3 className="text-base font-bold tracking-tight text-white leading-tight px-2">{name}</h3>
        <p className="mt-1 text-[9px] text-stone-400 max-w-[220px] mx-auto">{slogan}</p>
        <div className="mt-3 flex items-center justify-center gap-2">
          <button className="inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-[8px] font-semibold text-stone-900 bg-amber-400 hover:bg-amber-300 transition-all">
            Faça seu Pedido <ArrowRight className="h-2 w-2" />
          </button>
          <button className="inline-flex items-center gap-1 rounded-full border border-stone-600 px-3 py-1.5 text-[8px] font-semibold text-stone-300 hover:bg-stone-700 transition-all">
            Ver Cardápio
          </button>
        </div>
        <div className="mt-4"><Utensils className="h-6 w-6 mx-auto text-amber-400/60" /></div>
      </div>

      {/* Cardápio */}
      <div className="px-4 py-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[8px] font-bold uppercase tracking-wider" style={{ color }}>Cardápio</span>
          <span className="text-[7px] text-muted-foreground">Horário: {horario}</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {menu.length > 0 ? menu.map((item, i) => (
            <div key={i} className="rounded-lg border border-border/50 bg-muted/30 p-2 text-center">
              <div className="text-[7px] text-muted-foreground line-through">R$ {item.preco}</div>
              <div className="text-[10px] font-bold" style={{ color }}>R$ {(parseFloat(item.preco) * 0.7).toFixed(0)},90</div>
              <div className="mt-1 text-[7px] font-medium text-foreground truncate">{item.nome}</div>
            </div>
          )) : (
            <>
              <div className="rounded-lg border border-border/50 bg-muted/30 p-2 text-center">
                <div className="text-[7px] text-muted-foreground line-through">R$ 35</div>
                <div className="text-[10px] font-bold" style={{ color }}>R$ 24,90</div>
                <div className="mt-1 text-[7px] font-medium text-foreground">Pizza Margherita</div>
              </div>
              <div className="rounded-lg border border-border/50 bg-muted/30 p-2 text-center">
                <div className="text-[7px] text-muted-foreground line-through">R$ 42</div>
                <div className="text-[10px] font-bold" style={{ color }}>R$ 29,90</div>
                <div className="mt-1 text-[7px] font-medium text-foreground">Hambúrguer Artesanal</div>
              </div>
              <div className="rounded-lg border border-border/50 bg-muted/30 p-2 text-center">
                <div className="text-[7px] text-muted-foreground line-through">R$ 18</div>
                <div className="text-[10px] font-bold" style={{ color }}>R$ 12,90</div>
                <div className="mt-1 text-[7px] font-medium text-foreground">Açaí Premium</div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Delivery badge */}
      <div className="border-t border-border/30 px-4 py-2.5 flex items-center justify-center gap-4">
        <div className="flex items-center gap-1">
          <Truck className="h-3 w-3" style={{ color }} />
          <span className="text-[8px] font-semibold text-foreground">Entrega grátis</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="h-3 w-3" style={{ color }} />
          <span className="text-[8px] text-muted-foreground">{tempoEntrega}</span>
        </div>
      </div>

      {/* Trust */}
      <div className="border-t border-border/30 px-4 py-2.5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
        {proofBadges.map((b, i) => (
          <div key={i} className="flex items-center gap-1">
            <Check className="h-2.5 w-2.5" style={{ color }} />
            <span className="text-[7px] text-muted-foreground">{b}</span>
          </div>
        ))}
      </div>

      {/* CTA WhatsApp */}
      <div className="px-4 py-4 text-center bg-gradient-to-b from-emerald-500/10 to-emerald-500/5">
        <p className="text-[9px] font-bold text-foreground">Peça agora pelo WhatsApp</p>
        <button className="mt-2 inline-flex items-center gap-1 rounded-full bg-emerald-500 px-3 py-1.5 text-[8px] font-semibold text-white">
          <Phone className="h-2.5 w-2.5" /> Pedir Agora
        </button>
      </div>

      {/* Footer */}
      <div className="border-t border-border/30 px-4 py-2 flex items-center justify-between">
        <span className="text-[7px] text-muted-foreground">© 2026 {name}</span>
        <span className="text-[7px] text-muted-foreground flex items-center gap-1"><MapPin className="h-2.5 w-2.5" />São Paulo, SP</span>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════ */
/*  CLINICA                                                   */
/* ═══════════════════════════════════════════════════════════ */
function ClinicaPreview({ name, slogan, color, proofBadges, extras }: {
  name: string; slogan: string; color: string; proofBadges: string[];
  extras: Record<string, unknown>;
}) {
  const especialidades = (extras.especialidades as string[]) || [];
  const medicos = (extras.medicos as { nome: string; especialidade: string }[]) || [];

  return (
    <div className="bg-background">
      {/* Navbar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-border/30">
        <div className="flex items-center gap-1.5">
          <Stethoscope className="h-3 w-3" style={{ color }} />
          <span className="text-[10px] font-bold tracking-tight" style={{ color }}>
            {name.length > 14 ? name.slice(0, 14) + "..." : name}
          </span>
        </div>
        <div className="flex items-center gap-2.5">
          <span className="text-[8px] text-muted-foreground">Especialidades</span>
          <div className="flex items-center gap-1 rounded-full px-2 py-0.5 text-[7px] font-semibold text-white" style={{ backgroundColor: color }}>
            <Calendar className="h-2 w-2" /> Agendar
          </div>
        </div>
      </div>

      {/* Hero - clean */}
      <div className="relative px-5 pt-7 pb-8 text-center overflow-hidden" style={{ background: `linear-gradient(160deg, ${color}06, ${color}12)` }}>
        <div className="mb-2 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[7px] font-semibold" style={{ color, backgroundColor: `${color}15` }}>
          <span className="h-[3px] w-[3px] rounded-full" style={{ backgroundColor: color }} />
          {especialidades[0] || "Saúde"}
        </div>
        <div className="mb-2"><Stethoscope className="h-8 w-8 mx-auto" style={{ color }} /></div>
        <h3 className="text-base font-bold tracking-tight text-foreground leading-tight px-2">{name}</h3>
        <p className="mt-1 text-[9px] text-muted-foreground max-w-[220px] mx-auto">{slogan}</p>
        <button className="mt-3 inline-flex items-center gap-1 rounded-full px-4 py-1.5 text-[8px] font-semibold text-white transition-all" style={{ backgroundColor: color }}>
          Agende sua Consulta <ArrowRight className="h-2 w-2" />
        </button>
      </div>

      {/* Especialidades */}
      <div className="px-4 py-4">
        <div className="mb-2 text-[8px] font-bold uppercase tracking-wider" style={{ color }}>Especialidades</div>
        <div className="grid grid-cols-3 gap-2">
          {(especialidades.length > 0 ? especialidades : ["Clínico Geral", "Pediatria", "Dermatologia"]).map((esp, i) => (
            <div key={i} className="rounded-lg border border-border/50 bg-muted/30 p-2.5 text-center">
              <div className="mx-auto mb-1 flex h-5 w-5 items-center justify-center rounded" style={{ backgroundColor: `${color}15` }}>
                {[<Stethoscope key={0} className="h-3 w-3" />, <Baby key={1} className="h-3 w-3" />, <Heart key={2} className="h-3 w-3" />][i] || <Stethoscope className="h-3 w-3" />}
              </div>
              <span className="text-[7px] font-medium text-foreground leading-tight block">{esp}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Equipe */}
      <div className="px-4 py-3 border-t border-border/30">
        <div className="mb-2 text-[8px] font-bold uppercase tracking-wider" style={{ color }}>Nossa Equipe</div>
        <div className="flex gap-2">
          {(medicos.length > 0 ? medicos : [
            { nome: "Dr. Silva", especialidade: "Clínico Geral" },
            { nome: "Dra. Santos", especialidade: "Pediatria" },
          ]).map((med, i) => (
            <div key={i} className="flex-1 rounded-lg border border-border/50 bg-muted/30 p-2 text-center">
              <div className="mx-auto mb-1 h-6 w-6 rounded-full flex items-center justify-center text-[10px]" style={{ backgroundColor: `${color}15` }}>
                <User className="h-3.5 w-3.5" style={{ color }} />
              </div>
              <div className="text-[7px] font-semibold text-foreground">{med.nome}</div>
              <div className="text-[6px] text-muted-foreground">{med.especialidade}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust */}
      <div className="border-t border-border/30 px-4 py-2.5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
        {proofBadges.map((b, i) => (
          <div key={i} className="flex items-center gap-1">
            <Check className="h-2.5 w-2.5" style={{ color }} />
            <span className="text-[7px] text-muted-foreground">{b}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="px-4 py-4 text-center" style={{ background: `linear-gradient(160deg, ${color}08, ${color}14)` }}>
        <p className="text-[9px] font-bold text-foreground">Agende sua consulta agora</p>
        <button className="mt-2 inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-[8px] font-semibold text-white" style={{ backgroundColor: color }}>
          <Calendar className="h-2.5 w-2.5" /> Agendar pelo WhatsApp
        </button>
      </div>

      <div className="border-t border-border/30 px-4 py-2 flex items-center justify-between">
        <span className="text-[7px] text-muted-foreground">© 2026 {name}</span>
        <span className="text-[7px] text-muted-foreground flex items-center gap-1"><Phone className="h-2.5 w-2.5" />(11) 95839-4250</span>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════ */
/*  LOJA                                                      */
/* ═══════════════════════════════════════════════════════════ */
function LojaPreview({ name, slogan, color, proofBadges, extras }: {
  name: string; slogan: string; color: string; proofBadges: string[];
  extras: Record<string, unknown>;
}) {
  const produtos = (extras.produtos as { nome: string; preco: string; precoDe: string }[]) || [];
  const freteGratis = extras.freteGratis as string;

  return (
    <div className="bg-background">
      {/* Navbar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-border/30">
        <div className="flex items-center gap-1.5">
          <ShoppingBag className="h-3 w-3" style={{ color }} />
          <span className="text-[10px] font-bold tracking-tight" style={{ color }}>
            {name.length > 14 ? name.slice(0, 14) + "..." : name}
          </span>
        </div>
        <div className="flex items-center gap-2.5">
          <span className="text-[8px] text-muted-foreground">Catálogo</span>
          <span className="text-[8px] text-muted-foreground">Promoções</span>
          <div className="relative">
            <ShoppingCart className="h-3.5 w-3.5" style={{ color }} />
            <div className="absolute -top-1 -right-1.5 h-2.5 w-2.5 rounded-full bg-red-500 text-[6px] text-white flex items-center justify-center font-bold">2</div>
          </div>
        </div>
      </div>

      {/* Banner promo */}
      <div className="px-4 py-3 text-center bg-gradient-to-r from-red-500 to-orange-500">
        <div className="text-[10px] font-bold text-white tracking-wide flex items-center justify-center gap-1"><Flame className="h-3 w-3" /> 50% OFF em Tudo!</div>
        <div className="text-[7px] text-white/80 mt-0.5">Aproveite as ofertas imperdíveis</div>
      </div>

      {/* Produtos */}
      <div className="px-4 py-4">
        <div className="mb-2 text-[8px] font-bold uppercase tracking-wider" style={{ color }}>Destaques</div>
        <div className="grid grid-cols-2 gap-2">
          {(produtos.length > 0 ? produtos : [
            { nome: "Produto 1", preco: "49,90", precoDe: "99,90" },
            { nome: "Produto 2", preco: "74,90", precoDe: "149,90" },
            { nome: "Produto 3", preco: "34,90", precoDe: "69,90" },
            { nome: "Produto 4", preco: "59,90", precoDe: "119,90" },
          ]).map((prod, i) => (
            <div key={i} className="rounded-lg border border-border/50 bg-muted/30 p-2.5">
              <div className="mb-1.5 h-10 w-full rounded bg-muted/50 flex items-center justify-center text-[12px]">
                <Package className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="text-[7px] text-muted-foreground line-through">R$ {prod.precoDe}</div>
              <div className="text-[10px] font-bold" style={{ color }}>R$ {prod.preco}</div>
              <div className="mt-1 text-[7px] font-medium text-foreground truncate">{prod.nome}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Frete */}
      <div className="border-t border-border/30 px-4 py-2.5 flex items-center justify-center gap-1">
        <Truck className="h-3 w-3" style={{ color }} />
        <span className="text-[8px] font-semibold text-foreground">{freteGratis || "Frete grátis acima de R$99"}</span>
      </div>

      {/* Trust */}
      <div className="border-t border-border/30 px-4 py-2.5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
        {proofBadges.map((b, i) => (
          <div key={i} className="flex items-center gap-1">
            <Check className="h-2.5 w-2.5" style={{ color }} />
            <span className="text-[7px] text-muted-foreground">{b}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="px-4 py-4 text-center" style={{ background: `linear-gradient(160deg, ${color}08, ${color}14)` }}>
        <p className="text-[9px] font-bold text-foreground">Compre agora pelo WhatsApp</p>
        <button className="mt-2 inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-[8px] font-semibold text-white" style={{ backgroundColor: color }}>
          <Phone className="h-2.5 w-2.5" /> Comprar Agora
        </button>
      </div>

      <div className="border-t border-border/30 px-4 py-2 flex items-center justify-between">
        <span className="text-[7px] text-muted-foreground">© 2026 {name}</span>
        <span className="text-[7px] text-muted-foreground flex items-center gap-1"><Truck className="h-2.5 w-2.5" />Entrega para todo Brasil</span>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════ */
/*  STUDIO                                                    */
/* ═══════════════════════════════════════════════════════════ */
function StudioPreview({ name, slogan, color, proofBadges, extras }: {
  name: string; slogan: string; color: string; proofBadges: string[];
  extras: Record<string, unknown>;
}) {
  const projetos = (extras.projetos as number) || 6;
  const etapas = (extras.etapas as string[]) || [];

  const projetoColors = [
    `${color}30`, `${color}18`, `${color}25`,
    `${color}12`, `${color}22`, `${color}15`,
  ];

  return (
    <div className="bg-background">
      {/* Navbar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-border/30">
        <div className="flex items-center gap-1.5">
          <Palette className="h-3 w-3" style={{ color }} />
          <span className="text-[10px] font-bold tracking-tight" style={{ color }}>
            {name.length > 14 ? name.slice(0, 14) + "..." : name}
          </span>
        </div>
        <div className="flex items-center gap-2.5">
          <span className="text-[8px] text-muted-foreground">Portfólio</span>
          <span className="text-[8px] text-muted-foreground">Sobre</span>
          <div className="rounded-full px-2 py-0.5 text-[7px] font-semibold text-white" style={{ backgroundColor: color }}>
            Orçamento
          </div>
        </div>
      </div>

      {/* Hero - escuro */}
      <div className="relative px-5 pt-7 pb-8 text-center overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="mb-2"><Sparkles className="h-8 w-8 mx-auto text-white/80" /></div>
        <h3 className="text-base font-bold tracking-tight text-white leading-tight px-2">{name}</h3>
        <p className="mt-1 text-[9px] text-gray-400 max-w-[220px] mx-auto">{slogan}</p>
        <button className="mt-3 inline-flex items-center gap-1 rounded-full px-4 py-1.5 text-[8px] font-semibold bg-white text-gray-900 hover:bg-gray-100 transition-all">
          Veja Nosso Trabalho <ArrowRight className="h-2 w-2" />
        </button>
      </div>

      {/* Portfólio - grid masonry */}
      <div className="px-4 py-4">
        <div className="mb-2 text-[8px] font-bold uppercase tracking-wider" style={{ color }}>Portfólio</div>
        <div className="grid grid-cols-3 gap-1.5">
          {/* Row 1: 1 large + 1 small */}
          <div className="col-span-2 rounded-lg p-3 flex items-end min-h-[50px]" style={{ backgroundColor: projetoColors[0] }}>
            <span className="text-[7px] font-medium text-foreground/70">Projeto 1</span>
          </div>
          <div className="rounded-lg p-2 flex items-center justify-center min-h-[50px]" style={{ backgroundColor: projetoColors[1] }}>
            <span className="text-[7px] font-medium text-foreground/70">Projeto 2</span>
          </div>
          {/* Row 2: 1 small + 1 large */}
          <div className="rounded-lg p-2 flex items-center justify-center min-h-[50px]" style={{ backgroundColor: projetoColors[2] }}>
            <span className="text-[7px] font-medium text-foreground/70">Projeto 3</span>
          </div>
          <div className="col-span-2 rounded-lg p-3 flex items-end min-h-[50px]" style={{ backgroundColor: projetoColors[3] }}>
            <span className="text-[7px] font-medium text-foreground/70">Projeto 4</span>
          </div>
        </div>
      </div>

      {/* Processo */}
      <div className="px-4 py-3 border-t border-border/30">
        <div className="mb-2 text-[8px] font-bold uppercase tracking-wider" style={{ color }}>Processo</div>
        <div className="flex items-center justify-between gap-1">
          {(etapas.length > 0 ? etapas : ["Briefing", "Design", "Entrega"]).map((etapa, i) => (
            <div key={i} className="flex items-center gap-1 flex-1">
              <div className="flex h-4 w-4 items-center justify-center rounded-full text-[7px] font-bold text-white" style={{ backgroundColor: color }}>
                {i + 1}
              </div>
              <span className="text-[7px] font-medium text-foreground">{etapa}</span>
              {i < 2 && <ArrowRight className="h-2 w-2 text-muted-foreground/50 ml-1" />}
            </div>
          ))}
        </div>
      </div>

      {/* Trust */}
      <div className="border-t border-border/30 px-4 py-2.5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
        {proofBadges.map((b, i) => (
          <div key={i} className="flex items-center gap-1">
            <Check className="h-2.5 w-2.5" style={{ color }} />
            <span className="text-[7px] text-muted-foreground">{b}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="px-4 py-4 text-center" style={{ background: `linear-gradient(160deg, ${color}08, ${color}14)` }}>
        <p className="text-[9px] font-bold text-foreground">Transforme sua ideia em realidade</p>
        <button className="mt-2 inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-[8px] font-semibold text-white" style={{ backgroundColor: color }}>
          Peça um Orçamento
        </button>
      </div>

      <div className="border-t border-border/30 px-4 py-2 flex items-center justify-between">
        <span className="text-[7px] text-muted-foreground">© 2026 {name}</span>
        <span className="text-[7px] text-muted-foreground flex items-center gap-1"><MapPin className="h-2.5 w-2.5" />São Paulo, SP</span>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════ */
/*  GENÉRICO                                                  */
/* ═══════════════════════════════════════════════════════════ */
function GenericoPreview({ name, slogan, color, services, proofBadges }: {
  name: string; slogan: string; color: string; services: string[]; proofBadges: string[];
}) {
  return (
    <div className="bg-background">
      {/* Navbar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-border/30">
        <div className="flex items-center gap-1.5">
          <div className="h-4 w-4 rounded" style={{ backgroundColor: color }} />
          <span className="text-[10px] font-bold tracking-tight" style={{ color }}>
            {name.length > 14 ? name.slice(0, 14) + "..." : name}
          </span>
        </div>
        <div className="flex items-center gap-2.5">
          <span className="text-[8px] text-muted-foreground">Serviços</span>
          <span className="text-[8px] text-muted-foreground">Contato</span>
          <div className="rounded-full px-2 py-0.5 text-[7px] font-semibold text-white" style={{ backgroundColor: color }}>
            Fale Conosco
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="relative px-5 pt-7 pb-8 text-center overflow-hidden" style={{ background: `linear-gradient(160deg, ${color}06, ${color}12)` }}>
        <div className="absolute top-2 left-3 grid grid-cols-4 gap-[3px] opacity-15">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="h-[2px] w-[2px] rounded-full" style={{ backgroundColor: color }} />
          ))}
        </div>
        <div className="absolute bottom-2 right-3 grid grid-cols-4 gap-[3px] opacity-15">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="h-[2px] w-[2px] rounded-full" style={{ backgroundColor: color }} />
          ))}
        </div>
        <div className="mb-2 inline-flex items-center gap-1.5 rounded-full px-3 py-0.5 text-[8px] font-semibold uppercase tracking-wider" style={{ color, backgroundColor: `${color}15` }}>
          <span className="h-[3px] w-[3px] rounded-full" style={{ backgroundColor: color }} />
          {name}
        </div>
        <h3 className="text-base font-bold tracking-tight text-foreground leading-tight px-2">{name}</h3>
        <p className="mt-1 text-[9px] text-muted-foreground max-w-[220px] mx-auto">{slogan}</p>
        <button className="mt-3 inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[8px] font-semibold text-white transition-all" style={{ backgroundColor: color }}>
          Fale Conosco <ArrowRight className="h-2 w-2" />
        </button>
        <div className="mt-4"><Briefcase className="h-6 w-6 mx-auto" style={{ color, opacity: 0.6 }} /></div>
      </div>

      {/* Serviços */}
      <div className="px-4 py-4">
        <div className="mb-2 text-[8px] font-bold uppercase tracking-wider" style={{ color }}>Nossos Serviços</div>
        <div className="grid grid-cols-3 gap-2">
          {services.map((svc, i) => (
            <div key={i} className="rounded-lg border border-border/50 bg-muted/30 p-2.5 text-center">
              <div className="mx-auto mb-1.5 flex h-5 w-5 items-center justify-center rounded" style={{ backgroundColor: `${color}15` }}>
                <div className="h-1.5 w-1.5 rounded-sm" style={{ backgroundColor: color }} />
              </div>
              <span className="text-[7px] font-medium text-foreground leading-tight block">{svc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Trust */}
      <div className="border-t border-border/30 px-4 py-2.5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
        {proofBadges.map((b, i) => (
          <div key={i} className="flex items-center gap-1">
            <Check className="h-2.5 w-2.5" style={{ color }} />
            <span className="text-[7px] text-muted-foreground">{b}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="px-4 py-4 text-center" style={{ background: `linear-gradient(160deg, ${color}08, ${color}14)` }}>
        <p className="text-[9px] font-bold text-foreground">Cada dia sem site é venda perdida</p>
        <button className="mt-2 inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-[8px] font-semibold text-white" style={{ backgroundColor: color }}>
          Quero meu site agora <ArrowRight className="h-2 w-2" />
        </button>
      </div>

      <div className="border-t border-border/30 px-4 py-2 flex items-center justify-between">
        <span className="text-[7px] text-muted-foreground">© 2026 {name}</span>
        <div className="h-3 w-3 rounded-full flex items-center justify-center" style={{ backgroundColor: `${color}20` }}>
          <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: color }} />
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════ */
/*  MAIN COMPONENT                                            */
/* ═══════════════════════════════════════════════════════════ */
export default function SitePreview({
  businessName,
  businessType,
  slogan,
  color,
  services,
  proofBadges,
  extras,
}: SitePreviewProps) {
  const tiltRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const el = tiltRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) scale(1.015)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const el = tiltRef.current;
    if (!el) return;
    el.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) scale(1)";
    el.style.transition = "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
    setTimeout(() => {
      if (el) el.style.transition = "";
    }, 500);
  }, []);

  const displayName = businessName || "Seu Negócio";
  const displaySlogan = slogan || "Soluções que geram resultado para o seu negócio";

  const renderPreview = () => {
    switch (businessType) {
      case "Restaurante":
        return <RestaurantePreview name={displayName} slogan={displaySlogan} color={color} proofBadges={proofBadges} extras={extras} />;
      case "Clinica":
        return <ClinicaPreview name={displayName} slogan={displaySlogan} color={color} proofBadges={proofBadges} extras={extras} />;
      case "Loja":
        return <LojaPreview name={displayName} slogan={displaySlogan} color={color} proofBadges={proofBadges} extras={extras} />;
      case "Studio":
        return <StudioPreview name={displayName} slogan={displaySlogan} color={color} proofBadges={proofBadges} extras={extras} />;
      default:
        return <GenericoPreview name={displayName} slogan={displaySlogan} color={color} services={services} proofBadges={proofBadges} />;
    }
  };

  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden transition-shadow duration-700"
      style={{
        boxShadow: `0 0 80px -20px ${color}35, 0 25px 50px -12px rgba(0,0,0,0.15)`,
      }}
    >
      <div
        ref={tiltRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="rounded-2xl border border-border/50 bg-card overflow-hidden transition-transform duration-200 ease-out"
      >
        <BrowserChrome name={displayName} />
        {renderPreview()}
      </div>
    </div>
  );
}
