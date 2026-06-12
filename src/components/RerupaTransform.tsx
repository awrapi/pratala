"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function RerupaTransform() {
  const sectionRef = useRef<HTMLElement>(null);
  const messyRef = useRef<HTMLDivElement>(null);
  const cleanRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const messy = messyRef.current;
    const clean = cleanRef.current;
    if (!section || !messy || !clean) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const compactMotion = window.matchMedia("(max-width: 700px)").matches;
    if (reduceMotion) {
      setProgress(1);
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            end: "bottom 35%",
            scrub: 0.8,
            onUpdate: (self) => setProgress(Math.round(self.progress * 100))
          }
        })
        .to(messy, { opacity: 0.22, filter: "blur(7px)", x: compactMotion ? 0 : -28, duration: 1 }, 0)
        .fromTo(
          clean,
          { opacity: 0.2, filter: "blur(7px)", x: compactMotion ? 0 : 34 },
          { opacity: 1, filter: "blur(0px)", x: 0, duration: 1 },
          0
        );
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section className="section-shell section-space rerupa-section reveal-section" id="rerupa" ref={sectionRef}>
      <div className="section-heading center">
        <p className="label reveal-label">Rerupa transformation</p>
        <h2 className="reveal-heading">Dari informasi yang tercecer, jadi website yang rapi dan dipercaya.</h2>
        <p className="reveal-text">
          Bagian ini menunjukkan cara Pratala Rerupa mengubah chat, foto, catatan,
          dan info bisnis yang masih berantakan menjadi halaman yang siap dibagikan.
        </p>
      </div>

      <div className="rerupa-stage reveal-card-group">
        <div className="rerupa-panel messy reveal-card gsap-hover-card" ref={messyRef}>
          <p className="label">Sebelum</p>
          <h3>Informasi tersebar di banyak tempat.</h3>
          <div className="note-cloud">
            <span>“Harga paketnya di mana?”</span>
            <span>Story IG kemarin</span>
            <span>Jam buka berubah</span>
            <span>Foto menu campur</span>
            <span>Lokasi belum jelas</span>
            <span>Chat masuk tapi ragu</span>
          </div>
        </div>

        <div className="rerupa-progress reveal-card stat-pop" aria-label={`Progress transformasi ${progress}%`}>
          <span style={{ height: `${Math.max(progress, 12)}%` }} />
          <strong>{progress}%</strong>
        </div>

        <div className="rerupa-panel clean reveal-card gsap-hover-card" ref={cleanRef}>
          <p className="label">Sesudah</p>
          <h3>Satu landing page yang terasa premium.</h3>
          <div className="website-stack">
            <div>
              <strong>Hero</strong>
              <span>Alasan percaya + CTA</span>
            </div>
            <div>
              <strong>Proof</strong>
              <span>Review, layanan, visual</span>
            </div>
            <div>
              <strong>Action</strong>
              <span>Chat WhatsApp / booking</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
