import React, { useMemo, useState } from "react";
import GeneralTable from "./../../components/table/GeneralTable";
import { Box, Text, Button, Flex, Avatar, Menu } from "@mantine/core";
import { formatDate } from "@/utils";
import { useNavigate, useParams } from "react-router-dom";
import Transition from "@/components/layout/Transition";
import { IconArrowNarrowLeft } from "@tabler/icons-react";
import { DatePicker } from "@mantine/dates";
import { FaRegCalendarAlt } from "react-icons/fa";
import { useMediaQuery } from "@mantine/hooks";
import { useAttendance } from "@/lib/tanstack-query/chefQueries";
import { useAuthStore } from "@/stores/auth.store";
import { baseURL } from "@/configs/axios.config";
import { useGetRole } from "@/hooks/auth";

const AttendenceList = () => {
  const role = useGetRole();
  const { user } = useAuthStore();
  const { id } = useParams();
  console.log("id", id);
  const navigate = useNavigate();
  const [value, setValue] = useState([]);
  const isMobile = useMediaQuery("(max-width:600px)");
  console.log("user?.userData?._id", user?.userData?._id);

  const payloadID = role === "chef" ? user?.userData?._id : id;
  const { isLoading, attendanceList } = useAttendance(payloadID);
  console.log("atttendaceList...", attendanceList);

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
                src={baseURL + cell?.row?.original?.user?.profileImage}
              />
              <Flex direction={"column"}>
                <Text size="sm">
                  {cell.row.original?.user?.firstName +
                    cell.row.original?.user?.lastName}
                </Text>
                <Text size="sm">{cell.row.original?.user?.email}</Text>
              </Flex>
            </Flex>
          );
        },
      },
      {
        accessorKey: "kitchenNo",
        header: "Kitchen No",
        Cell: ({ cell }) => {
          return <Text>{cell.row.original?.user?.kitchenNo}</Text>;
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
        accessorKey: "isPresent",
        header: "Status",
        Cell: ({ cell }) => {
          return (
            <Flex>
              <Text
                style={{
                  backgroundColor:
                    cell.getValue() === true ? "#BBF0D6" : "#ffc6c6",
                  padding: "5px 10px",
                }}
                c={cell.getValue() === true ? "#45a331" : "#e30202"}
                className="w-fit rounded-md"
              >
                {cell.getValue() === true ? "Present" : "Absent"}
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
          isLoading={isLoading}
          columns={columns}
          data={attendanceList || []}
          heading={"Chef Attendence"}
          otherComponent={
            // <Menu
            //   className="mr-4"
            //   position="bottom-start"
            //   openDelay={100}
            //   closeDelay={400}
            //   shadow="md"
            //   width={"fit-content"}
            // >
            //   <Menu.Target>
            //     <Button
            //       h={isMobile ? "40px" : "45px"}
            //       leftSection={<FaRegCalendarAlt />}
            //       variant="gradient"
            //       gradient={{ from: "#F9F9F9", to: "#FFFFFF", deg: 270 }}
            //       size={isMobile ? "xs" : "md"}
            //       style={{
            //         boxShadow: "0px 19px 17.7px -16px #E9E9E9",
            //         border: "1px solid #EDEDED",
            //       }}
            //       c={"#483E3E"}
            //     >
            //       Filter by Date
            //     </Button>
            //   </Menu.Target>

            //   <Menu.Dropdown>
            //     <Menu.Label>
            //       <DatePicker
            //         color="#208251"
            //         type="range"
            //         value={value}
            //         onChange={setValue}
            //       />
            //       <Button
            //         size="sm"
            //         w={"100%"}
            //         variant="gradient"
            //         gradient={{ from: "#208251", to: "#309161", deg: 270 }}
            //       >
            //         Search
            //       </Button>
            //     </Menu.Label>
            //   </Menu.Dropdown>
            // </Menu>
            <></>
          }
        />
      </Box>
    </Transition>
  );
};

export default AttendenceList;
