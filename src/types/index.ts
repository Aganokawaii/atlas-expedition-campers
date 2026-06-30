// ═══════════════════════════════════════════
// Summit Expedition — Type Definitions
// ═══════════════════════════════════════════

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  startingPrice: number;
  weight: string;
  weightLbs: number;
  specs: ProductSpec[];
  features: ProductFeature[];
  compatibleTrucks: string[];
  delivery: string;
  warranty: string;
}

export interface ProductSpec {
  label: string;
  value: string;
  icon?: string;
}

export interface ProductFeature {
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  name: string;
  location: string;
  quote: string;
  stars: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FeaturePillar {
  title: string;
  description: string;
  icon: string;
}

export interface SpecBadge {
  label: string;
  status: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface CommunityPhoto {
  handle: string;
  alt: string;
}
