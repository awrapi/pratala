"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { processSteps } from "@/data/processSteps";

export function ProcessTimeline() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 35%"] });
  const scaleX = useTransform(scrollYProgress, [0, 1], [0.08, 1]);

  return (
    <section className="section-shell section-space process-section reveal-section" id="process" ref={ref}>
      <div className="section-heading offset process-heading">
        <div>
          <p className="label reveal-label">Process</p>
          <h2 className="reveal-heading">Prosesnya terasa jelas sejak awal, bukan menebak-nebak di tengah jalan.</h2>
        </div>
        <p className="reveal-text">
          Kami merapikan informasi, struktur, visual, dan CTA secara bertahap supaya
          hasil akhir siap dipakai untuk menjual.
        </p>
      </div>
      <div className="timeline reveal-card-group">
        <motion.span className="timeline-progress" style={{ scaleX }} />
        {processSteps.map((step, index) => (
          <motion.article
            className="timeline-card reveal-card gsap-hover-card"
            initial={{ opacity: 0, y: 24 }}
            key={step.title}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-80px" }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div className="timeline-card-copy">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
