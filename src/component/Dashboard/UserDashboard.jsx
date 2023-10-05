import React from "react";
import style from "./UserDashboard.module.css";
import NewNote from "../NewNote/NewNote";
import AllNote from "../Note/AllNote";

function UserDashboard() {
  return (
    <div className={style.dashboard}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          margin: "10px",
          backgroundColor: "white",
          borderRadius: "10px",
        }}
      >
        <NewNote />
        <h1 style={{ color: "#ff5102", textAlign: "center", fontSize: "40px" }}>
          Journal
        </h1>
      </div>
      <div>
        <AllNote />
      </div>
      {/* <Link to="/" onClick={() => setColour("#ff5102")} /> */}
    </div>
  );
}

export default UserDashboard;
