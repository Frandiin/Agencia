"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { X, Check } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function BeforeSvg() {
  return (
    <svg
      viewBox="0 0 340 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto text-red-500/40"
    >
      <rect className="ba-before-frame" x="1" y="1" width="338" height="258" rx="12" stroke="currentColor" strokeWidth="1.5" pathLength="1" strokeDasharray="1" strokeDashoffset="1" />
      <line className="ba-before-bar" x1="1" y1="42" x2="339" y2="42" stroke="currentColor" strokeWidth="1" opacity="0.5" pathLength="1" strokeDasharray="1" strokeDashoffset="1" />
      <circle className="ba-before-dot" cx="20" cy="21" r="4" stroke="currentColor" strokeWidth="1.2" pathLength="1" strokeDasharray="1" strokeDashoffset="1" />
      <circle className="ba-before-dot" cx="36" cy="21" r="4" stroke="currentColor" strokeWidth="1.2" pathLength="1" strokeDasharray="1" strokeDashoffset="1" />
      <circle className="ba-before-dot" cx="52" cy="21" r="4" stroke="currentColor" strokeWidth="1.2" pathLength="1" strokeDasharray="1" strokeDashoffset="1" />
      <rect className="ba-before-address" x="80" y="12" width="180" height="18" rx="4" stroke="currentColor" strokeWidth="1" opacity="0.4" pathLength="1" strokeDasharray="1" strokeDashoffset="1" />
      <line className="ba-before-line" x1="100" y1="70" x2="240" y2="70" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6" pathLength="1" strokeDasharray="1" strokeDashoffset="1" />
      <line className="ba-before-line" x1="120" y1="84" x2="220" y2="84" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" pathLength="1" strokeDasharray="1" strokeDashoffset="1" />
      <line className="ba-before-line" x1="30" y1="110" x2="310" y2="110" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.3" pathLength="1" strokeDasharray="1" strokeDashoffset="1" />
      <line className="ba-before-line" x1="30" y1="122" x2="280" y2="122" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.3" pathLength="1" strokeDasharray="1" strokeDashoffset="1" />
      <line className="ba-before-line" x1="30" y1="134" x2="300" y2="134" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.3" pathLength="1" strokeDasharray="1" strokeDashoffset="1" />
      <line className="ba-before-line" x1="30" y1="146" x2="260" y2="146" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.3" pathLength="1" strokeDasharray="1" strokeDashoffset="1" />
      <line className="ba-before-line" x1="30" y1="158" x2="290" y2="158" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.3" pathLength="1" strokeDasharray="1" strokeDashoffset="1" />
      <rect className="ba-before-btn" x="130" y="175" width="80" height="20" rx="2" stroke="currentColor" strokeWidth="1" opacity="0.4" pathLength="1" strokeDasharray="1" strokeDashoffset="1" />
      <line className="ba-before-line" x1="148" y1="187" x2="192" y2="187" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.3" pathLength="1" strokeDasharray="1" strokeDashoffset="1" />
      <rect className="ba-before-block" x="30" y="210" width="90" height="30" rx="4" stroke="currentColor" strokeWidth="1" opacity="0.25" pathLength="1" strokeDasharray="1" strokeDashoffset="1" />
      <rect className="ba-before-block" x="130" y="210" width="90" height="30" rx="4" stroke="currentColor" strokeWidth="1" opacity="0.25" pathLength="1" strokeDasharray="1" strokeDashoffset="1" />
      <rect className="ba-before-block" x="230" y="210" width="90" height="30" rx="4" stroke="currentColor" strokeWidth="1" opacity="0.25" pathLength="1" strokeDasharray="1" strokeDashoffset="1" />
    </svg>
  );
}

