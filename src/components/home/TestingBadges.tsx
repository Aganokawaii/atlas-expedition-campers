import { TESTING_BADGES } from "@/data";

export default function TestingBadges() {
  return (
    <section className="px-6 bg-bg-surface" style={{ paddingTop: "8rem", paddingBottom: "8rem" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", textAlign: "center" }}>
        <span className="section-tag">Field Tested</span>
        <h2 className="section-title" style={{ marginBottom: "1.5rem" }}>
          Adventure Ready.
          <br />
          <em className="text-accent not-italic">Proven.</em>
        </h2>
        <p className="section-subtitle" style={{ margin: "0 auto", maxWidth: "560px" }}>
          Every Atlas product is tested in real conditions — from BC coastal downpours to Alberta winter nights.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-14">
          {TESTING_BADGES.map((badge) => (
            <div
              key={badge.label}
              className="bg-bg-card border border-border-subtle hover:border-accent/30 rounded-xl p-7 min-w-[160px] transition-all hover:-translate-y-0.5"
            >
              <div className="text-4xl mb-4">{badge.icon}</div>
              <div className="text-sm font-medium text-text-primary">{badge.label}</div>
              <div className="text-xs text-accent-cool mt-1.5">{badge.status}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
