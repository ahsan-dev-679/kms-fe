import React from "react";
import { Box, Button, Flex, Image, Text, Title } from "@mantine/core";
import HeroBg from "@/assets/svg/hero.svg";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mantine/hooks";
const HeroSection = () => {
  const navigate = useNavigate();
  const isTab = useMediaQuery("(max-width:768px)");

  return (
    <Flex
      style={{
        minHeight: "600px",
        height: isTab ? "auto" : "50vh",
        width: "100%",
      }}
      direction={isTab ? "column" : "row"}
      className="-mt-6"
    >
      <div className="section-1 h-full w-full lg:w-[60%] inline-flex flex-col items-start justify-center px-12">
        <Title order={1} py={8} className="text-6xl">
          Discover Your
          <span className="text-primary-100"> Quick Bite Moment.</span>
        </Title>
        <Title py={8} order={5} c={"dimmed"} className="font-medium text-xl">
          Stay nourished and satisfied with our menu of healthy and fresh food
          available any time you need it!
        </Title>
        <Text py={8} c={"dimmed"}>
          Just confirm your order and enjoy our delicious at the best price
        </Text>
        <Button
          onClick={() => navigate("/meals")}
          className="my-5 transition-all duration-300 hover:scale-105 hover:text-primary-100 hover:bg-white hover:border-primary-100"
          size="xl"
          radius={"xl"}
          color="#4fae5a"
          style={{ marginRight: "10px" }}
        >
          Get Started
        </Button>
      </div>

      <div className="bg-primary-100 w-full lg:w-[40%] h-auto relative overflow-hidden py-6">
        <div className="relative z-10 flex justify-center items-center h-full">
          <img
            className="hero-img object-cover max-w-full h-auto rounded-[24px] transform rotate-[-5deg]"
            style={{ maxWidth: isTab ? "60%" : "85%" }}
            src="https://assets.website-files.com/61d3a7155d89b79cad2b9e32/61d3a7155d89b78ddc2b9e72_home-hero-restaurante-x-template-p-800.jpeg"
            alt="Hero Image"
          />
        </div>
      </div>
    </Flex>
  );
};

export default HeroSection;
