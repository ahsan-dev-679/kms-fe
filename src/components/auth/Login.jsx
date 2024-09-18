import { useForm, isEmail } from "@mantine/form";
import React from "react";
import { Button, Flex, PasswordInput, TextInput, Title } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { colors } from "@/configs/theme.config";
import { useLogin } from "@/lib/tanstack-query/authQueries";

const Login = ({ onSwitch, onClose }) => {
  const navigate = useNavigate();
  const { isPending: loading, mutateAsync: loginFunc } = useLogin();

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

  const handleSubmit = async (values) => {
    if (form.isValid) {
      const res = await loginFunc({
        ...values,
      });

      if (res?.success) {
        form.reset();
        onClose();
        if (res?.data?.user?.role !== "user") {
          navigate("/dashboard");
        }
      }
    }
  };

  return (
    <>
      <Flex
        component="form"
        onSubmit={form.onSubmit((values) => handleSubmit(values))}
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

        {/* <span className="text-blue-700 font-medium hover:underline cursor-pointer w-fit ml-auto">
          Forgot Password?
        </span> */}

        <Button
          loading={loading}
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
            onClick={onSwitch}
          >
            Sign up
          </span>
        </p>
      </Flex>
    </>
  );
};

export default Login;
