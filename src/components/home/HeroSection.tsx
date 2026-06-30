import Link from "next/link";
import { COMMUNITY_STATS } from "@/data";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "8rem 2rem 5rem",
      }}
    >
      {/* Background gradient overlay — simulates landscape atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Deep base */}
        <div className="absolute inset-0 bg-bg-deep" />
        {/* Horizon glow — warm amber */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            height: "60%",
            background: "linear-gradient(to top, rgba(196,117,76,0.08) 0%, transparent 100%)",
          }}
        />
        {/* Top atmosphere — cool pine */}
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            height: "40%",
            background: "linear-gradient(to bottom, rgba(107,158,138,0.04) 0%, transparent 100%)",
          }}
        />
        {/* Center glow orb */}
        <div
          style={{
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "800px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(196,117,76,0.06) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
        {/* Subtle texture lines — mountain silhouette suggestion */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            height: "120px",
            background: `
              linear-gradient(175deg, transparent 30%, rgba(107,158,138,0.03) 30.5%, transparent 31%),
              linear-gradient(172deg, transparent 45%, rgba(107,158,138,0.04) 45.5%, transparent 46%),
              linear-gradient(168deg, transparent 60%, rgba(107,158,138,0.05) 60.5%, transparent 61%)
            `,
          }}
        />
      </div>

      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          width: "100%",
          position: "relative",
          zIndex: 10,
          textAlign: "center",
        }}
      >
        {/* Location badge */}
        <span className="inline-flex items-center gap-2 border border-border-subtle rounded-full px-5 py-2 text-xs text-text-secondary tracking-wider mb-10 bg-bg-card/50 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Vancouver, BC — Designed in Canada
        </span>

        {/* Main headline */}
        <h1
          style={{
            fontSize: "clamp(3rem, 7vw, 7rem)",
            lineHeight: 0.94,
            marginBottom: "2rem",
            letterSpacing: "-0.02em",
          }}
        >
          Charged by
          <br />
          <em className="text-accent not-italic">Nature.</em>
        </h1>

        {/* Subtitle */}
        <p
          className="text-text-secondary"
          style={{
            fontSize: "1.15rem",
            maxWidth: "560px",
            margin: "0 auto 3rem",
            lineHeight: 1.75,
          }}
        >
          Lightweight truck campers engineered for the backcountry.
          Under 1,000 lbs dry. Solar-ready. Built for everything from
          coastal rainforests to Rocky Mountain passes.
        </p>

        {/* CTAs */}
        <div className="flex gap-4 flex-wrap justify-center mb-0">
          <Link
            href="/#products"
            className="bg-accent hover:bg-accent-warm text-white px-10 py-4 rounded-md text-base font-medium transition-all no-underline inline-block"
          >
            Explore Models
          </Link>
          <Link
            href="/about"
            className="border border-border-subtle hover:border-text-muted text-text-primary px-10 py-4 rounded-md text-base font-medium transition-all no-underline inline-block"
          >
            Our Story &rarr;
          </Link>
        </div>

        {/* Key stats */}
        <div className="flex flex-wrap justify-center gap-10 md:gap-16 pt-12 mt-16 border-t border-border-subtle">
          {[
            { value: "<1,000 lbs", label: "Dry Weight" },
            { value: "400W", label: "Solar Ready" },
            { value: "4-Season", label: "Rated" },
            { value: "5 min", label: "Setup Time" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl md:text-5xl font-display text-text-primary">
                {stat.value}
              </div>
              <div className="text-xs text-text-muted uppercase tracking-[0.15em] mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Community proof mini bar */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 pt-10 mt-10">
          {COMMUNITY_STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-xl font-display text-accent">{stat.value}</div>
              <div className="text-[0.65rem] uppercase tracking-[0.12em] text-text-muted mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted">
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-px h-10 bg-border-muted animate-pulse" />
      </div>
    </section>
  );
}
