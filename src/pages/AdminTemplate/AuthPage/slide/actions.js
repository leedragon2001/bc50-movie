import {
  AUTH_CLEAR_DATA,
  AUTH_FAIL,
  AUTH_REQUEST,
  AUTH_SUCCESS,
} from "./constants";
import api from "utils/apiUtil";

//Giả sử BE trả time expired: 1h
const EXPIRED = 60 * 60 * 1000;
const moment = new Date().getTime();
export const actLogOut = (navigate) => {
  //remove local storage removeItem()
  localStorage.removeItem("UserAdmin");
  //redirect to Login page
  navigate("/login", { replace: true });
  // clear auth reducer
  return {
    type: AUTH_CLEAR_DATA,
  };
};

export const actFetchAuth = (user, navigate) => {
  return async (dispatch) => {
    dispatch(actAuthRequest());
    try {
      const result = await api.post("QuanLyNguoiDung/DangNhap", user);

      if (result.data.statusCode === 200) {
        const user = result.data.content;
        if (!(user.maLoaiNguoiDung === "QuanTri")) {
          // show error message
          const error = {
            response: {
              data: {
                content: "Bạn không có quyền truy cập",
              },
            },
          };

          throw error;
          // return dispatch(actAuthFail(error));
        }

        //tính thời gian hết hạn (tương lai = time now + expired)
        const exp = moment + EXPIRED;
        //setLocalStorage expired
        localStorage.setItem("exp", exp);
        //dispatch tới action timeoutLogout
        dispatch(actTimeoutLogout(navigate, EXPIRED));
        //QuanTri => Luu thong tin user
        dispatch(actAuthSuccess(user));

        //QuanTri => Luu trang thai user
        localStorage.setItem("UserAdmin", JSON.stringify(user));

        //QuanTri => redirect admin/dashboard
        navigate("/admin/dashboard", { replace: true });
      }
    } catch (error) {
      dispatch(actAuthFail(error));
    }
  };
};

const actAuthRequest = () => {
  return {
    type: AUTH_REQUEST,
  };
};

const actAuthSuccess = (data) => {
  return {
    type: AUTH_SUCCESS,
    payload: data,
  };
};

const actAuthFail = (e) => {
  return {
    type: AUTH_FAIL,
    payload: e,
  };
};

const actTimeoutLogout = (navigate, exp) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(actLogOut(navigate));
    }, exp);
  };
};

export const actTryLogin = (navigate) => {
  return (dispatch) => {
    const user = localStorage.getItem("UserAdmin");
    if (!user) return;
    const exp = localStorage.getItem("exp");
    const moment = new Date().getTime();
    if (moment > exp) {
      dispatch(actLogOut(navigate));
      return;
    }
    dispatch(actTimeoutLogout(navigate, exp - moment));
    dispatch(actAuthSuccess(user));
  };
};
