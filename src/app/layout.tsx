import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Summit Expedition — Lightweight Truck Campers & Canopies",
  description:
    "Lightweight truck campers engineered for the backcountry. 800 lbs dry. Solar-ready. Built for everything from coastal rainforests to Rocky Mountain passes. Designed in Vancouver, BC.",
  keywords: [
    "truck camper",
    "lightweight camper",
    "expedition vehicle",
    "off-grid camper",
    "overland",
    "4x4 camper",
    "Canadian made",
  ],
  openGraph: {
    title: "Summit Expedition — Go Further. Stay Longer.",
    description:
      "Lightweight truck campers engineered for the backcountry. 800 lbs dry. Solar-ready.",
    siteName: "Summit Expedition",
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
