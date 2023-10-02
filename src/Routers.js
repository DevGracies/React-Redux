import React from "react";
import LoginPage from "./component/LoginPage/LoginPage";
import { Route, Routes } from "react-router-dom";
import Join from "./component/Join/Join";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/join" element={<Join />} />
    </Routes>
  );
};

export default Routers;
