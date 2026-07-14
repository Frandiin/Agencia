"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MessageCircle, Wrench, Rocket } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: MessageCircle,
    title: "Você conta o problema",
    description:
      "Sem reunião longa. Você explica o que precisa, a gente entende em 30 minutos e já parte pra ação.",
    duration: "30 min",
  },
  {
    icon: Wrench,
    title: "A gente constrói",
    description:
      "Código + estratégia + design. Tudo junto em 15 dias. Sem enrolação.",
    duration: "15 dias",
  },
  {
    icon: Rocket,
    title: "Você vende mais",
    description:
      "Landpage convertendo. Sistema rodando. Você vendo resultado real, e faturando mais por causa disso.",
    duration: "30 dias",
  },
];

export default function HowItWorks() {
  const ref = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || !lineRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current!,
          start: "top 65%",
          end: "bottom 40%",
          scrub: 1,
        },
      });

      tl.to(lineRef.current, {
        scaleX: 1,
        duration: 1,
        ease: "none",
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hw-title",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current!,
            start: "top 70%",
          },
        },
      );

      steps.forEach((_, i) => {
        const delay = i * 0.18;

        gsap.fromTo(
          `.hw-step-${i}`,
          { y: 60, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.9,
            delay,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ref.current!,
              start: "top 65%",
            },
          },
        );

        gsap.fromTo(
          `.hw-icon-${i}`,
          { scale: 0, rotation: -45 },
          {
            scale: 1,
            rotation: 0,
            duration: 0.6,
            delay: delay + 0.2,
            ease: "back.out(2)",
            scrollTrigger: {
              trigger: ref.current!,
              start: "top 65%",
            },
          },
        );

        gsap.fromTo(
          `.hw-line-${i}`,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 0.5,
            delay: delay + 0.4,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ref.current!,
              start: "top 65%",
            },
          },
        );

        gsap.fromTo(
          `.hw-duration-${i}`,
          { y: 10, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            delay: delay + 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ref.current!,
              start: "top 65%",
            },
          },
        );
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="como-funciona" className="py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="hw-title mb-16 max-w-2xl">
          <h2 style={{ fontFamily: "var(--font-display), sans-serif" }} className="text-3xl md:text-5xl font-bold tracking-[-0.03em] leading-tight">
            Do problema ao resultado
            <br />
            em 30 dias.
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed max-w-md">
            Sem reunião infinita. Sem projeto que trava. Você conta o que
            precisa, a gente entrega funcionando.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line - scroll driven */}
          <div className="hidden md:block absolute top-[40px] left-0 right-0 h-px bg-border/50">
            <div
              ref={lineRef}
              className="h-full bg-gradient-to-r from-primary/60 via-primary to-accent/60 origin-left"
              style={{ transform: "scaleX(0)" }}
            />
          </div>

          <div className="grid md:grid-cols-3 gap-10 md:gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className={`hw-step-${i} group relative`}>
                  {/* Icon circle */}
                  <div className={`hw-icon-${i} relative z-10 mb-6 inline-flex`}>
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-primary/30 group-hover:rotate-3">
                      <Icon className="h-8 w-8" strokeWidth={1.5} />
                    </div>
                    {/* Pulse ring */}
                    <div className="absolute inset-0 rounded-2xl bg-primary/20 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Number */}
                  <div className="mb-3 text-6xl font-bold tracking-[-0.03em] text-primary/10 select-none transition-colors duration-300 group-hover:text-primary/20" style={{ fontFamily: "var(--font-display), sans-serif" }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  {/* Decorative line */}
                  <div className={`hw-line-${i} mb-4 h-px w-12 bg-gradient-to-r from-primary to-transparent origin-left`} />

                  <h3 style={{ fontFamily: "var(--font-display), sans-serif" }} className="text-xl font-bold tracking-[-0.03em]">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed max-w-[280px]">
                    {step.description}
                  </p>

                  {/* Duration badge */}
                  <div className={`hw-duration-${i} mt-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5`}>
                    <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                    <span className="text-xs font-semibold text-primary">
                      {step.duration}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
