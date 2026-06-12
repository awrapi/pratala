"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (sessionStorage.getItem("pr-splash-shown")) {
      setVisible(false);
      return;
    }
    const timer = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("pr-splash-shown", "1");
    }, 2400);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="splash-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          aria-hidden="true"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "#1a1814",
            pointerEvents: "none",
          }}
        >
          {/* Animated PR Logo */}
          <motion.svg
            width="72"
            height="72"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Outer rounded square */}
            <motion.rect
              x="3" y="3" width="58" height="58" rx="16"
              stroke="white" strokeWidth="2.5" fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            />
            {/* P bar */}
            <motion.line
              x1="14" y1="15" x2="14" y2="49"
              stroke="white" strokeWidth="3.5" strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            />
            {/* P bowl */}
            <motion.path
              d="M14 15 H26 Q35 15 35 24 Q35 33 26 33 H14"
              stroke="white" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.45, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            />
            {/* R bar */}
            <motion.line
              x1="40" y1="15" x2="40" y2="49"
              stroke="white" strokeWidth="3.5" strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.4, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            />
            {/* R bowl */}
            <motion.path
              d="M40 15 H50 Q58 15 58 23 Q58 31 50 31 H40"
              stroke="white" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.45, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            />
            {/* R leg diagonal — the designer's signature */}
            <motion.line
              x1="50" y1="31" x2="58" y2="49"
              stroke="#C8501A" strokeWidth="3.5" strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.32, delay: 0.88, ease: [0.16, 1, 0.3, 1] }}
            />
          </motion.svg>

          {/* Studio name */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 1.05 }}
            style={{
              marginTop: 20,
              fontFamily: "Fraunces, Georgia, serif",
              fontSize: "1.15rem",
              fontStyle: "italic",
              fontWeight: 300,
              color: "rgba(255,255,255,0.6)",
              letterSpacing: "0.06em",
            }}
          >
            Pratala Rerupa
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1.3 }}
            style={{
              marginTop: 8,
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "0.6rem",
              fontWeight: 700,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.3)",
            }}
          >
            Web Studio
          </motion.p>

          {/* Color dot row */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.55, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              marginTop: 28,
              display: "flex",
              gap: 10,
              transformOrigin: "center",
            }}
          >
            {["#4361EE", "#C8501A", "#2EC4B6", "#FFD166", "#C94B8C", "#8AC926"].map((c) => (
              <span
                key={c}
                style={{ width: 10, height: 10, borderRadius: "50%", background: c, display: "block" }}
              />
            ))}
          </motion.div>

          {/* Brush stroke decoration at bottom */}
          <motion.svg
            width="200" height="36"
            viewBox="0 0 200 36"
            fill="none"
            style={{ position: "absolute", bottom: "14%", opacity: 0.18 }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 0.18 }}
            transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <path
              d="M5 24 Q25 6 55 18 Q85 30 115 14 Q145 0 170 18 Q188 28 196 16"
              stroke="white"
              strokeWidth="3.5"
              fill="none"
              strokeLinecap="round"
            />
          </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
