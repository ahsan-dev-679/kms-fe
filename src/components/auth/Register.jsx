import { useForm, isEmail } from "@mantine/form";
import React, { useState } from "react";
import {
  Button,
  Group,
  Flex,
  PasswordInput,
  Radio,
  TextInput,
  Title,
} from "@mantine/core";
import { colors } from "@/configs/theme.config";
import { useRegister } from "@/lib/tanstack-query/authQueries";

const Register = ({ onSwitch }) => {
  const [value, setValue] = useState("user");
  const { isPending: loading, mutateAsync: registerFunc } = useRegister();

  const form = useForm({
    initialValues: {
      firstName: "",
      email: "",
      password: "",
    },
    validate: {
      firstName: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      email: isEmail("Invalid email"),
      password: (value) => {
        if (value.length < 8) {
          return "Password must be at least 8 characters";
        }
        return null;
      },
    },
  });
  const handelSubmit = async (values) => {
    if (form.isValid) {
      const res = await registerFunc({
        ...values,
        role: value,
        lastName: " ",
      });
      if (res?.success) {
        form.reset();
        onSwitch();
      }
    }
  };
  return (
    <>
      <Flex
        component="form"
        onSubmit={form.onSubmit((values) => handelSubmit(values))}
        className="flex-col w-full gap-3"
      >
        <Title order={3}>Signup </Title>

        <TextInput
          placeholder="Name"
          size="md"
          radius="md"
          {...form.getInputProps("firstName")}
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
        <Radio.Group defaultValue="user" onChange={setValue} label="Role">
          <Group mt="xs">
            <Radio color={colors.primary[100]} value="user" label="User" />
            <Radio color={colors.primary[100]} value="chef" label="Chef" />
          </Group>
        </Radio.Group>
        <Button
          loading={loading}
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
            onClick={onSwitch}
          >
            Sign in
          </span>
        </p>
      </Flex>
    </>
  );
};

export default Register;
