import React, { useState } from "react";
import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Flex,
  Title,
} from "@mantine/core";
import { ImPlus } from "react-icons/im";
import CartDrawer from "@/components/cart/CartDrawer";
import { useDisclosure } from "@mantine/hooks";
import { colors } from "@/configs/theme.config";
import { useCartStore } from "@/stores/cart.store";
import MealDetail from "@/components/modal/MealDetail";

const MealsCard = ({ meal }) => {
  const [detail, setDetail] = useState({});
  const [opened, { open, close }] = useDisclosure(false);
  const [openedModal, { open: openModal, close: closeModal }] =
    useDisclosure(false);
  const { cart, addToCart } = useCartStore();

  return (
    <>
      <Card
        className="cursor-pointer duration-500 hover:scale-105 hover:shadow-xl mb-4"
        shadow="sm"
        padding="lg"
        radius="md"
        withBorder
        onClick={() => {
          setDetail(meal);
          openModal();
        }}
      >
        <Card.Section style={{ width: "" }}>
          <Image src={meal.img} style={{}} alt="Norway" />
        </Card.Section>

        <Flex justify="space-between" direction={"column"} my={3} gap={2}>
          <Text lineClamp={1} fw={700}>
            {meal.title}
          </Text>
          <Text size="sm" c="dimmed" lineClamp={2}>
            {meal.desc}
          </Text>
        </Flex>

        <Flex align={"center"} justify={"space-between"} mt={2}>
          <Text size="md" c="black" fw={700}>
            Rs. {meal.price}
          </Text>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(meal);
            }}
            style={{ zIndex: 100 }}
            color={colors.primary[100]}
            radius="md"
          >
            <ImPlus />
          </Button>
        </Flex>
      </Card>

      <CartDrawer opened={opened} close={close} />
      <MealDetail detail={detail} opened={openedModal} close={closeModal} />
    </>
  );
};

export default MealsCard;
