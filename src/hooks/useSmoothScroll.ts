"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export function useSmoothScroll(enabled: boolean = true) {
  useEffect(() => {
    if (!enabled) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) =>
        Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    });

    const handleScroll = () => {
      ScrollTrigger.update();
    };

    const handleTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    lenis.on("scroll", handleScroll);

    gsap.ticker.add(handleTicker);
    gsap.ticker.lagSmoothing(0);

    requestAnimationFrame(() => {
      ScrollTrigger.refresh(true);
    });

    return () => {
      lenis.off("scroll", handleScroll);
      gsap.ticker.remove(handleTicker);
      lenis.destroy();
    };
  }, [enabled]);
}