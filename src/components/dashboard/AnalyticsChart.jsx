import { BarChart } from "@mantine/charts";
import { Box, Flex, Select, Title } from "@mantine/core";
import { YearPickerInput } from "@mantine/dates";
import React, { useEffect, useRef, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";

const AnalyticsChart = ({ year1, setYear1, orderData }) => {
  const barRef = useRef();
  const [chartHeight, setchartHeight] = useState(600);
  useEffect(() => {
    const { height } = barRef.current.getBoundingClientRect();
    console.log("height", height);
    setchartHeight(height - 100);
  }, []);

  const chartData = [
    { month: "Jan", Orders: orderData?.[0]?.total || 0 },
    { month: "Feb", Orders: orderData?.[1]?.total || 0 },
    { month: "Mar", Orders: orderData?.[2]?.total || 0 },
    { month: "Apr", Orders: orderData?.[3]?.total || 0 },
    { month: "May", Orders: orderData?.[4]?.total || 0 },
    { month: "June", Orders: orderData?.[5]?.total || 0 },
    { month: "July", Orders: orderData?.[6]?.total || 0 },
    { month: "Aug", Orders: orderData?.[7]?.total || 0 },
    { month: "Sept", Orders: orderData?.[8]?.total || 0 },
    { month: "Oct", Orders: orderData?.[9]?.total || 0 },
    { month: "Nov", Orders: orderData?.[10]?.total || 0 },
    { month: "Dec", Orders: orderData?.[10]?.total || 0 },
  ];
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
          Orders Analytics
        </Title>

        <YearPickerInput
          leftSection={<FaCalendarAlt />}
          placeholder="Select year"
          classNames={{
            yearsListControl: "year-dropdown",
          }}
          maxDate={new Date()}
          w={150}
          value={year1}
          onChange={(value) => setYear1(value)}
        />
      </Flex>
      <Box className={"px-5 mt-5  h-full"} ref={barRef}>
        <BarChart
          barProps={{
            barSize: 26,
            radius: 6,
          }}
          h={chartHeight}
          data={chartData}
          dataKey="month"
          series={[{ name: "Orders", color: "#3DA270" }]}
          tickLine="xy"
        />
      </Box>
    </Box>
  );
};

export default AnalyticsChart;
