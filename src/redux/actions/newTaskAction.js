import {
  CREATE_TASK_REQUEST,
  CREATE_TASK_SUCCESS,
  CREATE_TASK_ERROR,
} from "../constants";
import {
  GET_TASKS_ERROR,
  GET_TASKS_REQUEST,
  GET_TASKS_SUCCESS,
} from "../constants";
import axios from "axios";
const backend_base_url = "http://localhost:3004/newTask";
export const createTaskAction = (posts) => async (dispatch, state) => {
  try {
    console.log(dispatch, "dispatch");
    dispatch({
      type: CREATE_TASK_REQUEST,
    });

    // throw new Error("An error occured")
    //make a call
    const { data } = await axios.post(backend_base_url, {
      ...posts,
    });
    console.log(data, "data");
    //if we get here, then request is a sucess case
    dispatch({
      type: CREATE_TASK_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error.message, "error");
    dispatch({
      type: CREATE_TASK_ERROR,
      payload: error.message,
    });
  }
};
export const getTaskAction = (posts) => async (dispatch, state) => {
  try {
    dispatch({
      type: GET_TASKS_REQUEST,
    });
    const { data } = await axios.get(backend_base_url, { ...posts });
    dispatch({
      type: GET_TASKS_SUCCESS,
      payload: data,
    });
    return data;
  } catch (error) {
    console.log(error.message, "error");
    dispatch({
      type: GET_TASKS_ERROR,
      payload: error.message,
    });
  }
};
