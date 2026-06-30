import { PRODUCTS } from "@/data";

export default function ProductShowcase() {
  return (
    <section id="products" className="px-6" style={{ paddingTop: "8rem", paddingBottom: "8rem" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div className="text-center" style={{ marginBottom: "5rem" }}>
          <span className="section-tag">Our Collection</span>
          <h2
            className="section-title"
            style={{ maxWidth: "720px", margin: "0 auto 1.5rem" }}
          >
            Built for the
            <br />
            long way around.
          </h2>
          <p
            className="section-subtitle"
            style={{ margin: "0 auto", maxWidth: "600px" }}
          >
            Every Summit product shares the same DNA: military-grade aluminum,
            no-wood composites, and a relentless focus on weight reduction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {PRODUCTS.map((product) => (
            <div
              key={product.slug}
              className="group bg-bg-card border border-border-subtle hover:border-border-muted rounded-2xl overflow-hidden transition-all duration-300"
            >
              <div className="h-80 bg-gradient-to-br from-bg-surface to-bg-deep flex items-center justify-center text-7xl opacity-25 group-hover:opacity-35 transition-opacity">
                {product.slug === "expedition-truck-camper" ? "🏕️" : "🛻"}
              </div>

              <div className="p-10">
                <h3 className="font-display text-3xl mb-3">{product.name}</h3>
                <p className="text-text-secondary leading-relaxed mb-6" style={{ fontSize: "0.95rem", lineHeight: 1.75 }}>
                  {product.description}
                </p>
                <div className="text-3xl text-accent font-semibold mb-6">
                  From ${product.startingPrice.toLocaleString()}
                  <span className="text-sm text-text-muted font-normal ml-2">USD</span>
                </div>

                <div className="flex gap-4 text-xs text-text-muted pt-4 border-t border-border-subtle">
                  <span>Delivery: {product.delivery}</span>
                  <span>Warranty: {product.warranty}</span>
                </div>
              </div>

              <div className="flex justify-around border-t border-border-subtle px-6 py-5">
                {product.specs.slice(0, 4).map((spec) => (
                  <div key={spec.label} className="text-center">
                    <div className="text-base font-semibold">{spec.value}</div>
                    <div className="text-[0.65rem] uppercase tracking-wider text-text-muted mt-1">
                      {spec.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
