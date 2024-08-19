import React from "react";
import { Avatar, Box, Flex, Popover, Text, Image } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import NotificationMenu from "../dashboard/NotificationMenu";

const Header = () => {
  const user = {
    avatar: "https://github.com/shadcn.png",
    username: "Young Alaska",
    email: "youngalaska@gmail.com",
  };
  const isMobile = useMediaQuery("(max-width:767px)");
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
          <MobileProfileBox profile={user} />
        </Flex>
      ) : (
        <Flex align={"center"} gap={"lg"}>
          <NotificationMenu />
          <DesktopProfileBox profile={user} />
        </Flex>
      )}
    </Flex>
  );
};

const DesktopProfileBox = ({ profile }) => {
  return (
    <Flex gap={"md"} align={"center"}>
      <Image
        className="w-12 h-12 rounded-full object-cover object-center"
        src={profile.avatar}
        alt={profile.username}
      />
      <Box>
        <Text className="text-[#141B43] !leading-none !font-semibold">
          {profile.username}
        </Text>
        <Text className="!text-[#A1A1A1] font-light">{profile.email}</Text>
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
        <Image
          onMouseEnter={open}
          onMouseLeave={close}
          className="w-12 h-12 rounded-full object-cover object-center"
          src={profile.avatar}
          alt={profile.username}
        />
      </Popover.Target>
      <Popover.Dropdown style={{ pointerEvents: "none" }}>
        <Box>
          <Text className="text-[#141B43] leading-none font-semibold">
            {profile.username}
          </Text>
          <Text className="text-[#A1A1A1] font-light">{profile.email}</Text>
        </Box>
      </Popover.Dropdown>
    </Popover>
  );
};

export default Header;
