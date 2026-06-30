import AnimatedSection from "@/components/shared/AnimatedSection";

export default function ShippingPage() {
  return (
    <div className="pt-24 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <span className="section-tag">Support</span>
          <h1 className="section-title mb-8">Shipping & Returns</h1>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="space-y-10 text-text-secondary leading-relaxed">
            <section>
              <h2 className="text-text-primary text-xl font-display mb-3">
                Deposit & Payment
              </h2>
              <p>
                A $5,000 refundable deposit secures your build slot. The
                remaining balance is due on delivery. Your deposit is fully
                refundable within 7 days of placement. After 7 days and once
                production begins, the deposit becomes non-refundable. Build
                configuration changes may be accommodated if requested early.
              </p>
            </section>

            <section>
              <h2 className="text-text-primary text-xl font-display mb-3">
                Lead Time
              </h2>
              <p>
                Each camper is built to order. Current estimated lead time is
                8–10 weeks from order confirmation. We&apos;ll keep you updated
                at every stage — from frame welding to final inspection.
              </p>
            </section>

            <section>
              <h2 className="text-text-primary text-xl font-display mb-3">
                Delivery
              </h2>
              <p>
                Free enclosed freight shipping to Canada and the continental
                United States. Your camper arrives via enclosed carrier to your
                door or the nearest freight depot. White-glove delivery with
                installation walkthrough is available at additional cost —
                request a quote. International shipping is available upon
                request.
              </p>
            </section>

            <section>
              <h2 className="text-text-primary text-xl font-display mb-3">
                Accessories
              </h2>
              <p>
                In-stock accessories ship within 3–5 business days. Free
                shipping on accessory orders over $150. Standard shipping within
                North America is a $15 flat rate. Tracking information is
                emailed once your items ship.
              </p>
            </section>

            <section>
              <h2 className="text-text-primary text-xl font-display mb-3">
                Returns — Accessories
              </h2>
              <p>
                Unused accessories in original packaging can be returned within
                30 days of delivery for a full refund. Return shipping is at the
                customer&apos;s expense unless the item arrived damaged or
                defective.
              </p>
            </section>

            <section>
              <h2 className="text-text-primary text-xl font-display mb-3">
                Returns — Campers
              </h2>
              <p>
                Custom-built campers are non-returnable. If your camper arrives
                with a manufacturing defect or shipping damage, contact us
                within 48 hours of delivery with photos. We will arrange repair
                or replacement at no cost to you.
              </p>
            </section>

            <section>
              <h2 className="text-text-primary text-xl font-display mb-3">
                How to Initiate a Return
              </h2>
              <ol className="list-decimal list-inside space-y-1 text-sm">
                <li>
                  Email info@summitexpedition.ca with your order number and
                  reason.
                </li>
                <li>
                  A return authorization is issued within 1–2 business days.
                </li>
                <li>Ship the item back in original packaging.</li>
                <li>
                  Refund is processed within 5–7 business days after receipt and
                  inspection.
                </li>
              </ol>
            </section>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
