"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const inspirations = [
  {
    title: "Clínica & Saúde",
    description: "Agendamento online, depoimentos de pacientes e destaque para profissionais.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80",
    color: "#0ea5e9",
    url: "https://www.zocdoc.com",
  },
  {
    title: "Restaurante & Delivery",
    description: "Cardápio digital, pedidos pelo WhatsApp e temporizador de entrega.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    color: "#f97316",
    url: "https://www.dominos.com",
  },
  {
    title: "Loja & E-commerce",
    description: "Catálogo com preços, carrinho de compras e checkout integrado.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    color: "#a855f7",
    url: "https://www.allbirds.com",
  },
  {
    title: "Estúdio & Criativo",
    description: "Portfólio visual, before/after e agendamento de serviços.",
    image: "https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=800&q=80",
    color: "#ec4899",
    url: "https://www.studiomarielouise.com",
  },
  {
    title: "Escritório & Profissional",
    description: "Captação de leads, calculadora de honorários e credibilidade.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    color: "#6366f1",
    url: "https://www.and.co",
  },
  {
    title: "Academia & Fitness",
    description: "Planos e preços, demonstração de exercícios e depoimentos visuais.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    color: "#10b981",
    url: "https://www.equinox.com",
  },
];

export default function Inspirations() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const totalWidth = track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${totalWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden overflow-x-hidden bg-background"
    >
      <div className="absolute top-0 left-0 right-0 z-10 pt-12 md:pt-16 pb-8 px-5 lg:px-8 bg-gradient-to-b from-background via-background to-transparent pointer-events-none">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary">
              <span className="w-6 h-px bg-primary" />
              Inspirações
            </div>
            <h2
              style={{ fontFamily: "var(--font-display), sans-serif" }}
              className="text-3xl md:text-5xl font-bold tracking-[-0.03em] leading-tight"
            >
              Tipos de landpage que{" "}
              <span className="text-primary">a gente cria</span>
            </h2>
          </div>
        </div>
      </div>

      <div
        ref={trackRef}
        className="flex items-center gap-8 pl-8 md:pl-16 pr-8"
        style={{ width: "max-content", marginTop: "180px" }}
      >
        {inspirations.map((item, i) => (
          <a
            key={item.title}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex-shrink-0 w-[300px] md:w-[420px] h-[70vh] rounded-2xl overflow-hidden border border-border/50 block"
          >
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading={i > 1 ? "lazy" : "eager"}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div
                className="mb-3 inline-block w-2 h-2 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <h3
                style={{ fontFamily: "var(--font-display), sans-serif" }}
                className="text-xl md:text-2xl font-bold tracking-[-0.02em] text-white mb-2"
              >
                {item.title}
              </h3>
              <p className="text-sm text-white/70 leading-relaxed max-w-[280px]">
                {item.description}
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs text-white/50 group-hover:text-white/80 transition-colors">
                Ver exemplo
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </div>
          </a>
        ))}
      </div>


    </section>
  );
}
