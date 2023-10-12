import React, { useState, useEffect } from "react";
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
  const navigate = useNavigate();
  const { userReducer } = useSelector((state) => state);
  const { user } = userReducer;

  useEffect(() => {
    if (user) {
      navigate("/Join");
    }
  }, [navigate, user]);
  console.log(user, "user");
  const siginHandler = () => {
    console.log(email, password, "email and password");
    dispatch(getUserAction(email, password));
    setEmail("");
    setPassword("");
    // const compare =
    //   users &&
    //   users.find((user) => user.email === email && user.password === password);
    // console.log(compare);
    // console.log(users, "rr");
    // if (compare) {
    //   navigate("/Join");
    // } else {
    //   alert("incorrect username or password");
    // }
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
  function registerHandler() {
    setIsLoading(true);
    setIsLogin(true);
    dispatch(createUserAction({ email: email, password: password }));
    setTimeout(() => {
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
          <div className={style.form}>
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
              <button className={style.button} onClick={() => siginHandler()}>
                Sign in
              </button>
            ) : (
              <button
                className={style.button}
                onClick={() => registerHandler()}
              >
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
          </div>
        </WelcomeForm>
      </div>
    </React.Fragment>
  );
}

export default LoginPage;
