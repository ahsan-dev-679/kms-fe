import { Box, Text, Title } from "@mantine/core";
import React from "react";
import ProductCard from "../common/ProductCard";

const BrowseMenu = () => {
  return (
    <section>
      <Title ta={"center"} className="pb-2">
        {" "}
        Explore Our Menu
      </Title>
      <Text className="pb-6 text-lg" ta={"center"} c={"dimmed"}>
        Discover a variety of delicious dishes crafted to satisfy every craving!
      </Text>

      <Box className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <ProductCard
          img={
            "https://kms-be-production.up.railway.app/uploads/000129906_chicken-tikka.jpg"
          }
        />
        <ProductCard
          img={
            "https://cdn.prod.website-files.com/61d3a7155d89b7ac682b9e4c/61d3a7155d89b7774b2b9f1f_classic-burger-restaurante-x-template-p-800.jpeg"
          }
        />
        <ProductCard
          img={
            "https://kms-be-production.up.railway.app/uploads/000129906_chicken-tikka.jpg"
          }
        />
        <ProductCard
          img={
            "https://cdn.prod.website-files.com/61d3a7155d89b7ac682b9e4c/61d3a7155d89b7774b2b9f1f_classic-burger-restaurante-x-template-p-800.jpeg"
          }
        />
      </Box>
    </section>
  );
};

export default BrowseMenu;
