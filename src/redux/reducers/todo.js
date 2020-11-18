import {
  CREATE_TODO_FAIL,
  CREATE_TODO_REQUEST,
  CREATE_TODO_SUCCESS,
  SHOW_COMPLETED_TODO_REQUEST,
  SHOW_COMPLETED_TODO_FAIL,
  SHOW_COMPLETED_TODO_SUCCESS,
  SHOW_UNCOMPLETED_TODO_REQUEST,
  SHOW_UNCOMPLETED_TODO_FAIL,
  SHOW_UNCOMPLETED_TODO_SUCCESS,
  UPDATE_TODO_REQUEST,
  UPDATE_TODO_FAIL,
  UPDATE_TODO_SUCCESS,
  GET_ALL_TODOS_REQUEST,
  GET_ALL_TODOS_SUCCESS,
  GET_ALL_TODOS_FAIL,
  DELETE_TODO_REQUEST,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAIL,
  GET_SINGLE_TODO_REQUEST,
  GET_SINGLE_TODO_SUCCESS,
  GET_SINGLE_TODO_FAIL,
} from "../constants/todo";

const createTodoReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODO_REQUEST:
      return {
        loading: true,
      };
    case CREATE_TODO_SUCCESS:
      return {
        loading: false,
        todo: payload,
      };
    case CREATE_TODO_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

const showCompletedTodoReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case SHOW_COMPLETED_TODO_REQUEST:
      return {
        loading: true,
      };
    case SHOW_COMPLETED_TODO_SUCCESS:
      return {
        loading: false,
        todos: payload,
      };
    case SHOW_COMPLETED_TODO_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

const showUncompletedTodoReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case SHOW_UNCOMPLETED_TODO_REQUEST:
      return {
        loading: true,
      };
    case SHOW_UNCOMPLETED_TODO_SUCCESS:
      return {
        loading: false,
        todos: payload,
      };
    case SHOW_UNCOMPLETED_TODO_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

const updateTodoReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_TODO_REQUEST:
      return {
        loading: true,
      };
    case UPDATE_TODO_SUCCESS:
      return {
        loading: false,
        todo: payload,
      };
    case UPDATE_TODO_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

const getAllTodosReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_TODOS_REQUEST:
      return {
        loading: true,
      };
    case GET_ALL_TODOS_SUCCESS:
      return {
        loading: false,
        todos: payload,
      };
    case GET_ALL_TODOS_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

const deleteTodoReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case DELETE_TODO_REQUEST:
      return {
        loading: true,
      };
    case DELETE_TODO_SUCCESS:
      return {
        loading: false,
        message: payload,
      };
    case DELETE_TODO_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

const getSingleTodoReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_SINGLE_TODO_REQUEST:
      return {
        loading: true,
      };
    case GET_SINGLE_TODO_SUCCESS:
      return {
        loading: false,
        todo: payload,
      };
    case GET_SINGLE_TODO_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export {
  createTodoReducer,
  showCompletedTodoReducer,
  showUncompletedTodoReducer,
  updateTodoReducer,
  getAllTodosReducer,
  deleteTodoReducer,
  getSingleTodoReducer,
};
