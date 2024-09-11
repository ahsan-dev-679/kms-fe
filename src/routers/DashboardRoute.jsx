import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth, useGetRole } from "@/hooks/auth";

const DashboardRoute = ({ Component }) => {
  const isAuthenticated = useAuth();
  const role = useGetRole();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  } else {
    if (role !== "user") {
      return <Component />;
    } else {
      return <Navigate to="/not-found" />;
    }
  }
};

export default DashboardRoute;
