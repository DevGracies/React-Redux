import {
  CREATE_DIARY_ERROR,
  CREATE_DIARY_REQUEST,
  CREATE_DIARY_RESET,
  CREATE_DIARY_SUCCESS,
  DELETE_DIARY_ERROR,
  DELETE_DIARY_REQUEST,
  DELETE_DIARY_SUCCESS,
  GET_DIARIES_ERROR,
  GET_DIARIES_REQUEST,
  GET_DIARIES_RESET,
  GET_DIARIES_SUCCESS,
  GET_DIARY_ERROR,
  GET_DIARY_REQUEST,
  GET_DIARY_SUCCESS,
  GET_USERS_RESET,
} from "../constants";

export const createDiaryReducer = (
  state = { diary: [], loading: false, error: null, success: false },
  action
) => {
  switch (action.type) {
    case CREATE_DIARY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_DIARY_SUCCESS:
      return {
        success: true,
        loading: false,
        ...state,
        diary: [
          ...state.diary,
          { value: action.payload.value, id: Date.now() },
        ],
      };
    case CREATE_DIARY_RESET:
      return {
        loading: false,
        success: false,
        error: null,
      };
    case CREATE_DIARY_ERROR:
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

export const updateDiaryReducer = (
  state = { diary: [], loading: false, error: null, success: false },
  action
) => {
  switch (action.type) {
    case GET_DIARY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_DIARY_SUCCESS:
      return {
        success: true,
        ...state,
        diary: state.diary.map((note) =>
          note.id === action.payload.id
            ? { ...note, value: action.payload.newValue }
            : note
        ),
      };
    case GET_USERS_RESET:
      return {
        loading: false,
        success: false,
        task: null,
        errors: null,
      };
    case GET_DIARY_ERROR:
      return {
        ...state,
        loading: false,
        success: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};
export const getAllDiaryReducers = (
  state = { diary: [], loading: false, error: null, success: false },
  action
) => {
  switch (action.type) {
    case GET_DIARIES_REQUEST:
      return {
        ...state,
        loadings: true,
      };
    case GET_DIARIES_SUCCESS:
      return {
        ...state,
        success: true,
        tasks: action.payload,
      };
    case GET_DIARIES_RESET:
      return {
        loadings: false,
        success: false,
        tasks: null,
        errors: null,
      };
    case GET_DIARIES_ERROR:
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
export const DeleteDiaryReducer = (
  state = { diary: [], loading: false, error: null, success: false },
  action
) => {
  switch (action.type) {
    case DELETE_DIARY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_DIARY_SUCCESS:
      return {
        ...state,
        success: true,
        diary: state.diary.filter((note) => note.id !== action.payload.id),
      };
    case DELETE_DIARY_ERROR:
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
