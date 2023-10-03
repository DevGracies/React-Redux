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
  width: 80vh;
  height: 70vh;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
const Task = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Overall = styled.div`
  width: 100%;
  top: 0;
  buttom: 0;
  left: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;

  backdrop-filter: blur(10px);
`;

const NewNote = () => {
  const [note, setNote] = useState();
  return (
    <div>
      <Note onClick={() => setNote(!note)}>note</Note>
      {note && (
        <Overall>
          <Fold>
            <Task>
              <h2>New Task</h2>
              <button
                onClick={() => setNote(false)}
                style={{
                  fontSize: "50px",
                  font: "bold",
                  cursor: "pointer",
                }}
              >
                &times;
              </button>
            </Task>
            <label>Title</label>
            <input type="text" placeholder="Task title" />
            <label>Text</label>

            <button>Create</button>
          </Fold>
        </Overall>
      )}
    </div>
  );
};

export default NewNote;
//npm install react-quill --save
