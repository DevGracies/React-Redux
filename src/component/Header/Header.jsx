import React from "react";
import styled from "styled-components";
import style from "./Header.module.css";
import { Link, Navigate } from "react-router-dom";
const Top = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ff5102;
`;

function Header() {
  const logout = Navigate("/");
  return (
    <Top>
      <h2 className={style.note}>Journal</h2>
      <div>
        <Link to="/">
          <button className={style.account} onClick={logout}>
            Logout
          </button>
        </Link>

        <button className={style.account}>Delete Account</button>
      </div>
    </Top>
  );
}

export default Header;
