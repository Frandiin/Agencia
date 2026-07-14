"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/animations/gsap-config";

interface UseGsapOptions {
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  selector?: string;
  dependencies?: unknown[];
}

export function useGsap<T extends HTMLElement = HTMLDivElement>(
  options: UseGsapOptions = {}
) {
  const ref = useRef<T>(null);

  const {
    from = { y: 60, opacity: 0 },
    to = { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
    selector,
    dependencies = [],
  } = options;

  useEffect(() => {
    if (!ref.current) return;

    const targets = selector
      ? ref.current.querySelectorAll(selector)
      : ref.current;

    const ctx = gsap.context(() => {
      gsap.fromTo(targets, from, to);
    }, ref);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return ref;
}
