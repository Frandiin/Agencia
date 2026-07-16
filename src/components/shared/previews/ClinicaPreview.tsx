"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ClinicSvg from "./SVG/ClinicSvg";
import { SvgMedicos } from "./SVG/Medico";
import {
  Stethoscope,
  Calendar,
  ArrowRight,
  Phone,
  Shield,
  MapPin,
  Mail,
  Clock,
  CheckCircle2,
  Award,
  Star,
  ChevronRight,
  MessageCircle,
  BadgeCheck,
  Sparkles,
  Heart,
  ShieldCheck,
} from "lucide-react";

interface ClinicaPreviewProps {
  name: string;
  slogan: string;
  color: string;
  proofBadges: string[];
  extras: Record<string, unknown>;
}

export default function ClinicaPreview({
  name,
  slogan,
  color,
  proofBadges,
  extras,
}: ClinicaPreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showSplash, setShowSplash] = useState(true);

  const especialidades = (extras.especialidades as string[]) || [];
  const medicos =
    (extras.medicos as { nome: string; especialidade: string }[]) || [];

  const defaultEspecialidades = [
    {
      nome: "Clínico Geral",
      icon: <Stethoscope className="h-5 w-5 @md:h-7 @md:w-7 @lg:h-8 @lg:w-8" />,
      desc: "Check-up completo e prevenção",
    },
    {
      nome: "Pediatria",
      icon: <Heart className="h-5 w-5 @md:h-7 @md:w-7 @lg:h-8 @lg:w-8" />,
      desc: "Crianças e adolescentes",
    },
    {
      nome: "Dermatologia",
      icon: <Sparkles className="h-5 w-5 @md:h-7 @md:w-7 @lg:h-8 @lg:w-8" />,
      desc: "Pele, cabelo e estética",
    },
    {
      nome: "Cardiologia",
      icon: <Heart className="h-5 w-5 @md:h-7 @md:w-7 @lg:h-8 @lg:w-8" />,
      desc: "Coração e vasos sanguíneos",
    },
    {
      nome: "Oftalmologia",
      icon: <Stethoscope className="h-5 w-5 @md:h-7 @md:w-7 @lg:h-8 @lg:w-8" />,
      desc: "Saúde ocular completa",
    },
    {
      nome: "Ortopedia",
      icon: <ShieldCheck className="h-5 w-5 @md:h-7 @md:w-7 @lg:h-8 @lg:w-8" />,
      desc: "Ossos e articulações",
    },
  ];

  const especialidadesData =
    especialidades.length > 0
      ? especialidades.map((esp, i) => ({
          nome: esp,
          icon: [
            <Stethoscope
              key={0}
              className="h-5 w-5 @md:h-7 @md:w-7 @lg:h-8 @lg:w-8"
            />,
            <Heart
              key={1}
              className="h-5 w-5 @md:h-7 @md:w-7 @lg:h-8 @lg:w-8"
            />,
            <Sparkles
              key={2}
              className="h-5 w-5 @md:h-7 @md:w-7 @lg:h-8 @lg:w-8"
            />,
            <Heart
              key={3}
              className="h-5 w-5 @md:h-7 @md:w-7 @lg:h-8 @lg:w-8"
            />,
            <Stethoscope
              key={4}
              className="h-5 w-5 @md:h-7 @md:w-7 @lg:h-8 @lg:w-8"
            />,
            <ShieldCheck
              key={5}
              className="h-5 w-5 @md:h-7 @md:w-7 @lg:h-8 @lg:w-8"
            />,
          ][i] || (
            <Stethoscope className="h-5 w-5 @md:h-7 @md:w-7 @lg:h-8 @lg:w-8" />
          ),
          desc: "Atendimento especializado",
        }))
      : defaultEspecialidades;

  const defaultMedicos = [
    {
      nome: "Dra. Ana Beatriz",
      especialidade: "Clínico Geral",
      crm: "CRM/SP 123456",
      exp: "15 anos de experiência",
    },
    {
      nome: "Dr. Ricardo Mendes",
      especialidade: "Pediatria",
      crm: "CRM/SP 234567",
      exp: "12 anos de experiência",
    },
    {
      nome: "Dra. Camila Santos",
      especialidade: "Dermatologia",
      crm: "CRM/SP 345678",
      exp: "10 anos de experiência",
    },
  ];

  const medicosData =
    medicos.length > 0
      ? medicos.map((m) => ({
          ...m,
          crm: "CRM/SP 123456",
          exp: "10+ anos de experiência",
        }))
      : defaultMedicos;

  // Splash + GSAP entrance animations
  useEffect(() => {
    if (!containerRef.current) return;

    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1800);

    const ctx = gsap.context(() => {
      // Splash reveal
      gsap.fromTo(
        ".splash-icon",
        { scale: 0, rotation: -45 },
        {
          scale: 1,
          rotation: 0,
          duration: 0.7,
          ease: "back.out(2)",
          delay: 0.2,
        },
      );
      gsap.fromTo(
        ".splash-text",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.out", delay: 0.5 },
      );
      gsap.fromTo(
        ".splash-line",
        { scaleX: 0 },
        { scaleX: 1, duration: 0.6, ease: "power2.out", delay: 0.8 },
      );

      // Hero entrance
      gsap.fromTo(
        ".hero-eyebrow",
        { clipPath: "inset(0 100% 0 0)" },
        {
          clipPath: "inset(0 0% 0 0)",
          duration: 0.6,
          ease: "power2.out",
          delay: 2,
        },
      );

      // Title with 3D rotateX
      gsap.fromTo(
        ".hero-title-3d",
        { y: 50, opacity: 0, rotateX: -40 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.9,
          ease: "power4.out",
          delay: 2.1,
        },
      );

      gsap.fromTo(
        ".hero-sub",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", delay: 2.4 },
      );

      gsap.fromTo(
        ".hero-cta",
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power3.out",
          delay: 2.6,
        },
      );

      gsap.fromTo(
        ".hero-trust",
        { opacity: 0 },
        { opacity: 1, duration: 0.6, delay: 2.9 },
      );

      // Section animations
      gsap.fromTo(
        ".diff-item",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          delay: 3.2,
        },
      );

      gsap.fromTo(
        ".esp-card",
        { y: 24, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: "power3.out",
          delay: 3.4,
        },
      );

      gsap.fromTo(
        ".step-item",
        { y: 30, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          delay: 3.6,
        },
      );

      // Step numbers pop
      gsap.fromTo(
        ".step-num",
        { scale: 0, rotation: -45 },
        {
          scale: 1,
          rotation: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "back.out(2)",
          delay: 3.7,
        },
      );

      gsap.fromTo(
        ".med-card",
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.12,
          ease: "power3.out",
          delay: 3.9,
        },
      );

      gsap.fromTo(
        ".dep-card",
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.12,
          ease: "power3.out",
          delay: 4.1,
        },
      );

      // CTA with 3D
      gsap.fromTo(
        ".cta-title-3d",
        { y: 40, opacity: 0, rotateX: -30 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.8,
          ease: "power4.out",
          delay: 4.3,
        },
      );

      gsap.fromTo(
        ".cta-sub",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6, delay: 4.5 },
      );

      gsap.fromTo(
        ".cta-btn",
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, delay: 4.7 },
      );

      // Clinic SVG
      gsap.fromTo(
        ".clinic-visual",
        { opacity: 0, scale: 0.92, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          delay: 2.3,
        },
      );

      // SVG draw animation
      const svgPaths = document.querySelectorAll(
        ".clinic-visual rect, .clinic-visual circle, .clinic-visual path, .clinic-visual line, .clinic-visual ellipse",
      );
      if (svgPaths.length) {
        gsap.fromTo(
          svgPaths,
          { opacity: 0, scale: 0.8, transformOrigin: "center bottom" },
          {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            stagger: 0.015,
            ease: "power2.out",
            delay: 2.5,
          },
        );
      }

      // People bounce in
      gsap.fromTo(
        ".clinic-person-1",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "back.out(2)", delay: 3 },
      );
      gsap.fromTo(
        ".clinic-person-2",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "back.out(2)", delay: 3.2 },
      );
      gsap.fromTo(
        ".clinic-person-3",
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "back.out(2)", delay: 3.4 },
      );

      // People subtle float
      gsap.to(".clinic-person-1", {
        y: -3,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 4,
      });
      gsap.to(".clinic-person-2", {
        y: -2.5,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 4.3,
      });
      gsap.to(".clinic-person-3", {
        y: -2,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 4.6,
      });
    }, containerRef);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="@container min-h-full bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100"
      style={{ perspective: "1200px" }}
    >
      {/* ═══ SPLASH INTRO ═══ */}
      {showSplash && (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-gray-950">
          <div
            className="splash-icon h-16 w-16 @md:h-20 @md:w-20 @lg:h-24 @lg:w-24 rounded-2xl flex items-center justify-center shadow-lg"
            style={{ backgroundColor: `${color}15`, color }}
          >
            <Stethoscope className="h-8 w-8 @md:h-10 @md:w-10 @lg:h-12 @lg:w-12" />
          </div>
          <div
            className="splash-text mt-4 text-sm @md:text-base @lg:text-lg font-bold tracking-tight"
            style={{ color }}
          >
            {name}
          </div>
          <div
            className="splash-line mt-2 h-0.5 w-12 rounded-full"
            style={{ backgroundColor: color, transformOrigin: "left" }}
          />
        </div>
      )}

      {/* ═══ NAVBAR ═══ */}
      <nav className="flex items-center justify-between px-4 py-3 @md:px-8 @md:py-4 @lg:px-12 @lg:py-5 border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center gap-2 @md:gap-3 @lg:gap-4">
          <div
            className="h-8 w-8 @md:h-10 @md:w-10 @lg:h-12 @lg:w-12 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: `${color}12` }}
          >
            <Stethoscope
              className="h-4 w-4 @md:h-5 @md:w-5 @lg:h-6 @lg:w-6"
              style={{ color }}
            />
          </div>
          <span className="text-sm @md:text-base @lg:text-lg font-bold tracking-tight">
            {name}
          </span>
        </div>
        <div className="flex items-center gap-2 @md:gap-3 @lg:gap-4">
          <span className="hidden @md:inline text-xs @md:text-sm @lg:text-base text-gray-500 dark:text-gray-400 cursor-pointer hover:text-gray-900 dark:hover:text-gray-100">
            Especialidades
          </span>
          <span className="hidden @md:inline text-xs @md:text-sm @lg:text-base text-gray-500 dark:text-gray-400 cursor-pointer hover:text-gray-900 dark:hover:text-gray-100">
            Equipe
          </span>
          <span className="hidden @md:inline text-xs @md:text-sm @lg:text-base text-gray-500 dark:text-gray-400 cursor-pointer hover:text-gray-900 dark:hover:text-gray-100">
            Contato
          </span>
          <div
            className="flex items-center gap-1.5 rounded-full px-3 py-1.5 @md:px-5 @md:py-2 @lg:px-6 @lg:py-2.5 text-[10px] @md:text-xs @lg:text-sm font-semibold text-white shadow-sm"
            style={{ backgroundColor: color }}
          >
            <Calendar className="h-3 w-3 @md:h-4 @md:w-4 @lg:h-5 @lg:w-5" />{" "}
            Agendar
          </div>
        </div>
      </nav>

      {/* ═══ HERO ═══ */}
      <div className="relative px-5 @md:px-8 @lg:px-12 pt-8 @md:pt-12 @lg:pt-16 pb-10 @md:pb-14 @lg:pb-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            background: `radial-gradient(circle at 70% 30%, ${color}, transparent 70%)`,
          }}
        />

        <div className="relative flex flex-col @md:flex-row @md:items-center @md:gap-6 @lg:gap-10">
          {/* Text — 50% */}
          <div className="flex-1 min-w-0">
            <div
              className="hero-eyebrow inline-flex items-center gap-2 mb-4 @md:mb-5 @lg:mb-6 text-[10px] @md:text-xs @lg:text-sm font-semibold tracking-widest uppercase"
              style={{ color }}
            >
              <span className="w-6 h-px" style={{ backgroundColor: color }} />
              Clínica de Excelência
            </div>

            <h1
              className="hero-title-3d text-2xl @md:text-3xl @lg:text-[2.75rem] font-bold tracking-[-0.03em] leading-[1.05] @lg:leading-[1.08]"
              style={{ transformStyle: "preserve-3d" }}
            >
              {slogan || (
                <>
                  Cuide da sua <span style={{ color }}>saúde</span> com quem
                  entende
                </>
              )}
            </h1>

            <p className="hero-sub mt-3 @md:mt-4 @lg:mt-5 text-xs @md:text-sm @lg:text-base text-gray-500 dark:text-gray-400 @lg:max-w-md leading-relaxed">
              Atendimento humanizado com os melhores especialistas. Agende sua
              consulta em poucos cliques pelo WhatsApp.
            </p>

            <div className="mt-5 @md:mt-6 @lg:mt-7 flex items-center gap-3 @md:gap-4">
              <button
                className="hero-cta inline-flex items-center gap-2 rounded-full px-5 py-2.5 @md:px-6 @md:py-3 @lg:px-7 @lg:py-3 text-[11px] @md:text-xs @lg:text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg active:scale-[0.97]"
                style={{ backgroundColor: color }}
              >
                Agendar agora{" "}
                <ArrowRight className="h-3.5 w-3.5 @md:h-4 @md:w-4" />
              </button>
              <button className="hero-cta inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-gray-700 px-4 py-2.5 @md:px-5 @md:py-3 @lg:px-6 @lg:py-3 text-[11px] @md:text-xs @lg:text-sm font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
                <Phone className="h-3.5 w-3.5 @md:h-4 @md:w-4" /> Ligar
              </button>
            </div>

            {/* TRUST ROW */}
            <div className="hero-trust mt-6 @md:mt-7 @lg:mt-8 flex items-center gap-4 @md:gap-5 @lg:gap-6">
              <div className="flex items-center gap-1.5">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="h-3 w-3 @md:h-3.5 @md:w-3.5 @lg:h-4 @lg:w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <span className="text-[10px] @md:text-xs @lg:text-sm font-semibold text-gray-900 dark:text-gray-100">
                  4.9
                </span>
              </div>
              <div className="w-px h-4 @md:h-4 @lg:h-5 bg-gray-200 dark:bg-gray-700" />
              <div className="text-[10px] @md:text-xs @lg:text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold text-gray-900 dark:text-gray-100">
                  12.500+
                </span>{" "}
                pacientes
              </div>
              <div className="w-px h-4 @md:h-4 @lg:h-5 bg-gray-200 dark:bg-gray-700" />
              <div className="text-[10px] @md:text-xs @lg:text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold text-gray-900 dark:text-gray-100">
                  20+
                </span>{" "}
                anos
              </div>
            </div>
          </div>

          {/* Clinic illustration — 50% */}
          <div className="clinic-visual relative flex-1 mt-8 @md:mt-0 hidden @md:flex items-center justify-center">
            <div className="relative w-full max-w-[340px] @md:max-w-[400px] @lg:max-w-[500px]">
              <ClinicSvg color={color} />
              <div className="absolute -bottom-[10%] left-1/2 -translate-x-1/2 w-[90%] @md:w-[85%] @lg:w-[80%]">
                <SvgMedicos className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ DIFERENCIAIS ═══ */}
      <div className="px-5 @md:px-10 @lg:px-16 py-8 @md:py-12 @lg:py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="mb-6 @md:mb-8 @lg:mb-10">
          <div
            className="inline-flex items-center gap-2 mb-3 @md:mb-4 @lg:mb-5 text-[10px] @md:text-xs @lg:text-sm font-semibold tracking-widest uppercase"
            style={{ color }}
          >
            <span className="w-6 h-px" style={{ backgroundColor: color }} />
            Por que nos escolher
          </div>
          <h2 className="text-lg @md:text-2xl @lg:text-3xl font-bold tracking-[-0.03em] leading-tight">
            Por que escolher a <span style={{ color }}>{name}</span>?
          </h2>
        </div>

        <div className="grid grid-cols-1 @md:grid-cols-2 @lg:grid-cols-2 gap-4 @md:gap-6 @lg:gap-8">
          {[
            {
              icon: (
                <Clock className="h-5 w-5 @md:h-6 @md:w-6 @lg:h-7 @lg:w-7" />
              ),
              title: "Horário flexível",
              desc: "Seg a sex 7h–19h · Sáb 7h–12h. Atendimento que se adapta à sua rotina.",
            },
            {
              icon: (
                <Shield className="h-5 w-5 @md:h-6 @md:w-6 @lg:h-7 @lg:w-7" />
              ),
              title: "Convênios aceitos",
              desc: "Amil, Bradesco, SulAmérica, Unimed e mais. Cuidamos de você sem preocupação.",
            },
            {
              icon: (
                <Award className="h-5 w-5 @md:h-6 @md:w-6 @lg:h-7 @lg:w-7" />
              ),
              title: "Profissionais renomados",
              desc: "Médicos com 10+ anos de experiência e compromisso com resultado.",
            },
            {
              icon: (
                <CheckCircle2 className="h-5 w-5 @md:h-6 @md:w-6 @lg:h-7 @lg:w-7" />
              ),
              title: "Resultados comprovados",
              desc: "98% de satisfação dos nossos pacientes. Sua saúde em boas mãos.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="diff-item flex items-start gap-3 @md:gap-4 @lg:gap-5"
            >
              <div
                className="h-10 w-10 @md:h-12 @md:w-12 @lg:h-14 @lg:w-14 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${color}10`, color }}
              >
                {item.icon}
              </div>
              <div>
                <div className="text-xs @md:text-sm @lg:text-base font-semibold">
                  {item.title}
                </div>
                <div className="text-[10px] @md:text-xs @lg:text-sm text-gray-500 dark:text-gray-400 leading-relaxed mt-0.5">
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ═══ ESPECIALIDADES ═══ */}
      <div className="px-5 @md:px-10 @lg:px-16 py-8 @md:py-12 @lg:py-16">
        <div className="mb-6 @md:mb-8 @lg:mb-10">
          <div
            className="inline-flex items-center gap-2 mb-3 @md:mb-4 @lg:mb-5 text-[10px] @md:text-xs @lg:text-sm font-semibold tracking-widest uppercase"
            style={{ color }}
          >
            <span className="w-6 h-px" style={{ backgroundColor: color }} />
            Especialidades
          </div>
          <h2 className="text-lg @md:text-2xl @lg:text-3xl font-bold tracking-[-0.03em] leading-tight">
            Nossas <span style={{ color }}>áreas de atuação</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 @md:grid-cols-3 @lg:grid-cols-3 gap-3 @md:gap-4 @lg:gap-5">
          {especialidadesData.map((esp, i) => (
            <div
              key={i}
              className="esp-card group rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-3 @md:p-4 @lg:p-6 text-center hover:shadow-md transition-all cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div
                className="mx-auto mb-2 @md:mb-3 @lg:mb-4 h-12 w-12 @md:h-14 @md:w-14 @lg:h-16 @lg:w-16 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                style={{ backgroundColor: `${color}10`, color }}
              >
                {esp.icon}
              </div>
              <div className="text-[11px] @md:text-sm @lg:text-base font-semibold">
                {esp.nome}
              </div>
              <div className="text-[9px] @md:text-xs @lg:text-sm text-gray-500 dark:text-gray-400 mt-0.5 @md:mt-1">
                {esp.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ═══ COMO FUNCIONA ═══ */}
      <div className="px-5 @md:px-10 @lg:px-16 py-8 @md:py-12 @lg:py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="mb-6 @md:mb-8 @lg:mb-10">
          <div
            className="inline-flex items-center gap-2 mb-3 @md:mb-4 @lg:mb-5 text-[10px] @md:text-xs @lg:text-sm font-semibold tracking-widest uppercase"
            style={{ color }}
          >
            <span className="w-6 h-px" style={{ backgroundColor: color }} />
            Como funciona
          </div>
          <h2 className="text-lg @md:text-2xl @lg:text-3xl font-bold tracking-[-0.03em] leading-tight">
            Agende em <span style={{ color }}>3 passos simples</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 @md:grid-cols-3 @lg:grid-cols-3 gap-4 @md:gap-6 @lg:gap-8">
          {[
            {
              num: "1",
              title: "Escolha o especialista",
              desc: "Veja nossos médicos e suas áreas de atuação",
            },
            {
              num: "2",
              title: "Agende pelo WhatsApp",
              desc: "Escolha o dia e horário que melhor manda",
            },
            {
              num: "3",
              title: "Compareça à clínica",
              desc: "Simples, rápido e sem burocracia",
            },
          ].map((s, i) => (
            <div key={i} className="step-item text-center @md:text-left">
              <div
                className="step-num mx-auto @md:mx-0 mb-3 @md:mb-4 @lg:mb-5 h-12 w-12 @md:h-14 @md:w-14 @lg:h-16 @lg:w-16 rounded-2xl flex items-center justify-center text-lg @md:text-xl @lg:text-2xl font-bold text-white shadow-lg"
                style={{
                  backgroundColor: color,
                  boxShadow: `0 10px 30px -5px ${color}40`,
                }}
              >
                {s.num}
              </div>
              <div className="text-xs @md:text-sm @lg:text-base font-semibold">
                {s.title}
              </div>
              <div className="text-[10px] @md:text-xs @lg:text-sm text-gray-500 dark:text-gray-400 leading-relaxed mt-1">
                {s.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ═══ EQUIPE ═══ */}
      <div className="px-5 @md:px-10 @lg:px-16 py-8 @md:py-12 @lg:py-16">
        <div className="flex items-center justify-between mb-6 @md:mb-8 @lg:mb-10">
          <div>
            <div
              className="inline-flex items-center gap-2 mb-3 @md:mb-4 @lg:mb-5 text-[10px] @md:text-xs @lg:text-sm font-semibold tracking-widest uppercase"
              style={{ color }}
            >
              <span className="w-6 h-px" style={{ backgroundColor: color }} />
              Nossa equipe
            </div>
            <h2 className="text-lg @md:text-2xl @lg:text-3xl font-bold tracking-[-0.03em] leading-tight">
              Conheça nossos <span style={{ color }}>médicos</span>
            </h2>
          </div>
          <span
            className="hidden @md:flex text-[10px] @md:text-xs @lg:text-sm font-medium items-center gap-1 cursor-pointer"
            style={{ color }}
          >
            Ver todos{" "}
            <ChevronRight className="h-3 w-3 @md:h-4 @md:w-4 @lg:h-5 @lg:w-5" />
          </span>
        </div>

        <div className="space-y-3 @md:space-y-4 @lg:space-y-5">
          {medicosData.map((med, i) => (
            <div
              key={i}
              className="med-card flex items-center gap-3 @md:gap-4 @lg:gap-5 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-3 @md:p-4 @lg:p-5 hover:shadow-md transition-all cursor-pointer"
            >
              <div
                className="h-12 w-12 @md:h-14 @md:w-14 @lg:h-16 @lg:w-16 rounded-full flex items-center justify-center shrink-0 text-sm @md:text-base @lg:text-lg font-bold text-white transition-transform duration-300 hover:scale-110"
                style={{ backgroundColor: color }}
              >
                {med.nome
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .slice(0, 2)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs @md:text-sm @lg:text-base font-semibold truncate">
                  {med.nome}
                </div>
                <div className="text-[10px] @md:text-xs @lg:text-sm text-gray-500 dark:text-gray-400">
                  {med.especialidade}
                </div>
                <div className="text-[9px] @md:text-[10px] @lg:text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                  {med.crm} · {med.exp}
                </div>
              </div>
              <button
                className="rounded-full px-3 py-1.5 @md:px-5 @md:py-2 @lg:px-6 @lg:py-2.5 text-[9px] @md:text-xs @lg:text-sm font-semibold text-white shrink-0 transition-all hover:shadow-md active:scale-[0.97]"
                style={{ backgroundColor: color }}
              >
                Agendar
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ═══ DEPOIMENTOS ═══ */}
      <div className="px-5 @md:px-10 @lg:px-16 py-8 @md:py-12 @lg:py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="mb-6 @md:mb-8 @lg:mb-10">
          <div
            className="inline-flex items-center gap-2 mb-3 @md:mb-4 @lg:mb-5 text-[10px] @md:text-xs @lg:text-sm font-semibold tracking-widest uppercase"
            style={{ color }}
          >
            <span className="w-6 h-px" style={{ backgroundColor: color }} />
            Depoimentos
          </div>
          <h2 className="text-lg @md:text-2xl @lg:text-3xl font-bold tracking-[-0.03em] leading-tight">
            O que dizem nossos <span style={{ color }}>pacientes</span>
          </h2>
        </div>

        <div className="space-y-3 @md:space-y-0 @md:grid @md:grid-cols-2 @md:gap-4 @lg:gap-5">
          {[
            {
              name: "Maria Fernanda S.",
              text: "Melhor clínica da região! Os médicos são muito atenciosos e o atendimento é excelente. Tudo muito organizado.",
              rating: 5,
              time: "há 2 semanas",
            },
            {
              name: "Pedro H. Oliveira",
              text: "Agendei pelo WhatsApp e fui atendido no mesmo dia. Super recomendo! Equipe nota 10.",
              rating: 5,
              time: "há 1 mês",
            },
          ].map((dep, i) => (
            <div
              key={i}
              className="dep-card rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 @md:p-5 @lg:p-6"
            >
              <div className="flex items-center gap-0.5 mb-2">
                {[...Array(dep.rating)].map((_, j) => (
                  <Star
                    key={j}
                    className="h-3 w-3 @md:h-4 @md:w-4 @lg:h-5 @lg:w-5 fill-amber-400 text-amber-400"
                  />
                ))}
                <span className="text-[9px] @md:text-[10px] @lg:text-xs text-gray-400 ml-1.5">
                  {dep.time}
                </span>
              </div>
              <p className="text-[11px] @md:text-xs @lg:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                &ldquo;{dep.text}&rdquo;
              </p>
              <div className="mt-3 flex items-center gap-2 @md:gap-2.5">
                <div
                  className="h-7 w-7 @md:h-8 @md:w-8 @lg:h-9 @lg:w-9 rounded-full flex items-center justify-center text-[9px] @md:text-[10px] @lg:text-xs font-bold text-white"
                  style={{ backgroundColor: color }}
                >
                  {dep.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div>
                  <div className="text-[10px] @md:text-xs @lg:text-sm font-semibold">
                    {dep.name}
                  </div>
                  <div className="text-[8px] @md:text-[9px] @lg:text-[10px] text-gray-400 dark:text-gray-500">
                    Paciente verificado
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ═══ CTA FINAL ═══ */}
      <div
        className="px-5 @md:px-10 @lg:px-16 py-10 @md:py-14 @lg:py-20 text-center relative overflow-hidden"
        style={{ backgroundColor: color }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(255,255,255,0.08),transparent)]" />

        <div className="relative" style={{ perspective: "800px" }}>
          <div className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 @md:px-4 @md:py-1.5 @lg:px-5 @lg:py-2 mb-3 @md:mb-4 @lg:mb-5 text-[9px] @md:text-[10px] @lg:text-xs font-semibold bg-white/15 text-white">
            <Sparkles className="h-2.5 w-2.5 @md:h-3 @md:w-3 @lg:h-4 @lg:w-4" />{" "}
            Resposta em até 5 minutos
          </div>

          <h2
            className="cta-title-3d text-xl @md:text-2xl @lg:text-4xl font-bold tracking-[-0.03em] leading-tight text-white"
            style={{ transformStyle: "preserve-3d" }}
          >
            Cada dia sem cuidar da saúde
            <br className="hidden @md:inline" /> é um dia perdido
          </h2>

          <p className="cta-sub mt-2 @md:mt-3 @lg:mt-4 text-[11px] @md:text-sm @lg:text-base text-white/70">
            Agende agora pelo WhatsApp e cuide de quem mais importa
          </p>

          <div className="mt-5 @md:mt-6 @lg:mt-8 flex flex-col @md:flex-row items-center justify-center gap-3 @md:gap-4">
            <button
              className="cta-btn inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 @md:px-8 @md:py-3.5 @lg:px-10 @lg:py-4 text-[11px] @md:text-sm @lg:text-base font-semibold shadow-lg transition-all hover:scale-[1.03] hover:shadow-xl active:scale-[0.97]"
              style={{ color }}
            >
              <MessageCircle className="h-3.5 w-3.5 @md:h-4 @md:w-4 @lg:h-5 @lg:w-5" />{" "}
              Agendar pelo WhatsApp
            </button>
            <button className="cta-btn inline-flex items-center gap-2 rounded-full border-2 border-white/25 px-6 py-2.5 @md:px-8 @md:py-3.5 @lg:px-10 @lg:py-4 text-[11px] @md:text-sm @lg:text-base font-semibold text-white transition-colors hover:bg-white/10">
              <Phone className="h-3.5 w-3.5 @md:h-4 @md:w-4 @lg:h-5 @lg:w-5" />{" "}
              Ligar agora
            </button>
          </div>

          <div className="cta-sub mt-5 @md:mt-6 @lg:mt-8 flex flex-wrap items-center justify-center gap-x-4 @md:gap-x-6 gap-y-2 text-[9px] @md:text-[10px] @lg:text-xs text-white/50">
            <span>Sem compromisso</span>
            <span className="text-white/20">|</span>
            <span>Resposta em 24h</span>
            <span className="text-white/20">|</span>
            <span>Orçamento gratuito</span>
          </div>
        </div>
      </div>

      {/* ═══ FOOTER ═══ */}
      <footer className="px-5 @md:px-10 @lg:px-16 py-6 @md:py-8 @lg:py-10 border-t border-gray-100 dark:border-gray-800">
        <div className="space-y-4 @lg:space-y-0 @lg:flex @lg:justify-between @lg:items-start">
          <div className="flex-1">
            <div className="flex items-center gap-2.5 mb-3 @md:mb-4">
              <div
                className="h-6 w-6 @md:h-8 @md:w-8 @lg:h-9 @lg:w-9 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${color}12` }}
              >
                <Stethoscope
                  className="h-3 w-3 @md:h-4 @md:w-4 @lg:h-5 @lg:w-5"
                  style={{ color }}
                />
              </div>
              <span className="text-xs @md:text-sm @lg:text-base font-bold">
                {name}
              </span>
            </div>

            <div className="grid grid-cols-1 @md:grid-cols-2 gap-2 @md:gap-3">
              <div className="flex items-center gap-2 text-[10px] @md:text-xs @lg:text-sm text-gray-500 dark:text-gray-400">
                <MapPin
                  className="h-3 w-3 @md:h-3.5 @md:w-3.5 @lg:h-4 @lg:w-4 shrink-0"
                  style={{ color }}
                />
                Rua XV de Novembro, 123 — Sala 401 — Centro, São Paulo - SP
              </div>
              <div className="flex items-center gap-2 text-[10px] @md:text-xs @lg:text-sm text-gray-500 dark:text-gray-400">
                <Phone
                  className="h-3 w-3 @md:h-3.5 @md:w-3.5 @lg:h-4 @lg:w-4 shrink-0"
                  style={{ color }}
                />
                (11) 3456-7890 · (11) 99876-5432
              </div>
              <div className="flex items-center gap-2 text-[10px] @md:text-xs @lg:text-sm text-gray-500 dark:text-gray-400">
                <Clock
                  className="h-3 w-3 @md:h-3.5 @md:w-3.5 @lg:h-4 @lg:w-4 shrink-0"
                  style={{ color }}
                />
                Seg a Sex: 7h às 19h · Sáb: 7h às 12h
              </div>
              <div className="flex items-center gap-2 text-[10px] @md:text-xs @lg:text-sm text-gray-500 dark:text-gray-400">
                <Mail
                  className="h-3 w-3 @md:h-3.5 @md:w-3.5 @lg:h-4 @lg:w-4 shrink-0"
                  style={{ color }}
                />
                contato@{name.toLowerCase().replace(/\s+/g, "")}.com.br
              </div>
            </div>
          </div>

          <div className="pt-3 @lg:pt-0 border-t @lg:border-t-0 border-gray-100 dark:border-gray-800 @lg:text-right">
            <div className="text-[9px] @md:text-[10px] @lg:text-xs text-gray-400 dark:text-gray-500 mb-2">
              © 2026 {name}. Todos os direitos reservados.
            </div>
            <div className="flex items-center gap-2 @md:gap-3">
              {proofBadges.slice(0, 3).map((b, i) => (
                <span
                  key={i}
                  className="flex items-center gap-1 text-[8px] @md:text-[9px] @lg:text-[10px] font-medium"
                  style={{ color }}
                >
                  <BadgeCheck className="h-2.5 w-2.5 @md:h-3 @md:w-3 @lg:h-3.5 @lg:w-3.5" />{" "}
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
