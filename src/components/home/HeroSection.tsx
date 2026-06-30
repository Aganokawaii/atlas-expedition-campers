import Link from "next/link";

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
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "900px",
            height: "900px",
            borderRadius: "50%",
            background: "rgba(91,140,122,0.06)",
            filter: "blur(180px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "15%",
            right: "20%",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "rgba(137,168,152,0.05)",
            filter: "blur(140px)",
          }}
        />
      </div>

      <div
        style={{
          maxWidth: "760px",
          margin: "0 auto",
          width: "100%",
          position: "relative",
          zIndex: 10,
          textAlign: "center",
        }}
      >
        <span className="inline-flex items-center gap-2 border border-border-subtle rounded-full px-5 py-2 text-xs text-text-secondary tracking-wider mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          Vancouver, BC — Designed in Canada
        </span>

        <h1
          style={{
            fontSize: "clamp(3.5rem, 8vw, 7.5rem)",
            lineHeight: 0.94,
            marginBottom: "2.5rem",
            letterSpacing: "-0.02em",
          }}
        >
          Go further.
          <br />
          <em className="text-accent not-italic">Stay longer.</em>
        </h1>

        <p
          className="text-text-secondary"
          style={{
            fontSize: "1.2rem",
            maxWidth: "560px",
            margin: "0 auto 3rem",
            lineHeight: 1.75,
          }}
        >
          Lightweight truck campers engineered for the backcountry. 800 lbs
          dry. Solar-ready. Built for everything from coastal rainforests to
          Rocky Mountain passes.
        </p>

        <div className="flex gap-4 flex-wrap justify-center mb-0">
          <Link
            href="/#products"
            className="bg-accent hover:bg-[#e08a5c] text-white px-10 py-4 rounded-md text-base font-medium transition-all no-underline inline-block"
          >
            Explore Models
          </Link>
          <Link
            href="/#features"
            className="border border-border-subtle hover:border-text-muted text-text-primary px-10 py-4 rounded-md text-base font-medium transition-all no-underline inline-block"
          >
            Why Summit &rarr;
          </Link>
        </div>

        {/* Key stats */}
        <div
          className="flex flex-wrap justify-center gap-10 md:gap-16 pt-12 mt-16 border-t border-border-subtle"
        >
          {[
            { value: "800 lbs", label: "Dry Weight" },
            { value: "200W", label: "Solar Ready" },
            { value: "R-7", label: "Insulation" },
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
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted">
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-px h-10 bg-border-muted animate-pulse" />
      </div>
    </section>
  );
}
