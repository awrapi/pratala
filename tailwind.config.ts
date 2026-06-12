import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink:        "#1a1814",
        canvas:     "#faf7f0",
        "canvas-2": "#f2ede0",
        paper:      "#faf7f0",
        porcelain:  "#faf7f0",
        cobalt:     "#4361EE",
        terracotta: "#C8501A",
        sage:       "#2EC4B6",
        gold:       "#FFD166",
        magenta:    "#C94B8C",
        lime:       "#8AC926",
        muted:      "#8a857e",
        clay:       "#b96943"
      },
      boxShadow: {
        studio: "0 28px 90px rgba(26, 24, 20, 0.13)",
        soft:   "0 18px 50px rgba(26, 24, 20, 0.08)"
      },
      fontFamily: {
        sans:    ["Plus Jakarta Sans", "system-ui", "sans-serif"],
        display: ["Fraunces", "Georgia", "serif"],
        mono:    ["JetBrains Mono", "monospace"]
      }
    }
  },
  plugins: []
};

export default config;
