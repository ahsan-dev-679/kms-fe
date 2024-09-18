import React, { useMemo } from "react";
import GeneralTable from "./../../components/table/GeneralTable";
import { Box, Text, Button, Flex, Avatar } from "@mantine/core";
import { capitalizeFirstLetter, formatDate } from "@/utils";
import { Link, useNavigate } from "react-router-dom";
import Transition from "@/components/layout/Transition";
import { useChefList } from "@/lib/tanstack-query/chefQueries";
import { baseURL } from "@/configs/axios.config";

const ChefList = () => {
  const navigate = useNavigate();

  const { isLoading, chefList } = useChefList();

  const columns = useMemo(
    () => [
      {
        accessorKey: "_id", //access nested data with dot notation
        header: "Chef",
        Cell: ({ cell }) => {
          return (
            <Flex gap={"md"} align={"center"}>
              <Avatar
                size={45}
                src={baseURL + cell.row.original.profileImage}
              />
              <Flex direction={"column"}>
                <Text size="sm">
                  {cell.row.original.firstName +
                    " " +
                    cell.row.original.lastName}
                </Text>
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
        accessorKey: "createdAt",
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
                className="w-fit rounded-md capitalize"
              >
                {cell.getValue()}
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
            // <Switch className="cursor-pointer" defaultChecked color="green" />
            <Link
              to={`/dashboard/chef/attendence/${cell.row.original._id}`}
              className="text-blue-700 font-medium hover:underline cursor-pointer"
            >
              View Detail
            </Link>
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
          isLoading={isLoading}
          columns={columns}
          data={chefList || []}
          heading={"Chef List"}
        />
      </Box>
    </Transition>
  );
};

export default ChefList;
