import React from "react";
import { Box, Flex, Grid, Skeleton, Title } from "@mantine/core";
import {
  IconGauge,
  IconChefHat,
  IconUsers,
  IconTruckDelivery,
  IconDatabaseDollar,
} from "@tabler/icons-react";
import SummaryCards from "@/components/dashboard/SummaryCards";
import AnalyticsChart from "@/components/dashboard/AnalyticsChart";
import RecentActivities from "@/components/dashboard/RecentActivities";
import InComeChart from "@/components/dashboard/InComeChart";

const AdminDashboard = () => {
  const dashboardOverviewCards = [
    {
      heading: "Total Earning",
      amount: "1,500€",
      icon: <IconDatabaseDollar />,
    },
    {
      heading: "Total Orders",
      amount: "120",
      icon: <IconTruckDelivery />,
    },
    {
      heading: "Total Customers",
      amount: "45",
      icon: <IconUsers />,
    },
    {
      heading: "Total Chefs",
      amount: "15",
      icon: <IconChefHat />,
    },
  ];
  const loading = false;
  return (
    <Box h={"full"}>
      <Title mb={"lg"} mt={"lg"} fw={"500"} c={"#2E3459"}>
        Overview
      </Title>

      <Grid h={"full"}>
        {loading
          ? Array.from({ length: 4 }).map((_, idx) => (
              <Grid.Col key={idx} span={{ base: 12, lg: 3, md: 3, sm: 6 }}>
                <Flex
                  direction={"column"}
                  justify={"space-between"}
                  className="bg-white px-5 py-4 h-full shadow-md rounded-lg"
                >
                  <Skeleton height={15} radius="md" />
                  <Skeleton height={15} mt={12} radius="md" />
                  <Skeleton height={15} mt={12} width="70%" radius="md" />
                </Flex>
              </Grid.Col>
            ))
          : dashboardOverviewCards.map((item, index) => (
              <Grid.Col span={{ base: 12, lg: 3, md: 3, sm: 6 }} key={index}>
                <SummaryCards
                  heading={item.heading}
                  subHeadng={item.subHeadng}
                  amount={item.amount}
                  icon={item.icon}
                />
              </Grid.Col>
            ))}

        <Grid h={"full"} className="w-full">
          <Grid.Col span={{ base: 12, lg: 7, md: 12, sm: 12 }}>
            {loading ? (
              <Box
                direction={"column"}
                justify={"space-between"}
                className="bg-white p-2 h-[55vh] overflow-hidden relative shadow-md rounded-lg"
                mt={"md"}
              >
                <Skeleton height={"100%"} radius="md" />
              </Box>
            ) : (
              <InComeChart />
            )}
          </Grid.Col>
          <Grid.Col span={{ base: 12, lg: 5, md: 12, sm: 12 }}>
            {loading ? (
              <Box
                direction={"column"}
                justify={"space-between"}
                className="bg-white p-2 h-[55vh] overflow-hidden relative shadow-md rounded-lg"
                mt={"md"}
              >
                <Skeleton height={"100%"} radius="md" />
              </Box>
            ) : (
              <AnalyticsChart />
            )}
          </Grid.Col>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdminDashboard;
