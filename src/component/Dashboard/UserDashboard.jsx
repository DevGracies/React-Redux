import React from "react";
import Note from "../Note/Note";
import styled from "styled-components";
import { Link } from "react-router-dom";
import style from "./UserDashboard.module.css";
import NewNote from "../NewNote/NewNote";

const Top = styled.section`
  background-color: #fff;
  height: 120px;
  align-items: center;
  width: 390px;
  dispaly: flex;
  margin-left: 300px;
  border-radius: 20px;
  justify-content: space-between;
  color: #000;
`;
function UserDashboard() {
  return (
    <div className={style.dashboard}>
      <div>
        <Top>
          <NewNote />
          <h2>Username</h2>
        </Top>
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
