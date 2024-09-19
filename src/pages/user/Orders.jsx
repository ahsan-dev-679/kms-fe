import React, { useMemo } from "react";
import GeneralTable from "./../../components/table/GeneralTable";
import { Box, Flex, Text } from "@mantine/core";
import { formatDate, formatPrice, getStatusColor } from "@/utils";
import { Link, useNavigate } from "react-router-dom";
import { useOrdersList } from "@/lib/tanstack-query/orderQueries";

const Orders = () => {
  const { isLoading, ordersList } = useOrdersList();
  const navigate = useNavigate();

  const columns = useMemo(
    () => [
      {
        accessorKey: "_id", //access nested data with dot notation
        header: "Order Id",
      },
      {
        accessorKey: "createdAt",
        header: "Date",
        Cell: ({ cell }) => {
          return <Text>{formatDate(cell.getValue())}</Text>;
        },
      },
      {
        accessorKey: "items", //normal accessorKey
        header: "Total Items",
        Cell: ({ cell }) => {
          return <Text>{cell.row.original?.meals?.length}</Text>;
        },
      },
      {
        accessorKey: "total",
        header: "Total Price",
        Cell: ({ cell }) => {
          return <Text>{formatPrice(cell.getValue())}</Text>;
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
                  backgroundColor: getStatusColor(cell.getValue()),
                  padding: "5px 10px",
                }}
                className="w-fit rounded-md text-[#000]"
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
            <button
              onClick={() =>
                navigate(`/order-detail/${cell.row.original._id}`, {
                  state: { order: cell.row.original },
                })
              }
              className="text-[#228be6] text-md"
            >
              View Detail
            </button>
          );
        },
      },
    ],
    []
  );
  return (
    <Box className="mx-12 my-8 shadow-md !rounded-xl ">
      <GeneralTable
        isLoading={isLoading}
        columns={columns}
        data={ordersList || []}
        heading={"My Orders"}
      />
    </Box>
  );
};

export default Orders;
