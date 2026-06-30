// ═══════════════════════════════════════════
// Atlas Expedition — Type Definitions
// ═══════════════════════════════════════════

export interface CamperTier {
  name: string;
  price: number;
  tagline: string;
  specs: ProductSpec[];
  highlights: string[];
}

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
  tiers?: CamperTier[];
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

export interface CommunityStat {
  value: string;
  label: string;
}
