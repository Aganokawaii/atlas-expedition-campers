"use client";

import { useState } from "react";
import { PRODUCTS } from "@/data";

export default function ProductShowcase() {
  const [activeTier, setActiveTier] = useState(1); // 0=TRAIL, 1=ASCENT, 2=SUMMIT

  const camper = PRODUCTS[0];
  const canopy = PRODUCTS[1];

  const tiers = camper.tiers || [];
  const currentTier = tiers[activeTier] || tiers[0];

  return (
    <>
      {/* ═════════════════════════════════════
         SECTION 1: Atlas Camper — 3 Tiers
         ═════════════════════════════════════ */}
      <section id="products" className="px-6" style={{ paddingTop: "8rem", paddingBottom: "6rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div className="text-center" style={{ marginBottom: "4rem" }}>
            <span className="section-tag">Expedition Series</span>
            <h2 className="section-title" style={{ maxWidth: "720px", margin: "0 auto 1.5rem" }}>
              Atlas Camper
            </h2>
            <p className="section-subtitle" style={{ margin: "0 auto", maxWidth: "600px" }}>
              {camper.description}
            </p>
          </div>

          {/* Tier Selector */}
          <div className="flex justify-center gap-2 mb-12">
            {tiers.map((tier, i) => (
              <button
                key={tier.name}
                onClick={() => setActiveTier(i)}
                className={`px-8 py-3 rounded-md text-sm font-medium transition-all border ${
                  i === activeTier
                    ? "bg-accent text-white border-accent"
                    : "bg-transparent text-text-secondary border-border-subtle hover:border-text-muted hover:text-text-primary"
                }`}
              >
                {tier.name}
              </button>
            ))}
          </div>

          {/* Active Tier Card */}
          <div
            className="bg-bg-card border border-border-subtle rounded-2xl overflow-hidden"
            style={{ maxWidth: "900px", margin: "0 auto" }}
          >
            {/* Card header — gradient atmosphere */}
            <div
              className="h-48 relative overflow-hidden"
              style={{
                background: `
                  linear-gradient(135deg, rgba(196,117,76,0.15) 0%, rgba(107,158,138,0.08) 50%, rgba(10,10,11,0.9) 100%),
                  radial-gradient(ellipse at 30% 50%, rgba(196,117,76,0.1) 0%, transparent 60%)
                `,
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-accent block mb-2">
                    {currentTier.name} Edition
                  </span>
                  <span className="text-5xl font-display text-text-primary">
                    ${currentTier.price.toLocaleString()}
                    <span className="text-base text-text-muted font-body ml-2">USD</span>
                  </span>
                  <p className="text-text-secondary text-sm mt-3">{currentTier.tagline}</p>
                </div>
              </div>
            </div>

            {/* Specs grid */}
            <div className="p-8 md:p-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {currentTier.specs.map((spec) => (
                  <div key={spec.label}>
                    <div className="text-xs text-text-muted uppercase tracking-[0.1em] mb-1">
                      {spec.label}
                    </div>
                    <div className="text-sm font-medium text-text-primary">{spec.value}</div>
                  </div>
                ))}
              </div>

              {/* Highlights */}
              <div className="mt-8 pt-8 border-t border-border-subtle">
                <div className="grid sm:grid-cols-2 gap-3">
                  {currentTier.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-2.5 text-sm text-text-secondary">
                      <span className="text-accent mt-0.5 shrink-0">•</span>
                      {h}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom bar */}
              <div className="flex flex-wrap justify-between items-center mt-8 pt-6 border-t border-border-subtle text-xs text-text-muted">
                <span>Delivery: {camper.delivery}</span>
                <span>Warranty: {camper.warranty}</span>
                <span>Sleeps: 2–3</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════
         SECTION 2: Aero Canopy
         ═════════════════════════════════════ */}
      <section id="canopy" className="px-6 bg-bg-surface" style={{ paddingTop: "6rem", paddingBottom: "8rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div className="text-center" style={{ marginBottom: "4rem" }}>
            <span className="section-tag">Aero Series</span>
            <h2 className="section-title" style={{ maxWidth: "720px", margin: "0 auto 1.5rem" }}>
              {canopy.name}
            </h2>
            <p className="section-subtitle" style={{ margin: "0 auto", maxWidth: "600px" }}>
              {canopy.description}
            </p>
          </div>

          {/* Canopy card */}
          <div
            className="grid md:grid-cols-2 bg-bg-card border border-border-subtle rounded-2xl overflow-hidden"
            style={{ maxWidth: "1000px", margin: "0 auto" }}
          >
            {/* Visual side */}
            <div
              className="h-72 md:h-auto relative"
              style={{
                background: `
                  linear-gradient(160deg, rgba(107,158,138,0.12) 0%, rgba(10,10,11,0.95) 60%),
                  radial-gradient(ellipse at 70% 40%, rgba(196,117,76,0.08) 0%, transparent 50%)
                `,
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4 opacity-30">🛻</div>
                  <div className="text-accent text-2xl font-display">
                    From ${canopy.startingPrice.toLocaleString()}
                    <span className="text-sm text-text-muted font-body ml-2">USD</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Specs side */}
            <div className="p-10">
              <h3 className="font-display text-2xl mb-6">Aero Series — Matte Black</h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {canopy.specs.map((spec) => (
                  <div key={spec.label}>
                    <div className="text-xs text-text-muted uppercase tracking-[0.1em] mb-1">
                      {spec.label}
                    </div>
                    <div className="text-sm font-medium text-text-primary">{spec.value}</div>
                  </div>
                ))}
              </div>
              <div className="space-y-2.5 mb-8">
                {[
                  "Gull-wing side doors — full access both sides",
                  "IP65 multi-stage weather sealing",
                  "No-drill clamp system — minutes to install",
                  "Choice of sliding windows or MOLLE panels",
                  "Factory bed-rail compatible",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-sm text-text-secondary">
                    <span className="text-accent-cool mt-0.5 shrink-0">•</span>
                    {item}
                  </div>
                ))}
              </div>
              <div className="text-xs text-text-muted pt-4 border-t border-border-subtle">
                Delivery: {canopy.delivery} &nbsp;·&nbsp; Warranty: {canopy.warranty} &nbsp;·&nbsp; {canopy.weight}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
