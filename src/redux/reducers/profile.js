import {
  CREATE_PROFILE_SUCCESS,
  CREATE_PROFILE_FAIL,
  CREATE_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAIL,
  GET_PROFILE_REQUEST,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
} from "../constants/profile";

const createProfileReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_PROFILE_REQUEST:
      return {
        loading: true,
      };
    case CREATE_PROFILE_SUCCESS:
      return {
        loading: false,
        profile: payload,
      };
    case CREATE_PROFILE_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

const getProfileReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE_REQUEST:
      return {
        loading: true,
      };
    case GET_PROFILE_SUCCESS:
      return {
        loading: false,
        profile: payload,
      };
    case GET_PROFILE_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

const updateProfileReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_PROFILE_REQUEST:
      return {
        loading: true,
      };
    case UPDATE_PROFILE_SUCCESS:
      return {
        loading: false,
        profile: payload,
      };
    case UPDATE_PROFILE_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export { createProfileReducer, getProfileReducer, updateProfileReducer };
