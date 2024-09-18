import React from "react";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "@/layouts/DefaultLayout";
import Home from "@/pages/Home";
import AuthLayout from "@/layouts/AuthLayout";
import Register from "@/components/auth/Register";
import Login from "@/components/auth/Login";
import NotFound from "@/pages/NotFound";
import Meals from "@/pages/user/Meals";
import Checkout from "@/pages/user/Checkout";
import Orders from "@/pages/user/Orders";
import OrderDetail from "@/pages/user/OrderDetail";
import AdminDashboard from "@/pages/admin/AdminDashboard";
import DashboardLayout from "@/layouts/DashboardLayout";
import MenuList from "@/pages/dashboard/MenuList";
import OrderList from "@/pages/dashboard/OrderList";
import ChefList from "@/pages/admin/ChefList";
import Settings from "@/pages/dashboard/Settings";
import MenuManagement from "@/pages/dashboard/MenuManagement";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import AttendenceList from "@/pages/dashboard/AttendenceList";
import DashboardRoute from "./DashboardRoute";

const Router = () => {
  // use protected routes for authenticated users (i.e: UserRoute & AdminRoute or make more if you've to)..
  const role = localStorage.getItem("role");
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  return (
    <Routes>
      {/* Default Layout routes */}
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/meals" element={<Meals />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/my-orders" element={<Orders />} />
        <Route path="/order-detail/:id" element={<OrderDetail />} />
      </Route>

      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route
          path="/dashboard"
          element={<DashboardRoute Component={AdminDashboard} />}
        />
        <Route
          path="/dashboard/menu/list"
          element={<DashboardRoute Component={MenuList} />}
        />
        <Route
          path="/dashboard/order/list"
          element={<DashboardRoute Component={OrderList} />}
        />
        <Route
          path="/dashboard/order/detail/:id"
          element={<DashboardRoute Component={OrderDetail} />}
        />
        <Route
          path="/dashboard/chef/list"
          element={<DashboardRoute Component={ChefList} />}
        />
        <Route
          path="/dashboard/chef/attendence/:id?"
          element={<DashboardRoute Component={AttendenceList} />}
        />
        <Route
          path="/dashboard/menu/management"
          element={<DashboardRoute Component={MenuManagement} />}
        />
        <Route
          path="/dashboard/settings"
          element={<DashboardRoute Component={Settings} />}
        />
      </Route>

      {/* Auth routes */}
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
      </Route>

      {/* Not found page */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
