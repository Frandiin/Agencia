"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Users, Target, Heart } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

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

      const aboutImg = ref.current?.querySelector(".about-img img");
      if (aboutImg) {
        gsap.fromTo(
          aboutImg,
          { scale: 1.15, y: 20 },
          {
            scale: 1,
            y: -20,
            ease: "none",
            scrollTrigger: {
              trigger: ref.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        );
      }
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="sobre" aria-labelledby="sobre-title" className="py-24 md:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Image */}
          <div className="about-img relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-border/50 bg-card">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Equipe da Agência em reunião de planejamento digital"
                width={800}
                height={600}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Content */}
          <div className="about-content">
            <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary">
              <span className="w-6 h-px bg-primary" />
              Quem somos
            </div>

            <h2 id="sobre-title" style={{ fontFamily: "var(--font-display), sans-serif" }} className="text-3xl md:text-5xl font-bold tracking-[-0.03em] leading-tight">
              Quem faz <span className="text-primary">seu site</span> também vive de resultado
            </h2>

            <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
              Comecei fazendo site pra amigos que tinham negócio próprio e
              precisavam de presença online. Vi na prática o quanto uma boa
              landpage e um sistema simples podem mudar o faturamento de uma
              PME.               Hoje faço isso de forma profissional, com foco em
              resultado, não em enfeite.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Atendimento direto, sem enrolação</p>
                  <p className="text-sm text-muted-foreground">
                    Você fala direto com quem desenvolve. Sem gerente de conta,
                    sem fila, sem “vou verificar”.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Resultado, não enfeite</p>
                  <p className="text-sm text-muted-foreground">
                    Site bonito que não vende não vale nada. Nós criamos o que
                    gera resultado real pro seu negócio.
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
                    Se não gostar, devolvemos 100%. Sem letra miúda.
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
