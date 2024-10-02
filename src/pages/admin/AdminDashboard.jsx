import React, { useState } from "react";
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
import {
  useIncomeAnalytics,
  useOrdersAnalytics,
  useStats,
} from "@/lib/tanstack-query/dashboardQueries";
import moment from "moment";

const AdminDashboard = () => {
  const [year, setYear] = useState(new Date());
  const [year1, setYear1] = useState(new Date());
  const { isLoading, stats } = useStats();

  const { isLoading: icomeLoader, incomeData } = useIncomeAnalytics({
    year: moment(year).format(),
  });console.log("fffffffffffffffffffffffff",incomeData)
  const { isLoading: orderLoader, ordersAnalyticsData } = useOrdersAnalytics({
    year: moment(year1).format(),
  });

  const dashboardOverviewCards = [
    {
      heading: "Total Earning",
      amount: `${stats?.totalEarnings}€`,
      icon: <IconDatabaseDollar />,
    },
    {
      heading: "Completed Orders",
      amount: stats?.totalOrders,
      icon: <IconTruckDelivery />,
    },
    {
      heading: "Total Customers",
      amount: stats?.totalCustomers,
      icon: <IconUsers />,
    },
    {
      heading: "Total Chefs",
      amount: stats?.totalChefs,
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
        {isLoading
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
            {icomeLoader ? (
              <Box
                direction={"column"}
                justify={"space-between"}
                className="bg-white p-2 h-[55vh] overflow-hidden relative shadow-md rounded-lg"
                mt={"md"}
              >
                <Skeleton height={"100%"} radius="md" />
              </Box>
            ) : (
              <InComeChart
                incomeData={incomeData}
                year={year}
                setYear={setYear}
              />
            )}
          </Grid.Col>
          <Grid.Col span={{ base: 12, lg: 5, md: 12, sm: 12 }}>
            {orderLoader ? (
              <Box
                direction={"column"}
                justify={"space-between"}
                className="bg-white p-2 h-[55vh] overflow-hidden relative shadow-md rounded-lg"
                mt={"md"}
              >
                <Skeleton height={"100%"} radius="md" />
              </Box>
            ) : (
              <AnalyticsChart
                orderData={ordersAnalyticsData}
                year1={year1}
                setYear1={setYear1}
              />
            )}
          </Grid.Col>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdminDashboard;
