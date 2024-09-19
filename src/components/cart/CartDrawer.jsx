import React from "react";
import { Drawer, Button, Box, Flex, Text, Divider, Image } from "@mantine/core";
import CartItem from "./CartItem";
import { colors } from "@/configs/theme.config";
import { IconArrowRight } from "@tabler/icons-react";
import { useCartStore } from "@/stores/cart.store";
import { useNavigate } from "react-router-dom";
import EmptyCart from "@/assets/common/empty-cart (1).png";
import { formatPrice } from "@/utils";
import { useCheckout } from "@/lib/tanstack-query/orderQueries";

const CartDrawer = ({ opened, close }) => {
  const navigate = useNavigate();
  const { cart, clearCart, total, grandTotal } = useCartStore();
  const { isPending, mutateAsync } = useCheckout();

  const handleCheckout = async () => {
    const res = await mutateAsync({ arrayOfMeals: cart });
    if (res?.success) {
      clearCart();
      close();
      navigate("/checkout", { state: { data: res?.data } });
    }
  };

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
                onClick={() => {
                  clearCart();
                  setTimeout(() => {
                    close();
                  }, 500);
                }}
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
                <Text> {formatPrice(total())}</Text>
              </Flex>
              {/* <Flex py={2} align={"center"} justify={"space-between"}>
                <Text>Tax 13%</Text>
                <Text> {formatPrice(tax())}</Text>
              </Flex> */}
              <Flex py={2} align={"center"} justify={"space-between"}>
                <Text>Delivery</Text>
                <Text>Free</Text>
              </Flex>
              <Divider />
              <Flex py={2} align={"center"} justify={"space-between"}>
                <Text fw={600}>Grand Total</Text>
                <Text fw={600}> {formatPrice(total())}</Text>
              </Flex>
            </Box>
            <Button
              onClick={handleCheckout}
              loading={isPending}
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
          <>
            <Text size="xl" fw={700} className="" align={"center"}>
              Cart is Empty
            </Text>
            <Image src={EmptyCart} />
          </>
        )}
      </Box>
    </Drawer>
  );
};

export default CartDrawer;
