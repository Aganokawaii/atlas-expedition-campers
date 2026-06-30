import { Product, FeaturePillar, SpecBadge, FAQItem, Testimonial, CommunityStat } from "@/types";

export const SITE_CONFIG = {
  name: "Atlas Expedition",
  tagline: "Charged by Nature",
  location: "Vancouver, BC",
  email: "info@atlasexpedition.net",
  instagram: "@atlasexpedition",
  parentCompany: "Nexum International Mobility Corp.",
} as const;

export const COMMUNITY_STATS: CommunityStat[] = [
  { value: "500+", label: "Happy Owners" },
  { value: "4.9", label: "Avg Rating" },
  { value: "50+", label: "Countries" },
];

export const PRODUCTS: Product[] = [
  {
    slug: "expedition-truck-camper",
    name: "Atlas Camper",
    tagline: "Lightweight. Solar-ready. Built for the long way around.",
    description:
      "A slide-in truck camper engineered for half-ton and mid-size trucks. 5-Series aluminum monocoque shell. XPS fire-rated insulation. Waterproof pop-up tent. Sets up in five minutes.",
    startingPrice: 19995,
    weight: "997–1,257 lbs",
    weightLbs: 997,
    delivery: "8–10 weeks",
    warranty: "2-year limited",
    specs: [
      { label: "Dry Weight", value: "997–1,257 lbs" },
      { label: "Sleeps", value: "2–3 People" },
      { label: "Bed", value: "Queen" },
      { label: "Solar", value: "200–400W" },
      { label: "Construction", value: "5-Series Aluminum" },
      { label: "Seasons", value: "4-Season Rated" },
    ],
    tiers: [
      {
        name: "TRAIL",
        price: 19995,
        tagline: "Tough enough. Priced right.",
        specs: [
          { label: "Battery", value: "100Ah LiFePO₄" },
          { label: "Solar", value: "200W" },
          { label: "Inverter", value: "2000W" },
          { label: "Diesel Heater", value: "5KW High-Altitude" },
          { label: "Fresh Water", value: "50L SS304" },
          { label: "Stove", value: "900W Induction" },
          { label: "Mattress", value: "50D High-Density Foam" },
          { label: "Jacks", value: "4× Manual Crank" },
        ],
        highlights: [
          "Queen bed, sleeps 2–3",
          "5-Series aluminum monocoque",
          "XPS fire-rated insulation",
          "Waterproof pop-up tent",
          "Marine-grade wood cabinets",
          "Outdoor kit: ladder, shovel, traction boards",
        ],
      },
      {
        name: "ASCENT",
        price: 23995,
        tagline: "Add solar. Go further.",
        specs: [
          { label: "Battery", value: "200Ah LiFePO₄" },
          { label: "Solar", value: "400W" },
          { label: "Inverter", value: "2000W" },
          { label: "Diesel Heater", value: "5KW High-Altitude" },
          { label: "Fresh Water", value: "50L SS304" },
          { label: "Stove", value: "900W Induction" },
          { label: "Awning", value: "270° Side Awning" },
          { label: "Lights", value: "4× Front Spotlights" },
        ],
        highlights: [
          "Everything in TRAIL, plus:",
          "400W solar — multi-day off-grid",
          "270° awning for camp kitchen",
          "4× spotlights for trail at night",
          "200Ah lithium for extended stays",
          "Same bulletproof aluminum shell",
        ],
      },
      {
        name: "SUMMIT",
        price: 28995,
        tagline: "Full off-grid. No compromises.",
        specs: [
          { label: "Battery", value: "300Ah LiFePO₄" },
          { label: "Solar", value: "400W" },
          { label: "Inverter", value: "2000W" },
          { label: "Diesel Heater", value: "5KW High-Altitude" },
          { label: "Fresh Water", value: "50L SS304" },
          { label: "Hot Water", value: "Yes — Full System" },
          { label: "Shower", value: "Indoor Shower" },
          { label: "Fridge", value: "Portable 12V Fridge" },
        ],
        highlights: [
          "Everything in ASCENT, plus:",
          "Hot water system",
          "Indoor shower",
          "Air-fiber mattress upgrade",
          "300Ah — weeks off-grid",
          "Portable 12V fridge included",
          "The full expedition package",
        ],
      },
    ],
    features: [
      {
        title: "5-Series Aluminum Monocoque",
        description:
          "Welded 5025 aluminum shell forms a rigid, corrosion-resistant structure. No frame. No flex. No leaks.",
        icon: "🛡️",
      },
      {
        title: "XPS Fire-Rated Insulation",
        description:
          "Closed-cell XPS foam throughout. Fire-rated. Won't absorb moisture. Keeps you warm at -6°C without condensation.",
        icon: "🔥",
      },
      {
        title: "400W Solar + Lithium",
        description:
          "Monocrystalline panels with MPPT controller. Up to 300Ah LiFePO₄ battery bank. No generator. No hookups.",
        icon: "☀️",
      },
      {
        title: "Waterproof Pop-Up Tent",
        description:
          "UV-resistant fabric with waterproof coating. 35.4″ pop-up height. Double-layer acrylic windows with bug screens.",
        icon: "🏕️",
      },
      {
        title: "5-Minute Setup",
        description:
          "Standard truck camper tie-down system. 4× manual crank jacks included. Most owners handle it solo.",
        icon: "⏱️",
      },
      {
        title: "Marine-Grade Interior",
        description:
          "Eco-friendly marine wood cabinets. Rotating marble-top table. 50D foam cushions. Built for actual living.",
        icon: "🪵",
      },
    ],
    compatibleTrucks: [
      "Ford F-150 (2021+)",
      "Ram 1500 (2019+)",
      "Chevrolet Silverado 1500",
      "Toyota Tundra (2022+)",
      "Toyota Tacoma (2016+)",
      "Ford Ranger (2023+)",
    ],
  },
  {
    slug: "modular-truck-canopy",
    name: "Aero Canopy",
    tagline: "Gull-wing aluminum canopy. IP65 sealed. No-drill install.",
    description:
      "The Aero Series canopy — gull-wing side doors, IP65 weather sealing, and a welded marine-grade aluminum body rated for 300 kg on the roof. Installs in minutes with no drilling.",
    startingPrice: 2995,
    weight: "180–230 lbs",
    weightLbs: 180,
    delivery: "1 week",
    warranty: "2-year limited",
    specs: [
      { label: "Material", value: "Marine Aluminum" },
      { label: "Sealing", value: "IP65 Rated" },
      { label: "Roof Load", value: "300 kg Static" },
      { label: "Doors", value: "Gull-Wing ×2" },
      { label: "Install", value: "No-Drill Clamp" },
      { label: "Corrosion", value: "ASTM B117 720h+" },
    ],
    features: [
      {
        title: "Gull-Wing Side Doors",
        description:
          "Both sides open upward on gas struts. 6-point locking. Full standing access to your gear from either side.",
        icon: "🪽",
      },
      {
        title: "IP65 Weather Sealing",
        description:
          "Multi-stage compression seals on every edge and seam. Your gear stays dry through Pacific Northwest monsoon season.",
        icon: "🌊",
      },
      {
        title: "300 kg Static Roof Load",
        description:
          "Rated for rooftop tents, kayaks, or a full expedition rack. 200 kg dynamic. Built like a roof, not an afterthought.",
        icon: "🏋️",
      },
      {
        title: "No-Drill Clamp System",
        description:
          "Clamps to your factory bed rails. Installs in minutes. Zero permanent modifications. Bring it to your next truck.",
        icon: "🔧",
      },
      {
        title: "ASTM B117 Certified",
        description:
          "720+ hours salt spray resistance. Marine-grade powder coat. Built for Canadian winters and coastal salt air.",
        icon: "🧂",
      },
      {
        title: "Modular Side Panels",
        description:
          "Choose sliding glass windows for visibility or MOLLE panels for gear. Swap later. The canopy adapts to your trip.",
        icon: "🧩",
      },
    ],
    compatibleTrucks: [
      "Ford F-150 (2021+) 5'6″ / 6'6″",
      "Ram 1500 (2019+) 5'7″ / 6'4″",
      "Chevrolet Silverado 1500 (2019+) 5'8″ / 6'6″",
      "Toyota Tundra (2022+) 5'6″ / 6'6″",
      "Toyota Tacoma (2016+) 5′ / 6′",
      "Ford Ranger (2023+) 5′",
      "Jeep Gladiator",
    ],
  },
];

