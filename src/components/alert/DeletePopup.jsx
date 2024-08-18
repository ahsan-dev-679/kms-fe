import { Button, Group, Modal, Text } from "@mantine/core";
import React from "react";

export const DeletePopup = ({
  opened,
  close,
  clickHandler,
  text,
  loading = false,
}) => {
  return (
    <Modal
      opened={opened}
      onClose={close}
      size="xs"
      radius={"md"}
      centered
      transitionProps={{ transition: "fade", duration: 200 }}
      withCloseButton
    >
      <Text ta="start" fw={400} size="md">
        {text}
      </Text>

      <Group justify="flex-end" my={4} py={16}>
        <Button onClick={close} variant="default">
          Cancel
        </Button>
        <Button
          onClick={clickHandler}
          loading={loading}
          variant="filled"
          color="red"
        >
          Delete
        </Button>
      </Group>
    </Modal>
  );
};
