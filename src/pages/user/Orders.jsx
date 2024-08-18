import React, { useMemo } from "react";
import GeneralTable from "./../../components/table/GeneralTable";
import { Box, Flex, Text } from "@mantine/core";
import { formatDate, formatPrice, getStatusColor } from "@/utils";
import { Link, useNavigate } from "react-router-dom";

const Orders = () => {
  const navigate = useNavigate();
  const data = [
    {
      items: 5,
      total: 100.0,
      status: "completed",
      date: "2024-08-17T11:49:16.378+00:00",
      _id: "ORD001",
    },
    {
      items: 3,
      total: 60.0,
      status: "pending",
      date: "2024-08-17T11:49:16.378+00:00",
      _id: "ORD002",
    },
    {
      items: 8,
      total: 160.0,
      status: "shipped",
      date: "2024-08-17T11:49:16.378+00:00",
      _id: "ORD003",
    },
    {
      items: 12,
      total: 240.0,
      status: "completed",
      date: "2024-08-17T11:49:16.378+00:00",
      _id: "ORD004",
    },
    {
      items: 2,
      total: 40.0,
      status: "cancelled",
      _id: "ORD005",
      date: "2024-08-17T11:49:16.378+00:00",
    },
    {
      items: 7,
      total: 140.0,
      status: "completed",
      date: "2024-08-17T11:49:16.378+00:00",
      _id: "ORD006",
    },
    {
      items: 4,
      total: 80.0,
      status: "pending",
      _id: "ORD007",
      date: "2024-08-17T11:49:16.378+00:00",
    },
    {
      items: 6,
      total: 120.0,
      status: "shipped",
      date: "2024-08-17T11:49:16.378+00:00",
      _id: "ORD008",
    },
    {
      items: 10,
      total: 200.0,
      status: "completed",
      date: "2024-08-17T11:49:16.378+00:00",
      _id: "ORD009",
    },
    {
      items: 9,
      total: 180.0,
      status: "returned",
      date: "2024-08-17T11:49:16.378+00:00",
      _id: "ORD010",
    },
  ];
  const columns = useMemo(
    () => [
      {
        accessorKey: "_id", //access nested data with dot notation
        header: "Order Id",
      },
      {
        accessorKey: "date",
        header: "Date",
        Cell: ({ cell }) => {
          return <Text>{formatDate(cell.getValue())}</Text>;
        },
      },
      {
        accessorKey: "items", //normal accessorKey
        header: "Total Items",
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
            <Link
              to={`/order-detail/${cell.row.original._id}`}
              className="text-[#228be6] text-md"
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
    <Box className="mx-12 my-8 shadow-md !rounded-xl ">
      <GeneralTable columns={columns} data={data} heading={"My Orders"} />
    </Box>
  );
};

export default Orders;
