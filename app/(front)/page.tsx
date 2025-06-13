import { DashboardPreview } from "@/components/frontend/dashboard-preview";
import FeaturesGrid from "@/components/frontend/features-grid";
import HeroSection from "@/components/frontend/hero-section";
import LogoCloud from "@/components/frontend/logo-cloud";
import Pricing2 from "@/components/frontend/pricing-2";
import React from "react";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto">
      <HeroSection />
      <LogoCloud />
      <DashboardPreview />
      <FeaturesGrid />
      <Pricing2 />
    </main>
  );
}
