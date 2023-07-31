import {
  AUTH_CLEAR_DATA,
  AUTH_FAIL,
  AUTH_REQUEST,
  AUTH_SUCCESS,
} from "./constants";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    case AUTH_SUCCESS:
      state.loading = false;
      state.data = payload;
      state.error = null;
      return { ...state };
    case AUTH_FAIL:
      state.loading = false;
      state.data = null;
      state.error = payload;
      return { ...state };
    case AUTH_CLEAR_DATA:
      state.loading = false;
      state.data = null;
      state.error = null;
      return { ...state };
    default:
      return { ...state };
  }
};
