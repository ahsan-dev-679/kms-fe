import { useDisclosure } from "@mantine/hooks";
import React, { useState } from "react";
import AuthModal from "../modal/AuthModal";
import { RiMenu5Fill } from "react-icons/ri";
import {
  Menu,
  rem,
  Text,
  Button,
  Avatar,
  Indicator,
  Flex,
} from "@mantine/core";
import {
  IconSettings,
  IconSearch,
  IconBell,
  IconShoppingBag,
  IconMail,
  IconChecklist,
  IconLogout,
} from "@tabler/icons-react";
import MobileNav from "../common/MobileNav";
import { useCartStore } from "@/stores/cart.store";
import CartDrawer from "../cart/CartDrawer";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [openedAuthModal, { open: openAuthModal, close: closeAuthModal }] =
    useDisclosure(false);
  const [openedCart, { open: openCart, close: closeCart }] =
    useDisclosure(false);
  const [opened, { open, close }] = useDisclosure(false);
  const { cart } = useCartStore();
  const [formType, setformType] = useState("login");
  const isAuthenticated = true;
  return (
    <>
      <div className="top-0 sticky py-1 lg:py-2 w-full bg-[#fff] lg:relative z-50 border-b-2 mb-6">
        <nav className="z-10 sticky top-0 left-0 right-0 max-w-full px-5 py-2.5 lg:border-none lg:py-4   border-yellow-500">
          <div className="flex items-center justify-between !w-full flex-1">
            <Link to={"/"}>
              <div className="flex items-center space-x-2">
                <h2 className="text-[#4FAE5A] font-bold text-2xl">
                  QuickBites
                </h2>
              </div>
            </Link>
            <div className="hidden lg:block">
              <ul className="flex space-x-10 text-base font-bold text-black/60">
                <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                  <Link to="/">Home</Link>
                </li>
                <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                  <Link to="/meals">Our Meals</Link>
                </li>
                <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                  <Link to="/about">About</Link>
                </li>
                <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="">
              <div className="hidden lg:flex lg:items-center gap-x-2">
                {isAuthenticated ? (
                  <Flex align={"center"} gap={20}>
                    {/* <Indicator color="#40C057" inline label="2" size={16}>
                      <IconBell
                        style={{
                          width: rem(30),
                          height: rem(30),
                          cursor: "pointer",
                        }}
                      />
                    </Indicator> */}

                    <Indicator
                      color="#40C057"
                      inline
                      label={cart.length}
                      size={16}
                    >
                      <IconShoppingBag
                        onClick={openCart}
                        style={{
                          width: rem(30),
                          height: rem(30),
                          cursor: "pointer",
                        }}
                      />
                    </Indicator>
                    <Menu
                      shadow="md"
                      width={200}
                      classNames={"shadow-lg bg-red-500"}
                    >
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
                            <IconMail
                              style={{ width: rem(20), height: rem(20) }}
                            />
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
                            <IconLogout
                              style={{ width: rem(20), height: rem(20) }}
                            />
                          }
                        >
                          Signout
                        </Menu.Item>
                      </Menu.Dropdown>
                    </Menu>
                  </Flex>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        setformType("register");
                        openAuthModal();
                      }}
                      className="flex items-center bg-[#ececec] text-black justify-center px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200 rounded-md"
                    >
                      Sign up
                    </button>
                    <button
                      onClick={() => {
                        setformType("login");
                        openAuthModal();
                      }}
                      className="flex items-center justify-center rounded-md bg-[#4FAE5A] text-white px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200"
                    >
                      Login
                    </button>
                  </>
                )}
              </div>

              <div className="flex items-center justify-center lg:hidden">
                <button
                  onClick={open}
                  className="focus:outline-none text-slate-200"
                >
                  <RiMenu5Fill size={30} color="#000" />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <MobileNav opened={opened} close={close} />
      <CartDrawer opened={openedCart} close={closeCart} />

      <AuthModal
        opened={openedAuthModal}
        close={closeAuthModal}
        formType={formType}
      />
    </>
  );
};

export default Navbar;
