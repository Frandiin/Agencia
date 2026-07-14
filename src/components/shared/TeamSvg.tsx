"use client";

const TeamSvg = () => (
  <svg
    viewBox="0 0 500 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    {/* Room */}
    <rect x="15" y="20" width="470" height="360" rx="14" className="fill-muted/30 stroke-border/40" strokeWidth="1.5" />

    {/* Floor */}
    <path d="M15 320 L485 320" className="stroke-border/25" strokeWidth="1" />

    {/* Window left */}
    <rect x="40" y="50" width="80" height="100" rx="5" className="fill-background stroke-border/35" strokeWidth="1.2" />
    <line x1="80" y1="50" x2="80" y2="150" className="stroke-border/25" strokeWidth="0.8" />
    <line x1="40" y1="100" x2="120" y2="100" className="stroke-border/25" strokeWidth="0.8" />
    {/* Sky through window */}
    <circle cx="60" cy="70" r="8" className="fill-primary/8" />

    {/* Window right */}
    <rect x="380" y="50" width="80" height="100" rx="5" className="fill-background stroke-border/35" strokeWidth="1.2" />
    <line x1="420" y1="50" x2="420" y2="150" className="stroke-border/25" strokeWidth="0.8" />
    <line x1="380" y1="100" x2="460" y2="100" className="stroke-border/25" strokeWidth="0.8" />
    <circle cx="400" cy="70" r="8" className="fill-primary/8" />

    {/* Whiteboard */}
    <rect x="185" y="45" width="130" height="80" rx="4" className="fill-background stroke-primary/25" strokeWidth="1.2" />
    <line x1="200" y1="65" x2="290" y2="65" className="stroke-primary/35" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="200" y1="80" x2="265" y2="80" className="stroke-accent/30" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="200" y1="95" x2="280" y2="95" className="stroke-primary/25" strokeWidth="1.8" strokeLinecap="round" />
    <line x1="200" y1="110" x2="240" y2="110" className="stroke-accent/25" strokeWidth="1.8" strokeLinecap="round" />

    {/* Table */}
    <ellipse cx="250" cy="270" rx="150" ry="38" className="fill-muted/50 stroke-border/40" strokeWidth="1.5" />
    <ellipse cx="250" cy="267" rx="147" ry="35" className="fill-card" />

    {/* Laptop */}
    <rect x="215" y="248" width="45" height="28" rx="3" className="fill-muted-foreground/15 stroke-border/35" strokeWidth="1" />
    <rect x="220" y="251" width="35" height="16" rx="1.5" className="fill-primary/10" />
    <line x1="224" y1="256" x2="250" y2="256" className="stroke-primary/25" strokeWidth="0.8" />
    <line x1="224" y1="260" x2="244" y2="260" className="stroke-primary/18" strokeWidth="0.8" />

    {/* Coffee */}
    <rect x="278" y="255" width="11" height="13" rx="2" className="fill-muted/40 stroke-border/30" strokeWidth="0.7" />
    <path d="M289 258 C293 258 293 264 289 264" className="stroke-border/25" strokeWidth="0.7" fill="none" />

    {/* ====== PERSON 1 - woman sitting left ====== */}
    <g>
      {/* Torso - blouse */}
      <path d="M130 235 C130 215 145 200 160 200 C175 200 190 215 190 235 L185 270 L135 270 Z" className="fill-primary/18" />
      {/* Neck */}
      <rect x="155" y="188" width="10" height="14" rx="4" className="fill-muted/65" />
      {/* Head */}
      <ellipse cx="160" cy="175" rx="20" ry="22" className="fill-muted/70 stroke-border/40" strokeWidth="1" />
      {/* Hair - long */}
      <path d="M140 170 C138 155 145 140 160 138 C175 140 182 155 180 170 L182 195 C180 200 178 195 175 190 L175 175" className="fill-foreground/18" />
      <path d="M140 170 L138 195 C140 200 142 195 145 190 L145 175" className="fill-foreground/15" />
      {/* Face */}
      <ellipse cx="153" cy="173" rx="2.2" ry="2.5" className="fill-foreground/35" />
      <ellipse cx="167" cy="173" rx="2.2" ry="2.5" className="fill-foreground/35" />
      <ellipse cx="153" cy="172" rx="0.8" ry="1" className="fill-background/80" />
      <ellipse cx="167" cy="172" rx="0.8" ry="1" className="fill-background/80" />
      {/* Eyebrows */}
      <path d="M149 168 C152 166 156 166 158 168" className="stroke-foreground/25" strokeWidth="0.8" fill="none" strokeLinecap="round" />
      <path d="M162 168 C165 166 169 166 171 168" className="stroke-foreground/25" strokeWidth="0.8" fill="none" strokeLinecap="round" />
      {/* Nose */}
      <path d="M160 175 C159 178 158 180 160 181" className="stroke-foreground/15" strokeWidth="0.7" fill="none" strokeLinecap="round" />
      {/* Mouth - smile */}
      <path d="M154 185 C157 188 163 188 166 185" className="stroke-foreground/25" strokeWidth="0.8" fill="none" strokeLinecap="round" />
      {/* Left arm on table */}
      <path d="M135 220 C125 230 120 245 125 260" className="stroke-primary/20" strokeWidth="8" strokeLinecap="round" fill="none" />
      {/* Right arm gesturing */}
      <path d="M185 218 C195 215 210 220 225 230" className="stroke-primary/20" strokeWidth="8" strokeLinecap="round" fill="none" />
      {/* Hand */}
      <circle cx="225" cy="230" r="5" className="fill-muted/60 stroke-border/30" strokeWidth="0.7" />
    </g>

    {/* ====== PERSON 2 - man sitting right ====== */}
    <g>
      {/* Torso - t-shirt */}
      <path d="M310 235 C310 215 325 200 340 200 C355 200 370 215 370 235 L365 270 L315 270 Z" className="fill-accent/12" />
      {/* Neck */}
      <rect x="335" y="188" width="10" height="14" rx="4" className="fill-muted/65" />
      {/* Head */}
      <ellipse cx="340" cy="175" rx="20" ry="22" className="fill-muted/70 stroke-border/40" strokeWidth="1" />
      {/* Hair - short */}
      <path d="M320 168 C318 152 328 140 340 138 C352 140 362 152 360 168 L358 165 C355 155 348 148 340 147 C332 148 325 155 322 165 Z" className="fill-foreground/15" />
      {/* Face */}
      <ellipse cx="333" cy="173" rx="2.2" ry="2.5" className="fill-foreground/35" />
      <ellipse cx="347" cy="173" rx="2.2" ry="2.5" className="fill-foreground/35" />
      <ellipse cx="333" cy="172" rx="0.8" ry="1" className="fill-background/80" />
      <ellipse cx="347" cy="172" rx="0.8" ry="1" className="fill-background/80" />
      {/* Eyebrows - thicker */}
      <path d="M328 167 C332 165 336 165 338 167" className="stroke-foreground/30" strokeWidth="1" fill="none" strokeLinecap="round" />
      <path d="M342 167 C346 165 350 165 352 167" className="stroke-foreground/30" strokeWidth="1" fill="none" strokeLinecap="round" />
      {/* Nose */}
      <path d="M340 175 C339 178 338 180 340 181" className="stroke-foreground/15" strokeWidth="0.7" fill="none" strokeLinecap="round" />
      {/* Mouth */}
      <path d="M334 185 C337 188 343 188 346 185" className="stroke-foreground/25" strokeWidth="0.8" fill="none" strokeLinecap="round" />
      {/* Left arm - resting */}
      <path d="M315 220 C305 230 298 245 300 260" className="stroke-accent/15" strokeWidth="8" strokeLinecap="round" fill="none" />
      {/* Right arm gesturing */}
      <path d="M365 218 C375 212 385 215 390 225" className="stroke-accent/15" strokeWidth="8" strokeLinecap="round" fill="none" />
      <circle cx="390" cy="225" r="5" className="fill-muted/60 stroke-border/30" strokeWidth="0.7" />
    </g>

    {/* ====== PERSON 3 - woman standing center ====== */}
    <g>
      {/* Legs */}
      <rect x="238" y="285" width="10" height="35" rx="4" className="fill-muted/40" />
      <rect x="252" y="285" width="10" height="35" rx="4" className="fill-muted/40" />
      {/* Torso - blazer */}
      <path d="M230 200 C230 180 240 165 250 165 C260 165 270 180 270 200 L268 290 L232 290 Z" className="fill-primary/15 stroke-primary/10" strokeWidth="0.5" />
      {/* Blazer lapels */}
      <path d="M242 170 L250 195 L245 195" className="stroke-primary/20" strokeWidth="0.8" fill="none" />
      <path d="M258 170 L250 195 L255 195" className="stroke-primary/20" strokeWidth="0.8" fill="none" />
      {/* Neck */}
      <rect x="246" y="153" width="8" height="14" rx="3" className="fill-muted/65" />
      {/* Head */}
      <ellipse cx="250" cy="140" rx="19" ry="21" className="fill-muted/70 stroke-border/40" strokeWidth="1" />
      {/* Hair - bun */}
      <path d="M231 135 C230 120 238 108 250 106 C262 108 270 120 269 135 L267 132 C264 122 258 115 250 114 C242 115 236 122 233 132 Z" className="fill-foreground/18" />
      <circle cx="250" cy="108" r="8" className="fill-foreground/12" />
      {/* Face */}
      <ellipse cx="243" cy="138" rx="2" ry="2.3" className="fill-foreground/35" />
      <ellipse cx="257" cy="138" rx="2" ry="2.3" className="fill-foreground/35" />
      <ellipse cx="243" cy="137" rx="0.7" ry="0.9" className="fill-background/80" />
      <ellipse cx="257" cy="137" rx="0.7" ry="0.9" className="fill-background/80" />
      {/* Eyebrows */}
      <path d="M239 133 C242 131 245 131 247 133" className="stroke-foreground/25" strokeWidth="0.7" fill="none" strokeLinecap="round" />
      <path d="M253 133 C256 131 259 131 261 133" className="stroke-foreground/25" strokeWidth="0.7" fill="none" strokeLinecap="round" />
      {/* Nose */}
      <path d="M250 140 C249 143 248 145 250 146" className="stroke-foreground/15" strokeWidth="0.6" fill="none" strokeLinecap="round" />
      {/* Mouth */}
      <path d="M245 151 C248 153 252 153 255 151" className="stroke-foreground/25" strokeWidth="0.7" fill="none" strokeLinecap="round" />
      {/* Left arm - pointing to whiteboard */}
      <path d="M232 175 C220 165 210 150 205 135" className="stroke-primary/18" strokeWidth="7" strokeLinecap="round" fill="none" />
      <circle cx="205" cy="135" r="4.5" className="fill-muted/60 stroke-border/30" strokeWidth="0.6" />
      {/* Right arm - relaxed */}
      <path d="M268 175 C278 185 282 200 280 215" className="stroke-primary/18" strokeWidth="7" strokeLinecap="round" fill="none" />
    </g>

    {/* ====== PERSON 4 - man sitting far left ====== */}
    <g>
      {/* Torso */}
      <path d="M75 248 C75 232 87 220 100 220 C113 220 125 232 125 248 L122 278 L78 278 Z" className="fill-muted/20" />
      {/* Neck */}
      <rect x="96" y="208" width="8" height="13" rx="3" className="fill-muted/60" />
      {/* Head */}
      <ellipse cx="100" cy="196" rx="17" ry="19" className="fill-muted/65 stroke-border/35" strokeWidth="1" />
      {/* Hair */}
      <path d="M83 192 C82 180 89 170 100 168 C111 170 118 180 117 192 L115 189 C113 182 108 176 100 175 C92 176 87 182 85 189 Z" className="fill-foreground/12" />
      {/* Face */}
      <ellipse cx="94" cy="194" rx="1.8" ry="2" className="fill-foreground/30" />
      <ellipse cx="106" cy="194" rx="1.8" ry="2" className="fill-foreground/30" />
      <path d="M96 204 C98 206 102 206 104 204" className="stroke-foreground/20" strokeWidth="0.7" fill="none" strokeLinecap="round" />
      {/* Arms on table */}
      <path d="M80 235 C72 245 68 258 72 272" className="stroke-muted/30" strokeWidth="7" strokeLinecap="round" fill="none" />
      <path d="M120 235 C128 242 132 252 130 265" className="stroke-muted/30" strokeWidth="7" strokeLinecap="round" fill="none" />
    </g>

    {/* Plant left */}
    <g>
      <rect x="32" y="280" width="18" height="24" rx="4" className="fill-muted/40 stroke-border/25" strokeWidth="0.8" />
      <path d="M41 280 C32 265 28 255 35 242" className="stroke-primary/30" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M41 280 C41 262 48 252 52 240" className="stroke-primary/25" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M41 280 C50 268 58 260 54 248" className="stroke-accent/25" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <circle cx="35" cy="241" r="6" className="fill-primary/15" />
      <circle cx="52" cy="239" r="5.5" className="fill-primary/12" />
      <circle cx="54" cy="247" r="5" className="fill-accent/12" />
    </g>

    {/* Plant right */}
    <g>
      <rect x="450" y="280" width="18" height="24" rx="4" className="fill-muted/40 stroke-border/25" strokeWidth="0.8" />
      <path d="M459 280 C450 265 446 255 453 242" className="stroke-primary/30" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M459 280 C459 262 466 252 470 240" className="stroke-primary/25" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <circle cx="453" cy="241" r="6" className="fill-primary/15" />
      <circle cx="470" cy="239" r="5.5" className="fill-primary/12" />
    </g>

    {/* Sticky notes */}
    <rect x="335" y="60" width="24" height="24" rx="1" className="fill-primary/12" />
    <rect x="340" y="66" width="14" height="1.5" rx="0.5" className="fill-primary/25" />
    <rect x="340" y="72" width="9" height="1.5" rx="0.5" className="fill-primary/18" />

    <rect x="363" y="55" width="24" height="24" rx="1" className="fill-accent/10" />
    <rect x="368" y="61" width="14" height="1.5" rx="0.5" className="fill-accent/22" />
    <rect x="368" y="67" width="9" height="1.5" rx="0.5" className="fill-accent/15" />

    {/* Notebook on table */}
    <rect x="155" y="258" width="30" height="20" rx="2" className="fill-muted/30 stroke-border/25" strokeWidth="0.7" />
    <line x1="160" y1="264" x2="180" y2="264" className="stroke-border/20" strokeWidth="0.5" />
    <line x1="160" y1="268" x2="175" y2="268" className="stroke-border/20" strokeWidth="0.5" />
    <line x1="160" y1="272" x2="178" y2="272" className="stroke-border/20" strokeWidth="0.5" />
  </svg>
);

export default TeamSvg;
