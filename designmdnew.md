# DESIGN.md — Master Visual Direction v4.0
> File ini adalah **master instruction** untuk membuat website premium di AI tools (Stitch, Bolt, Lovable, Framer AI, v0, Claude, dll). Baca seluruh isi file ini sebelum memulai. Ikuti tanpa pengecualian.

---

## CARA MENGGUNAKAN FILE INI

File ini bekerja sebagai **design brain** untuk AI. Ketika user memberikan brief singkat (nama brand, industri, warna), AI harus:

1. Jalankan **UI/UX Pro Max Visual Direction Audit** (Bagian O) — jawab 5 pertanyaan sebelum menyentuh apapun.
2. Tentukan **Visual Archetype** yang paling cocok (lihat Bagian A).
3. Definisikan **Design Token System** lengkap sesuai archetype (Bagian O2).
4. Pilih **font stack sesuai tema** menggunakan Font-Theme Matrix (Bagian C5) — bukan sekadar pilih font generik.
5. Terapkan **typography, color, dan layout** dari archetype tersebut.
6. **WAJIB**: Bangun **Animated Splashscreen Intro** (Bagian D1) sebagai elemen pertama setiap project — dengan gradient background tema dan animasi teks judul.
7. Bangun **Hero Section berbasis gradient** (Bagian D3) — tanpa insert gambar, cukup gradasi + tipografi center yang powerful.
8. Pastikan **animasi ada di setiap elemen** menggunakan Animation-Per-Element System (Bagian E5).
9. Kurasi **Section List** menggunakan Feature Integrity System (Bagian P) — setiap section harus lulus Earn Your Place Test.
10. Bangun struktur halaman mengikuti **Section Architecture** (Bagian D).
11. Pastikan semua **Do & Don't** dipatuhi (Bagian K).
12. Jalankan **Final Checklist** sebelum output (Bagian L).

Jika user hanya memberi nama bisnis atau industri saja, tetap lanjutkan dengan asumsi terbaik. Jangan terlalu banyak bertanya.

---

## BAGIAN A — VISUAL ARCHETYPE SYSTEM

Sebelum mendesain apapun, tentukan terlebih dahulu Visual Archetype yang sesuai dengan brand. Setiap archetype punya rules tersendiri.

---

### A1. EDITORIAL LUXURY
> Contoh: Interior design studio, high-end architecture firm, premium real estate, furniture brand, fashion atelier.

**Karakteristik utama:**
- Typography sangat besar dan bold sebagai elemen visual utama, bukan hanya container teks.
- Full-bleed photography dengan kualitas editorial/cinematic.
- Palet warna earthy: forest green, sage, warm ivory, charcoal, stone.
- Layout grid asimetris dan overlapping — bukan grid card standar.
- Sangat sedikit warna aksen; warna utama cukup 1–2.
- Baris kecil kategori label (ALL CAPS, small tracking) sebelum headline besar.
- Jumlah project/portofolio ditampilkan sebagai badge minimalis: `OUR PROJECTS [31]`.
- Harga atau metric ditampilkan langsung: `$45 / m²`, `10,000+ m²`.
- Minimal UI chrome; navbar sangat tipis dan tidak mencolok.

**Typography:**
- Display: Neue Haas Grotesk Display, PP Editorial New, Canela, Freight Display, Cormorant Garamond (untuk luxury serif), atau Bebas Neue Compressed.
- Body: Suisse Int'l, Neue Haas Grotesk Text, atau Instrument Sans.
- Ukuran headline: 80px–180px desktop, 40px–72px mobile.
- Font weight kontras ekstrem: ultra bold untuk display, light/regular untuk body.

**Color:**
- Background: `#F5F2ED` (warm ivory) atau `#FFFFFF`.
- Text: `#1A1A18` (near black).
- Accent: Forest green `#3D5A47`, sage `#8A9E8C`, atau stone `#9E9589`.
- No gradient, no glass, no glow.

**Layout:**
- Hero: Gradient CSS background dengan teks overlay besar, posisi CENTER — bukan foto.
- Section dividers: thin 1px line, bukan card border.
- Grid: Editorial 12-column, boleh overlap dan asimetris.
- Whitespace: ekstrem dan intentional.

---

### A2. CINEMATIC DARK
> Contoh: Artist/maker portfolio, craft brand, woodworking/artisan studio, luxury watch, tattoo studio, music producer.

**Karakteristik utama:**
- Background near-black: `#080808`, `#0C0C0C`, atau `#111111`.
- Photography dramatic dan moody — smoke, texture, hands-on craft.
- Typography italic bold atau condensed display.
- Foto hitam-putih atau sangat desaturated dengan highlight satu warna.
- Layout dua kolom: konten kiri, visual besar kanan; atau full-bleed image dengan teks overlay.
- Section labels ALL CAPS, warna off-white atau abu sangat muted.
- Journey/timeline section dengan tahun sebagai anchor.
- Detail teknis craft/process ditampilkan sebagai storytelling.

**Typography:**
- Display: Editorial New Italic, Freight Display Italic, Canela Italic, Portrait, atau Schnyder.
- All caps label: Helvetica Neue, Neue Montreal, atau Aktiv Grotesk.
- Body: Suisse Int'l, Neue Haas Grotesk.
- Ukuran headline: 72px–160px desktop.
- Mix italic + upright untuk kontras karakter.

**Color:**
- Background: `#080808` – `#111111`.
- Text: `#F0EDE8` (warm white), `#BFBAB4` (muted cream).
- Accent: bisa satu warna saja — amber `#C8973A`, rust `#B5442C`, atau off-white murni.
- Foto boleh diberi overlay gelap 30–50%.

**Layout:**
- Hero: Near-black gradient dengan grain noise overlay + typography besar di tengah.
- Sections alternating: text-left/image-right, kemudian image-left/text-right.
- Timeline: vertical, nomor tahun besar di kiri.
- Footer: multi-kolom, light text on dark, typeset rapi.

---

### A3. B&W EDITORIAL MINIMALIST
> Contoh: Photography studio, art direction, fashion editorial, visual creative agency, documentary filmmaker.

**Karakteristik utama:**
- Monochromatic: hitam, putih, dan abu-abu saja. Zero warna lain.
- Whitespace sangat dominan — konten "mengambang" di ruang kosong besar.
- Typography sebagai karya seni: nama brand bisa berukuran 200px+.
- Photography grid editorial: foto tampil dalam proporsi editorial magazine.
- Navigasi sangat minimal: `/ Projects  / Expertise  / About  / Contact` dengan forward slash.
- Detail dekoratif unik: GPS coordinates, edisi/volume number, tanggal dalam format kecil.
- Scroll indicator sebagai text: `Scroll ↓` atau `↓` bukan tombol.
- Brand name muncul kembali di bottom halaman sebagai type element besar.
- Kategori layanan ditulis sebagai plain text list, bukan card.

**Typography:**
- Display: Neue Haas Grotesk Display (sangat besar), PP Editorial New, Graphik, atau Aktiv Grotesk Extended.
- Body: light weight dari display font yang sama, atau Suisse Int'l Light.
- Semua foto memiliki caption tipis, sangat kecil.
- Manifesto copy: font bold, line baru per statement — `Global.` / `Independent.` / `Vision-led.`

**Color:**
- Background: `#FFFFFF` atau `#F8F8F8`.
- Text: `#0A0A0A`.
- Accent: TIDAK ADA warna accent. Kontras hanya dari hitam-putih dan ukuran.
- Foto: hitam putih atau sangat desaturated.

**Layout:**
- Hero: Gradient putih ke abu sangat lembut, typography sangat besar CENTER — tanpa foto hero.
- Grid editorial bebas: foto bisa full-width, half, atau dalam grid 3-kolom (di sections bawah).
- Tidak ada card dengan border. Foto langsung, tanpa container.
- Text blocks floating di ruang kosong.
- No background color per section — semua sections menyatu dalam satu canvas putih.

---

### A4. MOODY LUXURY (Hospitality & Dining)
> Contoh: Fine dining restaurant, wine bar, hotel boutique, private members club, luxury spa, premium bakery.

**Karakteristik utama:**
- Photography atmospheric: candlelight, dramatic bokeh, food close-up, hands serving.
- Mixed typography: sans-serif bold + script/italic serif untuk emphasis emosional.
- Palet warna: deep burgundy, warm black, ivory, muted gold — tidak pernah bright.
- Badge eksklusivitas ditampilkan: Michelin star, anniversary badge, chef signature.
- CTA tunggal dan percaya diri: `Reserve a Table`, `Book Your Evening`, `Enquire Now`.
- Tidak ada pricing di hero. Hanya atmosfer.
- Tagline menggunakan emotional language: "timeless soul", "flavors that linger", "an evening you will not forget".

**Typography:**
- Display: Playfair Display, Cormorant Garamond, Portrait, Freight Display.
- Script accent: Great Vibes, Pinyon Script, atau Italianno (hanya untuk 1–2 kata emphasis).
- Body: Cormorant, EB Garamond, atau Lora.
- Mix case: HEADLINE BESAR + *script italic* untuk satu kata kunci.

**Color:**
- Background: `#0D0B0A` (warm near-black) atau `#1A1210`.
- Text: `#F0EAE0` (warm ivory).
- Accent primary: Burgundy `#8B1A2E`, Deep red `#A52030`, atau Muted gold `#BFA882`.
- Overlay foto: gradient gelap 40–60% dari bawah.

**Layout:**
- Hero: Dark gradient CSS (radial burgundy glow + near-black base) dengan teks besar CENTER — tanpa foto hero insert.
- Sections pendek dan intense — atmosfer lebih penting dari informasi panjang.
- Menu/services: clean text layout seperti menu restoran, bukan card grid.
- Testimonial: 1 quote besar, bukan 3 card kecil.

---

### A5. MODERN TECH / SAAS
> Contoh: SaaS product, AI tool, developer tool, productivity app, fintech, data platform.

**Karakteristik utama:**
- Clean, precision-focused, data-driven aesthetic.
- Dashboard mockup atau product preview sebagai hero visual utama.
- Palet: navy/indigo/violet gelap sebagai dark mode, atau putih bersih sebagai light mode.
- Glassmorphism hanya untuk dashboard preview, bukan seluruh halaman.
- Floating cards dengan data real: angka, chart, status indicator.
- Feature grid dengan icon dan deskripsi singkat.
- Pricing toggle monthly/annually.
- Integration logos sebagai trust signals.

**Typography:**
- Geist, Instrument Sans, Neue Montreal, atau DM Sans.
- Headline: bold, 64–96px.
- Monospace font untuk code snippets dan technical detail.

**Color:**
- Tetap ikuti rules di Bagian B (Color System).
- Boleh pakai gradient lembut dan subtle glow.
- Dark mode: `#0A0E1A` sebagai base.

---

## BAGIAN B — COLOR SYSTEM

### B1. Cara Memilih Archetype Color

| Archetype | Background | Accent | Feel |
|---|---|---|---|
| Editorial Luxury | Warm ivory / Pure white | Forest green / Stone | Earthy, refined |
| Cinematic Dark | Near black `#080808` | Amber / Rust / Off-white | Dramatic, raw |
| B&W Editorial | Pure white | Tidak ada | Monochromatic, pure |
| Moody Luxury | Warm dark `#0D0B0A` | Burgundy / Muted gold | Atmospheric, intimate |
| Modern SaaS | Navy / White | Blue / Violet | Clean, technical |

### B2. Jika User Memberi Warna Utama

1. Gunakan sebagai **primary color**.
2. Derive palet turunan: soft version, dark version, border version.
3. Jangan keluar dari tema warna tersebut.
4. Pilih background yang membuat warna itu menonjol.
5. Pastikan semua kontras teks memenuhi WCAG AA minimum.

### B3. Aturan Warna Universal

- Maksimal 2 warna utama + neutral.
- Tidak pernah rainbow palette.
- Gradient hanya boleh dari warna yang sama ke transparency, bukan antar warna berbeda.
- Warna accent hanya untuk CTA, highlight, dan satu elemen kunci per section.
- Jangan memakai warna yang mengurangi keterbacaan teks.

---

## BAGIAN C — TYPOGRAPHY SYSTEM

Typography adalah elemen desain paling penting. Bukan hanya container untuk teks — typography IS the design.

### C1. Prinsip Typography

- **Kontras berat ekstrem**: gunakan font weight yang sangat berbeda antara display dan body.
- **Scale dramatis**: headline bisa 10–20x lebih besar dari body text.
- **Intentional spacing**: letter-spacing ketat untuk display besar, normal untuk body.
- **Jangan pakai terlalu banyak font**: 1 display + 1 body = cukup. Maksimal 3 jika ada script accent.
- **Typography sebagai layout**: teks besar bisa menjadi elemen visual, bukan hanya konten.

### C2. Font Stack Per Archetype

**Editorial Luxury:**
```
Display: "PP Editorial New", "Neue Haas Grotesk Display", "Canela", "Freight Display"
Body: "Suisse Int'l", "Instrument Sans", "Neue Haas Grotesk Text"
Fallback: Georgia, "Times New Roman"
```

**Cinematic Dark:**
```
Display: "Editorial New Italic", "Freight Display Italic", "Portrait", "Schnyder"
Label: "Helvetica Neue", "Neue Montreal", "Aktiv Grotesk"
Body: "Suisse Int'l", "Neue Haas Grotesk"
```

**B&W Editorial:**
```
Display: "Neue Haas Grotesk Display", "PP Neue Montreal", "Graphik", "Aktiv Grotesk Extended"
Body: Light weight dari display font yang sama, atau "Suisse Int'l Light"
```

**Moody Luxury:**
```
Display: "Playfair Display", "Cormorant Garamond", "Freight Display", "Portrait"
Script: "Great Vibes", "Pinyon Script" (hanya untuk 1 kata emphasis)
Body: "Cormorant", "EB Garamond", "Lora"
```

