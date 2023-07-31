import {
  LIST_MOVIE_REQUEST,
  LIST_MOVIE_SUCCESS,
  LIST_MOVIE_FAIL,
} from "./constants";
import api from "utils/apiUtil";

//call API
export const actFetchListMovie = () => {
  return async (dispatch) => {
    dispatch(actListMovieRequest());
    try {
      const result = await api.get("QuanLyPhim/LayDanhSachPhim?maNhom=GP03");
      if (result.data.statusCode === 200) {
        dispatch(actListMovieSuccess(result.data.content));
      }
    } catch (error) {
      actListMovieFail(error);
    }
  };
};

export const actListMovieRequest = () => {
  return {
    type: LIST_MOVIE_REQUEST,
  };
};

export const actListMovieSuccess = (data) => {
  return {
    type: LIST_MOVIE_SUCCESS,
    payload: data,
  };
};

export const actListMovieFail = (e) => {
  return {
    type: LIST_MOVIE_FAIL,
    payload: e,
  };
};
