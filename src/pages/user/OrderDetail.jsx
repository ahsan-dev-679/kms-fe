import OrderItem from "@/components/order/OrderItem";
import { colors } from "@/configs/theme.config";
import { formatDateTime, formatPrice } from "@/utils";
import { Box, Divider, Flex, Grid, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const OrderDetail = () => {
  const mobile = useMediaQuery("(max-width: 640px)");
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const order = location?.state?.order;

  useEffect(() => {
    if (!id || !order) {
      navigate(-1);
    }
  }, []);

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
            #{order?._id}
          </Text>
          <Text c={"dimmed"}>
            <span className="pr-2">{order?.meals?.length} Items</span>
            &nbsp; &#9679; &nbsp;
            <span>Order Placed in {formatDateTime(order?.createdAt)}</span>
          </Text>
        </Flex>
        <Text fw={700} size="xl" c={colors.primary[100]}>
          {formatPrice(order?.total)}
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
            <span className="font-thin">{order?.billingInfo?.name}</span>
          </Text>
          <Text size={"sm"} fw={600}>
            Email:
            <span className="font-thin">{order?.billingInfo?.email}</span>
          </Text>
          <Text size={"sm"} fw={600}>
            Mobile:
            <span className="font-thin">{order?.billingInfo?.mobileNo}</span>
          </Text>
        </Grid.Col>
        <Grid.Col span={{ md: 6, xs: 12, sm: 12, lg: 6 }}>
          <Text fw={700} size="lg">
            Address Info:
          </Text>
          <Text size={"sm"} fw={600}>
            Delivery Address:{" "}
            <span className="font-thin">{order?.billingInfo?.address}</span>
          </Text>
          <Text size={"sm"} fw={600}>
            Nearest Landmark:{" "}
            <span className="font-thin">{order?.billingInfo?.landmark}</span>
          </Text>
          <Text size={"sm"} fw={600}>
            Delivery Instructions:{" "}
            <span className="font-thin">
              {order?.billingInfo?.instructions}
            </span>
          </Text>
        </Grid.Col>
      </Grid>

      <Box className="px-4 pt-4 pb-8">
        <Text fw={700} size="lg" py={2}>
          Item Ordered
        </Text>
        <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {order?.meals?.map((item, idx) => (
            <OrderItem key={idx} item={item} />
          ))}
        </section>
      </Box>
    </Box>
  );
};

export default OrderDetail;
