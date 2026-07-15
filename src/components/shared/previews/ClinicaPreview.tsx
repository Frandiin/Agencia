import {
  Stethoscope, Baby, Heart, Calendar, ArrowRight, Phone,
  Shield, MapPin, Mail, Clock, CheckCircle2, Award,
  Star, ChevronRight, Activity, Brain, Eye, Bone,
  MessageCircle, BadgeCheck, Sparkles,
} from "lucide-react";

interface ClinicaPreviewProps {
  name: string;
  slogan: string;
  color: string;
  proofBadges: string[];
  extras: Record<string, unknown>;
}

export default function ClinicaPreview({ name, slogan, color, proofBadges, extras }: ClinicaPreviewProps) {
  const especialidades = (extras.especialidades as string[]) || [];
  const medicos = (extras.medicos as { nome: string; especialidade: string }[]) || [];

  const defaultEspecialidades = [
    { nome: "Clínico Geral", icon: "🩺", desc: "Check-up completo" },
    { nome: "Pediatria", icon: "👶", desc: "Crianças e adolescentes" },
    { nome: "Dermatologia", icon: "✨", desc: "Pele e estética" },
    { nome: "Cardiologia", icon: "❤️", desc: "Coração e vasos" },
    { nome: "Oftalmologia", icon: "👁️", desc: "Saúde ocular" },
    { nome: "Ortopedia", icon: "🦴", desc: "Ossos e articulações" },
  ];

  const especialidadesData = especialidades.length > 0
    ? especialidades.map((esp, i) => ({ nome: esp, icon: ["🩺", "👶", "✨", "❤️", "👁️", "🦴"][i] || "🩺", desc: "Atendimento especializado" }))
    : defaultEspecialidades;

  const defaultMedicos = [
    { nome: "Dra. Ana Beatriz", especialidade: "Clínico Geral", crm: "CRM/SP 123456", exp: "15 anos" },
    { nome: "Dr. Ricardo Mendes", especialidade: "Pediatria", crm: "CRM/SP 234567", exp: "12 anos" },
    { nome: "Dra. Camila Santos", especialidade: "Dermatologia", crm: "CRM/SP 345678", exp: "10 anos" },
  ];

  const medicosData = medicos.length > 0
    ? medicos.map(m => ({ ...m, crm: "CRM/SP 123456", exp: "10+ anos" }))
    : defaultMedicos;

  return (
    <div className="@container min-h-full bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">

      {/* ═══ NAVBAR ═══ */}
      <nav className="flex items-center justify-between px-3 py-2 @md:px-6 @md:py-3 @lg:px-10 @lg:py-4">
        <div className="flex items-center gap-1.5 @md:gap-2 @lg:gap-3">
          <div className="h-7 w-7 @md:h-9 @md:w-9 @lg:h-11 @lg:w-11 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${color}12` }}>
            <Stethoscope className="h-3.5 w-3.5 @md:h-5 @md:w-5 @lg:h-6 @lg:w-6" style={{ color }} />
          </div>
          <span className="text-xs @md:text-sm @lg:text-base font-bold tracking-tight">{name}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 rounded-full px-3 py-1.5 @md:px-5 @md:py-2 @lg:px-6 @lg:py-2.5 text-[10px] @md:text-xs @lg:text-sm font-semibold text-white shadow-sm" style={{ backgroundColor: color }}>
            <Calendar className="h-3 w-3 @md:h-4 @md:w-4 @lg:h-5 @lg:w-5" /> Agendar
          </div>
        </div>
      </nav>

      {/* ═══ HERO ═══ */}
      <div className="relative px-4 @md:px-8 @lg:px-12 pt-5 @md:pt-8 @lg:pt-12 pb-6 @md:pb-10 @lg:pb-16">
        <div className="absolute inset-0 opacity-[0.03]" style={{ background: `radial-gradient(circle at 70% 30%, ${color}, transparent 70%)` }} />

        <div className="relative">
          <div className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 @md:px-4 @md:py-1 @lg:px-5 @lg:py-1.5 mb-3 @md:mb-4 @lg:mb-5 text-[10px] @md:text-xs @lg:text-sm font-semibold" style={{ color, backgroundColor: `${color}10` }}>
            <Shield className="h-3 w-3 @md:h-4 @md:w-4 @lg:h-5 @lg:w-5" /> Certificada pelo Ministério da Saúde
          </div>

          <h1 className="text-[22px] @md:text-3xl @lg:text-5xl font-bold tracking-tight leading-tight max-w-[240px] @md:max-w-md @lg:max-w-2xl">
            {slogan || <>Cuide da sua <span style={{ color }}>saúde</span> com quem entende</>}
          </h1>

          <p className="mt-2.5 @md:mt-4 @lg:mt-5 text-[11px] @md:text-sm @lg:text-lg text-gray-500 dark:text-gray-400 max-w-[220px] @md:max-w-md @lg:max-w-xl leading-relaxed">
            Atendimento humanizado com os melhores especialistas. Agende sua consulta em poucos cliques pelo WhatsApp.
          </p>

          <div className="mt-4 @md:mt-6 @lg:mt-8 flex items-center gap-2 @md:gap-3 @lg:gap-4">
            <button className="inline-flex items-center gap-2 rounded-full px-4 py-2 @md:px-6 @md:py-3 @lg:px-8 @lg:py-4 text-[11px] @md:text-sm @lg:text-base font-semibold text-white shadow-md transition-all hover:shadow-lg active:scale-[0.97]" style={{ backgroundColor: color }}>
              Agendar agora <ArrowRight className="h-3 w-3 @md:h-4 @md:w-4 @lg:h-5 @lg:w-5" />
            </button>
            <button className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-gray-700 px-3 py-2 @md:px-6 @md:py-3 @lg:px-8 @lg:py-4 text-[11px] @md:text-sm @lg:text-base font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
              <Phone className="h-3 w-3 @md:h-4 @md:w-4 @lg:h-5 @lg:w-5" /> Ligar
            </button>
          </div>

          {/* TRUST ROW */}
          <div className="mt-5 @md:mt-7 @lg:mt-10 flex items-center gap-3 @md:gap-5 @lg:gap-6">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, j) => <Star key={j} className="h-2.5 w-2.5 @md:h-4 @md:w-4 @lg:h-5 @lg:w-5 fill-amber-400 text-amber-400" />)}
              <span className="text-[9px] @md:text-xs @lg:text-sm text-gray-400 ml-0.5">4.9</span>
            </div>
            <div className="w-px h-3 @md:h-4 @lg:h-5 bg-gray-200 dark:bg-gray-700" />
            <div className="text-[10px] @md:text-xs @lg:text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold text-gray-900 dark:text-gray-100">12.500+</span> pacientes</div>
            <div className="w-px h-3 @md:h-4 @lg:h-5 bg-gray-200 dark:bg-gray-700" />
            <div className="text-[10px] @md:text-xs @lg:text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold text-gray-900 dark:text-gray-100">20+</span> anos</div>
          </div>
        </div>
      </div>

      {/* ═══ COMO FUNCIONA ═══ */}
      <div className="px-4 @md:px-8 @lg:px-12 py-5 @md:py-7 @lg:py-10">
        <h2 className="text-sm @md:text-base @lg:text-xl font-bold tracking-tight mb-3 @md:mb-5 @lg:mb-6">Como agendar</h2>
        <div className="space-y-2.5 @md:space-y-4 @lg:space-y-5">
          {[
            { num: "1", title: "Escolha o especialista", desc: "Veja nossos médicos e suas áreas de atuação" },
            { num: "2", title: "Agende pelo WhatsApp", desc: "Escolha o dia e horário que melhor manda" },
            { num: "3", title: "Compareça à clínica", desc: "Simples, rápido e sem burocracia" },
          ].map((s, i) => (
            <div key={i} className="flex items-start gap-2.5 @md:gap-3 @lg:gap-4">
              <div className="h-6 w-6 @md:h-8 @md:w-8 @lg:h-10 @lg:w-10 rounded-lg flex items-center justify-center text-[10px] @md:text-xs @lg:text-sm font-bold text-white shrink-0 mt-0.5" style={{ backgroundColor: color }}>
                {s.num}
              </div>
              <div>
                <div className="text-[11px] @md:text-sm @lg:text-base font-semibold">{s.title}</div>
                <div className="text-[10px] @md:text-xs @lg:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ═══ ESPECIALIDADES ═══ */}
      <div className="px-4 @md:px-8 @lg:px-12 py-5 @md:py-7 @lg:py-10 bg-gray-50 dark:bg-gray-900/50">
        <h2 className="text-sm @md:text-base @lg:text-xl font-bold tracking-tight mb-3 @md:mb-5 @lg:mb-6">Especialidades</h2>
        <div className="grid grid-cols-3 @md:grid-cols-3 @lg:grid-cols-6 gap-2 @md:gap-3 @lg:gap-4">
          {especialidadesData.map((esp, i) => (
            <div key={i} className="rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-2 @md:p-3 @lg:p-5 text-center hover:shadow-sm transition-all cursor-pointer">
              <div className="text-base @md:text-xl @lg:text-3xl mb-1 @md:mb-1.5">{esp.icon}</div>
              <div className="text-[9px] @md:text-xs @lg:text-sm font-semibold leading-tight">{esp.nome}</div>
              <div className="text-[8px] @md:text-[10px] @lg:text-xs text-gray-400 dark:text-gray-500 mt-0.5">{esp.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ═══ EQUIPE ═══ */}
      <div className="px-4 @md:px-8 @lg:px-12 py-5 @md:py-7 @lg:py-10">
        <div className="flex items-center justify-between mb-3 @md:mb-5 @lg:mb-6">
          <h2 className="text-sm @md:text-base @lg:text-xl font-bold tracking-tight">Nossos médicos</h2>
          <span className="text-[10px] @md:text-xs @lg:text-sm font-medium flex items-center gap-0.5 cursor-pointer" style={{ color }}>
            Ver todos <ChevronRight className="h-3 w-3 @md:h-4 @md:w-4 @lg:h-5 @lg:w-5" />
          </span>
        </div>
        <div className="space-y-2 @md:space-y-3 @lg:space-y-4">
          {medicosData.map((med, i) => (
            <div key={i} className="flex items-center gap-2 @md:gap-3 @lg:gap-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-2.5 @md:p-4 @lg:p-5">
              <div className="h-9 w-9 @md:h-12 @md:w-12 @lg:h-14 @lg:w-14 rounded-full flex items-center justify-center shrink-0 text-[10px] @md:text-sm @lg:text-base font-bold text-white" style={{ backgroundColor: `${color}20`, color }}>
                {med.nome.split(" ").map(n => n[0]).join("").slice(0, 2)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[11px] @md:text-sm @lg:text-base font-semibold truncate">{med.nome}</div>
                <div className="text-[9px] @md:text-xs @lg:text-sm text-gray-500 dark:text-gray-400">{med.especialidade}</div>
                <div className="text-[8px] @md:text-[10px] @lg:text-xs text-gray-400 dark:text-gray-500 mt-0.5">{med.crm}</div>
              </div>
              <button className="rounded-full px-2.5 py-1 @md:px-4 @md:py-2 @lg:px-5 @lg:py-2.5 text-[9px] @md:text-xs @lg:text-sm font-semibold text-white shrink-0" style={{ backgroundColor: color }}>
                Agendar
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ═══ DIFERENCIAIS ═══ */}
      <div className="px-4 @md:px-8 @lg:px-12 py-5 @md:py-7 @lg:py-10 bg-gray-50 dark:bg-gray-900/50">
        <h2 className="text-sm @md:text-base @lg:text-xl font-bold tracking-tight mb-3 @md:mb-5 @lg:mb-6">Por que escolher a {name}?</h2>
        <div className="space-y-2.5 @md:space-y-4 @lg:space-y-5">
          {[
            { icon: <Clock className="h-3.5 w-3.5 @md:h-5 @md:w-5 @lg:h-6 @lg:w-6" />, title: "Horário flexível", desc: "Seg a sex 7h–19h · Sáb 7h–12h" },
            { icon: <Shield className="h-3.5 w-3.5 @md:h-5 @md:w-5 @lg:h-6 @lg:w-6" />, title: "Convênios aceitos", desc: "Amil, Bradesco, SulAmérica, Unimed" },
            { icon: <Award className="h-3.5 w-3.5 @md:h-5 @md:w-5 @lg:h-6 @lg:w-6" />, title: "Profissionais renomados", desc: "Médicos com 10+ anos de experiência" },
            { icon: <CheckCircle2 className="h-3.5 w-3.5 @md:h-5 @md:w-5 @lg:h-6 @lg:w-6" />, title: "Resultados comprovados", desc: "98% de satisfação dos pacientes" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2.5 @md:gap-3 @lg:gap-4">
              <div className="h-7 w-7 @md:h-9 @md:w-9 @lg:h-12 @lg:w-12 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: `${color}10`, color }}>
                {item.icon}
              </div>
              <div>
                <div className="text-[11px] @md:text-sm @lg:text-base font-semibold">{item.title}</div>
                <div className="text-[9px] @md:text-xs @lg:text-sm text-gray-500 dark:text-gray-400">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ═══ DEPOIMENTOS ═══ */}
      <div className="px-4 @md:px-8 @lg:px-12 py-5 @md:py-7 @lg:py-10">
        <h2 className="text-sm @md:text-base @lg:text-xl font-bold tracking-tight mb-3 @md:mb-5 @lg:mb-6">O que dizem nossos pacientes</h2>
        <div className="space-y-2 @md:space-y-0 @md:grid @md:grid-cols-2 @md:gap-4 @lg:gap-5">
          {[
            { name: "Maria Fernanda S.", text: "Melhor clínica da região! Os médicos são muito atenciosos e o atendimento é excelente.", rating: 5, time: "há 2 semanas" },
            { name: "Pedro H. Oliveira", text: "Agendei pelo WhatsApp e fui atendido no mesmo dia. Super recomendo!", rating: 5, time: "há 1 mês" },
          ].map((dep, i) => (
            <div key={i} className="rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-3 @md:p-4 @lg:p-6">
              <div className="flex items-center gap-0.5 mb-1.5">
                {[...Array(dep.rating)].map((_, j) => <Star key={j} className="h-2 w-2 @md:h-3 @md:w-3 @lg:h-4 @lg:w-4 fill-amber-400 text-amber-400" />)}
                <span className="text-[8px] @md:text-[10px] @lg:text-xs text-gray-400 ml-1">{dep.time}</span>
              </div>
              <p className="text-[10px] @md:text-xs @lg:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">&ldquo;{dep.text}&rdquo;</p>
              <div className="mt-2 flex items-center gap-1.5 @md:gap-2">
                <div className="h-5 w-5 @md:h-7 @md:w-7 @lg:h-8 @lg:w-8 rounded-full flex items-center justify-center text-[7px] @md:text-[10px] @lg:text-xs font-bold text-white" style={{ backgroundColor: color }}>
                  {dep.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                </div>
                <span className="text-[9px] @md:text-xs @lg:text-sm font-medium">{dep.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ═══ CTA FINAL ═══ */}
      <div className="px-4 @md:px-8 @lg:px-12 py-6 @md:py-10 @lg:py-14 text-center" style={{ background: `linear-gradient(165deg, ${color}06, ${color}03)` }}>
        <div className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 @md:px-3 @md:py-1 @lg:px-4 @lg:py-1.5 mb-2 @md:mb-3 @lg:mb-4 text-[9px] @md:text-[10px] @lg:text-xs font-semibold" style={{ color, backgroundColor: `${color}10` }}>
          <Sparkles className="h-2 w-2 @md:h-3 @md:w-3 @lg:h-4 @lg:w-4" /> Resposta em até 5 minutos
        </div>
        <h2 className="text-base @md:text-xl @lg:text-3xl font-bold tracking-tight">Pronto para cuidar da sua saúde?</h2>
        <p className="mt-1 @md:mt-2 @lg:mt-3 text-[10px] @md:text-sm @lg:text-base text-gray-500 dark:text-gray-400">Agende agora pelo WhatsApp</p>
        <button className="mt-3 @md:mt-5 @lg:mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 @md:px-8 @md:py-4 @lg:px-10 @lg:py-5 text-[11px] @md:text-sm @lg:text-base font-semibold text-white shadow-lg transition-all hover:shadow-xl active:scale-[0.97]" style={{ backgroundColor: color }}>
          <MessageCircle className="h-3.5 w-3.5 @md:h-5 @md:w-5 @lg:h-6 @lg:w-6" /> Agendar pelo WhatsApp
        </button>
      </div>

      {/* ═══ FOOTER ═══ */}
      <footer className="px-4 @md:px-8 @lg:px-12 py-4 @md:py-6 @lg:py-8 border-t border-gray-100 dark:border-gray-800">
        <div className="space-y-3 @lg:space-y-0 @lg:flex @lg:justify-between @lg:items-start">
          <div>
            <div className="flex items-center gap-2 mb-1.5 @md:mb-2">
              <div className="h-5 w-5 @md:h-7 @md:w-7 @lg:h-8 @lg:w-8 rounded-md flex items-center justify-center" style={{ backgroundColor: `${color}12` }}>
                <Stethoscope className="h-2.5 w-2.5 @md:h-3.5 @md:w-3.5 @lg:h-4 @lg:w-4" style={{ color }} />
              </div>
              <span className="text-[10px] @md:text-xs @lg:text-sm font-bold">{name}</span>
            </div>

            <div className="space-y-1 @md:space-y-1.5 @lg:space-y-2">
              <div className="flex items-center gap-1.5 @md:gap-2 text-[9px] @md:text-xs @lg:text-sm text-gray-500 dark:text-gray-400">
                <MapPin className="h-3 w-3 @md:h-4 @md:w-4 @lg:h-5 @lg:w-5 shrink-0" style={{ color }} />
                Rua XV de Novembro, 123 — Sala 401 — Centro, São Paulo - SP
              </div>
              <div className="flex items-center gap-1.5 @md:gap-2 text-[9px] @md:text-xs @lg:text-sm text-gray-500 dark:text-gray-400">
                <Phone className="h-3 w-3 @md:h-4 @md:w-4 @lg:h-5 @lg:w-5 shrink-0" style={{ color }} />
                (11) 3456-7890 · (11) 99876-5432
              </div>
              <div className="flex items-center gap-1.5 @md:gap-2 text-[9px] @md:text-xs @lg:text-sm text-gray-500 dark:text-gray-400">
                <Clock className="h-3 w-3 @md:h-4 @md:w-4 @lg:h-5 @lg:w-5 shrink-0" style={{ color }} />
                Seg a Sex: 7h às 19h · Sáb: 7h às 12h
              </div>
              <div className="flex items-center gap-1.5 @md:gap-2 text-[9px] @md:text-xs @lg:text-sm text-gray-500 dark:text-gray-400">
                <Mail className="h-3 w-3 @md:h-4 @md:w-4 @lg:h-5 @lg:w-5 shrink-0" style={{ color }} />
                contato@{name.toLowerCase().replace(/\s+/g, "")}.com.br
              </div>
            </div>
          </div>

          <div className="pt-2.5 @lg:pt-0 border-t @lg:border-t-0 border-gray-100 dark:border-gray-800 flex items-center justify-between">
            <span className="text-[8px] @md:text-[10px] @lg:text-xs text-gray-400 dark:text-gray-500">© 2026 {name}</span>
            <div className="flex items-center gap-1 @md:gap-1.5 @lg:gap-2">
              {proofBadges.slice(0, 2).map((b, i) => (
                <span key={i} className="flex items-center gap-0.5 text-[7px] @md:text-[9px] @lg:text-[11px] font-medium" style={{ color }}>
                  <BadgeCheck className="h-2 w-2 @md:h-3 @md:w-3 @lg:h-4 @lg:w-4" /> {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
