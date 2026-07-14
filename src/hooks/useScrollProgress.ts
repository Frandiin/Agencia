"use client";

import { useEffect, useState } from "react";
import { ScrollTrigger } from "@/lib/animations/gsap-config";

export function useScrollProgress(ref: React.RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    const trigger = ScrollTrigger.create({
      trigger: ref.current,
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => setProgress(self.progress),
    });

    return () => trigger.kill();
  }, [ref]);

  return progress;
}
