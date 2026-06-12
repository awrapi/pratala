import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Pratala Rerupa — Studio Landing Page Premium untuk Bisnis Lokal",
  description:
    "Pratala Rerupa membantu bisnis lokal tampil lebih dipercaya lewat landing page premium yang rapi, responsif, dan siap diarahkan ke WhatsApp. Hasil dalam 7 hari.",
  openGraph: {
    title: "Pratala Rerupa — Studio Landing Page Premium",
    description: "Website yang bikin bisnis lokal terlihat lebih dipercaya dan mengkonversi.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=JetBrains+Mono:wght@400;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* Film grain / noise overlay */}
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
