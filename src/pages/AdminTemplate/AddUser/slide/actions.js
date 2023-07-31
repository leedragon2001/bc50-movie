import * as ActionTypes from "./constants";
import api from "utils/apiUtil";

export const actFetchAddUser = (user) => {
  return async (dispatch) => {
    dispatch(actAddUserRequest());
    try {
      const result = await api.post("QuanLyNguoiDung/ThemNguoiDung", user);
      console.log(result.data);
    } catch (e) {
      console.log(e);
    }
  };
};

export const actAddUserRequest = () => {
  return {
    type: ActionTypes.ADD_USER_REQUEST,
  };
};

export const actAddUserSuccess = (data) => {
  return {
    type: ActionTypes.ADD_USER_SUCCESS,
    payload: data,
  };
};

export const actAddUserFail = (e) => {
  return {
    type: ActionTypes.ADD_USER_FAIL,
    payload: e,
  };
};
