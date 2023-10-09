import React, { useState } from "react";
import Note from "./Note";
import { useDispatch, useSelector } from "react-redux";
// import { createTaskAction } from '../../redux/actions/newTaskAction'
// import { getTaskAction } from '../../redux/actions/newTaskAction'
import { buyCakeAction } from "../../redux/actions/buyCakeAction";
import { createUserAction } from "../../redux/actions/createUserAction";
import { getUserAction } from "../../redux/actions/createUserAction";
// import { CREATE_USER_RESET } from "./redux/constants";
import { updateNote, deleteNote } from "../../redux/actions/JornalAction";
import styled from "styled-components";

const Paste = styled.div`
  background-color: #fff;
  color: #ff5102;
  border-radius: 10px;
  height: max-content;
  width: 300px;
  margin: 10px;
  padding: 5px;
`;
const Button = styled.button`
  border: none;
  background-color: #ff5102;
  color: #fff;
  border-radius: 5px;
`;

const AllNote = () => {
  const [edit, setEdit] = useState(null);
  const [editNote, setEditNote] = useState("");
  const dispatch = useDispatch();
  // //subscribe to store
  // const { cakes, createUser, userReducer } = useSelector((state) => state);
  // const { remainingItem, sold, numOfCakes } = cakes;

  // const { loading, sucess: createUserSuccess, user, error } = createUser;
  // const { loadings, users, errors } = userReducer;
  // const [qty, setQty] = useState(1);

  const { todos } = useSelector((state) => state.todos);
  console.log(todos);
  const editHandler = (id, currNote) => {
    console.log(currNote);
    setEdit(id);
    setEditNote(currNote);
  };
  const deleteHandler = (id) => {
    dispatch(deleteNote(id));
  };
  const updateHandler = (e) => {
    e.preventDefault();
    if (editNote.trim() !== "") {
      dispatch(updateNote(edit, editNote));
      setEdit(null);
      setEditNote("");
      console.log("updated");
    }
  };
  // const { loading, sucess: createTaskSucess, task, error } = createTask;
  // const { loadings, tasks, errors } = taskReducer
  return (
    <div>
      {/* <h2>Buy Car</h2>
      <p>Total item:{numOfCakes} </p>
      <p>Remaining Items:{remainingItem} </p>
      <p>Sold: {sold} </p>
      <input type="text" value={qty} onChange={(e) => setQty(e.target.value)} />
      <button onClick={() => dispatch(buyCakeAction(+qty))}>Buy Now</button>

      <div style={{ margin: "100px 0" }}>
        {loading && <h2>loading.....</h2>}
        {error && <h2 style={{ color: "blue" }}>Error:{error}</h2>}
        {user && (
          <>
            <p> Username:{user.username} </p>
            <p>Email:{user.email} </p>
          </>
        )}
        click the button to create user
        <button
          onClick={() =>
            dispatch(
              createUserAction({
                username: "lora Sean",
                email: "lorasean@gmail.com",
                password: "@lorasean",
              })
            )
          }
        >
          Create User
        </button>
        <h2>Admin DashBoard</h2>
        <button onClick={() => dispatch(getUserAction())}>
          Show all users
        </button>
        {loadings && <h2>Loading....</h2>}
        {errors && <h2 style={{ color: "red" }}>Error: {error}</h2>}
        {users.map((user) => (
          <ol key={user.id}>
            <li> Username: {user.username} </li>
            <li>Email: {user.email} </li>
            <li>Password: {user.password} </li>
          </ol>
        ))}
      </div> */}

      <ul
        style={{
          display: "grid",
          gridTemplateColumns: " auto auto auto ",
          alignItems: "center",
        }}
      >
        {todos.map((note) => {
          return (
            <div key={note.id}>
              {/* as time goes on this style is to be grid */}
              <Paste>
                <h6>{Date.now()} </h6>
                <h6>10:23</h6>
                {note.id === edit ? (
                  <div>
                    <input
                      type="text"
                      placeholder="Edit note"
                      value={editNote}
                      style={{ outline: "none", border: "none" }}
                      onChange={(e) => setEditNote(e.target.value)}
                    />
                    <Button onClick={updateHandler}>Update</Button>
                  </div>
                ) : (
                  <div>
                    <p dangerouslySetInnerHTML={{ __html: note.value }} />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Button onClick={() => editHandler(note.id, note.value)}>
                        Edit Journal
                      </Button>
                      <Button onClick={() => deleteHandler(note.id)}>
                        Delete Journal 
                      </Button>
                    </div>
                  </div>
                )}
              </Paste>
            </div>
          );
        })}
        {/* {todos.map((todo) => (
          <li key={todo.id}>
            {todo.id === edit ? (
              <>
                <input
                  type="text"
                  placeholder="Edit note"
                  value={setEdit}
                  onChange={(e) => e.target.value}
                />
                <button>Update</button>
              </>
            ) : (
              <>
                <div dangerouslySetInnerHTML={{ __html: todo.value }} />
                {""}
                <button>Edit</button>
                <button>Delete</button>
              </>
            )}
          </li>
        ))} */}
      </ul>
    </div>
  );
};

export default AllNote;
