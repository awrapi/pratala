"use client";

import { directWhatsappLink } from "@/lib/whatsapp";
import type { RequestPrefill } from "./RequestModal";

const chips = [
  { text: "50+ Bisnis", color: "var(--cobalt)", bg: "rgba(67,97,238,0.1)", border: "rgba(67,97,238,0.25)" },
  { text: "3× Konversi", color: "var(--terracotta)", bg: "rgba(200,80,26,0.1)", border: "rgba(200,80,26,0.25)" },
  { text: "7 Hari Delivery", color: "var(--sage)", bg: "rgba(46,196,182,0.1)", border: "rgba(46,196,182,0.25)" },
  { text: "Hasil Nyata", color: "var(--magenta)", bg: "rgba(201,75,140,0.1)", border: "rgba(201,75,140,0.25)" },
];

const scattered = ["Harga di mana?", "Story IG kemarin", "Jam buka?", "Link belum oke", "Foto campur"];

export function Hero({
  onRequest,
}: {
  onRequest: (prefill?: RequestPrefill) => void;
}) {
  return (
    <section className="hero-grid section-shell" id="home">
      {/* ── Left: Editorial Copy ── */}
      <div className="hero-copy">
        {/* Availability badge */}
        <div className="hero-badge hero-proof">
          <span className="hero-badge-dot" />
          <span>Tersedia — 2 slot project baru bulan ini</span>
        </div>

        {/* Big bold headline — Fraunces editorial */}
        <h1 className="hero-title hero-title-line-wrapper" aria-label="Website yang bikin bisnis terlihat premium.">
          <span className="hero-title-line" style={{ display: "block" }}>
            Website
          </span>
          <span className="hero-title-line" style={{ display: "block", color: "var(--cobalt)" }}>
            yang bikin
          </span>
          <span className="hero-title-line" style={{ display: "block" }}>
            bisnis terlihat{" "}
          </span>
          <span className="hero-title-line" style={{ display: "inline-block" }}>
            <span className="hero-title-highlighted">
              <span className="hero-highlight-bar" aria-hidden="true" />
              premium.
            </span>
          </span>
        </h1>

        <p className="hero-subheadline hero-cta mt-7 max-w-[520px]" style={{ color: "var(--ink-2)", fontSize: "1.08rem", lineHeight: 1.82 }}>
          Kami merancang landing page dan website yang tidak cuma cantik — tapi mengkonversi
          pengunjung jadi pembeli. Untuk bisnis lokal yang serius tampil profesional.
        </p>

        {/* CTA buttons */}
        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap hero-cta">
          <button
            className="btn-primary gsap-magnetic"
            onClick={() => onRequest()}
            type="button"
          >
            Mulai Project Sekarang →
          </button>
          <a className="btn-secondary gsap-magnetic" href="#workshop">
            Lihat Portfolio
          </a>
          <a
            className="btn-ghost gsap-magnetic"
            href={directWhatsappLink}
            target="_blank"
            rel="noreferrer"
          >
            💬 Chat WhatsApp
          </a>
        </div>

        {/* Color stat chips */}
        <div className="proof-strip hero-proof mt-8">
          {chips.map((chip) => (
            <span
              key={chip.text}
              style={{
                color: chip.color,
                background: chip.bg,
                borderColor: chip.border,
                borderWidth: 2,
                borderStyle: "solid",
                borderRadius: 999,
                padding: "8px 14px",
                fontSize: "0.82rem",
                fontWeight: 700,
              }}
            >
              {chip.text}
            </span>
          ))}
        </div>
      </div>

      {/* ── Right: Visual Mockup ── */}
      <div className="hero-mockup">
        {/* Blobs */}
        <span className="hero-blob hero-blob-one" aria-hidden="true" />
        <span className="hero-blob hero-blob-two" aria-hidden="true" />
        <span className="hero-blob hero-blob-three" aria-hidden="true" />

        {/* Scattered chaos chips */}
        <div className="messy-stack" aria-hidden="true">
          {scattered.map((item) => (
            <span className="hero-visual-card reveal-card floating-card" key={item}>
              {item}
            </span>
          ))}
        </div>

        {/* Premium website preview card */}
        <div className="clean-site-card hero-visual-card reveal-card floating-card gsap-hover-card">
          <div className="site-topbar">
            <span /><span /><span />
          </div>
          <div className="site-preview-shell">
            <div className="site-preview-copy">
              <small>Landing page premium</small>
              <p>Bisnis lokal yang langsung dipercaya.</p>
              <button type="button">Hubungi via WhatsApp</button>
            </div>
            <div className="site-preview-stack" aria-hidden="true">
              <span>Hero jelas</span>
              <span>Social proof</span>
              <span>CTA kuat</span>
            </div>
          </div>
          <div className="site-grid" aria-hidden="true">
            <span>Rapi</span>
            <span>Jelas</span>
            <span>Dipercaya</span>
          </div>
        </div>
      </div>
    </section>
  );
}
