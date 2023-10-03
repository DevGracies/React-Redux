import React, { useState } from "react";
import style from "../Dashboard/UserDashboard.module.css";
const NewNote = () => {
  const [note, setNote] = useState();
  return (
    <div>
      <div>
        <button className={style.note} onClick={() => setNote(!note)}>
          New note
        </button>
      </div>
      {note && (
        <div>
          <h2>New Task</h2>
          <label>Title</label>
          <input type="text" placeholder="Task title" />
          <label>Text</label>

          <button>Create</button>
        </div>
      )}
    </div>
  );
};

export default NewNote;
//npm install react-quill --save
