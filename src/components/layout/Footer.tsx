import Link from "next/link";
import { SITE_CONFIG, COMMUNITY_STATS } from "@/data";

const FOOTER_COLUMNS = [
  {
    title: "Models",
    links: [
      { label: "Atlas Camper", href: "/#products" },
      { label: "Aero Canopy", href: "/#canopy" },
      { label: "Compare Tiers", href: "/#products" },
      { label: "Build & Order", href: "/#contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", href: "/about" },
      { label: "Features", href: "/#features" },
      { label: "Dealer Program", href: "/#contact" },
      { label: "Contact", href: "/#contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Shipping & Returns", href: "/shipping-returns" },
      { label: "FAQs", href: "/#faq" },
      { label: "Warranty", href: "/#faq" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle px-6 py-16 bg-bg-deep">
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Top: Stats bar */}
        <div className="flex flex-wrap justify-center gap-10 md:gap-16 pb-12 mb-12 border-b border-border-subtle">
          {COMMUNITY_STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-display text-accent">{stat.value}</div>
              <div className="text-[0.65rem] uppercase tracking-[0.12em] text-text-muted mt-1.5">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Middle: Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs uppercase tracking-[0.15em] text-text-muted mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-secondary hover:text-text-primary transition-colors no-underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom: Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-6 border-t border-border-subtle text-xs text-text-muted">
          <span>
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}, a division of{" "}
            {SITE_CONFIG.parentCompany}. Designed in Vancouver, BC.
          </span>
          <div className="flex items-center gap-4">
            <span>{SITE_CONFIG.instagram}</span>
            <span className="text-border-subtle">|</span>
            <span>#AtlasExpedition</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
