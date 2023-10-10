import {
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_RESET,
  CREATE_USER_ERROR,
} from "../constants";
import {
  GET_USERS_ERROR,
  GET_USERS_REQUEST,
  GET_USERS_RESET,
  GET_USERS_SUCCESS,
} from "../constants";
import axios from "axios";
const backend_base_url = "http://localhost:3004/posts";
export const createUserAction = (posts) => async (dispatch, state) => {
  try {
    console.log(dispatch, "dispatch");
    dispatch({
      type: CREATE_USER_REQUEST,
    });

    // throw new Error("An error occured")
    //make a call
    const { data } = await axios.post(backend_base_url, {
      ...posts,
    });
    console.log(data, "data");
    //if we get here, then request is a sucess case
    dispatch({
      type: CREATE_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error.message, "error");
    dispatch({
      type: CREATE_USER_ERROR,
      payload: error.message,
    });
  }
};
export const getUserAction = (email, password) => async (dispatch, state) => {
  try {
    dispatch({
      type: GET_USERS_REQUEST,
    });
    const { data } = await axios.get(backend_base_url);
    dispatch({
      type: GET_USERS_SUCCESS,
      payload: { email, password, data },
    });
    console.log(data, "gua request complete");

    return { email, password, data };
  } catch (error) {
    console.log(error.message, "error");
    dispatch({
      type: GET_USERS_ERROR,
      payload: error.message,
    });
  }
};
