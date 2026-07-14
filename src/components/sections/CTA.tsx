"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";

export default function CTA() {
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
        ".cta-title",
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power4.out" },
      )
        .fromTo(
          ".cta-sub",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.5",
        )
        .fromTo(
          ".cta-buttons",
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.3",
        )
        .fromTo(
          ".cta-trust",
          { opacity: 0 },
          { opacity: 1, duration: 0.6 },
          "-=0.2",
        );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="contato"
      className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(255,255,255,0.06),transparent)]" />

      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
        <h2 className="cta-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.03em] leading-[0.95]">
          Cada dia sem landpage
          <br />
          e venda perdida
        </h2>

        <p className="cta-sub mx-auto mt-7 max-w-xl text-base md:text-lg opacity-80 leading-relaxed">
          Seus concorrentes ja estao convertendo online. Nao fique para tras.
          Comece agora — se nao gostar, devolvemos 100% do valor.
        </p>

        <div className="cta-buttons mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="mailto:contato@agencia.com"
            className="inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-gray-900 transition-all hover:scale-[1.03] hover:shadow-lg active:scale-[0.98]"
          >
            Comecar agora — e gratis
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-white/25 px-8 py-3.5 text-sm font-semibold transition-colors hover:bg-white/10"
          >
            Falar no WhatsApp
          </a>
        </div>

        <div className="cta-trust mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs opacity-60">
          <span>Sem compromisso</span>
          <span className="hidden sm:inline text-primary-foreground/30">|</span>
          <span>Resposta em 24h</span>
          <span className="hidden sm:inline text-primary-foreground/30">|</span>
          <span>Orcamento gratuito</span>
        </div>
      </div>
    </section>
  );
}
