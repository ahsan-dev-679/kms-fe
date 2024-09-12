import {
  Box,
  Button,
  Image,
  Flex,
  Grid,
  GridCol,
  PasswordInput,
  Text,
  TextInput,
  Avatar,
  Group,
  FileButton,
} from "@mantine/core";
import { isEmail, useForm } from "@mantine/form";
import React, { useEffect, useState } from "react";
import { PhoneInput } from "react-international-phone";
import { useMediaQuery } from "@mantine/hooks";
import Shadow from "@/assets/svg/shadow.svg";
import { colors } from "@/configs/theme.config";
import Transition from "@/components/layout/Transition";
import Loader from "@/components/layout/Loader";
import { useAuthStore } from "@/stores/auth.store";
import { errorMessage } from "@/utils/toast";
import { useUpdateProfile } from "@/lib/tanstack-query/authQueries";
import { baseURL } from "@/configs/axios.config";

const Settings = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const { user } = useAuthStore();
  const [profileFile, setProfileFile] = useState(null);
  const [file, setfile] = useState(null);
  const { isPending: loading, mutateAsync } = useUpdateProfile();

  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirm_password: "",
    },
    validate: {
      firstName: (value) => {
        if (value.length == 0) {
          return "First Name is required!";
        }
      },
      lastName: (value) => {
        if (value.length == 0) {
          return "Last Name is required";
        }
      },
      email: (value) => {
        if (value.length == 0) {
          return "Email is required";
        }
        if (!isEmail(value)) {
          return "Enter correct emails!";
        }
      },
      phone: (value) => {
        if (value.length == 0) {
          return "Phone is required";
        }
      },
      password: (value) => {
        if (value.length > 0) {
          return "Password is required";
        }
        if (value.length > 0 && value.length < 8) {
          return "Password length should be greater then 7";
        }
      },
      confirm_password: (value, values) => {
        if (value !== values.confirm_password) {
          return "Password and  Confirm password not matched!";
        }
      },
    },
  });

  const handleFileChange = (file) => {
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        return errorMessage("File size exceeds 5MB. Upload an image under 5MB");
      } else {
        setfile(file);
        const profileFile = URL.createObjectURL(file);
        setProfileFile(profileFile);
      }
    }
  };

  useEffect(() => {
    form.setValues({
      email: user?.userData?.email,
      firstName: user?.userData?.firstName,
      lastName: user?.userData?.lastName,
      phone: user?.userData?.phone || "",
    });
  }, []);

  const handleSubmit = async (values) => {
    let payload = { ...values, id: user?.userData?._id };
    if (file) {
      payload = {
        ...payload,
        profileImage: file,
      };
    }
    console.log(user?.userData?._id);

    console.log(payload);
    await mutateAsync(payload);
    setProfileFile(null);
  };
  console.log(baseURL + user?.userData?.profileImage);

  return (
    <Transition>
      <Flex
        direction={"column"}
        style={{
          border: "1px solid #EDEDED",
          boxShadow: "0px 29px 20px -25px #0000000D",
          backgroundColor: "#FFFFFF",
          height: "fit-content",
          position: "relative",
        }}
        p={{ base: "sm", sm: "md", md: "xl" }}
      >
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Image
            src={Shadow}
            alt={"profileShadow"}
            className="absolute top-0 left-0 w-[102%] z-0"
          />

          <Text
            style={{
              color: "#2E3459",
              fontWeight: "500",
              fontSize: "25px",
            }}
          >
            Profile Picture
          </Text>
          <Flex
            wrap={"wrap"}
            justify={"space-between"}
            maw={"1200"}
            py={{ md: "md", lg: "lg" }}
            className="z-[2]"
          >
            <Flex
              justify={"flex-start"}
              w={{ base: "120px", md: "30%" }}
              align={"center"}
            >
              <Box
                w={isMobile ? "100px" : "150px"}
                h={isMobile ? "100px" : "150px"}
                className="AvatarProfileMain rounded-full "
              >
                <Avatar
                  size={150}
                  src={profileFile || baseURL + user?.userData?.profileImage}
                  alt="Selected Avatar"
                  loading="eager"
                  placeholder="blur"
                  className={`transition-opacity duration-200`}
                />
              </Box>
            </Flex>
            <Group justify="center">
              <FileButton
                onChange={(file) => {
                  handleFileChange(file);
                }}
                accept="image/png,image/jpeg"
              >
                {(props) => (
                  <Button
                    type="button"
                    variant="light"
                    radius={"sm"}
                    color={colors.primary[100]}
                    {...props}
                  >
                    Upload image
                  </Button>
                )}
              </FileButton>
            </Group>
          </Flex>
          <Box mt={isMobile ? "20px" : "40px"} pt={isMobile ? "20px" : "40px"}>
            <Box
              style={{
                left: 0,
                marginTop: isMobile ? "-20px" : "-40px",
                borderTop: "1px solid #EAEAEA",
                position: "absolute",
                width: "100%",
              }}
            ></Box>
            <Text
              style={{
                color: "#2E3459",
                fontWeight: "500",
                fontSize: "25px",
              }}
            >
              Personal Information
            </Text>
          </Box>
          <Grid
            maw={"1200"}
            style={{ flex: 3 }}
            mt={{ base: "sm", sm: "md", md: "xl" }}
          >
            <GridCol mt={"md"} span={{ base: 12, sm: 6, md: 6 }}>
              <TextInput
                size="md"
                label="First Name"
                withAsterisk
                placeholder="Enter first name"
                {...form.getInputProps("firstName")}
              />
            </GridCol>
            <GridCol mt={"md"} span={{ base: 12, sm: 6, md: 6 }}>
              <TextInput
                size="md"
                label="Last Name"
                withAsterisk
                placeholder="Enter last name"
                {...form.getInputProps("lastName")}
              />
            </GridCol>
            <GridCol mt={"md"} span={{ base: 12, sm: 6, md: 6 }}>
              <TextInput
                size="md"
                disabled
                type="email"
                label="Personal Email"
                placeholder="Email here"
                {...form.getInputProps("email")}
              />
            </GridCol>
            <GridCol mt={"md"} span={{ base: 12, sm: 6, md: 6 }}>
              <Text
                c={"#141B43"}
                fw={"500"}
                fz={"var(--input-label-size, var(--mantine-font-size-sm))"}
                withAsterisk
              >
                Phone Number{" "}
                <sup style={{ color: "red", fontSize: "13px", top: "-2px" }}>
                  *
                </sup>
              </Text>
              <PhoneInput
                style={{
                  width: "100%",
                }}
                inputStyle={{
                  height: 44,
                  width: "100%",
                }}
                countrySelectorStyleProps={{
                  width: "100%",
                }}
                className="phone-input-flag"
                defaultCountry="us"
                {...form.getInputProps("phone")}
              />
              <span style={{ color: "red", fontSize: "13px", top: "-2px" }}>
                {form.errors.phone}
              </span>
            </GridCol>
            <GridCol mt={"md"} span={{ base: 12, sm: 12, md: 6 }}>
              <PasswordInput
                size="md"
                withAsterisk
                variant="filled"
                placeholder="Password"
                label={"Password"}
                {...form.getInputProps("password")}
              />
            </GridCol>

            <GridCol mt={"md"} span={{ base: 12, sm: 6, md: 6 }}>
              <PasswordInput
                size="md"
                withAsterisk
                variant="filled"
                placeholder="Confirm Password"
                label={"Confirm Password"}
                {...form.getInputProps("confirm_password")}
              />
            </GridCol>
          </Grid>
          <Flex mt={"md"} flex={1} align={"end"} justify={"end"}>
            <Button
              type="submit"
              px={"20px"}
              loading={loading}
              color={colors.primary[100]}
              radius="md"
              size="md"
            >
              Update Profile
            </Button>
          </Flex>
        </form>
      </Flex>
    </Transition>
  );
};

export default Settings;
