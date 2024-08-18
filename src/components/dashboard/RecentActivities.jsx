import { Box, Button, Flex, Text, Title } from "@mantine/core";
import React from "react";

const RecentActivities = () => {
  return (
    <Flex
      direction={"column"}
      justify={"space-between"}
      className="bg-white py-3 pt-0 h-[55vh] overflow-hidden shadow-md rounded-lg"
      mt={"md"}
    >
      <Flex
        py={"lg"}
        align={"center"}
        justify={"space-between"}
        className=" px-5 border-b border-[#F0F0F0]"
      >
        <Title
          fz={"clamp(0.8125rem, 0.5893rem + 0.7143vw, 1.125rem)"}
          fw={"500"}
          ff={"heading"}
          c={"#2E3459"}
        >
          Recent Activity
        </Title>
      </Flex>
      <Box py={"md"} className="overflow-auto flex-1 relative">
        {Activities.map((item, i) => (
          <ActivityItem key={i} activity={item} />
        ))}
      </Box>
      <Box p={"md"} pb={"0"}>
        <Button
          type="submit"
          variant="gradient"
          gradient={{ from: "#208251", to: "#309161", deg: 270 }}
        >
          View All
        </Button>
      </Box>
    </Flex>
  );
};

const ActivityItem = ({ activity }) => {
  return (
    <Flex px={"md"} pt={"sm"} align={"center"} justify={"space-between"}>
      <Box>
        <Text ff={"text"} fz={"16px"} fw={"400"} c={"#141B43"}>
          {activity.username}
        </Text>
        <Text ff={"text"} fz={"14px"} fw={"400"} c={"#909FAF"}>
          {activity.activity}
        </Text>
      </Box>
      <Text ff={"text"} fz={"14px"} fw={"300"} c={"#75767D"}>
        {activity.date}
      </Text>
    </Flex>
  );
};
const Activities = [
  {
    username: "Roberto Pais",
    activity: "Case Updated",
    date: "2024-06-24",
  },
  {
    username: "Janna Smith",
    activity: "Case Opened",
    date: "2024-08-23",
  },
  {
    username: "Kari Doe",
    activity: "Case Closed",
    date: "2024-06-20",
  },
  {
    username: "Carlos Juanez",
    activity: "Case Updated",
    date: "2024-06-11",
  },
  {
    username: "James Chaucer",
    activity: "Case Opened",
    date: "2024-06-16",
  },
  {
    username: "Jim Carry",
    activity: "Case Opened",
    date: "2024-06-12",
  },

  {
    username: "Jim Carry",
    activity: "Case Closed",
    date: "2024-06-12",
  },
];
export default RecentActivities;
