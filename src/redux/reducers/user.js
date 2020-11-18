import {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAIL,
  USER_LOGOUT,
  USER_FORGET_PASSWORD_SUCCESS,
  USER_FORGET_PASSWORD_REQUEST,
  USER_FORGET_PASSWORD_FAIL,
  USER_NEW_PASSWORD_REQUEST,
  USER_NEW_PASSWORD_FAIL,
  USER_NEW_PASSWORD_SUCCESS,
  DELETE_ACCOUNT_REQUEST,
  DELETE_ACCOUNT_SUCCESS,
  DELETE_ACCOUNT_FAIL,
} from "../constants/user";

const signInReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_SIGNIN_REQUEST:
      return {
        loading: true,
      };
    case USER_SIGNIN_SUCCESS:
      return {
        loading: false,
        userInfo: payload,
      };
    case USER_SIGNIN_FAIL:
      return {
        loading: false,
        error: payload,
      };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

const signUpReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_SIGNUP_REQUEST:
      return {
        loading: true,
      };
    case USER_SIGNUP_SUCCESS:
      return {
        loading: false,
        userInfo: payload,
      };
    case USER_SIGNUP_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

const forgetPasswordReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_FORGET_PASSWORD_REQUEST:
      return {
        loading: true,
      };
    case USER_FORGET_PASSWORD_SUCCESS:
      return {
        loading: false,
        message: payload,
      };
    case USER_FORGET_PASSWORD_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

const newPasswordReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_NEW_PASSWORD_REQUEST:
      return {
        loading: true,
      };
    case USER_NEW_PASSWORD_SUCCESS:
      return {
        loading: false,
        message: payload,
      };
    case USER_NEW_PASSWORD_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

const deleteAccountReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case DELETE_ACCOUNT_REQUEST:
      return {
        loading: true,
      };
    case DELETE_ACCOUNT_SUCCESS:
      return {
        loading: false,
        message: payload,
      };
    case DELETE_ACCOUNT_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export {
  signInReducer,
  signUpReducer,
  forgetPasswordReducer,
  newPasswordReducer,
  deleteAccountReducer,
};
