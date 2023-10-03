import React from "react";
import Note from "../Note/Note";
import styled from "styled-components";
import { Link } from "react-router-dom";
import style from "./UserDashboard.module.css";
import NewNote from "../NewNote/NewNote";

function UserDashboard() {
  return (
    <div className={style.dashboard}>
      <div className={style.top}>
        <NewNote />
        <h2>Username</h2>
      </div>
      <div>
        <h1>NOTES</h1>
        <Note />
      </div>
      {/* <Link to="/" onClick={() => setColour("#ff5102")} /> */}
    </div>
  );
}

export default UserDashboard;
