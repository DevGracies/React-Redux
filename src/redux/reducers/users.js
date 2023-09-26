import {
  CREATE_USER_ERROR,
  CREATE_USER_REQUEST,
  CREATE_USER_RESET,
  CREATE_USER_SUCCESS,
} from "../constants";

import {
  GET_USERS_ERROR,
  GET_USERS_REQUEST,
  GET_USERS_RESET,
  GET_USERS_SUCCESS,
} from "../constants";

export const createUseReducer = (
  state = { user: null, loading: false, success: false, error: null },
  action
) => {
  switch (action.type) {
    case CREATE_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        success: true,
        user: action.payload,
      };
    case CREATE_USER_RESET:
      return {
        loading: false,
        success: false,
        user: null,
        error: null,
      };
    case CREATE_USER_ERROR:
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

export const GetUserReducer = (
  state = { users: null, loading: false, success: false, error: null },
  action
) => {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        success: true,
        users: action.payload,
      };
    case GET_USERS_RESET:
      return {
        loading: false,
        success: false,
        users: null,
        error: null,
      };
    case GET_USERS_ERROR:
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
export const GetAllUserReducer = (state = {}, action) => {};
export const DeleteUserReducer = (state = {}, action) => {};
