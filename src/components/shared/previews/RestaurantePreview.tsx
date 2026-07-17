"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import RestaurantSvg from "./RestaurantSvg";
import SvgChefe1 from "./SVG/Chefe1";
import SvgChefe2 from "./SVG/Chefe2";
import {
  Clock, Truck, Utensils, Phone, MessageCircle, Timer,
  MapPin, Globe, Star, ArrowRight, CheckCircle2, Award,
  Users, Flame, Leaf, ChefHat,
} from "lucide-react";

interface RestaurantePreviewProps {
  name: string;
  slogan: string;
  color: string;
  proofBadges: string[];
  extras: Record<string, unknown>;
}

export default function RestaurantePreview({ name, slogan, color, proofBadges, extras }: RestaurantePreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showSplash, setShowSplash] = useState(true);

  const menu = (extras.menu as { nome: string; preco: string }[]) || [];
  const horario = (extras.horario as string) || "18h - 23h";
  const tempoEntrega = (extras.tempoEntrega as string) || "30-45min";

  const defaultMenu = [
    { nome: "Pizza Margherita", preco: "35", desc: "Molho San Marzano, mozzarella de búfala" },
    { nome: "Hambúrguer Artesanal", preco: "42", desc: "Pão brioche, blend 180g, cheddar" },
    { nome: "Açaí Premium", preco: "18", desc: "Açaí orgânico, banana, granola" },
    { nome: "Combo Família", preco: "89", desc: "2 pizzas + refri + sobremesa" },
    { nome: "Risoto de Camarão", preco: "56", desc: "Arroz arbóreo, camarões grelhados" },
    { nome: "Tiramisù", preco: "22", desc: "Massa folhada, café, mascarpone" },
  ];

  const menuData = menu.length > 0
    ? menu.map(m => ({ ...m, desc: "Prato especial da casa" }))
    : defaultMenu;

  // Splash + GSAP entrance animations
  useEffect(() => {
    if (!containerRef.current) return;

    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 500);

    const ctx = gsap.context(() => {
      // Splash reveal
      gsap.fromTo(
        ".splash-icon",
        { scale: 0, rotation: -45 },
        { scale: 1, rotation: 0, duration: 0.7, ease: "back.out(2)", delay: 0.2 }
      );
      gsap.fromTo(
        ".splash-text",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.out", delay: 0.5 }
      );
      gsap.fromTo(
        ".splash-line",
        { scaleX: 0 },
        { scaleX: 1, duration: 0.6, ease: "power2.out", delay: 0.8 }
      );

      // Hero entrance
      gsap.fromTo(
        ".hero-eyebrow",
        { clipPath: "inset(0 100% 0 0)" },
        { clipPath: "inset(0 0% 0 0)", duration: 0.6, ease: "power2.out", delay: 0.6 }
      );

      // Title with 3D rotateX
      gsap.fromTo(
        ".hero-title-3d",
        { y: 50, opacity: 0, rotateX: -40 },
        { y: 0, opacity: 1, rotateX: 0, duration: 0.9, ease: "power4.out", delay: 0.7 }
      );

      gsap.fromTo(
        ".hero-sub",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", delay: 1 }
      );

      gsap.fromTo(
        ".hero-cta",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power3.out", delay: 1.2 }
      );

      gsap.fromTo(
        ".hero-trust",
        { opacity: 0 },
        { opacity: 1, duration: 0.6, delay: 1.5 }
      );

      // Stats animation
      gsap.fromTo(
        ".stat-item",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power3.out", delay: 1.7 }
      );

      // Menu cards
      gsap.fromTo(
        ".menu-card",
        { y: 30, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.08, ease: "power3.out", delay: 1.9 }
      );

      // Steps
      gsap.fromTo(
        ".step-item",
        { y: 30, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.15, ease: "power3.out", delay: 2.1 }
      );

      // Step numbers pop
      gsap.fromTo(
        ".step-num",
        { scale: 0, rotation: -45 },
        { scale: 1, rotation: 0, duration: 0.6, stagger: 0.15, ease: "back.out(2)", delay: 2.2 }
      );

      // Testimonials
      gsap.fromTo(
        ".dep-card",
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.12, ease: "power3.out", delay: 2.4 }
      );

      // CTA with 3D
      gsap.fromTo(
        ".cta-title-3d",
        { y: 40, opacity: 0, rotateX: -30 },
        { y: 0, opacity: 1, rotateX: 0, duration: 0.8, ease: "power4.out", delay: 2.6 }
      );

      gsap.fromTo(
        ".cta-sub",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6, delay: 2.8 }
      );

      gsap.fromTo(
        ".cta-btn",
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, delay: 3 }
      );

      // Restaurant SVG
      gsap.fromTo(
        ".restaurant-visual",
        { opacity: 0, scale: 0.92, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.9 }
      );

      // SVG draw animation
      const svgPaths = document.querySelectorAll(".restaurant-visual rect, .restaurant-visual circle, .restaurant-visual path, .restaurant-visual line, .restaurant-visual ellipse");
      svgPaths.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0 },
          { opacity: parseFloat(el.getAttribute("opacity") || "1"), duration: 0.4, delay: 1.1 + Math.random() * 0.8 }
        );
      });

    }, containerRef);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="@container min-h-full bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">

      {/* ═══ SPLASH ═══ */}
      {showSplash && (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-gray-950">
          <div className="splash-icon h-14 w-14 @md:h-18 @md:w-18 @lg:h-20 @lg:w-20 rounded-2xl flex items-center justify-center" style={{ backgroundColor: color }}>
            <Utensils className="h-7 w-7 @md:h-9 @md:w-9 @lg:h-10 @lg:w-10 text-white" />
          </div>
          <div className="splash-text mt-4 text-lg @md:text-xl @lg:text-2xl font-bold tracking-tight">{name}</div>
          <div className="splash-line mt-2 h-0.5 w-16 rounded-full" style={{ backgroundColor: color }} />
        </div>
      )}

      {/* ═══ NAVBAR ═══ */}
      <nav className="flex items-center justify-between px-3 py-2 @md:px-6 @md:py-3 @lg:px-10 @lg:py-4 border-b border-gray-200 dark:border-gray-700/50">
        <div className="flex items-center gap-1.5 @md:gap-2 @lg:gap-3">
          <div className="h-6 w-6 @md:h-8 @md:w-8 @lg:h-10 @lg:w-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: color }}>
            <Utensils className="h-3 w-3 @md:h-4 @md:w-4 @lg:h-5 @lg:w-5 text-white" />
          </div>
          <span className="text-xs @md:text-sm @lg:text-base font-bold tracking-tight text-gray-900 dark:text-gray-100">{name}</span>
        </div>
        <div className="flex items-center gap-2 @md:gap-3 @lg:gap-5">
          <span className="hidden @md:inline text-[10px] @md:text-xs @lg:text-sm text-gray-500 dark:text-gray-400" aria-hidden="true">Cardápio</span>
          <span className="hidden @md:inline text-[10px] @md:text-xs @lg:text-sm text-gray-500 dark:text-gray-400" aria-hidden="true">Sobre</span>
          <span className="hidden @md:inline text-[10px] @md:text-xs @lg:text-sm text-gray-500 dark:text-gray-400" aria-hidden="true">Contato</span>
          <div className="flex items-center gap-1 rounded-full px-2.5 py-1 @md:px-4 @md:py-1.5 @lg:px-5 @lg:py-2 text-[10px] @md:text-xs @lg:text-sm font-semibold text-white" style={{ backgroundColor: "#25D366" }}>
            <Phone className="h-3 w-3 @md:h-4 @md:w-4 @lg:h-5 @lg:w-5" /> Pedir
          </div>
        </div>
      </nav>

      {/* ═══ HERO ═══ */}
      <div className="relative px-5 @md:px-8 @lg:px-12 pt-8 @md:pt-12 @lg:pt-16 pb-10 @md:pb-14 @lg:pb-20">
        <div className="absolute inset-0 opacity-[0.03]" style={{ background: `radial-gradient(circle at 70% 30%, ${color}, transparent 70%)` }} />

        <div className="relative flex flex-col @md:flex-row @md:items-center @md:gap-6 @lg:gap-10">
          {/* Text — 50% */}
          <div className="flex-1 min-w-0">
            <div className="hero-eyebrow inline-flex items-center gap-2 mb-4 @md:mb-5 @lg:mb-6 text-[10px] @md:text-xs @lg:text-sm font-semibold" style={{ color }}>
              <span className="w-6 h-px" style={{ backgroundColor: color }} />
              {horario} · Aberto agora
            </div>

            <h1 className="hero-title-3d text-2xl @md:text-3xl @lg:text-[2.75rem] font-bold tracking-[-0.03em] leading-[1.05] @lg:leading-[1.08]" style={{ transformStyle: "preserve-3d" }}>
              {slogan || (
                <>
                  O melhor sabor da{" "}
                  <span style={{ color }}>cidade</span>{" "}
                  está aqui
                </>
              )}
            </h1>

            <p className="hero-sub mt-3 @md:mt-4 @lg:mt-5 text-xs @md:text-sm @lg:text-base text-gray-500 dark:text-gray-400 @lg:max-w-md leading-relaxed">
              Peça agora pelo WhatsApp e receba em até {tempoEntrega}. Frete grátis para pedidos acima de R$50.
            </p>

            <div className="mt-5 @md:mt-6 @lg:mt-7 flex items-center gap-3 @md:gap-4">
              <button className="hero-cta inline-flex items-center gap-2 rounded-full px-5 py-2.5 @md:px-6 @md:py-3 @lg:px-7 @lg:py-3 text-[11px] @md:text-xs @lg:text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg active:scale-[0.97]" style={{ backgroundColor: "#25D366" }}>
                Pedir agora <ArrowRight className="h-3.5 w-3.5 @md:h-4 @md:w-4" />
              </button>
              <button className="hero-cta inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-gray-700 px-4 py-2.5 @md:px-5 @md:py-3 @lg:px-6 @lg:py-3 text-[11px] @md:text-xs @lg:text-sm font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
                <Phone className="h-3.5 w-3.5 @md:h-4 @md:w-4" /> Ligar
              </button>
            </div>

            {/* TRUST ROW */}
            <div className="hero-trust mt-6 @md:mt-7 @lg:mt-8 flex items-center gap-4 @md:gap-5 @lg:gap-6">
              <div className="flex items-center gap-1.5">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => <Star key={j} className="h-3 w-3 @md:h-3.5 @md:w-3.5 @lg:h-4 @lg:w-4 fill-amber-400 text-amber-400" />)}
                </div>
                <span className="text-[10px] @md:text-xs @lg:text-sm font-semibold text-gray-900 dark:text-gray-100">4.9</span>
              </div>
              <div className="w-px h-4 @md:h-4 @lg:h-5 bg-gray-200 dark:bg-gray-700" />
              <div className="text-[10px] @md:text-xs @lg:text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold text-gray-900 dark:text-gray-100">15.000+</span> pedidos
              </div>
              <div className="w-px h-4 @md:h-4 @lg:h-5 bg-gray-200 dark:bg-gray-700" />
              <div className="text-[10px] @md:text-xs @lg:text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold text-gray-900 dark:text-gray-100">{tempoEntrega}</span> entrega
              </div>
            </div>
          </div>

          {/* Restaurant illustration — 50% */}
          <div className="restaurant-visual relative flex-1 mt-8 @md:mt-0 hidden @md:flex items-center justify-center">
            <div className="relative w-full max-w-[340px] @md:max-w-[400px] @lg:max-w-[500px]">
              <RestaurantSvg color={color} />
              
              {/* Chefe 1 - esquerda */}
              <div className="absolute bottom-[15%] left-[2%] @md:left-[0%] @lg:left-[-2%] w-[28%] @md:w-[25%] @lg:w-[22%] z-10">
                <SvgChefe1 className="w-full h-auto" color={color} />
              </div>
              
              {/* Chefe 2 - direita */}
              <div className="absolute bottom-[15%] right-[2%] @md:right-[0%] @lg:right-[-2%] w-[28%] @md:w-[25%] @lg:w-[22%] z-10">
                <SvgChefe2 className="w-full h-auto" color={color} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ STATS ═══ */}
      <div className="grid grid-cols-3 border-y border-gray-200 dark:border-gray-700/50">
        {[
          { icon: <CheckCircle2 className="h-4 w-4 @md:h-5 @md:w-5 @lg:h-6 @lg:w-6" />, num: "15k+", label: "Pedidos entregues" },
          { icon: <Star className="h-4 w-4 @md:h-5 @md:w-5 @lg:h-6 @lg:w-6 fill-amber-400 text-amber-400" />, num: "4.9", label: "Avaliação Google" },
          { icon: <Flame className="h-4 w-4 @md:h-5 @md:w-5 @lg:h-6 @lg:w-6" />, num: "30min", label: "Tempo médio" },
        ].map((s, i) => (
          <div key={i} className="stat-item px-2 @md:px-4 @lg:px-6 py-3 @md:py-5 @lg:py-6 text-center border-r border-gray-200 dark:border-gray-700/50 last:border-r-0">
            <div className="flex justify-center mb-1" style={{ color }}>{s.icon}</div>
            <div className="text-base @md:text-xl @lg:text-3xl font-bold" style={{ color }}>{s.num}</div>
            <div className="text-[9px] @md:text-xs @lg:text-sm text-gray-500 dark:text-gray-400 mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>

      {/* ═══ CARDÁPIO ═══ */}
      <div className="px-5 @md:px-8 @lg:px-12 py-8 @md:py-12 @lg:py-16">
        <div className="mb-6 @md:mb-8 @lg:mb-10">
          <div className="inline-flex items-center gap-2 mb-3 @md:mb-4 @lg:mb-5 text-[10px] @md:text-xs @lg:text-sm font-semibold" style={{ color }}>
            <span className="w-6 h-px" style={{ backgroundColor: color }} />
            Nosso Cardápio
          </div>
          <h2 className="text-lg @md:text-2xl @lg:text-3xl font-bold tracking-[-0.03em] leading-tight">
            Favoritos dos nossos <span style={{ color }}>clientes</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 @md:grid-cols-3 @lg:grid-cols-3 gap-3 @md:gap-5 @lg:gap-6">
          {menuData.map((item, i) => (
            <div key={i} className="menu-card group rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-3 @md:p-4 @lg:p-5 hover:shadow-lg transition-all cursor-pointer">
              <div className="h-16 @md:h-24 @lg:h-32 w-full rounded-lg mb-3 @md:mb-4 flex items-center justify-center" style={{ backgroundColor: `${color}08` }}>
                <Utensils className="h-6 w-6 @md:h-8 @md:w-8 @lg:h-10 @lg:w-10" style={{ color, opacity: 0.35 }} />
              </div>
              <div className="text-[11px] @md:text-sm @lg:text-base font-semibold">{item.nome}</div>
              <div className="text-[9px] @md:text-xs @lg:text-sm text-gray-500 dark:text-gray-400 mt-0.5">{item.desc}</div>
              <div className="mt-2 @md:mt-3">
                <div className="text-xs @md:text-sm @lg:text-base font-bold" style={{ color }}>R$ {item.preco}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ═══ COMO FUNCIONA ═══ */}
      <div className="px-5 @md:px-8 @lg:px-12 py-8 @md:py-12 @lg:py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="mb-6 @md:mb-8 @lg:mb-10">
          <div className="inline-flex items-center gap-2 mb-3 @md:mb-4 @lg:mb-5 text-[10px] @md:text-xs @lg:text-sm font-semibold" style={{ color }}>
            <span className="w-6 h-px" style={{ backgroundColor: color }} />
            Como Funciona
          </div>
          <h2 className="text-lg @md:text-2xl @lg:text-3xl font-bold tracking-[-0.03em] leading-tight">
            Simples e <span style={{ color }}>rápido</span>
          </h2>
        </div>

        <div className="flex gap-4 @md:gap-8 @lg:gap-12">
          {[
            { icon: <MessageCircle className="h-5 w-5 @md:h-6 @md:w-6 @lg:h-7 @lg:w-7" />, title: "Peça pelo WhatsApp", desc: "Escolha seus pratos e faça seu pedido" },
            { icon: <Timer className="h-5 w-5 @md:h-6 @md:w-6 @lg:h-7 @lg:w-7" />, title: "Preparo Rápido", desc: `Em até ${tempoEntrega} seu pedido sai` },
            { icon: <Truck className="h-5 w-5 @md:h-6 @md:w-6 @lg:h-7 @lg:w-7" />, title: "Entrega Grátis", desc: "Receba no conforto da sua casa" },
          ].map((step, i) => (
            <div key={i} className="step-item flex-1 text-center">
              <div className="step-num mx-auto mb-3 @md:mb-4 @lg:mb-5 h-10 w-10 @md:h-14 @md:w-14 @lg:h-16 @lg:w-16 rounded-full flex items-center justify-center" style={{ backgroundColor: `${color}12`, color }}>
                {step.icon}
              </div>
              <div className="text-[10px] @md:text-xs @lg:text-sm font-semibold">{step.title}</div>
              <div className="text-[9px] @md:text-xs @lg:text-sm text-gray-500 dark:text-gray-400 mt-0.5 @md:mt-1">{step.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ═══ ESPECIALIDADES ═══ */}
      <div className="px-5 @md:px-8 @lg:px-12 py-8 @md:py-12 @lg:py-16">
        <div className="mb-6 @md:mb-8 @lg:mb-10">
          <div className="inline-flex items-center gap-2 mb-3 @md:mb-4 @lg:mb-5 text-[10px] @md:text-xs @lg:text-sm font-semibold" style={{ color }}>
            <span className="w-6 h-px" style={{ backgroundColor: color }} />
            Nossos Diferenciais
          </div>
          <h2 className="text-lg @md:text-2xl @lg:text-3xl font-bold tracking-[-0.03em] leading-tight">
            Por que escolher a <span style={{ color }}>{name}</span>?
          </h2>
        </div>

        <div className="grid grid-cols-2 @md:grid-cols-2 @lg:grid-cols-2 gap-4 @md:gap-6 @lg:gap-8">
          {[
            { icon: <ChefHat className="h-5 w-5 @md:h-6 @md:w-6 @lg:h-7 @lg:w-7" />, title: "Chef Premiado", desc: "Cozinheiros com experiência internacional" },
            { icon: <Leaf className="h-5 w-5 @md:h-6 @md:w-6 @lg:h-7 @lg:w-7" />, title: "Ingredientes Frescos", desc: "Produção própria e fornecedores locais" },
            { icon: <Award className="h-5 w-5 @md:h-6 @md:w-6 @lg:h-7 @lg:w-7" />, title: "Qualidade Garantida", desc: "5 estrelas no Google com 2.000+ avaliações" },
            { icon: <Users className="h-5 w-5 @md:h-6 @md:w-6 @lg:h-7 @lg:w-7" />, title: "Ambiente Acolhedor", desc: "Espaço ideal para famílias e encontros" },
          ].map((item, i) => (
            <div key={i} className="diff-item flex items-start gap-3 @md:gap-4 p-3 @md:p-4 @lg:p-5 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 transition-colors">
              <div className="flex-shrink-0 h-9 w-9 @md:h-11 @md:w-11 @lg:h-12 @lg:w-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${color}10`, color }}>
                {item.icon}
              </div>
              <div>
                <div className="text-[11px] @md:text-sm @lg:text-base font-semibold">{item.title}</div>
                <div className="text-[9px] @md:text-xs @lg:text-sm text-gray-500 dark:text-gray-400 mt-0.5">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ═══ DEPOIMENTOS ═══ */}
      <div className="px-5 @md:px-8 @lg:px-12 py-8 @md:py-12 @lg:py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="mb-6 @md:mb-8 @lg:mb-10">
          <div className="inline-flex items-center gap-2 mb-3 @md:mb-4 @lg:mb-5 text-[10px] @md:text-xs @lg:text-sm font-semibold" style={{ color }}>
            <span className="w-6 h-px" style={{ backgroundColor: color }} />
            Depoimentos
          </div>
          <h2 className="text-lg @md:text-2xl @lg:text-3xl font-bold tracking-[-0.03em] leading-tight">
            O que dizem sobre <span style={{ color }}>nós</span>
          </h2>
        </div>

        <div className="space-y-3 @md:space-y-0 @md:grid @md:grid-cols-2 @md:gap-5 @lg:gap-6">
          {[
            { name: "Maria S.", text: "Melhor pizza da região! Entrega sempre pontual e o sabor é incrível. O combo família é perfeito para noites em família.", stars: 5 },
            { name: "João P.", text: "Pedi o hambúrguer artesanal e surpreendeu. Pão macio, carne suculenta. Super recomendo!", stars: 5 },
            { name: "Ana L.", text: "Açaí delicioso e porção generosa. Entregou antes do tempo. Virei cliente fiel!", stars: 5 },
            { name: "Carlos M.", text: "Pedido pelo WhatsApp foi super tranquilo. Chegou quentinho e muito saboroso. Nota 10!", stars: 5 },
          ].map((dep, i) => (
            <div key={i} className="dep-card rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-4 @md:p-5 @lg:p-6">
              <div className="flex items-center gap-0.5 mb-2">
                {[...Array(dep.stars)].map((_, j) => <Star key={j} className="h-3 w-3 @md:h-3.5 @md:w-3.5 @lg:h-4 @lg:w-4 fill-amber-400 text-amber-400" />)}
              </div>
              <p className="text-[10px] @md:text-xs @lg:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">&ldquo;{dep.text}&rdquo;</p>
              <div className="mt-3 text-[10px] @md:text-xs @lg:text-sm font-semibold">{dep.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ═══ CTA FINAL ═══ */}
      <div className="px-5 @md:px-8 @lg:px-12 py-8 @md:py-12 @lg:py-16 text-center" style={{ background: `linear-gradient(160deg, ${color}06, ${color}12)` }}>
        <h2 className="cta-title-3d text-lg @md:text-2xl @lg:text-4xl font-bold tracking-[-0.03em] leading-tight" style={{ transformStyle: "preserve-3d" }}>
          Pronto para <span style={{ color }}>pedir</span>?
        </h2>
        <p className="cta-sub mt-1.5 @md:mt-2 @lg:mt-3 text-xs @md:text-sm @lg:text-lg text-gray-500 dark:text-gray-400">Faça seu pedido agora pelo WhatsApp e receba em casa</p>
        <button className="cta-btn mt-3 @md:mt-5 @lg:mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 @md:px-8 @md:py-4 @lg:px-10 @lg:py-5 text-xs @md:text-sm @lg:text-base font-semibold text-white shadow-lg transition-all hover:shadow-xl active:scale-[0.97]" style={{ backgroundColor: "#25D366" }}>
          <Phone className="h-3.5 w-3.5 @md:h-5 @md:w-5 @lg:h-6 @lg:w-6" /> Pedir pelo WhatsApp
        </button>
      </div>

      {/* ═══ FOOTER ═══ */}
      <footer className="px-5 @md:px-8 @lg:px-12 py-4 @md:py-6 @lg:py-8 border-t border-gray-200 dark:border-gray-700/50">
        <div className="flex flex-col @md:flex-row @md:items-center @md:justify-between @lg:items-start gap-3 @md:gap-6">
          <div>
            <div className="flex items-center gap-2 mb-1.5 @md:mb-2">
              <div className="h-5 w-5 @md:h-7 @md:w-7 @lg:h-8 @lg:w-8 rounded-md flex items-center justify-center" style={{ backgroundColor: color }}>
                <Utensils className="h-2.5 w-2.5 @md:h-3.5 @md:w-3.5 @lg:h-4 @lg:w-4 text-white" />
              </div>
              <span className="text-[11px] @md:text-sm @lg:text-base font-bold">{name}</span>
            </div>
            <div className="text-[9px] @md:text-xs @lg:text-sm text-gray-500 dark:text-gray-400">© 2026 {name}. Todos os direitos reservados.</div>
          </div>
          <div className="flex flex-col @md:flex-row @md:items-center gap-1.5 @md:gap-4 @lg:gap-6">
            <div className="flex items-center gap-1 text-[9px] @md:text-xs @lg:text-sm text-gray-500 dark:text-gray-400"><MapPin className="h-3 w-3 @md:h-4 @md:w-4 @lg:h-5 @lg:w-5" /> São Paulo, SP</div>
            <div className="flex items-center gap-1 text-[9px] @md:text-xs @lg:text-sm text-gray-500 dark:text-gray-400"><Phone className="h-3 w-3 @md:h-4 @md:w-4 @lg:h-5 @lg:w-5" /> (11) 99999-9999</div>
            <div className="flex items-center gap-1 text-[9px] @md:text-xs @lg:text-sm text-gray-500 dark:text-gray-400"><Globe className="h-3 w-3 @md:h-4 @md:w-4 @lg:h-5 @lg:w-5" /> @{name.toLowerCase().replace(/\s+/g, "")}</div>
          </div>
        </div>
      </footer>
    </div>
  );
}