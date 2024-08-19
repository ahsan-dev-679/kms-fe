import { Box, Flex, Tooltip, Image } from "@mantine/core";
import React, { useState } from "react";
import { useMediaQuery } from "@mantine/hooks";
import { dashboardAsideMenus } from "@/data/data";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IconSettings, IconPower } from "@tabler/icons-react";
import { FaChevronLeft } from "react-icons/fa";

const Aside = ({ asideOpen, setAsideOpen }) => {
  const isMobile = useMediaQuery("(max-width:1023px)");

  return (
    <Box
      style={{
        width: asideOpen ? "300px" : "0%",
        transition: "all 0.5s cubic-bezier(0.8, 0.74, 0.3, 0.99) 0s",
        position: isMobile ? "fixed" : "relative",
        zIndex: "9",
        backgroundColor: "#FFFEFF",
        minHeight: "100vh",
        height: "100%",
        minWidth: isMobile ? "0" : "70px",
      }}
      className="border-2 shadow-md"
    >
      <Box
        style={{
          zIndex: 0,
          position: "absolute",
          right: 0,
          width: "70px",
          height: "100%",
          background: "linear-gradient(90deg, #ffffff00 -14%, #83918a30 145%)",
        }}
      ></Box>
      <Box className="z-10">
        {isMobile && (
          <Box
            right={isMobile && !asideOpen ? "-35px" : "-24px"}
            top={isMobile && !asideOpen ? "-10px" : "60px"}
            style={{
              transform: isMobile && !asideOpen ? "rotate(47deg)" : "unset",
            }}
            className="z-10 flex items-center absolute  top-6 justify-center cursor-pointer rounded-full bg-[#BBF0D6] h-[48px] w-[48px]"
            onClick={() => setAsideOpen(!asideOpen)}
          >
            <FaChevronLeft
              color="#208251"
              className="text-[18px]"
              style={{
                transition: "all 0.2s cubic-bezier(0.8, 0.74, 0.3, 0.99) 0s",
                transform: asideOpen ? "scaleX(1)" : "scaleX(-1)",
              }}
            />
          </Box>
        )}
        <Flex
          direction={"column"}
          style={{
            overflowX: "hidden",
            transition: "all 0.5s cubic-bezier(0.8, 0.74, 0.3, 0.99) 0s",
            position: "relative",
            height: "100vh",
          }}
        >
          <Flex
            justify={"flex-start"}
            align={"center"}
            className={`relative py-6 ${
              asideOpen ? "md:py-12" : "md:py-6"
            }   px-2 border-b border-b-[#F5F5F5] w-full`}
          >
            <Image
              alt="NHOO"
              style={{
                transition: "all 0.5s cubic-bezier(0.8, 0.74, 0.3, 0.99) 0s",
              }}
              className={`${
                asideOpen ? "!w-[161.58px] !h-[60px]" : ""
              }  w-[50px] h-[20px] !object-contain`}
              src={
                "https://img.freepik.com/free-vector/hand-drawn-antojitos-logo-design_23-2149574494.jpg?t=st=1723462922~exp=1723466522~hmac=3334c004100e276b0699fd9ef60f33b14a04bdc9ee0d410be456c17ed585f050&w=740"
              }
            />
          </Flex>

          <Menu asideOpen={asideOpen} />
        </Flex>
      </Box>
    </Box>
  );
};

const Menu = ({ asideOpen }) => {
  const isMobile = useMediaQuery("(max-width:1023px)");

  const [active, setActive] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const pathName = location.pathname;

  return (
    <Box className="pt-6 relative overflow-y-auto" asideopen={`${asideOpen}`}>
      {dashboardAsideMenus.map((item, i) => (
        <Tooltip
          disabled={!isMobile}
          key={i}
          withArrow
          arrowOffset={11}
          color={"#208251"}
          arrowSize={10}
          position="right-start"
          offset={5}
          label={item.label}
        >
          <Link
            style={{
              color: "#909FAF",
              fontSize: "15px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              paddingLeft: asideOpen ? "15px" : "0",
              marginTop: "10px",
              justifyContent: asideOpen ? "flex-start" : "center",
              padding: "10px 10px",
            }}
            className={
              item.path.includes(pathName)
                ? `active-menu aside-menu line-clamp-1`
                : "aside-menu line-clamp-1"
            }
            to={item.path}
          >
            {item.icon}

            {asideOpen ? item.label : ""}
          </Link>
        </Tooltip>
      ))}

      <Box className="pt-5 mt-5 border-t border-t-[#EAEAEA] w-full">
        <Tooltip
          disabled={!isMobile}
          withArrow
          arrowOffset={11}
          color={"#208251"}
          arrowSize={10}
          position="right-start"
          offset={5}
          label={"Logout"}
        >
          <Link
            style={{
              color: "#909FAF",
              fontSize: "15px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              paddingLeft: asideOpen ? "15px" : "0",
              marginTop: "20px",
              justifyContent: asideOpen ? "flex-start" : "center",
            }}
            className={"aside-menu line-clamp-1"}
            to={"#"}
          >
            <IconPower />

            {asideOpen ? "Logout" : ""}
          </Link>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default Aside;
