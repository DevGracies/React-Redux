import React, { useReducer, useState } from "react";
import styled from "styled-components";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { createTaskAction } from "../../redux/actions/newTaskAction";
import { getTaskAction } from "../../redux/actions/newTaskAction";
import {
  addNote,
  deleteNote,
  updateNote,
} from "../../redux/actions/JornalAction";

const Top = styled.section`
  background-color: #fff;
  height: 90px;
  align-items: center;
  width: 390px;
  display: flex;
  border-radius: 20px;
  justify-content: space-between;
  color: #ff5102;
  padding: 20px;
`;
const Note = styled.button`
  cursor: pointer;
  background-color: #ff5102;
  color: #ffff;
  border: none;
  font-size: 30px;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  align-items: center;
  width: 100px;
  height: 50px;
  margin: 5px;
`;
const Fold = styled.form`
  background-color: #ffff;
  border-radius: 15px;
  width: 80vh;
  height: 70vh;
  padding: 10px;
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
  // const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [note, setNote] = useState();

  const [edit, setEdit] = useState(null);
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todos);
  // const { loading, sucess: createTaskSucess, task, error } = createTask;
  // const { loadings, tasks, errors } = useReducer;

  // const changeHandler = (e) => {
  //   const { name, value } = e.target;
  //   if (name === "title") {
  //     setTitle(value);
  //   }
  //   if (name === "value") {
  //     setValue(value);
  //   }
  // };

  // const changeHandler = (e) => {
  //   const { name, value } = e.target;
  //   setValue((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // setTitle(e.target);
  // setValue(e.target);
  // };
  const submitHandler = (e) => {
    e.preventDefault();
    // if (title.trim() !== "") {
    //   dispatch(addNote(title));
    // }
    if (value.trim() !== "") {
      dispatch(addNote(value));
    }
    // console.log(title);
    // setTitle("");
    setValue("");
    setNote(!note);
  };
  var toolbarOptions = [
    [{ header: 1 }, { header: 2 }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    ["blockquote", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ color: [] }, { background: [] }],
    [{ list: [] }],
    [{ align: [] }],
  ];
  const module = {
    toolbar: toolbarOptions,
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Top>
        <Note onClick={() => setNote(!note)}>
          Write <FaPlus />
        </Note>
        {note && (
          <Overall>
            <Fold onSubmit={submitHandler}>
              <Task>
                <h2>New Task</h2>
                <button
                  onClick={() => setNote(false)}
                  style={{
                    fontSize: "50px",
                    font: "bold",
                    cursor: "pointer",
                    backgroundColor: "#fff",
                    border: "none",
                    color: "#ff5102",
                  }}
                >
                  &times;
                </button>
              </Task>
              <h1>Write about how you feel?</h1>
              {/* <input
                type="text"
                placeholder="Give your feeling a title"
                onChange={(e) => setTitle(e.target.value)}
                name="title"
                value={title}
              /> */}
              <ReactQuill
                modules={module}
                theme="snow"
                name="value"
                value={value}
                onChange={setValue}
                placeholder="Let's talk about how you feel....."
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "10px",
                }}
              >
                <button
                  type="submit"
                  style={{
                    color: "#ffff",
                    backgroundColor: "#ff5102",
                    border: "none",
                    width: "100px",
                    borderRadius: "5px",
                    height: "50px",
                    fontSize: "20px",
                    cursor: "pointer",
                  }}
                >
                  Create <FaPlus />
                </button>
              </div>
            </Fold>
          </Overall>
        )}
        <h2>Grace Dashboard</h2>
      </Top>
    </div>
  );
};

export default NewNote;
//npm install react-quill --save
