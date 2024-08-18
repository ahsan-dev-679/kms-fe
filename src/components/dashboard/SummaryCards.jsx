import React from "react";
import { Box, Flex, Text, Title } from "@mantine/core";

const SummaryCards = ({ heading = "", amount = "0", icon }) => {
  return (
    <Flex
      direction={"column"}
      justify={"space-between"}
      className="bg-white px-5 py-4 h-full shadow-md rounded-lg"
    >
      <Box>
        <Title
          fz={"clamp(0.8125rem, 0.5893rem + 0.7143vw, 1.125rem)"}
          c={"#565656"}
          fw={"500"}
        >
          {heading}
        </Title>
      </Box>
      <Flex justify={"space-between"} align={"center"}>
        <Title className="text-[#141A3A] text-[24px] font-[600] !outfit">
          {amount}
        </Title>
        <Flex
          align={"center"}
          justify={"center"}
          className="text-[20px] rounded-full bg-[#BBF0D6] h-[48px] w-[48px] text-[#208251]"
        >
          {icon}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SummaryCards;
