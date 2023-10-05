import {
  CREATE_TASK_ERROR,
  CREATE_TASK_REQUEST,
  CREATE_TASK_RESET,
  CREATE_TASK_SUCCESS,
} from "../constants";

import {
  GET_TASKS_ERROR,
  GET_TASKS_REQUEST,
  GET_TASKS_RESET,
  GET_TASKS_SUCCESS,
} from "../constants";

export const createTaskReducer = (
  state = { task: null, loading: false, success: false, error: null },
  action
) => {
  switch (action.type) {
    case CREATE_TASK_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_TASK_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
        task: action.payload,
      };
    case CREATE_TASK_RESET:
      return {
        loading: false,
        success: false,
        task: null,
        error: null,
      };
    case CREATE_TASK_ERROR:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const GetTASKReducer = (
  state = { tasks: [], loadings: false, success: false, errors: null },
  action
) => {
  switch (action.type) {
    case GET_TASKS_REQUEST:
      return {
        ...state,
        loadings: true,
      };
    case GET_TASKS_SUCCESS:
      return {
        ...state,
        success: true,
        tasks: action.payload,
      };
    case GET_TASKS_RESET:
      return {
        loadings: false,
        success: false,
        tasks: null,
        errors: null,
      };
    case GET_TASKS_ERROR:
      return {
        ...state,
        loadings: false,
        success: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};
export const GetAllTASKReducer = (state = {}, action) => {};
export const DeleteTASKReducer = (state = {}, action) => {};
