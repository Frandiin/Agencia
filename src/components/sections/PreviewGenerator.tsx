"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SitePreview from "@/components/shared/SitePreview";
import MagneticButton from "@/components/shared/MagneticButton";
import { ArrowRight, Sparkles, Maximize2, X } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const WHATSAPP_NUMBER = "5511958394250";

const businessTypes = [
  "Restaurante",
  "Clinica",
  "Loja",
  "Studio",
  "Outro",
];

const businessContent: Record<string, { services: string[]; proof: string[]; extras: Record<string, unknown> }> = {
  Restaurante: {
    services: ["Delivery Rápido", "Eventos Privados", "Cardápio Digital"],
    proof: ["Entrega Garantida", "Pedido pelo WhatsApp", "Sem Taxa Extra"],
    extras: {
      horario: "18h - 23h",
      tempoEntrega: "30-45min",
      menu: [
        { nome: "Pizza Margherita", preco: "35" },
        { nome: "Hambúrguer Artesanal", preco: "42" },
        { nome: "Açaí Premium", preco: "18" },
      ],
    },
  },
  Clinica: {
    services: ["Consultas Online", "Exames Laborais", "Agendamento 24h"],
    proof: ["Equipe Qualificada", "Atendimento Humanizado", "Convênios Aceitos"],
    extras: {
      especialidades: ["Clínico Geral", "Pediatria", "Dermatologia"],
      medicos: [
        { nome: "Dr. Silva", especialidade: "Clínico Geral" },
        { nome: "Dra. Santos", especialidade: "Pediatria" },
      ],
    },
  },
  Loja: {
    services: ["Catálogo Online", "Promoções Exclusivas", "Frete Grátis"],
    proof: ["Compra Segura", "Troca Fácil", "Suporte via WhatsApp"],
    extras: {
      freteGratis: "Frete grátis acima de R$99",
      produtos: [
        { nome: "Produto 1", preco: "49,90", precoDe: "99,90" },
        { nome: "Produto 2", preco: "74,90", precoDe: "149,90" },
        { nome: "Produto 3", preco: "34,90", precoDe: "69,90" },
        { nome: "Produto 4", preco: "59,90", precoDe: "119,90" },
      ],
    },
  },
  Studio: {
    services: ["Portfólio Digital", "Agendamento Online", "Orçamento Grátis"],
    proof: ["Resultados Comprovados", "Processo Transparente", "Prazo Garantido"],
    extras: {
      projetos: 6,
      etapas: ["Briefing", "Design", "Entrega"],
    },
  },
  Outro: {
    services: ["Solução Sob Medida", "Suporte Dedicado", "Resultado Garantido"],
    proof: ["Foco em Resultado", "Entrega em 30 Dias", "Garantia de 30 Dias"],
    extras: {},
  },
};

const colorOptions = [
  { name: "Verde", value: "#0d9488" },
  { name: "Azul", value: "#2563eb" },
  { name: "Roxo", value: "#7c3aed" },
  { name: "Vermelho", value: "#dc2626" },
  { name: "Laranja", value: "#ea580c" },
  { name: "Rosa", value: "#db2777" },
];

export default function PreviewGenerator() {
  const ref = useRef<HTMLElement>(null);

  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState("Loja");
  const [slogan, setSlogan] = useState("");
  const [color, setColor] = useState("#0d9488");
  const [whatsapp, setWhatsapp] = useState("");
  const [fullscreen, setFullscreen] = useState(false);

  useEffect(() => {
    if (fullscreen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [fullscreen]);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".pg-header",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        ".pg-form",
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 70%",
          },
        }
      );

      gsap.fromTo(
        ".pg-preview",
        { x: 40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 70%",
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  const generateWhatsAppLink = () => {
    const name = businessName || "Seu Negócio";
    const msg = encodeURIComponent(
      `Olá! Quero uma landpage como a do preview para o meu negócio: ${name} (${businessType}). Cor preferida: ${colorOptions.find((c) => c.value === color)?.name || " Verde"}.`
    );
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
  };

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    if (digits.length <= 2) return digits;
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  };

  const content = businessContent[businessType] || businessContent.Outro;

  return (
    <>
    <section ref={ref} className="py-24 md:py-32 bg-muted/30 overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="pg-header text-center mb-16">
          <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            Preview interativo
          </div>
          <h2 style={{ fontFamily: "var(--font-display), sans-serif" }} className="text-3xl md:text-5xl font-bold tracking-[-0.03em] leading-tight">
            Veja como ficaria <span className="text-primary">seu site</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
            Preencha os dados do seu negócio e veja o preview em tempo real.
            Quando gostar, é só chamar no WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 items-start">
          {/* Form */}
          <div className="pg-form space-y-6">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">
                Nome do negócio
              </label>
              <input
                type="text"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                placeholder="Ex: Pizzaria do Bairro"
                className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary/30"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">
                Tipo de negócio
              </label>
              <div className="grid grid-cols-3 gap-2">
                {businessTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setBusinessType(type)}
                    className={`rounded-xl border px-3 py-2.5 text-xs font-medium transition-all ${
                      businessType === type
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border bg-card text-muted-foreground hover:border-border/80 hover:bg-muted/50"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">
                Slogan ou tagline
              </label>
              <input
                type="text"
                value={slogan}
                onChange={(e) => setSlogan(e.target.value)}
                placeholder="Ex: Sabor que conquista"
                className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary/30"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">
                Cor preferida
              </label>
              <div className="flex gap-3">
                {colorOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setColor(opt.value)}
                    className={`relative h-9 w-9 rounded-full transition-all ${
                      color === opt.value
                        ? "ring-2 ring-offset-2 ring-offset-background scale-110"
                        : "hover:scale-105"
                    }`}
                    style={{
                      backgroundColor: opt.value,
                      ["--tw-ring-color" as string]: opt.value,
                    }}
                    title={opt.name}
                  >
                    {color === opt.value && (
                      <svg
                        className="absolute inset-0 m-auto h-4 w-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">
                WhatsApp <span className="text-muted-foreground font-normal">(opcional)</span>
              </label>
              <input
                type="tel"
                value={whatsapp}
                onChange={(e) => setWhatsapp(formatPhone(e.target.value))}
                placeholder="(11) 95839-4250"
                className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary/30"
              />
            </div>

            <MagneticButton strength={0.15} className="w-full">
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2.5 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98]"
              >
                Quero assim o meu site
                <ArrowRight className="h-4 w-4" />
              </a>
            </MagneticButton>
          </div>

          {/* Preview */}
          <div className="pg-preview">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground">Preview do seu site</span>
              <button
                onClick={() => setFullscreen(true)}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-[11px] font-medium text-muted-foreground hover:bg-muted/50 hover:text-foreground transition-all"
              >
                <Maximize2 className="h-3 w-3" />
                Ver como site real
              </button>
            </div>
            <div
              className="max-h-[70vh] overflow-y-auto rounded-2xl overscroll-contain"
              onWheel={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.stopPropagation()}
            >
              <SitePreview
                businessName={businessName}
                businessType={businessType}
                slogan={slogan}
                color={color}
                services={content.services}
                proofBadges={content.proof}
                extras={content.extras}
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    {fullscreen && (
      <SitePreview
        businessName={businessName}
        businessType={businessType}
        slogan={slogan}
        color={color}
        services={content.services}
        proofBadges={content.proof}
        extras={content.extras}
        fullscreen
        onCloseFullscreen={() => setFullscreen(false)}
      />
    )}
    </>
  );
}
