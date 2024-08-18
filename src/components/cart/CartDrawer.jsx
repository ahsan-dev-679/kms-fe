import React from "react";
import { Drawer, Button, Box, Flex, Text, Divider } from "@mantine/core";
import { menuList } from "@/data/data";
import CartItem from "./CartItem";
import { colors } from "@/configs/theme.config";
import {
  IconCircleArrowRightFilled,
  IconArrowRight,
} from "@tabler/icons-react";
import { useCartStore } from "@/stores/cart.store";
import { useNavigate } from "react-router-dom";

const CartDrawer = ({ opened, close }) => {
  const navigate = useNavigate();
  const { cart, clearCart, total, tax, grandTotal } = useCartStore();

  return (
    <Drawer
      radius={"md"}
      size="sm"
      position="right"
      opened={opened}
      onClose={close}
      title={
        <Text fw={700} size="lg">
          Your Cart
        </Text>
      }
    >
      <Box>
        {cart?.length > 0 ? (
          <>
            <Flex justify={"flex-end"}>
              <Button
                onClick={() => clearCart()}
                radius={"xl"}
                size="xs"
                color="red"
              >
                Clear Cart
              </Button>
            </Flex>
            {cart?.map((value, idx) => (
              <CartItem key={idx} item={value} />
            ))}
            <Box>
              <Flex py={2} align={"center"} justify={"space-between"}>
                <Text>Total</Text>
                <Text>Rs. {total()}</Text>
              </Flex>
              <Flex py={2} align={"center"} justify={"space-between"}>
                <Text>Tax 13%</Text>
                <Text>Rs. {tax()}</Text>
              </Flex>
              <Flex py={2} align={"center"} justify={"space-between"}>
                <Text>Delivery</Text>
                <Text>Free</Text>
              </Flex>
              <Divider />
              <Flex py={2} align={"center"} justify={"space-between"}>
                <Text fw={600}>Grand Total</Text>
                <Text fw={600}>Rs. {grandTotal()}</Text>
              </Flex>
            </Box>
            <Button
              onClick={() => navigate("/checkout")}
              fullWidth
              color={colors.primary[100]}
              radius="md"
              size="md"
              className="my-2"
              rightSection={
                <IconArrowRight className="!ml-1 pl-auto" stroke={1} />
              }
            >
              Checkout
            </Button>
          </>
        ) : (
          <Text size="xl" fw={700} className="" align={"center"}>
            Cart is Empty
          </Text>
        )}
      </Box>
    </Drawer>
  );
};

export default CartDrawer;
