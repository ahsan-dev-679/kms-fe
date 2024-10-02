import CategorySidebar from "@/components/common/CategorySidebar";
import { Box, Grid, Flex, Popover, Text, Title, Skeleton } from "@mantine/core";
import React, { useState } from "react";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import CartDrawer from "@/components/cart/CartDrawer";
import { Link } from "react-router-dom";
import MealCardSk from "@/components/skeleton/MealCardSk";
import { useCategory } from "@/lib/tanstack-query/categoryQueries";
import { useMeals } from "@/lib/tanstack-query/mealQueries";
import MenuCard from "@/components/common/MenuCard";

const Meals = () => {
  
  const { meals, isLoading } = useMeals();

  const [activeCategory, setActiveCategory] = useState("All");
  const [opened, { open, close }] = useDisclosure(false);
  const midScreen = useMediaQuery("(max-width: 1024px)");
  const { isLoading: categoryLoader, categories } = useCategory({category:activeCategory||"all"});
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
                      {[{ name: "All" }, ...categories]?.map(
                        (category, idx) => (
                          <Link
                            onClick={() => {
                              setActiveCategory(category?.name);
                            }}
                            key={idx}
                            className={`pr-24 pl-4 text-left w-full py-2 rounded-lg font-semibold text-sm hover:bg-[#F3F4F6] text-[#4f4f4f]`}
                          >
                            {category?.name}
                          </Link>
                        )
                      )}
                    </div>
                  </Popover.Dropdown>
                </Popover>
              </>
            ) : (
              <Flex direction={"column"} gap={2}>
                {categoryLoader
                  ? Array.from({ length: 8 }).map((_, idx) => (
                      <Skeleton key={idx} height={30} mb={20} radius={"sm"} />
                    ))
                  : [{ name: "All" }, ...categories]?.map((category, idx) => (
                      <CategorySidebar
                        key={idx}
                        name={category?.name}
                        isActive={activeCategory === category.name}
                        onClick={() => setActiveCategory(category?.name)}
                      />
                    ))}
              </Flex>
            )}
          </Grid.Col>
          <Grid.Col span={midScreen ? 12 : 9.5}>
            <Box className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
              {isLoading ? (
                Array.from({ length: 8 }).map((_, idx) => (
                  <MealCardSk key={idx} />
                ))
              ) : meals && meals?.length > 0 ? (
                // meals?.map((value, idx) => <MealsCard meal={value} key={idx} />)
                meals?.map((value, idx) => (
                  <>
                    <MenuCard meal={value} key={idx} />
                  </>
                ))
              ) : (
                <Title
                  order={2}
                  ta={"center"}
                  className="col-span-full text-center mt-6"
                >
                  No meals found
                </Title>
              )}
            </Box>
          </Grid.Col>
        </Grid>
      </Box>
      <CartDrawer opened={opened} close={close} />
    </>
  );
};

export default Meals;
