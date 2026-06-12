"use client";

import { useState } from "react";
import { BusinessWorkshop } from "@/components/BusinessWorkshop";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { PaintStrokes } from "@/components/PaintStrokes";
import { ProblemSection } from "@/components/ProblemSection";
import { PortfolioShowcase } from "@/components/PortfolioShowcase";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { RequestModal, type RequestPrefill } from "@/components/RequestModal";
import { RerupaTransform } from "@/components/RerupaTransform";
import { SplashScreen } from "@/components/SplashScreen";
import { StatsBar } from "@/components/StatsBar";
import { StudioValue } from "@/components/StudioValue";
import { TrustSection } from "@/components/TrustSection";
import { useGsapAnimation } from "@/hooks/useGsapAnimation";

export default function Home() {
  const animationScope = useGsapAnimation();

  const [modalOpen, setModalOpen] = useState(false);
  const [prefill, setPrefill] = useState<RequestPrefill>({});

  function openRequest(nextPrefill: RequestPrefill = {}) {
    setPrefill(nextPrefill);
    setModalOpen(true);
  }

  return (
    <>
      {/* Splash intro — only on first visit per session */}
      <SplashScreen />

      {/* Artistic paint stroke background decorations */}
      <div className="canvas-bg" aria-hidden="true" />
      <PaintStrokes />

      <div ref={animationScope} className="web-frame">
        <Navbar onRequest={openRequest} />
        <main>
          <Hero onRequest={openRequest} />
          <StatsBar />
          <ProblemSection />
          <StudioValue />
          <TrustSection />
          <PortfolioShowcase onRequest={openRequest} />
          <RerupaTransform />
          <BusinessWorkshop onRequest={openRequest} />
          <ProcessTimeline />
          <FAQ />
          <Footer onRequest={openRequest} />
        </main>
      </div>
      <RequestModal isOpen={modalOpen} onClose={() => setModalOpen(false)} prefill={prefill} />
    </>
  );
}
