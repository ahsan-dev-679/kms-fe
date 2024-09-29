import { Box, Text, Title } from "@mantine/core";
import React from "react";
import ProductCard from "../common/ProductCard";
import { useMeals } from "@/lib/tanstack-query/mealQueries";
import MealCardSk from "../skeleton/MealCardSk";
import MenuCard from "../common/MenuCard";

const BrowseMenu = () => {
  const { meals, isLoading } = useMeals();

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
        {isLoading
          ? Array.from({ length: 4 }).map((_, idx) => <MealCardSk key={idx} />)
          : meals &&
            meals?.length > 0 &&
            meals
              ?.slice(0, 4)
              ?.map((value, idx) => <MenuCard meal={value} key={idx} />)}
      </Box>
    </section>
  );
};

export default BrowseMenu;
