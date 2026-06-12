"use client";

import { useEffect, useState } from "react";

export function PaintStrokes() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none select-none z-[-1] overflow-hidden" aria-hidden="true">
      {/* ── 1. Top-Left: Large Blue Splash & Scribble Doodle ── */}
      <svg
        className="absolute"
        style={{ top: "2%", left: "2%", width: "24vw", minWidth: "220px", maxWidth: "420px", opacity: 0.8 }}
        viewBox="0 0 300 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Cobalt Blue Paint Stroke Splash */}
        <path
          d="M 20,50 Q 90,20 180,60 T 260,30"
          stroke="var(--cobalt)"
          strokeWidth="45"
          strokeLinecap="round"
          opacity="0.15"
        />
        {/* Pink Paint Blob */}
        <circle cx="140" cy="90" r="30" fill="var(--magenta)" opacity="0.1" />

        {/* Circular crayon scribble */}
        <path
          d="M 40,80 C 40,40 120,30 110,80 C 100,130 50,110 90,140 C 130,170 180,100 150,70 C 120,40 70,70 120,110 C 170,150 200,90 220,130"
          stroke="var(--ink-3)"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.22"
        />

        {/* Sparkles */}
        <path d="M 45,30 L 45,46 M 37,38 L 53,38" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
        <path d="M 230,50 L 230,62 M 224,56 L 236,56" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />

        {/* Handwriting */}
        <text
          x="42"
          y="185"
          style={{
            fontFamily: "'Caveat', cursive",
            fontSize: "24px",
            fill: "var(--ink-2)",
            transform: "rotate(-6deg)",
            opacity: 0.65,
          }}
        >
          draft 4.2 / abstract
        </text>
      </svg>

      {/* ── 2. Top-Right: Millimeter Grid, Coffee Stain & Arrow ── */}
      <svg
        className="absolute"
        style={{ top: "3%", right: "2%", width: "22vw", minWidth: "200px", maxWidth: "380px", opacity: 0.85 }}
        viewBox="0 0 280 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Millimeter grid paper block */}
        <g opacity="0.15">
          <line x1="20" y1="20" x2="180" y2="20" stroke="var(--ink)" strokeWidth="1.5" />
          <line x1="20" y1="20" x2="20" y2="140" stroke="var(--ink)" strokeWidth="1.5" />
          {/* Horizontal lines */}
          <line x1="20" y1="40" x2="180" y2="40" stroke="var(--ink)" strokeWidth="0.5" />
          <line x1="20" y1="60" x2="180" y2="60" stroke="var(--ink)" strokeWidth="0.5" />
          <line x1="20" y1="80" x2="180" y2="80" stroke="var(--ink)" strokeWidth="0.5" />
          <line x1="20" y1="100" x2="180" y2="100" stroke="var(--ink)" strokeWidth="0.5" />
          <line x1="20" y1="120" x2="180" y2="120" stroke="var(--ink)" strokeWidth="0.5" />
          <line x1="20" y1="140" x2="180" y2="140" stroke="var(--ink)" strokeWidth="0.5" />
          {/* Vertical lines */}
          <line x1="40" y1="20" x2="40" y2="140" stroke="var(--ink)" strokeWidth="0.5" />
          <line x1="60" y1="20" x2="60" y2="140" stroke="var(--ink)" strokeWidth="0.5" />
          <line x1="80" y1="20" x2="80" y2="140" stroke="var(--ink)" strokeWidth="0.5" />
          <line x1="100" y1="20" x2="100" y2="140" stroke="var(--ink)" strokeWidth="0.5" />
          <line x1="120" y1="20" x2="120" y2="140" stroke="var(--ink)" strokeWidth="0.5" />
          <line x1="140" y1="20" x2="140" y2="140" stroke="var(--ink)" strokeWidth="0.5" />
          <line x1="160" y1="20" x2="160" y2="140" stroke="var(--ink)" strokeWidth="0.5" />
          <line x1="180" y1="20" x2="180" y2="140" stroke="var(--ink)" strokeWidth="0.5" />
        </g>

        {/* Coffee ring stain */}
        <path
          d="M 120,110 A 35,35 0 1,1 118,106 Q 116,104 114,105 Q 111,108 112,110"
          stroke="#8A857E"
          strokeWidth="1.8"
          strokeDasharray="90 8 20 4"
          fill="none"
          opacity="0.32"
        />
        <path
          d="M 116,105 C 114,98 108,100 110,106"
          stroke="#8A857E"
          strokeWidth="1"
          fill="none"
          opacity="0.25"
        />

        {/* Sketched arrow pointing to the web frame */}
        <path
          d="M 60,170 Q 110,165 140,195 Q 155,210 162,228 M 162,228 L 150,225 M 162,228 L 163,215"
          stroke="var(--terracotta)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.55"
        />

        {/* Drip stroke */}
        <path
          d="M 230,10 L 230,60"
          stroke="var(--cobalt)"
          strokeWidth="8"
          strokeLinecap="round"
          opacity="0.18"
        />
        <ellipse cx="230" cy="64" rx="4" ry="7" fill="var(--cobalt)" opacity="0.18" />

        {/* Handwriting */}
        <text
          x="50"
          y="245"
          style={{
            fontFamily: "'Caveat', cursive",
            fontSize: "24px",
            fill: "var(--ink-2)",
            transform: "rotate(4deg)",
            opacity: 0.65,
          }}
        >
          concept_02_final
        </text>
      </svg>

      {/* ── 3. Mid-Left: Wavy Scribbles & Paint splatters ── */}
      <svg
        className="absolute"
        style={{ top: "36%", left: "-1%", width: "20vw", minWidth: "160px", maxWidth: "320px", opacity: 0.75 }}
        viewBox="0 0 240 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Lime green crayon squiggle */}
        <path
          d="M -10,60 Q 40,20 90,60 T 190,60 T 260,60"
          stroke="var(--lime)"
          strokeWidth="3.2"
          strokeLinecap="round"
          opacity="0.32"
        />

        {/* Scattered paint drops */}
        <circle cx="80" cy="110" r="8" fill="var(--terracotta)" opacity="0.25" />
        <circle cx="98" cy="98" r="4" fill="var(--terracotta)" opacity="0.18" />
        <circle cx="65" cy="120" r="5" fill="var(--gold)" opacity="0.35" />
        <circle cx="130" cy="70" r="10" fill="var(--sage)" opacity="0.15" />

        {/* Handwriting */}
        <text
          x="20"
          y="160"
          style={{
            fontFamily: "'Caveat', cursive",
            fontSize: "25px",
            fill: "var(--ink-2)",
            transform: "rotate(-8deg)",
            opacity: 0.65,
          }}
        >
          light theme & shadows
        </text>
      </svg>

      {/* ── 4. Mid-Right: Gold Stroke, Sparkles & Arrow ── */}
      <svg
        className="absolute"
        style={{ top: "45%", right: "-1%", width: "18vw", minWidth: "150px", maxWidth: "280px", opacity: 0.8 }}
        viewBox="0 0 200 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Gold highlight paint stroke */}
        <path
          d="M 30,120 Q 90,80 150,130"
          stroke="var(--gold)"
          strokeWidth="28"
          strokeLinecap="round"
          opacity="0.2"
        />

        {/* Arrow pointing to web frame */}
        <path
          d="M 170,60 Q 120,70 90,40 Q 75,25 65,5 M 65,5 L 75,8 M 65,5 L 63,16"
          stroke="var(--sage)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.6"
        />

        {/* Crayon scribble crosshatch */}
        <g stroke="var(--ink-3)" strokeWidth="1.5" strokeLinecap="round" opacity="0.2">
          <line x1="80" y1="160" x2="130" y2="210" />
          <line x1="92" y1="160" x2="142" y2="210" />
          <line x1="104" y1="160" x2="154" y2="210" />
          <line x1="130" y1="160" x2="80" y2="210" />
          <line x1="142" y1="160" x2="92" y2="210" />
          <line x1="154" y1="160" x2="104" y2="210" />
        </g>

        {/* Handwriting */}
        <text
          x="40"
          y="110"
          style={{
            fontFamily: "'Caveat', cursive",
            fontSize: "23px",
            fill: "var(--ink-2)",
            transform: "rotate(6deg)",
            opacity: 0.65,
          }}
        >
          creative workspace
        </text>
      </svg>

      {/* ── 5. Bottom-Left: Terracotta/Magenta Splash & Math/Grid Doodle ── */}
      <svg
        className="absolute"
        style={{ bottom: "2%", left: "1%", width: "23vw", minWidth: "200px", maxWidth: "390px", opacity: 0.85 }}
        viewBox="0 0 280 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Large Terracotta Splash */}
        <path
          d="M 40,180 Q 110,130 200,160 T 260,110"
          stroke="var(--terracotta)"
          strokeWidth="38"
          strokeLinecap="round"
          opacity="0.14"
        />

        {/* Hand drawn geometric shape (triangle overlapping square) */}
        <g stroke="var(--ink-3)" strokeWidth="1.2" fill="none" opacity="0.25">
          <polygon points="50,60 120,40 90,110" />
          <rect x="70" y="55" width="50" height="50" transform="rotate(15 95 80)" />
        </g>

        {/* Dotted curve */}
        <path
          d="M 60,130 Q 120,90 180,140"
          stroke="var(--magenta)"
          strokeWidth="3.5"
          strokeDasharray="2 8"
          strokeLinecap="round"
          fill="none"
          opacity="0.4"
        />

        {/* Hand-drawn stars */}
        <path d="M 180,30 L 196,38 L 182,42 L 180,58 L 174,42 L 160,38 L 176,34 Z" fill="var(--gold)" opacity="0.5" />
        <path d="M 230,80 L 238,84 L 231,86 L 230,94 L 227,86 L 220,84 L 228,82 Z" fill="var(--gold)" opacity="0.45" />

        {/* Handwriting */}
        <text
          x="50"
          y="225"
          style={{
            fontFamily: "'Caveat', cursive",
            fontSize: "26px",
            fill: "var(--ink-2)",
            transform: "rotate(-5deg)",
            opacity: 0.65,
          }}
        >
          pixel perfect design.
        </text>
      </svg>

      {/* ── 6. Bottom-Right: Millimeter Grid, Coffee Rings & Sparkles ── */}
      <svg
        className="absolute"
        style={{ bottom: "3%", right: "1%", width: "22vw", minWidth: "190px", maxWidth: "360px", opacity: 0.85 }}
        viewBox="0 0 260 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Sage Teal brush stroke */}
        <path
          d="M 50,70 Q 130,40 210,90"
          stroke="var(--sage)"
          strokeWidth="42"
          strokeLinecap="round"
          opacity="0.14"
        />

        {/* Millimeter grid paper block */}
        <g opacity="0.14">
          <line x1="80" y1="120" x2="240" y2="120" stroke="var(--ink)" strokeWidth="1.2" />
          <line x1="240" y1="120" x2="240" y2="240" stroke="var(--ink)" strokeWidth="1.2" />
          {/* Grid lines */}
          <line x1="80" y1="140" x2="240" y2="140" stroke="var(--ink)" strokeWidth="0.4" />
          <line x1="80" y1="160" x2="240" y2="160" stroke="var(--ink)" strokeWidth="0.4" />
          <line x1="80" y1="180" x2="240" y2="180" stroke="var(--ink)" strokeWidth="0.4" />
          <line x1="80" y1="200" x2="240" y2="200" stroke="var(--ink)" strokeWidth="0.4" />
          <line x1="80" y1="220" x2="240" y2="220" stroke="var(--ink)" strokeWidth="0.4" />
          <line x1="80" y1="240" x2="240" y2="240" stroke="var(--ink)" strokeWidth="0.4" />
          <line x1="100" y1="120" x2="100" y2="240" stroke="var(--ink)" strokeWidth="0.4" />
          <line x1="120" y1="120" x2="120" y2="240" stroke="var(--ink)" strokeWidth="0.4" />
          <line x1="140" y1="120" x2="140" y2="240" stroke="var(--ink)" strokeWidth="0.4" />
          <line x1="160" y1="120" x2="160" y2="240" stroke="var(--ink)" strokeWidth="0.4" />
          <line x1="180" y1="120" x2="180" y2="240" stroke="var(--ink)" strokeWidth="0.4" />
          <line x1="200" y1="120" x2="200" y2="240" stroke="var(--ink)" strokeWidth="0.4" />
          <line x1="220" y1="120" x2="220" y2="240" stroke="var(--ink)" strokeWidth="0.4" />
        </g>

        {/* Coffee cup ring stain */}
        <path
          d="M 60,170 A 30,30 0 1,1 58,166 Q 56,164 54,165 Q 51,168 52,170"
          stroke="#8A857E"
          strokeWidth="1.6"
          strokeDasharray="75 6 15 3"
          fill="none"
          opacity="0.28"
        />

        {/* Scribbles */}
        <path
          d="M 120,150 C 140,130 180,180 160,200 C 140,220 190,210 210,180"
          stroke="var(--ink-3)"
          strokeWidth="1.5"
          fill="none"
          opacity="0.22"
        />

        {/* Sparkles */}
        <path d="M 40,90 L 40,102 M 34,96 L 46,96" stroke="var(--gold)" strokeWidth="1.8" strokeLinecap="round" opacity="0.65" />

        {/* Handwriting */}
        <text
          x="90"
          y="105"
          style={{
            fontFamily: "'Caveat', cursive",
            fontSize: "24px",
            fill: "var(--ink-2)",
            transform: "rotate(-4deg)",
            opacity: 0.65,
          }}
        >
          designed with passion.
        </text>
      </svg>
    </div>
  );
}
