import Footer from "@/components/layout/Footer";
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";

const DefaultLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default DefaultLayout;
