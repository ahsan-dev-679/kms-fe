import { BarChart } from "@mantine/charts";
import { Box, Flex, Select, Title } from "@mantine/core";
import React, { useEffect, useRef, useState } from "react";

const AnalyticsChart = () => {
  const barRef = useRef();
  const [chartHeight, setchartHeight] = useState(600);
  useEffect(() => {
    const { height } = barRef.current.getBoundingClientRect();
    console.log("height", height);
    setchartHeight(height - 100);
  }, []);

  return (
    <Box
      direction={"column"}
      justify={"space-between"}
      className="bg-white py-3 pt-0 h-[55vh] overflow-hidden relative shadow-md rounded-lg"
      mt={"md"}
    >
      <Flex
        py={"lg"}
        align={"center"}
        justify={"space-between"}
        className=" px-5 border-b border-[#F0F0F0]"
      >
        <Title
          fz={"clamp(1rem, 0.6429rem + 1.1429vw, 1.5rem)"}
          fw={"500"}
          c={"#2E3459"}
        >
          Analytics
        </Title>

        <Select
          withCheckIcon={false}
          w={"130px"}
          styles={{
            input: {
              boxShadow: "0px 19px 17.7px -16px #BFD1C8",
              border: "1px solid #F2F2F2",
              background: "#fff",
            },
          }}
          variant={"filled"}
          color={"white"}
          data={["Month", "Year"]}
          defaultValue="Year"
        />
      </Flex>
      <Box className={"px-5 mt-5  h-full"} ref={barRef}>
        <BarChart
          barProps={{
            barSize: 40,
            radius: 6,
          }}
          h={chartHeight}
          data={chartData}
          dataKey="month"
          series={[{ name: "Income", color: "#3DA270" }]}
          tickLine="xy"
        />
      </Box>
    </Box>
  );
};

export default AnalyticsChart;
const chartData = [
  { month: "Jan", Income: 150 },
  { month: "Feb", Income: 330 },
  { month: "Mar", Income: 100 },
  { month: "Apr", Income: 450 },
  { month: "May", Income: 280 },
  { month: "June", Income: 50 },
  { month: "July", Income: 276 },
  { month: "Aug", Income: 470 },
  { month: "Sept", Income: 290 },
  { month: "Oct", Income: 110 },
  { month: "Nov", Income: 235 },
  { month: "Dec", Income: 325 },
];
