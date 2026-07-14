"use client";

import { Mail, MapPin } from "lucide-react";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

const serviceLinks = [
  { label: "Landpages", href: "#servicos" },
  { label: "Sistemas", href: "#servicos" },
  { label: "Trafego Pago", href: "#servicos" },
  { label: "Branding", href: "#servicos" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="text-xl font-bold tracking-tight">
              AGENCIA<span className="text-accent">.</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
              Landpages que convertem e sistemas que simplificam. Feito para
              PMEs que querem crescer de verdade.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors hover:bg-emerald-500 hover:text-white"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="h-4 w-4" />
              </a>
              <a
                href="mailto:contato@agencia.com"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Servicos
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

          <div>
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
                +55 11 99999-9999
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 shrink-0" />
                Sao Paulo, SP
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
