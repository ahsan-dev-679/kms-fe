import React from "react";
import { Box, Grid, Title } from "@mantine/core";
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

const AdminDashboard = () => {
  const dashboardOverviewCards = [
    {
      heading: "Total Earning",
      amount: "10,500€",
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
  return (
    <Box h={"full"}>
      <Title mb={"lg"} mt={"lg"} fw={"500"} c={"#2E3459"}>
        Overview
      </Title>

      <Grid h={"full"}>
        {dashboardOverviewCards.map((item, index) => (
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
          <Grid.Col span={{ base: 12, lg: 9, md: 9, sm: 6 }}>
            <AnalyticsChart />
          </Grid.Col>
          <Grid.Col span={{ base: 12, lg: 3, md: 3, sm: 6 }}>
            <RecentActivities />
          </Grid.Col>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdminDashboard;
