"use client";

import { previewWorks } from "@/data/previewWorks";
import { CaseStudyCard } from "./CaseStudyCard";
import type { RequestPrefill } from "./RequestModal";

export function PreviewWorks({
  onRequest
}: {
  onRequest: (prefill?: RequestPrefill) => void;
}) {
  return (
    <section className="section-shell section-space preview-section reveal-section" id="preview-works">
      <div className="section-heading split">
        <div>
          <p className="label reveal-label">Selected previews</p>
          <h2 className="reveal-heading">Preview yang diperlakukan seperti studi kasus, bukan sekadar gambar website.</h2>
        </div>
        <p className="reveal-text">
          Dua contoh ini adalah preview konsep independen untuk menunjukkan cara kami
          membentuk visual, struktur, dan CTA agar bisnis lokal terasa lebih siap dipercaya.
        </p>
      </div>

      <div className="preview-disclaimer reveal-card">
        Konsep independen untuk menunjukkan arah visual. Belum terafiliasi, belum disetujui,
        dan bukan website resmi dari brand terkait.
      </div>

      <div className="case-layout reveal-card-group">
        {previewWorks.map((work, index) => (
          <CaseStudyCard featured={index === 0} key={work.id} onRequest={onRequest} work={work} />
        ))}
      </div>

      <div className="portfolio-note reveal-card">
        <span>Portfolio direction</span>
        <p>
          Screenshot lama tetap dipakai, tapi framing dibuat lebih editorial agar calon klien
          melihat arah, struktur, dan rasa percaya yang ingin dibangun.
        </p>
      </div>
    </section>
  );
}
