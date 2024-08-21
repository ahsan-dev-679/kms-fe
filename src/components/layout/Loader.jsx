import { Flex } from "@mantine/core";
import React from "react";

const Loader = () => {
  return (
    <Flex style={{ height: "70vh" }} align={"center"} justify={"center"}>
      <div className="loader"></div>
    </Flex>
  );
};

export default Loader;
