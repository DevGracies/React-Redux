import React from "react";
import styled from "styled-components";

const Copy = styled.section`
  background-color: #ff5102;
  color: #ffff;
  margin: 0px;
  padding: 0;
  text-align: center;
  height: 100px;
`;
const Footer = () => {
  return (
    <Copy>
      <h2>&copy;Olori 2023 </h2>
    </Copy>
  );
};

export default Footer;
