import { Flex } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";

const CategorySidebar = ({ name, isActive, onClick }) => {
  return (
    <Link
      className={`px-4 py-3 rounded-lg font-semibold text-md ${
        isActive ? "bg-[#4FAE5A] text-[#fff]" : "bg-[#fff] text-[#000]"
      }`}
      to={"#"}
      onClick={onClick}
    >
      {name}
    </Link>
  );
};

export default CategorySidebar;
