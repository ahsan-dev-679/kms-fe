import { Box, Flex, Image, Title, Text, Button } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";

const SecondarySection = () => {
  return (
    <Flex className="py-8">
      <Flex
        direction={"column"}
        gap={20}
        // align={"center"}
        justify={"center"}
        className="bg-primary-100 w-1/2 px-6"
      >
        <Text className="text-white" ta={"start"}>
          _____________
        </Text>
        <Title className="text-white tracking-widest">
          Taste the Most Delicious Burger in Germany
        </Title>
        <Text className="text-white text-lg tracking-wider">
          Enjoy a juicy burger made with fresh ingredients and tantalizing
          toppings. Our unique recipes will elevate your burger experience to
          new heights!
        </Text>
        <Link to={"/meals"}>
          <Button
            className="rounded-full text-black bg-[#fff] hover:scale-105 hover:text-primary-100 hover:bg-white transition-all duration-300"
            size="xl"
            w={"fit-content"}
          >
            Order Online
          </Button>
        </Link>
      </Flex>
      <Box className="w-1/2">
        <Image src="https://assets.website-files.com/61d3a7155d89b79cad2b9e32/61d3a7155d89b784872b9e7f_cta-restaurante-x-template-p-1080.jpeg" />
      </Box>
    </Flex>
  );
};

export default SecondarySection;
