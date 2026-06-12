/* ─────────────────────────────────────────────────────────────
   Portfolio Data — 8 concept previews
   ───────────────────────────────────────────────────────────── */

export type PortfolioItem = {
  slug: string;
  category: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  targetBusiness: string;
  visualArchetype: string;
  designTone: string;
  keyFeatures: string[];
  sectionsIncluded: string[];
  businessProblem: string;
  websiteSolution: string;
  previewHighlights: string[];
  metrics: { label: string; value: string }[];
  ctaText: string;
  themeColors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  route: string;
  mockupType: "landing" | "multi-section" | "minimal";
  previewRoute: string;
  previewTitle: string;
  previewSubtitle: string;
  previewSections: { label: string; description: string }[];
  previewCtaLabel: string;
  previewBusinessName: string;
  previewHeroLabel: string;
  previewMockContent: { items: string[] };
};

export const portfolioItems: PortfolioItem[] = [
  /* ─── 1. Cafe & Eatery ─────────────────────────────────── */
  {
    slug: "kafe-senja",
    category: "Cafe & Eatery",
    title: "Kafe Senja",
    shortDescription:
      "Landing page premium untuk coffee shop dan restoran kecil yang ingin terlihat lebih siap dipercaya dari satu link.",
    longDescription:
      "Kafe Senja adalah konsep preview landing page untuk bisnis cafe, coffee shop, atau restoran kecil. Website ini dirancang agar pengunjung langsung menangkap suasana, menu unggulan, dan alasan untuk datang — lalu diarahkan ke WhatsApp untuk reservasi atau order.",
    targetBusiness:
      "Coffee shop, restoran kecil, tempat dessert, warung kekinian, dan bisnis kuliner lokal.",
    visualArchetype: "Moody Luxury / Hospitality",
    designTone:
      "Hangat, intim, dan sedikit mewah — seperti suasana cafe saat senja. Warna dominan terakota dan emas dengan background gelap lembut.",
    keyFeatures: [
      "Menu highlight",
      "Galeri ambience",
      "Lokasi & jam buka",
      "WhatsApp order CTA",
      "Social proof / review",
      "Area promo / banner",
    ],
    sectionsIncluded: [
      "Hero dengan tagline",
      "Menu unggulan",
      "Galeri suasana",
      "Lokasi & jam operasional",
      "Testimoni pelanggan",
      "CTA WhatsApp",
      "Footer minimalis",
    ],
    businessProblem:
      "Cafe baru buka atau sudah ramai tapi info menu, harga, suasana, dan jam buka tersebar di Instagram, Google Maps, dan mulut ke mulut — tidak ada satu tempat yang bikin orang langsung yakin datang.",
    websiteSolution:
      "Satu landing page yang merangkum menu signature dengan harga, galeri suasana cafe, peta lokasi, jam buka, dan tombol reservasi WhatsApp — pengunjung scroll, tertarik, lalu klik WA.",
    previewHighlights: [
      "Gradient hero gelap-hangat tanpa foto",
      "Kartu menu dengan visual tipografi kuat",
      "CTA WhatsApp yang jelas dan mudah diakses",
    ],
    metrics: [
      { label: "Seksi halaman", value: "7+" },
      { label: "Mobile-first", value: "100%" },
      { label: "CTA langsung ke WA", value: "Ya" },
      { label: "Waktu muat target", value: "<2 detik" },
    ],
    ctaText: "Buat Website Cafe Seperti Ini",
    themeColors: {
      primary: "#C8501A",
      secondary: "#FFD166",
      accent: "rgba(200,80,26,0.24)",
    },
    route: "/portfolio/kafe-senja",
    mockupType: "landing",
    previewRoute: "/preview/cafe-eatery",
    previewTitle: "Ngopi Lebih Tenang, Reservasi Lebih Mudah",
    previewSubtitle:
      "Landing page cafe yang langsung bikin pengunjung lapar mata — menu, suasana, dan lokasi dalam satu scroll.",
    previewSections: [
      {
        label: "Menu & Suasana",
        description:
          "Tampilkan menu signature, harga, dan foto ambience yang bikin orang ingin datang.",
      },
      {
        label: "Galeri Ambience",
        description:
          "Grid foto suasana cafe — indoor, outdoor, dan detail interior yang membangun karakter.",
      },
      {
        label: "Info Praktis",
        description:
          "Lokasi peta, jam buka, dan tombol reservasi WhatsApp yang selalu terlihat di mobile.",
      },
    ],
    previewCtaLabel: "Reservasi Meja Sekarang",
    previewBusinessName: "Kafe Senja",
    previewHeroLabel: "Cafe & Coffee Shop",
    previewMockContent: {
      items: [
        "Kopi Senja Signature — Rp 28.000",
        "Croffle Coklat Keju — Rp 22.000",
        "Matcha Latte — Rp 30.000",
        "Ambience Indoor",
        "Ambience Outdoor",
        "Lokasi & Jam Buka",
      ],
    },
  },

  /* ─── 2. Clinic & Healthcare ───────────────────────────── */
  {
    slug: "klinika-sehat",
    category: "Clinic & Healthcare",
    title: "Klinika Sehat",
    shortDescription:
      "Website bersih dan terpercaya untuk klinik, dokter gigi, dan pusat kesehatan yang ingin pasien merasa yakin sejak klik pertama.",
    longDescription:
      "Klinika Sehat adalah konsep preview website untuk klinik kesehatan, dokter gigi, atau pusat terapi. Dirancang agar pasien langsung melihat layanan, jadwal dokter, dan cara menghubungi — dengan visual yang bersih, tenang, dan profesional.",
    targetBusiness:
      "Klinik umum, dokter gigi, pusat terapi, apotek, dan layanan kesehatan lokal.",
    visualArchetype: "Health / Wellness, Light Professional",
    designTone:
      "Tenang, bersih, dan mudah dipercaya. Palet sage dan cobalt lembut dengan banyak whitespace dan tipografi yang jelas.",
    keyFeatures: [
      "Daftar layanan",
      "Kartu dokter & jadwal",
      "CTA buat janji",
      "Highlight fasilitas",
      "FAQ pasien",
      "Peta lokasi",
    ],
    sectionsIncluded: [
      "Hero dengan trust signal",
      "Daftar layanan",
      "Profil dokter & jadwal",
      "Highlight fasilitas",
      "FAQ pasien",
      "Lokasi & peta",
      "CTA buat janji via WA",
    ],
    businessProblem:
      "Pasien ingin tahu layanan apa yang tersedia, siapa dokternya, kapan jadwalnya, dan apakah bisa buat janji online — tapi informasi ini sering tidak tersedia atau tersebar di beberapa platform.",
    websiteSolution:
      "Website klinik dengan kartu layanan, profil dokter plus jadwal praktek, FAQ pasien baru, highlight fasilitas, dan CTA WhatsApp untuk buat janji — semua dalam satu alur yang jelas dan menenangkan.",
    previewHighlights: [
      "Layout bersih dengan banyak whitespace",
      "Kartu jadwal dokter yang informatif",
      "Trust badges dan social proof",
    ],
    metrics: [
      { label: "Seksi halaman", value: "7+" },
      { label: "Mobile-first", value: "100%" },
      { label: "CTA janji temu", value: "WhatsApp" },
      { label: "Waktu muat target", value: "<2 detik" },
    ],
    ctaText: "Buat Website Klinik Seperti Ini",
    themeColors: {
      primary: "#2EC4B6",
      secondary: "#4361EE",
      accent: "rgba(46,196,182,0.24)",
    },
    route: "/portfolio/klinika-sehat",
    mockupType: "multi-section",
    previewRoute: "/preview/clinic-healthcare",
    previewTitle: "Pasien Yakin Sejak Klik Pertama",
    previewSubtitle:
      "Website klinik yang menjawab semua pertanyaan pasien — layanan, jadwal dokter, dan cara buat janji — sebelum mereka menelepon.",
    previewSections: [
      {
        label: "Layanan & Jadwal",
        description:
          "Kartu layanan medis dengan jadwal dokter yang jelas, membantu pasien memilih waktu yang tepat.",
      },
      {
        label: "Fasilitas Klinik",
        description:
          "Highlight ruang tunggu, peralatan medis, dan area parkir yang membangun kepercayaan.",
      },
      {
        label: "Info Pasien",
        description:
          "FAQ pendaftaran, asuransi yang diterima, dan panduan pertama kali berkunjung.",
      },
    ],
    previewCtaLabel: "Buat Janji Temu",
    previewBusinessName: "Klinika Sehat",
    previewHeroLabel: "Klinik & Kesehatan",
    previewMockContent: {
      items: [
        "Konsultasi Umum — Senin–Jumat",
        "Perawatan Gigi — Selasa & Kamis",
        "Cek Lab — Setiap Hari",
        "dr. Andini — 09:00–12:00",
        "dr. Reza — 14:00–17:00",
        "Pendaftaran Online",
      ],
    },
  },

  /* ─── 3. Property & Residence ──────────────────────────── */
  {
    slug: "griya-asri",
    category: "Property & Residence",
    title: "Griya Asri",
    shortDescription:
      "Landing page editorial luxury untuk housing cluster, kost premium, dan agen properti yang ingin lead datang dari website.",
    longDescription:
      "Griya Asri adalah konsep preview landing page untuk bisnis properti — housing cluster, kost premium, apartemen, atau vila. Dirancang agar calon pembeli atau penyewa langsung melihat tipe unit, fasilitas, keunggulan lokasi, dan cara menghubungi agen.",
    targetBusiness:
      "Housing cluster, kost premium, apartemen, vila, dan agen properti lokal.",
    visualArchetype: "Editorial Luxury / Real Estate",
    designTone:
      "Mewah, lapang, dan premium. Palet ink dan abu-abu netral dengan tipografi editorial besar dan banyak whitespace.",
    keyFeatures: [
      "Kartu tipe unit",
      "Seksi fasilitas",
      "Keunggulan lokasi",
      "Galeri / mockup",
      "CTA lead generation",
      "Info harga mulai",
    ],
    sectionsIncluded: [
      "Hero editorial besar",
      "Tipe unit dengan detail",
      "Fasilitas unggulan",
      "Keunggulan lokasi",
      "Galeri visual",
      "Harga mulai dari",
      "CTA WhatsApp ke agen",
    ],
    businessProblem:
      "Calon pembeli properti melihat brosur PDF atau listing marketplace yang tidak menunjukkan karakter hunian — mereka butuh visual premium, info unit lengkap, dan jalur kontak cepat sebelum memutuskan survei lokasi.",
    websiteSolution:
      "Landing page editorial dengan kartu tipe unit plus spesifikasi, highlight fasilitas bersama, keunggulan lokasi strategis, harga mulai dari, dan CTA WhatsApp langsung ke agen — lead masuk tanpa perantara.",
    previewHighlights: [
      "Tipografi editorial besar dan bold",
      "Kartu unit dengan layout rapi",
      "CTA agen yang langsung terhubung",
    ],
    metrics: [
      { label: "Seksi halaman", value: "7+" },
      { label: "Mobile-first", value: "100%" },
      { label: "Lead generation", value: "WhatsApp" },
      { label: "Waktu muat target", value: "<2 detik" },
    ],
    ctaText: "Buat Website Properti Seperti Ini",
    themeColors: {
      primary: "#1a1814",
      secondary: "#8a857e",
      accent: "rgba(26,24,20,0.18)",
    },
    route: "/portfolio/griya-asri",
    mockupType: "multi-section",
    previewRoute: "/preview/property-residence",
    previewTitle: "Calon Pembeli Lihat, Tertarik, Lalu Hubungi",
    previewSubtitle:
      "Landing page properti premium yang mengubah browser jadi lead — unit, fasilitas, lokasi, dan harga dalam satu halaman.",
    previewSections: [
      {
        label: "Unit & Fasilitas",
        description:
          "Kartu tipe unit dengan spesifikasi lengkap, floor plan, dan highlight fasilitas bersama.",
      },
      {
        label: "Keunggulan Lokasi",
        description:
          "Akses jalan tol, sekolah, rumah sakit, dan pusat perbelanjaan dalam radius dekat.",
      },
      {
        label: "Harga & Skema",
        description:
          "Harga mulai dari, opsi KPR, dan skema pembayaran yang transparan untuk mempercepat keputusan.",
      },
    ],
    previewCtaLabel: "Hubungi Agen Properti",
    previewBusinessName: "Griya Asri Residence",
    previewHeroLabel: "Housing & Properti",
    previewMockContent: {
      items: [
        "Tipe 36/72 — 2 KT, 1 KM",
        "Tipe 45/90 — 3 KT, 2 KM",
        "Tipe 60/120 — 3 KT, 2 KM + Carport",
        "Kolam Renang",
        "Taman Bermain",
        "Mulai dari Rp 450 Juta",
      ],
    },
  },

  /* ─── 4. Travel & Tour ─────────────────────────────────── */
  {
    slug: "nusantara-travel",
    category: "Travel & Tour",
    title: "Nusantara Travel",
    shortDescription:
      "Website elegan dan petualang untuk travel agent, tour operator, dan penyelenggara umrah yang ingin paketnya terlihat profesional.",
    longDescription:
      "Nusantara Travel adalah konsep preview website untuk agen travel, tour operator, atau penyelenggara perjalanan. Website menampilkan kartu paket, preview itinerary, highlight destinasi, testimoni, dan CTA konsultasi — membantu calon pelanggan membandingkan dan memilih perjalanan.",
    targetBusiness:
      "Travel agent, tour operator, penyelenggara umrah, wisata lokal, dan adventure tour.",
    visualArchetype: "Editorial + Soft Adventure",
    designTone:
      "Elegan, petualang, dan bersih. Palet cobalt dan sage dengan komposisi yang terbuka dan inspiring.",
    keyFeatures: [
      "Kartu paket wisata",
      "Preview itinerary",
      "Highlight destinasi",
      "Galeri perjalanan",
      "Testimoni pelanggan",
      "CTA konsultasi WA",
    ],
    sectionsIncluded: [
      "Hero dengan destination highlight",
      "Kartu paket wisata",
      "Preview itinerary",
      "Galeri destinasi",
      "Testimoni pelanggan",
      "FAQ perjalanan",
      "CTA konsultasi WhatsApp",
    ],
    businessProblem:
      "Paket travel sering tersebar di chat dan media sosial, membuat pelanggan sulit membandingkan perjalanan dan merasa yakin.",
    websiteSolution:
      "Website dengan kartu paket, itinerary preview, highlight destinasi, testimoni, dan CTA konsultasi — semua dalam satu tempat yang rapi dan profesional.",
    previewHighlights: [
      "Kartu paket dengan harga dan detail jelas",
      "Itinerary preview yang menarik",
      "CTA konsultasi yang langsung terhubung",
    ],
    metrics: [
      { label: "Seksi halaman", value: "7+" },
      { label: "Mobile-first", value: "100%" },
      { label: "CTA konsultasi", value: "WhatsApp" },
      { label: "Waktu muat target", value: "<2 detik" },
    ],
    ctaText: "Buat Website Travel Seperti Ini",
    themeColors: {
      primary: "#4361EE",
      secondary: "#2EC4B6",
      accent: "rgba(67,97,238,0.24)",
    },
    route: "/portfolio/nusantara-travel",
    mockupType: "multi-section",
    previewRoute: "/preview/travel-tour",
    previewTitle: "Dari Lihat Paket Jadi Pesan Perjalanan",
    previewSubtitle:
      "Website travel yang bikin calon pelanggan berhenti scroll — paket jelas, itinerary detail, dan konsultasi satu klik.",
    previewSections: [
      {
        label: "Paket & Itinerary",
        description:
          "Kartu paket wisata dengan durasi, harga, dan preview itinerary hari per hari yang mudah dibandingkan.",
      },
      {
        label: "Destinasi Highlight",
        description:
          "Galeri destinasi unggulan dengan deskripsi singkat yang membangun rasa ingin pergi.",
      },
      {
        label: "Testimoni Perjalanan",
        description:
          "Review pelanggan sebelumnya yang membangun kepercayaan calon peserta baru.",
      },
    ],
    previewCtaLabel: "Konsultasi Perjalanan",
    previewBusinessName: "Nusantara Travel",
    previewHeroLabel: "Travel & Tour",
    previewMockContent: {
      items: [
        "Bali 4D3N — Mulai Rp 3.2 Juta",
        "Raja Ampat Explorer 5D4N",
        "Labuan Bajo 3D2N",
        "Hari 1: Tiba & City Tour",
        "Hari 2: Snorkeling & Beach",
        "Testimoni: 'Pelayanan luar biasa!'",
      ],
    },
  },

  /* ─── 5. Automotive ────────────────────────────────────── */
  {
    slug: "auto-prima",
    category: "Automotive",
    title: "Auto Prima",
    shortDescription:
      "Website bold dan profesional untuk bengkel, dealer motor/mobil, dan layanan otomotif yang ingin terlihat lebih serius dan dipercaya.",
    longDescription:
      "Auto Prima adalah konsep preview website untuk bisnis otomotif — bengkel, dealer motor, dealer mobil, atau layanan servis. Dirancang agar pelanggan langsung melihat layanan, keunggulan, dan cara booking servis dengan visual yang bold dan maskulin.",
    targetBusiness:
      "Bengkel motor/mobil, dealer kendaraan, layanan servis, detailing, dan bisnis otomotif lokal.",
    visualArchetype: "Bold Professional / Industrial",
    designTone:
      "Bold, maskulin, dan profesional. Palet ink gelap dan terakota dengan tipografi kuat dan kontras tinggi.",
    keyFeatures: [
      "Daftar layanan servis",
      "Kartu keunggulan",
      "Galeri pekerjaan",
      "Info harga servis",
      "CTA booking WA",
      "Lokasi bengkel",
    ],
    sectionsIncluded: [
      "Hero bold dengan tagline",
      "Daftar layanan",
      "Keunggulan bengkel",
      "Galeri hasil kerja",
      "Info harga servis",
      "Lokasi & jam buka",
      "CTA booking WhatsApp",
    ],
    businessProblem:
      "Bengkel ramai dari word-of-mouth tapi tidak punya halaman yang menunjukkan daftar layanan, harga transparan, dan cara booking — pelanggan baru ragu datang karena tidak tahu apa yang ditawarkan.",
    websiteSolution:
      "Website bold dengan daftar layanan servis plus estimasi harga, galeri before-after pekerjaan, lokasi bengkel, dan CTA booking WhatsApp — pelanggan pilih layanan, klik WA, datang.",
    previewHighlights: [
      "Hero gelap-bold dengan kontras tinggi",
      "Kartu layanan yang informatif",
      "CTA booking yang jelas dan cepat",
    ],
    metrics: [
      { label: "Seksi halaman", value: "7+" },
      { label: "Mobile-first", value: "100%" },
      { label: "CTA booking", value: "WhatsApp" },
      { label: "Waktu muat target", value: "<2 detik" },
    ],
    ctaText: "Buat Website Otomotif Seperti Ini",
    themeColors: {
      primary: "#1a1814",
      secondary: "#C8501A",
      accent: "rgba(200,80,26,0.24)",
    },
    route: "/portfolio/auto-prima",
    mockupType: "landing",
    previewRoute: "/preview/automotive",
    previewTitle: "Bengkel Profesional, Booking Tanpa Ribet",
    previewSubtitle:
      "Website otomotif yang menunjukkan keahlian bengkel dan memudahkan pelanggan booking servis langsung dari HP.",
    previewSections: [
      {
        label: "Layanan & Booking",
        description:
          "Daftar layanan servis lengkap dengan estimasi waktu dan tombol booking WhatsApp per layanan.",
      },
      {
        label: "Harga Servis",
        description:
          "Transparansi harga per jenis servis — ganti oli, tune up, spooring — supaya pelanggan tidak ragu.",
      },
      {
        label: "Galeri Pekerjaan",
        description:
          "Before-after hasil kerja bengkel yang membuktikan kualitas dan ketelitian.",
      },
    ],
    previewCtaLabel: "Booking Servis Sekarang",
    previewBusinessName: "Auto Prima",
    previewHeroLabel: "Bengkel & Otomotif",
    previewMockContent: {
      items: [
        "Ganti Oli — Mulai Rp 85.000",
        "Tune Up Mesin — Rp 250.000",
        "Spooring & Balancing",
        "Before: Mesin kasar",
        "After: Halus & irit BBM",
        "Booking via WhatsApp",
      ],
    },
  },

  /* ─── 6. Education ─────────────────────────────────────── */
  {
    slug: "cendekia-school",
    category: "Education",
    title: "Cendekia School",
    shortDescription:
      "Website segar dan informatif untuk lembaga kursus, sekolah swasta, dan bimbel yang ingin orang tua dan calon siswa merasa yakin.",
    longDescription:
      "Cendekia School adalah konsep preview website untuk lembaga pendidikan — kursus, sekolah swasta, bimbel, atau pelatihan. Dirancang agar orang tua dan calon siswa langsung melihat program, keunggulan, jadwal, dan cara mendaftar.",
    targetBusiness:
      "Lembaga kursus, sekolah swasta, bimbel, pelatihan profesional, dan pendidikan anak.",
    visualArchetype: "Fresh / Smart / Approachable",
    designTone:
      "Segar, cerdas, dan ramah. Palet lime dan cobalt dengan komposisi yang bersih dan semangat.",
    keyFeatures: [
      "Daftar program",
      "Keunggulan lembaga",
      "Profil pengajar",
      "Jadwal & harga",
      "CTA pendaftaran WA",
      "Testimoni alumni",
    ],
    sectionsIncluded: [
      "Hero dengan value proposition",
      "Daftar program",
      "Keunggulan lembaga",
      "Profil pengajar",
      "Jadwal & info harga",
      "Testimoni alumni / orang tua",
      "CTA pendaftaran WhatsApp",
    ],
    businessProblem:
      "Orang tua dan calon siswa butuh informasi lengkap — program, keunggulan, jadwal, harga — sebelum memutuskan mendaftar.",
    websiteSolution:
      "Website informatif dengan program, keunggulan, profil pengajar, jadwal, dan CTA pendaftaran langsung ke WhatsApp admin.",
    previewHighlights: [
      "Layout bersih dengan warna segar",
      "Kartu program yang detail dan jelas",
      "CTA pendaftaran yang mudah diakses",
    ],
    metrics: [
      { label: "Seksi halaman", value: "7+" },
      { label: "Mobile-first", value: "100%" },
      { label: "CTA pendaftaran", value: "WhatsApp" },
      { label: "Waktu muat target", value: "<2 detik" },
    ],
    ctaText: "Buat Website Pendidikan Seperti Ini",
    themeColors: {
      primary: "#8AC926",
      secondary: "#4361EE",
      accent: "rgba(138,201,38,0.24)",
    },
    route: "/portfolio/cendekia-school",
    mockupType: "multi-section",
    previewRoute: "/preview/education",
    previewTitle: "Orang Tua Yakin, Anak Siap Mendaftar",
    previewSubtitle:
      "Website pendidikan yang menjawab keraguan orang tua — program, pengajar, jadwal, dan pendaftaran dalam satu alur.",
    previewSections: [
      {
        label: "Program & Pendaftaran",
        description:
          "Kartu program dengan kurikulum, durasi, dan jalur pendaftaran online yang simpel.",
      },
      {
        label: "Jadwal & Biaya",
        description:
          "Kalender akademik, jadwal kelas, dan transparansi biaya yang membantu orang tua merencanakan.",
      },
      {
        label: "Keunggulan Lembaga",
        description:
          "Profil pengajar, rasio kelas, prestasi alumni, dan metode pembelajaran yang membedakan.",
      },
    ],
    previewCtaLabel: "Daftar Sekarang",
    previewBusinessName: "Cendekia School",
    previewHeroLabel: "Pendidikan & Kursus",
    previewMockContent: {
      items: [
        "Kelas Reguler — SD, SMP, SMA",
        "Bimbel UTBK — Intensif 3 Bulan",
        "English Course — Conversation",
        "Jadwal: Senin–Sabtu, 15:00–20:00",
        "Pengajar lulusan PTN favorit",
        "Pendaftaran gelombang 1 buka",
      ],
    },
  },

  /* ─── 7. Beauty & Wellness ─────────────────────────────── */
  {
    slug: "aura-beauty",
    category: "Beauty & Wellness",
    title: "Aura Beauty",
    shortDescription:
      "Website feminin dan premium untuk klinik kecantikan, salon, dan wellness center yang ingin klien merasa tertarik sejak pertama lihat.",
    longDescription:
      "Aura Beauty adalah konsep preview website untuk bisnis kecantikan dan wellness — klinik kecantikan, salon, spa, atau pusat perawatan. Dirancang agar calon klien langsung melihat layanan, hasil perawatan, dan cara booking dengan visual yang cantik dan premium.",
    targetBusiness:
      "Klinik kecantikan, salon, spa, pusat perawatan, nail art, dan wellness center.",
    visualArchetype: "Feminine Premium / Soft Luxury",
    designTone:
      "Feminin, lembut, dan premium. Palet magenta dan pink lembut dengan komposisi yang elegan dan memikat.",
    keyFeatures: [
      "Daftar layanan kecantikan",
      "Galeri before/after",
      "Profil terapis",
      "Harga paket",
      "CTA booking WA",
      "Testimoni klien",
    ],
    sectionsIncluded: [
      "Hero elegan dengan tagline",
      "Daftar layanan",
      "Galeri before / after",
      "Profil terapis / beautician",
      "Harga paket perawatan",
      "Testimoni klien",
      "CTA booking WhatsApp",
    ],
    businessProblem:
      "Klinik kecantikan dan salon mengandalkan foto Instagram yang hilang dalam feed — calon klien tidak bisa melihat daftar treatment, harga, before-after, dan cara booking dalam satu tempat yang rapi.",
    websiteSolution:
      "Website feminin premium dengan kartu treatment plus harga, galeri before-after, profil beautician, testimoni klien, dan CTA booking WhatsApp — calon klien lihat hasil, percaya, lalu booking.",
    previewHighlights: [
      "Gradient magenta-pink yang elegan",
      "Galeri before/after yang menarik",
      "CTA booking yang feminin dan jelas",
    ],
    metrics: [
      { label: "Seksi halaman", value: "7+" },
      { label: "Mobile-first", value: "100%" },
      { label: "CTA booking", value: "WhatsApp" },
      { label: "Waktu muat target", value: "<2 detik" },
    ],
    ctaText: "Buat Website Beauty Seperti Ini",
    themeColors: {
      primary: "#C94B8C",
      secondary: "#F090C0",
      accent: "rgba(201,75,140,0.24)",
    },
    route: "/portfolio/aura-beauty",
    mockupType: "landing",
    previewRoute: "/preview/beauty-wellness",
    previewTitle: "Calon Klien Lihat Hasil, Langsung Booking",
    previewSubtitle:
      "Website beauty yang membangun keinginan — treatment, before-after, dan booking dalam satu halaman yang feminin dan premium.",
    previewSections: [
      {
        label: "Treatment & Booking",
        description:
          "Kartu treatment dengan harga, durasi, dan tombol booking WhatsApp per layanan.",
      },
      {
        label: "Hasil & Galeri",
        description:
          "Galeri before-after perawatan yang menunjukkan hasil nyata dan membangun kepercayaan.",
      },
      {
        label: "Testimoni Klien",
        description:
          "Review dan rating klien yang membantu calon pelanggan baru merasa aman memilih.",
      },
    ],
    previewCtaLabel: "Booking Treatment",
    previewBusinessName: "Aura Beauty Clinic",
    previewHeroLabel: "Beauty & Wellness",
    previewMockContent: {
      items: [
        "Facial Glow — Rp 150.000",
        "Nail Art Premium — Rp 120.000",
        "Body Spa 90 menit — Rp 200.000",
        "Before: Kulit kusam",
        "After: Glowing natural",
        "'Hasilnya langsung kelihatan!'",
      ],
    },
  },

  /* ─── 8. Business Profile ──────────────────────────────── */
  {
    slug: "mitra-korpora",
    category: "Business Profile",
    title: "Mitra Korpora",
    shortDescription:
      "Website company profile profesional dan terpercaya untuk perusahaan lokal yang ingin terlihat serius dan mudah dihubungi.",
    longDescription:
      "Mitra Korpora adalah konsep preview website company profile untuk bisnis umum — konsultan, kontraktor, distributor, atau perusahaan jasa. Dirancang agar calon klien atau partner langsung melihat profil perusahaan, layanan, portofolio, dan cara menghubungi.",
    targetBusiness:
      "Perusahaan konsultan, kontraktor, distributor, agency, firma hukum, dan bisnis jasa profesional.",
    visualArchetype: "Corporate Clean / Trustworthy",
    designTone:
      "Profesional, bersih, dan korporat. Palet cobalt dan ink dengan komposisi yang terstruktur dan terpercaya.",
    keyFeatures: [
      "Profil perusahaan",
      "Daftar layanan",
      "Portofolio / klien",
      "Tim manajemen",
      "CTA kontak WA",
      "Info legalitas",
    ],
    sectionsIncluded: [
      "Hero profesional",
      "Tentang perusahaan",
      "Daftar layanan",
      "Portofolio / klien",
      "Tim manajemen",
      "Info legalitas",
      "CTA kontak WhatsApp",
    ],
    businessProblem:
      "Perusahaan lokal sering tidak punya website yang mencerminkan profesionalisme mereka, membuat calon klien ragu sebelum menghubungi.",
    websiteSolution:
      "Website company profile yang terstruktur — profil, layanan, portofolio, tim, legalitas, dan CTA kontak — agar calon klien langsung percaya.",
    previewHighlights: [
      "Layout korporat yang terstruktur dan bersih",
      "Seksi portofolio / klien yang meyakinkan",
      "CTA kontak yang profesional dan jelas",
    ],
    metrics: [
      { label: "Seksi halaman", value: "7+" },
      { label: "Mobile-first", value: "100%" },
      { label: "CTA kontak", value: "WhatsApp" },
      { label: "Waktu muat target", value: "<2 detik" },
    ],
    ctaText: "Buat Website Bisnis Seperti Ini",
    themeColors: {
      primary: "#4361EE",
      secondary: "#1a1814",
      accent: "rgba(67,97,238,0.24)",
    },
    route: "/portfolio/mitra-korpora",
    mockupType: "minimal",
    previewRoute: "/preview/business-profile",
    previewTitle: "Calon Klien Percaya Sebelum Meeting Pertama",
    previewSubtitle:
      "Company profile yang langsung menunjukkan kredibilitas — layanan, portofolio, tim, dan legalitas dalam satu website.",
    previewSections: [
      {
        label: "Layanan & Kredibilitas",
        description:
          "Daftar layanan inti dengan sertifikasi, izin usaha, dan pengalaman yang membangun trust.",
      },
      {
        label: "Tim & Portofolio",
        description:
          "Profil manajemen, daftar klien, dan studi kasus proyek yang menunjukkan kompetensi.",
      },
      {
        label: "Legalitas & Kontak",
        description:
          "Informasi perusahaan, NPWP, SIUP, dan jalur kontak yang transparan untuk calon partner.",
      },
    ],
    previewCtaLabel: "Hubungi Tim Kami",
    previewBusinessName: "Mitra Korpora",
    previewHeroLabel: "Company Profile",
    previewMockContent: {
      items: [
        "Konsultasi Bisnis",
        "Manajemen Proyek",
        "Pengadaan & Distribusi",
        "50+ klien sejak 2018",
        "Tim 12 profesional",
        "SIUP & NPVP aktif",
      ],
    },
  },
];

export function getPortfolioBySlug(slug: string): PortfolioItem | undefined {
  return portfolioItems.find((item) => item.slug === slug);
}

export function getPortfolioByPreviewSlug(
  previewSlug: string,
): PortfolioItem | undefined {
  return portfolioItems.find(
    (item) => item.previewRoute === `/preview/${previewSlug}`,
  );
}
