import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2 style={{ color: "white" }}>Page not found </h2>
      <Link to="/">
        <button>Go back</button>
      </Link>
    </div>
  );
};

export default Error;
