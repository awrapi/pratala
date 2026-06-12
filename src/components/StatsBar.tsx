const stats = [
  {
    value: "50", suffix: "+",
    label: "Bisnis lokal dibantu",
    color: "var(--cobalt)",
    bg: "rgba(67,97,238,0.08)",
  },
  {
    value: "3", suffix: "×",
    label: "Rata-rata peningkatan konversi",
    color: "var(--terracotta)",
    bg: "rgba(200,80,26,0.07)",
  },
  {
    value: "7", suffix: " hari",
    label: "Estimasi delivery rata-rata",
    color: "var(--sage)",
    bg: "rgba(46,196,182,0.07)",
  },
  {
    value: "98", suffix: "%",
    label: "Klien puas & repeat order",
    color: "var(--magenta)",
    bg: "rgba(201,75,140,0.07)",
  },
];

export function StatsBar() {
  return (
    <div className="stats-bar section-shell">
      <div className="stats-grid">
        {stats.map((stat) => (
          <div
            className="stat-item"
            key={stat.label}
            style={{ background: stat.bg }}
          >
            <div className="stat-number" style={{ color: "var(--ink)" }}>
              {stat.value}
              <em style={{ color: stat.color }}>{stat.suffix}</em>
            </div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
