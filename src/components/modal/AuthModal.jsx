import React, { useState } from "react";
import { Modal, Grid, Image } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import MainImg from "@/assets/common/food-ordering.png";
import Login from "../auth/Login";
import Register from "../auth/Register";
// import Logo from "/logos/logos192.png"
const AuthModal = ({ opened, close, formType }) => {
  const mobile = useMediaQuery("(max-width: 1024px)");
  console.log("AuthModal", formType);

  return (
    <Modal
      size={mobile ? "md" : "calc(100vw - 20rem)"}
      //   size={"100%"}
      radius={"lg"}
      opened={opened}
      onClose={close}
      title=""
    >
      <Grid gutter="lg">
        <Grid.Col style={{}} span={mobile ? 12 : 6} className="border-r-2 ">
          <Image
            style={{
              width: 200,
              height: 120,
              objectFit: "contain",
            }}
            src={
              "https://img.freepik.com/free-vector/hand-drawn-antojitos-logo-design_23-2149574494.jpg?t=st=1723462922~exp=1723466522~hmac=3334c004100e276b0699fd9ef60f33b14a04bdc9ee0d410be456c17ed585f050&w=740"
            }
          />

          {formType === "login" && <Login />}
          {formType === "register" && <Register />}
        </Grid.Col>
        {!mobile && (
          <Grid.Col span={mobile ? 12 : 6} className="bg-[#fafafa]">
            <Image style={{ objectFit: "contain" }} radius="md" src={MainImg} />
          </Grid.Col>
        )}
      </Grid>
    </Modal>
  );
};

export default AuthModal;