**Modern SaaS:**
```
Display: "Geist", "Neue Montreal", "DM Sans", "Instrument Sans"
Body: sama dengan display, weight lebih ringan
Mono: "Geist Mono", "JetBrains Mono" untuk code
```

### C3. Type Scale

| Element | Desktop | Mobile |
|---|---|---|
| Brand name / Mega display | 120px–200px | 56px–80px |
| Section headline | 64px–96px | 36px–52px |
| Sub-headline | 36px–48px | 24px–32px |
| Section label (ALL CAPS) | 11px–13px | 11px–12px |
| Body text | 16px–18px | 15px–16px |
| Caption / Fine print | 12px–13px | 11px–12px |

### C4. Aturan Penulisan

**Section Label** — selalu muncul SEBELUM headline besar:
```
OUR SERVICES [4]           ← format: ALL CAPS + jumlah dalam bracket
— ABOUT THE STUDIO         ← format: em-dash + ALL CAPS
/ Projects                 ← format: forward slash (editorial style)
01. Featured Work          ← format: numbered (process/journey)
```

**Manifesto Copy** — setiap statement di baris sendiri:
```
Living Spaces for Bold Souls.
Global. Independent. Vision-led.
Modern French dining with a timeless soul.
```

**Metric Display** — angka penting ditampilkan besar:
```
10,000+ m²        $45 / m²        OUR PROJECTS [31]
2 architects      12 years        4.9 ★ rating
```

---

### C5. FONT-THEME MATRIX (WAJIB DIIKUTI)

> Font bukan sekadar pilihan estetika — ia adalah suara visual brand. Font yang salah merusak seluruh archetype meski warna dan layout sudah benar.

**Aturan utama**: Pilih font berdasarkan niche dan emosi brand, BUKAN berdasarkan popularitas atau yang pertama terlintas. Setiap niche punya karakter tipografis yang khas.

---

**NICHE → FONT RECOMMENDATION:**

| Niche / Tema | Display Font | Body Font | Karakter |
|---|---|---|---|
| Interior / Architecture / Real Estate | Cormorant Garamond, Canela, PP Editorial New | Instrument Sans, Neue Haas Grotesk | Presisi + ketenangan |
| Fashion / Luxury Brand / Atelier | Freight Display, Bodoni Moda, Schnyder | Suisse Int'l Light, Neue Haas Grotesk | Anggun, tajam |
| Photography / Art Direction | Neue Haas Grotesk Display, Aktiv Grotesk | Suisse Int'l Light | Presisi editorial |
| Fine Dining / Restaurant Premium | Playfair Display, Cormorant, Portrait | EB Garamond, Lora | Hangat + dramatik |
| Craft / Maker / Artisan | Editorial New Italic, Freight Display Italic | Neue Montreal, Suisse Int'l | Raw + authentic |
| Tech / SaaS / AI Product | Geist, Neue Montreal, DM Sans | Geist, Inter | Bersih + presisi |
| Fintech / Legal / Konsultan | IBM Plex Serif, Lora, Merriweather | IBM Plex Sans, Source Sans 3 | Kepercayaan + formal |
| Startup / Creative Agency | Clash Display, Space Grotesk, Cabinet Grotesk | Plus Jakarta Sans, Outfit | Energik + modern |
| Music / Entertainment / Night Club | Bebas Neue, Druk Wide, Dharma Gothic | Neue Montreal, Helvetica Neue | Bold + intens |
| Health / Wellness / Spa | Fraunces, Libre Baskerville, Crimson Text | DM Sans, Nunito | Lembut + organik |
| Education / E-Learning | Lora, Merriweather, Source Serif 4 | Source Sans 3, Nunito | Terbaca + terpercaya |
| Sport / Fitness / Performance | Bebas Neue, Oswald, Barlow Condensed | Barlow, Roboto Condensed | Kuat + dinamis |
| Kids / Playful / Creative | Fredoka, Nunito, Baloo 2 | Nunito, Quicksand | Ramah + ceria |
| Environmental / Organic / Sustainable | Fraunces, Libre Caslon, Lora | DM Sans, Nunito Sans | Organik + jujur |
| Beauty / Skincare / Cosmetics | Cormorant Garamond, Italiana, Bodoni Moda | Lato Light, DM Sans | Feminin + premium |
| Photography Portfolio Personal | PP Neue Montreal, Graphik, Aktiv Extended | Suisse Int'l Light | Minimal + kuat |
| Personal Brand / Coach / Speaker | Playfair Display, Libre Baskerville | Raleway, Lato | Otoritatif + hangat |

---

**FONT PAIRING RULES:**

```
✅ PAIRING YANG KUAT:
   Serif Display + Sans-serif Body   → kontras karakter, mudah dibaca
   Condensed Bold + Light Regular    → kontras berat, dramatis
   High-contrast Serif + Geometric   → editorial, premium

❌ PAIRING YANG LEMAH:
   Dua serif berbeda dalam satu halaman
   Dua font berat (bold+bold) tanpa kontras
   Font terlalu mirip satu sama lain
   Lebih dari 3 font family dalam satu project
```

**Font Loading (Google Fonts fallback):**
```
Prioritas pertama: font sesuai tabel di atas via @font-face atau import
Fallback jika tidak tersedia: Georgia (serif) atau system-ui (sans-serif)
Selalu set font-display: swap untuk mencegah FOIT
Preload critical font file di <head>
```

---

## BAGIAN D — SECTION ARCHITECTURE

Ini adalah blueprint struktur halaman. Sesuaikan dengan niche, tetapi urutan umum ini harus diikuti.

---

### D1. ANIMATED SPLASHSCREEN INTRO ⚡ WAJIB DI SETIAP PROJECT

> **ATURAN MUTLAK**: Setiap project WAJIB memiliki animated splashscreen. Tidak ada pengecualian. Ini bukan loading spinner — ini adalah kesan pertama brand yang hidup.

Splashscreen adalah **momen teater** sebelum halaman terbuka. Ia harus terasa seperti tirai yang perlahan membuka — bukan layar loading.

---

**Struktur Splashscreen:**

```
[Layer 1] — Background: gradient dinamis sesuai tema archetype
[Layer 2] — Ornamen / partikel / shape animation sesuai tema (opsional, subtle)
[Layer 3] — Brand name / judul — animasi teks yang impresif
[Layer 4] — Tagline singkat — muncul setelah nama brand
[Layer 5] — Transition out: reveal page dengan clip-path atau curtain wipe
```

---

**Spesifikasi Teknis Splashscreen:**

```
Durasi total:       1.5 – 2.5 detik (tidak kurang, tidak lebih)
Transition out:     clip-path reveal, curtain wipe, atau scale-down + fade
Font:               --font-display sesuai archetype
Background:         gradient dinamis (BUKAN solid, BUKAN foto)
Position brand:     CENTER TENGAH — horizontal dan vertikal
```

---

**Gradient Background per Archetype:**

```css
/* Editorial Luxury */
background: linear-gradient(135deg, #F5F2ED 0%, #E8E3DB 50%, #D4CFC6 100%);
/* atau: radial-gradient(ellipse at 30% 70%, #E8E3DB, #F5F2ED) */

/* Cinematic Dark */
background: linear-gradient(160deg, #080808 0%, #1A1208 50%, #080808 100%);
/* amber glow subtle di tengah */

/* B&W Editorial */
background: linear-gradient(135deg, #FFFFFF 0%, #F0F0F0 100%);
/* atau: conic-gradient dari putih ke abu sangat muted */

/* Moody Luxury */
background: linear-gradient(160deg, #0D0B0A 0%, #1F1008 40%, #0D0B0A 100%);
/* burgundy pulse sangat subtle di center */

/* Modern SaaS */
background: linear-gradient(135deg, #0A0E1A 0%, #0F1729 50%, #0A0E1A 100%);
/* mesh gradient: indigo/violet titik cahaya di sudut */
```

---

**Animasi Teks Brand Name (pilih satu, sesuaikan dengan archetype):**

```
TEKNIK A — CLIP-PATH REVEAL (Untuk Editorial Luxury, B&W Editorial)
  - Setiap kata muncul dari bawah dengan clip-path: inset(100% 0 0 0) → inset(0% 0 0 0)
  - Duration per kata: 600ms, ease-out cubic-bezier(0.25, 0.46, 0.45, 0.94)
  - Stagger antar kata: 80–120ms

TEKNIK B — CHARACTER STAGGER FADE (Untuk Cinematic Dark, Moody Luxury)
  - Setiap huruf muncul dengan opacity: 0 → 1 + translateY: 20px → 0
  - Duration: 400ms per karakter
  - Stagger: 40ms per karakter
  - Kesan: nama brand "mengetik dirinya sendiri" dengan elegan

TEKNIK C — SCALE + BLUR REVEAL (Untuk Modern SaaS, Startup)
  - Brand name muncul dengan scale: 0.85 → 1 + filter: blur(12px) → blur(0)
  - Duration: 700ms, ease-out
  - Kesan: fokus kamera yang tajam

TEKNIK D — LINE DRAW + FILL (Untuk Craft, Artisan, Luxury Watch)
  - Jika SVG tersedia: stroke-dashoffset animation (outline → fill)
  - Duration: 1.2 detik
  - Diikuti fill color transition

TEKNIK E — SPLIT HORIZONTAL (Untuk Bold/Sport/Music)
  - Teks dibagi dua bagian: atas bergerak dari kiri, bawah dari kanan
  - Bertemu di tengah
  - Duration: 600ms, ease-out
```

---

**Animasi Tema / Ornamen (subtle, tidak boleh mengalahkan brand name):**

```
Editorial Luxury    → garis tipis 1px yang "tumbuh" dari kiri ke kanan
Cinematic Dark      → grain noise texture pulsing sangat subtle, amber spark kecil
B&W Editorial       → grid pattern yang fade in sangat pelan
Moody Luxury        → soft particle melayang (2-3 partikel kecil, slow)
Modern SaaS         → dot grid atau hexagon pattern subtle, gradient mesh bergerak lambat
Craft / Artisan     → texture grain kasar pulsing, atau smoke effect
Health / Wellness   → concentric circle breathing animation, daun kecil jatuh
Sport / Fitness     → speed lines flash singkat, atau diagonal stripe wipe
```

---

**Transition Keluar Splashscreen:**

```
CURTAIN WIPE (Direkomendasikan untuk luxury/editorial):
  - Background bergerak ke atas (translateY: 0 → -100%) dengan ease-in 400ms
  - Halaman di bawahnya terungkap

CLIP-PATH CIRCLE EXPAND (Untuk SaaS, startup):
  - clip-path: circle(0% at 50% 50%) → circle(150% at 50% 50%)
  - Duration: 600ms, ease-out

FADE DISSOLVE (Paling universal):
  - opacity: 1 → 0, duration 500ms
  - Bersamaan: page content fade in dari opacity 0

SPLIT DOOR (Untuk Bold, Sport, Music):
  - Layar kiri bergerak ke kiri, layar kanan ke kanan
  - Duration: 500ms, ease-in
```

---

**Contoh Kode Splashscreen (HTML/CSS/JS):**

```html
<!-- Splashscreen overlay -->
<div id="splashscreen" class="splash">
  <div class="splash__bg"></div>          <!-- gradient background -->
  <div class="splash__ornament"></div>    <!-- animasi tema -->
  <div class="splash__content">
    <span class="splash__label">STUDIO</span>
    <h1 class="splash__brand">
      <span class="word">Brand</span>
      <span class="word">Name</span>
    </h1>
    <p class="splash__tagline">Tagline singkat brand</p>
  </div>
</div>
```

```css
.splash {
  position: fixed; inset: 0; z-index: 9999;
  display: flex; align-items: center; justify-content: center;
  background: var(--splash-gradient);
  transition: transform 0.5s cubic-bezier(0.76, 0, 0.24, 1);
}
.splash__brand .word {
  display: inline-block; overflow: hidden;
  clip-path: inset(100% 0 0 0);
  animation: wordReveal 0.7s var(--ease-out) forwards;
}
.splash__brand .word:nth-child(2) { animation-delay: 0.1s; }

@keyframes wordReveal {
  to { clip-path: inset(0% 0 0 0); }
}
```

```javascript
// Auto-dismiss splashscreen setelah 2 detik
window.addEventListener('load', () => {
  setTimeout(() => {
    const splash = document.getElementById('splashscreen');
    splash.style.transform = 'translateY(-100%)';
    setTimeout(() => splash.remove(), 500);
  }, 2000);
});
```

---

**Checklist Splashscreen:**
- [ ] Background: gradient sesuai archetype (bukan solid, bukan foto)
- [ ] Brand name / judul: posisi CENTER (horizontal dan vertikal)
- [ ] Animasi teks: salah satu dari Teknik A–E di atas
- [ ] Durasi total: 1.5–2.5 detik
- [ ] Transition keluar smooth (curtain/clip-path/fade)
- [ ] Tidak ada spinner generik
- [ ] Ornamen tema hadir tapi tidak mengalahkan teks

---

### D2. NAVBAR

**Prinsip navbar per archetype:**

- **Editorial Luxury**: Fixed top, logo kiri, menu tengah/kanan, 1 CTA pill kanan. Tidak ada mega menu. Background transparent lalu solid/blur saat scroll.
- **Cinematic Dark**: Logo kiri, navigasi di bawah logo (stacked), atau horizontal minimal. Warna dark, sangat subtle.
- **B&W Editorial**: Forward-slash navigation. Sangat kecil, pojok kiri atas. Tidak ada background.
- **Moody Luxury**: Navigation horizontal spread, nama brand kiri, items kanan. Semua light on dark. Tidak ada hamburger jika memungkinkan di desktop.
- **Modern SaaS**: Sticky, blur glass saat scroll. Logo kiri, menu tengah, CTA kanan.

