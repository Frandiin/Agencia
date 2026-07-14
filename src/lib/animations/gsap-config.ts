import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, Observer, DrawSVGPlugin);
}

export { gsap, ScrollTrigger, Observer, DrawSVGPlugin };
