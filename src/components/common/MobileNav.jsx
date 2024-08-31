import { Drawer, Flex, Indicator, Menu, rem, Avatar } from "@mantine/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  IconShoppingBag,
  IconMail,
  IconChecklist,
  IconLogout,
} from "@tabler/icons-react";
import { useCartStore } from "@/stores/cart.store";
import { useDisclosure } from "@mantine/hooks";
import CartDrawer from "../cart/CartDrawer";

const MobileNav = ({ opened, close }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  const navigate = useNavigate();
  const { cart } = useCartStore();
  const [openedCart, { open: openCart, close: closeCart }] =
    useDisclosure(false);

  return (
    <>
      <Drawer
        position="right"
        radius={"sm"}
        size={300}
        opened={opened}
        onClose={close}
      >
        <h2 className="text-[#4FAE5A] font-bold text-2xl">QuickBites</h2>

        {isAuthenticated && (
          <Flex align={"center"} gap={35} className="my-4">
            <Indicator color="#40C057" inline label={cart.length} size={16}>
              <IconShoppingBag
                onClick={openCart}
                style={{
                  width: rem(30),
                  height: rem(30),
                  cursor: "pointer",
                }}
              />
            </Indicator>
            <Menu shadow="md" width={200} classNames={"shadow-lg bg-red-500"}>
              <Menu.Target>
                <Avatar
                  className="cursor-pointer rounded-md"
                  color="green"
                  size={"50"}
                >
                  AC
                </Avatar>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Label
                  style={{
                    fontSize: 16,
                    color: "#333",
                    fontWeight: 500,
                  }}
                >
                  Alex Carey
                </Menu.Label>

                <Menu.Item
                  disabled
                  leftSection={
                    <IconMail style={{ width: rem(20), height: rem(20) }} />
                  }
                >
                  alex@gmail.com
                </Menu.Item>
                <Menu.Item
                  onClick={() => navigate("/my-orders")}
                  leftSection={
                    <IconChecklist
                      style={{ width: rem(20), height: rem(20) }}
                    />
                  }
                >
                  Orders
                </Menu.Item>

                <Menu.Item
                  color="red"
                  leftSection={
                    <IconLogout style={{ width: rem(20), height: rem(20) }} />
                  }
                >
                  Signout
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Flex>
        )}

        <div className="my-4">
          <ul className="flex gap-6 flex-col text-base font-bold text-black/60">
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

        {!isAuthenticated && (
          <div className="flex flex-col gap-4 my-2">
            <button className="flex items-center bg-[#ececec] text-black justify-center px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200 rounded-md">
              Sign up
            </button>
            <button className="flex items-center justify-center rounded-md bg-[#4FAE5A] text-white px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200">
              Login
            </button>
          </div>
        )}
      </Drawer>
      <CartDrawer opened={openedCart} close={closeCart} />
    </>
  );
};

export default MobileNav;
