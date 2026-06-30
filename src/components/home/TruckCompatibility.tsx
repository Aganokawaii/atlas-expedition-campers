import { TRUCK_BRANDS } from "@/data";

export default function TruckCompatibility() {
  return (
    <section className="px-6" style={{ paddingTop: "8rem", paddingBottom: "8rem" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", textAlign: "center" }}>
        <span className="section-tag">Compatibility</span>
        <h2 className="section-title" style={{ marginBottom: "1.5rem" }}>
          Built to fit
          <br />
          your truck.
        </h2>
        <p
          className="section-subtitle"
          style={{ margin: "0 auto 4rem", maxWidth: "600px" }}
        >
          Engineered for half-ton, mid-size, and heavy-duty platforms from
          every major manufacturer. We build to your VIN — not a one-size
          template.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {TRUCK_BRANDS.map((brand) => (
            <span
              key={brand}
              className="bg-bg-card border border-border-subtle hover:border-accent hover:text-text-primary rounded-full px-6 py-3 text-sm text-text-secondary transition-all cursor-default"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
