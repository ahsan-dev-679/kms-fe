import React, { useState } from "react";
import {
  Modal,
  Button,
  Grid,
  Title,
  Text,
  Image,
  Flex,
  ActionIcon,
  NumberInput,
  Box,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Carousel } from "@mantine/carousel";
import { IconCircleArrowRightFilled } from "@tabler/icons-react";
import { colors } from "@/configs/theme.config";
import { ImPlus, ImMinus } from "react-icons/im";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useCartStore } from "@/stores/cart.store";

const MealDetail = ({ opened, close, detail }) => {
  const mobile = useMediaQuery("(max-width: 1024px)");
  const { addToCart, decrementQty } = useCartStore();
  const [count, setCount] = useState(1);

  return (
    <Modal
      size={mobile ? "md" : "calc(100vw - 15rem)"}
      radius={"lg"}
      opened={opened}
      onClose={close}
      title=""
    >
      <Grid gutter="lg">
        <Grid.Col span={mobile ? 12 : 5} className="border-r-2">
          <Carousel
            classNames={{
              indicator: "bg-[#4FAE5A]",
            }}
            loop
            withIndicators
            height={400}
            // style={{ width: 400 }}
          >
            <Carousel.Slide>
              <Image
                src={detail.img}
                style={{ objectFit: "contain", height: 400 }}
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image
                src={
                  "https://kababjeesfriedchicken.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1718003229-_JK_6587.jpg%3Fq%3D10&w=640&q=75"
                }
                style={{ objectFit: "contain", height: 400 }}
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image
                src={
                  "https://kababjeesfriedchicken.com/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fimages%2F1718003229-_JK_6587.jpg%3Fq%3D10&w=640&q=75"
                }
                style={{ objectFit: "contain", height: 400 }}
              />
            </Carousel.Slide>
          </Carousel>
        </Grid.Col>
        <Grid.Col
          style={{
            flex: 1,
          }}
          span={mobile ? 12 : 7}
          className="border-0 border-red-500"
        >
          <Title order={2}>{detail.title}</Title>
          <Text py={2} c={"dark"} fw={600} size="lg">
            Rs. {detail.price}
          </Text>
          <Text py={4} c={"dimmed"}>
            {detail.desc}
          </Text>

          <Box
            // justify={"flex-end"}
            // align={"end"}
            style={{
              display: "flex",
              flex: 1,
              justifyContent: "flex-end",
              alignItems: "end",
              position: mobile ? "sticky" : "absolute",
              height: "100%",
              bottom: 5,
            }}
          >
            <Flex
              // style={{ position: "absolute", bottom: 0 }}
              align={"center"}
              justify={"flex-start"}
              gap={20}
              style={{ width: "100%" }}
              className="!sticky-bottom border-0 border-red-500"
            >
              <Flex align={"center"}>
                <ActionIcon
                  onClick={() => {
                    if (count > 1) {
                      setCount(count - 1);
                    }
                  }}
                  disabled={count == 1}
                  variant="filled"
                  color="#fff"
                  size={"lg"}
                  radius={"xl"}
                  className="!border-2 border-zinc-300 text-black cursor-pointer"
                >
                  <FaMinus size={16} fill="#000" />
                </ActionIcon>
                <NumberInput
                  classNames={{
                    input: "border-none outline-none",
                  }}
                  defaultValue={count}
                  value={count}
                  style={{ width: 45, border: "none" }}
                  allowDecimal={false}
                  allowNegative={false}
                  hideControls
                  size={"md"}
                />
                <ActionIcon
                  onClick={() => setCount(count + 1)}
                  variant="filled"
                  color="#fff"
                  size={"lg"}
                  radius={"xl"}
                  className="!border-2 border-zinc-300 text-black cursor-pointer"
                >
                  <FaPlus size={16} fill="#000" />
                </ActionIcon>
              </Flex>
              <Button
                onClick={() => {
                  addToCart({ ...detail, qty: count });
                  setCount(1);
                  close();
                }}
                fullWidth
                color={colors.primary[100]}
                radius="md"
                size="md"
                className="my-2"
              >
                Add to Cart - {`Rs. ${detail.price}`}
              </Button>
            </Flex>
          </Box>
        </Grid.Col>
      </Grid>
    </Modal>
  );
};

export default MealDetail;
