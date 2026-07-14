"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import BrowserSvg from "@/components/shared/BrowserSvg";

if (typeof window !== "undefined") {
  gsap.registerPlugin(DrawSVGPlugin);
}

export default function Intro({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!containerRef.current || !svgRef.current) return;

    const ctx = gsap.context(() => {
      const paths = svgRef.current!.querySelectorAll(
        "[class^='draw-']",
      );

      gsap.set(paths, { drawSVG: "0% 0%" });

      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(containerRef.current, {
            opacity: 0,
            duration: 0.6,
            ease: "power2.inOut",
            onComplete: () => {
              setVisible(false);
              onComplete();
            },
          });
        },
      });

      tl.to(".draw-browser-frame", {
        drawSVG: "0% 100%",
        duration: 0.9,
        ease: "power2.inOut",
      })
        .to(
          ".draw-browser-bar",
          { drawSVG: "0% 100%", duration: 0.35, ease: "power1.out" },
          "-=0.3",
        )
        .to(
          ".draw-browser-address",
          { drawSVG: "0% 100%", duration: 0.35, ease: "power1.out" },
          "-=0.15",
        )
        .to(
          ".draw-browser-dot",
          { drawSVG: "0% 100%", duration: 0.25, stagger: 0.05, ease: "power1.out" },
          "-=0.15",
        )
        .to(
          ".draw-content-line",
          { drawSVG: "0% 100%", duration: 0.4, stagger: 0.03, ease: "power1.out" },
          "-=0.05",
        )
        .to(
          ".draw-content-btn",
          { drawSVG: "0% 100%", duration: 0.3, ease: "power1.out" },
          "-=0.2",
        )
        .to(
          ".draw-content-image",
          { drawSVG: "0% 100%", duration: 0.4, ease: "power2.inOut" },
          "-=0.3",
        )
        .to(
          ".draw-content-img-line",
          { drawSVG: "0% 100%", duration: 0.25, stagger: 0.04, ease: "power1.out" },
          "-=0.15",
        )
        .to(
          ".draw-content-card",
          { drawSVG: "0% 100%", duration: 0.25, stagger: 0.05, ease: "power1.out" },
          "-=0.05",
        );
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
    >
      <div className="w-[280px] sm:w-[340px] text-primary">
        <BrowserSvg ref={svgRef} />
      </div>
    </div>
  );
}
