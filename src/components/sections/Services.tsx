"use client";

import { useEffect, useRef, useState } from "react";
import { fadeInFromRef } from "@/lib/animations/fade-in";
import { Megaphone, Code2, TrendingUp, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Landpage que vende",
    description:
      "Seu site atual não converte? Criamos uma landpage com copy que persuade, design que guia e CTA que transforma visitante em cliente.",
    metric: "3x mais conversões",
    backTitle: "O que você recebe",
    backDetails: [
      "Copy persuasiva com gatilhos mentais",
      "Design que guia o olhar até o CTA",
      "Testes A/B para maximizar conversão",
      "Integração com analytics e pixels",
    ],
  },
  {
    icon: Code2,
    title: "Sistema sob medida",
    description:
      "Perde tempo com planilha e controle manual? Construímos o sistema que automatiza gestão de clientes, vendas e estoque, feito pro seu negócio.",
    metric: "20h/mês economizadas",
    backTitle: "O que você recebe",
    backDetails: [
      "Dashboard personalizado pro seu fluxo",
        "Automação de tarefas repetitivas",
      "Integração com ferramentas que já usa",
      "Suporte e evolução contínua",
    ],
  },
  {
    icon: TrendingUp,
    title: "Tráfego que retorna",
    description:
      "Investindo em ads e não vê resultado? Segmentamos Google Ads e Meta Ads pra cada centavo investido voltar multiplicado.",
    metric: "5x de ROI",
    backTitle: "O que você recebe",
    backDetails: [
      "Campanhas segmentadas por público",
      "Relatórios semanais com métricas reais",
      "Otimização contínua de lances e criativos",
      "Escalar o que funciona, cortar o que não",
    ],
  },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setFlippedIndex(null);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    fadeInFromRef(ref, ".svc-item", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.12,
      scrollTrigger: {
        trigger: ref.current!,
        start: "top 70%",
      },
    });
  }, []);

  const handleFlip = (index: number) => {
    if (window.innerWidth < 768) {
      setFlippedIndex(flippedIndex === index ? null : index);
    }
  };

  return (
    <section ref={ref} id="servicos" aria-labelledby="servicos-title" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="svc-item mb-16 max-w-2xl">
          <h2 id="servicos-title" style={{ fontFamily: "var(--font-display), sans-serif" }} className="text-3xl md:text-5xl font-bold tracking-[-0.03em] leading-tight">
            Site que vende. Sistema que simplifica.
            <br />
            Resultado em 30 dias.
          </h2>
          <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg">
            Sua empresa tá perdendo cliente por falta de presença online?
            Criamos landpages que convertem visitantes em vendas e sistemas
            que automatizam o que dá trabalho manual. Sem enrolação, com
            garantia de 30 dias.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5" style={{ perspective: "1200px" }}>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                onClick={() => handleFlip(index)}
                className="svc-item group relative h-[360px] cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front face */}
                <div
                  className={`absolute inset-0 rounded-2xl border border-border/60 bg-card p-7 md:p-8 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    flippedIndex === index
                      ? "[transform:rotateY(180deg)]"
                      : "group-hover:[transform:rotateY(180deg)]"
                  }`}
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                  <h3 style={{ fontFamily: "var(--font-display), sans-serif" }} className="mt-5 text-xl font-bold tracking-[-0.03em]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary">
                    <span className="h-1 w-1 rounded-full bg-primary" />
                    {service.metric}
                  </div>
                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); setFlippedIndex(flippedIndex === index ? null : index); }}
                    className="md:hidden absolute bottom-7 right-7 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                  >
                    Ver mais
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>

                {/* Back face */}
                <div
                  className={`absolute inset-0 rounded-2xl border border-primary/30 bg-primary p-7 md:p-8 text-primary-foreground transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    flippedIndex === index
                      ? "[transform:rotateY(0deg)]"
                      : "[transform:rotateY(180deg)] group-hover:[transform:rotateY(0deg)]"
                  }`}
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-foreground/15">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                  <h3 style={{ fontFamily: "var(--font-display), sans-serif" }} className="mt-5 text-xl font-bold tracking-[-0.03em]">
                    {service.backTitle}
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {service.backDetails.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-2.5 text-sm leading-relaxed opacity-90"
                      >
                        <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); setFlippedIndex(null); }}
                    className="md:hidden absolute bottom-7 right-7 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-foreground hover:underline"
                  >
                    Voltar
                    <ArrowRight className="h-3.5 w-3.5 rotate-180" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
