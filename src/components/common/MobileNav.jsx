import { Drawer } from "@mantine/core";
import React from "react";

const MobileNav = ({ opened, close }) => {
  return (
    <Drawer
      position="right"
      radius={"sm"}
      size={300}
      opened={opened}
      onClose={close}
    >
      <h2 className="text-[#4FAE5A] dark:text-white font-bold text-2xl">
        QuickBites
      </h2>
      <div className="my-4">
        <ul className="flex gap-6 flex-col text-base font-bold text-black/60 dark:text-white">
          <li className="hover:w-fit transition-all duration-100 ease-linear">
            <a href="#">Home</a>
          </li>
          <li className="hover:w-fit transition-all duration-100 ease-linear">
            <a href="#">Our Meals</a>
          </li>
          <li className="hover:w-fit transition-all duration-100 ease-linear">
            <a href="#">About</a>
          </li>
          <li className="hover:w-fit transition-all duration-100 ease-linear">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-4 my-2">
        <button className="flex items-center bg-[#ececec] text-black dark:text-white justify-center px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200 rounded-md">
          Sign up
        </button>
        <button className="flex items-center justify-center rounded-md bg-[#4FAE5A] text-white px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200">
          Login
        </button>
      </div>
    </Drawer>
  );
};

export default MobileNav;
