import React from "react";
import { Drawer, Button, Box, Flex, Text } from "@mantine/core";
import { menuList } from "@/data/data";
import CartItem from "./CartItem";

const CartDrawer = ({ opened, close }) => {
  return (
    <Drawer
      radius={"md"}
      size="sm"
      position="right"
      opened={opened}
      onClose={close}
      title="Your Cart"
    >
      <Box>
        <Flex justify={"flex-end"}>
          <Button radius={"xl"} size="xs" color="red">
            Clear Cart
          </Button>
        </Flex>
        {menuList
          ?.map((value, idx) => <CartItem key={idx} item={value} />)
          .slice(0, 5)}
      </Box>

      {/* Total Summart */}
      <Box>
        <Flex align={"center"} justify={"space-between"}>
          <Text>Total</Text>
          <Text>Rs. 990</Text>
        </Flex>
        <Flex align={"center"} justify={"space-between"}>
          <Text>Tax 13%</Text>
          <Text>Rs. 90</Text>
        </Flex>
        <Flex align={"center"} justify={"space-between"}>
          <Text>Delivery</Text>
          <Text>Free</Text>
        </Flex>
        <Flex align={"center"} justify={"space-between"}>
          <Text>Grand Total</Text>
          <Text>Rs. 1099</Text>
        </Flex>
      </Box>
    </Drawer>
  );
};

export default CartDrawer;
