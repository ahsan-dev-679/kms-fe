import { Box, Flex, Image, Title, Text } from "@mantine/core";
import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
const About = () => {
  return (
    //
    <section className="text-gray-600 body-font flex items-center gap-10 pb-24 py-8 px-4 bg-[#4FAE5A] -mt-6">
      <Box className="relative w-1/2">
        <Image
          style={{
            height: 600,
            width: "100%",
          }}
          className="rounded-3xl"
          src="https://assets.website-files.com/61d3a7155d89b79cad2b9e32/61d3a7155d89b718d22b9e73_about-home-restaurante-x-template-p-800.jpeg"
        />
        <Box className="absolute -bottom-12 -right-28 bg-white rounded-2xl shadow-lg px-6 py-14 ml-8 border-[1px]">
          <Title ta={"center"} className="pb-8">
            Come and visit us
          </Title>

          <Flex direction={"column"} gap={20}>
            <Flex gap={10} align={"center"}>
              <IoLocationOutline
                color="#4FAE5A"
                size={26}
                className="font-bold"
              />
              <Text c="dimmed">
                Friedrich-Ebert-Strasse 79, Kassel, Hesse, Germany
              </Text>
            </Flex>
            <Flex gap={10} align={"center"}>
              <LuPhoneCall color="#4FAE5A" size={26} />
              <Text c="dimmed">+49 91 51201 9038</Text>
            </Flex>
            <Flex gap={10} align={"center"}>
              <HiOutlineMail color="#4FAE5A" size={26} />
              <Text c="dimmed">ahsan@gmail.com</Text>
            </Flex>
          </Flex>
        </Box>
      </Box>
      <Box className="ml-[7rem] flex-1">
        <Title ta={"center"} c={"#ECECEC"} className="pb-6 text-[#ECECEC]">
          About us
        </Title>
        <Text className="py-6 text-[#ECECEC] text-lg font-extralight tracking-wide">
          At our restaurant, we bring the flavors of Germany to your table with
          a mouthwatering selection of desserts, breakfast options, and fast
          food. Whether you're craving a delightful pastry to start your day or
          a hearty schnitzel burger for lunch, we have something to satisfy
          every palate. Our commitment to quality ingredients and authentic
          recipes ensures a memorable dining experience.
        </Text>
        <Text className="py-6 text-[#ECECEC] text-lg font-extralight tracking-wide">
          Come visit us for a taste of Germany in a cozy atmosphere, perfect for
          families, friends, or a quick bite on the go. Have questions or
          special requests? Don’t hesitate to reach out—we're here to make your
          experience exceptional!
        </Text>
      </Box>
    </section>
  );
};

export default About;
