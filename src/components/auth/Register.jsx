import { useForm, isEmail } from "@mantine/form";
import React from "react";
import {
  BackgroundImage,
  Box,
  Button,
  Checkbox,
  Flex,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { Link } from "react-router-dom";
import { colors } from "@/configs/theme.config";
import AuthModal from "../modal/AuthModal";
import { useDisclosure } from "@mantine/hooks";

const Register = () => {
  const [openedAuthModal, { open: openAuthModal, close: closeAuthModal }] =
    useDisclosure(false);

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validate: {
      // name: values.name.length < 2 ? "Too short name" : null,
      email: isEmail("Invalid email"),
      password: (value) => {
        if (value.length < 8) {
          return "Password must be at least 8 characters";
        }
        return null;
      },
    },
  });
  return (
    <>
      <Flex
        component="form"
        // onSubmit={form.onSubmit((values) => handelSubmit(values))}
        className="flex-col w-full gap-3"
      >
        <Title order={3}>Signup </Title>

        <TextInput
          placeholder="Name"
          size="md"
          radius="md"
          {...form.getInputProps("email")}
        />

        <TextInput
          placeholder="Email"
          type="email"
          size="md"
          radius="md"
          {...form.getInputProps("email")}
        />
        <PasswordInput
          placeholder="Password"
          size="md"
          radius="md"
          {...form.getInputProps("password")}
        />

        <Button
          false={false}
          disabled={false}
          type="submit"
          mt={"2rem"}
          color={colors.primary[100]}
          radius="md"
          size="md"
        >
          SIGN UP
        </Button>

        <p className="text-slate-400 text-center">
          Already have an account ?{" "}
          <span
            className="text-blue-700 font-medium hover:underline cursor-pointer"
            onClick={() => {
              closeAuthModal();
              openAuthModal();
            }}
          >
            Sign in
          </span>
        </p>
      </Flex>
      <AuthModal
        opened={openedAuthModal}
        close={closeAuthModal}
        formType={"register"}
      />
    </>
  );
};

export default Register;
