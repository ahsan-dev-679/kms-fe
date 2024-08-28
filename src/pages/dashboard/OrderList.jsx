import * as uuid from "uuid";
import React, { useMemo, useState } from "react";
import GeneralTable from "./../../components/table/GeneralTable";
import { Box, Text, Button, Select } from "@mantine/core";
import { formatDate, formatPrice } from "@/utils";
import { Link, useNavigate } from "react-router-dom";
import { IconEye } from "@tabler/icons-react";
import Transition from "@/components/layout/Transition";

const OrderList = () => {
  const navigate = useNavigate();
  const data = [
    {
      name: "Young Alaska",
      total: 10.0,
      status: "completed",
      date: "2024-08-17T11:49:16.378+00:00",
      _id: "ORD001",
    },
    {
      name: "Young Alaska",
      total: 6.0,
      status: "pending",
      date: "2024-08-17T11:49:16.378+00:00",
      _id: "ORD002",
    },
    {
      name: "Young Alaska",
      total: 16.0,
      status: "shipped",
      date: "2024-08-17T11:49:16.378+00:00",
      _id: "ORD003",
    },
    {
      name: "Young Alaska",
      total: 24.0,
      status: "completed",
      date: "2024-08-17T11:49:16.378+00:00",
      _id: "ORD004",
    },
    {
      name: "Young Alaska",
      total: 4.0,
      status: "cancelled",
      _id: "ORD005",
      date: "2024-08-17T11:49:16.378+00:00",
    },
    {
      name: "Young Alaska",
      total: 14.0,
      status: "completed",
      date: "2024-08-17T11:49:16.378+00:00",
      _id: "ORD006",
    },
    {
      name: "Young Alaska",
      total: 8.0,
      status: "pending",
      _id: "ORD007",
      date: "2024-08-17T11:49:16.378+00:00",
    },
    {
      name: "Young Alaska",
      total: 12.0,
      status: "shipped",
      date: "2024-08-17T11:49:16.378+00:00",
      _id: "ORD008",
    },
    {
      name: "Young Alaska",
      total: 20.0,
      status: "completed",
      date: "2024-08-17T11:49:16.378+00:00",
      _id: "ORD009",
    },
    {
      name: "Young Alaska",
      total: 18.0,
      status: "returned",
      date: "2024-08-17T11:49:16.378+00:00",
      _id: "ORD010",
    },
  ];

  const columns = useMemo(
    () => [
      {
        accessorKey: "_id", //access nested data with dot notation
        header: "Order ID",
        Cell: ({ cell }) => {
          return <Text>{cell.getValue()}</Text>;
        },
      },
      {
        accessorKey: "name",
        header: "Customer Name",
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
        accessorKey: "total",
        header: "Total",
        Cell: ({ cell }) => {
          return <Text>{formatPrice(cell.getValue())}</Text>;
        },
      },
      {
        accessorKey: "status",
        header: "Status",
        Cell: ({ cell }) => {
          return (
            <Select
              placeholder="Status"
              defaultValue={cell.getValue()}
              data={[
                { label: "Pending", value: "pending" },
                { label: "Completed", value: "completed" },
                { label: "Shipped", value: "shipped" },
                { label: "Cancelled", value: "cancelled" },
              ]}
            />
          );
        },
      },

      {
        accessorKey: "action",
        header: "Action",
        Cell: ({ cell }) => {
          return (
            <Button
              onClick={() =>
                navigate(`/dashboard/order/detail/${cell.row.original._id}`)
              }
              p={"0"}
              variant="transparent"
              color="black"
            >
              <IconEye stroke={2} />
            </Button>
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
          columns={columns}
          data={data}
          heading={"Order List"}
        />
      </Box>
    </Transition>
  );
};

export default OrderList;
