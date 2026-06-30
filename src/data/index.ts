import { Product, FeaturePillar, SpecBadge, FAQItem, Testimonial } from "@/types";

export const SITE_CONFIG = {
  name: "Summit Expedition",
  tagline: "Go further. Stay longer.",
  location: "Vancouver, BC",
  email: "info@summitexpedition.ca",
  instagram: "@summitexpedition",
  parentCompany: "Nexum International Mobility Corp.",
} as const;

export const PRODUCTS: Product[] = [
  {
    slug: "expedition-truck-camper",
    name: "Expedition Truck Camper",
    tagline: "Lightweight. Solar-ready. Built for the long way around.",
    description:
      "A slide-in truck camper engineered for half-ton and mid-size trucks. Military-grade aluminum exoskeleton. No-wood composite panels that will never rot. R-7 all-season insulation. 200W solar integration. Sets up in five minutes.",
    startingPrice: 22900,
    weight: "800 lbs",
    weightLbs: 800,
    delivery: "8-10 weeks",
    warranty: "2-year limited",
    specs: [
      { label: "Dry Weight", value: "800 lbs" },
      { label: "Insulation", value: "R-7" },
      { label: "Solar", value: "200W" },
      { label: "Setup", value: "5 minutes" },
      { label: "Construction", value: "Aluminum + Composite" },
      { label: "Seasons", value: "4-Season Rated" },
    ],
    features: [
      {
        title: "Military-Grade Aluminum Exoskeleton",
        description:
          "6061-T6 aerospace-grade aluminum tubing forms a rigid, corrosion-resistant frame that will outlast your truck.",
        icon: "🛡️",
      },
      {
        title: "No-Wood Composite Panels",
        description:
          "Closed-cell foam core laminated with FRP skins. Zero wood means zero rot, zero delamination, zero worries.",
        icon: "🪵",
      },
      {
        title: "200W Solar + Lithium Ready",
        description:
          "Integrated monocrystalline solar panels with MPPT charge controller. Pre-wired for up to 400Ah LiFePO4 battery bank.",
        icon: "☀️",
      },
      {
        title: "R-7 All-Season Insulation",
        description:
          "Tested to -6°C on the Duffey Lake Road corridor. 12 nights between Lillooet and Pemberton without a shiver.",
        icon: "❄️",
      },
      {
        title: "5-Minute Setup",
        description:
          "Standard truck camper tie-down system. Load, secure, and go. Most owners handle it solo with basic jacks.",
        icon: "⏱️",
      },
      {
        title: "Modular Interior",
        description:
          "Portable amenities that work inside the camper or outside at camp. Configure for your trip, change it next time.",
        icon: "🧩",
      },
    ],
    compatibleTrucks: [
      "Ram 1500 / 2500",
      "Ford F-150 / F-250",
      "GMC Sierra 1500 / 2500",
      "Toyota Tundra / Tacoma",
      "Chevrolet Silverado 1500 / 2500",
      "Nissan Titan",
    ],
  },
  {
    slug: "modular-truck-canopy",
    name: "Borderless Canopy",
    tagline: "Modular aluminum canopy. No-drill install. Minutes to mount.",
    description:
      "A lightweight, modular truck canopy that transforms your bed into a secure, weatherproof cargo space. Aerospace-grade aluminum. Marine-grade seals. No-drill quick-release clamp system.",
    startingPrice: 2995,
    weight: "< 180 lbs",
    weightLbs: 180,
    delivery: "1 week",
    warranty: "3-year + lifetime support",
    specs: [
      { label: "Weight", value: "< 180 lbs" },
      { label: "Material", value: "Aerospace Aluminum" },
      { label: "Install", value: "No-Drill Clamp" },
      { label: "Sealing", value: "Marine-Grade" },
      { label: "Delivery", value: "1 Week" },
      { label: "Warranty", value: "3 Years" },
    ],
    features: [
      {
        title: "Aerospace-Grade Aluminum",
        description:
          "Lighter than steel, stronger than you'll ever need. Powder-coated for decades of corrosion resistance.",
        icon: "✈️",
      },
      {
        title: "No-Drill Quick-Release Clamps",
        description:
          "Mounts in minutes using your truck's existing bed rail system. No holes, no permanent modifications.",
        icon: "🔧",
      },
      {
        title: "Marine-Grade Sealing",
        description:
          "Compression bulb seals on every edge. Your gear stays dry through Pacific Northwest downpours and coastal humidity.",
        icon: "🌊",
      },
      {
        title: "Tinted Privacy Windows",
        description:
          "Premium package includes all-around tinted glass. Keeps prying eyes out and UV damage down.",
        icon: "🪟",
      },
      {
        title: "Interior LED Lighting",
        description:
          "Premium package adds motion-activated LED strips. Find your gear at midnight without a headlamp.",
        icon: "💡",
      },
      {
        title: "Roof Rail System",
        description:
          "Optional cross bars expand capacity for bikes, kayaks, or a rooftop tent. Your canopy, your setup.",
        icon: "🚲",
      },
    ],
    compatibleTrucks: [
      "Ram 1500 / 2500",
      "Ford F-150 / F-250",
      "GMC Sierra",
      "Toyota Tundra",
      "Chevrolet Silverado",
      "Jeep Gladiator",
    ],
  },
];