function AfterSvg() {
  return (
    <svg
      viewBox="0 0 340 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto text-primary"
    >
      <rect className="ba-after-frame" x="1" y="1" width="338" height="258" rx="12" stroke="currentColor" strokeWidth="1.5" pathLength="1" strokeDasharray="1" strokeDashoffset="1" />
      <line className="ba-after-bar" x1="1" y1="42" x2="339" y2="42" stroke="currentColor" strokeWidth="1" opacity="0.5" pathLength="1" strokeDasharray="1" strokeDashoffset="1" />
      <circle className="ba-after-dot" cx="20" cy="21" r="4" stroke="currentColor" strokeWidth="1.2" pathLength="1" strokeDasharray="1" strokeDashoffset="1" />
      <circle className="ba-after-dot" cx="36" cy="21" r="4" stroke="currentColor" strokeWidth="1.2" pathLength="1" strokeDasharray="1" strokeDashoffset="1" />
      <circle className="ba-after-dot" cx="52" cy="21" r="4" stroke="currentColor" strokeWidth="1.2" pathLength="1" strokeDasharray="1" strokeDashoffset="1" />
      <rect className="ba-after-address" x="80" y="12" width="180" height="18" rx="4" stroke="currentColor" strokeWidth="1" opacity="0.4" pathLength="1" strokeDasharray="1" strokeDashoffset="1" />
      <line className="ba-after-line" x1="30" y1="65" x2="160" y2="65" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" pathLength="1" strokeDasharray="1" strokeDashoffset="1" />
      <line className="ba-after-line" x1="30" y1="80" x2="120" y2="80" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" pathLength="1" strokeDasharray="1" strokeDashoffset="1" />
      <line className="ba-after-line" x1="30" y1="100" x2="180" y2="100" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.3" pathLength="1" strokeDasharray="1" strokeDashoffset="1" />
      <line className="ba-after-line" x1="30" y1="112" x2="150" y2="112" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.3" pathLength="1" strokeDasharray="1" strokeDashoffset="1" />
      <rect className="ba-after-btn" x="30" y="128" width="100" height="24" rx="12" stroke="currentColor" strokeWidth="1.5" opacity="0.6" pathLength="1" strokeDasharray="1" strokeDashoffset="1" />
      <line className="ba-after-line" x1="52" y1="143" x2="108" y2="143" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" pathLength="1" strokeDasharray="1" strokeDashoffset="1" />
      <rect className="ba-after-image" x="210" y="55" width="110" height="100" rx="8" stroke="currentColor" strokeWidth="1.3" opacity="0.35" pathLength="1" strokeDasharray="1" strokeDashoffset="1" />
      <line className="ba-after-imgline" x1="235" y1="85" x2="280" y2="85" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.2" pathLength="1" strokeDasharray="1" strokeDashoffset="1" />
      <line className="ba-after-imgline" x1="235" y1="97" x2="265" y2="97" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.2" pathLength="1" strokeDasharray="1" strokeDashoffset="1" />
      <rect className="ba-after-card" x="30" y="170" width="90" height="50" rx="6" stroke="currentColor" strokeWidth="1" opacity="0.3" pathLength="1" strokeDasharray="1" strokeDashoffset="1" />
      <rect className="ba-after-card" x="130" y="170" width="90" height="50" rx="6" stroke="currentColor" strokeWidth="1" opacity="0.3" pathLength="1" strokeDasharray="1" strokeDashoffset="1" />
      <rect className="ba-after-card" x="230" y="170" width="90" height="50" rx="6" stroke="currentColor" strokeWidth="1" opacity="0.3" pathLength="1" strokeDasharray="1" strokeDashoffset="1" />
      <rect className="ba-after-bottom" x="110" y="235" width="120" height="18" rx="9" stroke="currentColor" strokeWidth="1.3" opacity="0.5" pathLength="1" strokeDasharray="1" strokeDashoffset="1" />
    </svg>
  );
}

const beforeItems = [
  "Texto genérico sem foco no cliente",
  "Botão 'Saiba mais' que não converte",
  "Layout confuso, informação demais",
  "Não funciona bem no celular",
  "Velocidade de carregamento lenta",
];

const afterItems = [
  "Copy que fala a língua do cliente",
  "CTA claro: 'Quero meu site agora'",
  "Layout limpo, guia o olhar pro botão",
  "100% responsivo, funciona em qualquer tela",
  "Carregamento rápido em menos de 3 segundos",
];

