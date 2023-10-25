import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRouters = () => {
  const { userReducer } = useSelector((state) => state);
  const { user } = userReducer;

  return user ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRouters;
