import AnimatedSection from "@/components/shared/AnimatedSection";

export default function PrivacyPage() {
  return (
    <div className="pt-24 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <span className="section-tag">Legal</span>
          <h1 className="section-title mb-2">Privacy Policy</h1>
          <p className="text-sm text-text-muted mb-8">
            Last updated: January 31, 2026
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="space-y-8 text-text-secondary leading-relaxed text-sm">
            <section>
              <h2 className="text-text-primary text-lg font-display mb-2">
                Information We Collect
              </h2>
              <p>
                We collect information you provide directly: name, email
                address, postal address, phone number, and payment details when
                you create an account, make a purchase, subscribe to our
                newsletter, or contact support.
              </p>
            </section>

            <section>
              <h2 className="text-text-primary text-lg font-display mb-2">
                How We Use It
              </h2>
              <p>
                To process transactions, send promotional communications (with
                your consent), respond to inquiries, analyze trends, improve our
                website and products, and detect or prevent fraudulent
                transactions.
              </p>
            </section>

            <section>
              <h2 className="text-text-primary text-lg font-display mb-2">
                Third-Party Sharing
              </h2>
              <p>
                We do not sell, trade, or rent your personal information to
                third parties. Data may be shared with service providers who
                help operate our website, conduct business, or serve users —
                under strict confidentiality agreements.
              </p>
            </section>

            <section>
              <h2 className="text-text-primary text-lg font-display mb-2">
                Cookies
              </h2>
              <p>
                We use cookies and similar tracking technologies to track
                website activity and hold certain information. You can configure
                your browser to refuse all cookies or to indicate when a cookie
                is being sent.
              </p>
            </section>

            <section>
              <h2 className="text-text-primary text-lg font-display mb-2">
                Your Rights
              </h2>
              <p>
                You have the right to access, update, or delete your personal
                information. You may opt out of promotional communications at
                any time. Contact info@summitexpedition.ca to exercise these
                rights.
              </p>
            </section>

            <section>
              <h2 className="text-text-primary text-lg font-display mb-2">
                Security
              </h2>
              <p>
                While we implement appropriate security measures to protect your
                data, no method of transmission over the Internet or electronic
                storage is 100% secure. We cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-text-primary text-lg font-display mb-2">
                Updates
              </h2>
              <p>
                This policy may be updated periodically. Changes will be posted
                on this page with a revised date. Continued use of the site
                constitutes acceptance of any changes.
              </p>
            </section>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
