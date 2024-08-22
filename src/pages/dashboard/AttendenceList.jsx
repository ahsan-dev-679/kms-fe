import * as uuid from "uuid";
import React, { useMemo, useState } from "react";
import GeneralTable from "./../../components/table/GeneralTable";
import { Box, Text, Button, Flex, Avatar, Switch, Menu } from "@mantine/core";
import { capitalizeFirstLetter, formatDate, formatPrice } from "@/utils";
import { Link, useNavigate } from "react-router-dom";
import { chefAttendence } from "@/data/data";
import Transition from "@/components/layout/Transition";
import { IconX, IconArrowNarrowLeft } from "@tabler/icons-react";
import { DatePicker } from "@mantine/dates";
import { FaRegCalendarAlt } from "react-icons/fa";
import { useMediaQuery } from "@mantine/hooks";

const AttendenceList = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState([]);
  const isMobile = useMediaQuery("(max-width:600px)");

  const columns = useMemo(
    () => [
      {
        accessorKey: "_id", //access nested data with dot notation
        header: "Chef",
        Cell: ({ cell }) => {
          return (
            <Flex gap={"md"} align={"center"}>
              <Avatar size={45} src={cell.row.original.profile} />
              <Flex direction={"column"}>
                <Text size="sm">{cell.row.original.name}</Text>
                <Text size="sm">{cell.row.original.email}</Text>
              </Flex>
            </Flex>
          );
        },
      },
      {
        accessorKey: "kitchenNo",
        header: "Kitchen No",
        Cell: ({ cell }) => {
          return <Text>{cell.getValue()}</Text>;
        },
      },
      {
        accessorKey: "date",
        header: "Date",
        Cell: ({ cell }) => {
          return <Text>{formatDate(cell.getValue())}</Text>;
        },
      },
      {
        accessorKey: "status",
        header: "Status",
        Cell: ({ cell }) => {
          return (
            <Flex>
              <Text
                style={{
                  backgroundColor:
                    cell.getValue() === "present" ? "#BBF0D6" : "#ffc6c6",
                  padding: "5px 10px",
                }}
                c={cell.getValue() === "present" ? "#45a331" : "#e30202"}
                className="w-fit rounded-md"
              >
                {capitalizeFirstLetter(cell.getValue())}
              </Text>
            </Flex>
          );
        },
      },
    ],
    []
  );
  return (
    <Transition>
      <IconArrowNarrowLeft
        size={32}
        className="mx-4 my-2 cursor-pointer"
        stroke={2}
        onClick={() => navigate(-1)}
      />
      <Box className=" my-3 shadow-md !rounded-xl ">
        <GeneralTable
          isLoading={false}
          columns={columns}
          data={chefAttendence}
          heading={"Chef Attendence"}
          otherComponent={
            <Menu
              className="mr-4"
              position="bottom-start"
              openDelay={100}
              closeDelay={400}
              shadow="md"
              width={"fit-content"}
            >
              <Menu.Target>
                <Button
                  h={isMobile ? "40px" : "45px"}
                  leftSection={<FaRegCalendarAlt />}
                  variant="gradient"
                  gradient={{ from: "#F9F9F9", to: "#FFFFFF", deg: 270 }}
                  size={isMobile ? "xs" : "md"}
                  style={{
                    boxShadow: "0px 19px 17.7px -16px #E9E9E9",
                    border: "1px solid #EDEDED",
                  }}
                  c={"#483E3E"}
                >
                  Filter by Date
                </Button>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Label>
                  <DatePicker
                    color="#208251"
                    type="range"
                    value={value}
                    onChange={setValue}
                  />
                  <Button
                    size="sm"
                    w={"100%"}
                    variant="gradient"
                    gradient={{ from: "#208251", to: "#309161", deg: 270 }}
                  >
                    Search
                  </Button>
                </Menu.Label>
              </Menu.Dropdown>
            </Menu>
          }
        />
      </Box>
    </Transition>
  );
};

export default AttendenceList;
