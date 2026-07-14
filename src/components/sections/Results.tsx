"use client";

import { useEffect, useRef } from "react";
import { fadeInFromRef } from "@/lib/animations/fade-in";
import CountUp from "@/components/shared/CountUp";

const results = [
  {
    client: "Loja Virtual Express",
    metric: "+80%",
    label: "mais conversões",
    description:
      "Checkout longo e carrinho abandonado. Simplificamos pra 3 passos e a taxa de conversão quase dobrou.",
  },
  {
    client: "Clínica Saúde+",
    metric: "2x",
    label: "mais agendamentos",
    description:
      "Pacientes perdidos por falta de agendamento online. Criamos o sistema, agenda lotou e espera caiu pela metade.",
  },
  {
    client: "Pizzaria do Bairro",
    metric: "+45%",
    label: "vendas pelo celular",
    description:
      "Zero vendas online. Hoje a maioria dos pedidos vem pelo WhatsApp. Faturamento subiu sem contratar ninguém.",
  },
];

const stats = [
  { value: "100%", label: "Foco em resultado" },
  { value: "30", label: "Dias de prazo", suffix: "dias" },
  { value: "24", label: "Tempo de resposta", suffix: "h" },
  { value: "Zero", label: "Burocracia" },
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
          <h2 style={{ fontFamily: "var(--font-display), sans-serif" }} className="text-3xl md:text-5xl font-bold tracking-[-0.03em] leading-tight">
            Resultados que
            <br className="hidden md:block" />
            falam por si
          </h2>
        </div>

        <div className="res-item divide-y divide-border/50">
          {results.map((result) => (
            <div
              key={result.client}
              className="group flex flex-col md:flex-row md:items-baseline gap-3 md:gap-6 py-6"
            >
              <span className="text-2xl md:text-3xl font-bold tracking-[-0.03em] shrink-0 md:w-32" style={{ fontFamily: "var(--font-display), sans-serif" }}>
                <CountUp value={result.metric} />
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
