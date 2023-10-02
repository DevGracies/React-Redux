import React from "react";
import Note from "../Note/Note";
import styled from "styled-components";

const Top = styled.section`
  border-radius: 30px;
  margin: 5px;
`;

function UserDashboard() {
  return (
    <div>
      <Top>
        <button>New note</button>
        <h2>Username</h2>
      </Top>
      <Top>
        <h1>NOTES</h1>
        <Note />
      </Top>
    </div>
  );
}

export default UserDashboard;
