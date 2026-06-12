"use client";

import Link from "next/link";
import type { PortfolioItem } from "@/data/portfolio";
import { PortfolioMockup } from "./PortfolioMockup";

type PortfolioCardProps = {
  item: PortfolioItem;
};

export function PortfolioCard({ item }: PortfolioCardProps) {
  return (
    <div className="portfolio-card-wrapper">
      <Link href={item.route} className="portfolio-card gsap-hover-card reveal-card block no-underline">
        {/* Theme color accent strip */}
        <div
          className="portfolio-card-accent"
          style={{ background: `linear-gradient(90deg, ${item.themeColors.primary}, ${item.themeColors.secondary})` }}
        />

        <div className="portfolio-card-body">
          {/* Category label */}
          <p className="label" style={{ color: item.themeColors.primary }}>
            {item.category}
          </p>

          {/* Title */}
          <h3 className="portfolio-card-title">{item.title}</h3>

          {/* Short description */}
          <p className="portfolio-card-desc">{item.shortDescription}</p>

          {/* Mockup preview */}
          <PortfolioMockup
            themeColors={item.themeColors}
            mockupType={item.mockupType}
            title={item.title}
          />

          {/* Key features as pills */}
          <ul className="structure-list portfolio-card-features">
            {item.keyFeatures.slice(0, 4).map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>

          {/* CTA link text */}
          <span
            className="portfolio-card-cta"
            style={{ color: item.themeColors.primary }}
          >
            Lihat Detail →
          </span>
        </div>
      </Link>
      <Link
        href={item.previewRoute}
        className="portfolio-card-preview-link"
        style={{ color: item.themeColors.secondary }}
      >
        Lihat Preview →
      </Link>
    </div>
  );
}
