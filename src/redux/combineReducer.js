import { combineReducers } from "redux";
import { buyCake, createUseReducer, GetUserReducer } from "./reducers";

export const reducers = combineReducers({
  cakes: buyCake,
  createUser: createUseReducer,
  UserReducer: GetUserReducer,
});
