import { FEATURES } from "@/data";

export default function FeaturesGrid() {
  return (
    <section id="features" className="px-6 bg-bg-surface" style={{ paddingTop: "8rem", paddingBottom: "8rem" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div className="text-center" style={{ marginBottom: "5rem" }}>
          <span className="section-tag">Why Summit</span>
          <h2
            className="section-title"
            style={{ maxWidth: "800px", margin: "0 auto 1.5rem" }}
          >
            Engineered for people who actually use their gear.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="bg-bg-card border border-border-subtle hover:border-border-muted rounded-xl p-8 h-full transition-colors"
            >
              <div className="w-14 h-14 flex items-center justify-center text-2xl bg-accent/10 rounded-lg mb-5">
                {feature.icon}
              </div>
              <h3 className="font-display text-xl mb-3">{feature.title}</h3>
              <p className="text-text-secondary leading-relaxed" style={{ fontSize: "0.9rem", lineHeight: 1.7 }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
