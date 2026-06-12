export type PreviewWork = {
  id: string;
  title: string;
  industry: string;
  image: string;
  previewUrl: string;
  problem: string;
  visualDirection: string;
  businessGoal: string;
};

export const previewWorks: PreviewWork[] = [
  {
    id: "dramaga-kopi",
    title: "Dramaga Kopi",
    industry: "Cafe & Eatery",
    image: "/assets/preview/dramgakopiweb.jpg",
    previewUrl: "/assets/preview/dramgakopiweb.jpg",
    problem: "Tempat sudah punya karakter, tapi belum punya halaman yang merangkum alasan untuk datang.",
    visualDirection: "Ruang visual gelap-terang, menu unggulan, dan jalur chat yang jelas.",
    businessGoal: "Mengubah rasa penasaran dari media sosial menjadi kunjungan dan chat."
  },
  {
    id: "cassavali",
    title: "Cassavali Coffee & Eatery",
    industry: "Cafe & Eatery",
    image: "/assets/preview/cassavaliweb.jpeg",
    previewUrl: "/assets/preview/cassavaliweb.jpeg",
    problem: "Konsep bisnis butuh halaman yang terasa rapi, hangat, dan mudah dipercaya dari satu link.",
    visualDirection: "Coffee editorial dengan struktur menu, ambience, proof, dan CTA yang lebih tenang.",
    businessGoal: "Membantu pengunjung menangkap suasana dan alasan untuk bertanya sebelum datang."
  }
];
