"use client";

import { useState } from "react";
import { FAQS } from "@/data";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="px-6 bg-bg-surface" style={{ paddingTop: "8rem", paddingBottom: "8rem" }}>
      <div style={{ maxWidth: "768px", margin: "0 auto" }}>
        <div className="text-center" style={{ marginBottom: "4rem" }}>
          <span className="section-tag">FAQ</span>
          <h2 className="section-title" style={{ marginBottom: "0.5rem" }}>
            You ask.
            <br />
            We answer.
          </h2>
        </div>

        <div>
          {FAQS.map((faq, i) => (
            <div key={i} className="border-b border-border-subtle">
              <button
                className="w-full flex justify-between items-center py-6 text-left hover:text-accent transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-base font-medium pr-6">{faq.question}</span>
                <span
                  className={`text-text-muted transition-transform shrink-0 text-lg ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                >
                  ▾
                </span>
              </button>
              {openIndex === i && (
                <div
                  className="pb-6 text-text-secondary leading-relaxed"
                  style={{ fontSize: "0.95rem", lineHeight: 1.75 }}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
