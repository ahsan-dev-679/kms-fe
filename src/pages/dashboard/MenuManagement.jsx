import React, { useEffect, useState } from "react";
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
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { colors } from "@/configs/theme.config";
import Uploader from "@/assets/svg/uploader.svg";
import GeneralModal from "@/components/modal/GeneralModal";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import {
  useCategory,
  useCreateCategory,
} from "@/lib/tanstack-query/categoryQueries";
import { warningMessage } from "@/utils/toast";
import { useCreateMeal, useUpdateMeal } from "@/lib/tanstack-query/mealQueries";
import { baseURL } from "@/configs/axios.config";

const MenuManagement = () => {
  const navigate = useNavigate();
  const [newCategory, setNewCategory] = useState("");
  const [selectedCateg, setSelectedCateg] = useState("");
  const lg = useMediaQuery("(max-width: 1024px)");
  const md = useMediaQuery("(max-width: 768px)");
  const { isPending, mutateAsync } = useCreateCategory();
  const { isPending: loading, mutateAsync: createMeal } = useCreateMeal();
  const { isPending: uLoading, mutateAsync: updateMeal } = useUpdateMeal();

  const { categories } = useCategory();
  const [openedModal, { open: openModal, close: closeModal }] =
    useDisclosure(false);
  const { id } = useParams();
  const location = useLocation();
  const menu = location?.state?.menu;
  const [previousImages, setPreviousImages] = useState([]);

  const categoryList =
    categories?.map((categ) => ({
      value: categ?._id,
      label: categ?.name,
    })) || [];

  const tagsList = ["Healthy", "Quick", "Easy", "Vegetarian", "Vegan"];

  const form = useForm({
    initialValues: {
      title: "",
      description: "",
      discount: 0,
      price: null,
      stock: null,
      category: "",
      images: [],
      tags: [],
      servings: 0,
    },

    validate: {
      title: (value) => (value?.trim() === "" ? "Title is required" : null),
      description: (value) =>
        value?.trim() === "" ? "Description is required" : null,
      discount: (value) =>
        value > 100 ? "Discount cannot exceed more than 100%" : null,
      category: (value) => (value === "" ? "Category is required" : null),
      tags: (value) => (value.length > 0 ? null : "Tags are required"),
      price: (value) =>
        isNaN(value) || value <= 0 ? "Price is required" : null,
      stock: (value) =>
        isNaN(value) || value <= 0 ? "Quantity is required" : null,
    },
  });

  const removeImage = (currentIndex) => {
    form.setFieldValue(
      "images",
      form.values.images.filter((_, index) => index !== currentIndex)
    );
  };
  const removePrevImagehandler = (index) => {
    setPreviousImages((prevPreviousImages) =>
      prevPreviousImages.filter((_, i) => i !== index)
    );
  };

  const handleCategoryChange = (value, option) => {
    if (value === "Add New Category") {
      openModal();
    } else {
      setSelectedCateg(option.value);
      form.setFieldValue("category", value);
    }
  };

  const newCategoryHandler = async () => {
    const data = {
      category: newCategory,
    };
    const res = await mutateAsync(data);
    if (res?.success) {
      setSelectedCateg(res?.data?._id);
      form.setFieldValue("catgeory", res?.data?._id);
      setNewCategory("");
      closeModal();
    }
  };

  const handleSubmit = async (values) => {
    if (values.images.length <= 0) {
      return warningMessage("Image is required");
    }
    const formdata = new FormData();
    formdata.append("title", values.title);
    formdata.append("description", values.description);
    formdata.append("discount", values.discount);
    formdata.append("price", values.price);
    formdata.append("stock", values.stock);
    formdata.append("category", values.category);
    formdata.append("servings", values.servings);
    formdata.append("tags", JSON.stringify(values?.tags) || []);
    values?.images?.forEach((image) => {
      formdata.append(`images`, image);
    });
    let res;
    if (menu) {
      formdata.append("previousImages", JSON.stringify(previousImages) || []);
      res = await updateMeal({ id: menu?._id, values: formdata });
    } else {
      res = await createMeal(formdata);
    }
    if (res?.success) {
      navigate(-1);
    }
  };

  useEffect(() => {
    if (menu) {
      form.setFieldValue("title", menu?.title);
      form.setFieldValue("description", menu?.description);
      form.setFieldValue("discount", menu?.discount);
      form.setFieldValue("price", menu?.price);
      form.setFieldValue("stock", menu?.stock);
      form.setFieldValue("servings", menu?.servings);
      form.setFieldValue("category", menu?.category?._id);
      form.setFieldValue("tags", JSON.parse(menu?.tags));
      setPreviousImages(menu?.images);
      setSelectedCateg(menu?.category?._id);
    }
  }, []);

  return (
    <>
      <Box className=" border-2 bg-[#fff] shadow-md rounded-md">
        <IconArrowNarrowLeft
          size={32}
          className="mx-4 my-2 cursor-pointer"
          stroke={2}
          onClick={() => navigate(-1)}
        />
        <Box
          style={{
            height: "100%",
          }}
          className="px-16 py-2"
        >
          <form onSubmit={form.onSubmit(handleSubmit)}>
            <Title order={3} py={3}>
              {`${menu ? "Update" : "Add"} Menu`}
            </Title>

            <TextInput
              className="mb-2"
              w={md ? "100%" : "70%"}
              label="Title"
              placeholder="Enter title"
              {...form.getInputProps("title")}
            />
            <Textarea
              className="mb-2"
              autosize
              minRows={5}
              maxRows={12}
              w={md ? "100%" : "70%"}
              label="Description"
              placeholder="Enter description"
              {...form.getInputProps("description")}
            />
            <Flex gap={"lg"} direction={lg ? "column" : "row"}>
              <div className={`${md ? "w-full" : "w-1/2"} `}>
                {/* <NumberInput
                className="mb-2"
                label="Servings"
                placeholder="Enter Servings"
                hideControls
                allowNegative={false}
                {...form.getInputProps("servings")}
              /> */}
                <NumberInput
                  className="mb-2"
                  label="Price"
                  placeholder="Enter Price"
                  hideControls
                  allowNegative={false}
                  {...form.getInputProps("price")}
                />
                <NumberInput
                  className="mb-2"
                  label="Stock"
                  placeholder="Enter Stock"
                  hideControls
                  allowNegative={false}
                  {...form.getInputProps("stock")}
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
                  {...form.getInputProps("discount")}
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
                  {...form.getInputProps("category")}
                  value={selectedCateg}
                  onChange={(_value, options) =>
                    handleCategoryChange(_value, options)
                  }
                />
                <TagsInput
                  className="mb-2"
                  label="Tags"
                  placeholder="Select Tags"
                  data={tagsList}
                  {...form.getInputProps("tags")}
                />
              </div>

              <div className="flex-1 py-4 border-[1px] border-[#333] rounded-sm px-4 my-4">
                <Dropzone
                  className="w-full"
                  bg={"#F8F9FA"}
                  onDrop={(files) => {
                    form.setFieldValue(`images`, [
                      ...form.values.images,
                      ...files,
                    ]);
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
                {console.log("previousImages......", previousImages)}

                <div className="flex mt-4 flex-wrap gap-2">
                  {previousImages.length > 0 &&
                    previousImages?.map((i, index) => (
                      <div
                        key={index}
                        className="relative bg-[#F0F1F1] rounded-md px-4 py-8"
                      >
                        <div className="absolute top-2 right-1 text-white text-lg cursor-pointer">
                          <IoIosCloseCircle
                            onClick={() => removePrevImagehandler(index)}
                            fill="gray"
                            size={22}
                          />
                        </div>
                        <Image h={80} w={100} fit="contain" src={baseURL + i} />
                      </div>
                    ))}

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
                loading={loading || uLoading}
                type="submit"
                color={colors.primary[100]}
                radius="sm"
                size="sm"
                w={"48%"}
              >
                {`${menu ? "Update" : "Publish"} Menu`}
              </Button>
            </Flex>
          </form>
        </Box>
      </Box>

      <GeneralModal
        size="sm"
        opened={openedModal}
        close={closeModal}
        title={<p className="font-bold">Add New Category</p>}
        component={
          <Box className=" rounded-md">
            <div>
              <TextInput
                placeholder="Enter new category"
                value={newCategory}
                onChange={(event) => setNewCategory(event.currentTarget.value)}
                className="flex-1 w-full"
              />

              <Button
                type="button"
                loading={isPending}
                disabled={!newCategory}
                className="mt-2"
                radius={"sm"}
                variant="light"
                color={colors.primary[100]}
                onClick={newCategoryHandler}
              >
                Add
              </Button>
            </div>
          </Box>
        }
      />
    </>
  );
};

export default MenuManagement;
