import { AreaChart } from "@mantine/charts";
import { Box, Flex, Select, Title } from "@mantine/core";
import { YearPickerInput } from "@mantine/dates";
import React, { useEffect, useRef, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";

const InComeChart = ({ year, setYear, incomeData }) => {
  const barRef = useRef();

  const [chartHeight, setchartHeight] = useState(600);
  useEffect(() => {
    const { height } = barRef.current.getBoundingClientRect();
    console.log("height", height);
    setchartHeight(height - 100);
  }, []);
  console.log("aaaaaaaa", incomeData)
  const chartData = [
    { month: "Jan", Income: incomeData?.[0]?.total || 0 },
    { month: "Feb", Income: incomeData?.[1]?.total || 0 },
    { month: "Mar", Income: incomeData?.[2]?.total || 0 },
    { month: "Apr", Income: incomeData?.[3]?.total || 0 },
    { month: "May", Income: incomeData?.[4]?.total || 0 },
    { month: "June", Income: incomeData?.[5]?.total || 0 },
    { month: "July", Income: incomeData?.[6]?.total || 0 },
    { month: "Aug", Income: incomeData?.[7]?.total || 0 },
    { month: "Sept", Income: incomeData?.[8]?.total || 0 },
    { month: "Oct", Income: incomeData?.[9]?.total || 0 },
    { month: "Nov", Income: incomeData?.[10]?.total || 0 },
    { month: "Dec", Income: incomeData?.[11]?.total || 0 },
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
          Income Analytics
        </Title>

        <YearPickerInput
          leftSection={<FaCalendarAlt />}
          placeholder="Select year"
          classNames={{
            yearsListControl: "year-dropdown",
          }}
          maxDate={new Date()}
          w={150}
          value={year}
          onChange={(value) => setYear(value)}
        />
      </Flex>
      <Box className={"px-5 mt-5  h-full"} ref={barRef}>
        <AreaChart
          barProps={{
            barSize: 40,
            radius: 6,
          }}
          unit="€"
          withGradient
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

export default InComeChart;
