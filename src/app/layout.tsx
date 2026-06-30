import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Atlas Expedition — Lightweight Truck Campers & Canopies",
  description:
    "Lightweight truck campers engineered for the backcountry. Under 1,000 lbs dry. Solar-ready. 4-season rated. Designed in Vancouver, BC.",
  keywords: [
    "truck camper",
    "lightweight camper",
    "expedition vehicle",
    "off-grid camper",
    "overland",
    "4x4 camper",
    "Canadian made",
    "pop-up camper",
    "aluminum truck camper",
  ],
  openGraph: {
    title: "Atlas Expedition — Charged by Nature",
    description:
      "Lightweight truck campers engineered for the backcountry. Under 1,000 lbs dry. Solar-ready.",
    siteName: "Atlas Expedition",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-bg-deep text-text-primary">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