export const FEATURES: FeaturePillar[] = [
  {
    title: "Sustainable by Design",
    description:
      "400W solar integration and energy-efficient construction. No generator. No hookups. Your camper charges while you explore. That's what 'Charged by Nature' means.",
    icon: "☀️",
  },
  {
    title: "Minimalist. Actually.",
    description:
      "Under 1,000 lbs dry on the base model. 5-Series aluminum monocoque and XPS composites cut weight without cutting corners. Your truck hauls less, goes farther.",
    icon: "🪶",
  },
  {
    title: "Modular Architecture",
    description:
      "Portable amenities work inside the camper or outside at camp. Three tiers — TRAIL, ASCENT, SUMMIT — so you buy what you need, not what a brochure says you should want.",
    icon: "🧩",
  },
  {
    title: "Built to Outlast",
    description:
      "Welded aluminum. Fire-rated XPS. Marine-grade wood. No particle board. No staples. No shortcuts. This thing survives Vancouver Island rainforest and Mojave heat alike.",
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
  "Ford F-150",
  "Ram 1500",
  "Chevrolet Silverado",
  "GMC Sierra",
  "Toyota Tundra",
  "Toyota Tacoma",
  "Ford Ranger",
  "Jeep Gladiator",
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Greg & Anya M.",
    location: "Squamish, BC",
    quote:
      "Took our Atlas up the Duffey Lake Road corridor last October. 12 nights between Lillooet and Pemberton. The insulation handled overnight lows around –6°C like it was nothing.",
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
    question: "What trucks are compatible with Atlas campers?",
    answer:
      "Our campers are engineered for half-ton and mid-size trucks from Ford, Ram, Chevrolet, GMC, Toyota, and more. The TRAIL trim starts under 1,000 lbs dry — well within most half-ton payload ratings. We build to your specific bed dimensions and VIN. Contact us for a free compatibility check — we'll tell you honestly if it works.",
  },
  {
    question: "How much does the Atlas Camper weigh?",
    answer:
      "997–1,257 lbs dry, depending on configuration. The TRAIL starts lightest. Even fully loaded for a weekend trip, most setups stay under 1,500 lbs — comfortable for any half-ton truck. We recommend weighing your truck at a certified CAT Scale before ordering so we can optimize your build.",
  },
  {
    question: "What's the difference between TRAIL, ASCENT, and SUMMIT?",
    answer:
      "TRAIL ($19,995) is the essentials — 100Ah battery, 200W solar, diesel heater, 50L water. Great for weekend warriors. ASCENT ($23,995) adds 400W solar, 200Ah lithium, 270° awning, and spotlights — built for multi-day trips. SUMMIT ($28,995) is the full off-grid package: 300Ah, hot water, indoor shower, and a portable fridge. No generator, no hookups, no compromises.",
  },
  {
    question: "How does the deposit and build process work?",
    answer:
      "A $5,000 refundable deposit secures your build slot. Current lead time is 8–10 weeks from order confirmation. The remaining balance is due on delivery. Your deposit is fully refundable within 7 days. After production begins, it becomes non-refundable — but we can usually accommodate configuration changes if you reach out early.",
  },
  {
    question: "Do you ship outside Canada?",
    answer:
      "Yes. We offer free enclosed freight shipping to Canada and the continental United States. International shipping is available on request — we'll provide a quote based on your location. White-glove delivery with a full walkthrough is available for an additional fee.",
  },
  {
    question: "What does the warranty cover?",
    answer:
      "Our 2-year limited warranty covers manufacturing defects in the aluminum shell structure, electrical systems and wiring, plumbing and water systems, and heating components. Damage from misuse, modifications, accidents, or normal wear and tear is excluded. We stand behind our work — and we answer emails fast.",
  },
];
