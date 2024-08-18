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
} from "@mantine/core";
import { Link } from "react-router-dom";
import { colors } from "@/configs/theme.config";

const Login = () => {
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
  return (
    <Flex
      component="form"
      // onSubmit={form.onSubmit((values) => handelSubmit(values))}
      className="flex-col w-full gap-3"
    >
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
      <Button
        false={false}
        disabled={false}
        type="submit"
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
          onClick={() => open("signup")}
        >
          Sign up
        </span>
      </p>
    </Flex>
  );
};

export default Login;
