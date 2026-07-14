"use client";

import { useState } from "react";
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
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

export default function ClientWrapper() {
  const [ready, setReady] = useState(false);
  useSmoothScroll();

  return (
    <>
      {!ready && <Intro onComplete={() => setReady(true)} />}
      <div style={{ opacity: ready ? 1 : 0, pointerEvents: ready ? "auto" : "none" }}>
        <Navbar />
        <main id="main-content">
          {ready && <Hero />}
          <Services />
          <BeforeAfter />
          <About />
          <Results />
          <HowItWorks />
          <PreviewGenerator />
          <Testimonials />
          <CTA />
        </main>
        <Footer />
        <WhatsAppFAB />
      </div>
    </>
  );
}
