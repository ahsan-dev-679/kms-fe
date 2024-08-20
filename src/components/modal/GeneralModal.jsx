import React from "react";
import { Modal } from "@mantine/core";

const GeneralModal = ({
  title = "",
  size = "md",
  radius = "md",
  opened,
  close,
  component,
  ...props
}) => {
  return (
    <Modal
      size={size}
      title={title}
      opened={opened}
      onClose={close}
      radius={"md"}
      centered
      {...props}
    >
      {component}
    </Modal>
  );
};

export default GeneralModal;
