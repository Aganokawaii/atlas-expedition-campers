"use client";

import { useState } from "react";
import { FAQS } from "@/data";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="px-6" style={{ paddingTop: "8rem", paddingBottom: "8rem" }}>
      <div style={{ maxWidth: "768px", margin: "0 auto" }}>
        <div className="text-center" style={{ marginBottom: "4rem" }}>
          <span className="section-tag">FAQ</span>
          <h2 className="section-title" style={{ marginBottom: "0.5rem" }}>
            You ask.
            <br />
            We answer.
          </h2>
        </div>

        <div className="space-y-px">
          {FAQS.map((faq, i) => (
            <div key={i} className="bg-bg-card border border-border-subtle rounded-lg overflow-hidden">
              <button
                className="w-full flex justify-between items-center px-6 py-5 text-left hover:text-accent transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-sm font-medium pr-6">{faq.question}</span>
                <span
                  className={`text-text-muted transition-transform shrink-0 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                >
                  ▾
                </span>
              </button>
              {openIndex === i && (
                <div
                  className="px-6 pb-5 text-text-secondary leading-relaxed"
                  style={{ fontSize: "0.9rem", lineHeight: 1.8 }}
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
