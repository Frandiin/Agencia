"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, MapPin } from "lucide-react";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import MagneticButton from "@/components/shared/MagneticButton";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const serviceLinks = [
  { label: "Landpages", href: "#servicos" },
  { label: "Sistemas", href: "#servicos" },
  { label: "Trafego Pago", href: "#servicos" },
  { label: "Branding", href: "#servicos" },
];

export default function Footer() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".footer-content",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 90%",
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={ref} className="border-t border-border/50 bg-background">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="footer-content md:col-span-2">
            <div className="text-lg font-bold tracking-[-0.03em]" style={{ fontFamily: "var(--font-display), sans-serif" }}>
              AGENCIA<span className="text-accent">.</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
              Landpages que convertem visitantes em clientes e sistemas que
              automatizam o que dá trabalho. Feito pra PME que quer faturar
              mais.
            </p>
            <div className="mt-5 flex gap-3">
              <MagneticButton strength={0.3}>
                <a
                  href="https://wa.me/5511958394250"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors hover:bg-emerald-500 hover:text-white"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                </a>
              </MagneticButton>
              <MagneticButton strength={0.3}>
                <a
                  href="mailto:contato@agencia.com"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label="Email"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </MagneticButton>
            </div>
          </div>

          <div className="footer-content">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Serviços
            </h4>
            <ul className="mt-4 space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-content">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Contato
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 shrink-0" />
                contato@agencia.com
              </li>
              <li className="flex items-center gap-2">
                <WhatsAppIcon className="h-3.5 w-3.5 shrink-0" />
                +55 11 95839-4250
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 shrink-0" />
                São Paulo, SP
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Agencia. Todos os direitos
            reservados.
          </p>
          <p className="opacity-50">Feito com foco em resultado.</p>
        </div>
      </div>
    </footer>
  );
}
