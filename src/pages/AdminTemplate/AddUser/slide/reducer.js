import * as ActionTypes from "./constants";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

export const addUserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_USER_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    case ActionTypes.ADD_USER_SUCCESS:
      state.loading = true;
      state.data = payload;
      state.error = null;
      return { ...state };
    case ActionTypes.ADD_USER_FAIL:
      state.loading = true;
      state.data = null;
      state.error = payload;
      return { ...state };
    default:
      return { ...state };
  }
};