**Menu items standar (pilih sesuai niche):**
- About Us / About the Studio
- Projects / Work / Gallery
- Services / Expertise
- Process / How We Work
- Journal / Stories (jika ada blog)
- Contact / Reservations

**Mobile**: Selalu drawer atau fullscreen overlay. Tidak pernah dropdown di mobile.

---

### D3. HERO SECTION

> **ATURAN WAJIB v4.0**: Hero section TIDAK menggunakan insert gambar/foto dari luar. Hero dibangun dari **gradasi CSS yang dikerjakan dengan serius** + tipografi yang powerful. Semua headline hero **diposisikan CENTER (tengah layar)** — horizontal dan vertikal.

Hero adalah momen paling kuat. Seluruh energi visual harus hadir dari gradasi, typography, dan animasi — bukan dari foto yang ditempel.

---

**Prinsip Hero Gradient:**

```
1. Gradient bukan dekorasi — ia adalah suasana. Pilih dengan intensi.
2. Minimal 2 layer: base gradient + radial highlight/glow
3. Boleh menggunakan: CSS gradient, mesh gradient, conic gradient
4. Dilarang: foto background, gambar insert, video background
5. Animasi halus pada gradient SANGAT dianjurkan (breathing, shift)
```

---

**Komposisi Hero per Archetype:**

**A1 — Editorial Luxury:**
```css
/* Background */
background: 
  radial-gradient(ellipse 80% 60% at 30% 80%, rgba(61,90,71,0.15) 0%, transparent 60%),
  linear-gradient(160deg, #F5F2ED 0%, #EAE5DC 60%, #DDD8CE 100%);

/* Teks */
Posisi: CENTER semua (text-align: center, flex center)
Headline: font-size clamp(72px, 10vw, 160px), weight 800-900
Label ALL CAPS di atas headline: forest green, 11px, letter-spacing 0.14em
Tagline: 1 baris di bawah, font-weight 300, muted color
CTA: centered di bawah tagline, pill button atau text+arrow
```

**A2 — Cinematic Dark:**
```css
/* Background */
background:
  radial-gradient(ellipse 60% 50% at 50% 50%, rgba(200,151,58,0.08) 0%, transparent 70%),
  linear-gradient(160deg, #080808 0%, #111111 50%, #0C0C0C 100%);
/* grain noise overlay via CSS: opacity 0.04 noise texture */

/* Teks */
Posisi: CENTER semua
Headline: italic bold, clamp(64px, 9vw, 140px), warm white #F0EDE8
Satu kata kunci bisa diberi warna amber #C8973A
Label: very small ALL CAPS, muted cream, atas headline
```

**A3 — B&W Editorial:**
```css
/* Background */
background: linear-gradient(135deg, #FFFFFF 0%, #F4F4F4 40%, #EEEEEE 100%);
/* grid dots overlay: CSS radial-gradient dot pattern, opacity 0.06 */

/* Teks */
Posisi: CENTER semua
Headline: Neue Haas Display, extrem bold, clamp(80px, 12vw, 200px), near-black
Teks bisa sangat besar hingga hampir full-width
Label: forward slash style, sangat kecil, di atas
```

**A4 — Moody Luxury:**
```css
/* Background */
background:
  radial-gradient(ellipse 70% 70% at 50% 30%, rgba(139,26,46,0.2) 0%, transparent 60%),
  radial-gradient(ellipse 50% 50% at 80% 80%, rgba(191,168,130,0.1) 0%, transparent 50%),
  linear-gradient(180deg, #0D0B0A 0%, #1A1210 100%);

/* Teks */
Posisi: CENTER semua
Headline: serif display besar, satu kata bisa italic script
Color: warm ivory #F0EAE0
Badge di atas headline: award/certification kecil, uppercase
```

**A5 — Modern SaaS:**
```css
/* Background */
background:
  radial-gradient(ellipse 80% 60% at 20% 20%, rgba(99,102,241,0.25) 0%, transparent 50%),
  radial-gradient(ellipse 60% 60% at 80% 80%, rgba(139,92,246,0.2) 0%, transparent 50%),
  linear-gradient(135deg, #0A0E1A 0%, #0F1729 50%, #0A0E1A 100%);
/* Animasi: gradient mesh bergerak sangat lambat */

/* Teks */
Posisi: CENTER semua
Badge kecil di atas headline: pil dengan accent color
Headline: bold clamp(56px, 7vw, 96px), white
Subheadline: 2 kalimat max, 18px, muted white
2 CTA side by side: Primary (solid accent) + Secondary (ghost)
```

---

**Elemen Wajib Hero (Semua Archetype):**

```
[ ] Label / badge kecil di ATAS headline (ALL CAPS atau pill)
[ ] Headline utama: CENTER, minimum 64px desktop
[ ] Subheadline / tagline: maksimal 2 baris, CENTER
[ ] CTA: di bawah, centered
[ ] Scroll indicator: "↓ Scroll" teks kecil di bottom center
[ ] Semua elemen di-animate saat load (Teknik lihat Bagian E5)
```

---

**Animasi Hero Wajib (Urutan entrance):**

```
0ms      → Gradient background sudah visible (dari splashscreen transition)
0ms      → Label / badge: fade in + translateY(-8px → 0)
150ms    → Headline: clip-path reveal per baris atau karakter
400ms    → Subheadline: fade in + translateY(12px → 0)
600ms    → CTA: fade in + scale(0.95 → 1)
800ms    → Scroll indicator: fade in, kemudian breathing loop
```

---

### D4. BRAND MANIFESTO / INTRO

Section pendek dan kuat yang menyatakan identitas brand. Selalu ada, di setiap jenis website.

Format:
- Label kecil: `— OUR PHILOSOPHY` / `ABOUT THE STUDIO`
- Statement 1–3 kalimat yang bold dan percaya diri.
- Statistik/achievement di sampingnya dalam teks besar.

Contoh untuk studio:
```
We are a family duo trained in interior design.
We create spaces that feel alive, not just beautiful.

10,000+ m²    2 architects    15 years
```

Contoh untuk restaurant:
```
Not a trend. A tradition.
Since 1975, we have served the same belief:
great food needs only great ingredients and great care.
```

---

### D5. WORK SHOWCASE / PROJECTS

Section ini menampilkan portofolio, proyek, atau produk terbaik. Bukan feature card — ini adalah hasil nyata.

**Format Grid:**
- 2 kolom: 1 foto besar kiri + 2 foto kecil kanan (atau sebaliknya).
- Atau masonry grid 3 kolom.
- Atau single horizontal scroll (tidak auto-scroll, hanya manual).

**Setiap item project harus punya:**
- Foto kualitas tinggi (placeholder jika tidak ada asset).
- Nama project.
- Kategori/tipe kecil.
- Location / year kecil.
- Ukuran/detail spesifik jika relevan (`68.5 m²`, `2023`, `Kyiv`).

**Hover state:**
- Nama project muncul dengan overlay gelap tipis.
- Atau: foto sedikit zoom.
- Atau: project detail slide up.

**Label bagian:**
```
OUR PROJECTS [31]    SELECTED WORK    / Work
```

---

### D6. SERVICES / EXPERTISE

Bukan card grid dengan icon — ini adalah statement layanan yang jelas.

**Format untuk Creative/Luxury:**
- List format: nomor + nama layanan + deskripsi singkat.
- Divider line tipis antara items.
- Tidak ada card border, tidak ada shadow.

Contoh:
```
01.  Interior Design
     Full-service residential and commercial design,
     from concept to construction documentation.

02.  Space Planning
     Measurement, flow, and functional layout
     tailored to how you actually live.

03.  Art Curation
     Sourcing original works that elevate
     every corner of your space.
```

**Format untuk SaaS:**
- Grid 3–6 card.
- Icon kecil + title + deskripsi.
- Hover lift + soft shadow.

---

### D7. ABOUT / BRAND STORY

Section tentang siapa di balik brand.

**Wajib ada:**
- Photo/portrait placeholder atau koleksi foto.
- Cerita singkat yang human dan personal (bukan korporat).
- Nama orang/founder jika relevan.
- 2–3 statistik/pencapaian.
- Misi atau filosofi 1–2 kalimat.

**Hindari:**
- Daftar bullet panjang.
- Bahasa korporat.
- Foto stock generik.

---

### D8. PROCESS / JOURNEY / TIMELINE

Tampilkan cara kerja atau perjalanan brand.

**Format Desktop:**
- Horizontal numbered steps.
- Setiap step: nomor besar + label + deskripsi singkat.

**Format Mobile:**
- Vertical dengan line connector.

**Format Cinematic Dark:**
- Tahun besar di kiri sebagai milestone.
- Event di kanan dengan foto kecil.

Contoh Creative Agency:
```
01 Discovery    02 Concept    03 Design    04 Build    05 Launch
```

Contoh Restaurant Journey:
```
1975 — Founded in Lyon
1989 — First Michelin recognition
2001 — Relocated to Paris
2024 — 50th anniversary collection menu
```

---

### D9. STATS / SOCIAL PROOF

Numbers speak louder than copy.

Format: baris horizontal atau 2×2 grid dari angka besar.

```
10,000+      2            15            98%
Square Meters  Architects   Years         Client retention
```

Untuk hospitality:
```
50 Years     ★ Michelin   4.9/5        200+
of service   Recognition  Guest rating  Covers per week
```

Jangan pakai logo client palsu kecuali diminta. Lebih baik angka nyata atau statement kuat.

---

### D10. TESTIMONIALS

Tidak perlu 3 card sama. Pilih salah satu format:

**Format A — Single large quote:**
```
"They didn't just design our home.
 They understood how we live."
 
 — Oleh & Kateryna, Kyiv
```

**Format B — Stacked 2–3 quotes, horizontal scroll:**
- Foto kecil atau initial.
- Quote.
- Nama + role/location.

**Format C — Pull quote di dalam section about/project:**
- Quote embedded dalam storytelling section.

Jangan gunakan carousel auto-slide. Manual scroll atau static.

---

### D11. UNIQUE TECHNIQUE / SIGNATURE SECTION (Opsional)

Section khusus yang memperkenalkan sesuatu yang unik dari brand — metode, bahan, filosofi khusus.

Contoh:
- Woodworking studio: "The Shou Sugi Ban Method" — cara membakar kayu.
- Interior studio: "The Feeling Test" — cara studio mengevaluasi desain.
- Restaurant: "Notre Technique" — cara memasak signature dish.

Format:
- Judul besar.
- Deskripsi singkat tapi powerful.
- Foto close-up proses.
- 1–2 detail teknis.

---

### D12. PRICING / PACKAGES

Jika relevan untuk niche.

**Creative Studio:**
- Tidak perlu tabel pricing. Tampilkan sebagai consultation CTA.
- `Starting from IDR XX,XXX,XXX` atau `Price upon consultation`.

**SaaS:**
- 3 tier pricing card.
- Middle card `Most Popular`.
- Toggle monthly/annually.
- Feature list jelas.

**Hospitality:**
- Tasting menu / set menu dengan harga.
- Reservation page link, bukan pricing table.

---

### D13. FINAL CTA SECTION

Section penutup sebelum footer. Harus kuat dan intentional.

**Elemen:**
- Background berbeda dari section sebelumnya (foto, gelap, atau warna accent).
- Headline singkat dan powerful.
- 1 primary CTA, 1 secondary jika perlu.
- Jangan mengulangi semua benefit di sini.

Contoh:
```
Ready to build something beautiful?

[Start a Project →]    [Or, ask us anything]
```

Contoh hospitality:
```
An evening you will not forget.

[Reserve Your Table]
```

---

### D14. FOOTER

Footer harus rapi dan informatif, bukan afterthought.

**Elemen wajib:**
- Brand name / logo kiri atas.
- Tagline singkat di bawah logo.
- Quick links (Services, About, Projects, Contact).
- Kontak: email, phone, address.
- Social links (icon kecil, bukan button besar).
- Copyright + tahun.
- Policy links jika diperlukan (Privacy, Terms).

**Format Creative/Luxury:**
- 3–4 kolom.
- Typography clean, ukuran kecil.
- Semua light on dark atau dark on light.
- Tidak ada background warna aneh di footer.

---

## BAGIAN E — ANIMASI & INTERAKSI

> **ATURAN WAJIB v4.0**: Animasi bukan opsional. Setiap elemen yang masuk ke viewport, setiap interaksi user, dan setiap state change HARUS punya animasi yang disengaja. Halaman statis adalah halaman yang gagal memberi kesan.

---

### E1. Filosofi Animasi

> Animasi harus terasa seperti physics, bukan efek. Sesuatu yang bergerak karena ia memiliki berat dan momentum — bukan karena ada CSS class `bounce`.

**Prinsip:**
- Animate hanya `transform` dan `opacity` untuk performa terbaik (GPU-accelerated).
- Easing: `cubic-bezier(0.25, 0.46, 0.45, 0.94)` atau `ease-out` — bukan `ease-in-out` linear.
- Duration: 400ms–800ms untuk entrance animation. Bukan lebih.
- Stagger antar elemen: 60ms–100ms.
- Tidak pernah `animation: bounce`, `animation: pulse` kecuali ada alasan desain jelas.
- **Setiap elemen yang bergerak harus punya tujuan** — mengarahkan mata, memberi feedback, atau membangun ritme.

---

### E2. Animasi Wajib (Sistem Global)

