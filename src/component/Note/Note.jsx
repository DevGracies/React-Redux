import React from "react";
import styled from "styled-components";
import {} from "react-icons/fa";

const Paste = styled.div`
  background-color: #fff;
  color: #ff5102;
  border-radius: 10px;
  height: 500px;
  width: 500px;
`;
const Note = (props) => {
  const { title, date, time, text } = props;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* as time goes on this style is to be grid */}
      <Paste>
        <h2>{title} </h2>
        <h6>{date} </h6>
        <h6>{time} </h6>
        <p>{text}</p>
        <div>
          <button>Edit Journal</button>
          <button>Delete Journal</button>
        </div>
      </Paste>
    </div>
  );
};

export default Note;
