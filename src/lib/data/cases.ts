export interface Case {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  client: string;
  duration: string;
  role: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  tags: string[];
  image: string;
  color: string;
  landingPage: {
    hero: {
      headline: string;
      subheadline: string;
      cta: string;
      bgGradient: string;
    };
    features: {
      title: string;
      description: string;
      icon: string;
    }[];
    testimonial: {
      quote: string;
      author: string;
      role: string;
    };
    stats: {
      value: string;
      label: string;
    }[];
  };
}

export const cases: Case[] = [
  {
    slug: "silva-construcoes",
    title: "Silva & Filhos",
    subtitle: "Materiais de construção",
    category: "Construção Civil",
    year: "2025",
    client: "Silva & Filhos Materiais de Construção",
    duration: "21 dias",
    role: "Landpage + Integração WhatsApp",
    description:
      "Criamos uma landpage que transforma visitantes em orçamentos. O dono, Marcos Silva, nunca tinha usado marketing digital — hoje recebe 18 orçamentos por semana pelo site.",
    challenge:
      "A loja existia há 15 anos sem presença online. Clientes encontravam pela indicação, mas novos clientes não sabiam da existência. Concorrentes já tinham sites.",
    solution:
      "Landpage simples com foco em orçamento. Botão de WhatsApp direto, formulário rápido e fotos dos produtos. Sem enrolação — o cliente clica e fala com o vendedor.",
    results: [
      "18 orçamentos por semana pelo site",
      "Faturamento aumentou 40% em 3 meses",
      "Custo por lead: R$ 12 (antes dependia de indicação)",
      "Tempo de resposta: 15 min (antes era dia seguinte)",
    ],
    tags: ["Landpage", "WhatsApp API", "SEO Local", "Google Meu Negocio"],
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    color: "#d97706",
    landingPage: {
      hero: {
        headline: "Material de construção\ncom entrega rápida.",
        subheadline:
          "Calçamento, pisos, telhas e tudo para sua obra. Orçamento em 15 minutos pelo WhatsApp.",
        cta: "Peça seu orçamento",
        bgGradient: "from-amber-600 via-orange-600 to-amber-800",
      },
      features: [
        {
          title: "Orçamento rápido",
          description:
            "Envie as medidas e receba preços em 15 minutos pelo WhatsApp.",
          icon: "⚡",
        },
        {
          title: "Entrega agendada",
          description:
            "Escolha o dia e horário. Entregamos no canteiro de obras.",
          icon: "🚚",
        },
        {
          title: "Parcelamos em até 12x",
          description:
            "Condicional e parcelamento direto com a loja, sem burocracia.",
          icon: "💳",
        },
      ],
      testimonial: {
        quote:
          "Eu nunca tinha feito marketing. Em 30 dias o site já estava pagando sozinho.",
        author: "Marcos Silva",
        role: "Proprietário, Silva & Filhos",
      },
      stats: [
        { value: "18", label: "Orçamentos/semana" },
        { value: "+40%", label: "Aumento no faturamento" },
        { value: "R$12", label: "Custo por lead" },
        { value: "15min", label: "Tempo de resposta" },
      ],
    },
  },
  {
    slug: "studio-beleza",
    title: "Studio Beleza & Arte",
    subtitle: "Salão de beleza",
    category: "Beleza & Estética",
    year: "2025",
    client: "Studio Beleza & Arte",
    duration: "15 dias",
    role: "Landpage + Agendamento Online",
    description:
      "Fernanda Costa tinha um salão popular em Campinas. Hoje ela tem 45 leads por mês pelo site e agenda online que funciona 24h.",
    challenge:
      "Agendamentos por WhatsApp eram desorganizados. Clientes mandavam mensagem e não sabiam se tinha vaga. Faltavam 30% dos horários por semana.",
    solution:
      "Landpage com galeria de fotos, preços transparentes e botão de agendamento direto. Integração com agenda do Google para evitar dupla marcação.",
    results: [
      "45 leads por mês pelo site",
      "Ocupação do salão: 70% para 95%",
      "Redução de 50% em faltas (lembrete automático)",
      "Ticket médio subiu 25% (clientes veem mais serviços no site)",
    ],
    tags: ["Landpage", "Google Calendar", "SEO", "Instagram Feed"],
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
    color: "#ec4899",
    landingPage: {
      hero: {
        headline: "Seu visual merece\num Studio de verdade.",
        subheadline:
          "Corte, coloração, tratamento e mais. Agende pelo WhatsApp em 2 cliques.",
        cta: "Agendar horário",
        bgGradient: "from-pink-600 via-rose-600 to-pink-800",
      },
      features: [
        {
          title: "Agendamento 24h",
          description:
            "Marque a qualquer hora, sem precisar ligar ou esperar resposta.",
          icon: "📅",
        },
        {
          title: "Galeria de trabalhos",
          description:
            "Veja os serviços reais antes de agendar. Sem surpresas.",
          icon: "✨",
        },
        {
          title: "Lembrete automático",
          description:
            "Receba WhatsApp 1 dia antes. Reduz faltas em 50%.",
          icon: "🔔",
        },
      ],
      testimonial: {
        quote:
          "Eu era contra site. Quando vi o primeiro pedido chegando pelo WhatsApp, mudei de ideia.",
        author: "Fernanda Costa",
        role: "Proprietária, Studio Beleza",
      },
      stats: [
        { value: "45", label: "Leads/mês" },
        { value: "95%", label: "Ocupação do salão" },
        { value: "-50%", label: "Redução em faltas" },
        { value: "+25%", label: "Ticket médio" },
      ],
    },
  },
  {
    slug: "clinica-sorriso",
    title: "Clinica Sorriso",
    subtitle: "Odontologia",
    category: "Saude",
    year: "2024",
    client: "Clínica Sorriso Odontologia",
    duration: "25 dias",
    role: "Landpage + Sistema de Agendamento",
    description:
      "Dr. Ricardo Mendes perdia 30% dos pacientes por falta. Criamos um sistema de agendamento online com lembrete automático que reduziu faltas em 60%.",
    challenge:
      "Pacientes agendavam por telefone e faltavam. A recepcionista passava o dia inteiro ao telefone. Não havia visibilidade de agenda.",
    solution:
      "Landpage com apresentação dos dentistas, serviços e valores. Sistema de agendamento com confirmação automática e lembrete 24h antes.",
    results: [
      "Faltas reduziram de 30% para 12%",
      "Recepcionista agora foca em atendimento, não em telefone",
      "30+ novos pacientes por mês pelo site",
      "Avaliação 4.9 no Google (antes 4.2)",
    ],
    tags: ["Landpage", "Sistema de Agendamento", "WhatsApp", "SEO Local"],
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80",
    color: "#0ea5e9",
    landingPage: {
      hero: {
        headline: "Seu sorriso em boas mãos.",
        subheadline:
          "Clínica familiar com atendimento humanizado. Agende sua avaliação gratuita.",
        cta: "Agendar avaliação",
        bgGradient: "from-sky-600 via-blue-600 to-sky-800",
      },
      features: [
        {
          title: "Agendamento online",
          description:
            "Escolha o horário, o dentista e confirme em 30 segundos.",
          icon: "📅",
        },
        {
          title: "Valores transparentes",
          description:
            "Tabela de preços no site. Sem surpresas na hora H.",
          icon: "💰",
        },
        {
          title: "Lembrete por WhatsApp",
          description:
            "Receba mensagem 24h antes. Reduza faltas e melhore o planejamento.",
          icon: "📱",
        },
      ],
      testimonial: {
        quote:
          "O sistema de agendamento online salvou nosso consultório. Reduziu faltas em 60%.",
        author: "Dr. Ricardo Mendes",
        role: "Dentista, Clínica Sorriso",
      },
      stats: [
        { value: "-60%", label: "Redução em faltas" },
        { value: "30+", label: "Novos pacientes/mês" },
        { value: "4.9", label: "Avaliação Google" },
        { value: "25min", label: "Tempo médio de consulta" },
      ],
    },
  },
  {
    slug: "autopecas-brasil",
    title: "AutoPecas Brasil",
    subtitle: "Peças automotivas",
    category: "Automotivo",
    year: "2025",
    client: "AutoPecas Brasil",
    duration: "30 dias",
    role: "Landpage + Catálogo Online",
    description:
      "Carlos Eduardo tinha uma loja de peças que só vendia presencialmente. Criamos um catálogo online com orçamento automático que dobrou o faturamento.",
    challenge:
      "Clientes ligavam perguntando peças que não tinham no estoque. Vendedores perdiam tempo respondendo WhatsApp. Não havia catálogo online.",
    solution:
      "Landpage com catálogo de peças mais procuradas, orçamento automático por WhatsApp e botão de pedido direto. Integramos com estoque.",
    results: [
      "Faturamento dobrou em 4 meses",
      "200+ orçamentos por semana pelo site",
      "Vendedores agora focam em vendas, nao em atendimento",
      "Redução de 40% em ligações telefônicas",
    ],
    tags: ["Landpage", "Catálogo Online", "WhatsApp Business", "SEO"],
    image:
      "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80",
    color: "#dc2626",
    landingPage: {
      hero: {
        headline: "Peças automotivas\ncom entrega garantida.",
        subheadline:
          "Filtros, pastilhas, amortecedores e mais. Orçamento em 2 minutos.",
        cta: "Peça sua peça",
        bgGradient: "from-red-600 via-rose-600 to-red-800",
      },
      features: [
        {
          title: "Catálogo completo",
          description:
            "Veja disponibilidade e preços antes de ligar. Sem enrolação.",
          icon: "🔧",
        },
        {
          title: "Orçamento automático",
          description:
            "Envie a placa e receba preços para todas as peças compatíveis.",
          icon: "⚡",
        },
        {
          title: "Entrega no dia",
          description:
            "Estoque próprio. Entregamos em São Paulo em até 4 horas.",
          icon: "🚚",
        },
      ],
      testimonial: {
        quote:
        "Pedi orçamento pra 3 agências. A Agência foi a única que entendeu que eu queria site que vendesse.",
        author: "Carlos Eduardo",
        role: "Gerente, AutoPecas Brasil",
      },
      stats: [
        { value: "2x", label: "Faturamento em 4 meses" },
        { value: "200+", label: "Orçamentos/semana" },
        { value: "-40%", label: "Redução em ligações" },
        { value: "4h", label: "Tempo de entrega" },
      ],
    },
  },
];

export function getCaseBySlug(slug: string): Case | undefined {
  return cases.find((c) => c.slug === slug);
}

export function getAllSlugs(): string[] {
  return cases.map((c) => c.slug);
}
