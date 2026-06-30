import { TESTIMONIALS } from "@/data";

export default function TestimonialsSection() {
  return (
    <section className="px-6" style={{ paddingTop: "8rem", paddingBottom: "8rem" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div className="text-center" style={{ marginBottom: "5rem" }}>
          <span className="section-tag">Testimonials</span>
          <h2 className="section-title" style={{ marginBottom: "0.5rem" }}>
            Don&apos;t take our
            <br />
            word for it.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-bg-surface border border-border-subtle rounded-xl p-8 h-full"
            >
              <div className="text-accent text-base mb-4">
                {"★".repeat(t.stars)}
              </div>
              <p
                className="font-display italic leading-relaxed text-text-secondary mb-8"
                style={{ fontSize: "1rem", lineHeight: 1.75 }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="pt-5 border-t border-border-subtle">
                <div className="font-semibold text-sm">{t.name}</div>
                <div className="text-xs text-text-muted mt-1">{t.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
