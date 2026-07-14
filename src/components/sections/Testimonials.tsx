"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Quanto custa criar uma landpage?",
    answer:
      "O investimento varia conforme a complexidade do projeto. Trabalhamos com planos a partir de R$ 970. Na primeira conversa, a gente entende sua necessidade e apresenta uma proposta sem compromisso.",
  },
  {
    question: "Em quanto tempo meu site fica pronto?",
    answer:
      "O prazo padrão é de 15 a 30 dias, dependendo do projeto. Landpages mais simples ficam prontas em até 15 dias. Sistemas sob medida podem levar um pouco mais, mas você já começa a ver resultado antes de completar o prazo.",
  },
  {
    question: "Vocês fazem só site ou também sistemas?",
    answer:
      "Fazemos os dois. Landpages que convertem visitantes em clientes e sistemas sob medida, como agendamento online, controle de estoque, gestão de clientes. Tudo feito pra resolver o problema específico do seu negócio.",
  },
  {
    question: "Como funciona a garantia de 30 dias?",
    answer:
      "Se nos primeiros 30 dias após a entrega você não estiver satisfeito com o resultado, devolvemos 100% do valor investido. Sem letra miúda, sem burocracia. A gente trabalha com confiança.",
  },
  {
    question: "Preciso ter domínio e hospedagem próprios?",
    answer:
      "Não. A gente cuida de tudo, registro de domínio, hospedagem e configuração. Você não precisa se preocupar com nada técnico. Só focar no seu negócio.",
  },
  {
    question: "Vocês fazem manutenção depois de entregar o site?",
    answer:
      "Sim. Oferecemos suporte contínuo para atualizações, ajustes e melhorias. Seu site nunca fica parado, sempre evolui junto com o seu negócio.",
  },
  {
    question: "Como sei se a landpage vai converter mesmo?",
    answer:
      "Nós estudamos o seu público, criamos uma copy com gatilhos de persuasão e testamos variants pra maximizar resultado. landpage não é só bonita, é pensada pra vender.",
  },
  {
    question: "Trabalham com empresas de qualquer ramo?",
    answer:
      "Trabalhamos com PMEs de qualquer área, clínicas, lojas, restaurantes, serviços, indústrias. O que importa é você querer crescer de verdade.",
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
        ".faq-header",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      ).fromTo(
        ".faq-item",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: "power3.out" },
        "-=0.4",
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      ref={ref}
      id="faq"
      className="py-24 md:py-32 bg-background"
    >
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <div className="faq-header text-center">
          <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary">
            <span className="w-6 h-px bg-primary" />
            Dúvidas frequentes
          </div>
          <h2 style={{ fontFamily: "var(--font-display), sans-serif" }} className="text-3xl md:text-5xl font-bold tracking-[-0.03em] leading-tight">
            Perguntas que <span className="text-primary">todo mundo faz</span>
          </h2>
        </div>

        <div className="faq-item mt-12 divide-y divide-border/50 border-t border-border/50">
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item">
              <button
                onClick={() => toggle(i)}
                className="flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left"
              >
                <span className="text-sm font-semibold text-foreground">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 cursor-pointer text-muted-foreground transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-40 pb-5" : "max-h-0"
                }`}
              >
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
