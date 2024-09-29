import * as uuid from "uuid";
import React, { useMemo, useState } from "react";
import GeneralTable from "./../../components/table/GeneralTable";
import { Box, Text, Button, Select } from "@mantine/core";
import { formatDate, formatPrice } from "@/utils";
import { Link, useNavigate } from "react-router-dom";
import { IconEye } from "@tabler/icons-react";
import Transition from "@/components/layout/Transition";
import {
  useOrdersList,
  useUpdateOrderStatus,
} from "@/lib/tanstack-query/orderQueries";
import { useGetRole } from "@/hooks/auth";

const OrderList = () => {
  const role = useGetRole();
  console.log(role);

  const navigate = useNavigate();
  const { isLoading, ordersList } = useOrdersList();
  const { isPending, mutateAsync } = useUpdateOrderStatus();

  const data = [
    { label: "Pending", value: "pending" },
    { label: "Completed", value: "completed" },
    { label: "Shipped", value: "shipped" },
    { label: "Cancelled", value: "cancelled" },
  ];

  const data1 = [
    { label: "Pending", value: "pending" },
    { label: "Completed", value: "completed" },
  ];

  const arrayData = role === "admin" ? data : data1;

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
          return <Text>{cell.row.original?.user?.firstName}</Text>;
        },
      },
      {
        accessorKey: "createdAt",
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
              value={cell.getValue()}
              data={arrayData}
              onChange={async (_value, option) => {
                mutateAsync({ id: cell.row.original._id, status: _value });
              }}
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
                navigate(`/dashboard/order/detail/${cell.row.original._id}`, {
                  state: { order: cell.row.original },
                })
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
          isLoading={isLoading}
          columns={columns}
          data={ordersList || []}
          heading={"Order List"}
        />
      </Box>
    </Transition>
  );
};

export default OrderList;
