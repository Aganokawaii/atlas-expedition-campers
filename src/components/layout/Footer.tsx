import Link from "next/link";
import { SITE_CONFIG } from "@/data";

const FOOTER_COLUMNS = [
  {
    title: "Models",
    links: [
      { label: "Expedition Camper", href: "/#products" },
      { label: "Borderless Canopy", href: "/#products" },
      { label: "Compare", href: "/#products" },
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
    <footer className="border-t border-border-subtle px-6 py-16">
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs uppercase tracking-[0.15em] text-text-muted mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2">
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

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-6 border-t border-border-subtle text-xs text-text-muted">
          <span>
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}, a division of{" "}
            {SITE_CONFIG.parentCompany}. Designed in Vancouver, BC.
          </span>
          <span>{SITE_CONFIG.instagram}</span>
        </div>
      </div>
    </footer>
  );
}
