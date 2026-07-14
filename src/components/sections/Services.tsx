"use client";

import { useEffect, useRef } from "react";
import { fadeInFromRef } from "@/lib/animations/fade-in";
import { Megaphone, Code2, TrendingUp, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Landpage que vende",
    description:
      "Nao e um site bonito. E uma maquina de converter. Copy que persuade, design que guia, CTA que converte.",
    metric: "3x mais conversoes",
    backTitle: "O que voce recebe",
    backDetails: [
      "Copy persuasiva com gatilhos mentais",
      "Design que guia o olhar ate o CTA",
      "Testes A/B para maximizar conversao",
      "Integracao com analytics e pixels",
    ],
  },
  {
    icon: Code2,
    title: "Sistema sob medida",
    description:
      "Gestao de clientes, automacao de vendas, controle de estoque. Feito pro seu negocio, nao pro generico.",
    metric: "20h/mes economizadas",
    backTitle: "O que voce recebe",
    backDetails: [
      "Dashboard personalizado pro seu fluxo",
        "Automacao de tarefas repetitivas",
      "Integracao com ferramentas que ja usa",
      "Suporte e evolucao continua",
    ],
  },
  {
    icon: TrendingUp,
    title: "Trafego que retorna",
    description:
      "Google Ads e Meta Ads com segmentacao cirurgica. Cada centavo investido volta multiplicado.",
    metric: "5x de ROI",
    backTitle: "O que voce recebe",
    backDetails: [
      "Campanhas segmentadas por publico",
      "Relatorios semanais com metricas reais",
      "Otimizacao continua de lances e criativos",
      "Escalar o que funciona, cortar o que nao",
    ],
  },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);

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

  return (
    <section ref={ref} id="servicos" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="svc-item mb-16 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.02em] leading-tight">
            Solucao que resolve.
            <br />
            Nao so que bonita.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed max-w-lg">
            PME nao precisa de site bonitinho. Precisa de landpage que vende e
            sistema que simplifica. E isso que a gente faz.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5" style={{ perspective: "1200px" }}>
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="svc-item group relative h-[360px] cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front face */}
                <div
                  className="absolute inset-0 rounded-2xl border border-border/60 bg-card p-7 md:p-8 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:[transform:rotateY(180deg)]"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                  <h3 className="mt-5 text-xl font-bold tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary">
                    <span className="h-1 w-1 rounded-full bg-primary" />
                    {service.metric}
                  </div>
                </div>

                {/* Back face */}
                <div
                  className="absolute inset-0 rounded-2xl border border-primary/30 bg-primary p-7 md:p-8 text-primary-foreground transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] [transform:rotateY(180deg)] group-hover:[transform:rotateY(0deg)]"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-foreground/15">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                  <h3 className="mt-5 text-lg font-bold tracking-tight">
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
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
