import {
  CREATE_USER_ERROR,
  CREATE_USER_REQUEST,
  CREATE_USER_RESET,
  CREATE_USER_SUCCESS,
  DELETE_USERS_ERROR,
  DELETE_USERS_REQUEST,
  DELETE_USERS_RESET,
  DELETE_USERS_SUCCESS,
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
        loading: false,
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
  state = {
    users: [],
    user: null,
    loadings: false,
    success: false,
    errors: null,
  },
  action
) => {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return {
        ...state,
        loadings: true,
      };
    case GET_USERS_SUCCESS:
      const { email, password } = action.payload;
      console.log(email, password, "checkemail");
      const user = action.payload.data.find(
        (user) => user.email === email && user.password === password
      );
      if (!user) {
        console.log("credential incorrecte");
      }
      console.log(user);
      return {
        ...state,
        loadings: false,
        success: true,
        users: action.payload,
        user: user ? user : null,
      };
    case GET_USERS_RESET:
      return {
        loadings: false,
        success: false,
        users: null,
        errors: null,
      };
    case GET_USERS_ERROR:
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
export const DeleteUserReducer = (
  state = { user: null, loading: false, success: false, error: null },
  action
) => {
  switch (action.type) {
    case DELETE_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_USERS_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
        user: action.payload,
      };
    case DELETE_USERS_RESET:
      return {
        loading: false,
        success: false,
        user: null,
        error: null,
      };
    case DELETE_USERS_ERROR:
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
