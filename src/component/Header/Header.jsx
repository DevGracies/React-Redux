import React from "react";
import styled from "styled-components";
import style from "./Header.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserAction } from "../../redux/actions/createUserAction";
const Top = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ff5102;
`;

function Header() {
  // const { useReducer } = useSelector((state) => state);
  // const { user } = useReducer;
  const dispatch = useDispatch();
  // const deleteUser = () => {
  //   dispatch(deleteUserAction(user.id));
  // }
  return (
    <Top>
      <h2 className={style.note}>Journal</h2>
      <div>
        <Link to="/">
          <button className={style.account}>Logout</button>
        </Link>
        {/* <button className={style.account} onClick={() => deleteUser()}>
          Delete Account
        </button> */}
      </div>
    </Top>
  );
}

export default Header;
