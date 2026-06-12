"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { portfolioItems } from "@/data/portfolio";
import { PortfolioMockup } from "./PortfolioMockup";
import type { RequestPrefill } from "./RequestModal";

export function PortfolioShowcase({
  onRequest,
}: {
  onRequest: (prefill?: RequestPrefill) => void;
}) {
  const [activeSlug, setActiveSlug] = useState(portfolioItems[0].slug);
  const active =
    portfolioItems.find((item) => item.slug === activeSlug) ?? portfolioItems[0];

  return (
    <section className="section-shell section-space reveal-section" id="portfolio">
      {/* Section heading */}
      <div className="section-heading right">
        <p className="label reveal-label">Portfolio</p>
        <h2 className="reveal-heading">
          Setiap jenis bisnis punya karakter website yang berbeda.
        </h2>
        <p className="reveal-text">
          Pilih kategori di bawah untuk melihat bagaimana website-nya bisa
          dibentuk dari tujuan, suasana, dan alur kepercayaan.
        </p>
      </div>

      {/* Tabs + Preview */}
      <div className="portfolio-showcase mt-12 reveal-card-group">
        {/* Vertical pill tabs (desktop) / horizontal scroll (mobile) */}
        <div className="portfolio-tabs reveal-card" role="tablist" aria-label="Kategori portfolio">
          {portfolioItems.map((item) => (
            <button
              aria-selected={active.slug === item.slug}
              className={active.slug === item.slug ? "active" : ""}
              key={item.slug}
              onClick={() => setActiveSlug(item.slug)}
              role="tab"
              type="button"
            >
              {item.category}
            </button>
          ))}
        </div>

        {/* Preview panel */}
        <AnimatePresence mode="wait">
          <motion.article
            animate={{ opacity: 1, y: 0 }}
            className="portfolio-preview reveal-card gsap-hover-card"
            initial={{ opacity: 0, y: 16 }}
            key={active.slug}
            transition={{ duration: 0.35 }}
            exit={{ opacity: 0, y: -8 }}
          >
            <div>
              {/* Category label */}
              <p className="label" style={{ color: active.themeColors.primary }}>
                {active.category}
              </p>

              {/* Title */}
              <h3 className="portfolio-preview-title">{active.title}</h3>

              {/* Description */}
              <p className="lead">{active.shortDescription}</p>

              {/* Key features as pills */}
              <ul className="structure-list">
                {active.keyFeatures.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              {/* Mockup preview */}
              <PortfolioMockup
                themeColors={active.themeColors}
                mockupType={active.mockupType}
                title={active.title}
              />

              {/* Disclaimer */}
              <p className="portfolio-disclaimer">
                Konsep preview independen untuk demonstrasi arah visual. Belum
                terafiliasi dengan brand nyata.
              </p>

              {/* CTA actions */}
              <div className="portfolio-preview-actions">
                <Link
                  className="btn-primary compact gsap-magnetic"
                  href={active.route}
                >
                  Lihat Detail →
                </Link>
                <Link
                  className="btn-secondary compact gsap-magnetic"
                  href={active.previewRoute}
                >
                  Lihat Preview →
                </Link>
                <button
                  className="btn-ghost compact gsap-magnetic"
                  onClick={() =>
                    onRequest({
                      businessType: active.category,
                      preferredConcept: active.title,
                    })
                  }
                  type="button"
                >
                  {active.ctaText}
                </button>
              </div>
            </div>

            {/* Wireframe side panel */}
            <div className="wireframe" aria-label={`Wireframe untuk ${active.title}`}>
              <span className="floating-card" />
              <span className="floating-card" />
              <span className="floating-card" />
              <span className="floating-card" />
              <span className="floating-card" />
            </div>
          </motion.article>
        </AnimatePresence>
      </div>
    </section>
  );
}
