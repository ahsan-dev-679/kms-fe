import React from "react";
import { Box } from "@mantine/core";
import HeroSection from "@/components/home/HeroSection";
import FeatureSection from "@/components/home/FeatureSection";
import SecondarySection from "@/components/home/SecondarySection";
import BrowseCatalogs from "@/components/home/BrowseCatalogs";
import FollowUs from "@/components/home/FollowUs";
import OurPartners from "@/components/home/OurPartners";
import BrowseMenu from "@/components/home/BrowseMenu";

const Home = () => {
  return (
    <Box>
      <HeroSection />
      <OurPartners />
      <BrowseCatalogs />
      <BrowseMenu />
      <FollowUs />
      <SecondarySection />
    </Box>
  );
};

export default Home;
