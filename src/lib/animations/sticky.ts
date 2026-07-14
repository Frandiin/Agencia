"use client";

import { gsap, ScrollTrigger } from "./gsap-config";

interface StickyOptions {
  trigger: Element | string;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  onEnter?: () => void;
  onLeave?: () => void;
}

export function createSticky(options: StickyOptions) {
  const {
    trigger,
    start = "top top",
    end = "+=2000",
    scrub = true,
    onEnter,
    onLeave,
  } = options;

  return ScrollTrigger.create({
    trigger,
    start,
    end,
    pin: true,
    scrub,
    onEnter,
    onLeave,
  });
}