- **Scroll reveal**: elemen fade up + scale subtle (1.02 → 1.0) saat masuk viewport.
- **Navbar transition**: dari transparent ke solid/blur saat scroll 80px pertama.
- **Hover state pada semua interactive element**: tidak ada elemen interaktif yang diam saat di-hover.
- **CTA button**: subtle lift + shadow increase saat hover, scale 1.03.
- **Number counter**: angka stat count up saat pertama kali masuk viewport.
- **Page transition**: fade atau clip-reveal antar halaman jika multi-page.
- **Gradient background**: selalu punya animasi sangat lambat (breathing/shift) — tidak pernah static.

---

### E3. Animasi Yang DILARANG

- Auto-play carousel atau slider.
- Parallax terlalu ekstrem (>30% offset).
- Animasi yang membuat teks bergerak saat sedang dibaca.
- Loading spinner generik.
- Text scramble effect yang tidak relevan dengan brand.
- Particles berlebihan (>12 partikel sekaligus di layar).
- Cursor custom kecuali diminta.
- Animasi yang memakan performa di mobile (akan dimatikan via `prefers-reduced-motion`).

---

### E4. Mobile Animation

- Kurangi semua animation duration di mobile sebesar 30%.
- Hapus parallax sepenuhnya di mobile.
- Hapus animasi ornamen/partikel di mobile.
- Respect `prefers-reduced-motion`: semua animasi FADE SEDERHANA jika user set reduced motion.
- Stagger di mobile: maksimal 40ms (lebih cepat).

---

### E5. ANIMATION-PER-ELEMENT SYSTEM ⚡ WAJIB

> Setiap jenis elemen punya animasi defaultnya. Ini adalah kamus animasi — gunakan konsisten di seluruh project.

---

**TEKS & TYPOGRAPHY:**

```
HEADLINE BESAR (display, 64px+):
  Entrance: clip-path reveal per baris (inset 100%→0%) + stagger 80ms per baris
  Duration: 700ms, ease-out
  Delay: sesuai urutan section

SUBHEADLINE / BODY PARAGRAPH:
  Entrance: opacity 0→1 + translateY 16px→0
  Duration: 500ms, ease-out
  Delay: +150ms setelah headline selesai

SECTION LABEL (ALL CAPS kecil):
  Entrance: opacity 0→1 + translateX -12px→0
  Duration: 400ms, ease-out
  Delay: paling pertama sebelum headline

ANGKA / METRIC BESAR:
  Entrance: counter animation (0 → angka target) + fade in
  Duration counter: 1200ms, ease-out
  Trigger: saat masuk viewport

MANIFESTO / STATEMENT (per baris):
  Entrance: setiap baris clip-path reveal dari bawah
  Stagger: 120ms per baris
  Duration: 600ms
```

---

**KARTU & KOMPONEN:**

```
PROJECT CARD / WORK CARD:
  Entrance: opacity 0→1 + translateY 24px→0 + scale 0.97→1
  Duration: 600ms, ease-out
  Stagger: 80ms antar card
  Hover: scale 1.02 + shadow deepen, duration 300ms
  Hover image: scale 1.05 (inner image saja), duration 400ms

SERVICE ITEM / LIST ITEM:
  Entrance: opacity 0→1 + translateX -16px→0
  Stagger: 60ms per item
  Duration: 400ms
  Hover: translateX 6px, accent color pada nomor/icon, duration 250ms

FEATURE CARD (SaaS):
  Entrance: opacity 0→1 + scale 0.95→1
  Stagger: 80ms antar card
  Duration: 500ms
  Hover: border color → accent, subtle glow, translateY -4px

PRICING CARD:
  Entrance: opacity 0→1 + translateY 32px→0
  Middle (popular) card: delay -80ms (masuk lebih awal), scale sedikit lebih besar
  Hover: translateY -6px + shadow intensify, duration 300ms

TESTIMONIAL QUOTE:
  Entrance: opacity 0→1 (fade saja, tanpa movement) + opening quote mark scale 0→1
  Duration: 700ms
```

---

**TOMBOL & CTA:**

```
BUTTON PRIMARY:
  Entrance: opacity 0→1 + scale 0.9→1
  Duration: 400ms
  Hover: translateY -2px + shadow lift, background darken 8%, duration 200ms
  Active/click: scale 0.97, duration 100ms
  Focus: outline ring (accessibility), tidak boleh dihilangkan

BUTTON GHOST/OUTLINE:
  Hover: border → solid fill transition, text color invert, duration 250ms

TEXT LINK WITH ARROW (→):
  Hover: panah bergerak 4px ke kanan, underline tumbuh dari kiri, duration 200ms

CTA PILL (label/badge):
  Entrance: scale 0 → 1 dari center + opacity
  Duration: 400ms, spring ease
```

---

**NAVIGASI:**

```
NAVBAR:
  Load: opacity 0→1 + translateY -8px→0, duration 500ms
  Scroll (0→80px): background transparent → blur glass, transition 300ms
  Active link: underline tumbuh dari kiri (scaleX 0→1), duration 250ms
  Mobile drawer open: translateX(-100%→0) atau scale(0.9→1) + opacity, duration 350ms

NAV LINKS (hover):
  Text: translateY -1px, duration 200ms
  Underline: scaleX 0→1 dari kiri, duration 250ms
```

---

**SECTION TRANSITIONS:**

```
SECTION MASUK VIEWPORT (setiap section):
  Section label: pertama masuk (delay 0ms)
  Headline: masuk 100ms setelahnya
  Konten/body: masuk 250ms setelah headline
  CTA: masuk terakhir, 400ms setelah konten

DIVIDER LINE (1px separator):
  Entrance: scaleX 0→1 dari kiri, duration 800ms, ease-out
  Trigger: saat garis masuk viewport

STAT NUMBERS:
  Grid stat: setiap angka count-up dengan stagger 150ms
  Label di bawah angka: fade in setelah angka selesai
```

---

**IMAGE & MEDIA (jika digunakan di section selain hero):**

```
FOTO PROJECT / PORTFOLIO:
  Entrance: clip-path inset(0 0 100% 0)→inset(0 0 0% 0) (reveal dari atas ke bawah)
  Duration: 800ms, ease-out
  Hover: scale 1.04 (dengan overflow hidden pada container), duration 400ms

AVATAR / PORTRAIT:
  Entrance: scale 0.85→1 + opacity 0→1
  Duration: 600ms

LOGO TRUST STRIP:
  Entrance: setiap logo fade in + translateY 8px→0
  Stagger: 60ms
  Filter: grayscale(100%) → grayscale(0%) on hover, duration 300ms
```

---

**FORM & INPUT:**

```
INPUT FIELD:
  Focus: border color → accent, label float up, duration 200ms
  Error: shake 3x horizontal (3px), border → red, duration 400ms
  Success: checkmark icon scale 0→1, border → green, duration 300ms

SUBMIT BUTTON:
  Loading state: spin icon + text "Sending...", opacity 0.7
  Success state: checkmark masuk + text berubah, scale 0.97→1, duration 300ms
```

---

**ORNAMEN & DEKORASI:**

```
GRADIENT BACKGROUND (hero, splashscreen, CTA section):
  Animation: background-position shift sangat lambat, 8–12 detik cycle
  Atau: hue-rotate sangat subtle ±10 derajat, 15 detik cycle
  Kesan: gradasi "bernafas" — hidup tapi tidak mengganggu

DECORATIVE LINES (editorial divider):
  Entrance: scaleX 0→1 dari kiri, atau dari tengah ke dua arah
  Duration: 1000ms

SHAPE / GEOMETRIC (jika digunakan sebagai ornamen):
  Idle animation: sangat lambat rotate atau translate (20–30 detik cycle)
  Opacity: maksimal 0.06 agar tidak mengganggu konten
```

---

### E6. ANIMATION IMPLEMENTATION GUIDE

**Untuk HTML/CSS/Vanilla JS:**

```javascript
// Intersection Observer untuk semua scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
      observer.unobserve(entry.target); // fire once
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
```

```css
/* Base state — semua animated element mulai invisible */
[data-animate] { opacity: 0; }
[data-animate="fade-up"] { transform: translateY(24px); }
[data-animate="fade-left"] { transform: translateX(-16px); }
[data-animate="scale-in"] { transform: scale(0.95); }

/* Active state */
[data-animate].animate-in {
  opacity: 1;
  transform: none;
  transition: opacity 0.6s var(--ease-out), transform 0.6s var(--ease-out);
}

/* Stagger via CSS custom property */
[data-stagger] > * { transition-delay: calc(var(--i, 0) * 80ms); }
```

**Untuk React/Framer Motion:**

```jsx
// Reusable animated wrapper
const AnimatedSection = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
  >
    {children}
  </motion.div>
);

// Stagger container
const staggerContainer = {
  animate: { transition: { staggerChildren: 0.08 } }
};
const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};
```

---

## BAGIAN F — LAYOUT & SPACING SYSTEM

### F1. Container

```
Max width: 1200px – 1380px
Padding kiri/kanan desktop: 48px – 80px
Padding kiri/kanan mobile: 20px – 24px
```

### F2. Section Spacing

```
Section padding desktop: 100px – 160px (vertical)
Section padding mobile: 60px – 96px (vertical)
Card padding: 24px – 40px
Gap grid desktop: 24px – 48px
Gap grid mobile: 16px – 24px
```

### F3. Grid System

```
Desktop: 12-column grid
Tablet: 6–8 column
Mobile: 1–2 column

Gutter: 24px – 32px
```

### F4. Border Radius

```
Editorial Luxury: 0px – 4px (sangat angular atau sedikit radius)
Cinematic Dark: 0px – 2px (sangat angular)
B&W Editorial: 0px (full square/rectangle)
Moody Luxury: 0px – 8px (subtle)
Modern SaaS: 12px – 24px (rounded, modern)
```

### F5. Responsiveness

Wajib optimal di semua breakpoint:

```
Mobile:      360px – 480px
Tablet:      768px – 1024px
Laptop:      1280px – 1440px
Desktop:     1600px+
```

Aturan responsif:
- Mobile-first approach.
- Hero text tetap terbaca dan tidak overflow di mobile.
- Grid desktop berubah jadi single column di mobile.
- Tidak ada horizontal overflow.
- Navbar desktop → drawer/overlay di mobile.
- Font size hero di mobile tidak kurang dari 36px.
- Button touch target minimal 44px height.

---

## BAGIAN G — BRAND VOICE & COPYWRITING

### G1. Tone Per Archetype

| Archetype | Tone | Hindari |
|---|---|---|
| Editorial Luxury | Percaya diri, intim, puitis | Bahasa korporat, klaim berlebihan |
| Cinematic Dark | Raw, authentic, deliberate | Hype, superlative kosong |
| B&W Editorial | Precise, minimal, declarative | Penjelasan panjang |
| Moody Luxury | Sensory, evocative, warm | Bahasa transaksional |
| Modern SaaS | Clear, benefit-focused, confident | Jargon teknis berlebihan |

### G2. Formula Headline

**Editorial Luxury:**
```
[Strong adjective] [space type] for [bold descriptor]
Living Spaces for Bold Souls.
Architecture with Emotional Intelligence.
```

**Cinematic Dark:**
```
[The/A] [noun] — [short evocative descriptor]
The Maker — Know More About Maxime Perrolle
Behind the Art. Beyond the Craft.
```

**B&W Editorial:**
```
[Statement]. [Statement]. [Statement].
Global. Independent. Vision-led.
Light. Form. Silence.
```

**Moody Luxury:**
```
[Emotional quality] [noun] with [descriptor]
Modern French dining with a timeless soul.
An evening you will not forget.
```

**Modern SaaS:**
```
[Action] [main value] with [unique benefit]
Build faster workflows without the chaos.
The platform that grows with your team.
```

### G3. Subheadline Rules

- Maksimal 2 kalimat.
- Jelaskan siapa untuk siapa, dan apa yang membuat ini berbeda.
- Jangan ulangi headline dengan kata berbeda.
- Tidak perlu bullet point dalam subheadline.

### G4. CTA Copy

Pilih CTA yang sesuai archetype dan niche:

```
Editorial Luxury:    "View Our Projects →"    "Start a Conversation"
Cinematic Dark:      "Explore the Work"        "Enter"
B&W Editorial:       "See Projects ↓"          "View Portfolio"
Moody Luxury:        "Reserve a Table"         "Book Your Evening"
Modern SaaS:         "Get Started Free"        "Book a Demo"
```

**Aturan CTA:**
- Hero boleh 2 CTA maksimal.
- Section biasa: 1 CTA.
- Final CTA section: 1 primary wajib, 1 secondary opsional.
- Jangan lebih dari 2 CTA dalam satu viewport.

---

## BAGIAN H — PHOTOGRAPHY & VISUAL DIRECTION

### H1. Filosofi Visual

Photography bukan dekorasi — photography adalah arsitektur halaman. Setiap foto harus dipilih atau ditempatkan dengan alasan desain, bukan sekadar mengisi ruang.

### H2. Jika Tidak Ada Asset dari User

**Editorial Luxury:**
- Gunakan solid color block dengan typography overlay.
- Gunakan abstract shapes dengan warna palet.
- Buat mockup project card dengan data real.

**Cinematic Dark:**
- Solid near-black dengan tekstur grain subtle (CSS noise).
- Typography sebagai pengganti foto.
- Geometric element minimalis.

**B&W Editorial:**
- Semua visual dalam grayscale atau desaturasi penuh.
- Silhouette atau abstract B&W shapes.

**Moody Luxury:**
- Dark gradient dengan warna accent sebagai atmosfer.
- Tidak perlu foto jika tidak ada — cukup komposisi gelap yang dramatis.

**Modern SaaS:**
- Dashboard mockup UI yang dibuat dari kode.
- Abstract data visualization.
- Gradient mesh background.

### H3. Aturan Image Placement

