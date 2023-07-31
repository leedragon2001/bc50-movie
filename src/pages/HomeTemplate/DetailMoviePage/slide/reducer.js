import {
  DETAIL_MOVIE_FAIL,
  DETAIL_MOVIE_REQUEST,
  DETAIL_MOVIE_SUCCESS,
} from "./constants";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

export const detailMovieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case DETAIL_MOVIE_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    case DETAIL_MOVIE_SUCCESS:
      state.loading = false;
      state.data = payload;
      state.error = null;
      return { ...state };
    case DETAIL_MOVIE_FAIL:
      state.loading = false;
      state.data = null;
      state.error = payload;
      return { ...state };
    default:
      return { ...state };
  }
};
