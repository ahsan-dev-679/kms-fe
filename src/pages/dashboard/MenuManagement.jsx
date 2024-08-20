import React from "react";
import {
  Box,
  Flex,
  NumberInput,
  Select,
  TagsInput,
  Text,
  Textarea,
  TextInput,
  Group,
  rem,
  Image,
  Button,
  Title,
} from "@mantine/core";
import { IoIosCloseCircle } from "react-icons/io";
import { Dropzone, IMAGE_MIME_TYPE, MIME_TYPES } from "@mantine/dropzone";
import { IconX, IconArrowNarrowLeft } from "@tabler/icons-react";
import { useForm } from "@mantine/form";
import { useNavigate } from "react-router-dom";
import { colors } from "@/configs/theme.config";
import Uploader from "@/assets/svg/uploader.svg";

const MenuManagement = () => {
  const navigate = useNavigate();

  const categoryList = [
    "Breakfast",
    "Brunch",
    "Lunch",
    "Dinner",
    "Snacks",
    "Desserts",
    "Appetizers",
    "Salads",
    "Soups",
    "Pasta",
    "Grilled",
    "Vegan",
    "Vegetarian",
    "Seafood",
    "Barbecue",
  ];
  const tagsList = ["Healthy", "Quick", "Easy", "Vegetarian", "Vegan"];

  const form = useForm({
    initialValues: {
      title: "",
      desc: "",
      discount: 0,
      category: "",
      images: [],
      brands: [],
    },

    validate: {
      title: (value) => (value?.trim() === "" ? "Title is required" : null),
      desc: (value) =>
        value?.trim() === "" ? "Description is required" : null,
      sku: (value) => (value?.trim() === "" ? "SKU is required" : null),
      discount: (value) =>
        value > 100 ? "Discount cannot exceed more than 100%" : null,
      category: (value) => (value === "" ? "Category is required" : null),
      brands: (value) => (value.length > 0 ? null : "Brands is required"),
      price: (value) =>
        isNaN(value) || value <= 0 ? "Price is required" : null,
      quantity: (value) =>
        isNaN(value) || value <= 0 ? "Quantity is required" : null,
    },
  });

  const removeImage = (currentIndex) => {
    form.setFieldValue(
      "images",
      form.values.images.filter((_, index) => index !== currentIndex)
    );
  };

  return (
    <Box className=" border-2 bg-[#fff] shadow-md rounded-md">
      <IconArrowNarrowLeft
        size={32}
        className="mx-4 my-2"
        stroke={2}
        onClick={() => navigate(-1)}
      />
      <Box
        style={{
          height: "100%",
        }}
        className="px-16 py-2"
      >
        <Title order={3} py={3}>
          Add Menu
        </Title>

        <TextInput
          className="mb-2"
          w={"70%"}
          label="Title"
          placeholder="Input placeholder"
        />
        <Textarea
          className="mb-2"
          autosize
          minRows={5}
          maxRows={12}
          w={"70%"}
          label="Description"
          placeholder="Input placeholder"
        />
        <Flex gap={"lg"}>
          <div className="w-1/2">
            <NumberInput
              className="mb-2"
              label="Servings"
              placeholder="Enter Servings"
              hideControls
              allowNegative={false}
            />
            <NumberInput
              className="mb-2"
              label="Price"
              placeholder="Enter Price"
              hideControls
              allowNegative={false}
            />
            <NumberInput
              className="mb-2"
              label="Stock"
              placeholder="Enter Stock"
              hideControls
              allowNegative={false}
            />
            <NumberInput
              className="mb-2"
              label="Discount (%)"
              placeholder="Enter discount percentage"
              suffix="%"
              hideControls
              maxLength={3}
              min={0}
              allowNegative={false}
            />
            <Select
              className="mb-2"
              label="Product Category"
              placeholder="Select category"
              data={["Add New Category", ...categoryList]}
              comboboxProps={{
                transitionProps: { transition: "pop", duration: 200 },
                shadow: "md",
              }}
              // {...form.getInputProps("category")}
              // value={selectedCateg}
              // onChange={(_value, options) => handleCategoryChange(_value, options)}
            />
            <TagsInput
              className="mb-2"
              label="Tags"
              placeholder="Select Tags"
              data={tagsList}
              // {...form.getInputProps("brands")}
            />
          </div>

          <div className="flex-1 py-4 border-[1px] border-[#333] rounded-sm px-4 my-4">
            <Dropzone
              className="w-full"
              bg={"#F8F9FA"}
              onDrop={(files) => {
                form.setFieldValue(`images`, [...form.values.images, ...files]);
              }}
              onReject={(files) => console.log("rejected files", files)}
              maxSize={2 * 1024 ** 2}
              accept={[
                MIME_TYPES.png,
                MIME_TYPES.jpeg,
                MIME_TYPES.svg,
                MIME_TYPES.gif,
              ]}
              radius={"md"}
            >
              <Group
                justify="center"
                gap="xl"
                mih={180}
                style={{ pointerEvents: "none" }}
              >
                <Flex
                  direction="column"
                  justify="center"
                  align="center"
                  gap={10}
                >
                  <Dropzone.Accept>
                    <Image src={Uploader} />
                  </Dropzone.Accept>
                  <Dropzone.Reject>
                    <IconX
                      style={{
                        width: rem(52),
                        height: rem(52),
                        color: "var(--mantine-color-red-6)",
                      }}
                      stroke={1.5}
                    />
                  </Dropzone.Reject>
                  <Dropzone.Idle>
                    <Image w={100} src={Uploader} />
                  </Dropzone.Idle>

                  <Text className="text-center" size="md" inline>
                    Drag and Drop Files or Browse
                  </Text>
                </Flex>
              </Group>
            </Dropzone>

            <div className="flex mt-4 flex-wrap gap-2">
              {form?.values?.images?.length > 0 &&
                form?.values?.images?.map((i, index) => (
                  <div
                    key={index}
                    className="relative bg-[#F0F1F1] rounded-md px-4 py-8"
                  >
                    <div className="absolute top-2 right-1 text-white text-lg cursor-pointer">
                      <IoIosCloseCircle
                        onClick={() => removeImage(index)}
                        fill="gray"
                        size={22}
                      />
                    </div>
                    <Image
                      h={80}
                      w={100}
                      fit="contain"
                      src={
                        // product?.product && isEdit ? i :
                        URL?.createObjectURL(i)
                      }
                    />
                  </div>
                ))}
            </div>
          </div>
        </Flex>

        <Flex justify={"end"} my={4}>
          <Button
            onClick={() => navigate("/dashboard/menu/list")}
            color={colors.primary[100]}
            radius="sm"
            size="sm"
            px={8}
          >
            Publish
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default MenuManagement;
