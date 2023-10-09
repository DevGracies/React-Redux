import React, { useState } from "react";
import LoginPage from "./component/LoginPage/LoginPage";
import { Link, Route, Routes } from "react-router-dom";
import Join from "./Screen/Join";
import ProtectedRouters from "./component/LoginPage/ProtectedRouters";

const Routers = () => {
  // const [colour, setColour] = useState("#ffff");
  return (
    <div>
      {/* style={{ background: colour }} */}
      {/* <Link to="/" onClick={() => setColour("#ff5102")} /> */}
      <Routes>
        <Route
          path="/"
          // onClick={() => setColour("#ff5102")}
          element={<LoginPage />}
        />
        <Route element={<ProtectedRouters />}>
          <Route path="/join" element={<Join />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Routers;
