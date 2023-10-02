import React, { useState } from "react";
import styled from "styled-components";
import style from "./Login.module.css";
import { createUserAction } from "../../redux/actions/createUserAction";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const WelcomeForm = styled.form`
  justify-content: center;
  display: flex;
  width: 100%;
`;

function LoginPage() {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  function changeHandler(e) {
    const { name, value } = e.target;
    setValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function registerHandler() {
    const { email, password } = value;
  }
  return (
    <React.Fragment>
      <div className={style.general}>
        <h2>SECURE NOTE</h2>
        <WelcomeForm>
          <form className={style.form}>
            <h1 className={style.h2}>SignIn to your secure note</h1>
            <label className={style.label}>Email</label> <br />
            <input
              type="text"
              onChange={changeHandler}
              placeholder="your@email.com"
              className={style.input}
            />
            <br />
            <label className={style.label}>Password</label>
            <br />
            <input
              className={style.input}
              placeholder="enter password"
              type="text"
              onChange={changeHandler}
            />
            <br />
            <Link to="/join">
              <button className={style.button}>Sign in</button>
            </Link>
            <div style={{ fontSize: "30px" }}>
              <h4>Do you have an account?</h4>
              <button
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  fontSize: "30px",
                  textDecoration: "underline",
                }}
              >
                Sign up
              </button>
            </div>
          </form>
        </WelcomeForm>
      </div>
    </React.Fragment>
  );
}

export default LoginPage;
