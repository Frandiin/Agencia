"use client";

import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Intro from "@/components/shared/Intro";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFAB from "@/components/shared/WhatsAppFAB";

import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import BeforeAfter from "@/components/sections/BeforeAfter";
import About from "@/components/sections/About";
import Results from "@/components/sections/Results";
import HowItWorks from "@/components/sections/HowItWorks";
import PreviewGenerator from "@/components/sections/PreviewGenerator";
import Inspirations from "@/components/sections/Inspirations";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";

import { useSmoothScroll } from "@/hooks/useSmoothScroll";

export default function ClientWrapper() {
  const [ready, setReady] = useState(false);

  useSmoothScroll(ready);

  useEffect(() => {
    if (!ready) {
      return;
    }

    let animationFrame;
    let timeout:any ;

    animationFrame = requestAnimationFrame(() => {
      ScrollTrigger.refresh(true);

      timeout = window.setTimeout(() => {
        ScrollTrigger.refresh(true);
      }, 150);
    });

    return () => {
      cancelAnimationFrame(animationFrame);

      if (timeout) {
        window.clearTimeout(timeout);
      }
    };
  }, [ready]);

  if (!ready) {
    return <Intro onComplete={() => setReady(true)} />;
  }

  return (
    <>
      <Navbar />

      <main id="main-content">
        <Hero />
        <Services />
        <BeforeAfter />
        <About />
        <Results />
        <HowItWorks />
        <PreviewGenerator />
        <Inspirations />
        <Testimonials />
        <CTA />
      </main>

      <Footer />
      <WhatsAppFAB />
    </>
  );
}