import React from "react";
import { Box, Flex, Image, Text } from "@mantine/core";
import { formatPrice } from "@/utils";
import { baseURL } from "@/configs/axios.config";

const OrderItem = ({ item }) => {
  return (
    <Box className="border-[1px] rounded-md shadow-md px-2 py-2">
      <Flex>
        <Box className="w-[100px] h-[100px]">
          <Image src={baseURL + item?.images[0]} />
        </Box>
        <Flex className="px-2" direction={"column"} justify={"center"}>
          <Text lineClamp={1} size="md" c={"dark"}>
            {item?.title}
          </Text>
          <Text size="sm" fw={600} c={"black"}>
            Qty:
            <span className="font-semibold text-zinc-600">{item?.qty}</span>
          </Text>
          <Text size="sm" fw={600} c={"black"}>
            Price:
            <span className="font-semibold text-zinc-600">
              {formatPrice(item?.discountedPrice)}
            </span>
          </Text>
        </Flex>
      </Flex>
      <Text fw={600} ta="end" px={6}>
        {" "}
        {formatPrice(item?.discountedPrice * item?.qty)}
      </Text>
    </Box>
  );
};

export default OrderItem;
