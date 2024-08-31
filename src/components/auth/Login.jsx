import { useForm, isEmail } from "@mantine/form";
import React, { useState } from "react";
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
  Radio,
  Group,
} from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import { colors } from "@/configs/theme.config";
import { useDisclosure } from "@mantine/hooks";
import AuthModal from "../modal/AuthModal";

const Login = () => {
  const [value, setValue] = useState("user");
  const navigate = useNavigate();

  const [openedAuthModal, { open: openAuthModal, close: closeAuthModal }] =
    useDisclosure(false);
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: isEmail("Invalid email"),
      password: (value) => {
        if (value.length < 8) {
          return "Password must be at least 8 characters";
        }
        return null;
      },
    },
  });
  const handleAuth = () => {
    localStorage.setItem("role", value);
    localStorage.setItem("isAuthenticated", true);
    if (value === "user") {
      closeAuthModal();
    } else {
      navigate("/dashboard");
    }
    window.location.reload();
  };
  return (
    <>
      <Flex
        // component="form"
        // onSubmit={form.onSubmit((values) => handelSubmit(values))}
        className="flex-col w-full gap-3"
      >
        <Title order={3}>Login</Title>
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

        <span className="text-blue-700 font-medium hover:underline cursor-pointer w-fit ml-auto">
          Forgot Password?
        </span>

        <Radio.Group defaultValue="user" onChange={setValue} label="Role">
          <Group mt="xs">
            <Radio color={colors.primary[100]} value="user" label="User" />
            <Radio color={colors.primary[100]} value="admin" label="Admin" />
            <Radio color={colors.primary[100]} value="chef" label="Chef" />
          </Group>
        </Radio.Group>
        <Button
          onClick={handleAuth}
          false={false}
          disabled={false}
          // type="submit"
          type="button"
          mt={"2rem"}
          color={colors.primary[100]}
          radius="md"
          size="md"
        >
          LOGIN
        </Button>

        <p className="text-slate-400 text-center">
          Don't have an account ?{" "}
          <span
            className="text-blue-700 font-medium hover:underline cursor-pointer"
            onClick={() => {
              closeAuthModal();
              openAuthModal();
            }}
          >
            Sign up
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

export default Login;
