import React, { useState } from "react";
import LoginPage from "./component/LoginPage/LoginPage";
import { Link, Route, Routes } from "react-router-dom";
import Join from "./component/Join/Join";

const Routers = () => {
  const [colour, setColour] = useState("#ffff");
  return (
    <div style={{ background: colour }}>
      <Link to="/" onClick={() => setColour("#ff5102")} />
      <Routes>
        <Route
          path="/"
          onClick={() => setColour("#ff5102")}
          element={<LoginPage />}
        />
        <Route path="/join" element={<Join />} />
      </Routes>
    </div>
  );
};

export default Routers;
