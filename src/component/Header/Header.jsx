import React, { useEffect } from "react";
import styled from "styled-components";
import style from "./Header.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserAction } from "../../redux/actions";
const Top = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ff5102;
`;

function Header() {
  const dispatch = useDispatch();
  const { getUser } = useSelector((state) => state);
  const { user } = getUser;
  console.log(user, "mk1");

  // const logout = !user;

  const deleteAccount = (User) => dispatch(deleteUserAction(User.id, User));
  // console.log(logout, "userrrr");

  useEffect(() => {
    console.log(user, "delete user");
  }, [user]);
  return (
    <Top>
      <h2 className={style.note}>Journal</h2>
      <div>
        <Link to="/">
          <button className={style.account}>Logout</button>
        </Link>

        <button className={style.account} onClick={() => deleteAccount(user)}>
          Delete Account
        </button>
      </div>
    </Top>
  );
}

export default Header;
