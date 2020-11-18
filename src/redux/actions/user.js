import axios from "axios";
import jsCookie from "js-cookie";
import {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAIL,
  USER_LOGOUT,
  USER_FORGET_PASSWORD_REQUEST,
  USER_FORGET_PASSWORD_SUCCESS,
  USER_FORGET_PASSWORD_FAIL,
  USER_NEW_PASSWORD_REQUEST,
  USER_NEW_PASSWORD_FAIL,
  USER_NEW_PASSWORD_SUCCESS,
  DELETE_ACCOUNT_REQUEST,
  DELETE_ACCOUNT_SUCCESS,
  DELETE_ACCOUNT_FAIL,
} from "../constants/user";
import { toast } from "react-toastify";
import setAuthToken from "../../utils/setAuthToken";

const signInAction = (data) => async (dispatch) => {
  dispatch({
    type: USER_SIGNIN_REQUEST,
  });

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}auth/login`,
      data
    );

    dispatch({
      type: USER_SIGNIN_SUCCESS,
      payload: res.data,
    });

    toast.success("Login in successfully");
    jsCookie.set("userInfo", JSON.stringify(res.data));
  } catch (e) {
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload: e.response.data,
    });

    toast.error("Authentication Failed. Try again!");
  }
};

const signUpAction = (data) => async (dispatch) => {
  dispatch({
    type: USER_SIGNUP_REQUEST,
  });

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}auth/signup`,
      data
    );

    dispatch({
      type: USER_SIGNUP_SUCCESS,
      payload: res.data,
    });

    toast.success("Account created successfully.");
  } catch (e) {
    dispatch({
      type: USER_SIGNUP_FAIL,
      payload: e.response.data,
    });

    toast.error("Registration Failed. Try again later.");
  }
};

const logoutAction = () => (dispatch) => {
  jsCookie.remove("userInfo");
  dispatch({
    type: USER_LOGOUT,
  });
};

const forgetPasswordAction = (email) => async (dispatch) => {
  dispatch({
    type: USER_FORGET_PASSWORD_REQUEST,
  });

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}auth/forget-password`,
      email
    );

    dispatch({
      type: USER_FORGET_PASSWORD_SUCCESS,
      payload: res.data,
    });

    toast.success("Email sent successfully. Check email");
  } catch (e) {
    dispatch({
      type: USER_FORGET_PASSWORD_FAIL,
      payload: e.response.data,
    });

    toast.error("Sorry. Email can't be sent");
  }
};

const newPasswordAction = (token, password) => async (dispatch) => {
  dispatch({
    type: USER_NEW_PASSWORD_REQUEST,
  });

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}auth/reset-password/${token}`,
      password
    );

    dispatch({
      type: USER_NEW_PASSWORD_SUCCESS,
      payload: res.data,
    });

    toast.success("Password updated successfully. Now logIn");
  } catch (e) {
    dispatch({
      type: USER_NEW_PASSWORD_FAIL,
      payload: e.response.data,
    });

    toast.error("Sorry. new password can't be updated");
  }
};

const deleteAccountAction = () => async (dispatch) => {
  dispatch({
    type: DELETE_ACCOUNT_REQUEST,
  });

  const userInfo = jsCookie.getJSON("userInfo") || null;
  setAuthToken(userInfo && userInfo.token);

  try {
    const res = await axios.delete(
      `${process.env.REACT_APP_API_URL}auth/account-delete`
    );

    dispatch({
      type: DELETE_ACCOUNT_SUCCESS,
      payload: res.data,
    });

    toast.success("Account Deleted. We will miss you :(");
  } catch (e) {
    dispatch({
      type: DELETE_ACCOUNT_FAIL,
      payload: e.response.data,
    });

    toast.error("Error While deleting your account");
  }
};

export {
  signInAction,
  signUpAction,
  logoutAction,
  forgetPasswordAction,
  newPasswordAction,
  deleteAccountAction,
};
