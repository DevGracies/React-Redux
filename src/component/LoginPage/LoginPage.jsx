import React, { useState } from "react";
import styled from "styled-components";
import style from "./Login.module.css";
import {
  createUserAction,
  getUserAction,
} from "../../redux/actions/createUserAction";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Join from "../../Screen/Join";

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
  const dispatch = useDispatch();
  const [isLogIn, setIsLogin] = useState(false);
  function submitHandler() {
    setIsLogin(true);
    dispatch(createUserAction({ email: email, password: password }));
  }
  const navigate = useNavigate();
  const { userReducer } = useSelector((state) => state);
  const { userData } = userReducer;
  const siginHandler = () => {
    dispatch(getUserAction());
    const compare =
      userData &&
      userData.find(
        (user) => user.email === email && user.password === password
      );
    userData && console.log(userData, "rr");
    if (compare) {
      alert("sucessfully logged in");
      navigate("/Join");
    } else {
      alert("incorrect username or password");
      <Join />;
    }
  };

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
            <h1 className={style.h2}>
              {isLogIn
                ? "SignIn to your secure note"
                : "SignUp to your secure note"}{" "}
            </h1>
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
            ) : isLogIn ? (
              <button className={style.button} onClick={siginHandler}>
                Sign in
              </button>
            ) : (
              <button className={style.button} onClick={submitHandler}>
                Sign Up
              </button>
            )}
            <div style={{ fontSize: "30px" }}>
              {isLogIn ? (
                <>
                  <h4>Do you have an account?</h4>

                  <button
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      fontSize: "30px",
                      textDecoration: "underline",
                    }}
                    onClick={() => setIsLogin(false)}
                  >
                    SignUp
                  </button>
                </>
              ) : (
                <>
                  <h4>Already have an account?</h4>

                  <button
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      fontSize: "30px",
                      textDecoration: "underline",
                    }}
                    onClick={() => setIsLogin(true)}
                  >
                    SignIn
                  </button>
                </>
              )}
            </div>
          </form>
        </WelcomeForm>
      </div>
    </React.Fragment>
  );
}

export default LoginPage;
