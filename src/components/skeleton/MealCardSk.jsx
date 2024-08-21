import { Card, Flex, Skeleton } from "@mantine/core";
import React from "react";

const MealCardSk = () => {
  return (
    <Card
      className="mb-4"
      shadow="sm"
      radius="md"
      withBorder
      style={{
        height: 370,
      }}
    >
      <Card.Section>
        <Skeleton height={200} />
      </Card.Section>

      <Flex justify="space-between" direction={"column"} my={3} gap={2}>
        <Skeleton mt={6} height={24} radius="md" />
        <Skeleton height={14} mt={12} radius="md" />
        <Skeleton height={14} mt={4} width="70%" radius="md" />
      </Flex>

      <Flex align={"center"} justify={"space-between"} mt={2}>
        <Skeleton height={32} my={12} radius="md" />
      </Flex>
    </Card>
  );
};

export default MealCardSk;
