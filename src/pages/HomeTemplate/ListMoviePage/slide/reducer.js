import {
  LIST_MOVIE_FAIL,
  LIST_MOVIE_REQUEST,
  LIST_MOVIE_SUCCESS,
} from "./constants";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

export const listMovieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LIST_MOVIE_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    case LIST_MOVIE_SUCCESS:
      state.loading = false;
      state.data = payload;
      state.error = null;
      return { ...state };
    case LIST_MOVIE_FAIL:
      state.loading = false;
      state.data = null;
      state.error = payload;
      return { ...state };
    default:
      return { ...state };
  }
};
