export type WorkshopCategory = {
  key: string;
  title: string;
  goal: string;
  atmosphere: string;
  sections: string[];
  visualDirection: string;
  cta: string;
};

export const workshopData: WorkshopCategory[] = [
  {
    key: "cafe",
    title: "Cafe & Eatery",
    goal: "Membuat orang ingin datang, pesan, atau menyimpan tempatnya.",
    atmosphere: "Hangat, editorial, menggugah selera, tapi tetap bersih.",
    sections: ["Ambience hero", "Menu unggulan", "Review", "Lokasi", "Chat WhatsApp"],
    visualDirection: "Foto suasana besar, detail menu, warna hangat, dan CTA reservasi/pesan.",
    cta: "Minta Website Serupa"
  },
  {
    key: "clinic",
    title: "Clinic & Healthcare",
    goal: "Membuat calon pasien merasa aman sebelum booking.",
    atmosphere: "Tenang, bersih, profesional, dan tidak menakutkan.",
    sections: ["Layanan", "Dokter/terapis", "Jadwal", "FAQ", "Booking"],
    visualDirection: "Whitespace lega, trust cues, ikon minimal, dan copy yang reassuring.",
    cta: "Minta Preview Website"
  },
  {
    key: "property",
    title: "Property & Residence",
    goal: "Membuat prospek memahami unit, lokasi, dan alasan site visit.",
    atmosphere: "Aspiratif, rapi, premium, dan informatif.",
    sections: ["Hero properti", "Unit", "Fasilitas", "Lokasi", "Site visit"],
    visualDirection: "Image frame besar, grid fasilitas, peta ringkas, dan CTA jadwal kunjungan.",
    cta: "Minta Website Serupa"
  },
  {
    key: "travel",
    title: "Travel & Tour",
    goal: "Membuat paket terasa jelas, terpercaya, dan mudah ditanyakan.",
    atmosphere: "Cinematic, aspiratif, dan tetap terstruktur.",
    sections: ["Destinasi", "Paket", "Itinerary", "Testimoni", "Chat"],
    visualDirection: "Foto destinasi lebar, timeline itinerary, dan paket yang mudah dibandingkan.",
    cta: "Minta Preview Website"
  },
  {
    key: "automotive",
    title: "Automotive",
    goal: "Membuat calon pembeli cepat percaya pada stok, kondisi, dan proses.",
    atmosphere: "Tegas, glossy secukupnya, dan kredibel.",
    sections: ["Stok unit", "Spesifikasi", "Garansi", "Proses", "Cek unit"],
    visualDirection: "Frame kendaraan besar, detail teknis rapi, dan CTA cek ketersediaan.",
    cta: "Minta Website Serupa"
  },
  {
    key: "education",
    title: "Education",
    goal: "Membuat program terlihat jelas dan orang tua/siswa mudah bertanya.",
    atmosphere: "Cerdas, ramah, sistematis, dan meyakinkan.",
    sections: ["Program", "Kurikulum", "Pengajar", "Fasilitas", "Daftar"],
    visualDirection: "Struktur modular, bukti hasil, dan alur pendaftaran sederhana.",
    cta: "Minta Preview Website"
  },
  {
    key: "beauty",
    title: "Beauty & Wellness",
    goal: "Membuat treatment terasa premium dan aman untuk booking.",
    atmosphere: "Halus, intimate, bersih, dan elegan.",
    sections: ["Treatment", "Benefit", "Before-after", "Review", "Booking"],
    visualDirection: "Palette lembut, detail treatment, dan CTA booking yang tidak memaksa.",
    cta: "Minta Website Serupa"
  },
  {
    key: "business",
    title: "Business Profile",
    goal: "Membuat perusahaan terlihat kredibel saat link dibagikan.",
    atmosphere: "Tegas, corporate-premium, dan sangat mudah dipahami.",
    sections: ["Profil", "Layanan", "Proses", "Klien", "Kontak"],
    visualDirection: "Typography kuat, bukti kredibilitas, dan struktur layanan ringkas.",
    cta: "Minta Preview Website"
  }
];
