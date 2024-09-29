import React, { useState, useEffect } from "react";
import { Box, Flex, Image, Title, Text } from "@mantine/core";
import { calculateDiscount, capitalizeFirstLetter } from "@/utils";
import { useDisclosure } from "@mantine/hooks";
import { useCartStore } from "@/stores/cart.store";
import MealDetail from "../modal/MealDetail";
import { baseURL } from "@/configs/axios.config";

const MenuCard = ({ meal }) => {
  const [detail, setDetail] = useState({});
  const [openedModal, { open: openModal, close: closeModal }] =
    useDisclosure(false);

  return (
    <>
      <Flex
        onClick={() => {
          setDetail(meal);
          openModal();
        }}
        gap={10}
        direction={"column"}
        className="px-4 cursor-pointer group h-full"
      >
        <Box className="relative ">
          <Image
            style={{
              height: 280,
              objectFit: "cover",
            }}
            className="rounded-3xl transition-transform duration-300 group-hover:scale-105 relative"
            src={baseURL + meal?.images[0]}
          />
          <button className="bg-white text-black group-hover:text-white group-hover:bg-black transition-colors duration-300 px-8 py-2 rounded-3xl font-semibold absolute top-3 right-1 z-10 text-lg">
            {calculateDiscount(meal?.price, meal?.discount)}€
          </button>
        </Box>
        <Title
          className="capitalize transition-colors duration-300 group-hover:text-primary-100"
          ta={"center"}
          order={2}
        >
          {meal?.title}
        </Title>
        <Text lineClamp={2}>{capitalizeFirstLetter(meal?.description)}</Text>
      </Flex>

      <MealDetail detail={detail} opened={openedModal} close={closeModal} />
    </>
  );
};

export default MenuCard;
