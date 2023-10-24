import { combineReducers } from "redux";
import {
  buyCake,
  createUseReducer,
  DeleteTASKReducer,
  GetUserReducer,
} from "./reducers";
import todoReducer from "./reducers/jornal";

export const reducers = combineReducers({
  cakes: buyCake,
  createUser: createUseReducer,
  userReducer: GetUserReducer,
  todos: todoReducer,
  delete: DeleteTASKReducer,
});
