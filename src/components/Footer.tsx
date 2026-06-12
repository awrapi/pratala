"use client";

import { directWhatsappLink } from "@/lib/whatsapp";
import type { RequestPrefill } from "./RequestModal";

export function Footer({
  onRequest,
}: {
  onRequest: (prefill?: RequestPrefill) => void;
}) {
  return (
    <footer className="section-shell pb-14 reveal-section" id="contact">
      <div className="footer-panel final-cta-panel">
        {/* Decorative orbits */}
        <span className="footer-orbit footer-orbit-one" aria-hidden="true" />
        <span className="footer-orbit footer-orbit-two" aria-hidden="true" />

        {/* Extra paint blobs inside footer */}
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            width: 180, height: 180,
            borderRadius: "50%",
            background: "rgba(46,196,182,0.15)",
            filter: "blur(50px)",
            top: "10%", left: "30%",
            pointerEvents: "none",
          }}
        />

        <div>
          <p className="label final-cta-item reveal-label">
            Pratala Rerupa · Web Studio
          </p>
          <h2 className="final-cta-item reveal-heading">
            Kalau link bisnismu dibuka sekarang — sudah cukup meyakinkan?
          </h2>
          <p className="final-cta-item reveal-text">
            Kirim jenis bisnis dan arah yang kamu suka. Kami susun website yang terlihat
            rapi, dipercaya, dan siap diarahkan ke WhatsApp — dalam 7 hari.
          </p>

          {/* Slot availability badge */}
          <div
            className="final-cta-item mt-6 inline-flex items-center gap-3"
            style={{
              borderRadius: 999,
              border: "2px solid rgba(138,201,38,0.35)",
              background: "rgba(138,201,38,0.1)",
              padding: "9px 16px",
            }}
          >
            <span
              style={{
                width: 8, height: 8,
                borderRadius: "50%",
                background: "#8AC926",
                display: "inline-block",
                boxShadow: "0 0 10px #8AC926",
                animation: "pulse-dot 2.5s ease-in-out infinite",
              }}
            />
            <span style={{ color: "#8AC926", fontSize: "0.82rem", fontWeight: 700 }}>
              2 slot project tersedia bulan ini
            </span>
          </div>

          {/* Mini color palette strip */}
          <div className="final-cta-item mt-8 flex items-center gap-2">
            {[
              { color: "#4361EE", label: "Cobalt" },
              { color: "#C8501A", label: "Terracotta" },
              { color: "#2EC4B6", label: "Sage" },
              { color: "#FFD166", label: "Gold" },
              { color: "#C94B8C", label: "Magenta" },
              { color: "#8AC926", label: "Lime" },
            ].map((p) => (
              <span
                key={p.color}
                title={p.label}
                style={{
                  width: 18, height: 18,
                  borderRadius: "50%",
                  background: p.color,
                  display: "inline-block",
                  border: "2px solid rgba(255,255,255,0.15)",
                }}
              />
            ))}
            <span style={{ marginLeft: 8, color: "rgba(255,255,255,0.4)", fontSize: "0.78rem" }}>
              6 warna, 1 identitas yang kuat
            </span>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="footer-actions final-cta-item">
          <button
            className="btn-light gsap-magnetic cta-glow"
            onClick={() => onRequest()}
            type="button"
            style={{ fontSize: "0.95rem", fontWeight: 800 }}
          >
            Minta Preview Website
          </button>
          <a
            className="btn-dark gsap-magnetic"
            href={directWhatsappLink}
            target="_blank"
            rel="noreferrer"
          >
            💬 Chat via WhatsApp
          </a>
        </div>
      </div>

      {/* Footer bottom bar */}
      <div
        className="mt-6 flex flex-col gap-3 text-sm md:flex-row md:items-center md:justify-between"
        style={{ color: "var(--ink-3)" }}
      >
        <p>
          © {new Date().getFullYear()} Pratala Rerupa.{" "}
          <span style={{ color: "var(--terracotta)" }}>Studio landing page premium</span>{" "}
          untuk bisnis lokal Indonesia.
        </p>
        <div className="flex items-center gap-4">
          <a
            className="transition hover:text-ink"
            href="#home"
            style={{ color: "var(--ink-3)" }}
          >
            ↑ Kembali ke atas
          </a>
          <a
            className="transition hover:text-ink"
            href="/admin.html"
            style={{ color: "var(--ink-3)" }}
          >
            Admin
          </a>
        </div>
      </div>
    </footer>
  );
}
