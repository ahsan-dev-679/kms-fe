import React from "react";
import { Avatar, Box, Flex, Popover, Text, Image, Button } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import NotificationMenu from "../dashboard/NotificationMenu";
import { IconCheckbox } from "@tabler/icons-react";
import { colors } from "@/configs/theme.config";
import { useGetRole } from "@/hooks/auth";
import { useAuthStore } from "@/stores/auth.store";
import { baseURL } from "./../../configs/axios.config";
import { useMarkAttendance } from "@/lib/tanstack-query/chefQueries";

const Header = () => {
  const role = useGetRole();
  const { user } = useAuthStore();
  const isMobile = useMediaQuery("(max-width:767px)");
  const { isPending, mutateAsync } = useMarkAttendance();

  return (
    <Flex
      // px={{ base: "10px", md: "30px", lg: "40px", sm: "20px" }}
      className="bg-white py-3 md:py-6 mt-[10px] mx-[10px] md:mt-10 md:mx-6 px-4 md:px-8 border border-[#EDEDED] border-solid rounded-lg shadow-md"
      justify={"space-between"}
      align={"center"}
    >
      <Text className="!text-[#141B43]  !font-semibold">
        Welcome To Dashboard
      </Text>

      {isMobile ? (
        <Flex align={"center"} gap={"lg"}>
          <NotificationMenu />

          <MobileProfileBox profile={user?.userData} />
          {role === "chef" && (
            <Button
              variant="light"
              radius={"sm"}
              color={colors.primary[100]}
              rightSection={<IconCheckbox stroke={2} />}
              loading={isPending}
              onClick={() => mutateAsync()}
            >
              Mark attendence
            </Button>
          )}
        </Flex>
      ) : (
        <Flex align={"center"} gap={"lg"}>
          <NotificationMenu />

          <DesktopProfileBox profile={user?.userData} />
          {role === "chef" && (
            <Button
              variant="light"
              radius={"sm"}
              color={colors.primary[100]}
              loading={isPending}
              onClick={() => mutateAsync()}
              rightSection={<IconCheckbox stroke={2} />}
            >
              Mark Attendence
            </Button>
          )}
        </Flex>
      )}
    </Flex>
  );
};

const DesktopProfileBox = ({ profile }) => {
  return (
    <Flex gap={"md"} align={"center"}>
      <Avatar
        className="w-12 h-12 rounded-full object-cover object-center"
        src={baseURL + profile?.profileImage}
      />
      <Box>
        <Text className="text-[#141B43] !leading-none !font-semibold">
          {profile?.firstName + profile?.lastName}
        </Text>
        <Text className="!text-[#A1A1A1] font-light">{profile?.email}</Text>
      </Box>
    </Flex>
  );
};
const MobileProfileBox = ({ profile }) => {
  const [opened, { close, open }] = useDisclosure(false);
  return (
    <Popover
      width={"200"}
      position="bottom-end"
      offset={0}
      withArrow
      shadow="md"
      opened={opened}
    >
      <Popover.Target>
        <Avatar
          onMouseEnter={open}
          onMouseLeave={close}
          className="w-12 h-12 rounded-full object-cover object-center"
          src={baseURL + profile?.profileImage}
        />
      </Popover.Target>
      <Popover.Dropdown style={{ pointerEvents: "none" }}>
        <Box>
          <Text className="text-[#141B43] leading-none font-semibold">
            {profile?.firstName + profile?.lastName}
          </Text>
          <Text className="text-[#A1A1A1] font-light">{profile?.email}</Text>
        </Box>
      </Popover.Dropdown>
    </Popover>
  );
};

export default Header;
