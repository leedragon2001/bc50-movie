import {
  DETAIL_MOVIE_FAIL,
  DETAIL_MOVIE_REQUEST,
  DETAIL_MOVIE_SUCCESS,
} from "./constants";
import api from "utils/apiUtil";

export const actFetchDetailMovie = (id) => {
  return async (dispatch) => {
    dispatch(actDetailMovieRequest());
    try {
      const result = await api.get(`QuanLyPhim/LayThongTinPhim?MaPhim=${id}`);
      if (result.data.statusCode === 200) {
        dispatch(actDetailMovieSuccess(result.data.content));
      }
    } catch (error) {
      actDetailMovieFail(error);
    }
  };
};

export const actDetailMovieRequest = () => {
  return {
    type: DETAIL_MOVIE_REQUEST,
  };
};

export const actDetailMovieSuccess = (data) => {
  return {
    type: DETAIL_MOVIE_SUCCESS,
    payload: data,
  };
};

export const actDetailMovieFail = (e) => {
  return {
    type: DETAIL_MOVIE_FAIL,
    payload: e,
  };
};
