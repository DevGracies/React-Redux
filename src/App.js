import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCakeAction } from "./redux/actions/buyCakeAction";
import { createUserAction } from "./redux/actions/createUserAction";
import { getUserAction } from "./redux/actions/createUserAction";
import { CREATE_USER_RESET } from "./redux/constants";

function App() {
  const dispatch = useDispatch();
  //subscribe to store
  const { cakes, createUser, userReducer } = useSelector((state) => state);
  const { remainingItem, sold, numOfCakes } = cakes;

  const { loading, sucess: createUserSuccess, user, error } = createUser;
  const { loadings, users, errors } = userReducer;
  const [qty, setQty] = useState(1);
  return (
    <div className="App">
      <h2>Buy Car</h2>
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
                username: "Grace Sean",
                email: "gracesean@gmail.com",
                password: "@gracesean",
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
          <ul key={user.id}>
            <li> Username: {user.username} </li>
            <li>Email: {user.email} </li>
            <li>Password: {user.password} </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default App;
