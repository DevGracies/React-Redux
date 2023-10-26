import {
  CREATE_DIARY_ERROR,
  CREATE_DIARY_REQUEST,
  CREATE_DIARY_RESET,
  CREATE_DIARY_SUCCESS,
  GET_DIARY_ERROR,
  GET_DIARY_REQUEST,
  GET_DIARY_RESET,
  GET_DIARY_SUCCESS,
  UPDATE_DIARY_ERROR,
  UPDATE_DIARY_REQUEST,
  UPDATE_DIARY_SUCCESS,
} from "../constants";

import axios from "axios";
const backend_base_url = "http://localhost:3004/diary";

export const createDiaryAction = (note) => async (dispatch, state) => {
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
    const { data } = await axios.post(backend_base_url, { ...note }, config);
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

export const getDiaryAction = async (dispatch, state) => {
  const diary = {};
  const config = {
    headers: {
      " Content-Type": "application/json",
      authorization: `Bearer ${diary.token}`,
    },
  };
  try {
    dispatch({
      type: GET_DIARY_REQUEST,
    });
    const { data } = await axios.get(backend_base_url, config);
    dispatch({
      type: GET_DIARY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_DIARY_ERROR,
      payload: error.message,
    });
  }
};

export const updateDiaryAction = (id) => async (dispatch, state) => {
  const diary = {};
  const config = {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${diary.token}`,
    },
  };
  dispatch({
    type: UPDATE_DIARY_REQUEST,
  });
  try {
    const { data } = await axios.patch(
      `http://localhost:3004/diary/${id}`,
      config
    );
    dispatch({
      type: UPDATE_DIARY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_DIARY_ERROR,
      payload: error.message,
    });
  }
};
