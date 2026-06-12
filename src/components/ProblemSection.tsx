"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const pains = [
  "Informasi masih tersebar di chat, story, dan bio Instagram.",
  "Calon pelanggan bertanya hal yang sama berulang kali.",
  "Bisnis terlihat aktif, tapi link-nya belum cukup meyakinkan.",
  "WhatsApp ramai, tapi belum ada halaman yang menjelaskan semuanya.",
];

const fragments = [
  "Harga paketnya di mana?",
  "Story IG kemarin",
  "Jam buka berubah",
  "Foto menu campur",
  "Link belum meyakinkan",
];

const painColors = [
  { border: "rgba(67,97,238,0.28)",  bg: "rgba(67,97,238,0.05)",  num: "var(--cobalt)" },
  { border: "rgba(200,80,26,0.28)",  bg: "rgba(200,80,26,0.05)",  num: "var(--terracotta)" },
  { border: "rgba(46,196,182,0.28)", bg: "rgba(46,196,182,0.05)", num: "var(--sage)" },
  { border: "rgba(201,75,140,0.28)", bg: "rgba(201,75,140,0.05)", num: "var(--magenta)" },
];

export function ProblemSection() {
  const prefersReducedMotion = useReducedMotion();
  const [hasHydrated, setHasHydrated] = useState(false);
  const reduceMotion = hasHydrated && prefersReducedMotion === true;

  useEffect(() => { setHasHydrated(true); }, []);

  return (
    <section className="section-shell problem-section section-space reveal-section" id="problem">
      <div className="problem-copy">
        <p className="label reveal-label">Masalah yang sering terjadi</p>
        <h2 className="reveal-heading">
          Bisnisnya sudah jalan. Tapi link yang dibagikan belum ikut meyakinkan.
        </h2>
        <p className="reveal-text">
          Banyak bisnis lokal punya produk, tempat, dan layanan yang bagus — tetapi
          informasi pentingnya masih tercecer. Calon pelanggan harus menebak sebelum
          akhirnya bertanya, atau lebih parah: pergi ke kompetitor.
        </p>

        {/* Colorful stat badge */}
        <div
          className="mt-8 inline-flex items-center gap-3"
          style={{
            borderRadius: 999,
            border: "2px solid rgba(67,97,238,0.28)",
            background: "rgba(67,97,238,0.07)",
            padding: "10px 18px",
          }}
        >
          <span style={{
            width: 9, height: 9, borderRadius: "50%",
            background: "var(--cobalt)", display: "block",
            boxShadow: "0 0 10px var(--cobalt)",
          }} />
          <span style={{ color: "var(--cobalt)", fontSize: "0.85rem", fontWeight: 700 }}>
            73% bisnis lokal belum punya landing page yang tepat
          </span>
        </div>
      </div>

      <motion.div
        className="problem-board"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Scattered fragments */}
        <div className="problem-fragments" aria-hidden="true">
          {fragments.map((item, index) => (
            <motion.span
              animate={reduceMotion ? undefined : { y: [0, index % 2 ? -8 : 8, 0] }}
              key={item}
              transition={{ duration: 4.5 + index * 0.6, repeat: Infinity, ease: "easeInOut" }}
            >
              {item}
            </motion.span>
          ))}
        </div>

        {/* Pain points */}
        <div className="pain-list reveal-card-group">
          {pains.map((pain, index) => (
            <article
              className="reveal-card gsap-hover-card"
              key={pain}
              style={{
                borderColor: painColors[index].border,
                background: painColors[index].bg,
              }}
            >
              <span style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.76rem",
                fontWeight: 800,
                color: painColors[index].num,
              }}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <p>{pain}</p>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