- Foto tidak pernah stretch atau distort.
- Gunakan `object-fit: cover` dan `object-position` yang tepat.
- Foto hero: minimal resolusi 1440×900 logis (placeholder dengan aspect ratio benar).
- Foto project: rasio konsisten — bisa 4:3, 3:2, atau 1:1, tapi dalam satu section harus sama.
- Caption foto: 12px, light weight, di bawah foto, bukan overlay.
- Alt text selalu ada (describe konten foto, bukan "image of").

---

## BAGIAN I — TECH STACK & KOMPONEN

### I1. HTML/CSS/Vanilla JS

Gunakan jika platform tidak support React:
- CSS custom properties untuk design tokens.
- CSS Grid + Flexbox.
- Intersection Observer untuk scroll animation.
- Smooth scroll bawaan: `scroll-behavior: smooth`.

### I2. React / Next.js

- Tailwind CSS untuk utility styling.
- Framer Motion untuk animasi (bukan CSS-only jika bisa React).
- Lucide React untuk icon (bukan emoji sebagai icon UI).
- `useRef` + `IntersectionObserver` atau Framer `useInView` untuk scroll reveal.
- Shadcn UI components jika tersedia.

### I3. Font Loading

- Gunakan Google Fonts atau sistem `@font-face`.
- Selalu set `font-display: swap`.
- Load hanya weight yang dipakai (bold + regular cukup).
- Preload font file critical di `<head>`.

### I4. Icon

- Lucide React (untuk SaaS/tech).
- Heroicons.
- Custom SVG inline untuk icon dekoratif unik.
- Jangan emoji sebagai icon UI (kecuali disengaja untuk humor/personal brand).

---

## BAGIAN J — ADAPTASI PER NICHE

### J1. Interior Design Studio → A1 Editorial Luxury
- Section: Hero photo, Manifesto, Projects grid, Services list, About duo/team, Process, Testimonial, CTA, Footer.
- Show: area m², tahun berdiri, jumlah project, lokasi.
- Copy direction: "Spaces that feel alive, not just beautiful."

### J2. Artist / Maker / Craftsperson → A2 Cinematic Dark
- Section: Hero cinematic, About the art, Technique signature, Journey timeline, Gallery, Feel the texture, Contact, Footer.
- Show: proses kerja, bahan, metode unik, tahun mulai.
- Copy direction: "More than a craft. A dialogue."

### J3. Photography / Art Direction Studio → A3 B&W Editorial
- Section: Hero editorial, Studio profile manifesto, Selected work grid, Expertise list, Visual ethos, About, Contact.
- Show: kategori spesifik, jumlah proyek, kolaborasi.
- Copy direction: "Global. Independent. Vision-led."

### J4. Fine Dining / Restaurant → A4 Moody Luxury
- Section: Hero atmospheric, Brand story, Menu (Tasting / À La Carte), Chef/team, Signature technique, Reservations CTA, Footer.
- Show: Michelin, anniversary, chef signature, covers per week.
- Copy direction: "Flavors that linger long after the last bite."

### J5. SaaS / AI / Tech Product → A5 Modern SaaS
- Section: Preloader, Navbar, Hero+dashboard mockup, Trust/logos, Features grid, How it works, Interactive demo, Pricing, Testimonials, FAQ, Final CTA, Footer.
- Show: user count, integrations, uptime, security.
- Copy direction: "The smarter way to [core job]."

### J6. Creative Agency / Design Studio → Mix A1 + A3
- Section: Hero bold, Selected work, Services, Process, Results, About, Contact.
- Show: case study card, project categories, client count.
- Copy direction: "We make brands that cannot be ignored."

### J7. Fashion / Luxury Brand → Mix A1 + A4
- Section: Full-bleed product hero, Campaign editorial, Collection grid, Brand story, Materials, Press coverage, Shop / Contact.
- Show: collection name, season, material detail.
- Copy direction: "Worn by those who know the difference."

### J8. Hotel / Boutique Property → A4 Moody Luxury
- Section: Hero full-viewport, Rooms/suites, Amenities, Dining, Location, Reservations.
- Show: star rating, awards, location data, season/availability.
- Copy direction: "A place to return to, not just visit."

### J9. Event / Conference
- Section: Event identity hero, Speakers, Schedule, Registration CTA, Venue, Sponsors, FAQ.
- Tone: energetic tapi premium.
- Show: date, location, speaker count, ticket tiers.

---

## BAGIAN K — DO & DON'T

### ✅ DO

- Pilih satu Visual Archetype dan eksekusi dengan konsisten.
- Gunakan typography sebagai elemen visual utama, bukan hanya teks.
- **Buat Animated Splashscreen** di setiap project — ini wajib, bukan opsional (Bagian D1).
- **Posisikan semua headline hero di CENTER** — horizontal dan vertikal.
- **Bangun hero dari gradient CSS** — bukan foto insert. Gradasi yang dikerjakan serius lebih premium dari foto acak.
- **Pilih font sesuai tema niche** menggunakan Font-Theme Matrix (C5) — bukan berdasarkan popularitas.
- **Animasikan setiap elemen** menggunakan Animation-Per-Element System (E5) — tidak ada elemen yang static.
- Gunakan whitespace dengan intentional dan generous.
- Tulis copy yang percaya diri, singkat, dan spesifik ke brand.
- Tunjukkan satu CTA yang kuat, bukan 5 CTA lemah.
- Buat animasi yang terasa seperti physics, bukan efek kartun.
- Pastikan mobile version terasa sama premium-nya dengan desktop.
- Tampilkan angka/metric yang konkret dan believable.
- Gunakan section label sebelum setiap headline besar.
- Buat gradient background dengan animasi breathing lambat — gradasi tidak pernah static.

### ❌ DON'T

- **Jangan insert foto sebagai hero background** — hero dibangun dari gradient CSS (Bagian D3).
- **Jangan letakkan headline hero di kiri atau kanan** — selalu CENTER.
- **Jangan buat project tanpa splashscreen** — splashscreen adalah kesan pertama yang wajib.
- **Jangan pilih font sembarangan** — font harus sesuai tema dari Font-Theme Matrix (C5). Jangan pakai Arial, Roboto, system-ui tanpa alasan kuat.
- **Jangan biarkan elemen tanpa animasi** — setiap elemen yang masuk viewport harus punya entrance animation (E5).
- Jangan pakai glassmorphism untuk archetype Editorial/Cinematic/B&W. Glassmorphism hanya untuk SaaS.
- Jangan buat 5 CTA berbeda dalam satu halaman.
- Jangan buat hero dengan layout kiri-teks / kanan-gambar untuk Creative/Luxury.
- Jangan buat semua section terasa sama tingginya dan formatnya.
- Jangan gunakan gradient warna-warni tidak relevan dengan archetype.
- Jangan buat animasi yang membuat teks sulit dibaca.
- Jangan buat 6+ fitur icon card untuk website non-SaaS.
- Jangan buat navbar dengan mega menu untuk brand creative/luxury — terlalu ramai.
- Jangan buat mobile version yang hanya "mengecilkan" desktop. Rancang ulang untuk mobile.
- Jangan auto-play video atau audio.
- Jangan buat section FAQ 10 pertanyaan jika 4 sudah cukup.
- Jangan ulangi CTA yang sama lebih dari 3× dalam satu halaman.
- Jangan buat splashscreen lebih dari 2.5 detik.
- Jangan gunakan loading spinner generik sebagai pengganti splashscreen.

---

## BAGIAN L — FINAL CHECKLIST

Sebelum output final, verifikasi semua item ini:

**v4.0 Core Rules:**
- [ ] Splashscreen animasi wajib ada dan sudah diimplementasi (Bagian D1).
- [ ] Splashscreen: gradient tema + animasi teks brand di CENTER + durasi 1.5–2.5 detik.
- [ ] Hero section: TIDAK ada foto insert — dibangun dari gradient CSS.
- [ ] Hero headline: posisi CENTER (horizontal dan vertikal).
- [ ] Font dipilih dari Font-Theme Matrix (C5) sesuai niche — bukan font random.
- [ ] Setiap elemen punya entrance animation dari E5 — tidak ada elemen static.
- [ ] Gradient background di hero dan CTA section punya animasi breathing/shift.

**UI/UX Pro Max (Bagian O):**
- [ ] Visual Direction Audit 5 pertanyaan sudah dijawab sebelum memulai.
- [ ] Design Token lengkap (color, type, spacing, motion) sudah didefinisikan.
- [ ] Setiap section punya satu visual anchor yang jelas.
- [ ] Semua warna, spacing, dan font size berasal dari token — tidak ada nilai hardcoded.
- [ ] Component hierarchy L1–L6 konsisten di seluruh halaman.

**Impeccable Taste (Bagian P):**
- [ ] Setiap section sudah lulus Earn Your Place Test (P1).
- [ ] Tidak ada Tier 4 yang masuk tanpa permintaan eksplisit.
- [ ] Tidak ada Tier 5 (auto-play, pop-up, sticky chat) dalam bentuk apapun.
- [ ] Semua copy sudah melewati Copy Quality Gate — tidak ada filler words.
- [ ] Jumlah CTA per halaman tidak melebihi batas archetype.
- [ ] Setiap animasi dan icon punya justifikasi desain yang jelas.

**Identity & Direction:**
- [ ] Visual Archetype sudah ditentukan dan konsisten di seluruh halaman.
- [ ] Font display dan body sudah dipilih dari Font-Theme Matrix sesuai archetype.
- [ ] Palet warna maksimal 2 primary + neutral.

**Structure:**
- [ ] Splashscreen ada, durasi 1.5–2.5 detik, transisi keluar smooth.
- [ ] Navbar responsif: desktop minimal, mobile drawer.
- [ ] Hero section: gradient CSS + headline CENTER minimum 64px.
- [ ] Brand Manifesto / Intro ada.
- [ ] Work Showcase / Projects ada (jika relevan).
- [ ] Services / Expertise section ada.
- [ ] About / Brand Story ada.
- [ ] Process / Timeline ada.
- [ ] Testimonial ada (minimal 1 quote kuat).
- [ ] Stats / Social proof ada.
- [ ] Final CTA section ada.
- [ ] Footer lengkap dan rapi.

**Typography:**
- [ ] Section label ALL CAPS ada sebelum setiap headline.
- [ ] Headline hero minimal 64px di desktop, CENTER aligned.
- [ ] Font weight contrast ekstrem antara display dan body.
- [ ] Tidak ada lebih dari 3 font family.

**Animation:**
- [ ] Setiap elemen punya entrance animation (E5).
- [ ] Headline: clip-path reveal atau character stagger.
- [ ] Cards/list items: stagger entrance.
- [ ] Numbers/stats: count-up animation.
- [ ] Buttons: hover lift + shadow.
- [ ] Navbar transition saat scroll.
- [ ] Gradient background: breathing/shift animation aktif.
- [ ] Tidak ada auto-play carousel.
- [ ] `prefers-reduced-motion` ditangani.

**Responsiveness:**
- [ ] Mobile 360px tidak overflow.
- [ ] Hero text mobile terbaca (minimal 36px), tetap CENTER.
- [ ] Grid berubah jadi 1-2 kolom di mobile.
- [ ] Button touch target minimal 44px.
- [ ] Navbar berubah jadi drawer di mobile.
- [ ] Animasi dikurangi 30% di mobile.

**Quality:**
- [ ] Kontras teks WCAG AA minimum.
- [ ] Tidak ada horizontal scroll di mobile.
- [ ] Tidak ada font/icon yang gagal load.
- [ ] Copy sesuai niche dan tidak generic.
- [ ] Visual tidak terasa seperti template.

---

## BAGIAN M — INPUT TEMPLATE UNTUK USER

Jika user ingin hasil lebih akurat, gunakan form ini:

```
Brand name:
Industry / Niche:
Short description (1–3 kalimat):
Target audience:
Visual archetype preference (A1–A5, atau describe): 
Primary color (hex atau nama):
Secondary color (opsional):
Brand voice (pilih: confident / warm / editorial / dramatic / playful / minimal):
Required sections (jika ada yang khusus):
Sections to skip (jika ada yang tidak perlu):
Primary CTA:
Logo / assets available? (yes/no):
Reference websites (URL, jika ada):
Language (Indonesia / English / bilingual):
Platform output (React / HTML / Framer / Webflow / Stitch):
```

**Jika input tidak lengkap:** lanjutkan dengan asumsi terbaik berdasarkan industry. Jangan terlalu banyak bertanya. Satu pertanyaan klarifikasi maksimum.

---

## BAGIAN N — PROMPT EKSEKUSI

Ketika memulai, ikuti instruksi ini:

> Baca seluruh DESIGN.md ini sebagai master instruction. **Pertama**, jalankan UI/UX Pro Max Visual Direction Audit (Bagian O): jawab 5 pertanyaan tentang emosi brand, primary user action, visual metaphor, dan anti-pattern. **Kedua**, tentukan Visual Archetype (A1–A5) dan definisikan design token system lengkap. **Ketiga**, pilih font sesuai Font-Theme Matrix (C5) — bukan asal pilih. **Keempat**, bangun Animated Splashscreen (D1) terlebih dahulu sebagai elemen wajib setiap project: gradient background tema + animasi teks brand name di CENTER + durasi 1.5–2.5 detik. **Kelima**, bangun Hero Section dari gradient CSS (D3) — TANPA foto insert, headline CENTER. **Keenam**, terapkan animasi pada setiap elemen menggunakan Animation-Per-Element System (E5). **Ketujuh**, kurasi section list menggunakan Feature Integrity System (Bagian P) — setiap section harus lulus Earn Your Place Test. **Kedelapan**, terapkan typography, color, layout, dan voice dari archetype secara konsisten mengikuti Section Architecture di Bagian D. Tulis copywriting yang melewati Copy Quality Gate. Pastikan semua responsive di mobile, tablet, dan desktop. Jalankan Final Checklist sebelum output. Jangan buat website yang terasa seperti template — buat seperti website yang dirancang khusus untuk brand ini dan hanya brand ini.

