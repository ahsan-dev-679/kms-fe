import { colors } from "@/configs/theme.config";
import { useCartStore } from "@/stores/cart.store";
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
import { FaPlus, FaMinus } from "react-icons/fa6";

const CartItem = ({ item }) => {
  const { addToCart, decrementQty } = useCartStore();

  return (
    <Box className="my-4">
      <Flex justify={"flex-start"} gap={10} align={"center"}>
        <Box style={{ width: 75, height: 75 }}>
          <Image src={item.img} />
        </Box>
        <Flex direction={"column"} className="w21-full">
          <Text lineClamp={1}>{item.title}</Text>
          <Text lineClamp={1} align={"start"} size="sm" c="dimmed">
            Rs.
            {item.price}
          </Text>
        </Flex>
      </Flex>
      <Flex align={"center"} justify={"flex-end"}>
        <ActionIcon
          onClick={() => decrementQty(item._id)}
          variant="filled"
          radius={"xl"}
          color="#fff"
          className="!border-2 border-zinc-300 text-black cursor-pointer"
        >
          <FaMinus size={16} fill="#000" />
        </ActionIcon>
        <NumberInput
          classNames={{
            input: "border-none outline-none",
          }}
          // onChange={(value)=>}
          defaultValue={1}
          value={item.qty}
          style={{ width: 45, border: "none" }}
          allowDecimal={false}
          allowNegative={false}
          hideControls
          size={"md"}
        />
        <ActionIcon
          onClick={() => addToCart(item)}
          variant="filled"
          color="#fff"
          radius={"xl"}
          className="!border-2 border-zinc-300 text-black cursor-pointer"
        >
          <FaPlus size={16} fill="#000" />
        </ActionIcon>
      </Flex>
      <Divider />
    </Box>
  );
};

export default CartItem;
