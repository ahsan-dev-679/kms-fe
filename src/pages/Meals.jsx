import CategorySidebar from "@/components/common/CategorySidebar";
import MealsCard from "@/components/common/MealsCard";
import { Box, Grid, Flex, Button } from "@mantine/core";
import React, { useState } from "react";
import { menuList, mealCategories } from "@/data/data";
import { useCartStore } from "@/stores/cart.store";
import { useDisclosure } from "@mantine/hooks";
import CartDrawer from "@/components/cart/CartDrawer";

const Meals = () => {
  const [activeCategory, setActiveCategory] = useState(mealCategories[0].name);
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Box className="border-0 border-red-500">
        <Button onClick={open}>View Cart</Button>
        <Grid justify="space-around" align="" gutter="xl" className="mx-6">
          <Grid.Col span={2.5} className="border-0 border-green-500">
            <Flex direction={"column"} gap={2}>
              {mealCategories?.map((category, idx) => (
                <CategorySidebar
                  key={idx}
                  name={category.name}
                  isActive={activeCategory === category.name}
                  onClick={() => setActiveCategory(category.name)}
                />
              ))}
            </Flex>
          </Grid.Col>
          <Grid.Col span={9.5} className="border-2 border-yellow-400">
            <Box className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {menuList?.map((value, idx) => (
                <MealsCard meal={value} key={idx} />
              ))}
            </Box>
          </Grid.Col>
        </Grid>
      </Box>
      <CartDrawer opened={opened} close={close} />
    </>
  );
};

export default Meals;
