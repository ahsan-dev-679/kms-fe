import * as uuid from "uuid";
import React, { useMemo, useState } from "react";
import GeneralTable from "../../components/table/GeneralTable";
import {
  Box,
  Flex,
  Text,
  Image,
  Tooltip,
  Menu,
  Button,
  Title,
  Group,
} from "@mantine/core";
import { formatPrice, getStockIcon } from "@/utils";
import { Link, useNavigate } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useDisclosure } from "@mantine/hooks";
import MealDetail from "@/components/modal/MealDetail";
import { DeletePopup } from "@/components/alert/DeletePopup";
import Transition from "@/components/layout/Transition";
import { colors } from "@/configs/theme.config";
import RowActionPopup from "@/components/dashboard/RowActionPopup";
import { IconTrash, IconAssembly } from "@tabler/icons-react";
import GeneralModal from "@/components/modal/GeneralModal";
import { useGetRole } from "@/hooks/auth";
import { useCreateCategory } from "@/lib/tanstack-query/categoryQueries";

const MenuList = () => {
  const role = useGetRole();
  const navigate = useNavigate();
  const [id, setId] = useState(null);
  const [detail, setDetail] = useState({});
  const [openedModal, { open: openModal, close: closeModal }] =
    useDisclosure(false);
  const [openedAlert, { open: openAlert, close: closeAlert }] =
    useDisclosure(false);
  const [
    openedRowSelection,
    { open: openRowSelection, close: closeRowSelection },
  ] = useDisclosure(false);

  const deleteHandler = () => {
    console.log("id.....", id);
  };

  const data = [
    {
      _id: uuid.v4(),
      title: "Sizzling Salsa Chicken Bites",
      price: 15.99,
      stock: 50,
      category: "Breakfast",
      discount: 5, // percentage discount
      img: "https://kababjeesfriedchicken.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1713422989-436561642_788467206198024_7402439414129935573_n.jpg&w=640&q=75",
    },
    {
      _id: uuid.v4(),
      title: "Sizzling Salsa Chicken Bites",
      price: 20.0,
      stock: 7,
      category: "Lunch",
      discount: 10, // percentage discount
      img: "https://kababjeesfriedchicken.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1713422989-436561642_788467206198024_7402439414129935573_n.jpg&w=640&q=75",
    },
    {
      _id: uuid.v4(),
      title: "Sizzling Salsa Chicken Bites",
      price: 25.5,
      stock: 20,
      category: "Dinner",
      discount: 0, // no discount
      img: "https://kababjeesfriedchicken.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1713422989-436561642_788467206198024_7402439414129935573_n.jpg&w=640&q=75",
    },
    {
      _id: uuid.v4(),
      title: "Sizzling Salsa Chicken Bites",
      price: 12.75,
      stock: 100,
      category: "Snacks",
      discount: 15, // percentage discount
      img: "https://kababjeesfriedchicken.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1713422989-436561642_788467206198024_7402439414129935573_n.jpg&w=640&q=75",
    },
    {
      _id: uuid.v4(),
      title: "Sizzling Salsa Chicken Bites",
      price: 18.25,
      stock: 75,
      category: "Dessert",
      discount: 8, // percentage discount
      img: "https://kababjeesfriedchicken.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1713422989-436561642_788467206198024_7402439414129935573_n.jpg&w=640&q=75",
    },
    {
      _id: uuid.v4(),
      title: "Sizzling Salsa Chicken Bites",
      price: 15.99,
      stock: 50,
      category: "Breakfast",
      discount: 5, // percentage discount
      img: "https://kababjeesfriedchicken.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1713422989-436561642_788467206198024_7402439414129935573_n.jpg&w=640&q=75",
    },
    {
      _id: uuid.v4(),
      title: "Sizzling Salsa Chicken Bites",
      price: 15.99,
      stock: 50,
      category: "Breakfast",
      discount: 5, // percentage discount
      img: "https://kababjeesfriedchicken.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1713422989-436561642_788467206198024_7402439414129935573_n.jpg&w=640&q=75",
    },
    {
      _id: uuid.v4(),
      title: "Sizzling Salsa Chicken Bites",
      price: 15.99,
      stock: 50,
      category: "Breakfast",
      discount: 5, // percentage discount
      img: "https://kababjeesfriedchicken.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1713422989-436561642_788467206198024_7402439414129935573_n.jpg&w=640&q=75",
    },
    {
      _id: uuid.v4(),
      title: "Sizzling Salsa Chicken Bites",
      price: 15.99,
      stock: 50,
      category: "Breakfast",
      discount: 5, // percentage discount
      img: "https://kababjeesfriedchicken.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1713422989-436561642_788467206198024_7402439414129935573_n.jpg&w=640&q=75",
    },
    {
      _id: uuid.v4(),
      title: "Sizzling Salsa Chicken Bites",
      price: 15.99,
      stock: 50,
      category: "Breakfast",
      discount: 5, // percentage discount
      img: "https://kababjeesfriedchicken.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1713422989-436561642_788467206198024_7402439414129935573_n.jpg&w=640&q=75",
    },
  ];

  const columns = useMemo(
    () => [
      {
        accessorKey: "title", //access nested data with dot notation
        header: "Title",
        Cell: ({ cell }) => {
          return (
            <Flex direction={"column"}>
              <Image
                style={{
                  width: 50,
                  height: 50,
                }}
                src={cell.row.original.img}
              />
              <Tooltip
                color={"#208251"}
                arrowSize={10}
                position="bottom"
                withArrow
                label={cell.row.original.title}
              >
                <Text lineClamp={1}>{cell.row.original.title}</Text>
              </Tooltip>
            </Flex>
          );
        },
      },
      {
        accessorKey: "price",
        header: "Price",
        Cell: ({ cell }) => {
          return <Text>{formatPrice(cell.getValue())}</Text>;
        },
      },
      {
        accessorKey: "stock",
        header: "Stock",
        Cell: ({ cell }) => {
          const stock = cell.getValue();
          const { Icon, color } = getStockIcon(stock);

          return (
            <Flex>
              {<Icon style={{ color, fontWeight: 700 }} />}
              <Text style={{ color, fontWeight: 700 }}>{stock}</Text>
            </Flex>
          );
        },
      },
      {
        accessorKey: "category",
        header: "Category",
        Cell: ({ cell }) => {
          return <Text>{cell.getValue()}</Text>;
        },
      },
      {
        accessorKey: "discount",
        header: "Discount",
        Cell: ({ cell }) => {
          return <Text>{cell.getValue()}%</Text>;
        },
      },

      {
        accessorKey: "actions",
        header: "Actions",
        Cell: ({ cell }) => {
          return (
            <Menu width={"150"} shadow="md">
              <Menu.Target>
                <Button p={"0"} variant="transparent" color="black">
                  <BsThreeDotsVertical
                    className="cursor-pointer"
                    fontSize={22}
                  />
                </Button>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item
                  color="blue"
                  className="font-medium"
                  onClick={() => {
                    setDetail(cell.row.original);
                    openModal();
                  }}
                >
                  View
                </Menu.Item>

                {role === "chef" && (
                  <Menu.Item className="font-medium">
                    Low stock notification
                  </Menu.Item>
                )}
                {role === "admin" && (
                  <Menu.Item className="font-medium">Edit</Menu.Item>
                )}
                {role === "admin" && (
                  <Menu.Item
                    onClick={() => {
                      setId(cell.row.original?._id);
                      openAlert();
                    }}
                    className="font-semibold"
                    color="red"
                  >
                    Delete
                  </Menu.Item>
                )}
              </Menu.Dropdown>
            </Menu>
          );
        },
      },
    ],
    []
  );

  return (
    <Transition>
      <Box className="my-3 shadow-md !rounded-xl">
        {role === "admin" && (
          <Flex justify={"end"} my={4}>
            <Button
              onClick={() => navigate("/dashboard/menu/management")}
              color={colors.primary[100]}
              radius="sm"
              size="sm"
            >
              Add New Meal
            </Button>
          </Flex>
        )}
        <GeneralTable
          isLoading={false}
          columns={columns}
          data={data}
          heading={"Menu List"}
        />
        {/* <RowActionPopup className="p-3" isOpen={true}>
          <Title order={4}>Add Meals</Title>
          <Flex>
            <Button
              className="gap-2 bg-red-500 hover:bg-red-600" 
            >
              <IconTrash size={20} />
              <p className="hidden md:block">Delete Selected</p>
            </Button>
            <Button
              variant={"outline"} 
              className="gap-2 border !border-spring-green-500 !text-spring-green-500"
            >
              <IconAssembly size={20} />
              <p className="hidden md:block">Edit</p>
            </Button>
          </Flex>
        </RowActionPopup> */}
      </Box>

      <MealDetail detail={detail} opened={openedModal} close={closeModal} />
      <DeletePopup
        text={"Are you sure you want to delete?"}
        loading={false}
        clickHandler={deleteHandler}
        opened={openedAlert}
        close={closeAlert}
      />
      {/* <GeneralModal
        close={closeRowSelection}
        opened={openRowSelection}
        component={
          <>
            <Group justify="flex-end" my={4} py={16}>
              <Button onClick={closeRowSelection} variant="default">
                Cancel
              </Button>
              <Button variant="filled" color="red">
                Publish

              </Button>
            </Group>
          </>
        }
      /> */}
    </Transition>
  );
};

export default MenuList;
