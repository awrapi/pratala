const valueRows = [
  {
    icon: "01",
    color: "var(--cobalt)",
    title: "Informasi bisnis dirapikan jadi alur cerita",
    copy: "Bukan cuma membuat halaman terlihat cantik, tapi menyusun ulang hal yang perlu dipahami calon pelanggan — dalam urutan yang tepat.",
  },
  {
    icon: "02",
    color: "var(--terracotta)",
    title: "Rasa percaya dibangun pelan-pelan, section per section",
    copy: "Setiap bagian punya tugas: menjelaskan, meyakinkan, lalu mengarahkan orang untuk bertanya. Tidak ada section yang sia-sia.",
  },
  {
    icon: "03",
    color: "var(--sage)",
    title: "WhatsApp jadi langkah yang terasa natural",
    copy: "CTA tidak ditempel begitu saja. Ia muncul setelah pengunjung punya cukup alasan untuk menghubungi. Hasilnya: lead yang lebih hangat.",
  },
];

export function StudioValue() {
  return (
    <section className="section-shell studio-value section-space reveal-section" id="value">
      <div className="value-statement">
        <p className="label reveal-label">Filosofi studio</p>
        <h2 className="reveal-heading">
          Website premium terasa eksklusif bukan karena ramai, tapi karena alurnya tenang.
        </h2>
        <p className="reveal-text mt-6" style={{ color: "var(--ink-2)", lineHeight: 1.8, maxWidth: 520 }}>
          Kami percaya bahwa website yang menjual adalah website yang membuat pengunjung
          paham dengan cepat, percaya dengan tenang, dan bergerak dengan yakin.
        </p>
      </div>
      <div className="value-list reveal-card-group">
        {valueRows.map((row) => (
          <article className="reveal-card gsap-hover-card" key={row.title}>
            <span style={{ color: row.color, fontFamily: "var(--font-mono)", fontSize: "0.74rem", fontWeight: 800, letterSpacing: "0.1em" }}>
              {row.icon}
            </span>
            <h3>{row.title}</h3>
            <p>{row.copy}</p>

            {/* Colored accent line at bottom */}
            <div style={{ marginTop: 20, height: 3, borderRadius: 999, background: row.color, opacity: 0.3, width: 60 }} />
          </article>
        ))}
      </div>
    </section>
  );
}
