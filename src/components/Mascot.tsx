"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useSpring } from "motion/react";

type MascotMood = "idle" | "wave" | "paint" | "think" | "cheer";

function getMoodByScroll(progress: number): MascotMood {
  if (progress < 0.08) return "wave";
  if (progress < 0.30) return "paint";
  if (progress < 0.55) return "think";
  if (progress < 0.80) return "cheer";
  return "wave";
}

/** Chubby toon mascot — "Prata" the little designer bear */
function MascotSVG({ mood }: { mood: MascotMood }) {
  const isWaving = mood === "wave" || mood === "cheer";
  const isPainting = mood === "paint";
  const isThinking = mood === "think";

  return (
    <svg
      width="96"
      height="110"
      viewBox="0 0 96 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Prata, maskot Pratala Rerupa"
      role="img"
    >
      {/* ── Shadow ── */}
      <ellipse cx="48" cy="107" rx="28" ry="5" fill="rgba(0,0,0,0.1)" />

      {/* ── Body — chubby cobalt overalls ── */}
      <rect x="22" y="62" width="52" height="42" rx="22" fill="#4361EE" />
      {/* Overalls bib */}
      <rect x="33" y="58" width="30" height="22" rx="10" fill="#4361EE" />
      {/* Bib pocket */}
      <rect x="39" y="65" width="18" height="10" rx="5" fill="#355BC6" />
      {/* Suspenders */}
      <line x1="38" y1="58" x2="28" y2="72" stroke="#355BC6" strokeWidth="3" strokeLinecap="round" />
      <line x1="58" y1="58" x2="68" y2="72" stroke="#355BC6" strokeWidth="3" strokeLinecap="round" />

      {/* ── Left arm ── */}
      <motion.g
        animate={
          isPainting
            ? { rotate: [-10, -40, -10], x: [-2, -6, -2] }
            : { rotate: [0, 5, 0], x: [0, 0, 0] }
        }
        transition={{ duration: isPainting ? 0.8 : 3, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "25px 72px" }}
      >
        <ellipse cx="16" cy="74" rx="10" ry="8" fill="#FFCBA4" transform="rotate(-20 16 74)" />
        {/* Paintbrush if painting */}
        {isPainting && (
          <g transform="translate(4, 68) rotate(-30)">
            <rect x="0" y="0" width="4" height="22" rx="2" fill="#C8501A" />
            <rect x="0" y="22" width="4" height="8" rx="1" fill="#8B4513" />
            <ellipse cx="2" cy="30" rx="3" ry="3" fill="#FF6B6B" />
          </g>
        )}
      </motion.g>

      {/* ── Right arm — waves ── */}
      <motion.g
        animate={
          isWaving
            ? { rotate: [-20, 30, -20] }
            : isThinking
            ? { rotate: [-40, -45, -40], y: [-4, -6, -4] }
            : { rotate: [0, -8, 0] }
        }
        transition={{
          duration: isWaving ? 0.55 : isThinking ? 2.5 : 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ transformOrigin: "71px 72px" }}
      >
        <ellipse cx="80" cy="74" rx="10" ry="8" fill="#FFCBA4" transform="rotate(20 80 74)" />
        {/* Thinking finger to chin */}
        {isThinking && (
          <circle cx="80" cy="64" r="4" fill="#FFCBA4" />
        )}
      </motion.g>

      {/* ── Feet ── */}
      <ellipse cx="36" cy="104" rx="12" ry="7" fill="#1A1814" />
      <ellipse cx="60" cy="104" rx="12" ry="7" fill="#1A1814" />

      {/* ── Head ── big chubby ── */}
      <motion.g
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Head base */}
        <ellipse cx="48" cy="38" rx="30" ry="28" fill="#FFCBA4" />

        {/* Cheeks */}
        <ellipse cx="24" cy="44" rx="9" ry="7" fill="#FFB3B3" opacity="0.6" />
        <ellipse cx="72" cy="44" rx="9" ry="7" fill="#FFB3B3" opacity="0.6" />

        {/* Eyes */}
        <ellipse cx="37" cy="36" rx="6" ry="7" fill="white" />
        <ellipse cx="59" cy="36" rx="6" ry="7" fill="white" />

        {/* Pupils — look slightly up when thinking */}
        <motion.g
          animate={isThinking ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <circle cx="38" cy="37" r="4" fill="#1A1814" />
          <circle cx="60" cy="37" r="4" fill="#1A1814" />
          {/* Shine */}
          <circle cx="40" cy="35" r="1.5" fill="white" />
          <circle cx="62" cy="35" r="1.5" fill="white" />
        </motion.g>

        {/* Mouth */}
        <motion.path
          d={
            mood === "cheer"
              ? "M 38 50 Q 48 58 58 50"
              : mood === "think"
              ? "M 40 50 Q 48 48 56 50"
              : "M 38 50 Q 48 56 58 50"
          }
          stroke="#C8501A"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          transition={{ duration: 0.3 }}
        />

        {/* Beret — the designer's hat */}
        <ellipse cx="48" cy="14" rx="28" ry="10" fill="#C8501A" />
        <ellipse cx="48" cy="13" rx="24" ry="7" fill="#E8401A" />
        {/* Beret pompon */}
        <circle cx="48" cy="7" r="5" fill="#FFD166" />
        {/* Beret band */}
        <path d="M 20 16 Q 48 22 76 16" stroke="#A83510" strokeWidth="2.5" fill="none" />

        {/* Pencil behind ear */}
        <g transform="translate(72, 24) rotate(15)">
          <rect x="0" y="0" width="3" height="14" rx="1.5" fill="#FFD166" />
          <rect x="0" y="14" width="3" height="4" rx="0" fill="#FFCBA4" />
          <polygon points="0,18 3,18 1.5,22" fill="#1A1814" />
        </g>
      </motion.g>

      {/* ── Speech bubble (on wave/cheer) ── */}
      {(mood === "wave" || mood === "cheer") && (
        <motion.g
          initial={{ opacity: 0, scale: 0.7, y: 5 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <rect x="52" y="-14" width="44" height="24" rx="10" fill="#FFD166" />
          <polygon points="56,10 64,10 58,18" fill="#FFD166" />
          <text
            x="74"
            y="3"
            textAnchor="middle"
            fontSize="9"
            fontWeight="800"
            fontFamily="'Plus Jakarta Sans', sans-serif"
            fill="#1A1814"
          >
            {mood === "wave" ? "Halo! 👋" : "Yay! 🎉"}
          </text>
        </motion.g>
      )}

      {/* Thinking bubble */}
      {mood === "think" && (
        <motion.g
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35 }}
        >
          <circle cx="68" cy="8" r="3" fill="#E8F4FE" />
          <circle cx="76" cy="0" r="5" fill="#E8F4FE" />
          <circle cx="86" cy="-8" r="8" fill="#E8F4FE" />
          <text x="86" y="-5" textAnchor="middle" fontSize="8">💡</text>
        </motion.g>
      )}
    </svg>
  );
}

