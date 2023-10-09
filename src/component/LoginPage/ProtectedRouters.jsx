import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Join from "../Join/Join";
const useAuth = () => {
  const user = { loggedIn: false };
  return user && user.loggedIn;
};

const ProtectedRouters = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRouters;
