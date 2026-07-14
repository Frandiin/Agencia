"use client";

import { forwardRef } from "react";

const BrowserSvg = forwardRef<SVGSVGElement>((_props, ref) => (
  <svg
    ref={ref}
    viewBox="0 0 340 260"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-auto"
  >
    {/* Browser window frame */}
    <rect
      className="draw-browser-frame"
      x="1" y="1" width="338" height="258" rx="12"
      stroke="currentColor" strokeWidth="1.5" opacity="0.25"
      pathLength="1" strokeDasharray="1" strokeDashoffset="1"
    />

    {/* Top bar */}
    <line
      className="draw-browser-bar"
      x1="1" y1="42" x2="339" y2="42"
      stroke="currentColor" strokeWidth="1" opacity="0.15"
      pathLength="1" strokeDasharray="1" strokeDashoffset="1"
    />

    {/* Traffic lights */}
    <circle className="draw-browser-dot" cx="20" cy="21" r="4" stroke="currentColor" strokeWidth="1.2" opacity="0.3" pathLength="1" strokeDasharray="1" strokeDashoffset="1" />
    <circle className="draw-browser-dot" cx="36" cy="21" r="4" stroke="currentColor" strokeWidth="1.2" opacity="0.3" pathLength="1" strokeDasharray="1" strokeDashoffset="1" />
    <circle className="draw-browser-dot" cx="52" cy="21" r="4" stroke="currentColor" strokeWidth="1.2" opacity="0.3" pathLength="1" strokeDasharray="1" strokeDashoffset="1" />

    {/* Address bar */}
    <rect
      className="draw-browser-address"
      x="80" y="12" width="180" height="18" rx="4"
      stroke="currentColor" strokeWidth="1" opacity="0.2"
      pathLength="1" strokeDasharray="1" strokeDashoffset="1"
    />

    {/* Hero heading line 1 */}
    <line className="draw-content-line" x1="30" y1="68" x2="180" y2="68" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" pathLength="1" strokeDasharray="1" strokeDashoffset="1" />
    {/* Hero heading line 2 */}
    <line className="draw-content-line" x1="30" y1="82" x2="140" y2="82" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.4" pathLength="1" strokeDasharray="1" strokeDashoffset="1" />
    {/* Subtext line 1 */}
    <line className="draw-content-line" x1="30" y1="102" x2="200" y2="102" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.2" pathLength="1" strokeDasharray="1" strokeDashoffset="1" />
    {/* Subtext line 2 */}
    <line className="draw-content-line" x1="30" y1="114" x2="160" y2="114" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.2" pathLength="1" strokeDasharray="1" strokeDashoffset="1" />

    {/* CTA button */}
    <rect className="draw-content-btn" x="30" y="128" width="80" height="22" rx="11" stroke="currentColor" strokeWidth="1.3" opacity="0.45" pathLength="1" strokeDasharray="1" strokeDashoffset="1" />

    {/* Hero image area */}
    <rect className="draw-content-image" x="220" y="55" width="95" height="110" rx="8" stroke="currentColor" strokeWidth="1.3" opacity="0.25" pathLength="1" strokeDasharray="1" strokeDashoffset="1" />

    {/* Image inner lines */}
    <line className="draw-content-img-line" x1="235" y1="85" x2="280" y2="85" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.15" pathLength="1" strokeDasharray="1" strokeDashoffset="1" />
    <line className="draw-content-img-line" x1="235" y1="97" x2="268" y2="97" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.15" pathLength="1" strokeDasharray="1" strokeDashoffset="1" />

    {/* Bottom content lines */}
    <line className="draw-content-line" x1="30" y1="170" x2="120" y2="170" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" pathLength="1" strokeDasharray="1" strokeDashoffset="1" />
    <line className="draw-content-line" x1="30" y1="184" x2="200" y2="184" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.15" pathLength="1" strokeDasharray="1" strokeDashoffset="1" />
    <line className="draw-content-line" x1="30" y1="196" x2="175" y2="196" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.15" pathLength="1" strokeDasharray="1" strokeDashoffset="1" />
    <line className="draw-content-line" x1="30" y1="208" x2="145" y2="208" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.15" pathLength="1" strokeDasharray="1" strokeDashoffset="1" />

    {/* Bottom cards */}
    <rect className="draw-content-card" x="30" y="224" width="80" height="22" rx="4" stroke="currentColor" strokeWidth="1" opacity="0.2" pathLength="1" strokeDasharray="1" strokeDashoffset="1" />
    <rect className="draw-content-card" x="125" y="224" width="80" height="22" rx="4" stroke="currentColor" strokeWidth="1" opacity="0.2" pathLength="1" strokeDasharray="1" strokeDashoffset="1" />
  </svg>
));

BrowserSvg.displayName = "BrowserSvg";

export default BrowserSvg;
