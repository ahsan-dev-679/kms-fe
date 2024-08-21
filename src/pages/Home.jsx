import React from "react";
import { Box } from "@mantine/core";
import HeroSection from "@/components/home/HeroSection";
import FeatureSection from "@/components/home/FeatureSection";
import SecondarySection from "@/components/home/SecondarySection";

const Home = () => {
  return (
    <Box>
      <HeroSection />
      <FeatureSection />
      <SecondarySection />
    </Box>
  );
};

export default Home;
