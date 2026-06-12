"use client";

import Image from "next/image";
import type { PreviewWork } from "@/data/previewWorks";
import type { RequestPrefill } from "./RequestModal";

export function CaseStudyCard({
  work,
  onRequest,
  featured = false
}: {
  work: PreviewWork;
  onRequest: (prefill?: RequestPrefill) => void;
  featured?: boolean;
}) {
  return (
    <article
      className={`case-card portfolio-card reveal-card gsap-hover-card group ${featured ? "featured" : ""}`}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        event.currentTarget.style.setProperty("--mx", `${event.clientX - rect.left}px`);
        event.currentTarget.style.setProperty("--my", `${event.clientY - rect.top}px`);
      }}
    >
      <a className="case-image reveal-image" href={work.previewUrl} target="_blank" rel="noreferrer">
        <span className="browser-chrome" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="case-screen">
          <Image
            alt={`Preview website ${work.title}`}
            className="object-cover object-top transition duration-1000 ease-out group-hover:scale-[1.045]"
            fill
            sizes={featured ? "(min-width: 1024px) 58vw, 100vw" : "(min-width: 1024px) 42vw, 100vw"}
            src={work.image}
          />
        </span>
      </a>

      <div className="case-content">
        <div>
          <p className="label">{work.industry}</p>
          <h3>{work.title}</h3>
          <p className="case-disclaimer">
            Preview konsep independen. Bukan website resmi dari brand terkait.
          </p>
        </div>
        <dl>
          <div className="case-problem">
            <dt>Problem</dt>
            <dd>{work.problem}</dd>
          </div>
          <div>
            <dt>Visual direction</dt>
            <dd>{work.visualDirection}</dd>
          </div>
          <div>
            <dt>Business goal</dt>
            <dd>{work.businessGoal}</dd>
          </div>
        </dl>
        <div className="case-actions">
          <a className="btn-secondary compact" href={work.previewUrl} target="_blank" rel="noreferrer">
            View preview
          </a>
          <button
            className="btn-primary compact"
            data-business-type={work.industry}
            data-concept={work.industry}
            data-open-request-modal
            onClick={() =>
              onRequest({
                businessType: work.industry,
                preferredConcept: work.industry
              })
            }
            type="button"
          >
            Minta Website Serupa
          </button>
        </div>
      </div>
    </article>
  );
}
