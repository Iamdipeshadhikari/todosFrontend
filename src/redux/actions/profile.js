import {
  CREATE_PROFILE_REQUEST,
  CREATE_PROFILE_SUCCESS,
  CREATE_PROFILE_FAIL,
  GET_PROFILE_FAIL,
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_SUCCESS,
} from "../constants/profile";
import axios from "axios";
import jsCookie from "js-cookie";
import setAuthToken from "../../utils/setAuthToken";
import { toast } from "react-toastify";

const createProfileAction = (data) => async (dispatch) => {
  dispatch({
    type: CREATE_PROFILE_REQUEST,
  });

  const userInfo = jsCookie.getJSON("userInfo") || null;

  setAuthToken(userInfo && userInfo.token);

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}user/profile-me`,
      data
    );

    dispatch({
      type: CREATE_PROFILE_SUCCESS,
      payload: res.data,
    });

    toast.success("Profile Created Successfully. Congrats");
  } catch (e) {
    console.log(e);
    dispatch({
      type: CREATE_PROFILE_FAIL,
      payload: e.response.data,
    });

    toast.error("OH, no some error occured");
  }
};

const getUserProfileAction = () => async (dispatch) => {
  dispatch({
    type: GET_PROFILE_REQUEST,
  });

  const userInfo = jsCookie.getJSON("userInfo") || null;

  setAuthToken(userInfo && userInfo.token);

  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}user/profile-me`
    );

    dispatch({
      type: GET_PROFILE_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    console.log(e);
    dispatch({
      type: GET_PROFILE_FAIL,
      payload: e.response.data,
    });
  }
};

const updateProfileAction = (data) => async (dispatch) => {
  dispatch({
    type: UPDATE_PROFILE_REQUEST,
  });

  const userInfo = jsCookie.getJSON("userInfo") || null;

  setAuthToken(userInfo && userInfo.token);

  try {
    const res = await axios.patch(
      `${process.env.REACT_APP_API_URL}user/profile-me`,
      data
    );

    dispatch({
      type: UPDATE_PROFILE_SUCCESS,
      payload: res.data,
    });

    toast.success("Wow, profile updated successfully");
  } catch (e) {
    console.log(e);
    dispatch({
      type: UPDATE_PROFILE_FAIL,
      payload: e.response.data,
    });

    toast.error("Oh on, Error while updating the profile");
  }
};

export { createProfileAction, getUserProfileAction, updateProfileAction };
