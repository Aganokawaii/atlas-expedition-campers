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
      {/* Hero background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-truck-forest.jpg"
          alt="Atlas Expedition truck camper in the forest"
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.35)" }}
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg-deep/60 via-transparent to-bg-deep" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-deep/40 via-transparent to-bg-deep/40" />
        {/* Bottom fade to next section */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{ height: "40%", background: "linear-gradient(to top, var(--color-bg-deep) 0%, transparent 100%)" }}
        />
      </div>

      {/* Ambient glow accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          style={{
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "700px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(196,117,76,0.08) 0%, transparent 70%)",
            filter: "blur(80px)",
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
        <span className="inline-flex items-center gap-2 border border-white/10 rounded-full px-5 py-2 text-xs text-white/60 tracking-wider mb-10 bg-black/30 backdrop-blur-sm">
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
          style={{
            fontSize: "1.15rem",
            maxWidth: "560px",
            margin: "0 auto 3rem",
            lineHeight: 1.75,
            color: "rgba(255,255,255,0.6)",
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
            className="border border-white/15 hover:border-white/30 text-white px-10 py-4 rounded-md text-base font-medium transition-all no-underline inline-block"
          >
            Our Story &rarr;
          </Link>
        </div>

        {/* Key stats */}
        <div className="flex flex-wrap justify-center gap-10 md:gap-16 pt-12 mt-16 border-t border-white/10">
          {[
            { value: "<1,000 lbs", label: "Dry Weight" },
            { value: "400W", label: "Solar Ready" },
            { value: "4-Season", label: "Rated" },
            { value: "5 min", label: "Setup Time" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl md:text-5xl font-display text-white">
                {stat.value}
              </div>
              <div className="text-xs text-white/40 uppercase tracking-[0.15em] mt-2">
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
              <div className="text-[0.65rem] uppercase tracking-[0.12em] text-white/40 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-px h-10 bg-white/20 animate-pulse" />
      </div>
    </section>
  );
}
