"use client";

import Link from "next/link";
import { getPortfolioBySlug, portfolioItems } from "@/data/portfolio";
import { buildWhatsappLink } from "@/lib/whatsapp";
import { useGsapAnimation } from "@/hooks/useGsapAnimation";
import { PortfolioMockup } from "./PortfolioMockup";

export function PortfolioDetail({ slug }: { slug: string }) {
  const scope = useGsapAnimation();
  const item = getPortfolioBySlug(slug);

  if (!item) {
    return (
      <div className="portfolio-page-frame">
        <section className="section-shell section-space" style={{ textAlign: "center" }}>
          <p className="label">Portfolio tidak ditemukan</p>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 4rem)", fontWeight: 700, marginTop: 16 }}>
            Halaman ini tidak tersedia.
          </h2>
          <p style={{ color: "var(--ink-2)", marginTop: 16, maxWidth: 480, marginInline: "auto" }}>
            Konsep portfolio yang kamu cari tidak ditemukan. Kembali ke halaman portfolio untuk melihat semua kategori.
          </p>
          <Link href="/portfolio" className="btn-primary gsap-magnetic" style={{ marginTop: 32 }}>
            ← Kembali ke Portfolio
          </Link>
        </section>
      </div>
    );
  }

  const whatsappMessage = `Halo Adit, saya sudah lihat preview konsep ${item.category} (${item.title}) di Pratala Rerupa dan tertarik membuat website serupa. Bisa diskusi lebih lanjut?`;
  const whatsappLink = buildWhatsappLink(whatsappMessage);

  return (
    <>
      {/* Canvas background */}
      <div className="canvas-bg" aria-hidden="true" />

      {/* Simplified back nav */}
      <header className="portfolio-nav-bar">
        <Link href="/portfolio" className="portfolio-back-link">
          ← Portfolio
        </Link>
        <Link href="/" className="portfolio-back-link" style={{ marginLeft: "auto" }}>
          Pratala Rerupa
        </Link>
      </header>

      {/* Main frame */}
      <div ref={scope} className="portfolio-page-frame">
        {/* ─── Hero with themed gradient ─────────────────── */}
        <section
          className="portfolio-hero reveal-section"
          style={{
            background: `linear-gradient(160deg, ${item.themeColors.primary}14 0%, ${item.themeColors.secondary}14 100%)`,
          }}
        >
          <p className="label reveal-label" style={{ color: item.themeColors.primary }}>
            {item.category}
          </p>
          <h1 className="portfolio-hero-title reveal-heading">{item.title}</h1>
          <p className="reveal-text" style={{ color: "var(--ink-2)", maxWidth: 640, marginInline: "auto", fontSize: "1.08rem", lineHeight: 1.8 }}>
            {item.shortDescription}
          </p>
          <div className="portfolio-preview-link-row reveal-button" style={{ marginTop: 24 }}>
            <Link
              href={item.previewRoute}
              className="btn-secondary compact gsap-magnetic"
            >
              Lihat Live Preview →
            </Link>
          </div>
        </section>

        {/* ─── Problem & Solution ─────────────────────────── */}
        <section className="portfolio-section reveal-section">
          <div className="portfolio-problem-solution">
            <div className="portfolio-problem" style={{ borderLeftColor: item.themeColors.primary }}>
              <p className="label" style={{ color: item.themeColors.primary }}>Problem</p>
              <p className="portfolio-section-text">{item.businessProblem}</p>
            </div>
            <div>
              <p className="label" style={{ color: item.themeColors.secondary }}>Solusi Website</p>
              <p className="portfolio-section-text">{item.websiteSolution}</p>
            </div>
          </div>
        </section>

        {/* ─── Mockup Preview ────────────────────────────── */}
        <section className="portfolio-section reveal-section">
          <p className="label reveal-label" style={{ color: item.themeColors.primary }}>
            Preview Konsep
          </p>
          <PortfolioMockup
            themeColors={item.themeColors}
            mockupType={item.mockupType}
            title={item.title}
          />
          <p className="portfolio-disclaimer" style={{ marginTop: 18 }}>
            Konsep preview independen untuk demonstrasi arah visual. Belum terafiliasi
            dengan brand nyata.
          </p>
        </section>

        {/* ─── Key Features ──────────────────────────────── */}
        <section className="portfolio-section reveal-section">
          <p className="label reveal-label" style={{ color: item.themeColors.primary }}>
            Fitur Utama
          </p>
          <ul className="structure-list">
            {item.keyFeatures.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </section>

        {/* ─── Sections Included ─────────────────────────── */}
        <section className="portfolio-section reveal-section">
          <p className="label reveal-label" style={{ color: item.themeColors.primary }}>
            Struktur Website
          </p>
          <ul className="structure-list">
            {item.sectionsIncluded.map((section) => (
              <li key={section}>{section}</li>
            ))}
          </ul>
        </section>

        {/* ─── Metrics ───────────────────────────────────── */}
        <section className="portfolio-section reveal-section">
          <p className="label reveal-label" style={{ color: item.themeColors.primary }}>
            Dampak yang Diharapkan
          </p>
          <div className="portfolio-metrics">
            {item.metrics.map((metric) => (
              <div key={metric.label} className="portfolio-metric">
                <span
                  className="portfolio-metric-value"
                  style={{ color: item.themeColors.primary }}
                >
                  {metric.value}
                </span>
                <span className="portfolio-metric-label">{metric.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Design Details ────────────────────────────── */}
        <section className="portfolio-section reveal-section">
          <p className="label reveal-label" style={{ color: item.themeColors.primary }}>
            Arah Desain
          </p>
          <div className="portfolio-design-grid">
            <div>
              <p className="mini-title">Target Bisnis</p>
              <p style={{ color: "var(--ink-2)" }}>{item.targetBusiness}</p>
            </div>
            <div>
              <p className="mini-title">Visual Archetype</p>
              <p style={{ color: "var(--ink-2)" }}>{item.visualArchetype}</p>
            </div>
            <div>
              <p className="mini-title">Design Tone</p>
              <p style={{ color: "var(--ink-2)" }}>{item.designTone}</p>
            </div>
          </div>
        </section>

        {/* ─── Preview Highlights ────────────────────────── */}
        <section className="portfolio-section reveal-section">
          <p className="label reveal-label" style={{ color: item.themeColors.primary }}>
            Highlight Visual
          </p>
          <ul className="structure-list">
            {item.previewHighlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </section>

        {/* ─── Final CTA ─────────────────────────────────── */}
        <section className="portfolio-section reveal-section portfolio-cta-section">
          <h2 className="reveal-heading portfolio-cta-title">
            Tertarik dengan konsep ini?
          </h2>
          <p className="reveal-text portfolio-cta-desc">
            Kirim kebutuhan bisnismu. Kami bantu susun website yang sesuai karakter
            dan tujuan bisnis lokal kamu.
          </p>
          <div className="portfolio-cta-buttons mt-8 flex flex-wrap gap-3 justify-center">
            <a
              className="btn-primary gsap-magnetic"
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
            >
              {item.ctaText} via WhatsApp
            </a>
            <Link href={item.previewRoute} className="btn-secondary gsap-magnetic">
              Lihat Live Preview
            </Link>
            <Link href="/portfolio" className="btn-ghost gsap-magnetic">
              ← Lihat Portfolio Lain
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