---

## BAGIAN O — UI/UX PRO MAX: VISUAL DIRECTION & DESIGN SYSTEM

> Sebelum satu baris kode ditulis atau satu section diletakkan, design system harus berdiri penuh. Tidak ada keputusan visual yang dibuat ad-hoc. Semua berasal dari satu sumber kebenaran.

---

### O1. VISUAL DIRECTION AUDIT (Wajib Dikerjakan Sebelum Apapun)

Jawab kelima pertanyaan ini secara eksplisit. Jika tidak bisa menjawab, kembali ke brief.

**Q1 — Apa yang ingin brand komunikasikan secara emosional?**
(Bukan deskripsi bisnis — tapi perasaan yang harus dirasakan user setelah 3 detik pertama.)
Contoh: *"Kepercayaan yang tenang"* / *"Eksitasi yang terkontrol"* / *"Keanggunan yang tak perlu membuktikan diri"*

**Q2 — Apa satu aksi utama yang user harus lakukan?**
(Hanya satu. Bukan dua. Jika ada dua tujuan bisnis, pilih yang paling bernilai.)
Contoh: *"Klik Reserve a Table"* / *"Isi form konsultasi"* / *"Mulai free trial"*

**Q3 — Apa yang harus user rasakan di scroll pertama?**
Pilih satu: `Kagum` / `Percaya` / `Penasaran` / `Tenang` / `Terinspirasi`

**Q4 — Apa metafora visual brand ini?**
(Satu perbandingan yang membentuk seluruh estetika.)
Contoh: *"Majalah editorial cetak"* / *"Ruang galeri di malam hari"* / *"Dashboard presisi pilot pesawat"* / *"Meja makan fine dining saat lampu dimmer"*

**Q5 — Apa yang brand ini BUKAN?**
(Anti-pattern yang tidak boleh muncul dalam apapun.)
Contoh: *"Bukan startup yang terburu-buru"* / *"Bukan premium yang pamer"* / *"Bukan minimalis yang steril dan dingin"*

Simpan jawaban ini sebagai **Visual Direction Brief** — rujuk setiap kali ada keputusan desain yang meragukan.

---

### O2. DESIGN TOKEN SYSTEM

Definisikan semua token sebelum styling apapun. Tidak ada nilai hardcoded di luar token ini.

```css
/* ─── TYPOGRAPHY ─────────────────────────────── */
--font-display: "PP Editorial New", serif;      /* pilih sesuai archetype */
--font-body:    "Instrument Sans", sans-serif;
--font-mono:    "Geist Mono", monospace;        /* hanya untuk SaaS */

--text-mega:      clamp(80px,  12vw, 200px);   /* brand name / hero mega display */
--text-display:   clamp(52px,   7vw,  96px);   /* section headline */
--text-headline:  clamp(32px,   4vw,  56px);   /* sub-section headline */
--text-subhead:   clamp(22px, 2.5vw,  36px);
--text-label:     12px;                         /* ALL CAPS section label */
--text-body:      17px;
--text-caption:   12px;

--leading-tight:  0.92;
--leading-normal: 1.5;
--tracking-label: 0.12em;                       /* letter-spacing ALL CAPS label */
--tracking-display: -0.02em;                    /* letter-spacing display besar */

/* ─── COLORS ──────────────────────────────────── */
--color-bg:           #F5F2ED;    /* primary background */
--color-bg-alt:       #FFFFFF;    /* alternate section */
--color-text:         #1A1A18;    /* primary text */
--color-text-muted:   #6B6B66;    /* secondary / caption */
--color-accent:       #3D5A47;    /* primary accent */
--color-accent-soft:  #8A9E8C;    /* muted version */
--color-border:       rgba(26,26,24,0.12); /* divider / border */
--color-overlay:      rgba(0,0,0,0.45);   /* foto overlay */

/* ─── SPACING ─────────────────────────────────── */
--space-section:      clamp(80px, 10vw, 160px); /* vertical section padding */
--space-element:      clamp(32px,  4vw,  64px); /* antar elemen besar */
--space-component:    24px;                      /* antar komponen */
--space-tight:        12px;                      /* dalam komponen */

/* ─── MOTION ──────────────────────────────────── */
--ease-out:      cubic-bezier(0.25, 0.46, 0.45, 0.94);
--ease-in-out:   cubic-bezier(0.45, 0.00, 0.55, 1.00);
--dur-fast:      250ms;
--dur-base:      450ms;
--dur-slow:      700ms;
--stagger:       80ms;

/* ─── LAYOUT ──────────────────────────────────── */
--container-max:    1320px;
--container-pad:    clamp(20px, 5vw, 80px);
--grid-cols:        12;
--grid-gutter:      clamp(16px, 2vw, 32px);
--radius-sm:        4px;    /* editorial */
--radius-md:        12px;   /* SaaS */
--radius-lg:        24px;   /* SaaS card besar */
```

**Aturan token:**
- Setiap kali ada warna, spacing, atau font size baru → masukkan ke token terlebih dahulu.
- Tidak pernah hardcode warna hex di dalam component CSS.
- Token berubah per archetype — tapi struktur token-nya selalu sama.

---

### O3. COMPONENT HIERARCHY

Setiap elemen UI harus jatuh ke dalam level yang tepat. Tidak ada yang melampaui atau melewati levelnya.

```
Level 1 — Page
  └─ Level 2 — Section        (Hero, About, Services, Footer...)
       └─ Level 3 — Container  (layout wrapper: grid, flex, centering)
            └─ Level 4 — Component  (ProjectCard, QuoteBlock, PricingCard...)
                 └─ Level 5 — Element  (Button, Heading, Image, Icon, Label)
                      └─ Level 6 — Token  (color, space, font-size, duration)
```

**Aturan hierarchy:**
- Level 3 (container) tidak punya decoration — hanya layout.
- Level 4 (component) selalu menggunakan token Level 6 untuk semua nilai visual.
- Level 5 (element) tidak boleh mendefinisikan warna sendiri — ambil dari token.
- Component yang sama (misal: ProjectCard) harus identik di setiap kemunculannya.
- Jika ada component baru yang tidak fit di Level 4 → tanya: apakah ini bisa jadi variant dari component yang sudah ada?

---

### O4. VISUAL HIERARCHY PER SECTION

Setiap section wajib punya **satu anchor visual** — satu elemen yang mata menuju ke sana pertama kali. Jika ada dua anchor, redesign.

Urutan prioritas mata manusia:
```
1. Wajah / Foto  →  mata selalu ke wajah pertama
2. Teks sangat besar  →  display 80px+ menarik perhatian
3. Warna kontras tinggi  →  aksen pada background netral
4. CTA / Button  →  harus masuk top-3 hierarchy per section
5. Body copy  →  selalu terakhir dibaca
```

Gunakan ini sebagai checklist visual untuk setiap section:
- [ ] Ada satu anchor yang jelas.
- [ ] CTA berada dalam top 3 hierarchy visual.
- [ ] Body copy tidak bersaing dengan display typography.
- [ ] Warna aksen hanya muncul di satu elemen utama per section.

---

### O5. DESIGN CONSISTENCY AUDIT

Setelah build selesai, jalankan audit ini sebelum submit:

```
COLOR AUDIT
├─ Semua bg-color → dari --color-bg atau --color-bg-alt?
├─ Semua text-color → dari --color-text atau --color-text-muted?
├─ Semua accent → dari --color-accent atau --color-accent-soft?
└─ Ada warna hardcoded yang tidak di token? → FIX

TYPE AUDIT
├─ Semua display text → dari --text-mega / --text-display?
├─ Semua body → dari --text-body?
├─ Semua label → --text-label + --tracking-label + text-transform: uppercase?
└─ Font weight ekstrem terjaga? (900 display vs 300-400 body)

SPACING AUDIT
├─ Section padding → dari --space-section?
├─ Element gap → dari --space-element?
└─ Ada margin/padding manual random? → Pindahkan ke token

COMPONENT AUDIT
├─ ProjectCard di D5 === ProjectCard di D9?
├─ Button style konsisten di seluruh halaman?
├─ Hover state konsisten (tidak ada section yang berbeda behavior)?
└─ Section label format konsisten (ALL CAPS, ukuran, tracking)?

ARCHETYPE AUDIT
└─ Ambil screenshot satu section secara acak.
   Apakah terlihat jelas ini archetype apa?
   Jika tidak → identitas visual belum cukup kuat. Perkuat.
```

---

## BAGIAN P — IMPECCABLE TASTE: FEATURE INTEGRITY SYSTEM

> Sebuah fitur yang tidak melayani tujuan utama user bukan sebuah fitur. Ia adalah kebisingan. Buang.

---

### P1. THE EARN YOUR PLACE TEST

Sebelum menambahkan section, elemen, animasi, atau baris copy apapun — ia harus lulus **semua 4 test** ini. Jika gagal satu saja, hapus atau revisi.

---

**TEST 1 — The Purpose Test**
> *"Kebutuhan user mana yang dilayani elemen ini?"*

Jika jawabannya samar — *"terlihat bagus"*, *"semua website punya"*, *"biar penuh"* — hapus.
Jawaban yang valid: *"User perlu tahu berapa lama proses kerja sebelum kontak"* / *"User perlu bukti sosial sebelum klik CTA"*

---

**TEST 2 — The Removal Test**
> *"Apa yang hilang jika elemen ini dihapus?"*

Jika tidak ada yang penting yang hilang — hapus.
Jika user journey tetap berjalan sempurna tanpa elemen ini — hapus.

---

**TEST 3 — The Right Moment Test**
> *"Apakah user membutuhkan informasi ini di titik scroll ini?"*

Jika user belum cukup percaya untuk menerima informasi ini — pindah ke bawah.
Jika user sudah melewati titik keputusan dan informasi ini terlambat — pindah ke atas.
Jika tidak ada posisi yang tepat — hapus.

---

**TEST 4 — The Audience Test**
> *"Apakah target audience genuinely peduli dengan ini?"*

Jika ini ada demi ego brand owner, bukan untuk memudahkan keputusan user — hapus.
Jika hanya orang internal yang akan terkesan dengan ini — hapus.

---

### P2. FEATURE NECESSITY TIERS

Gunakan tabel ini untuk mengklasifikasikan setiap section sebelum membangunnya.

| Tier | Status | Contoh | Keputusan |
|---|---|---|---|
| **Tier 1 — Essential** | Selalu ada | Hero, Core CTA, About, Contact | Tidak bisa dihapus |
| **Tier 2 — Expected** | Masukkan jika relevan | Services, Portfolio, Testimonials, Footer | Masukkan kecuali ada alasan kuat untuk tidak |
| **Tier 3 — Added Value** | Masukkan hanya jika excellent | Blog, FAQ, Process, Stats, Timeline | Hanya jika kontennya kuat — jangan masukkan placeholder |
| **Tier 4 — Ego Features** | Hindari | Awards wall tanpa verifikasi, Tim 8 orang dengan foto sama, Counter "100% committed" | Tidak masuk kecuali diminta eksplisit |
| **Tier 5 — Anti-Features** | Tidak pernah | Auto-play video/audio, Pop-up newsletter, Sticky chat bubble, Preloader >2 detik | Dilarang tanpa pengecualian |

---

### P3. SECTION CURATION PROTOCOL

Sebelum memulai build, ikuti protokol ini secara berurutan:

**Step 1** — Tulis semua section yang ingin dimasukkan.

**Step 2** — Assign setiap section ke Tier (P2).

**Step 3** — Untuk setiap **Tier 3**: tuliskan satu kalimat justifikasi mengapa ia harus ada. Tanpa justifikasi yang kuat → hapus.

**Step 4** — Untuk setiap **Tier 4**: hanya masukkan jika user meminta secara eksplisit. Jika tidak → hapus.

**Step 5** — **Tier 5** tidak pernah masuk dalam kondisi apapun.

**Step 6** — Review urutan. Apakah user journey dari atas ke bawah logis dan mengalir menuju satu CTA?

---

**Contoh sebelum dan sesudah kurasi:**

```
SEBELUM (bloated, 16 sections):
Preloader → Navbar → Hero → Brand Story → Team Bios (8 orang) →
Services (10 items) → Why Us (4 bullet) → Process (7 langkah) →
Gallery (24 foto) → Stats → Press Logos → FAQ (14 pertanyaan) →
Testimonials (6 cards) → Awards → Partners → Newsletter → CTA → Footer

SESUDAH (curated, 11 sections):
Preloader → Navbar → Hero → Brand Manifesto + Stats (3 angka) →
Selected Work (4–6 proyek) → Services (3–4 dengan deskripsi kuat) →
About (fokus founder/studio, bukan tim penuh) →
Process (4 langkah, bukan 7) → Testimonial (1 quote kuat) →
CTA → Footer
```

*Perbedaan: 16 → 11 section. Setiap section yang tersisa lebih kuat karena tidak berebut perhatian.*

---

### P4. COPY QUALITY GATE

Setiap baris copy harus lolos semua filter ini. Jika tidak — tulis ulang atau hapus.

---

**FILTER 1 — No Filler Opener**

Kalimat yang diawali dengan frasa berikut harus ditulis ulang:
```
❌  "We are passionate about..."
❌  "We believe in..."
❌  "Our team is dedicated to..."
❌  "We strive to..."
❌  "We are committed to..."
❌  "With years of experience..."
```
Mulai dengan nilai, bukan perasaan. Mulai dengan hasil, bukan niat.

---

**FILTER 2 — No Unproven Claims**

