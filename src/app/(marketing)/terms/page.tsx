import AnimatedSection from "@/components/shared/AnimatedSection";

export default function TermsPage() {
  return (
    <div className="pt-24 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <span className="section-tag">Legal</span>
          <h1 className="section-title mb-8">Terms & Conditions</h1>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="space-y-8 text-text-secondary leading-relaxed text-sm">
            <section>
              <h2 className="text-text-primary text-lg font-display mb-2">
                Acceptance
              </h2>
              <p>
                By accessing this site or purchasing products, you agree to be
                bound by these terms. If you do not agree, do not use the site
                or purchase products.
              </p>
            </section>

            <section>
              <h2 className="text-text-primary text-lg font-display mb-2">
                Pricing & Product Changes
              </h2>
              <p>
                All prices are listed in USD and are subject to change without
                notice. We may modify or discontinue any product without prior
                notice. Product photos are illustrative — actual items may
                differ.
              </p>
            </section>

            <section>
              <h2 className="text-text-primary text-lg font-display mb-2">
                Orders & Payment
              </h2>
              <p>
                Orders require acceptance by Summit Expedition and depend on
                product availability. Payment is required in full before order
                processing. We reserve the right to refuse or cancel any order
                at our discretion.
              </p>
            </section>

            <section>
              <h2 className="text-text-primary text-lg font-display mb-2">
                Shipping & Risk
              </h2>
              <p>
                Shipping timelines are estimates, not guarantees. Risk of loss
                and title for products pass to you upon delivery to the carrier.
              </p>
            </section>

            <section>
              <h2 className="text-text-primary text-lg font-display mb-2">
                Returns & Refunds
              </h2>
              <p>
                A 30-day window exists for returns of unused products in
                original packaging. Custom orders and modified products are
                non-refundable. See our Shipping & Returns page for full
                details.
              </p>
            </section>

            <section>
              <h2 className="text-text-primary text-lg font-display mb-2">
                Warranty
              </h2>
              <p>
                A limited warranty against manufacturing defects is offered.
                Warranty periods and coverage vary by product. Consult your
                specific product documentation for details.
              </p>
            </section>

            <section>
              <h2 className="text-text-primary text-lg font-display mb-2">
                Intellectual Property
              </h2>
              <p>
                All site content — text, graphics, logos, images — belongs to
                Summit Expedition and is copyright-protected. Reproduction,
                distribution, or derivative works require written permission.
              </p>
            </section>

            <section>
              <h2 className="text-text-primary text-lg font-display mb-2">
                Limitation of Liability
              </h2>
              <p>
                We disclaim liability for indirect, incidental, special, or
                consequential damages. Our total liability is capped at the
                purchase price of the product in question.
              </p>
            </section>

            <section>
              <h2 className="text-text-primary text-lg font-display mb-2">
                Governing Law
              </h2>
              <p>
                These terms are governed by the laws of British Columbia,
                Canada. Any disputes shall be resolved in the courts of
                Vancouver, BC.
              </p>
            </section>

            <section>
              <h2 className="text-text-primary text-lg font-display mb-2">
                Contact
              </h2>
              <p>
                Questions about these terms? Email info@summitexpedition.ca.
              </p>
            </section>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
