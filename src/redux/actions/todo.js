import axios from "axios";
import jsCookie from "js-cookie";
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
import setAuthToken from "../../utils/setAuthToken";
import { toast } from "react-toastify";

const createTodoAction = (data) => async (dispatch) => {
  dispatch({
    type: CREATE_TODO_REQUEST,
  });

  const userInfo = jsCookie.getJSON("userInfo") || null;
  setAuthToken(userInfo && userInfo.token);

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}add-todo`,
      data
    );

    dispatch({
      type: CREATE_TODO_SUCCESS,
      payload: res.data,
    });

    toast.success("Wow, new todo created");
  } catch (e) {
    dispatch({
      type: CREATE_TODO_FAIL,
      payload: e.response.data,
    });

    toast.error("Oh,no some error occured");
  }
};

const showCompletedTodoAction = () => async (dispatch) => {
  dispatch({
    type: SHOW_COMPLETED_TODO_REQUEST,
  });

  const userInfo = jsCookie.getJSON("userInfo") || null;
  setAuthToken(userInfo && userInfo.token);

  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}todos?completed=true`
    );

    dispatch({
      type: SHOW_COMPLETED_TODO_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: SHOW_COMPLETED_TODO_FAIL,
      payload: e.response.data,
    });

    toast.error("Error, while fetching uncompleted todos");
  }
};

const showUncompletedTodoAction = () => async (dispatch) => {
  dispatch({
    type: SHOW_UNCOMPLETED_TODO_REQUEST,
  });

  const userInfo = jsCookie.getJSON("userInfo") || null;
  setAuthToken(userInfo && userInfo.token);

  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}todos?completed=false`
    );

    dispatch({
      type: SHOW_UNCOMPLETED_TODO_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: SHOW_UNCOMPLETED_TODO_FAIL,
      payload: e.response.data,
    });

    toast.error("Error, while fetching uncompleted todos");
  }
};

const updateTodoAction = (data, id) => async (dispatch) => {
  dispatch({
    type: UPDATE_TODO_REQUEST,
  });

  const userInfo = jsCookie.getJSON("userInfo") || null;
  setAuthToken(userInfo && userInfo.token);

  try {
    const res = await axios.patch(
      `${process.env.REACT_APP_API_URL}update-todo/${id}`,
      data
    );

    dispatch({
      type: UPDATE_TODO_SUCCESS,
      payload: res.data,
    });

    toast.success("Todo updated successfully");
  } catch (e) {
    dispatch({
      type: UPDATE_TODO_FAIL,
      payload: e.response.data,
    });

    toast.error("Error, while updating todos");
  }
};

const getAllTodosAction = () => async (dispatch) => {
  dispatch({
    type: GET_ALL_TODOS_REQUEST,
  });

  const userInfo = jsCookie.getJSON("userInfo") || null;
  setAuthToken(userInfo && userInfo.token);

  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}todos`);

    dispatch({
      type: GET_ALL_TODOS_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: GET_ALL_TODOS_FAIL,
      payload: e.response.data,
    });

    toast.error("Error, while getting all todos");
  }
};

const deleteTodoAction = (id) => async (dispatch) => {
  dispatch({
    type: DELETE_TODO_REQUEST,
  });

  const userInfo = jsCookie.getJSON("userInfo") || null;
  setAuthToken(userInfo && userInfo.token);

  try {
    const res = await axios.delete(
      `${process.env.REACT_APP_API_URL}delete-todo/${id}`
    );

    dispatch({
      type: DELETE_TODO_SUCCESS,
      payload: res.data,
    });

    toast.success("Todo deleted successfully");
  } catch (e) {
    dispatch({
      type: DELETE_TODO_FAIL,
      payload: e.response.data,
    });

    toast.error("Error, while deleting todo");
  }
};

const getSingleTodoAction = (id) => async (dispatch) => {
  dispatch({
    type: GET_SINGLE_TODO_REQUEST,
  });

  const userInfo = jsCookie.getJSON("userInfo") || null;
  setAuthToken(userInfo && userInfo.token);

  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}get-todo/${id}`
    );

    dispatch({
      type: GET_SINGLE_TODO_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: GET_SINGLE_TODO_FAIL,
      payload: e.response.data,
    });

    toast.error("Error, while fetching todo");
  }
};

export {
  createTodoAction,
  showCompletedTodoAction,
  showUncompletedTodoAction,
  updateTodoAction,
  getAllTodosAction,
  deleteTodoAction,
  getSingleTodoAction,
};
