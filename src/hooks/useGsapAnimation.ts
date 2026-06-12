"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function useGsapAnimation() {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = scope.current;
      if (!root) return;

      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const isNarrow = window.matchMedia("(max-width: 700px)").matches;
      const distance = {
        nav: reduceMotion ? -36 : -58,
        line: reduceMotion ? 70 : 86,
        subheadline: reduceMotion ? 36 : 46,
        cta: reduceMotion ? 34 : 42,
        card: reduceMotion ? 58 : 76,
        revealHeading: reduceMotion ? 48 : 56,
        revealCard: reduceMotion ? 58 : 68
      };
      const duration = reduceMotion ? 0.88 : 1;

      const cleanup: Array<() => void> = [];

      const context = gsap.context(() => {
        const heroLines = gsap.utils.toArray<HTMLElement>(".hero-title-line");
        const heroVisualCards = gsap.utils.toArray<HTMLElement>(".hero-visual-card");

        gsap.set(".nav-shell", { autoAlpha: 0, y: distance.nav });
        gsap.set(heroLines, {
          autoAlpha: 0,
          y: distance.line,
          rotateX: reduceMotion ? 0 : 8,
          transformOrigin: "left bottom",
          force3D: true
        });
        gsap.set(".hero-subheadline", { autoAlpha: 0, y: distance.subheadline });
        gsap.set(".hero-cta", { autoAlpha: 0, y: distance.cta, scale: 0.96 });
        gsap.set(".hero-proof", { autoAlpha: 0, y: reduceMotion ? 14 : 30 });
        gsap.set(heroVisualCards, { autoAlpha: 0, y: distance.card, rotate: reduceMotion ? -1.2 : -3, scale: reduceMotion ? 0.94 : 0.9 });
        gsap.set(".hero-blob", { autoAlpha: 0, scale: reduceMotion ? 0.78 : 0.58, rotate: reduceMotion ? -10 : -24 });

        const startFloatingCards = () => {
          gsap.utils.toArray<HTMLElement>(".floating-card").forEach((element, index) => {
            gsap.to(element, {
              y: reduceMotion ? (index % 2 === 0 ? -12 : 10) : (index % 2 === 0 ? -22 : 18),
              x: reduceMotion ? (index % 3 === 0 ? 4 : -4) : (index % 3 === 0 ? 10 : -7),
              rotate: reduceMotion ? (index % 2 === 0 ? 0.9 : -0.75) : (index % 2 === 0 ? 1.8 : -1.35),
              duration: reduceMotion ? 4.8 + index * 0.24 : 3.1 + index * 0.36,
              ease: "sine.inOut",
              repeat: -1,
              yoyo: true,
              overwrite: false
            });
          });
        };

        gsap
          .timeline({ defaults: { ease: "expo.out" } })
          .to(".nav-shell", { autoAlpha: 1, y: 0, duration: reduceMotion ? 0.48 : 0.9 })
          .to(".hero-blob", { autoAlpha: 1, scale: 1, rotate: 0, duration: reduceMotion ? 0.6 : 1.25, stagger: 0.16 }, 0.05)
          .to(heroLines, { autoAlpha: 1, y: 0, rotateX: 0, duration: reduceMotion ? 0.68 : 1.08, stagger: reduceMotion ? 0.12 : 0.18 }, 0.2)
          .to(".hero-subheadline", { autoAlpha: 1, y: 0, duration: reduceMotion ? 0.58 : 0.92 }, reduceMotion ? 0.75 : 1.0)
          .to(".hero-cta", { autoAlpha: 1, y: 0, scale: 1, duration: reduceMotion ? 0.54 : 0.82, stagger: 0.14 }, reduceMotion ? 0.9 : 1.18)
          .to(".hero-proof", { autoAlpha: 1, y: 0, duration: reduceMotion ? 0.5 : 0.76 }, reduceMotion ? 1.08 : 1.42)
          .to(
            heroVisualCards,
            {
              autoAlpha: 1,
              y: 0,
              rotate: 0,
              scale: 1,
              duration: reduceMotion ? 0.62 : 1.0,
              stagger: 0.13,
              ease: "back.out(1.45)"
            },
            0.55
          )
          .eventCallback("onComplete", startFloatingCards);

        gsap.utils.toArray<HTMLElement>(".hero-blob, .footer-orbit").forEach((element, index) => {
          gsap.to(element, {
            x: reduceMotion ? (index % 2 === 0 ? 8 : -7) : index % 2 === 0 ? 18 : -16,
            y: reduceMotion ? (index % 3 === 0 ? -9 : 8) : index % 3 === 0 ? -20 : 18,
            rotate: reduceMotion ? (index % 2 === 0 ? 7 : -6) : index % 2 === 0 ? 18 : -16,
            scale: reduceMotion ? (index % 2 === 0 ? 1.06 : 0.97) : index % 2 === 0 ? 1.12 : 0.94,
            duration: reduceMotion ? 8.4 + index : 6.2 + index,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true
          });
        });

        gsap.utils.toArray<HTMLElement>(".reveal-section").forEach((section) => {
          const label = section.querySelectorAll<HTMLElement>(".reveal-label");
          const heading = section.querySelectorAll<HTMLElement>(".reveal-heading");
          const text = section.querySelectorAll<HTMLElement>(".reveal-text");
          const buttons = section.querySelectorAll<HTMLElement>(".reveal-button");
          const images = section.querySelectorAll<HTMLElement>(".reveal-image");
          const cards = gsap.utils
            .toArray<HTMLElement>(section.querySelectorAll(".reveal-card"))
            .filter((card) => !card.classList.contains("portfolio-card"));

          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none none"
            }
          });

          if (label.length) {
            timeline.fromTo(label, { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.82, ease: "power3.out" }, 0);
          }

          if (heading.length) {
            timeline.fromTo(
              heading,
              { autoAlpha: 0, y: distance.revealHeading },
              { autoAlpha: 1, y: 0, duration, ease: "power3.out" },
              0.08
            );
          }

          if (text.length) {
            timeline.fromTo(
              text,
              { autoAlpha: 0, y: 36 },
              { autoAlpha: 1, y: 0, duration: 0.9, ease: "power3.out", stagger: 0.08 },
              0.2
            );
          }

          if (buttons.length) {
            timeline.fromTo(
              buttons,
              { autoAlpha: 0, y: 34, scale: 0.96 },
              { autoAlpha: 1, y: 0, scale: 1, duration: 0.82, ease: "power3.out", stagger: 0.12 },
              0.28
            );
          }

          if (images.length) {
            timeline.fromTo(
              images,
              { autoAlpha: 0, y: 60, scale: 0.94 },
              { autoAlpha: 1, y: 0, scale: 1, duration: 1.0, ease: "power3.out", stagger: 0.14 },
              0.26
            );
          }

          if (cards.length) {
            timeline.fromTo(
              cards,
              { autoAlpha: 0, y: distance.revealCard, scale: reduceMotion ? 0.96 : 0.94 },
              { autoAlpha: 1, y: 0, scale: 1, duration: reduceMotion ? 0.62 : 0.95, ease: "power3.out", stagger: 0.16 },
              0.34
            );
          }
        });

        gsap.utils.toArray<HTMLElement>(".problem-board").forEach((board) => {
          gsap.fromTo(
            board,
            { autoAlpha: 0, y: 64, scale: 0.94 },
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: 1.0,
              ease: "power3.out",
              scrollTrigger: {
                trigger: board,
                start: "top 80%",
                toggleActions: "play none none none"
              }
            }
          );
        });

        gsap.utils.toArray<HTMLElement>(".stat-pop").forEach((item) => {
          gsap.fromTo(
            item,
            { scale: 0.7, autoAlpha: 0 },
            {
              scale: 1,
              autoAlpha: 1,
              duration: 0.82,
              ease: "back.out(1.8)",
              scrollTrigger: {
                trigger: item,
                start: "top 82%",
                toggleActions: "play none none none"
              }
            }
          );
        });

        gsap.utils.toArray<HTMLElement>(".portfolio-card").forEach((card, index) => {
          const enterFromX = isNarrow ? 0 : index % 2 === 0 ? 90 : 56;

          gsap.fromTo(
            card,
            { autoAlpha: 0, x: enterFromX, y: isNarrow ? 64 : 38, scale: isNarrow ? 0.98 : 0.94 },
            {
              autoAlpha: 1,
              x: 0,
              y: 0,
              scale: 1,
              duration: 1.0,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                toggleActions: "play none none none"
              }
            }
          );
        });

        gsap.utils.toArray<HTMLElement>(".testimonial-card").forEach((card) => {
          const quote = card.querySelector(".testimonial-quote");
          const client = card.querySelector(".testimonial-client");
          if (!quote || !client) return;

          gsap
            .timeline({
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                toggleActions: "play none none none"
              }
            })
            .fromTo(quote, { autoAlpha: 0, y: 52 }, { autoAlpha: 1, y: 0, duration: 1.0, ease: "power3.out" })
            .fromTo(client, { autoAlpha: 0, x: -42 }, { autoAlpha: 1, x: 0, duration: 0.86, ease: "power3.out" }, "-=0.54");
        });

        gsap.utils.toArray<HTMLElement>(".final-cta-panel").forEach((panel) => {
          gsap.fromTo(
            panel.querySelectorAll(".final-cta-item"),
            { autoAlpha: 0, y: 56 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 1.0,
              ease: "power3.out",
              stagger: 0.16,
              scrollTrigger: {
                trigger: panel,
                start: "top 80%",
                toggleActions: "play none none none"
              }
            }
          );
        });

        gsap.utils.toArray<HTMLElement>(".gsap-hover-card").forEach((card) => {
          const icon = card.querySelector<HTMLElement>(".gsap-icon-hover");
          const image = card.querySelector<HTMLElement>(".case-screen img");
          let isHovering = false;

          const enter = () => {
            if (isHovering) return;
            isHovering = true;
            gsap.to(card, {
              y: -12,
              rotate: -0.65,
              boxShadow: "0 38px 110px rgba(17, 17, 17, 0.16)",
              duration: 0.36,
              ease: "power3.out"
            });
            if (icon) gsap.to(icon, { y: -6, x: 5, rotate: 5, duration: 0.34, ease: "power3.out" });
            if (image) gsap.to(image, { scale: 1.065, duration: 0.8, ease: "power3.out" });
          };

          const leave = () => {
            isHovering = false;
            gsap.to(card, {
              y: 0,
              rotate: 0,
              boxShadow: "",
              duration: 0.45,
              ease: "power3.out"
            });
            if (icon) gsap.to(icon, { y: 0, x: 0, rotate: 0, duration: 0.38, ease: "power3.out" });
            if (image) gsap.to(image, { scale: 1, duration: 0.7, ease: "power3.out" });
          };

          card.addEventListener("mouseenter", enter);
          card.addEventListener("mousemove", enter);
          card.addEventListener("mouseleave", leave);
          cleanup.push(() => {
            card.removeEventListener("mouseenter", enter);
            card.removeEventListener("mousemove", enter);
            card.removeEventListener("mouseleave", leave);
          });
        });

        gsap.utils.toArray<HTMLElement>(".gsap-magnetic").forEach((button) => {
          const move = (event: MouseEvent) => {
            const rect = button.getBoundingClientRect();
            const x = event.clientX - rect.left - rect.width / 2;
            const y = event.clientY - rect.top - rect.height / 2;
            gsap.to(button, { x: x * 0.18, y: y * 0.26, duration: 0.28, ease: "power3.out" });
          };
          const leave = () => gsap.to(button, { x: 0, y: 0, duration: 0.46, ease: "elastic.out(1, 0.45)" });

          button.addEventListener("mousemove", move);
          button.addEventListener("mouseleave", leave);
          cleanup.push(() => {
            button.removeEventListener("mousemove", move);
            button.removeEventListener("mouseleave", leave);
          });
        });

        ScrollTrigger.refresh();
      }, root);

      return () => {
        cleanup.forEach((remove) => remove());
        context.revert();
      };
    },
    { scope }
  );

  return scope;
}
