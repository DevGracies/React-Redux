import {
  CREATE_DIARY_ERROR,
  CREATE_DIARY_REQUEST,
  CREATE_DIARY_RESET,
  CREATE_DIARY_SUCCESS,
  GET_DIARY_ERROR,
  GET_DIARY_REQUEST,
  GET_DIARY_RESET,
  GET_DIARY_SUCCESS,
} from "../constants";

import axios from "axios";
const backend_base_url = "http://localhost:3004/diary";

export const createDiaryAction = async (dispatch, state) => {
  const diary = {};
  const config = {
    headers: {
      "Content-Type": "applicaton/json",
      authorization: `Bearer ${diary.token}`,
    },
  };
  try {
    dispatch({
      type: CREATE_DIARY_REQUEST,
    });
    const { data } = await axios.post(backend_base_url, config);
    dispatch({
      type: CREATE_DIARY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_DIARY_ERROR,
      payload: error.message,
    });
  }
};

export const getDiaryAction = () => {
  const diary = {};
  const config = {};
};
