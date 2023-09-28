import React from "react";
import styled from "styled-components";
import style from "./login.module.css";

const Welcome = styled.body`
  color: #fff;
`;
const WelcomeForm = styled.form`
  justify-content: center;
  display: flex;
`;

function LoginPage() {
  return (
    <Welcome style={style}>
      <h2>SECURE NOTE</h2>
      <WelcomeForm>
        <form>
          <h1>SignIn to your secure note</h1>
          <label>Email</label> <br />
          <input type="text" />
          <br />
          <label>Password</label>
          <br />
          <input type="text" />
          <br />
          <button>Sign in</button>
        </form>
      </WelcomeForm>
    </Welcome>
  );
}

export default LoginPage;
