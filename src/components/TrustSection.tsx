const trustSignals = [
  {
    label: "Struktur dulu",
    title: "Setiap section punya alasan keberadaannya",
    copy: "Halaman tidak disusun dari template kosong, tapi dari urutan informasi yang membuat calon pelanggan paham sebelum menghubungi.",
    icon: "◈",
    color: "var(--cobalt)",
    bg: "rgba(67,97,238,0.06)",
    border: "rgba(67,97,238,0.2)",
    blob: "rgba(67,97,238,0.15)",
  },
  {
    label: "CTA jelas",
    title: "WhatsApp muncul saat konteksnya sudah kuat",
    copy: "Tombol diskusi ditempatkan setelah pengunjung melihat benefit, arah visual, dan bukti bahwa bisnisnya bisa terlihat lebih rapi.",
    icon: "◎",
    color: "var(--gold)",
    bg: "rgba(255,209,102,0.08)",
    border: "rgba(255,209,102,0.35)",
    blob: "rgba(255,209,102,0.25)",
  },
  {
    label: "Siap lokal",
    title: "Bahasa dan alurnya dekat dengan bisnis Indonesia",
    copy: "Copy, panduan harga, dan jenis bisnis dibuat familiar untuk cafe, klinik, travel, properti, toko, sekolah, dan layanan lokal.",
    icon: "◇",
    color: "var(--magenta)",
    bg: "rgba(201,75,140,0.06)",
    border: "rgba(201,75,140,0.2)",
    blob: "rgba(201,75,140,0.15)",
  },
];

export function TrustSection() {
  return (
    <section className="section-shell section-space trust-section reveal-section" id="trust">
      <div className="section-heading split">
        <div>
          <p className="label reveal-label">Trust system</p>
          <h2 className="reveal-heading">
            Bukan klaim kosong. Rasa percaya dibangun lewat detail yang terlihat.
          </h2>
        </div>
        <p className="reveal-text">
          Daripada memakai testimoni palsu, Pratala Rerupa menunjukkan cara kerja yang bisa
          diperiksa: struktur, copy, visual, dan CTA yang saling mendukung.
        </p>
      </div>

      <div className="trust-grid reveal-card-group">
        {trustSignals.map((signal) => (
          <article
            className="trust-card reveal-card gsap-hover-card"
            key={signal.title}
            style={{
              background: signal.bg,
              borderColor: signal.border,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{
                color: signal.color,
                fontFamily: "var(--font-mono)",
                fontSize: "0.68rem",
                fontWeight: 800,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}>
                {signal.label}
              </span>
              <span style={{ fontSize: "1.6rem", color: signal.color, opacity: 0.4 }}>
                {signal.icon}
              </span>
            </div>
            <h3>{signal.title}</h3>
            <p>{signal.copy}</p>
          </article>
        ))}
      </div>

      {/* Dark testimonial card */}
      <article className="testimonial-card gsap-hover-card">
        <p className="label">Studio note</p>
        <blockquote className="testimonial-quote">
          "Halaman yang meyakinkan tidak harus berisik. Yang penting calon pelanggan cepat
          paham, merasa aman, lalu tahu langkah berikutnya."
        </blockquote>
        <div className="testimonial-client">
          <span aria-hidden="true">PR</span>
          <div>
            <strong>Pratala Rerupa</strong>
            <p>Catatan pendekatan desain studio</p>
          </div>
        </div>
      </article>
    </section>
  );
}
