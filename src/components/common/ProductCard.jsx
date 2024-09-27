import { Box, Flex, Image, Title, Text } from "@mantine/core";
import React from "react";

const ProductCard = ({ img }) => {
  return (
    <Flex
      gap={10}
      direction={"column"}
      className="px-4 cursor-pointer group h-full"
    >
      <Box className="relative ">
        <Image
          style={{
            height: 250,
            objectFit: "cover",
          }}
          className="rounded-3xl transition-transform duration-300 group-hover:scale-105 relative"
          src={img}
        />
        <button className="bg-white text-black group-hover:text-white group-hover:bg-black transition-colors duration-300 px-8 py-2 rounded-3xl font-semibold absolute top-4 right-2 z-10 text-lg">
          ₹ 199
        </button>
      </Box>
      <Title
        className="transition-colors duration-300 group-hover:text-primary-100"
        ta={"center"}
        order={2}
      >
        Classis Burger
      </Title>
      <Text>Lorem ipsum dolor sit amet dolor consectetur adipiscing elit</Text>
    </Flex>
  );
};

export default ProductCard;
