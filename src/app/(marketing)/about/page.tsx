import AnimatedSection from "@/components/shared/AnimatedSection";

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <span className="section-tag">Our Story</span>
          <h1 className="section-title mb-8">
            Built by people
            <br />
            who actually camp.
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="prose max-w-none space-y-6 text-text-secondary leading-relaxed">
            <p className="text-lg">
              Summit Expedition was born on the logging roads and mountain passes
              of British Columbia. We&apos;re truck and outdoor enthusiasts —
              born and raised in Vancouver — who spent years searching for a
              lightweight, modern truck camper at a fair price. We couldn&apos;t
              find one. So we built it ourselves.
            </p>

            <p>
              Every camper we make is designed with our customers in mind —
              because we are our customers. We test prototypes on the same
              Duffey Lake Road washboards, the same Chilcotin backcountry, and
              the same Island rainforest that you&apos;ll take yours through.
            </p>

            <h2 className="text-text-primary text-2xl font-display mt-12 mb-4">
              Our Mission
            </h2>
            <p>
              We believe getting people into nature is the best way to protect
              it. When you&apos;ve watched the sunrise from a remote alpine
              meadow, or fallen asleep to wolves howling across a valley,
              conservation stops being abstract. It becomes personal.
            </p>
            <p>
              That&apos;s why every Summit camper is designed to be eco-friendly
              by default — charged by renewable energy, lightweight to lower
              your carbon footprint, and built from materials that will last
              decades, not seasons.
            </p>

            <h2 className="text-text-primary text-2xl font-display mt-12 mb-4">
              Four Pillars
            </h2>

            <div className="grid sm:grid-cols-2 gap-6 mt-6">
              {[
                {
                  title: "Sustainable by Design",
                  desc: "200W solar, energy-efficient construction. No generator required.",
                  icon: "☀️",
                },
                {
                  title: "Minimalist. Actually.",
                  desc: "800 lbs dry. Military-grade aluminum. No-wood composites. Every pound earns its place.",
                  icon: "🪶",
                },
                {
                  title: "Modular Architecture",
                  desc: "Portable amenities that work inside or out. Your camper adapts to your trip.",
                  icon: "🧩",
                },
                {
                  title: "Built to Outlast",
                  desc: "No wood means no rot. Our campers are engineered for decades, not model years.",
                  icon: "🛡️",
                },
              ].map((p, i) => (
                <div
                  key={p.title}
                  className="bg-bg-surface border border-border-subtle rounded-xl p-6"
                >
                  <div className="text-2xl mb-3">{p.icon}</div>
                  <h3 className="font-display text-lg text-text-primary mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-text-secondary">{p.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="text-text-primary text-2xl font-display mt-12 mb-4">
              Craftsmanship
            </h2>
            <p>
              Every Summit camper is built around a military-grade 6061-T6
              aluminum exoskeleton. Our structural panels contain zero wood —
              they&apos;re closed-cell foam cores laminated with fiberglass-reinforced
              polymer skins. They will never rot, never delaminate, and never
              let you down.
            </p>
            <p>
              We cut out the middlemen. Designed in Canada, sold direct to you.
              Premium quality shouldn&apos;t mean premium pricing — and it
              doesn&apos;t have to.
            </p>

            <h2 className="text-text-primary text-2xl font-display mt-12 mb-4">
              Warranty & Support
            </h2>
            <p>
              Every camper comes with a 2–3 year comprehensive warranty and
              lifetime support. We&apos;re a small team based in Vancouver, BC
              — when you email us, you get a real person who knows your camper
              by name. Not a ticket number.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
