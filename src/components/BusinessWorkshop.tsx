"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { workshopData } from "@/data/workshopData";
import type { RequestPrefill } from "./RequestModal";

export function BusinessWorkshop({
  onRequest
}: {
  onRequest: (prefill?: RequestPrefill) => void;
}) {
  const [activeKey, setActiveKey] = useState(workshopData[0].key);
  const active = workshopData.find((item) => item.key === activeKey) || workshopData[0];

  return (
    <section className="section-shell section-space reveal-section" id="workshop">
      <div className="section-heading right workshop-heading">
        <p className="label reveal-label">Business workshop</p>
        <h2 className="reveal-heading">Pilih jenis bisnis, lalu lihat bagaimana website-nya bisa disusun.</h2>
        <p className="reveal-text">
          Workshop ini membantu calon klien merasa bahwa website mereka tidak asal
          dibuat, tapi dibentuk dari tujuan, suasana, dan alur percaya.
        </p>
      </div>

      <div className="workshop-layout mt-12 reveal-card-group">
        <div className="workshop-tabs reveal-card" role="tablist" aria-label="Jenis bisnis">
          {workshopData.map((item) => (
            <button
              aria-selected={active.key === item.key}
              className={active.key === item.key ? "active" : ""}
              key={item.key}
              onClick={() => setActiveKey(item.key)}
              role="tab"
              type="button"
            >
              {item.title}
            </button>
          ))}
        </div>

        <motion.article
          animate={{ opacity: 1, y: 0 }}
          className="workshop-panel reveal-card gsap-hover-card"
          initial={{ opacity: 0, y: 16 }}
          key={active.key}
          transition={{ duration: 0.35 }}
        >
          <div>
            <p className="label">Goal</p>
            <h3>{active.title}</h3>
            <p className="lead">{active.goal}</p>
            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              <div>
                <p className="mini-title">Atmosphere</p>
                <p className="text-muted">{active.atmosphere}</p>
              </div>
              <div>
                <p className="mini-title">Visual direction</p>
                <p className="text-muted">{active.visualDirection}</p>
              </div>
            </div>
            <ul className="structure-list">
              {active.sections.map((section) => (
                <li key={section}>{section}</li>
              ))}
            </ul>
            <button
              className="btn-primary mt-8 gsap-magnetic"
              data-business-type={active.title}
              data-concept={active.title}
              data-open-request-modal
              onClick={() =>
                onRequest({
                  businessType: active.title,
                  preferredConcept: active.title
                })
              }
              type="button"
            >
              {active.cta}
            </button>
          </div>
          <div className="wireframe" aria-label={`Mini wireframe untuk ${active.title}`}>
            <span className="floating-card" />
            <span className="floating-card" />
            <span className="floating-card" />
            <span className="floating-card" />
            <span className="floating-card" />
          </div>
        </motion.article>
      </div>
    </section>
  );
}
