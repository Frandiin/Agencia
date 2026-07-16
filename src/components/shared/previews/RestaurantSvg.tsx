import { forwardRef } from "react";

interface RestaurantSvgProps {
  color?: string;
}

const RestaurantSvg = forwardRef<SVGSVGElement, RestaurantSvgProps>(
  ({ color = "#e85d04" }, ref) => (
    <svg
      ref={ref}
      viewBox="0 0 520 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      {/* Ground */}
      <ellipse cx="260" cy="395" rx="260" ry="18" fill={color} opacity="0.1" />

      {/* ═══ RESTAURANT BUILDING ═══ */}
      <rect x="100" y="80" width="320" height="290" rx="8" fill="white" stroke={color} strokeWidth="2.5" />

      {/* Roof */}
      <path d="M90 80 L260 30 L430 80" fill="none" stroke={color} strokeWidth="3" />
      <path d="M90 80 L260 30 L430 80 Z" fill={color} opacity="0.15" />
      <rect x="90" y="76" width="340" height="8" rx="2" fill={color} opacity="0.3" />

      {/* ═══ STRIPED AWNING ═══ */}
      <rect x="100" y="84" width="320" height="40" fill={color} opacity="0.2" />
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <rect key={i} x={100 + i * 40} y="84" width="20" height="40" fill={color} opacity={i % 2 === 0 ? 0.25 : 0.08} />
      ))}
      {/* Scalloped edge */}
      <path d="M100 124 C110 132 120 124 130 132 C140 124 150 132 160 124 C170 132 180 124 190 132 C200 124 210 132 220 124 C230 132 240 124 250 132 C260 124 270 132 280 124 C290 132 300 124 310 132 C320 124 330 132 340 124 C350 132 360 124 370 132 C380 124 390 132 400 124 C410 132 420 124 420 124" fill={color} opacity="0.2" />

      {/* ═══ LARGE WINDOWS WITH TABLES ═══ */}
      {/* Left window */}
      <rect x="120" y="140" width="90" height="70" rx="4" fill={color} opacity="0.06" stroke={color} strokeWidth="1.2" />
      {/* Table inside */}
      <rect x="140" y="180" width="50" height="3" rx="1" fill={color} opacity="0.35" />
      <line x1="155" y1="183" x2="155" y2="195" stroke={color} strokeWidth="2" opacity="0.25" />
      <line x1="175" y1="183" x2="175" y2="195" stroke={color} strokeWidth="2" opacity="0.25" />
      {/* Plate on table */}
      <ellipse cx="155" cy="178" rx="10" ry="3" fill={color} opacity="0.15" />
      <ellipse cx="175" cy="178" rx="10" ry="3" fill={color} opacity="0.15" />
      {/* Candle */}
      <line x1="165" y1="170" x2="165" y2="178" stroke={color} strokeWidth="1.5" opacity="0.3" />
      <ellipse cx="165" cy="168" rx="3" ry="4" fill={color} opacity="0.2" />

      {/* Right window */}
      <rect x="310" y="140" width="90" height="70" rx="4" fill={color} opacity="0.06" stroke={color} strokeWidth="1.2" />
      {/* Table inside */}
      <rect x="330" y="180" width="50" height="3" rx="1" fill={color} opacity="0.35" />
      <line x1="345" y1="183" x2="345" y2="195" stroke={color} strokeWidth="2" opacity="0.25" />
      <line x1="365" y1="183" x2="365" y2="195" stroke={color} strokeWidth="2" opacity="0.25" />
      {/* Plate on table */}
      <ellipse cx="345" cy="178" rx="10" ry="3" fill={color} opacity="0.15" />
      <ellipse cx="365" cy="178" rx="10" ry="3" fill={color} opacity="0.15" />
      {/* Bottle */}
      <rect x="355" y="168" width="5" height="10" rx="2" fill={color} opacity="0.2" />

      {/* Center upper window */}
      <rect x="225" y="140" width="70" height="50" rx="4" fill={color} opacity="0.06" stroke={color} strokeWidth="1.2" />
      {/* Fork and knife */}
      <line x1="248" y1="155" x2="248" y2="180" stroke={color} strokeWidth="1.5" opacity="0.3" />
      <line x1="243" y1="155" x2="248" y2="160" stroke={color} strokeWidth="1.2" opacity="0.3" />
      <line x1="253" y1="155" x2="248" y2="160" stroke={color} strokeWidth="1.2" opacity="0.3" />
      <line x1="272" y1="155" x2="272" y2="180" stroke={color} strokeWidth="1.5" opacity="0.3" />
      <circle cx="272" cy="153" r="5" fill="none" stroke={color} strokeWidth="1.2" opacity="0.3" />

      {/* ═══ ENTRANCE ═══ */}
      <rect x="215" y="240" width="90" height="110" rx="6" fill={color} opacity="0.08" stroke={color} strokeWidth="2" />
      {/* Glass door */}
      <rect x="220" y="245" width="38" height="100" rx="3" fill={color} opacity="0.04" stroke={color} strokeWidth="0.8" />
      <rect x="262" y="245" width="38" height="100" rx="3" fill={color} opacity="0.04" stroke={color} strokeWidth="0.8" />
      {/* Door handle */}
      <circle cx="255" cy="295" r="3" fill={color} opacity="0.4" />
      <circle cx="265" cy="295" r="3" fill={color} opacity="0.4" />
      {/* Welcome mat */}
      <rect x="225" y="348" width="70" height="6" rx="2" fill={color} opacity="0.15" />

      {/* Steps */}
      <rect x="210" y="350" width="100" height="8" rx="2" fill={color} opacity="0.12" />
      <rect x="215" y="360" width="90" height="6" rx="2" fill={color} opacity="0.08" />

      {/* ═══ DECORATIVE ELEMENTS ═══ */}
      {/* Hanging plants */}
      <line x1="130" y1="84" x2="130" y2="100" stroke={color} strokeWidth="1" opacity="0.3" />
      <circle cx="130" cy="104" r="6" fill={color} opacity="0.12" />
      <circle cx="126" cy="108" r="4" fill={color} opacity="0.1" />
      <circle cx="134" cy="108" r="4" fill={color} opacity="0.1" />

      <line x1="390" y1="84" x2="390" y2="100" stroke={color} strokeWidth="1" opacity="0.3" />
      <circle cx="390" cy="104" r="6" fill={color} opacity="0.12" />
      <circle cx="386" cy="108" r="4" fill={color} opacity="0.1" />
      <circle cx="394" cy="108" r="4" fill={color} opacity="0.1" />

      {/* ═══ BUSHES ═══ */}
      <ellipse cx="50" cy="372" rx="35" ry="16" fill={color} opacity="0.1" />
      <ellipse cx="42" cy="366" rx="22" ry="11" fill={color} opacity="0.12" />
      <ellipse cx="470" cy="372" rx="35" ry="16" fill={color} opacity="0.1" />
      <ellipse cx="478" cy="366" rx="22" ry="11" fill={color} opacity="0.12" />

      {/* Potted plants at entrance */}
      <rect x="195" y="340" width="14" height="16" rx="3" fill={color} opacity="0.15" stroke={color} strokeWidth="0.8" />
      <circle cx="202" cy="336" r="8" fill={color} opacity="0.12" />
      <circle cx="198" cy="332" r="5" fill={color} opacity="0.1" />

      <rect x="311" y="340" width="14" height="16" rx="3" fill={color} opacity="0.15" stroke={color} strokeWidth="0.8" />
      <circle cx="318" cy="336" r="8" fill={color} opacity="0.12" />
      <circle cx="322" cy="332" r="5" fill={color} opacity="0.1" />

      {/* ═══ SIGN ═══ */}
      <rect x="180" y="195" width="160" height="38" rx="8" fill={color} opacity="0.2" stroke={color} strokeWidth="1.5" />
      <text x="260" y="220" textAnchor="middle" fill={color} fontSize="15" fontWeight="bold" opacity="0.8">RESTAURANTE</text>

      {/* ═══ OUTDOOR TABLES ═══ */}
      {/* Left table */}
      <ellipse cx="60" cy="380" rx="22" ry="5" fill={color} opacity="0.15" stroke={color} strokeWidth="1" />
      <line x1="60" y1="385" x2="60" y2="395" stroke={color} strokeWidth="2" opacity="0.2" />
      {/* Chair */}
      <rect x="38" y="385" width="8" height="10" rx="2" fill={color} opacity="0.1" />
      <rect x="74" y="385" width="8" height="10" rx="2" fill={color} opacity="0.1" />

      {/* Right table */}
      <ellipse cx="460" cy="380" rx="22" ry="5" fill={color} opacity="0.15" stroke={color} strokeWidth="1" />
      <line x1="460" y1="385" x2="460" y2="395" stroke={color} strokeWidth="2" opacity="0.2" />
      {/* Chair */}
      <rect x="438" y="385" width="8" height="10" rx="2" fill={color} opacity="0.1" />
      <rect x="474" y="385" width="8" height="10" rx="2" fill={color} opacity="0.1" />

      {/* ═══ LANTERNS ═══ */}
      <line x1="155" y1="130" x2="155" y2="138" stroke={color} strokeWidth="1" opacity="0.3" />
      <rect x="150" y="138" width="10" height="12" rx="3" fill={color} opacity="0.15" stroke={color} strokeWidth="0.8" />

      <line x1="365" y1="130" x2="365" y2="138" stroke={color} strokeWidth="1" opacity="0.3" />
      <rect x="360" y="138" width="10" height="12" rx="3" fill={color} opacity="0.15" stroke={color} strokeWidth="0.8" />
    </svg>
  )
);

RestaurantSvg.displayName = "RestaurantSvg";

export default RestaurantSvg;
