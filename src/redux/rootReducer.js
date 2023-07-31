import { combineReducers } from "redux";
import { listMovieReducer } from "pages/HomeTemplate/ListMoviePage/slide/reducer";
import { detailMovieReducer } from "pages/HomeTemplate/DetailMoviePage/slide/reducer";
import { authReducer } from "pages/AdminTemplate/AuthPage/slide/reducer";
import { addUserReducer } from "pages/AdminTemplate/AddUser/slide/reducer";

const rootReducer = combineReducers({
  //child reducer
  listMovieReducer,
  detailMovieReducer,
  authReducer,
  addUserReducer,
});

export default rootReducer;
