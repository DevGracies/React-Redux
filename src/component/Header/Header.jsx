import React from "react";
import styled from "styled-components";

const Top = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Header() {
  return (
    <Top>
      <h2>Note</h2>
      <div>
        <button>Logout</button>
        <button>Delete Account</button>
      </div>
    </Top>
  );
}

export default Header;
