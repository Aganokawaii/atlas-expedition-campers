"use client";

import Link from "next/link";

export default function CTASection() {
  return (
    <section id="contact" className="px-6" style={{ paddingTop: "8rem", paddingBottom: "8rem" }}>
      <div style={{ maxWidth: "768px", margin: "0 auto", textAlign: "center" }}>
        <div className="bg-bg-surface border border-border-subtle rounded-2xl p-12 md:p-16">
          <span className="section-tag">Stay Connected</span>
          <h3 className="font-display text-3xl mb-4">Get the Summit Dispatch</h3>
          <p
            className="text-text-secondary leading-relaxed"
            style={{ maxWidth: "480px", margin: "0 auto 2.5rem", fontSize: "0.95rem", lineHeight: 1.7 }}
          >
            Product updates, owner stories, and early access to new releases.
            No spam — we&apos;re too busy building campers.
          </p>

          <form
            className="flex gap-3 flex-col sm:flex-row"
            style={{ maxWidth: "460px", margin: "0 auto" }}
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks! We'll be in touch.");
            }}
          >
            <input
              type="email"
              placeholder="your@email.com"
              required
              className="flex-1 bg-bg-deep border border-border-subtle focus:border-accent outline-none rounded-md px-5 py-3.5 text-sm text-text-primary"
            />
            <button
              type="submit"
              className="bg-accent hover:bg-[#e08a5c] text-white px-7 py-3.5 rounded-md text-sm font-medium transition-all shrink-0"
            >
              Subscribe
            </button>
          </form>

          <p className="text-xs text-text-muted mt-7">
            Or{" "}
            <Link href="mailto:info@summitexpedition.ca" className="text-accent hover:underline">
              email us
            </Link>{" "}
            directly.
          </p>
        </div>
      </div>
    </section>
  );
}
