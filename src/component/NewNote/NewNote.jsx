import React, { useState } from "react";
import style from "../Dashboard/UserDashboard.module.css";
import styled from "styled-components";

const Note = styled.button`
  background-color: #ff5102;
  color: #ffff;
  border: none;
  border-radius: 15px;
  width: 90px;
  height: 50px;
  margin: 5px;
`;
const Fold = styled.div`
  background-color: #ffff;
  border-radius: 15px;
  width: 500px;
  position: absolute;
  height: 600px;
  backdrop-blur: blur(16px);
`;
const Task = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const NewNote = () => {
  const [note, setNote] = useState();
  return (
    <div>
      <Note onClick={() => setNote(!note)}>note</Note>
      {note && (
        <Fold>
          <Task>
            <h2>New Task</h2>
            <h2>&times;</h2>
          </Task>
          <label>Title</label>
          <input type="text" placeholder="Task title" />
          <label>Text</label>

          <button>Create</button>
        </Fold>
      )}
    </div>
  );
};

export default NewNote;
//npm install react-quill --save