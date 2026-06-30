import HeroSection from "@/components/home/HeroSection";
import ProductShowcase from "@/components/home/ProductShowcase";
import FeaturesGrid from "@/components/home/FeaturesGrid";
import TruckCompatibility from "@/components/home/TruckCompatibility";
import TestingBadges from "@/components/home/TestingBadges";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <main style={{ width: "100%" }}>
      <HeroSection />
      <ProductShowcase />
      <FeaturesGrid />
      <TruckCompatibility />
      <TestingBadges />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