export function Mascot() {
  const [mood, setMood] = useState<MascotMood>("wave");
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const rawY = useRef(0);
  const springY = useSpring(0, { stiffness: 60, damping: 18 });

  useEffect(() => {
    // Show after splash
    const timer = setTimeout(() => setIsVisible(true), 2600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    function onScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;

      // Follow scroll — mapped to viewport height range with offset
      const maxTravel = window.innerHeight * 0.55;
      rawY.current = progress * maxTravel;
      springY.set(rawY.current);

      setMood(getMoodByScroll(progress));
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [springY]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="mascot-wrapper"
      initial={{ x: 120, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: "fixed",
        right: isMinimized ? -72 : 0,
        bottom: "auto",
        top: 0,
        zIndex: 40,
        pointerEvents: "none",
        transition: "right 0.4s cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      <motion.div
        style={{ y: springY, marginTop: 120 }}
      >
        {/* Mascot container */}
        <div
          style={{ position: "relative", pointerEvents: "auto", cursor: "pointer" }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setIsMinimized((v) => !v)}
          title={isMinimized ? "Tampilkan Prata" : "Sembunyikan Prata"}
          role="button"
          tabIndex={0}
          aria-label="Maskot Prata, klik untuk sembunyikan"
          onKeyDown={(e) => { if (e.key === "Enter") setIsMinimized((v) => !v); }}
        >
          <motion.div
            animate={{
              y: [0, -8, 0],
              rotate: isHovered ? [0, -5, 5, -5, 0] : [0, 0, 0],
            }}
            transition={{
              y: { duration: 2.2, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 0.4 },
            }}
          >
            <MascotSVG mood={isHovered ? "wave" : mood} />
          </motion.div>

          {/* Name tag */}
          <motion.div
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 4 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "absolute",
              bottom: 14,
              left: "50%",
              transform: "translateX(-50%)",
              background: "#1A1814",
              color: "white",
              fontSize: "0.62rem",
              fontWeight: 800,
              fontFamily: "'JetBrains Mono', monospace",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "4px 10px",
              borderRadius: 999,
              whiteSpace: "nowrap",
              pointerEvents: "none",
            }}
          >
            Prata ✏️
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
