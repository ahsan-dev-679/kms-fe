import { Outlet } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { Box } from "@mantine/core";
import Aside from "@/components/layout/Aside";
import Header from "@/components/layout/Header";
import { DatesProvider } from "@mantine/dates";

const DashboardLayout = () => {
  const isMobile = useMediaQuery("(max-width:1023px)");
  const [asideOpen, setAsideOpen] = useState(false);
  useEffect(() => {
    setAsideOpen(!isMobile);
  }, [isMobile]);
  return (
    <Box
      className="overflow-hidden relative"
      style={{
        height: "100vh",
        display: "flex",
        background: "linear-gradient(180deg, #F9F7FB 0%, #EEECF3 100%) ",
      }}
    >
      <Aside setAsideOpen={setAsideOpen} asideOpen={asideOpen} />

      <Box
        className={`  content-wrapper notifications{asideOpen ? "active-aside" : ""}`}
        style={{
          width: "100%",
          transition: ".4s",
          position: "relative",
          overflowY: "auto",
          overflowX: "hidden",
          height: "100vh",
        }}
      >
        <Header setAsideOpen={setAsideOpen} asideOpen={asideOpen} />
        <Box
          p={{ base: "10px", md: "30px", lg: "20px", sm: "20px" }}
          pt={"10px"}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
