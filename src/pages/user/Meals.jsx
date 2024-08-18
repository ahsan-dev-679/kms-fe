import CategorySidebar from "@/components/common/CategorySidebar";
import MealsCard from "@/components/common/MealsCard";
import { Box, Grid, Flex, Button, Popover, Text } from "@mantine/core";
import React, { useState } from "react";
import { menuList, mealCategories } from "@/data/data";
import { useCartStore } from "@/stores/cart.store";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import CartDrawer from "@/components/cart/CartDrawer";
import AuthModal from "@/components/modal/AuthModal";
import { Link } from "react-router-dom";

const Meals = () => {
  const [activeCategory, setActiveCategory] = useState(mealCategories[0].name);
  const [opened, { open, close }] = useDisclosure(false);
  const midScreen = useMediaQuery("(max-width: 1024px)");

  return (
    <>
      <Box className="border-0 border-red-500">
        <Grid justify="space-around" align="" gutter="xl" className="mx-6">
          <Grid.Col
            span={midScreen ? 12 : 2.5}
            className=" rounded-md border-0"
          >
            {midScreen ? (
              <>
                <Popover
                  className={"shadow-md rounded-lg"}
                  position="bottom"
                  withArrow
                  shadow="md"
                >
                  <Popover.Target>
                    <Link
                      className={`px-[48%] items-center w-full py-2 rounded-lg font-semibold text-md bg-[#4FAE5A] text-[#fff]`}
                    >
                      {activeCategory}
                    </Link>
                  </Popover.Target>

                  <Popover.Dropdown
                    className={"shadow-md rounded-lg bg-[#fff]"}
                  >
                    <Text size="lg" c={"dark"} fw={600} align={"center"} py={4}>
                      Category
                    </Text>
                    <div className="grid grid-cols-3 gap-2">
                      {mealCategories?.map((category, idx) => (
                        <Link
                          onClick={() => {
                            setActiveCategory(category.name);
                          }}
                          key={idx}
                          className={`pr-24 pl-4 text-left w-full py-2 rounded-lg font-semibold text-sm hover:bg-[#F3F4F6] text-[#4f4f4f]`}
                        >
                          {category.name}
                        </Link>
                      ))}
                    </div>
                  </Popover.Dropdown>
                </Popover>
              </>
            ) : (
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
            )}
          </Grid.Col>
          <Grid.Col span={midScreen ? 12 : 9.5}>
            <Box className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
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
