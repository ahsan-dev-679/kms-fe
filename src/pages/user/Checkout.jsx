import { colors } from "@/configs/theme.config";
import { formatPrice } from "@/utils";
import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  NumberInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const tablet = useMediaQuery("(max-width: 1024px)");
  const midScreen = useMediaQuery("(max-width: 768px)");

  const ItemComponent = () => {
    return (
      <Box>
        <Flex className="py-4" direction={"column"} wrap={"wrap"}>
          <Text> 1 x SUMMER DEAL 1</Text>
          <Text size="sm" ta="left" c={"dimmed"}>
            Rs. 899
          </Text>
        </Flex>
        <Divider color="silver" />
      </Box>
    );
  };
  return (
    <Grid justify={"center"} gutter={"xl"} className="my-6">
      <Grid.Col span={midScreen ? 11 : tablet ? 8 : 5}>
        <Box className="bg-[#F7F7F7] p-6 rounded-lg shadow-sm">
          <Text>
            This is a{" "}
            <span className="font-bold uppercase">Delivery Order</span>
          </Text>
          <Text c={"dimmed"} pb={"md"}>
            Just a last step, please enter your details:
          </Text>
          <Flex direction={"column"} gap={20}>
            <TextInput
              label="Full Name"
              placeholder="Full Name"
              size="md"
              radius={"md"}
            />
            <Flex gap={20} direction={midScreen ? "column" : "row"}>
              <NumberInput
                hideControls
                label="Mobile Number"
                placeholder="Mobile Number"
                className="flex-1"
                size="md"
                radius={"md"}
              />
              <NumberInput
                hideControls
                label="Alternate Mobile Number"
                placeholder="Alternate Mobile Number"
                className="flex-1"
                size="md"
                radius={"md"}
              />
            </Flex>

            <TextInput
              label="Delivery Address"
              placeholder="Enter your complete Address"
              className="flex-1"
              size="md"
              radius={"md"}
            />

            <Flex gap={20} direction={midScreen ? "column" : "row"}>
              <TextInput
                label="Nearest Landmark"
                placeholder="Any famous place nearby"
                className="flex-1"
                size="md"
                radius={"md"}
              />
              <TextInput
                label="Email Address"
                placeholder="Enter your email"
                className="flex-1"
                size="md"
                radius={"md"}
              />
            </Flex>
            <TextInput
              label="Delivery Instructions"
              placeholder="Delivery Instructions"
              className="flex-1"
              size="md"
              radius={"md"}
            />
          </Flex>
        </Box>
      </Grid.Col>
      <Grid.Col span={midScreen ? 11 : tablet ? 8 : 4}>
        <Box className="bg-[#F7F7F7] p-6 rounded-lg shadow-sm">
          <Title order={3}>Your Order</Title>

          {[1, 2, 3, 4].map((value, idx) => (
            <ItemComponent key={idx} />
          ))}

          <Flex justify={"space-between"} className="!mt-6">
            <Text>Total</Text>
            <Text>{formatPrice(6000)}</Text>
          </Flex>
          <Flex justify={"space-between"}>
            <Text>Total</Text>
            <Text>{formatPrice(6000)}</Text>
          </Flex>
          <Flex justify={"space-between"}>
            <Text>Total</Text>
            <Text>{formatPrice(6000)}</Text>
          </Flex>
          <Divider className="my-2" />
          <Flex justify={"space-between"}>
            <Text fw={700}>Grand Total</Text>
            <Text>{formatPrice(6000)}</Text>
          </Flex>

          <Button
            fullWidth
            color={colors.primary[100]}
            radius="md"
            size="md"
            className="my-6"
            onClick={() => navigate("/my-orders")}
          >
            Place Order
          </Button>

          <Link
            style={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              justifyContent: "center",
              color: "#228be6",
            }}
            to="/meals"
            underline="never"
          >
            <FiArrowLeft />
            continue to add more items
          </Link>
        </Box>
      </Grid.Col>
    </Grid>
  );
};

export default Checkout;
