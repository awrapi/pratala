"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { directWhatsappLink } from "@/lib/whatsapp";
import type { RequestPrefill } from "./RequestModal";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Rerupa", href: "#rerupa" },
  { label: "Workshop", href: "#workshop" },
  { label: "Proses", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar({
  onRequest,
}: {
  onRequest: (prefill?: RequestPrefill) => void;
}) {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const suppressHideUntil = useRef(0);

  function revealNavbar(duration = 1400) {
    suppressHideUntil.current = Date.now() + duration;
    setHidden(false);
  }

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    function update() {
      const currentY = window.scrollY;
      const delta = currentY - lastY;
      setScrolled(currentY > 32);

      if (!menuOpen && Date.now() > suppressHideUntil.current) {
        if (currentY > 190 && delta > 16) setHidden(true);
        if (delta < -8 || currentY < 110) setHidden(false);
      } else {
        setHidden(false);
      }

      lastY = currentY;
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    }

    function onPointerMove(event: PointerEvent) {
      if (event.clientY < 96) revealNavbar(900);
    }

    function onHashChange() {
      revealNavbar(1800);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("hashchange", onHashChange);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [menuOpen]);

  function goToTop() {
    revealNavbar(1800);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleRequest() {
    revealNavbar(1600);
    setMenuOpen(false);
    onRequest();
  }

  function handleNavClick() {
    revealNavbar(1800);
    setMenuOpen(false);
  }

  return (
    <motion.header
      animate={hidden ? { y: -92, opacity: 0 } : { y: 0, opacity: 1 }}
      className="site-navbar fixed inset-x-0 top-0 z-50 px-4 pt-4"
      initial={false}
      transition={{ duration: 0.34, ease: [0.16, 1, 0.3, 1] }}
    >
      <nav
        className={`nav-shell mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-300 ${scrolled ? "scrolled" : ""}`}
      >
        {/* Brand */}
        <button className="flex items-center gap-3" onClick={goToTop} type="button" aria-label="Ke beranda">
          {/* PR Monogram Logo */}
          <span className="brand-mark" style={{ color: 'var(--ink)' }}>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="34" height="34" rx="9" stroke="var(--ink)" strokeWidth="1.5" fill="none"/>
              {/* P */}
              <line x1="7" y1="9" x2="7" y2="27" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round"/>
              <path d="M7 9 H14 Q19 9 19 14 Q19 19 14 19 H7" stroke="var(--ink)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              {/* R */}
              <line x1="22" y1="9" x2="22" y2="27" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round"/>
              <path d="M22 9 H28 Q33 9 33 14 Q33 19 28 19 H22" stroke="var(--ink)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="28" y1="19" x2="33" y2="27" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </span>
          <span className="hidden text-left sm:block">
            <span className="block text-sm font-bold leading-none" style={{ color: 'var(--ink)', fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 400 }}>
              Pratala Rerupa
            </span>
            <span
              className="mt-0.5 block"
              style={{ color: 'var(--ink-3)', fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase' }}
            >
              Web Studio
            </span>
          </span>
        </button>

        {/* Desktop nav */}
        <div className="relative hidden items-center gap-1 rounded-full p-1 md:flex" style={{ background: 'rgba(26,24,20,0.05)' }}>
          {navItems.map((item) => {
            const id = item.href.startsWith("#") ? item.href.slice(1) : "";
            const isActive = id ? active === id : false;
            const isPath = item.href.startsWith("/");
            const linkProps = {
              className: `nav-link relative z-10 ${isActive ? "is-active" : ""}`,
              href: item.href,
              onClick: handleNavClick,
            };
            const inner = (
              <>
                {isActive ? (
                  <motion.span
                    className="absolute inset-0 -z-10 rounded-full"
                    layoutId="active-nav"
                    style={{ background: 'var(--ink)' }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  />
                ) : null}
                {item.label}
              </>
            );
            return isPath ? (
              <Link key={item.href} {...linkProps}>{inner}</Link>
            ) : (
              <a key={item.href} {...linkProps}>{inner}</a>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-2 md:flex">
          <a
            className="btn-ghost compact gsap-magnetic"
            href={directWhatsappLink}
            target="_blank"
            rel="noreferrer"
            style={{ fontSize: "0.84rem" }}
          >
            WhatsApp
          </a>
          <button
            className="btn-primary compact gsap-magnetic"
            data-open-request-modal
            onClick={handleRequest}
            type="button"
          >
            Mulai Project →
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          aria-expanded={menuOpen}
          aria-label="Buka menu"
          className={`icon-button menu-button md:hidden ${menuOpen ? "is-open" : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          type="button"
        >
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile dropdown */}
      <motion.div
        animate={menuOpen ? { opacity: 1, y: 0, pointerEvents: "auto" } : { opacity: 0, y: -12, pointerEvents: "none" }}
        className="mx-auto mt-2 max-w-7xl rounded-3xl border p-4 md:hidden"
        initial={false}
        style={{
          border: '1.5px solid var(--border-2)',
          background: 'rgba(250,248,243,0.96)',
          backdropFilter: 'blur(20px)',
        }}
      >
        <div className="grid gap-1">
          {navItems.map((item) => {
            const isPath = item.href.startsWith("/");
            const mobileProps = {
              className: "rounded-xl px-4 py-3 text-sm font-semibold transition",
              style: { color: 'var(--ink-2)' },
              href: item.href,
              onClick: handleNavClick,
            };
            return isPath ? (
              <Link key={item.href} {...mobileProps}>{item.label}</Link>
            ) : (
              <a key={item.href} {...mobileProps}>{item.label}</a>
            );
          })}
          <button
            className="btn-primary mt-3 gsap-magnetic"
            data-open-request-modal
            onClick={handleRequest}
            type="button"
          >
            Mulai Project Sekarang
          </button>
        </div>
      </motion.div>
    </motion.header>
  );
}
