import { Box, Title, Flex, Text } from "@mantine/core";
import React from "react";
import { MdChevronRight } from "react-icons/md";
import Burger from "@/assets/icons/Burger.jsx";
import Breakfast from "@/assets/icons/Breakfast.jsx";
import Drink from "@/assets/icons/Drink.jsx";
import Desert from "@/assets/icons/Desert.jsx";

const BrowseCatalogs = () => {
  return (
    <Box className="py-8">
      <Title ta={"center"}>Explore our Catalogs</Title>
      <Box className="p-6 grid gap-10 grid-cols-1 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <CatalogsCard
          title={"Breakfast"}
          desc={`Kickstart your day with a delicious breakfast that fuels your morning! From fluffy pancakes to fresh fruit, there's something for everyone to enjoy and savor. It's the perfect way to energize your day!`}
          icon={<Breakfast />}
        />
        <CatalogsCard
          title={"Fastfood"}
          desc={`Satisfy your cravings with quick and tasty fast food! Enjoy a juicy burger, crispy fries, or a refreshing salad—flavor-packed options for every appetite, perfect for on-the-go meals!`}
          icon={<Burger />}
        />
        <CatalogsCard
          title={"Drinks"}
          desc={`Quench your thirst with a refreshing drink! From vibrant smoothies and revitalizing juices to classic sodas and invigorating teas, there’s a perfect sip for every occasion. Cheers to flavor!`}
          icon={<Drink />}
        />
        <CatalogsCard
          title={"Desserts"}
          desc={`Indulge your sweet tooth with delightful desserts! From rich chocolate cake and creamy cheesecake to fresh fruit tarts and decadent ice cream, each treat promises a blissful finish to any meal. Enjoy every bite!`}
          icon={<Desert />}
        />
      </Box>
    </Box>
  );
};

const CatalogsCard = ({ title, desc, icon }) => {
  return (
    <Flex
      gap={20}
      className="border-[1px] p-6 duration-500 hover:scale-105 hover:shadow-xl shadow-md rounded-xl"
      direction={"column"}
      align={"center"}
    >
      {icon}

      <Title order={4}>{title}</Title>
      <Text c={"dimmed"}>{desc}</Text>
      <button className="font-bold text-lg text-primary-100 flex items-center">
        Explore menu
        <span>
          <MdChevronRight size={26} />
        </span>
      </button>
    </Flex>
  );
};

export default BrowseCatalogs;
