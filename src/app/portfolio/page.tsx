"use client";

import Link from "next/link";
import { useState } from "react";
import { portfolioItems } from "@/data/portfolio";
import { directWhatsappLink } from "@/lib/whatsapp";
import { useGsapAnimation } from "@/hooks/useGsapAnimation";
import { PortfolioCard } from "@/components/PortfolioCard";

const categories = [
  "Semua",
  ...Array.from(new Set(portfolioItems.map((item) => item.category))),
];

export default function PortfolioPage() {
  const scope = useGsapAnimation();
  const [filter, setFilter] = useState("Semua");

  const filtered =
    filter === "Semua"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  return (
    <>
      {/* Canvas background */}
      <div className="canvas-bg" aria-hidden="true" />

      {/* Simplified back nav */}
      <header className="portfolio-nav-bar">
        <Link href="/" className="portfolio-back-link">
          ← Kembali
        </Link>
        <Link href="/" className="portfolio-back-link" style={{ marginLeft: "auto" }}>
          Pratala Rerupa
        </Link>
      </header>

      {/* Main frame */}
      <div ref={scope} className="portfolio-page-frame">
        <section className="section-shell section-space reveal-section">
          {/* Section heading */}
          <div className="section-heading center">
            <p className="label reveal-label">Portfolio</p>
            <h2 className="reveal-heading">
              Setiap bisnis punya karakter. Lihat bagaimana website-nya bisa dibentuk berbeda.
            </h2>
            <p className="reveal-text">
              8 konsep preview independen untuk menunjukkan arah visual, struktur,
              dan CTA yang disesuaikan per jenis bisnis.
            </p>
          </div>

          {/* Disclaimer banner */}
          <div className="preview-disclaimer reveal-card" style={{ marginTop: 32 }}>
            Konsep preview independen untuk demonstrasi arah visual. Belum
            terafiliasi dengan brand nyata.
          </div>

          {/* Category filter pills */}
          <div className="portfolio-filter reveal-card">
            {categories.map((cat) => (
              <button
                className={filter === cat ? "active" : ""}
                key={cat}
                onClick={() => setFilter(cat)}
                type="button"
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Portfolio card grid */}
          <div className="portfolio-card-grid">
            {filtered.map((item) => (
              <PortfolioCard key={item.slug} item={item} />
            ))}
          </div>

          {/* Bottom CTA */}
          <section className="portfolio-bottom-cta reveal-section">
            <h2 className="reveal-heading portfolio-bottom-cta-title">
              Siap membuat website untuk bisnismu?
            </h2>
            <p className="reveal-text portfolio-bottom-cta-desc">
              Kirim jenis bisnis dan arah yang kamu suka. Kami susun website yang
              terlihat rapi, dipercaya, dan siap diarahkan ke WhatsApp — dalam 7 hari.
            </p>
            <div className="portfolio-bottom-cta-buttons mt-8 flex flex-wrap gap-3 justify-center">
              <a
                className="btn-primary gsap-magnetic"
                href={directWhatsappLink}
                target="_blank"
                rel="noreferrer"
              >
                Diskusi via WhatsApp
              </a>
              <Link href="/" className="btn-secondary gsap-magnetic">
                ← Kembali ke Beranda
              </Link>
            </div>
          </section>
        </section>
      </div>
    </>
  );
}
