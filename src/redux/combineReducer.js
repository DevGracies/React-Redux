import { combineReducers } from "redux";
import { buyCake, createUseReducer } from "./reducers";

export const reducers = combineReducers({
  cakes: buyCake,
  createUser: createUseReducer,
});
