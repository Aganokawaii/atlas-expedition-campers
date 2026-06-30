import { FEATURES } from "@/data";

export default function FeaturesGrid() {
  return (
    <section id="features" className="px-6 relative overflow-hidden" style={{ paddingTop: "8rem", paddingBottom: "8rem" }}>
      {/* Subtle background image */}
      <div className="absolute inset-0 opacity-[0.04]">
        <img
          src="/images/camper-snow-winter.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div className="text-center" style={{ marginBottom: "5rem" }}>
          <span className="section-tag">Why Atlas</span>
          <h2
            className="section-title"
            style={{ maxWidth: "800px", margin: "0 auto 1.5rem" }}
          >
            Engineered for people who
            <br />
            actually use their gear.
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto", maxWidth: "560px" }}>
            Every Atlas product shares the same DNA: welded aluminum, fire-rated insulation, and a relentless focus on weight reduction.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="bg-bg-card border border-border-subtle hover:border-border-muted rounded-xl p-8 h-full transition-colors group"
            >
              <div className="w-12 h-12 flex items-center justify-center text-2xl bg-accent/10 rounded-lg mb-5 group-hover:bg-accent/15 transition-colors">
                {feature.icon}
              </div>
              <h3 className="font-display text-lg mb-3">{feature.title}</h3>
              <p className="text-text-secondary leading-relaxed" style={{ fontSize: "0.88rem", lineHeight: 1.7 }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
