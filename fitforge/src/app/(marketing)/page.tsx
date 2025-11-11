"use client";
import { Box } from "@mui/material";
import MarketingHeader from "@/components/marketing/MarketingHeader";
import HeroSection from "@/components/marketing/HeroSection";
import FeaturesSection from "@/components/marketing/FeatureSection";
import Footer from "@/components/marketing/Footer";

export default function LandingPage() {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <MarketingHeader />
      <HeroSection />
      <FeaturesSection />
      <Footer />
    </Box>
  );
}