export const FEATURES: FeaturePillar[] = [
  {
    title: "Sustainable by Design",
    description:
      "200W solar integration and energy-efficient construction mean no generator, no hookups, no compromises. Your camper charges while you explore.",
    icon: "☀️",
  },
  {
    title: "Minimalist. Actually.",
    description:
      "800 lbs dry. Military-grade aluminum and no-wood composites cut weight without cutting corners. Your truck hauls less, goes farther.",
    icon: "🪶",
  },
  {
    title: "Modular Architecture",
    description:
      "Portable amenities that work inside the camper or outside at camp. Configure your setup, change it later. The camper adapts — not the other way around.",
    icon: "🧩",
  },
  {
    title: "Built to Outlast",
    description:
      "No wood. No rot. No delamination. Our composite structural panels and aluminum exoskeleton survive Vancouver Island rainforest and Mojave heat alike.",
    icon: "🛡️",
  },
];

export const TESTING_BADGES: SpecBadge[] = [
  { label: "Rain Tested", status: "Heavy downpour rated", icon: "🌧️" },
  { label: "Cold Weather Proven", status: "Sub-zero conditions", icon: "❄️" },
  { label: "Heat Resistant", status: "Desert-grade insulation", icon: "🌵" },
  { label: "Off-Road Ready", status: "Rugged terrain tested", icon: "🪨" },
  { label: "Wind Rated", status: "High-wind stability", icon: "💨" },
];

export const TRUCK_BRANDS = [
  "Ram 1500 / 2500",
  "Ford F-150 / F-250",
  "GMC Sierra",
  "Toyota Tundra / Tacoma",
  "Chevrolet Silverado",
  "Nissan Titan",
  "Jeep Gladiator",
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Greg & Anya M.",
    location: "Squamish, BC",
    quote:
      "Took our Summit up the Duffey Lake Road corridor last October. 12 nights between Lillooet and Pemberton. The insulation handled overnight lows around -6°C like it was nothing.",
    stars: 5,
  },
  {
    name: "Marcus T.",
    location: "Canmore, AB",
    quote:
      "We've owned three campers over the years. This is the first one that doesn't feel like we're dragging a house behind us. The weight difference changes everything — fuel economy, handling, where you can actually go.",
    stars: 5,
  },
  {
    name: "Sarah K.",
    location: "Whistler, BC",
    quote:
      "The modular setup is a game changer. Cook outside when it's nice, move the table out for stargazing, bring it all inside when the weather turns. Whoever designed this actually camps.",
    stars: 5,
  },
];

export const FAQS: FAQItem[] = [
  {
    question: "What trucks are compatible with Summit campers?",
    answer:
      "Our campers are engineered for half-ton and heavy-duty trucks from Ram, Ford, GMC, Chevrolet, Toyota, Nissan, and Jeep. We build to your specific bed dimensions and payload rating. Contact us with your VIN for a compatibility check — we'll tell you honestly if it works.",
  },
  {
    question: "How much does an Expedition Camper weigh?",
    answer:
      "800 lbs dry weight. That's the base configuration without water, gear, or optional add-ons. Even fully loaded for a weekend trip, most configurations stay under 1,200 lbs — well within half-ton payload ratings. We recommend weighing your truck at a certified scale before ordering.",
  },
  {
    question: "Can I install the camper myself?",
    answer:
      "Yes. The camper uses a standard truck camper tie-down system and can be loaded or unloaded in about 5 minutes with basic camper jacks (not included). We provide full documentation and video guides. Most owners handle it solo after the first time.",
  },
  {
    question: "How does the deposit and build process work?",
    answer:
      "A $5,000 refundable deposit secures your build slot. Current lead time is 8–10 weeks from order confirmation. The balance is due on delivery. Your deposit is fully refundable within 7 days of placement. After production begins, it becomes non-refundable. Build configuration changes may be accommodated if requested early enough.",
  },
  {
    question: "Do you ship outside Canada?",
    answer:
      "Yes. We offer free enclosed freight shipping to Canada and the continental United States. International shipping is available on request — we'll provide a quote based on your location. White-glove delivery with walkthrough is available at additional cost.",
  },
  {
    question: "What does the warranty cover?",
    answer:
      "Our 2-year limited warranty covers manufacturing defects in the aluminum shell structure, electrical systems and wiring, plumbing and water systems, and heating system components. Damage from misuse, modifications, accidents, or normal wear and tear is excluded. We stand behind our work — and we answer emails fast.",
  },
];
