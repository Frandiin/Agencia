"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import BrowserSvg from "@/components/shared/BrowserSvg";
import {
  ArrowRight,
  ShieldCheck,
  Clock,
  CreditCard,
  TrendingUp,
  Star,
  Check,
  Code2,
  Paintbrush,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(DrawSVGPlugin);
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        ".hero-eyebrow",
        { clipPath: "inset(0 100% 0 0)" },
        { clipPath: "inset(0 0% 0 0)", duration: 0.7 },
      )
        .fromTo(
          ".hero-line",
          { y: 80, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, stagger: 0.08 },
          "-=0.3",
        )
        .fromTo(
          ".hero-sub",
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.5",
        )
        .fromTo(
          ".hero-cta",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 },
          "-=0.3",
        )
        .fromTo(
          ".hero-proof",
          { opacity: 0 },
          { opacity: 1, duration: 0.6 },
          "-=0.2",
        );

      gsap.fromTo(
        ".hero-visual",
        { opacity: 0, scale: 0.92, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.3,
        },
      );

      const drawElements = [
        ".draw-browser-frame",
        ".draw-browser-bar",
        ".draw-browser-address",
        ".draw-browser-dot",
        ".draw-content-line",
        ".draw-content-btn",
        ".draw-content-image",
        ".draw-content-img-line",
        ".draw-content-card",
      ];

      const drawLoop = gsap.timeline({ repeat: -1, delay: 1.5 });

      drawLoop
        .set(drawElements, { drawSVG: "0% 0%" })
        .to(".draw-browser-frame", { drawSVG: "0% 100%", duration: 0.8, ease: "power2.inOut" })
        .to(".draw-browser-bar", { drawSVG: "0% 100%", duration: 0.3, ease: "power1.out" }, "-=0.25")
        .to(".draw-browser-address", { drawSVG: "0% 100%", duration: 0.3, ease: "power1.out" }, "-=0.1")
        .to(".draw-browser-dot", { drawSVG: "0% 100%", duration: 0.2, stagger: 0.04, ease: "power1.out" }, "-=0.1")
        .to(".draw-content-line", { drawSVG: "0% 100%", duration: 0.35, stagger: 0.025, ease: "power1.out" }, "-=0.05")
        .to(".draw-content-btn", { drawSVG: "0% 100%", duration: 0.25, ease: "power1.out" }, "-=0.15")
        .to(".draw-content-image", { drawSVG: "0% 100%", duration: 0.35, ease: "power2.inOut" }, "-=0.2")
        .to(".draw-content-img-line", { drawSVG: "0% 100%", duration: 0.2, stagger: 0.03, ease: "power1.out" }, "-=0.1")
        .to(".draw-content-card", { drawSVG: "0% 100%", duration: 0.2, stagger: 0.04, ease: "power1.out" }, "-=0.05")
        .to(drawElements, { drawSVG: "100% 100%", duration: 0.6, stagger: 0.015, ease: "power2.in" })
        .set(drawElements, { drawSVG: "0% 0%" });

      gsap.fromTo(
        ".hero-float",
        { opacity: 0, y: 16, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "back.out(1.8)",
          delay: 0.9,
        },
      );

      gsap.to(".hf-1", {
        y: -6,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".hf-2", {
        y: 5,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.6,
      });
      gsap.to(".hf-3", {
        y: -5,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.2,
      });
      gsap.to(".hf-4", {
        y: 7,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.3,
      });
      gsap.to(".hf-5", {
        y: -8,
        duration: 2.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.9,
      });

      const heroText = ref.current?.querySelector(".flex-1.max-w-2xl");
      const heroVisual = ref.current?.querySelector(".hero-visual");
      const heroFloats = ref.current?.querySelectorAll(".hero-float");

      if (heroText && heroVisual) {
        const exitTl = gsap.timeline({
          scrollTrigger: {
            trigger: ref.current,
            start: "top top",
            end: "+=120%",
            pin: true,
            scrub: 1,
            anticipatePin: 1,
          },
        });

        exitTl
          .fromTo(
            heroText,
            { y: 0, opacity: 1 },
            { y: -60, opacity: 0, ease: "none" },
            0,
          )
          .fromTo(
            heroVisual,
            { y: 0, opacity: 1, scale: 1 },
            { y: -40, opacity: 0, scale: 0.96, ease: "none" },
            0,
          );

        if (heroFloats?.length) {
          exitTl.fromTo(
            heroFloats,
            { opacity: 1, y: 0 },
            { opacity: 0, y: -20, stagger: 0.01, ease: "none" },
            0,
          );
        }
      }
    }, ref);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-[100dvh] bg-background overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,var(--color-primary)_/_0.05,transparent)]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-12 min-h-[100dvh] pb-20 pt-24 lg:pb-24">
          {/* Text */}
          <div className="flex-1 max-w-2xl">
            <div className="hero-eyebrow mb-6 inline-flex items-center gap-2.5 text-xs font-semibold tracking-widest uppercase text-primary">
              <span className="w-6 h-px bg-primary" />
              Agencia digital para PMEs
            </div>

            <h1 className="overflow-hidden">
              <span className="hero-line block text-5xl sm:text-6xl md:text-7xl lg:text-[4.5rem] font-bold tracking-[-0.03em] leading-[0.95]">
                Sua empresa merece
              </span>
              <span className="hero-line block text-5xl sm:text-6xl md:text-7xl lg:text-[4.5rem] font-bold tracking-[-0.03em] leading-[0.95] text-primary">
                mais que um site generico
              </span>
            </h1>

            <p className="hero-sub mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
              Criamos landpages que convertem e sistemas que simplificam. Sem
              template. Sem enrolacao. Resultado em 30 dias ou seu dinheiro de
              volta.
            </p>

            <div className="hero-cta mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contato"
                className="inline-flex items-center gap-2.5 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.03] hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98]"
              >
                Comecar agora
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#resultados"
                className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-muted/50"
              >
                Ver resultados
              </a>
            </div>

            <div className="hero-proof mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-primary" />
                <span>200+ PMEs atendidas</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>Garantia de 30 dias</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="h-4 w-4 text-primary" />
                <span>Sem taxa de setup</span>
              </div>
            </div>
          </div>

          {/* Hero visual */}
          <div className="hero-visual relative flex-1 w-full max-w-md lg:max-w-lg xl:max-w-xl hidden md:flex items-center justify-center min-h-[500px]">
            {/* Decorative rings */}
            <div className="absolute w-[340px] h-[340px] xl:w-[400px] xl:h-[400px] rounded-full border border-dashed border-primary/15" />
            <div className="absolute w-[280px] h-[280px] xl:w-[330px] xl:h-[330px] rounded-full border border-primary/8" />

            {/* SVG Browser drawing */}
            <div className="relative z-10 w-[300px] xl:w-[340px] text-primary">
              <BrowserSvg />
            </div>

            {/* Float: +340% - top right */}
            <div className="hero-float hf-1 absolute top-4 right-0 xl:right-2 z-20 flex items-center gap-2.5 rounded-xl border border-border/50 bg-card/95 backdrop-blur-sm px-3.5 py-2 shadow-md shadow-black/5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                <TrendingUp className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-bold leading-none tracking-tight">+340%</p>
                <p className="text-[10px] text-muted-foreground mt-0.5">conversao</p>
              </div>
            </div>

            {/* Float: 4.9 stars - top left */}
            <div className="hero-float hf-2 absolute top-12 -left-4 xl:-left-8 z-20 flex items-center gap-2 rounded-xl border border-border/50 bg-card/95 backdrop-blur-sm px-3 py-2 shadow-md shadow-black/5">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-bold">4.9</span>
            </div>

            {/* Float: code icon - mid left */}
            <div className="hero-float hf-3 absolute top-1/2 -left-6 xl:-left-10 z-20 flex h-11 w-11 items-center justify-center rounded-xl border border-border/50 bg-card/95 backdrop-blur-sm shadow-md shadow-black/5">
              <Code2 className="h-5 w-5 text-primary" />
            </div>

            {/* Float: design icon - mid right */}
            <div className="hero-float hf-4 absolute top-[45%] -right-4 xl:-right-8 z-20 flex h-11 w-11 items-center justify-center rounded-xl border border-border/50 bg-card/95 backdrop-blur-sm shadow-md shadow-black/5">
              <Paintbrush className="h-5 w-5 text-accent" />
            </div>

            {/* Float: entrega - bottom left */}
            <div className="hero-float hf-5 absolute bottom-6 left-0 xl:-left-4 z-20 flex items-center gap-2 rounded-xl border border-border/50 bg-card/95 backdrop-blur-sm px-3.5 py-2 shadow-md shadow-black/5">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10">
                <Check className="h-3.5 w-3.5 text-primary" />
              </div>
              <span className="text-xs font-medium">Entregue em 30 dias</span>
            </div>

            {/* Dots */}
            <div className="absolute -top-4 left-[15%] grid grid-cols-4 gap-1 opacity-20">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="h-[3px] w-[3px] rounded-full bg-primary" />
              ))}
            </div>
            <div className="absolute -bottom-4 right-[15%] grid grid-cols-4 gap-1 opacity-20">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="h-[3px] w-[3px] rounded-full bg-primary" />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-px h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
