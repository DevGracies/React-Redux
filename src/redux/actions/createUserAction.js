import {
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_RESET,
  CREATE_USER_ERROR,
} from "../constants";
import axios from "axios";
const backend_base_url = "http://localhost:3004/posts";
export const createUserAction = (BodyData) => async (dispatch, state) => {
  try {
    console.log(dispatch, "dispatch");
    dispatch({
      type: CREATE_USER_REQUEST,
    });

    // throw new Error("An error occured")
    //make a call
    const { data } = await axios.post(`${backend_base_url}/users`, {
      BodyData,
    });
    console.log(data, "data");
    //if we get here, then request is a sucess case
    dispatch({
      type: CREATE_USER_SUCCESS,
      payload: data.BodyData,
    });
  } catch (error) {
    console.log(error.message, "error");
    dispatch({
      type: CREATE_USER_ERROR,
      payload: error.message,
    });
  }
};
