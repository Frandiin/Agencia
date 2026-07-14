"use client";

import { useEffect, useRef } from "react";
import { fadeInFromRef } from "@/lib/animations/fade-in";

const results = [
  {
    client: "Loja Virtual Express",
    metric: "+340%",
    label: "conversao em 3 meses",
    description:
      "Checkout de 7 passos para 3. Taxa de abandono caiu de 68% para 23%.",
  },
  {
    client: "Clinica Saude+",
    metric: "3x",
    label: "mais pacientes",
    description:
      "Agendamento online eliminou filas. Tempo de espera: 45min para 3min.",
  },
  {
    client: "Pizzaria do Bairro",
    metric: "62%",
    label: "vendas pelo celular",
    description:
      "Antes: 0% mobile. Agora: maioria das vendas vem do WhatsApp.",
  },
];

const stats = [
  { value: "200+", label: "PMEs atendidas" },
  { value: "95%", label: "Satisfacao" },
  { value: "30 dias", label: "Entrega" },
  { value: "24h", label: "Resposta" },
];

export default function Results() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    fadeInFromRef(ref, ".res-item", {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.08,
      scrollTrigger: {
        trigger: ref.current!,
        start: "top 70%",
      },
    });
  }, []);

  return (
    <section ref={ref} id="resultados" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="res-item mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.02em] leading-tight">
            Numeros que falam
            <br className="hidden md:block" />
            por nos
          </h2>
        </div>

        <div className="res-item divide-y divide-border/50">
          {results.map((result) => (
            <div
              key={result.client}
              className="group flex flex-col md:flex-row md:items-baseline gap-3 md:gap-6 py-6"
            >
              <span className="text-2xl md:text-3xl font-bold tracking-tight shrink-0 md:w-32">
                {result.metric}
              </span>
              <div className="flex-1">
                <span className="text-sm text-muted-foreground">
                  {result.label}
                </span>
                <span className="mx-2 text-border">·</span>
                <span className="text-sm font-medium">{result.client}</span>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  {result.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="res-item mt-12 flex flex-wrap gap-x-10 gap-y-4 text-sm text-muted-foreground">
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-baseline gap-2">
              <span className="font-semibold text-foreground">{stat.value}</span>
              <span>{stat.label}</span>
              {i < stats.length - 1 && (
                <span className="hidden md:inline text-border ml-4">|</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
