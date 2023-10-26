import { combineReducers } from "redux";
import {
  DeleteUserReducer,
  GetUserReducer,
  GetUsersReducer,
  buyCake,
  createUserReducer,
} from "./reducers";
import todoReducer from "./reducers/jornal";

export const reducers = combineReducers({
  cakes: buyCake,
  createUser: createUserReducer,
  getUser: GetUserReducer,
  getusers: GetUsersReducer,
  todos: todoReducer,
  deleteUser: DeleteUserReducer,
});
