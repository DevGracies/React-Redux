import React from "react";
import LoginPage from "./component/LoginPage/LoginPage";
import { Route, Routes } from "react-router-dom";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
    </Routes>
  );
};

export default Routers;
