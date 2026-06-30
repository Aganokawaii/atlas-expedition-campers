"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/data";

const NAV_ITEMS = [
  { label: "Camper", href: "/#products" },
  { label: "Canopy", href: "/#canopy" },
  { label: "Features", href: "/#features" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/#faq" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-5 flex items-center justify-between bg-bg-deep/85 backdrop-blur-xl border-b border-border-subtle">
      <Link
        href="/"
        className="font-display text-xl tracking-[0.08em] text-text-primary hover:text-accent transition-colors no-underline"
      >
        ATLAS<span className="text-accent">.</span>EXPEDITION
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-8">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="text-sm text-text-secondary hover:text-text-primary transition-colors no-underline"
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="/#contact"
          className="bg-accent hover:bg-accent-warm text-white px-5 py-2.5 rounded-md text-sm font-medium transition-all no-underline"
        >
          Build Yours
        </Link>
      </nav>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-px bg-text-primary transition-transform ${
            menuOpen ? "rotate-45 translate-y-[5px]" : ""
          }`}
        />
        <span
          className={`block w-6 h-px bg-text-primary transition-opacity ${
            menuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-6 h-px bg-text-primary transition-transform ${
            menuOpen ? "-rotate-45 -translate-y-[5px]" : ""
          }`}
        />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-bg-surface border-b border-border-subtle p-6 flex flex-col gap-4 md:hidden">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-text-secondary hover:text-text-primary transition-colors text-lg no-underline"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="bg-accent hover:bg-accent-warm text-white px-5 py-3 rounded-md text-center font-medium no-underline"
            onClick={() => setMenuOpen(false)}
          >
            Build Yours
          </Link>
        </div>
      )}
    </header>
  );
}
