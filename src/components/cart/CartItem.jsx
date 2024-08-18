import { colors } from "@/configs/theme.config";
import {
  ActionIcon,
  Box,
  Divider,
  Flex,
  Image,
  NumberInput,
  Text,
} from "@mantine/core";
import React from "react";
import { ImPlus, ImMinus } from "react-icons/im";

const CartItem = ({ item }) => {
  return (
    <Box className="my-4">
      <Flex justify={"flex-start"} gap={20} align={"center"}>
        <Box style={{ width: 75, height: 75 }}>
          <Image src={item.img} />
        </Box>
        <Flex direction={"column"}>
          <Text lineClamp={1} align={"end"} size="sm" c="dimmed">
            Rs.
            {item.price}
          </Text>
          <Text lineClamp={1}>{item.title}</Text>
        </Flex>
      </Flex>
      <Flex align={"center"} justify={"flex-end"}>
        <ActionIcon variant="filled" color={colors.zinc[400]}>
          <ImMinus />
        </ActionIcon>
        <NumberInput
          style={{ width: 40, border: "none" }}
          width={"fit"}
          allowDecimal={false}
          allowNegative={false}
          hideControls
          size={"md"}
        />
        <ActionIcon variant="filled" color={colors.primary[100]}>
          <ImPlus />
        </ActionIcon>
      </Flex>
      <Divider />
    </Box>
  );
};

export default CartItem;
