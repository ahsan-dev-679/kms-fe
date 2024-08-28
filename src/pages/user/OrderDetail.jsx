import OrderItem from "@/components/order/OrderItem";
import { colors } from "@/configs/theme.config";
import { formatDateTime } from "@/utils";
import { Box, Divider, Flex, Grid, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React from "react";
import { useParams } from "react-router-dom";
import * as uuid from "uuid";

const OrderDetail = () => {
  const { id } = useParams();
  const mobile = useMediaQuery("(max-width: 640px)");

  const date = "2024-08-17T11:49:16.378+00:00";
  const orderItem = [
    {
      _id: uuid.v4(),

      title: "Plain Chicken Bites 9 PCS",
      desc: "Classic chicken bites seasoned with a blend of herbs and spices, fried to a perfect golden brown.",
      price: 6.4,
      qty: 6,
      img: "https://kababjeesfriedchicken.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1713422989-436561642_788467206198024_7402439414129935573_n.jpg&w=640&q=75",
    },
    {
      _id: uuid.v4(),

      title: "Buffalo Chicken Bites 9 PCS",
      desc: "Spicy and tangy buffalo chicken bites, served with a side of cooling ranch dressing.",
      price: 7,
      qty: 4,
      img: "https://kababjeesfriedchicken.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1713422989-436561642_788467206198024_7402439414129935573_n.jpg&w=640&q=75",
    },
    {
      _id: uuid.v4(),
      title: "Thai Sweet Chili Chicken Bites 9 PCS",
      desc: "Juicy chicken bites coated in a sweet and spicy Thai chili glaze, sprinkled with sesame seeds.",
      price: 8,
      qty: 3,
      img: "https://kababjeesfriedchicken.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1713422989-436561642_788467206198024_7402439414129935573_n.jpg&w=640&q=75",
    },
    {
      _id: uuid.v4(),
      title: "Honey Mustard Chicken Bites 9 PCS",
      desc: "Crispy chicken bites drizzled with a sweet and tangy honey mustard sauce.",
      price: 4,
      qty: 4,
      img: "https://kababjeesfriedchicken.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1713422989-436561642_788467206198024_7402439414129935573_n.jpg&w=640&q=75",
    },
  ];

  return (
    <Box className="mx-4 my-4 border-2 shadow-md rounded-md">
      <Flex
        direction={mobile ? "column" : "row"}
        justify={"space-between"}
        align={mobile ? "start" : "center"}
        className="bg-primary-50 mx-6 my-8 py-6 px-4 rounded-md "
      >
        <Flex direction={"column"}>
          <Text size="lg" fw={700}>
            #{id}
          </Text>
          <Text c={"dimmed"}>
            <span className="pr-2">4 Items</span>
            &nbsp; &#9679; &nbsp;
            <span>Order Placed in {formatDateTime(date)}</span>
          </Text>
        </Flex>
        <Text fw={700} size="xl" c={colors.primary[100]}>
          12€
        </Text>
      </Flex>

      <Divider my="md" size="sm" />

      <Grid justify="flex-end" className="  mx-4 px-2 py-2">
        <Grid.Col span={{ md: 6, xs: 12, sm: 12, lg: 6 }}>
          <Text fw={700} size="lg">
            Customer Info:
          </Text>
          <Text size={"sm"} fw={600}>
            Name:
            <span className="font-thin">John Doe</span>
          </Text>
          <Text size={"sm"} fw={600}>
            Email:
            <span className="font-thin">john@gmail.com</span>
          </Text>
          <Text size={"sm"} fw={600}>
            Mobile:
            <span className="font-thin">+923153271442</span>
          </Text>
        </Grid.Col>
        <Grid.Col span={{ md: 6, xs: 12, sm: 12, lg: 6 }}>
          <Text fw={700} size="lg">
            Address Info:
          </Text>
          <Text size={"sm"} fw={600}>
            Delivery Address:{" "}
            <span className="font-thin">
              123 Main St, Apartment 4B, New York, NY 10001
            </span>
          </Text>
          <Text size={"sm"} fw={600}>
            Nearest Landmark:{" "}
            <span className="font-thin">Central Park, NYC</span>
          </Text>
          <Text size={"sm"} fw={600}>
            Delivery Instructions:{" "}
            <span className="font-thin">
              Leave at the front door if no answer
            </span>
          </Text>
        </Grid.Col>
      </Grid>

      <Box className="px-4 pt-4 pb-8">
        <Text fw={700} size="lg" py={2}>
          Item Ordered
        </Text>
        <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {orderItem?.map((item, idx) => (
            <OrderItem key={idx} item={item} />
          ))}
        </section>
      </Box>
    </Box>
  );
};

export default OrderDetail;
