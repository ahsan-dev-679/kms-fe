import Loader from "@/components/layout/Loader";
import { colors } from "@/configs/theme.config";
import { useCreateOrder } from "@/lib/tanstack-query/orderQueries";
import { useCartStore } from "@/stores/cart.store";
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
import { isEmail, useForm } from "@mantine/form";
import { useMediaQuery } from "@mantine/hooks";
import React, { useEffect } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Checkout = () => {
  const location = useLocation();
  const { isPending, mutateAsync } = useCreateOrder();
  const { cart } = useCartStore();
  const data = location?.state?.data;
  const navigate = useNavigate();
  const tablet = useMediaQuery("(max-width: 1024px)");
  const midScreen = useMediaQuery("(max-width: 768px)");

  const form = useForm({
    initialValues: {
      name: "",
      mobileNo: "",
      alternateNo: "",
      address: "",
      landmark: "",
      email: "",
      instructions: "",
    },
    validate: {
      name: (value) => {
        if (value.trim().length == 0) {
          return "Name is required!";
        }
      },
      mobileNo: (value) => {
        if (value.length == 0) {
          return "Mobile number is required";
        }
      },
      alternateNo: (value) => {
        if (value.length == 0) {
          return "Alternate number is required";
        }
      },
      address: (value) => {
        if (value.trim().length == 0) {
          return "Address is required";
        }
      },
      landmark: (value) => {
        if (value.trim().length == 0) {
          return "Landmark is required";
        }
      },

      email: (value) => {
        if (value.length == 0) {
          return "Email is required";
        }
        if (!isEmail(value)) {
          return "Enter correct emails!";
        }
      },
    },
  });

  const handleSubmit = async (values) => {
    const payload = {
      ...data,
      billingInfo: values,
    };

    const res = await mutateAsync(payload);
    if (res?.success) {
      navigate("/my-orders");
    }
  };

  useEffect(() => {
    if (!data) {
      navigate(-1);
    }
  }, [location, data]);

  const ItemComponent = ({ item }) => {
    return (
      <Box>
        <Flex className="py-4" direction={"column"} wrap={"wrap"}>
          <Text>
            {" "}
            {item?.qty} x {item?.title}
          </Text>
          <Text size="sm" ta="left" c={"dimmed"}>
            {formatPrice(item?.discountedPrice)}
          </Text>
        </Flex>
        <Divider color="silver" />
      </Box>
    );
  };
  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
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
                {...form.getInputProps("name")}
              />
              <Flex gap={20} direction={midScreen ? "column" : "row"}>
                <NumberInput
                  hideControls
                  label="Mobile Number"
                  placeholder="Mobile Number"
                  className="flex-1"
                  size="md"
                  radius={"md"}
                  {...form.getInputProps("mobileNo")}
                />
                <NumberInput
                  hideControls
                  label="Alternate Mobile Number"
                  placeholder="Alternate Mobile Number"
                  className="flex-1"
                  size="md"
                  radius={"md"}
                  {...form.getInputProps("alternateNo")}
                />
              </Flex>

              <TextInput
                label="Delivery Address"
                placeholder="Enter your complete Address"
                className="flex-1"
                size="md"
                radius={"md"}
                {...form.getInputProps("address")}
              />

              <Flex gap={20} direction={midScreen ? "column" : "row"}>
                <TextInput
                  label="Nearest Landmark"
                  placeholder="Any famous place nearby"
                  className="flex-1"
                  size="md"
                  radius={"md"}
                  {...form.getInputProps("landmark")}
                />
                <TextInput
                  label="Email Address"
                  placeholder="Enter your email"
                  className="flex-1"
                  size="md"
                  radius={"md"}
                  {...form.getInputProps("email")}
                />
              </Flex>
              <TextInput
                label="Delivery Instructions"
                placeholder="Delivery Instructions"
                className="flex-1"
                size="md"
                radius={"md"}
                {...form.getInputProps("instructions")}
              />
            </Flex>
          </Box>
        </Grid.Col>
        <Grid.Col span={midScreen ? 11 : tablet ? 8 : 4}>
          <Box className="bg-[#F7F7F7] p-6 rounded-lg shadow-sm">
            <Title order={3}>Your Order</Title>

            {data?.meals?.map((value, idx) => (
              <ItemComponent key={idx} item={value} />
            ))}

            <Flex justify={"space-between"} className="!mt-6">
              <Text>Discount</Text>
              <Text>10%</Text>
            </Flex>
            <Flex justify={"space-between"}>
              <Text>Subtotal</Text>
              <Text>{formatPrice(data?.subTotal)}</Text>
            </Flex>
            <Divider className="my-2" />
            <Flex justify={"space-between"}>
              <Text>Total</Text>
              <Text>{formatPrice(data?.total)}</Text>
            </Flex>
            {/* <Flex justify={"space-between"}>
              <Text fw={700}>Grand Total</Text>
              <Text>{formatPrice(16)}</Text>
            </Flex> */}

            <Button
              fullWidth
              color={colors.primary[100]}
              radius="md"
              size="md"
              className="my-6"
              type="submit"
              loading={isPending}
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
    </form>
  );
};

export default Checkout;