Klaim tanpa bukti spesifik harus dihapus atau diganti data:
```
❌  "Best quality in the industry"
❌  "World-class service"
❌  "Premium craftsmanship"
❌  "Exceptional results"

✅  "98% client return rate"
✅  "10,000+ m² delivered in 15 years"
✅  "4.9/5 from 200+ Google reviews"
```

---

**FILTER 3 — No Feature Without Benefit**

Setiap klaim fitur harus diikuti manfaat user:
```
❌  "We use the latest technology"
✅  "Real-time collaboration means your team always sees the same version"

❌  "Hand-crafted furniture"
✅  "Hand-crafted from solid oak — built to outlast trends by decades"
```

---

**FILTER 4 — No Redundancy**

Jangan katakan hal yang sama dua kali dalam section yang sama dengan kata berbeda.
Jika dua kalimat bisa digabung tanpa kehilangan makna → gabungkan.

---

**FILTER 5 — No Hype**

Jika klaim tidak bisa diverifikasi dengan cara apapun → jangan tulis.
Jika penulis sendiri tidak sepenuhnya percaya dengan kalimatnya → jangan tulis.

---

### P5. UI ELEMENT INTEGRITY AUDIT

Untuk setiap elemen UI, jawab pertanyaannya. Jika jawaban "tidak" → ambil tindakan.

| Elemen | Pertanyaan | Jika Tidak |
|---|---|---|
| **Setiap tombol** | Apakah kliknya membawa user lebih dekat ke tujuan utama? | Hapus atau ganti |
| **Setiap ikon** | Apakah ia memperjelas atau hanya mendekorasi? | Hapus ikon dekoratif |
| **Setiap animasi** | Apakah ia mengarahkan perhatian atau memberi reward interaksi? | Hapus jika tidak keduanya |
| **Setiap badge/tag** | Apakah ia menambah kredibilitas atau informasi nyata? | Hapus jika hanya dekoratif |
| **Setiap divider/garis** | Apakah dibutuhkan untuk separasi atau ritme visual? | Hapus jika section spacing sudah cukup |
| **Setiap penggunaan warna** | Apakah ini intentional — aksen, state, atau hierarchy? | Hapus penggunaan warna arbitrary |
| **Setiap section** | Apakah ini lulus Earn Your Place Test (P1)? | Hapus jika gagal |

---

### P6. THE ANTI-BLOAT MANIFESTO

Baca sekali sebelum finalisasi setiap desain:

```
Satu CTA yang tepat lebih kuat dari lima CTA yang ragu-ragu.

Satu testimonial yang genuine mengalahkan dinding enam bintang lima yang seragam.

Empat layanan yang dijelaskan dengan baik mengalahkan dua belas yang hanya dicantumkan.

Tiga statistik nyata bernilai lebih dari klaim "100% berkomitmen pada kualitas."

Ruang kosong bukan ruang yang terbuang — ia adalah kepercayaan diri yang terlihat.

Setiap elemen yang ada memperlambat keputusan user — kecuali ia mempercepatnya.

Setiap piksel entah membangun kepercayaan atau mengikisnya. Pilih dengan hati-hati.

Jika ada keraguan — hapus. Bukan tambahkan.
```

---

---

## BAGIAN Q — NICHE PRESET PACK

> Semua keputusan desain sudah dibuat di sini. AI tidak perlu menebak. Baca preset niche → eksekusi langsung. Tidak ada improvisasi untuk hal-hal yang sudah dikunci.

Setiap preset mengunci: archetype, splashscreen, hero, font, warna (hex), sections wajib, copy direction, dan Signature Move (lihat Bagian R).

---

### Q1. CAFE / COFFEE SHOP / KAFE

**Visual Direction Brief (sudah dijawab):**
- Emosi: Kehangatan yang membuat orang ingin duduk lama
- Aksi utama: Kunjungi / Temukan kami
- Perasaan scroll pertama: Tenang + Penasaran
- Metafora visual: Secangkir kopi di meja kayu di pagi yang pelan
- Bukan: Fast food, franchise besar, tempat yang terburu-buru

---

**ARCHETYPE: A4 Moody Luxury** (dikunci, tidak bisa diganti)

---

**SPLASHSCREEN:**
```
Background gradient:
  radial-gradient(ellipse 70% 60% at 40% 60%, rgba(139,90,43,0.35) 0%, transparent 60%),
  linear-gradient(160deg, #1A1208 0%, #0F0B06 60%, #1A1208 100%)

Ornamen: partikel uap kopi — 3–4 lingkaran kecil melayang ke atas, opacity 0.15, animasi sangat lambat (8 detik)

Animasi teks: TEKNIK B (Character Stagger Fade) — hangat, tidak terburu-buru
Font: Cormorant Garamond, weight 300, italic
Teks: Nama Kafe + tagline pendek di bawahnya

Durasi: 2.2 detik
Transition keluar: Curtain wipe ke atas
```

---

**HERO SECTION:**
```css
background:
  radial-gradient(ellipse 80% 50% at 30% 70%, rgba(180,120,50,0.22) 0%, transparent 55%),
  radial-gradient(ellipse 50% 40% at 80% 30%, rgba(139,80,30,0.12) 0%, transparent 50%),
  linear-gradient(170deg, #1C1108 0%, #120D06 50%, #1C1108 100%);

/* Animasi: gradient shift sangat lambat, 12 detik cycle */
animation: cafeGlow 12s ease-in-out infinite alternate;

Headline: CENTER, Cormorant Garamond Italic, clamp(72px, 10vw, 140px)
Warna teks: #F0E8D8 (warm ivory)
Label: ALL CAPS "SINCE [TAHUN]" atau nama kota, muted amber
CTA: "Temukan Kami →" atau "Lihat Menu"
Scroll indicator: "↓" saja, tanpa teks, amber
```

---

**FONT STACK (dikunci):**
```
Display:  Cormorant Garamond (Italic untuk headline, Regular untuk sub)
Body:     Lora Regular / Light
Label:    Suisse Int'l atau DM Sans (ALL CAPS kecil)
```

---

**PALET WARNA (dikunci, hex tidak boleh diubah tanpa alasan kuat):**
```
--color-bg:           #0F0B06   (near-black warm)
--color-bg-alt:       #1A1208   (sedikit lebih terang)
--color-text:         #F0E8D8   (warm ivory)
--color-text-muted:   #9E8B72   (muted tan)
--color-accent:       #C8973A   (amber kopi)
--color-accent-soft:  #8B5A2B   (burnt sienna)
--color-border:       rgba(200,151,58,0.15)
```

---

**SECTIONS WAJIB (urutan dikunci):**
```
1. Splashscreen animasi (D1)
2. Navbar — logo kiri, menu: Menu / Tentang / Lokasi / Kontak
3. Hero — gradient dark warm + headline italic CENTER
4. Brand Story — "Bukan sekadar kopi. Sebuah ritual."
5. Signature Menu — 3–4 andalan, bukan full menu
6. Suasana / Ruang — deskripsi atmosfer, bukan foto insert
7. Jam & Lokasi — informasi praktis dengan peta embed
8. Testimonial — 1 quote panjang dari pelanggan setia
9. CTA Final — "Temukan kami. Hari ini."
10. Footer — sosmed, jam buka, alamat singkat
```

**Sections yang DILARANG untuk Cafe:**
- Pricing table
- FAQ panjang
- Team grid (kecuali ada barista signature)
- Stats counter (tidak perlu "10.000+ cups served" untuk kafe indie)

---

**COPY DIRECTION:**
```
Headline hero:    "Di sini, waktu berjalan lebih pelan."
                  "Kopi yang dibuat untuk dinikmati, bukan dikejar."
                  "Bukan sekadar minuman. Sebuah jeda."

Brand story:      Mulai dari mengapa buka, bukan dari kapan buka.
                  Tonjolkan karakter pemilik / barista.

Menu section:     Nama kreatif + deskripsi 1 baris yang sensori.
                  Contoh: "Signature Dark — Pahit yang hangat, seperti percakapan jujur."

CTA:              "Datang. Duduk. Nikmati."
                  "Temukan sudut favorit kamu."
```

---

**SIGNATURE MOVE untuk Cafe (dari Bagian R):**
→ **"Jam Hidup"** — di section Hero atau Brand Story, tampilkan jam real-time yang menunjukkan apakah kafe sedang buka atau tutup. Bukan teks statis — jam bergerak, warna berubah (amber = buka, muted = tutup). Tidak ada website kafe lain yang punya ini.

---

### Q2. KLINIK / KESEHATAN / PRAKTIK DOKTER

**Visual Direction Brief (sudah dijawab):**
- Emosi: Kepercayaan yang tenang — pasien merasa aman sebelum masuk
- Aksi utama: Buat janji / Hubungi kami
- Perasaan scroll pertama: Tenang + Percaya
- Metafora visual: Ruang konsultasi yang bersih, hangat cahayanya, tidak dingin seperti RS umum
- Bukan: Klinik yang terasa seperti pabrik, desain medis steril generik, warna biru RS yang klise

---

**ARCHETYPE: A1 Editorial Luxury** (dikunci, tidak bisa diganti)
*(Klinik butuh kepercayaan editorial, bukan kesan dark atau terlalu playful)*

---

**SPLASHSCREEN:**
```
Background gradient:
  radial-gradient(ellipse 60% 60% at 50% 40%, rgba(82,130,110,0.2) 0%, transparent 60%),
  linear-gradient(150deg, #F4F1EC 0%, #EAE6DF 50%, #F4F1EC 100%)

Ornamen: concentric ring breathing — 2 lingkaran konsentris yang "bernafas" (scale 0.97↔1.03), opacity 0.08, sage green
         Kesan: detak yang tenang

Animasi teks: TEKNIK A (Clip-path Reveal per kata) — bersih, presisi
Font: Fraunces atau Cormorant Garamond, weight 600
Teks: Nama Klinik + "dr. [Nama]" atau spesialisasi

Durasi: 1.8 detik
Transition keluar: Fade dissolve
```

---

**HERO SECTION:**
```css
background:
  radial-gradient(ellipse 70% 60% at 20% 80%, rgba(82,130,110,0.12) 0%, transparent 55%),
  radial-gradient(ellipse 50% 40% at 85% 20%, rgba(139,176,160,0.08) 0%, transparent 50%),
  linear-gradient(150deg, #F7F4EF 0%, #EEE9E1 60%, #F7F4EF 100%);

animation: clinicBreath 10s ease-in-out infinite alternate;

Headline: CENTER, Fraunces atau Cormorant, clamp(60px, 8vw, 110px), weight 600
Warna teks: #1F2B25 (deep forest)
Label: "KLINIK [SPESIALISASI]" — ALL CAPS, sage, sangat kecil
CTA: "Buat Janji Sekarang" — pill button, sage green
Scroll indicator: "↓ Pelajari lebih lanjut"
```

---

**FONT STACK (dikunci):**
```
Display:  Fraunces (serif organik, hangat, terpercaya)
Body:     DM Sans Regular / Light (bersih, mudah dibaca)
Label:    DM Sans ALL CAPS
Angka:    Fraunces Tabular (untuk statistik dokter)
```

---

**PALET WARNA (dikunci):**
```
--color-bg:           #F7F4EF   (warm off-white)
--color-bg-alt:       #EEEAE2   (slightly darker warm)
--color-text:         #1F2B25   (deep forest green)
--color-text-muted:   #6B7D74   (muted sage)
--color-accent:       #52826E   (sage green — bukan biru RS)
--color-accent-soft:  #8BB0A0   (light sage)
--color-border:       rgba(82,130,110,0.15)
```

*(Tidak pakai biru — biru sudah terlalu identik dengan RS besar yang dingin. Sage green = kepercayaan yang organik dan hangat.)*

---

**SECTIONS WAJIB (urutan dikunci):**
```
1. Splashscreen animasi (D1)
2. Navbar — Logo + nama dokter, menu: Layanan / Tentang / Testimoni / Kontak
3. Hero — gradient warm ivory + headline "Kesehatan yang [value utama]"
4. Kredensial & Kepercayaan — lulus dari mana, pengalaman berapa tahun, angka konkret
5. Layanan — 3–5 layanan utama saja, bukan daftar 20 item
6. Tentang Dokter — foto (jika ada), pendidikan, filosofi praktik
7. Cara Kerja — 3 langkah: Buat Janji → Konsultasi → Tindak Lanjut
8. Testimoni — 2–3 quote pendek dengan nama dan kondisi (dengan izin)
9. CTA Booking — form pendek atau nomor WA langsung
10. Footer — jam praktik, lokasi, nomor kontak
```

**Sections yang DILARANG untuk Klinik:**
- Stats counter berlebihan ("10.000+ pasien" terasa seperti pabrik)
- Harga di halaman utama (kecuali diminta)
- Blog artikel medis panjang di homepage
- Tim grid lebih dari 4 orang di homepage

---

**COPY DIRECTION:**
```
Headline hero:    "Kesehatan yang terasa seperti percakapan, bukan prosedur."
                  "Karena sembuh bukan hanya soal obat."
                  "Tempat kamu didengar, bukan sekadar diperiksa."

Kredensial:       Tampilkan angka yang membangun kepercayaan:
                  "12 tahun praktik" / "dr. [Nama], Sp.XX" / "500+ pasien terdampingi"

Layanan:          Nama layanan + satu kalimat manfaat pasien, bukan deskripsi medis.
                  Contoh: "Konsultasi Umum — Dengarkann keluhanmu dengan waktu yang cukup."

CTA:              "Buat Janji — Hari Ini"
                  "Mulai konsultasi. Tanpa antrean panjang."
```

---

**SIGNATURE MOVE untuk Klinik (dari Bagian R):**
→ **"Availability Indicator"** — di section Hero atau CTA, tampilkan status praktik hari ini secara real-time berdasarkan jam dan hari: "● Praktik hari ini pukul 09.00–16.00" atau "● Tidak praktik hari ini". Dot beranimasi pulse gentle. Pasien tidak perlu telepon dulu untuk tahu — langsung tahu dari website.

