import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import jsCookie from "js-cookie";

// Reducers User
import {
  signInReducer,
  signUpReducer,
  forgetPasswordReducer,
  newPasswordReducer,
  deleteAccountReducer,
} from "./reducers/user";

// Reducer Profile
import {
  createProfileReducer,
  getProfileReducer,
  updateProfileReducer,
} from "./reducers/profile";

// Reducer Todo
import {
  createTodoReducer,
  showCompletedTodoReducer,
  showUncompletedTodoReducer,
  updateTodoReducer,
  getAllTodosReducer,
  deleteTodoReducer,
  getSingleTodoReducer,
} from "./reducers/todo";

const userInfo = jsCookie.getJSON("userInfo") || null;

const initialInfo = {
  signIn: {
    message: "Logged in with localstorage cred",
    userInfo: {
      ...userInfo,
    },
  },
};

const reducer = combineReducers({
  signIn: signInReducer,
  signUp: signUpReducer,
  forgetPassword: forgetPasswordReducer,
  newPassword: newPasswordReducer,
  createProfile: createProfileReducer,
  userProfile: getProfileReducer,
  updateProfile: updateProfileReducer,
  createTodo: createTodoReducer,
  completedTodos: showCompletedTodoReducer,
  uncompletedTodos: showUncompletedTodoReducer,
  updateTodo: updateTodoReducer,
  deleteAccount: deleteAccountReducer,
  allTodos: getAllTodosReducer,
  deleteTodo: deleteTodoReducer,
  singleTodo: getSingleTodoReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialInfo,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
