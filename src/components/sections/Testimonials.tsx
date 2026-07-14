"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Em 30 dias tínhamos uma landpage que converte. Antes perdíamos clientes por não ter presença online. Agora fechamos 3 contratos por mês só pelo site.",
    author: "Marcos Silva",
    role: "Dono, Silva & Filhos Materiais de Construção",
    city: "Guarulhos, SP",
    rating: 5,
    result: "+180% em orçamentos online",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
  },
  {
    quote:
      "Eu era contra site. Achava perda de tempo. Quando vi o primeiro pedido chegando pelo WhatsApp do site, mudei de ideia. Hoje é nosso canal principal.",
    author: "Fernanda Costa",
    role: "Proprietária, Studio Beleza & Arte",
    city: "Campinas, SP",
    rating: 5,
    result: "45+ leads/mês pelo site",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
  },
  {
    quote:
      "O sistema de agendamento online salvou nosso consultório. Pacientes agendam às 2h da manhã e a gente só confirma. Reduziu faltas em 60%.",
    author: "Dr. Ricardo Mendes",
    role: "Dentista, Clínica Sorriso",
    city: "São Paulo, SP",
    rating: 5,
    result: "-60% faltas em consultas",
    avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&q=80",
  },
  {
    quote:
      "Pedi um orçamento pra 3 agências. A Agência foi a única que entendeu que eu não queria site bonito, queria site que vendesse. E entregou.",
    author: "Carlos Eduardo",
    role: "Gerente, AutoPeças Brasil",
    city: "Rio de Janeiro, RJ",
    rating: 5,
    result: "Faturamento 2x em 4 meses",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
  },
];

export default function Testimonials() {
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
        ".test-header",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      ).fromTo(
        ".test-card",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.12, ease: "power3.out" },
        "-=0.4",
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="depoimentos"
      className="py-24 md:py-32 bg-background"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="test-header text-center">
          <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary">
            <span className="w-6 h-px bg-primary" />
            Quem confia em nos
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.02em]">
            Nossos clientes <span className="text-primary">reais</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground leading-relaxed">
            PMEs de verdade que cresceram com nossos serviços. Sem虚构, sem
            exagero — só resultados.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="test-card relative rounded-2xl border border-border/50 bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/10" />

              <div className="flex items-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              <blockquote className="text-sm leading-relaxed text-foreground">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="mt-5 flex items-center gap-3 border-t border-border/50 pt-5">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="h-11 w-11 rounded-full object-cover"
                  loading="lazy"
                />
                <div className="flex-1">
                  <p className="text-sm font-semibold">{t.author}</p>
                  <p className="text-xs text-muted-foreground">
                    {t.role} — {t.city}
                  </p>
                </div>
                <div className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {t.result}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
