"use client";

import { useEffect, useState, useCallback } from "react";
import gsap from "gsap";
import { List, X } from "lucide-react";
import ThemeToggle from "@/components/shared/ThemeToggle";

const navLinks = [
  { label: "Servicos", href: "#servicos" },
  { label: "Resultados", href: "#resultados" },
  { label: "Como funciona", href: "#como-funciona" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    gsap.fromTo(
      ".nav-brand, .nav-link, .nav-cta",
      { y: -16, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.06,
        ease: "power3.out",
        delay: 0.3,
      },
    );

    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/50"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#" className="nav-brand text-lg font-bold tracking-tight">
            AGENCIA<span className="text-accent">.</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="nav-link rounded-lg px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-muted/50"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-cta flex items-center gap-2">
            <ThemeToggle />
            <a
              href="#contato"
              className="hidden rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.03] hover:shadow-lg hover:shadow-primary/20 md:inline-flex"
            >
              Fale com gente
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-lg md:hidden"
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <List className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegacao"
        className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMobile}
              className="text-3xl font-bold tracking-tight transition-colors hover:text-primary"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={closeMobile}
            className="mt-4 rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground"
          >
            Fale com gente
          </a>
        </div>
      </div>
    </>
  );
}
