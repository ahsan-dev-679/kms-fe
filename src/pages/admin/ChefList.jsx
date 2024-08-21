import * as uuid from "uuid";
import React, { useMemo, useState } from "react";
import GeneralTable from "./../../components/table/GeneralTable";
import { Box, Text, Button, Flex, Avatar, Switch } from "@mantine/core";
import { capitalizeFirstLetter, formatDate, formatPrice } from "@/utils";
import { Link, useNavigate } from "react-router-dom";
import { IconEye } from "@tabler/icons-react";
import { chefList } from "@/data/data";
import Transition from "@/components/layout/Transition";

const ChefList = () => {
  const navigate = useNavigate();

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
        accessorKey: "joinedAt",
        header: "Joined At",
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
                    cell.getValue() === "active" ? "#BBF0D6" : "#ffc6c6",
                  padding: "5px 10px",
                }}
                c={cell.getValue() === "active" ? "#45a331" : "#e30202"}
                className="w-fit rounded-md"
              >
                {capitalizeFirstLetter(cell.getValue())}
              </Text>
            </Flex>
          );
        },
      },

      {
        accessorKey: "action",
        header: "Action",
        Cell: ({ cell }) => {
          return (
            <Switch className="cursor-pointer" defaultChecked color="green" />
          );
        },
      },
    ],
    []
  );
  return (
    <Transition>
      <Box className=" my-3 shadow-md !rounded-xl ">
        <GeneralTable
        isLoading={false}
        
        columns={columns} data={chefList} heading={"Chef List"} />
      </Box>
    </Transition>
  );
};

export default ChefList;
