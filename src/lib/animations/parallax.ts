"use client";

import { gsap, ScrollTrigger } from "./gsap-config";
import type { RefObject } from "react";

interface ParallaxOptions {
  y?: number;
  scrub?: boolean | number;
  start?: string;
  end?: string;
}

export function parallax(
  element: Element,
  options: ParallaxOptions = {}
) {
  const { y = -100, scrub = true, start = "top bottom", end = "bottom top" } = options;

  return gsap.to(element, {
    y,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start,
      end,
      scrub,
    },
  });
}

export function parallaxFromRef(
  ref: RefObject<HTMLElement | null>,
  selector: string,
  options: ParallaxOptions = {}
) {
  if (!ref.current) return;
  const elements = ref.current.querySelectorAll(selector);
  return Array.from(elements).map((el) => parallax(el, options));
}
