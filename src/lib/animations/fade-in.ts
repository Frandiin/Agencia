"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { RefObject } from "react";

gsap.registerPlugin(ScrollTrigger);

interface FadeInOptions {
  y?: number;
  x?: number;
  opacity?: number;
  duration?: number;
  delay?: number;
  ease?: string;
  stagger?: number;
  scrollTrigger?: {
    trigger: Element | string;
    start?: string;
    end?: string;
  };
}

export function fadeIn(
  elements: Element[] | NodeListOf<Element> | Element,
  options: FadeInOptions = {}
) {
  const {
    y = 60,
    x = 0,
    opacity = 0,
    duration = 1,
    delay = 0,
    ease = "power3.out",
    stagger = 0,
    scrollTrigger,
  } = options;

  const targets = Array.isArray(elements) ? elements : [elements];

  return gsap.fromTo(
    targets,
    { y, x, opacity },
    {
      y: 0,
      x: 0,
      opacity: 1,
      duration,
      delay,
      ease,
      stagger,
      scrollTrigger: scrollTrigger
        ? {
            trigger: scrollTrigger.trigger,
            start: scrollTrigger.start ?? "top 80%",
            toggleActions: "play none none none",
          }
        : undefined,
    }
  );
}

export function fadeInFromRef(
  ref: RefObject<HTMLElement | null>,
  selector: string,
  options: FadeInOptions = {}
) {
  if (!ref.current) return;
  const elements = ref.current.querySelectorAll(selector);
  return fadeIn(elements, options);
}
