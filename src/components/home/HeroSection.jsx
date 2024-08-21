import React from "react";
import { Box, Button, Flex, Image, Text, Title } from "@mantine/core";
import HeroBg from "@/assets/svg/hero.svg";
const HeroSection = () => {
  return (
    <Flex
      direction={"column"}
      style={{
        position: "relative",
        width: "100vw",
        padding: 0,
        marginTop: "-1.5rem",
        backgroundColor: "#ECF9EE",
        backgroundImage: `url(${HeroBg})`,
        backgroundSize: "cover",
        minHeight: "500px",
      }}
    >
      <Box
        style={{
          position: "absolute",
          padding: "50px 20px",
          borderRadius: "5px",
        }}
      >
        <Title py={8} order={1}>
          Stay nourished and satisfied with <br /> our menu of healthy and fresh
          <br />
          food available any time you need it!
        </Title>
        <Text py={6} c={"dimmed"}>
          Just confirm your order and enjoy our delicious at the best price
        </Text>
        <Button
          className="my-5"
          size="md"
          radius={"xl"}
          color="#01005F"
          style={{ marginRight: "10px" }}
        >
          Get Started
        </Button>
      </Box>
    </Flex>
  );
};

export default HeroSection;