---

### Q3. DEALER KENDARAAN / SHOWROOM MOTOR & MOBIL

**Visual Direction Brief (sudah dijawab):**
- Emosi: Ambisi yang terkontrol — excitement memiliki kendaraan baru, tapi tidak murahan
- Aksi utama: Lihat koleksi / Hubungi sales
- Perasaan scroll pertama: Kagum + Percaya
- Metafora visual: Showroom premium malam hari — sorotan lampu pada kendaraan, lantai mengkilap
- Bukan: Iklan brosur murahan, diskon berteriak-teriak, desain toko pinggir jalan

---

**ARCHETYPE: A2 Cinematic Dark** (dikunci, tidak bisa diganti)
*(Kendaraan butuh kesan cinematic dan dramatis — dark background membuat kendaraan "bersinar")*

---

**SPLASHSCREEN:**
```
Background gradient:
  radial-gradient(ellipse 40% 40% at 50% 60%, rgba(200,160,50,0.15) 0%, transparent 55%),
  linear-gradient(160deg, #080808 0%, #0F0F0F 50%, #080808 100%)

Ornamen: speed lines flash singkat (opacity 0.04, putih) — muncul 0.3 detik lalu hilang
         Diikuti: single horizontal light streak dari kiri ke kanan, 0.5 detik, amber subtle

Animasi teks: TEKNIK E (Split Horizontal) — atas dari kiri, bawah dari kanan, bertemu di tengah
Font: Bebas Neue atau Barlow Condensed, weight 700–900
Teks: Nama Dealer / Brand kendaraan dalam huruf kapital besar

Durasi: 2.0 detik
Transition keluar: Split door (layar kiri ke kiri, kanan ke kanan)
```

---

**HERO SECTION:**
```css
background:
  radial-gradient(ellipse 60% 50% at 50% 70%, rgba(200,160,50,0.12) 0%, transparent 50%),
  radial-gradient(ellipse 30% 30% at 20% 30%, rgba(255,255,255,0.03) 0%, transparent 40%),
  linear-gradient(180deg, #080808 0%, #111111 50%, #0A0A0A 100%);

/* Grid lines subtle sebagai ornamen lantai showroom */
background-image: linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
background-size: 60px 60px;

animation: showroomLight 15s ease-in-out infinite alternate;

Headline: CENTER, Bebas Neue atau Barlow Condensed, clamp(80px, 12vw, 180px)
          ALL CAPS — bukan mixed case
Warna teks: #FFFFFF (pure white) — satu kata kunci bisa amber #C8A032
Label: "SHOWROOM [KOTA]" atau "KOLEKSI [TAHUN]" — sangat kecil, amber muted
CTA: "Lihat Koleksi" (primary) + "Hubungi Sales" (ghost)
Scroll indicator: "↓ Jelajahi" — amber, kecil
```

---

**FONT STACK (dikunci):**
```
Display:  Bebas Neue (untuk headline all-caps) atau Barlow Condensed Bold
Body:     Barlow Regular atau Neue Montreal
Label:    Barlow Semi Condensed, ALL CAPS
Angka:    Barlow Condensed Tabular (untuk harga, spesifikasi)
```

---

**PALET WARNA (dikunci):**
```
--color-bg:           #080808   (near-black)
--color-bg-alt:       #111111   (slightly lighter dark)
--color-text:         #FFFFFF   (pure white)
--color-text-muted:   #9A9A9A   (muted grey)
--color-accent:       #C8A032   (amber gold)
--color-accent-soft:  #8B6E22   (darker gold)
--color-border:       rgba(200,160,50,0.2)
```

---

**SECTIONS WAJIB (urutan dikunci):**
```
1. Splashscreen animasi (D1) — split door transition
2. Navbar — nama dealer kiri, menu: Koleksi / Spesifikasi / Test Drive / Kontak
3. Hero — cinematic dark gradient + nama brand besar CENTER
4. Brand / Dealer Identity — sejak kapan, brand yang dijual, coverage area
5. Koleksi Unggulan — 3–6 unit terbaik dengan nama, tipe, dan harga range
6. Keunggulan Beli di Sini — 3–4 poin konkret (bukan generic "pelayanan terbaik")
7. Proses Pembelian — 4 langkah: Pilih → Test Drive → DP & Kredit → Terima Unit
8. Testimoni — 2–3 pembeli nyata, nama + unit yang dibeli
9. CTA — "Jadwalkan Test Drive" atau "Hubungi Sales Kami"
10. Footer — alamat showroom, jam buka, nomor telepon/WA, map embed
```

**Sections yang DILARANG untuk Kendaraan:**
- Pricing table tier (harga per unit, bukan paket)
- Blog artikel otomotif di homepage
- Terlalu banyak spec teknis di homepage (sisakan untuk halaman detail unit)
- Banner diskon berteriak dengan warna merah terang

---

**COPY DIRECTION:**
```
Headline hero:    "MILIK KAMU. SEKARANG."
                  "BUKAN SEKADAR KENDARAAN. PERNYATAAN."
                  "SETIAP PERJALANAN DIMULAI DI SINI."
                  (Semua ALL CAPS sesuai archetype Cinematic Dark)

Brand identity:   Tonjolkan keunggulan dealer, bukan sekadar daftar unit.
                  Contoh: "Kami tidak menjual kendaraan. Kami membantu kamu memilih yang tepat."

Koleksi:          Nama unit + satu kalimat karakter.
                  Contoh: "Honda Vario 160 — Gesit di jalur mana pun, elegan di setiap lampu merah."

Keunggulan:       Konkret dan verifikable.
                  ✅ "Proses kredit 1 hari kerja"
                  ✅ "Test drive tersedia setiap hari, tanpa janji"
                  ❌ "Pelayanan terbaik dan terpercaya"

CTA:              "Test Drive Hari Ini — Gratis"
                  "Hubungi Sales. Respon dalam 5 menit."
```

---

**SIGNATURE MOVE untuk Kendaraan (dari Bagian R):**
→ **"Spotlight Hover Effect"** — di section Koleksi Unggulan, setiap card unit ketika di-hover mengaktifkan radial gradient "spotlight" dari posisi cursor — seolah sorotan lampu showroom jatuh tepat ke unit yang sedang dilihat. Background tetap gelap, spotlight amber bergerak mengikuti mouse. Memberi sensasi sedang berdiri di showroom sungguhan.

---

## BAGIAN R — THE SIGNATURE MOVE SYSTEM

> Website yang bagus mudah dilupakan. Website yang punya satu hal tak terduga — selalu diingat.

Ini bukan tentang menambah fitur. Ini tentang satu keputusan desain yang mengejutkan namun tepat — yang tidak ada di website lain dalam niche yang sama.

---

### R1. Apa itu Signature Move?

**Signature Move** adalah satu elemen yang:
- Tidak ada di website kompetitor dalam niche yang sama
- Langsung terasa relevan dengan brand (bukan gimmick)
- Membuat pengunjung ingin kembali atau cerita ke orang lain
- Bisa dijelaskan dalam satu kalimat: *"Di website kafe itu ada jam yang langsung kasih tahu apakah mereka lagi buka."*

Signature Move BUKAN:
- Cursor custom yang lucu
- Parallax yang berlebihan
- Video background autoplay
- Intro animasi yang terlalu lama

---

### R2. Prinsip Signature Move

```
SATU per website — bukan tiga, bukan lima. Satu.
RELEVAN dengan brand — tidak bisa dipindah ke website brand lain tanpa terasa aneh.
FUNGSIONAL atau EMOSIONAL — memberi nilai nyata atau menciptakan momen "wow".
RINGAN — tidak boleh memperburuk performa atau aksesibilitas.
BERADA di posisi strategis — hero, atau section paling sering dilihat.
```

---

### R3. Katalog Signature Move per Niche

Gunakan ini sebagai referensi. Pilih satu per project. Bisa dimodifikasi sesuai brand.

---

**HOSPITALITY & F&B (Cafe, Restaurant, Bar):**

| Signature Move | Deskripsi | Efek |
|---|---|---|
| **Jam Hidup** | Jam real-time + status buka/tutup otomatis | Praktis, memorable |
| **Sound Toggle** | Tombol kecil untuk memutar ambient sound (hujan, jazz, kafe) — OPT-IN, tidak auto-play | Sensori, imersif |
| **Mood of the Day** | Satu kata yang berubah tiap hari berdasarkan tanggal: "Hari ini: *Melankolis*" | Unik, bikin penasaran |
| **Waktu Terakhir Dibuat** | Di section menu: "Batch terakhir dibuat [jam] hari ini" — jika relevan | Kesegaran, kepercayaan |

---

**KESEHATAN & KLINIK:**

| Signature Move | Deskripsi | Efek |
|---|---|---|
| **Availability Indicator** | Status praktik real-time berdasarkan jam + hari, dot pulse gentle | Praktis, mengurangi friction |
| **Pertanyaan Pembuka** | Sebelum CTA booking: "Apa yang ingin kamu konsultasikan?" — 3 pilihan yang langsung filter kebutuhan | Personalisasi, kepercayaan |
| **Breathing Animation** | Di satu section tenang, ada lingkaran yang "bernafas" dengan teks "Tarik napas. Kamu di tempat yang tepat." | Emosional, memorable |
| **Timeline Pemulihan** | Untuk prosedur tertentu: visualisasi interaktif timeline dari konsultasi hingga hasil | Edukasi, mengurangi ketakutan |

---

**KENDARAAN & OTOMOTIF:**

| Signature Move | Deskripsi | Efek |
|---|---|---|
| **Spotlight Hover** | Radial gradient "sorotan" mengikuti cursor di atas card unit | Sensasi showroom, imersif |
| **Speed Odometer** | Di section stats, angka tidak hanya count-up — tapi bergerak seperti jarum odometer/speedometer | Karakter, relevan niche |
| **Unit Finder** | 3 pertanyaan: budget range → penggunaan → preferensi → langsung tampilkan rekomendasi unit | Konversi tinggi, personal |
| **Comparator** | Pilih 2 unit, tampilkan perbandingan side-by-side animasi | Membantu keputusan |

---

**CREATIVE AGENCY / PORTFOLIO:**

| Signature Move | Deskripsi | Efek |
|---|---|---|
| **Project Counter Live** | Angka project yang sedang dikerjakan sekarang — update manual tapi terasa live | Sosial proof aktif |
| **Availability Status** | "Kami saat ini: Tersedia untuk project baru mulai [bulan]" — update setiap bulan | Menciptakan urgensi ringan |
| **Case Study Reveal** | Project card di-hover → persentase hasil (misal: "+340% traffic") muncul dengan animasi | Value proof |
| **Work in Progress** | Satu section khusus project yang sedang berjalan — diupdate rutin | Kepercayaan, aktualitas |

---

**PRODUK / E-COMMERCE:**

| Signature Move | Deskripsi | Efek |
|---|---|---|
| **Stok Real-time** | "X unit tersisa" yang update otomatis — tanpa perlu backend kompleks (bisa manual) | Urgensi nyata |
| **Material Journey** | Hover pada produk → muncul asal bahan, proses, dan waktu produksi | Storytelling, diferensiasi |
| **Size Visualizer** | Klik ukuran → outline ukuran muncul di atas siluet skala manusia | Mengurangi kebimbangan |

---

### R4. Cara Mengimplementasi Signature Move

```
LANGKAH 1 — Pilih satu Signature Move dari katalog (R3) sesuai niche.

LANGKAH 2 — Tentukan posisinya di halaman:
  Umumnya: Hero, atau section kedua/ketiga yang paling sering dilihat.
  Bukan: Footer atau section yang jarang discroll.

LANGKAH 3 — Pastikan ia lulus 3 filter:
  ✓ Apakah ini relevan untuk brand ini secara spesifik?
  ✓ Apakah ini menambah nilai (fungsional atau emosional)?
  ✓ Apakah ini bisa dijelaskan dalam 1 kalimat yang membuat orang penasaran?

LANGKAH 4 — Implementasi ringan dulu (MVP):
  Jam hidup → JavaScript Date object, bukan API eksternal.
  Availability → CSS class toggle berdasarkan hari dan jam.
  Spotlight → mousemove event + CSS radial-gradient via JS variable.
  Breathing animation → CSS keyframe saja.

LANGKAH 5 — Test di mobile:
  Signature Move yang berbasis hover → buat versi tap/tap-hold untuk mobile.
  Jika tidak bisa diadaptasi ke mobile dengan baik → pilih Signature Move lain.
```

---

### R5. Signature Move Checklist

Sebelum finalisasi:
- [ ] Hanya satu Signature Move per website.
- [ ] Posisinya di lokasi strategis (hero atau section atas).
- [ ] Tidak mengganggu performa (Lighthouse score tidak turun >5 poin).
- [ ] Ada versi mobile yang berfungsi (atau dinonaktifkan dengan graceful fallback).
- [ ] Bisa dijelaskan dalam satu kalimat oleh orang awam.
- [ ] Terasa seperti bagian dari brand — bukan fitur yang ditempel.

---

*DESIGN.md v5.0 — Last updated for editorial, cinematic, and luxury reference standards.*
*Visual references: Interior design studio editorial, Maker/craft dark cinematic, Photography B&W editorial, Fine dining moody luxury.*
*v3.0: UI/UX Pro Max Visual Direction System (O), Impeccable Taste Feature Integrity System (P).*
*v4.0: Font-Theme Matrix (C5), Animated Splashscreen (D1), Hero Gradient-Only (D3), Animation-Per-Element System (E5, E6).*
*v5.0: Niche Preset Pack — Cafe, Klinik, Kendaraan (Q). The Signature Move System (R).*
