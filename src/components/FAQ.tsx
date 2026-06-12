"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { faqData } from "@/data/faqData";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section-shell section-space reveal-section" id="faq">
      <div className="section-heading center compact-heading">
        <p className="label reveal-label">FAQ</p>
        <h2 className="reveal-heading">Pertanyaan yang biasanya muncul sebelum mulai.</h2>
      </div>
      <div className="faq-list reveal-card-group">
        {faqData.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div className="faq-item reveal-card" key={item.question}>
              <button
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                type="button"
              >
                <span>{item.question}</span>
                <strong>{isOpen ? "-" : "+"}</strong>
              </button>
              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    initial={{ height: 0, opacity: 0 }}
                  >
                    <p>{item.answer}</p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
