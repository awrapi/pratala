"use client";

import Link from "next/link";
import { getPortfolioByPreviewSlug } from "@/data/portfolio";
import { buildWhatsappLink } from "@/lib/whatsapp";
import { useGsapAnimation } from "@/hooks/useGsapAnimation";
import { PortfolioMockup } from "./PortfolioMockup";
import { PreviewMockupContent } from "./PreviewMockupContent";

export function PortfolioLivePreview({ slug }: { slug: string }) {
  const scope = useGsapAnimation();
  const item = getPortfolioByPreviewSlug(slug);

  if (!item) {
    return (
      <div className="portfolio-page-frame">
        <section
          className="section-shell section-space"
          style={{ textAlign: "center" }}
        >
          <p className="label">Preview tidak ditemukan</p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 4rem)",
              fontWeight: 700,
              marginTop: 16,
            }}
          >
            Halaman preview ini tidak tersedia.
          </h2>
          <p
            style={{
              color: "var(--ink-2)",
              marginTop: 16,
              maxWidth: 480,
              marginInline: "auto",
            }}
          >
            Preview yang kamu cari tidak ditemukan. Kembali ke halaman portfolio
            untuk melihat semua kategori.
          </p>
          <Link
            href="/portfolio"
            className="btn-primary gsap-magnetic"
            style={{ marginTop: 32 }}
          >
            ← Kembali ke Portfolio
          </Link>
        </section>
      </div>
    );
  }

  const whatsappMessage = `Halo Adit, saya tertarik membuat website seperti preview ${item.category} di Pratala Rerupa. Bisa bantu saya membuat versi untuk bisnis saya?`;
  const whatsappLink = buildWhatsappLink(whatsappMessage);

  return (
    <>
      {/* Canvas background */}
      <div className="canvas-bg" aria-hidden="true" />

      {/* ─── 1. Top Bar ──────────────────────────────────── */}
      <header className="live-preview-topbar">
        <span className="live-preview-topbar-pill">Concept Preview</span>
        <span className="live-preview-topbar-name">
          {item.previewBusinessName}
        </span>
        <div className="live-preview-topbar-actions">
          <Link
            href={item.route}
            className="portfolio-back-link"
          >
            ← Case Study
          </Link>
          <a
            className="btn-primary compact gsap-magnetic"
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </header>

      {/* Main frame */}
      <div ref={scope} className="portfolio-page-frame">
        {/* ─── 2. Hero ────────────────────────────────────── */}
        <section
          className="live-preview-hero reveal-section"
          style={{
            background: `linear-gradient(160deg, ${item.themeColors.primary}18 0%, ${item.themeColors.secondary}18 100%)`,
          }}
        >
          <p
            className="label reveal-label"
            style={{ color: item.themeColors.primary }}
          >
            {item.previewHeroLabel}
          </p>
          <h1 className="live-preview-hero-title reveal-heading">
            {item.previewTitle}
          </h1>
          <p className="live-preview-hero-subtitle reveal-text">
            {item.previewSubtitle}
          </p>
          <div className="live-preview-hero-actions">
            <a
              className="btn-primary gsap-magnetic"
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
            >
              {item.previewCtaLabel}
            </a>
            <Link
              href={item.route}
              className="btn-secondary gsap-magnetic"
            >
              Lihat Case Study →
            </Link>
          </div>

          {/* Browser mockup */}
          <div className="live-preview-hero-mockup">
            <PortfolioMockup
              themeColors={item.themeColors}
              mockupType={item.mockupType}
              title={item.title}
            />
          </div>
        </section>

        {/* ─── 3. Category Section ────────────────────────── */}
        <section className="live-preview-category reveal-section">
          <p
            className="label reveal-label"
            style={{ color: item.themeColors.primary }}
          >
            Isi Website
          </p>
          <h2 className="reveal-heading" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.8rem)", fontWeight: 700, letterSpacing: "-0.02em", marginTop: 12 }}>
            Apa yang ada di dalam website ini?
          </h2>
          <div className="live-preview-category-grid reveal-card">
            {item.previewSections.map((section) => (
              <div
                className="live-preview-category-card gsap-hover-card"
                key={section.label}
                style={{ borderLeftColor: item.themeColors.primary }}
              >
                <p
                  className="mini-title"
                  style={{ color: item.themeColors.primary }}
                >
                  {section.label}
                </p>
                <p style={{ color: "var(--ink-2)", lineHeight: 1.7 }}>
                  {section.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── 4. Feature Grid ────────────────────────────── */}
        <section className="live-preview-features reveal-section">
          <p
            className="label reveal-label"
            style={{ color: item.themeColors.primary }}
          >
            Fitur Utama
          </p>
          <h2 className="reveal-heading" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.8rem)", fontWeight: 700, letterSpacing: "-0.02em", marginTop: 12 }}>
            Semua yang bisnis kamu butuhkan.
          </h2>
          <ul className="structure-list reveal-text" style={{ marginTop: 20 }}>
            {item.keyFeatures.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </section>

        {/* ─── 5. Visual Section Thumbnails ───────────────── */}
        <section className="live-preview-thumbnails reveal-section">
          <p
            className="label reveal-label"
            style={{ color: item.themeColors.primary }}
          >
            Preview Bagian
          </p>
          <h2 className="reveal-heading" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem, 3vw, 2.8rem)", fontWeight: 700, letterSpacing: "-0.02em", marginTop: 12 }}>
            Lihat bagaimana setiap bagian website dibentuk.
          </h2>
          <div className="live-preview-thumbnail-grid reveal-card">
            {/* Hero thumbnail */}
            <div
              className="live-preview-thumbnail gsap-hover-card"
              style={{ borderColor: item.themeColors.accent }}
            >
              <div
                className="live-preview-thumbnail-visual"
                style={{
                  background: `linear-gradient(135deg, ${item.themeColors.primary}, ${item.themeColors.secondary})`,
                }}
              >
                <div className="live-preview-thumbnail-block" />
              </div>
              <span className="live-preview-thumbnail-label">Hero & Headline</span>
            </div>
            {/* Services/Menu/Packages */}
            <div
              className="live-preview-thumbnail gsap-hover-card"
              style={{ borderColor: item.themeColors.accent }}
            >
              <div
                className="live-preview-thumbnail-visual"
                style={{ background: item.themeColors.accent }}
              >
                <div className="live-preview-thumbnail-row">
                  <span className="live-preview-thumbnail-sm" />
                  <span className="live-preview-thumbnail-sm" />
                  <span className="live-preview-thumbnail-sm" />
                </div>
              </div>
              <span className="live-preview-thumbnail-label">
                Layanan / Menu / Paket
              </span>
            </div>
            {/* Gallery / Proof */}
            <div
              className="live-preview-thumbnail gsap-hover-card"
              style={{ borderColor: item.themeColors.accent }}
            >
              <div
                className="live-preview-thumbnail-visual"
                style={{ background: item.themeColors.accent }}
              >
                <div className="live-preview-thumbnail-row">
                  <span className="live-preview-thumbnail-sm live-preview-thumbnail-sm-wide" />
                  <span className="live-preview-thumbnail-sm" />
                </div>
              </div>
              <span className="live-preview-thumbnail-label">
                Galeri / Bukti
              </span>
            </div>
            {/* Contact CTA */}
            <div
              className="live-preview-thumbnail gsap-hover-card"
              style={{ borderColor: item.themeColors.accent }}
            >
              <div
                className="live-preview-thumbnail-visual"
                style={{
                  background: `linear-gradient(135deg, ${item.themeColors.secondary}40, ${item.themeColors.primary}40)`,
                }}
              >
                <div className="live-preview-thumbnail-cta" style={{ background: item.themeColors.primary }} />
              </div>
              <span className="live-preview-thumbnail-label">
                CTA WhatsApp
              </span>
            </div>
          </div>

          {/* Category-specific mockup content */}
          <div className="live-preview-mockup-detail" style={{ marginTop: 48 }}>
            <p
              className="label reveal-label"
              style={{ color: item.themeColors.primary }}
            >
              Detail Konten
            </p>
            <PreviewMockupContent
              category={item.category}
              themeColors={item.themeColors}
              mockContent={item.previewMockContent}
            />
          </div>
        </section>

        {/* ─── 6. Final CTA ───────────────────────────────── */}
        <section className="live-preview-cta reveal-section">
          <h2 className="live-preview-cta-title reveal-heading">
            Ini baru contoh.
          </h2>
          <p className="live-preview-cta-desc reveal-text">
            Versi asli bisa disesuaikan dengan brand, foto, warna, layanan, dan
            target customer bisnis kamu.
          </p>
          <div className="live-preview-cta-actions">
            <a
              className="btn-primary gsap-magnetic"
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
            >
              Buat Versi Bisnis Saya
            </a>
            <Link
              href="/portfolio"
              className="btn-secondary gsap-magnetic"
            >
              ← Lihat Portfolio Lain
            </Link>
          </div>
        </section>

        {/* ─── 7. Disclaimer ──────────────────────────────── */}
        <div className="live-preview-disclaimer reveal-text">
          Preview ini adalah konsep tidak resmi untuk demonstrasi desain dan
          penawaran. Semua nama, visual, dan konten dapat diganti mengikuti
          bisnis asli.
        </div>
      </div>
    </>
  );
}
