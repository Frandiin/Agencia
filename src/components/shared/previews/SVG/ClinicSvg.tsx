import { forwardRef } from "react";

interface ClinicSvgProps {
  color?: string;
}

const ClinicSvg = forwardRef<SVGSVGElement, ClinicSvgProps>(
  ({ color = "#0d9488" }, ref) => (
    <svg
      ref={ref}
      viewBox="0 0 520 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      {/* Ground */}
      <ellipse cx="260" cy="395" rx="250" ry="16" fill={color} opacity="0.04" />

      {/* ═══ BUILDING ═══ */}
      <rect x="110" y="55" width="300" height="310" rx="10" fill="white" stroke={color} strokeWidth="2" strokeOpacity="0.8" />
      <rect x="110" y="55" width="300" height="14" rx="10" fill={color} opacity="0.18" />

      {/* Cross */}
      <rect x="240" y="77" width="40" height="10" rx="3" fill={color} opacity="0.7" />
      <rect x="255" y="65" width="10" height="34" rx="3" fill={color} opacity="0.7" />

      {/* Door */}
      <rect x="228" y="255" width="64" height="110" rx="5" fill={color} opacity="0.06" stroke={color} strokeWidth="1.2" strokeOpacity="0.2" />
      <circle cx="280" cy="312" r="3" fill={color} opacity="0.35" />

      {/* Windows */}
      {[
        [135, 100], [185, 100], [300, 100], [350, 100],
        [135, 150], [185, 150], [300, 150], [350, 150],
        [135, 200], [350, 200],
      ].map(([x, y], i) => (
        <rect key={i} x={x} y={y} width="34" height="28" rx="4" fill={color} opacity="0.04" stroke={color} strokeWidth="0.7" strokeOpacity="0.15" />
      ))}

      {/* Steps */}
      <rect x="218" y="365" width="84" height="7" rx="2" fill={color} opacity="0.06" />
      <rect x="223" y="358" width="74" height="7" rx="2" fill={color} opacity="0.04" />

      {/* ═══ BUSHES ═══ */}
      <ellipse cx="40" cy="378" rx="30" ry="14" fill={color} opacity="0.04" />
      <ellipse cx="34" cy="372" rx="20" ry="10" fill={color} opacity="0.05" />
      <ellipse cx="480" cy="378" rx="30" ry="14" fill={color} opacity="0.04" />
      <ellipse cx="486" cy="372" rx="20" ry="10" fill={color} opacity="0.05" />

      {/* Plantas na porta */}
      <line x1="222" y1="365" x2="222" y2="348" stroke={color} strokeWidth="0.8" opacity="0.15" />
      <circle cx="218" cy="346" r="4.5" fill={color} opacity="0.04" />
      <circle cx="226" cy="344" r="3.5" fill={color} opacity="0.03" />

      <line x1="298" y1="365" x2="298" y2="348" stroke={color} strokeWidth="0.8" opacity="0.15" />
      <circle cx="294" cy="346" r="4.5" fill={color} opacity="0.04" />
      <circle cx="302" cy="344" r="3.5" fill={color} opacity="0.03" />
    </svg>
  )
);

ClinicSvg.displayName = "ClinicSvg";

export default ClinicSvg;
