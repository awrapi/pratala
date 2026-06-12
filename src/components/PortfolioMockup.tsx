import type { PortfolioItem } from "@/data/portfolio";

type PortfolioMockupProps = {
  themeColors: PortfolioItem["themeColors"];
  mockupType: PortfolioItem["mockupType"];
  title: string;
};

export function PortfolioMockup({
  themeColors,
  mockupType,
  title,
}: PortfolioMockupProps) {
  const gradient = `linear-gradient(135deg, ${themeColors.primary}, ${themeColors.secondary})`;

  return (
    <div className="portfolio-mockup" aria-label={`Preview konsep ${title}`}>
      {/* Browser chrome dots */}
      <div className="browser-chrome">
        <i />
        <i />
        <i />
      </div>

      {/* Content area */}
      <div className="portfolio-mockup-content" style={{ background: gradient }}>
        {mockupType === "landing" && (
          <div className="portfolio-mockup-layout-landing">
            <div className="portfolio-mockup-hero" />
            <div className="portfolio-mockup-row">
              <span className="portfolio-mockup-block" />
              <span className="portfolio-mockup-block" />
              <span className="portfolio-mockup-block" />
            </div>
            <div className="portfolio-mockup-cta" />
          </div>
        )}

        {mockupType === "multi-section" && (
          <div className="portfolio-mockup-layout-sections">
            <div className="portfolio-mockup-hero portfolio-mockup-hero-sm" />
            <div className="portfolio-mockup-row">
              <span className="portfolio-mockup-block portfolio-mockup-block-wide" />
              <span className="portfolio-mockup-block" />
            </div>
            <div className="portfolio-mockup-row">
              <span className="portfolio-mockup-block" />
              <span className="portfolio-mockup-block" />
              <span className="portfolio-mockup-block" />
            </div>
            <div className="portfolio-mockup-row">
              <span className="portfolio-mockup-block portfolio-mockup-block-wide" />
            </div>
            <div className="portfolio-mockup-cta" />
          </div>
        )}

        {mockupType === "minimal" && (
          <div className="portfolio-mockup-layout-minimal">
            <div className="portfolio-mockup-hero" />
            <div className="portfolio-mockup-cta" />
          </div>
        )}
      </div>
    </div>
  );
}
