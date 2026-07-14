"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Users, Target, Heart } from "lucide-react";

export default function About() {
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
        ".about-img",
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.9, ease: "power3.out" },
      ).fromTo(
        ".about-content > *",
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=0.5",
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="sobre" className="py-24 md:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Image */}
          <div className="about-img relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-border/50 bg-card">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Time Agencia trabalhando junto"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Badge */}
            <div className="absolute -bottom-6 -right-4 rounded-xl border border-border/50 bg-card/95 backdrop-blur-sm px-5 py-3 shadow-lg">
              <p className="text-2xl font-bold text-primary">5+</p>
              <p className="text-xs text-muted-foreground">
                Anos de experiencia
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="about-content">
            <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary">
              <span className="w-6 h-px bg-primary" />
              Quem somos
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.02em]">
              Nao somos uma agencia <span className="text-primary">qualquer</span>
            </h2>

            <p className="mt-5 text-muted-foreground leading-relaxed">
              Somos 4 pessoas que acreditam que PME nao deveria pagar caro
              pra ter presença online de qualidade. Começamos em 2020 fazendo
              site pra amigos. Hoje atendemos mais de 200 empresas em todo o
              Brasil.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Time pequeno, atendimento proximo</p>
                  <p className="text-sm text-muted-foreground">
                    Voce fala direto com quem faz. Sem gerente de conta, sem
                    fila.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Foco em resultado, nao em bonito</p>
                  <p className="text-sm text-muted-foreground">
                    Site bonito que nao vende e arte. Nos fazemos o que
                    converte.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Garantia real de 30 dias</p>
                  <p className="text-sm text-muted-foreground">
                    Se nao gostar, devolvemos 100%. Sem letra miuda.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
