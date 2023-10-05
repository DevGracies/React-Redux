import React, { useState } from "react";
import styled from "styled-components";
import style from "./Login.module.css";
import { createUserAction } from "../../redux/actions/createUserAction";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const WelcomeForm = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  function changeHandler(e) {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    }
    if (name === "password") {
      setPassword(value);
    }
  }
  function registerHandler(e) {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      const data = {
        email: email,
        password: password,
      };
      console.log(data);
      setIsLoading(false);
      setEmail("");
      setPassword("");
    }, 5000);
  }
  return (
    <React.Fragment>
      <div className={style.general}>
        <h2>SECURE NOTE</h2>
        <WelcomeForm>
          <form className={style.form} onSubmit={registerHandler}>
            <h1 className={style.h2}>SignIn to your secure note</h1>
            <label className={style.label}>Email</label> <br />
            <input
              type="text"
              value={email}
              name="email"
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
              name="password"
              onChange={changeHandler}
              value={password}
            />
            <br />
            {isLoading ? (
              <h2>Loading.....</h2>
            ) : (
              <Link to="/join" type="submit">
                <button className={style.button}>Sign in</button>
              </Link>
            )}
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
