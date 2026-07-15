"use client";

import { useRef, useCallback } from "react";
import {
  Check, Clock, Truck, ShoppingCart, Calendar, ArrowRight, Phone,
  Utensils, Stethoscope, ShoppingBag, Palette, Briefcase,
  MapPin, Baby, Heart, User, Flame, Package, Sparkles, Star,
  Shield, Award, TrendingUp, Users, Quote, ChevronRight, Zap,
  Globe, Mail, PhoneCall, MessageCircle, BadgeCheck,
  ArrowUpRight, Sparkle, Timer, CreditCard, HeadphonesIcon,
} from "lucide-react";

interface SitePreviewProps {
  businessName: string;
  businessType: string;
  slogan: string;
  color: string;
  services: string[];
  proofBadges: string[];
  extras: Record<string, unknown>;
  fullscreen?: boolean;
  onCloseFullscreen?: () => void;
}

function BrowserChrome({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-gray-200/50 bg-gray-100 px-4 py-2.5">
      <div className="flex gap-1.5">
        <div className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
        <div className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
      </div>
      <div className="flex-1 mx-4">
        <div className="mx-auto max-w-[200px] rounded-md bg-white px-3 py-1 text-[10px] text-gray-500 text-center truncate">
          {name.toLowerCase().replace(/\s+/g, "")}.com.br
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════ */
/*  RESTAURANTE - Landpage completa                          */
/* ═══════════════════════════════════════════════════════════ */
function RestaurantePreview({ name, slogan, color, proofBadges, extras }: {
  name: string; slogan: string; color: string; proofBadges: string[];
  extras: Record<string, unknown>;
}) {
  const menu = (extras.menu as { nome: string; preco: string }[]) || [];
  const horario = (extras.horario as string) || "18h - 23h";
  const tempoEntrega = (extras.tempoEntrega as string) || "30-45min";

  return (
    <div className="bg-white text-gray-900">
      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-5 py-3 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-lg flex items-center justify-center" style={{ backgroundColor: color }}>
            <Utensils className="h-4 w-4 text-white" />
          </div>
          <span className="text-sm font-bold tracking-tight text-gray-900">{name}</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[11px] text-gray-500 hover:text-gray-900 cursor-pointer">Cardápio</span>
          <span className="text-[11px] text-gray-500 hover:text-gray-900 cursor-pointer">Sobre</span>
          <span className="text-[11px] text-gray-500 hover:text-gray-900 cursor-pointer">Contato</span>
          <div className="flex items-center gap-1 rounded-full px-3 py-1.5 text-[10px] font-semibold text-white" style={{ backgroundColor: "#25D366" }}>
            <Phone className="h-3 w-3" /> Pedir
          </div>
        </div>
      </nav>

      {/* HERO */}
      <div className="relative px-6 pt-10 pb-14 text-center overflow-hidden" style={{ background: `linear-gradient(160deg, ${color}08, ${color}15)` }}>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, ${color} 1px, transparent 0)`, backgroundSize: "24px 24px" }} />
        <div className="relative z-10">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-semibold" style={{ color, backgroundColor: `${color}12` }}>
            <Clock className="h-3 w-3" /> Aberto agora · Fecha às {horario.split(" - ")[1] || "23h"}
          </div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight max-w-md mx-auto">
            {slogan || `O melhor sabor da cidade está aqui`}
          </h1>
          <p className="mt-3 text-sm text-gray-500 max-w-sm mx-auto">
            Peça agora pelo WhatsApp e receba em até {tempoEntrega}. Frete grátis para pedidos acima de R$50.
          </p>
          <div className="mt-5 flex items-center justify-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105" style={{ backgroundColor: color }}>
              Ver Cardápio <ArrowRight className="h-4 w-4" />
            </button>
            <button className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-100 transition-all">
              <Phone className="h-4 w-4" /> Ligar
            </button>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-3 border-b border-gray-200">
        {[
          { num: "15k+", label: "Pedidos entregues" },
          { num: "4.9", label: "Avaliação no Google" },
          { num: "30min", label: "Tempo médio" },
        ].map((s, i) => (
          <div key={i} className="px-4 py-5 text-center border-r border-gray-200 last:border-r-0">
            <div className="text-lg font-bold" style={{ color }}>{s.num}</div>
            <div className="text-[10px] text-gray-500 mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      {/* CARDÁPIO */}
      <div className="px-6 py-8">
        <div className="text-center mb-6">
          <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color }}>Nosso Cardápio</span>
          <h2 className="text-xl font-bold tracking-tight mt-1">Favoritos dos nossos clientes</h2>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {(menu.length > 0 ? menu : [
            { nome: "Pizza Margherita", preco: "35" },
            { nome: "Hambúrguer Artesanal", preco: "42" },
            { nome: "Açaí Premium", preco: "18" },
            { nome: "Combo Família", preco: "89" },
          ]).map((item, i) => (
            <div key={i} className="group rounded-xl border border-gray-200 bg-white p-4 hover:shadow-md transition-all cursor-pointer">
              <div className="h-16 w-full rounded-lg mb-3 flex items-center justify-center" style={{ backgroundColor: `${color}08` }}>
                <Utensils className="h-6 w-6" style={{ color, opacity: 0.4 }} />
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-xs font-semibold">{item.nome}</div>
                  <div className="text-[10px] text-gray-500 mt-0.5">Peça agora</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-gray-500 line-through">R$ {item.preco}</div>
                  <div className="text-sm font-bold" style={{ color }}>R$ {(parseFloat(item.preco) * 0.7).toFixed(0)},90</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* COMO FUNCIONA */}
      <div className="px-6 py-8 bg-gray-50">
        <div className="text-center mb-6">
          <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color }}>Como Funciona</span>
          <h2 className="text-xl font-bold tracking-tight mt-1">Simples e rápido</h2>
        </div>
        <div className="flex gap-4">
          {[
            { icon: <MessageCircle className="h-5 w-5" />, title: "Peça pelo WhatsApp", desc: "Escolha seus pratos e faça seu pedido" },
            { icon: <Timer className="h-5 w-5" />, title: "Preparo Rápido", desc: `Em até ${tempoEntrega} seu pedido sai` },
            { icon: <Truck className="h-5 w-5" />, title: "Entrega Grátis", desc: "Receba no conforto da sua casa" },
          ].map((step, i) => (
            <div key={i} className="flex-1 text-center">
              <div className="mx-auto mb-2 h-10 w-10 rounded-full flex items-center justify-center" style={{ backgroundColor: `${color}12`, color }}>
                {step.icon}
              </div>
              <div className="text-[11px] font-semibold">{step.title}</div>
              <div className="text-[10px] text-gray-500 mt-0.5">{step.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* DEPOIMENTOS */}
      <div className="px-6 py-8">
        <div className="text-center mb-6">
          <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color }}>Depoimentos</span>
          <h2 className="text-xl font-bold tracking-tight mt-1">O que dizem sobre nós</h2>
        </div>
        <div className="space-y-3">
          {[
            { name: "Maria S.", text: "Melhor pizza da região! Entrega sempre pontual e o sabor é incrível.", stars: 5 },
            { name: "João P.", text: "Pedi o combo família e surpreendeu a todos. Super recomendo!", stars: 5 },
          ].map((dep, i) => (
            <div key={i} className="rounded-xl border border-gray-200 bg-white p-4">
              <div className="flex items-center gap-1 mb-2">
                {[...Array(dep.stars)].map((_, j) => <Star key={j} className="h-3 w-3 fill-amber-400 text-amber-400" />)}
              </div>
              <p className="text-[11px] text-gray-500 leading-relaxed">&ldquo;{dep.text}&rdquo;</p>
              <div className="mt-2 text-[10px] font-semibold">{dep.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA FINAL */}
      <div className="px-6 py-10 text-center" style={{ background: `linear-gradient(160deg, ${color}06, ${color}12)` }}>
        <h2 className="text-xl font-bold tracking-tight">Pronto para pedir?</h2>
        <p className="mt-2 text-sm text-gray-500">Faça seu agora pelo WhatsApp e receba em casa</p>
        <button className="mt-4 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg" style={{ backgroundColor: "#25D366" }}>
          <Phone className="h-4 w-4" /> Pedir pelo WhatsApp
        </button>
      </div>

      {/* FOOTER */}
      <footer className="px-6 py-6 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="h-6 w-6 rounded-md flex items-center justify-center" style={{ backgroundColor: color }}>
                <Utensils className="h-3 w-3 text-white" />
              </div>
              <span className="text-xs font-bold">{name}</span>
            </div>
            <div className="text-[10px] text-gray-500">© 2026 {name}. Todos os direitos reservados.</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-[10px] text-gray-500"><MapPin className="h-3 w-3" /> São Paulo, SP</div>
            <div className="flex items-center gap-1 text-[10px] text-gray-500"><Phone className="h-3 w-3" /> (11) 99999-9999</div>
            <div className="flex items-center gap-1 text-[10px] text-gray-500"><Globe className="h-3 w-3" /> @{name.toLowerCase().replace(/\s+/g, "")}</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════ */
/*  CLINICA - Landpage completa                              */
/* ═══════════════════════════════════════════════════════════ */
function ClinicaPreview({ name, slogan, color, proofBadges, extras }: {
  name: string; slogan: string; color: string; proofBadges: string[];
  extras: Record<string, unknown>;
}) {
  const especialidades = (extras.especialidades as string[]) || [];
  const medicos = (extras.medicos as { nome: string; especialidade: string }[]) || [];

  const espIcons = [<Stethoscope key={0} className="h-5 w-5" />, <Baby key={1} className="h-5 w-5" />, <Heart key={2} className="h-5 w-5" />];

  return (
    <div className="bg-white text-gray-900">
      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-5 py-3 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-lg flex items-center justify-center" style={{ backgroundColor: color }}>
            <Stethoscope className="h-4 w-4 text-white" />
          </div>
          <span className="text-sm font-bold tracking-tight">{name}</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[11px] text-gray-500 hover:text-gray-900 cursor-pointer">Especialidades</span>
          <span className="text-[11px] text-gray-500 hover:text-gray-900 cursor-pointer">Médicos</span>
          <span className="text-[11px] text-gray-500 hover:text-gray-900 cursor-pointer">Sobre</span>
          <div className="flex items-center gap-1 rounded-full px-3 py-1.5 text-[10px] font-semibold text-white" style={{ backgroundColor: color }}>
            <Calendar className="h-3 w-3" /> Agendar
          </div>
        </div>
      </nav>

      {/* HERO */}
      <div className="relative px-6 pt-10 pb-14 text-center overflow-hidden" style={{ background: `linear-gradient(160deg, ${color}06, ${color}12)` }}>
        <div className="relative z-10">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-semibold" style={{ color, backgroundColor: `${color}12` }}>
            <Shield className="h-3 w-3" /> Clínica Certificada
          </div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight max-w-md mx-auto">
            {slogan || "Sua saúde merece cuidado e dedicação"}
          </h1>
          <p className="mt-3 text-sm text-gray-500 max-w-sm mx-auto">
            Equipe qualificada e atendimento humanizado. Agende sua consulta pelo WhatsApp em poucos cliques.
          </p>
          <div className="mt-5 flex items-center justify-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105" style={{ backgroundColor: color }}>
              Agendar Consulta <ArrowRight className="h-4 w-4" />
            </button>
            <button className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-100 transition-all">
              <Phone className="h-4 w-4" /> Ligar
            </button>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-3 border-b border-gray-200">
        {[
          { num: "10k+", label: "Pacientes atendidos" },
          { num: "15+", label: "Médicos especialistas" },
          { num: "98%", label: "Satisfação" },
        ].map((s, i) => (
          <div key={i} className="px-4 py-5 text-center border-r border-gray-200 last:border-r-0">
            <div className="text-lg font-bold" style={{ color }}>{s.num}</div>
            <div className="text-[10px] text-gray-500 mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      {/* ESPECIALIDADES */}
      <div className="px-6 py-8">
        <div className="text-center mb-6">
          <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color }}>Especialidades</span>
          <h2 className="text-xl font-bold tracking-tight mt-1">Cuidamos de você</h2>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {(especialidades.length > 0 ? especialidades : ["Clínico Geral", "Pediatria", "Dermatologia"]).map((esp, i) => (
            <div key={i} className="group rounded-xl border border-gray-200 bg-white p-4 text-center hover:shadow-md transition-all cursor-pointer">
              <div className="mx-auto mb-3 h-12 w-12 rounded-full flex items-center justify-center" style={{ backgroundColor: `${color}12`, color }}>
                {espIcons[i] || <Stethoscope className="h-5 w-5" />}
              </div>
              <div className="text-xs font-semibold">{esp}</div>
              <div className="text-[10px] text-gray-500 mt-1">Saiba mais</div>
            </div>
          ))}
        </div>
      </div>

      {/* EQUIPE */}
      <div className="px-6 py-8 bg-gray-50">
        <div className="text-center mb-6">
          <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color }}>Nossa Equipe</span>
          <h2 className="text-xl font-bold tracking-tight mt-1">Profissionais qualificados</h2>
        </div>
        <div className="flex gap-3">
          {(medicos.length > 0 ? medicos : [
            { nome: "Dr. Silva", especialidade: "Clínico Geral" },
            { nome: "Dra. Santos", especialidade: "Pediatria" },
            { nome: "Dr. Oliveira", especialidade: "Dermatologia" },
          ]).map((med, i) => (
            <div key={i} className="flex-1 rounded-xl border border-gray-200 bg-white p-4 text-center">
              <div className="mx-auto mb-2 h-14 w-14 rounded-full flex items-center justify-center" style={{ backgroundColor: `${color}12` }}>
                <User className="h-7 w-7" style={{ color }} />
              </div>
              <div className="text-xs font-semibold">{med.nome}</div>
              <div className="text-[10px] text-gray-500 mt-0.5">{med.especialidade}</div>
              <button className="mt-3 w-full rounded-full border border-gray-200 px-3 py-1.5 text-[10px] font-medium text-gray-900 hover:bg-gray-100 transition-all">
                Agendar
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* CONFIANÇA */}
      <div className="px-6 py-6 border-y border-gray-200">
        <div className="flex items-center justify-center gap-6">
          {proofBadges.map((b, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <BadgeCheck className="h-4 w-4" style={{ color }} />
              <span className="text-[11px] font-medium">{b}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA FINAL */}
      <div className="px-6 py-10 text-center" style={{ background: `linear-gradient(160deg, ${color}06, ${color}12)` }}>
        <h2 className="text-xl font-bold tracking-tight">Agende sua consulta agora</h2>
        <p className="mt-2 text-sm text-gray-500">Atendimento humanizado e sem burocracia</p>
        <button className="mt-4 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg" style={{ backgroundColor: color }}>
          <Calendar className="h-4 w-4" /> Agendar pelo WhatsApp
        </button>
      </div>

      {/* FOOTER */}
      <footer className="px-6 py-6 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="h-6 w-6 rounded-md flex items-center justify-center" style={{ backgroundColor: color }}>
                <Stethoscope className="h-3 w-3 text-white" />
              </div>
              <span className="text-xs font-bold">{name}</span>
            </div>
            <div className="text-[10px] text-gray-500">© 2026 {name}. Todos os direitos reservados.</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-[10px] text-gray-500"><MapPin className="h-3 w-3" /> São Paulo, SP</div>
            <div className="flex items-center gap-1 text-[10px] text-gray-500"><Phone className="h-3 w-3" /> (11) 99999-9999</div>
            <div className="flex items-center gap-1 text-[10px] text-gray-500"><Mail className="h-3 w-3" /> contato@clinica.com</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════ */
/*  LOJA - Landpage completa                                 */
/* ═══════════════════════════════════════════════════════════ */
function LojaPreview({ name, slogan, color, proofBadges, extras }: {
  name: string; slogan: string; color: string; proofBadges: string[];
  extras: Record<string, unknown>;
}) {
  const produtos = (extras.produtos as { nome: string; preco: string; precoDe: string }[]) || [];
  const freteGratis = extras.freteGratis as string;

  return (
    <div className="bg-white text-gray-900">
      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-5 py-3 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-lg flex items-center justify-center" style={{ backgroundColor: color }}>
            <ShoppingBag className="h-4 w-4 text-white" />
          </div>
          <span className="text-sm font-bold tracking-tight">{name}</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[11px] text-gray-500 hover:text-gray-900 cursor-pointer">Catálogo</span>
          <span className="text-[11px] text-gray-500 hover:text-gray-900 cursor-pointer">Ofertas</span>
          <span className="text-[11px] text-gray-500 hover:text-gray-900 cursor-pointer">Sobre</span>
          <div className="relative">
            <ShoppingCart className="h-5 w-5" style={{ color }} />
            <div className="absolute -top-1.5 -right-2 h-4 w-4 rounded-full bg-red-500 text-[8px] text-white flex items-center justify-center font-bold">2</div>
          </div>
        </div>
      </nav>

      {/* BANNER PROMO */}
      <div className="px-6 py-8 text-center text-white" style={{ background: `linear-gradient(135deg, ${color}, ${color}cc)` }}>
        <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-[10px] font-semibold">
          <Flame className="h-3 w-3" /> OFERTA ESPECIAL
        </div>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">{slogan || "50% OFF em Tudo!"}</h1>
        <p className="mt-2 text-sm text-white/80">Aproveite as ofertas por tempo limitado</p>
        <button className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold shadow-lg transition-all hover:scale-105" style={{ color }}>
          Ver Ofertas <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      {/* PRODUTOS */}
      <div className="px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color }}>Destaques</span>
            <h2 className="text-xl font-bold tracking-tight mt-1">Mais Vendidos</h2>
          </div>
          <span className="text-[11px] font-medium cursor-pointer flex items-center gap-1" style={{ color }}>
            Ver todos <ChevronRight className="h-3 w-3" />
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {(produtos.length > 0 ? produtos : [
            { nome: "Produto Premium", preco: "49,90", precoDe: "99,90" },
            { nome: "Kit Completo", preco: "74,90", precoDe: "149,90" },
            { nome: "Essencial", preco: "34,90", precoDe: "69,90" },
            { nome: "Profissional", preco: "59,90", precoDe: "119,90" },
          ]).map((prod, i) => (
            <div key={i} className="group rounded-xl border border-gray-200 bg-white overflow-hidden hover:shadow-md transition-all cursor-pointer">
              <div className="relative h-24 w-full flex items-center justify-center" style={{ backgroundColor: `${color}06` }}>
                <Package className="h-8 w-8" style={{ color, opacity: 0.3 }} />
                <div className="absolute top-2 left-2 rounded-full bg-red-500 px-2 py-0.5 text-[8px] font-bold text-white">
                  -50%
                </div>
              </div>
              <div className="p-3">
                <div className="text-xs font-semibold truncate">{prod.nome}</div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[10px] text-gray-500 line-through">R$ {prod.precoDe}</span>
                  <span className="text-sm font-bold" style={{ color }}>R$ {prod.preco}</span>
                </div>
                <button className="mt-2 w-full rounded-lg py-1.5 text-[10px] font-semibold text-white" style={{ backgroundColor: color }}>
                  Adicionar ao Carrinho
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* VANTAGENS */}
      <div className="px-6 py-8 bg-gray-50">
        <div className="grid grid-cols-3 gap-4">
          {[
            { icon: <Truck className="h-5 w-5" />, title: freteGratis || "Frete Grátis", desc: "Acima de R$99" },
            { icon: <Shield className="h-5 w-5" />, title: "Compra Segura", desc: "Pagamento protegido" },
            { icon: <CreditCard className="h-5 w-5" />, title: "Parcelamento", desc: "Até 12x sem juros" },
          ].map((v, i) => (
            <div key={i} className="text-center">
              <div className="mx-auto mb-2 h-10 w-10 rounded-full flex items-center justify-center" style={{ backgroundColor: `${color}12`, color }}>
                {v.icon}
              </div>
              <div className="text-[11px] font-semibold">{v.title}</div>
              <div className="text-[10px] text-gray-500 mt-0.5">{v.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* DEPOIMENTOS */}
      <div className="px-6 py-8">
        <div className="text-center mb-6">
          <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color }}>Avaliações</span>
          <h2 className="text-xl font-bold tracking-tight mt-1">O que nossos clientes dizem</h2>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, j) => <Star key={j} className="h-3 w-3 fill-amber-400 text-amber-400" />)}
          </div>
          <p className="text-[11px] text-gray-500 leading-relaxed">&ldquo;Produtos de excelente qualidade e entrega super rápida. Recomendo!&rdquo;</p>
          <div className="mt-3 flex items-center gap-2">
            <div className="h-7 w-7 rounded-full flex items-center justify-center text-[10px] font-bold text-white" style={{ backgroundColor: color }}>AS</div>
            <div>
              <div className="text-[11px] font-semibold">Ana Silva</div>
              <div className="text-[9px] text-gray-500">Compra verificada</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA FINAL */}
      <div className="px-6 py-10 text-center" style={{ background: `linear-gradient(160deg, ${color}06, ${color}12)` }}>
        <h2 className="text-xl font-bold tracking-tight">Não perca essas ofertas!</h2>
        <p className="mt-2 text-sm text-gray-500">Compre agora pelo WhatsApp e ganhe frete grátis</p>
        <button className="mt-4 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg" style={{ backgroundColor: "#25D366" }}>
          <Phone className="h-4 w-4" /> Comprar pelo WhatsApp
        </button>
      </div>

      {/* FOOTER */}
      <footer className="px-6 py-6 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="h-6 w-6 rounded-md flex items-center justify-center" style={{ backgroundColor: color }}>
                <ShoppingBag className="h-3 w-3 text-white" />
              </div>
              <span className="text-xs font-bold">{name}</span>
            </div>
            <div className="text-[10px] text-gray-500">© 2026 {name}. Todos os direitos reservados.</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-[10px] text-gray-500"><Truck className="h-3 w-3" /> Entrega para todo Brasil</div>
            <div className="flex items-center gap-1 text-[10px] text-gray-500"><HeadphonesIcon className="h-3 w-3" /> Suporte 24h</div>
            <div className="flex items-center gap-1 text-[10px] text-gray-500"><Globe className="h-3 w-3" /> @{name.toLowerCase().replace(/\s+/g, "")}</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════ */
/*  STUDIO - Landpage completa                               */
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
    <div className="bg-white text-gray-900">
      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-5 py-3 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-lg flex items-center justify-center" style={{ backgroundColor: color }}>
            <Palette className="h-4 w-4 text-white" />
          </div>
          <span className="text-sm font-bold tracking-tight">{name}</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[11px] text-gray-500 hover:text-gray-900 cursor-pointer">Portfólio</span>
          <span className="text-[11px] text-gray-500 hover:text-gray-900 cursor-pointer">Serviços</span>
          <span className="text-[11px] text-gray-500 hover:text-gray-900 cursor-pointer">Sobre</span>
          <div className="rounded-full px-3 py-1.5 text-[10px] font-semibold text-white" style={{ backgroundColor: color }}>
            Orçamento
          </div>
        </div>
      </nav>

      {/* HERO */}
      <div className="relative px-6 pt-14 pb-16 text-center overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`, backgroundSize: "32px 32px" }} />
        <div className="relative z-10">
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold text-white/80">
            <Sparkles className="h-3 w-3" /> Estúdio Criativo
          </div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight max-w-md mx-auto text-white">
            {slogan || "Transformamos ideias em experiências digitais"}
          </h1>
          <p className="mt-3 text-sm text-gray-400 max-w-sm mx-auto">
            Criamos sites, sistemas e marcas que geram resultado. Seu projeto merece um time que entrega.
          </p>
          <div className="mt-5 flex items-center justify-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-lg transition-all hover:scale-105">
              Ver Portfólio <ArrowRight className="h-4 w-4" />
            </button>
            <button className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-all">
              <Phone className="h-4 w-4" /> Fale Conosco
            </button>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-3 border-b border-gray-200">
        {[
          { num: `${projetos + 40}+`, label: "Projetos entregues" },
          { num: "98%", label: "Clientes satisfeitos" },
          { num: "5+", label: "Anos de experiência" },
        ].map((s, i) => (
          <div key={i} className="px-4 py-5 text-center border-r border-gray-200 last:border-r-0">
            <div className="text-lg font-bold" style={{ color }}>{s.num}</div>
            <div className="text-[10px] text-gray-500 mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      {/* PORTFÓLIO */}
      <div className="px-6 py-8">
        <div className="text-center mb-6">
          <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color }}>Portfólio</span>
          <h2 className="text-xl font-bold tracking-tight mt-1">Nossos Trabalhos</h2>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="col-span-2 rounded-xl p-4 flex items-end min-h-[80px]" style={{ backgroundColor: projetoColors[0] }}>
            <div>
              <div className="text-[10px] font-semibold text-gray-900/80">E-commerce Premium</div>
              <div className="text-[9px] text-gray-900/50">Loja Virtual</div>
            </div>
          </div>
          <div className="rounded-xl p-3 flex items-center justify-center min-h-[80px]" style={{ backgroundColor: projetoColors[1] }}>
            <div className="text-center">
              <div className="text-[10px] font-semibold text-gray-900/80">App Mobile</div>
              <div className="text-[9px] text-gray-900/50">iOS & Android</div>
            </div>
          </div>
          <div className="rounded-xl p-3 flex items-center justify-center min-h-[80px]" style={{ backgroundColor: projetoColors[2] }}>
            <div className="text-center">
              <div className="text-[10px] font-semibold text-gray-900/80">SaaS Platform</div>
              <div className="text-[9px] text-gray-900/50">Dashboard</div>
            </div>
          </div>
          <div className="col-span-2 rounded-xl p-4 flex items-end min-h-[80px]" style={{ backgroundColor: projetoColors[3] }}>
            <div>
              <div className="text-[10px] font-semibold text-gray-900/80">Landpage Corporativa</div>
              <div className="text-[9px] text-gray-900/50">Conversão Alta</div>
            </div>
          </div>
        </div>
      </div>

      {/* SERVIÇOS */}
      <div className="px-6 py-8 bg-gray-50">
        <div className="text-center mb-6">
          <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color }}>Serviços</span>
          <h2 className="text-xl font-bold tracking-tight mt-1">O que fazemos</h2>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: <Globe className="h-5 w-5" />, title: "Sites & Landing Pages", desc: "Design moderno e alta conversão" },
            { icon: <Zap className="h-5 w-5" />, title: "Sistemas sob Medida", desc: "Automatize processos do seu negócio" },
            { icon: <Palette className="h-5 w-5" />, title: "Identidade Visual", desc: "Marca que transmite confiança" },
            { icon: <TrendingUp className="h-5 w-5" />, title: "Tráfego Pago", desc: "Atraia clientes certos" },
          ].map((svc, i) => (
            <div key={i} className="rounded-xl border border-gray-200 bg-white p-4">
              <div className="mb-2 h-8 w-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${color}12`, color }}>
                {svc.icon}
              </div>
              <div className="text-xs font-semibold">{svc.title}</div>
              <div className="text-[10px] text-gray-500 mt-0.5">{svc.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* PROCESSO */}
      <div className="px-6 py-8">
        <div className="text-center mb-6">
          <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color }}>Processo</span>
          <h2 className="text-xl font-bold tracking-tight mt-1">Como trabalhamos</h2>
        </div>
        <div className="flex gap-3">
          {(etapas.length > 0 ? etapas : ["Briefing", "Design", "Desenvolvimento", "Entrega"]).map((etapa, i) => (
            <div key={i} className="flex-1 text-center">
              <div className="mx-auto mb-2 h-10 w-10 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{ backgroundColor: color }}>
                {i + 1}
              </div>
              <div className="text-[11px] font-semibold">{etapa}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA FINAL */}
      <div className="px-6 py-10 text-center bg-gradient-to-b from-gray-900 to-gray-800">
        <h2 className="text-xl font-bold tracking-tight text-white">Pronto para começar?</h2>
        <p className="mt-2 text-sm text-gray-400">Vamos transformar sua ideia em realidade</p>
        <button className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-lg">
          <ArrowRight className="h-4 w-4" /> Pedir Orçamento Grátis
        </button>
      </div>

      {/* FOOTER */}
      <footer className="px-6 py-6 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="h-6 w-6 rounded-md flex items-center justify-center" style={{ backgroundColor: color }}>
                <Palette className="h-3 w-3 text-white" />
              </div>
              <span className="text-xs font-bold">{name}</span>
            </div>
            <div className="text-[10px] text-gray-500">© 2026 {name}. Todos os direitos reservados.</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-[10px] text-gray-500"><MapPin className="h-3 w-3" /> São Paulo, SP</div>
            <div className="flex items-center gap-1 text-[10px] text-gray-500"><Mail className="h-3 w-3" /> contato@studio.com</div>
            <div className="flex items-center gap-1 text-[10px] text-gray-500"><Globe className="h-3 w-3" /> @{name.toLowerCase().replace(/\s+/g, "")}</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════ */
/*  GENÉRICO - Landpage completa                             */
/* ═══════════════════════════════════════════════════════════ */
function GenericoPreview({ name, slogan, color, services, proofBadges }: {
  name: string; slogan: string; color: string; services: string[]; proofBadges: string[];
}) {
  return (
    <div className="bg-white text-gray-900">
      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-5 py-3 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-lg flex items-center justify-center" style={{ backgroundColor: color }}>
            <Briefcase className="h-4 w-4 text-white" />
          </div>
          <span className="text-sm font-bold tracking-tight">{name}</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[11px] text-gray-500 hover:text-gray-900 cursor-pointer">Serviços</span>
          <span className="text-[11px] text-gray-500 hover:text-gray-900 cursor-pointer">Sobre</span>
          <span className="text-[11px] text-gray-500 hover:text-gray-900 cursor-pointer">Contato</span>
          <div className="rounded-full px-3 py-1.5 text-[10px] font-semibold text-white" style={{ backgroundColor: color }}>
            Fale Conosco
          </div>
        </div>
      </nav>

      {/* HERO */}
      <div className="relative px-6 pt-10 pb-14 text-center overflow-hidden" style={{ background: `linear-gradient(160deg, ${color}06, ${color}12)` }}>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, ${color} 1px, transparent 0)`, backgroundSize: "24px 24px" }} />
        <div className="relative z-10">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-semibold" style={{ color, backgroundColor: `${color}12` }}>
            <Zap className="h-3 w-3" /> {name}
          </div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight max-w-md mx-auto">
            {slogan || "Soluções que geram resultado para o seu negócio"}
          </h1>
          <p className="mt-3 text-sm text-gray-500 max-w-sm mx-auto">
            Cada dia sem uma presença digital é uma venda perdida. Vamos mudar isso juntos.
          </p>
          <div className="mt-5 flex items-center justify-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105" style={{ backgroundColor: color }}>
              Fale Conosco <ArrowRight className="h-4 w-4" />
            </button>
            <button className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-100 transition-all">
              Nossos Serviços
            </button>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-3 border-b border-gray-200">
        {[
          { num: "500+", label: "Clientes atendidos" },
          { num: "99%", label: "Satisfação" },
          { num: "30d", label: "Prazo de entrega" },
        ].map((s, i) => (
          <div key={i} className="px-4 py-5 text-center border-r border-gray-200 last:border-r-0">
            <div className="text-lg font-bold" style={{ color }}>{s.num}</div>
            <div className="text-[10px] text-gray-500 mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      {/* SERVIÇOS */}
      <div className="px-6 py-8">
        <div className="text-center mb-6">
          <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color }}>Serviços</span>
          <h2 className="text-xl font-bold tracking-tight mt-1">O que oferecemos</h2>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {services.map((svc, i) => (
            <div key={i} className="group rounded-xl border border-gray-200 bg-white p-4 text-center hover:shadow-md transition-all cursor-pointer">
              <div className="mx-auto mb-3 h-12 w-12 rounded-full flex items-center justify-center" style={{ backgroundColor: `${color}12`, color }}>
                <Briefcase className="h-5 w-5" />
              </div>
              <div className="text-xs font-semibold">{svc}</div>
              <div className="text-[10px] text-gray-500 mt-1">Saiba mais</div>
            </div>
          ))}
        </div>
      </div>

      {/* CONFIANÇA */}
      <div className="px-6 py-8 bg-gray-50">
        <div className="text-center mb-6">
          <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color }}>Por que nos escolher</span>
          <h2 className="text-xl font-bold tracking-tight mt-1">Nossa garantia</h2>
        </div>
        <div className="flex items-center justify-center gap-6">
          {proofBadges.map((b, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <BadgeCheck className="h-4 w-4" style={{ color }} />
              <span className="text-[11px] font-medium">{b}</span>
            </div>
          ))}
        </div>
      </div>

      {/* DEPOIMENTOS */}
      <div className="px-6 py-8">
        <div className="text-center mb-6">
          <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color }}>Depoimentos</span>
          <h2 className="text-xl font-bold tracking-tight mt-1">O que dizem sobre nós</h2>
        </div>
        <div className="space-y-3">
          {[
            { name: "Carlos M.", text: "Profissionais excepcionais. Nosso faturamento triplicou depois do novo site.", role: "CEO, TechCorp" },
            { name: "Fernanda L.", text: "Entrega no prazo e resultado acima do esperado. Super recomendo!", role: "Diretora, Moda Express" },
          ].map((dep, i) => (
            <div key={i} className="rounded-xl border border-gray-200 bg-white p-4">
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, j) => <Star key={j} className="h-3 w-3 fill-amber-400 text-amber-400" />)}
              </div>
              <p className="text-[11px] text-gray-500 leading-relaxed">&ldquo;{dep.text}&rdquo;</p>
              <div className="mt-2 flex items-center gap-2">
                <div className="h-6 w-6 rounded-full flex items-center justify-center text-[9px] font-bold text-white" style={{ backgroundColor: color }}>
                  {dep.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <div className="text-[10px] font-semibold">{dep.name}</div>
                  <div className="text-[9px] text-gray-500">{dep.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA FINAL */}
      <div className="px-6 py-10 text-center" style={{ background: `linear-gradient(160deg, ${color}06, ${color}12)` }}>
        <h2 className="text-xl font-bold tracking-tight">Cada dia sem site é venda perdida</h2>
        <p className="mt-2 text-sm text-gray-500">Vamos criar sua presença digital agora</p>
        <button className="mt-4 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg" style={{ backgroundColor: color }}>
          <MessageCircle className="h-4 w-4" /> Quero meu site agora
        </button>
      </div>

      {/* FOOTER */}
      <footer className="px-6 py-6 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="h-6 w-6 rounded-md flex items-center justify-center" style={{ backgroundColor: color }}>
                <Briefcase className="h-3 w-3 text-white" />
              </div>
              <span className="text-xs font-bold">{name}</span>
            </div>
            <div className="text-[10px] text-gray-500">© 2026 {name}. Todos os direitos reservados.</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-[10px] text-gray-500"><MapPin className="h-3 w-3" /> São Paulo, SP</div>
            <div className="flex items-center gap-1 text-[10px] text-gray-500"><Phone className="h-3 w-3" /> (11) 99999-9999</div>
            <div className="flex items-center gap-1 text-[10px] text-gray-500"><Mail className="h-3 w-3" /> contato@{name.toLowerCase().replace(/\s+/g, "")}.com</div>
          </div>
        </div>
      </footer>
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
  fullscreen,
  onCloseFullscreen,
}: SitePreviewProps) {
  const tiltRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (fullscreen) return;
    const el = tiltRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) scale(1.015)`;
  }, [fullscreen]);

  const handleMouseLeave = useCallback(() => {
    if (fullscreen) return;
    const el = tiltRef.current;
    if (!el) return;
    el.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) scale(1)";
    el.style.transition = "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
    setTimeout(() => {
      if (el) el.style.transition = "";
    }, 500);
  }, [fullscreen]);

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

  if (fullscreen) {
    return (
      <div
        className="fixed inset-0 z-50 flex flex-col bg-white overflow-hidden"
        onWheel={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200/30 bg-white/80 backdrop-blur-md shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold" style={{ color }}>{displayName}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-gray-500">{displayName.toLowerCase().replace(/\s+/g, "")}.com.br</span>
            <button
              onClick={onCloseFullscreen}
              className="ml-2 rounded-full border border-gray-200 px-3 py-1 text-[10px] font-medium text-gray-500 hover:bg-gray-100 transition-colors"
            >
              Fechar preview ✕
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-3xl mx-auto min-h-full">
            {renderPreview()}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative w-full rounded-2xl transition-shadow duration-700"
      style={{
        boxShadow: `0 0 80px -20px ${color}35, 0 25px 50px -12px rgba(0,0,0,0.15)`,
      }}
    >
      <div
        ref={tiltRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="rounded-2xl border border-gray-200/50 bg-white transition-transform duration-200 ease-out"
      >
        <BrowserChrome name={displayName} />
        {renderPreview()}
      </div>
    </div>
  );
}
