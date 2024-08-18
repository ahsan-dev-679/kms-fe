import React from "react";
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

const MealsCard = ({ meal }) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Card
        className="cursor-pointer"
        shadow="sm"
        padding="lg"
        radius="md"
        withBorder
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
            Rs. 500
          </Text>
          <Button onClick={open} color={colors.primary[100]} radius="md">
            <ImPlus />
          </Button>
        </Flex>
      </Card>

      <CartDrawer opened={opened} close={close} />
    </>
  );
};

export default MealsCard;
