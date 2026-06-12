"use client";

import type { PortfolioItem } from "@/data/portfolio";

type PreviewMockupContentProps = {
  category: string;
  themeColors: PortfolioItem["themeColors"];
  mockContent: PortfolioItem["previewMockContent"];
};

export function PreviewMockupContent({
  category,
  themeColors,
  mockContent,
}: PreviewMockupContentProps) {
  const items = mockContent.items;

  if (category === "Cafe & Eatery") {
    return (
      <div className="preview-mock-section">
        {/* Menu cards */}
        <div className="preview-mock-grid">
          {items.slice(0, 3).map((item) => (
            <div
              className="preview-mock-card"
              key={item}
              style={{ borderColor: themeColors.accent }}
            >
              <span
                className="preview-mock-card-dot"
                style={{ background: themeColors.primary }}
              />
              <span className="preview-mock-card-text">{item}</span>
            </div>
          ))}
        </div>
        {/* Ambience blocks */}
        <div className="preview-mock-row">
          {items.slice(3, 5).map((item) => (
            <div
              className="preview-mock-wide"
              key={item}
              style={{ background: themeColors.accent }}
            >
              <span className="preview-mock-label">{item}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (category === "Clinic & Healthcare") {
    return (
      <div className="preview-mock-section">
        {/* Service cards */}
        <div className="preview-mock-grid">
          {items.slice(0, 3).map((item) => (
            <div
              className="preview-mock-card"
              key={item}
              style={{ borderColor: themeColors.accent }}
            >
              <span
                className="preview-mock-card-dot"
                style={{ background: themeColors.primary }}
              />
              <span className="preview-mock-card-text">{item}</span>
            </div>
          ))}
        </div>
        {/* Doctor schedule strip */}
        <div className="preview-mock-strip" style={{ borderColor: themeColors.accent }}>
          {items.slice(3, 5).map((item) => (
            <span className="preview-mock-chip" key={item} style={{ background: themeColors.accent, color: themeColors.primary }}>
              {item}
            </span>
          ))}
          <span className="preview-mock-chip preview-mock-chip-cta" style={{ background: themeColors.primary, color: "#fff" }}>
            {items[5]}
          </span>
        </div>
      </div>
    );
  }

  if (category === "Property & Residence") {
    return (
      <div className="preview-mock-section">
        {/* Unit cards */}
        <div className="preview-mock-grid">
          {items.slice(0, 3).map((item) => (
            <div
              className="preview-mock-card"
              key={item}
              style={{ borderColor: themeColors.accent }}
            >
              <span
                className="preview-mock-card-bar"
                style={{ background: `linear-gradient(90deg, ${themeColors.primary}, ${themeColors.secondary})` }}
              />
              <span className="preview-mock-card-text">{item}</span>
            </div>
          ))}
        </div>
        {/* Facility grid */}
        <div className="preview-mock-facility-grid">
          {items.slice(3, 5).map((item) => (
            <div className="preview-mock-facility" key={item} style={{ background: themeColors.accent }}>
              <span className="preview-mock-label">{item}</span>
            </div>
          ))}
          <div className="preview-mock-facility preview-mock-facility-wide" style={{ background: themeColors.accent }}>
            <span className="preview-mock-label">{items[5]}</span>
          </div>
        </div>
      </div>
    );
  }

  if (category === "Travel & Tour") {
    return (
      <div className="preview-mock-section">
        {/* Package cards */}
        <div className="preview-mock-grid preview-mock-grid-2">
          {items.slice(0, 3).map((item) => (
            <div
              className="preview-mock-card"
              key={item}
              style={{ borderColor: themeColors.accent }}
            >
              <span
                className="preview-mock-card-dot"
                style={{ background: themeColors.secondary }}
              />
              <span className="preview-mock-card-text">{item}</span>
            </div>
          ))}
        </div>
        {/* Itinerary strip */}
        <div className="preview-mock-strip" style={{ borderColor: themeColors.accent }}>
          {items.slice(3, 5).map((item) => (
            <span className="preview-mock-chip" key={item} style={{ background: themeColors.accent, color: themeColors.primary }}>
              {item}
            </span>
          ))}
          <span className="preview-mock-chip" style={{ background: themeColors.accent, color: themeColors.secondary }}>
            {items[5]}
          </span>
        </div>
      </div>
    );
  }

  if (category === "Automotive") {
    return (
      <div className="preview-mock-section">
        {/* Before-after side by side */}
        <div className="preview-mock-ba">
          <div className="preview-mock-ba-block" style={{ borderColor: themeColors.primary }}>
            <span className="preview-mock-ba-label" style={{ color: themeColors.secondary }}>{items[3]}</span>
          </div>
          <div className="preview-mock-ba-block" style={{ borderColor: themeColors.secondary }}>
            <span className="preview-mock-ba-label" style={{ color: themeColors.secondary }}>{items[4]}</span>
          </div>
        </div>
        {/* Service chips */}
        <div className="preview-mock-strip" style={{ borderColor: themeColors.accent }}>
          {items.slice(0, 3).map((item) => (
            <span className="preview-mock-chip" key={item} style={{ background: themeColors.accent, color: themeColors.primary }}>
              {item}
            </span>
          ))}
          <span className="preview-mock-chip preview-mock-chip-cta" style={{ background: themeColors.secondary, color: "#fff" }}>
            {items[5]}
          </span>
        </div>
      </div>
    );
  }

  if (category === "Education") {
    return (
      <div className="preview-mock-section">
        {/* Program cards */}
        <div className="preview-mock-grid">
          {items.slice(0, 3).map((item) => (
            <div
              className="preview-mock-card"
              key={item}
              style={{ borderColor: themeColors.accent }}
            >
              <span
                className="preview-mock-card-dot"
                style={{ background: themeColors.primary }}
              />
              <span className="preview-mock-card-text">{item}</span>
            </div>
          ))}
        </div>
        {/* Admission timeline */}
        <div className="preview-mock-timeline">
          {items.slice(3, 6).map((item) => (
            <div className="preview-mock-timeline-item" key={item}>
              <span className="preview-mock-timeline-dot" style={{ background: themeColors.primary }} />
              <span className="preview-mock-timeline-text">{item}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (category === "Beauty & Wellness") {
    return (
      <div className="preview-mock-section">
        {/* Treatment cards */}
        <div className="preview-mock-grid">
          {items.slice(0, 3).map((item) => (
            <div
              className="preview-mock-card"
              key={item}
              style={{ borderColor: themeColors.accent }}
            >
              <span
                className="preview-mock-card-dot"
                style={{ background: themeColors.primary }}
              />
              <span className="preview-mock-card-text">{item}</span>
            </div>
          ))}
        </div>
        {/* Testimonial block */}
        <div className="preview-mock-testimonial" style={{ borderColor: themeColors.accent }}>
          <span className="preview-mock-testimonial-quote" style={{ color: themeColors.primary }}>
            {items[5]}
          </span>
          <div className="preview-mock-testimonial-bar">
            <span className="preview-mock-label">{items[3]}</span>
            <span className="preview-mock-label">{items[4]}</span>
          </div>
        </div>
      </div>
    );
  }

  /* Business Profile (default fallback) */
  return (
    <div className="preview-mock-section">
      {/* Service list */}
      <div className="preview-mock-list">
        {items.slice(0, 3).map((item) => (
          <div className="preview-mock-list-item" key={item} style={{ borderColor: themeColors.accent }}>
            <span className="preview-mock-list-bullet" style={{ background: themeColors.primary }} />
            <span className="preview-mock-list-text">{item}</span>
          </div>
        ))}
      </div>
      {/* Company stats */}
      <div className="preview-mock-stats">
        {items.slice(3, 6).map((item) => (
          <div className="preview-mock-stat" key={item} style={{ borderColor: themeColors.accent }}>
            <span className="preview-mock-stat-text" style={{ color: themeColors.primary }}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
