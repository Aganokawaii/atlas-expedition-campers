"use client";

import Link from "next/link";
import { SITE_CONFIG } from "@/data";

export default function CTASection() {
  return (
    <section id="contact" className="px-6 bg-bg-surface" style={{ paddingTop: "8rem", paddingBottom: "8rem" }}>
      <div style={{ maxWidth: "768px", margin: "0 auto", textAlign: "center" }}>
        <div className="bg-bg-card border border-border-subtle rounded-2xl p-12 md:p-16">
          <span className="section-tag">Stay Connected</span>
          <h3 className="font-display text-3xl mb-4">Ready to build yours?</h3>
          <p
            className="text-text-secondary leading-relaxed"
            style={{ maxWidth: "480px", margin: "0 auto 2.5rem", fontSize: "0.95rem", lineHeight: 1.7 }}
          >
            Tell us about your truck and your adventures. We&apos;ll help you configure the perfect setup — no pressure, just honest advice from people who actually camp.
          </p>

          <form
            className="flex gap-3 flex-col sm:flex-row mb-6"
            style={{ maxWidth: "460px", margin: "0 auto" }}
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks! We'll be in touch within 24 hours.");
            }}
          >
            <input
              type="email"
              placeholder="your@email.com"
              required
              className="flex-1 bg-bg-deep border border-border-subtle focus:border-accent outline-none rounded-md px-5 py-3.5 text-sm text-text-primary placeholder:text-text-muted"
            />
            <button
              type="submit"
              className="bg-accent hover:bg-accent-warm text-white px-7 py-3.5 rounded-md text-sm font-medium transition-all shrink-0"
            >
              Get Started
            </button>
          </form>

          <p className="text-xs text-text-muted">
            Or{" "}
            <Link href={`mailto:${SITE_CONFIG.email}`} className="text-accent hover:underline">
              email us
            </Link>{" "}
            directly — we read every message.
          </p>
        </div>
      </div>
    </section>
  );
}