export default function BeforeAfter() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top 75%",
        },
      });

      tl.fromTo(
        ".ba-header",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      )
        .fromTo(
          ".ba-before",
          { x: -40, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
          "-=0.4",
        )
        .fromTo(
          ".ba-after",
          { x: 40, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
          "-=0.5",
        );

      gsap.fromTo(
        ".ba-item-before",
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".ba-before",
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".ba-item-after",
        { x: 20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".ba-after",
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".ba-before .ba-svg-parallax",
        { scale: 0.95, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".ba-before",
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".ba-after .ba-svg-parallax",
        { scale: 0.95, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".ba-after",
            start: "top 80%",
          },
        }
      );

      const beforeDraw = gsap.timeline({ repeat: -1, delay: 0.5 });
      beforeDraw
        .set(".ba-before-frame, .ba-before-bar, .ba-before-dot, .ba-before-address, .ba-before-line, .ba-before-btn, .ba-before-block", { strokeDashoffset: 1 })
        .to(".ba-before-frame", { strokeDashoffset: 0, duration: 0.8, ease: "power2.inOut" })
        .to(".ba-before-bar", { strokeDashoffset: 0, duration: 0.2, ease: "power1.out" }, "-=0.5")
        .to(".ba-before-address", { strokeDashoffset: 0, duration: 0.2, ease: "power1.out" }, "-=0.1")
        .to(".ba-before-dot", { strokeDashoffset: 0, duration: 0.15, stagger: 0.03, ease: "power1.out" }, "-=0.1")
        .to(".ba-before-line", { strokeDashoffset: 0, duration: 0.4, stagger: 0.02, ease: "power1.out" }, "-=0.1")
        .to(".ba-before-btn", { strokeDashoffset: 0, duration: 0.25, ease: "power1.out" }, "-=0.3")
        .to(".ba-before-block", { strokeDashoffset: 0, duration: 0.3, stagger: 0.04, ease: "power1.out" }, "-=0.2")
        .to(".ba-before-frame, .ba-before-bar, .ba-before-dot, .ba-before-address, .ba-before-line, .ba-before-btn, .ba-before-block", { strokeDashoffset: 1, duration: 0.5, ease: "power2.in" })
        .set(".ba-before-frame, .ba-before-bar, .ba-before-dot, .ba-before-address, .ba-before-line, .ba-before-btn, .ba-before-block", { strokeDashoffset: 1 });

      // Draw after SVG loop
      const afterDraw = gsap.timeline({ repeat: -1, delay: 1 });
      afterDraw
        .set(".ba-after-frame, .ba-after-bar, .ba-after-dot, .ba-after-address, .ba-after-line, .ba-after-btn, .ba-after-image, .ba-after-imgline, .ba-after-card, .ba-after-bottom", { strokeDashoffset: 1 })
        .to(".ba-after-frame", { strokeDashoffset: 0, duration: 0.8, ease: "power2.inOut" })
        .to(".ba-after-bar", { strokeDashoffset: 0, duration: 0.2, ease: "power1.out" }, "-=0.5")
        .to(".ba-after-address", { strokeDashoffset: 0, duration: 0.2, ease: "power1.out" }, "-=0.1")
        .to(".ba-after-dot", { strokeDashoffset: 0, duration: 0.15, stagger: 0.03, ease: "power1.out" }, "-=0.1")
        .to(".ba-after-line", { strokeDashoffset: 0, duration: 0.4, stagger: 0.02, ease: "power1.out" }, "-=0.1")
        .to(".ba-after-btn", { strokeDashoffset: 0, duration: 0.25, ease: "power1.out" }, "-=0.3")
        .to(".ba-after-image", { strokeDashoffset: 0, duration: 0.3, ease: "power2.inOut" }, "-=0.2")
        .to(".ba-after-imgline", { strokeDashoffset: 0, duration: 0.15, stagger: 0.02, ease: "power1.out" }, "-=0.1")
        .to(".ba-after-card", { strokeDashoffset: 0, duration: 0.25, stagger: 0.04, ease: "power1.out" }, "-=0.15")
        .to(".ba-after-bottom", { strokeDashoffset: 0, duration: 0.2, ease: "power1.out" }, "-=0.1")
        .to(".ba-after-frame, .ba-after-bar, .ba-after-dot, .ba-after-address, .ba-after-line, .ba-after-btn, .ba-after-image, .ba-after-imgline, .ba-after-card, .ba-after-bottom", { strokeDashoffset: 1, duration: 0.5, ease: "power2.in" })
        .set(".ba-after-frame, .ba-after-bar, .ba-after-dot, .ba-after-address, .ba-after-line, .ba-after-btn, .ba-after-image, .ba-after-imgline, .ba-after-card, .ba-after-bottom", { strokeDashoffset: 1 });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="py-24 md:py-32 bg-muted/30 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="ba-header text-center">
          <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary">
            <span className="w-6 h-px bg-primary" />
            Comparação
          </div>
          <h2 style={{ fontFamily: "var(--font-display), sans-serif" }} className="text-3xl md:text-5xl font-bold tracking-[-0.03em] leading-tight">
            Antes e <span className="text-primary">depois</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
            Veja a diferença entre um site genérico e uma landpage feita pra converter.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Antes */}
          <div className="ba-before">
            <div className="rounded-2xl border border-border/50 bg-card p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10">
                  <X className="h-5 w-5 text-red-500" />
                </div>
                <div>
                  <h3 style={{ fontFamily: "var(--font-display), sans-serif" }} className="font-bold text-xl text-foreground tracking-[-0.03em]">Site genérico</h3>
                  <p className="text-xs text-muted-foreground">O que você provavelmente tem hoje</p>
                </div>
              </div>

              <div className="mb-6 rounded-xl border border-border/30 bg-muted/50 p-4 ba-svg-parallax">
                <BeforeSvg />
              </div>

              <div className="space-y-3">
                {beforeItems.map((item, i) => (
                  <div key={i} className="ba-item-before flex items-start gap-3">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-red-500/60" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Depois */}
          <div className="ba-after">
            <div className="rounded-2xl border border-primary/30 bg-card p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 style={{ fontFamily: "var(--font-display), sans-serif" }} className="font-bold text-xl text-foreground tracking-[-0.03em]">Landpage que vende</h3>
                  <p className="text-xs text-muted-foreground">O que a gente cria pra você</p>
                </div>
              </div>

              <div className="mb-6 rounded-xl border border-primary/20 bg-primary/5 p-4 ba-svg-parallax">
                <AfterSvg />
              </div>

              <div className="space-y-3">
                {afterItems.map((item, i) => (
                  <div key={i} className="ba-item-after flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
