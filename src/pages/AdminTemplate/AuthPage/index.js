import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actFetchAuth } from "./slide/actions";
import { Navigate, useNavigate } from "react-router-dom";

const AuthPage = () => {
  const [user, setUser] = useState({ taiKhoan: "", matKhau: "" });
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.authReducer);
  const navigate = useNavigate();

  const onChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    //goi toi action call api
    dispatch(actFetchAuth(user, navigate));
  };

  const renderError = () => {
    return (
      <div className="alert alert-danger">{error?.response.data.content}</div>
    );
  };

  if (localStorage.getItem("UserAdmin")) {
    return <Navigate replace to="/admin/dashboard" />;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <h1>Login</h1>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label>Tài Khoản</label>
              <input
                type="text"
                name="taiKhoan"
                className="form-control"
                onChange={onChange}
              />
              {error && renderError()}
            </div>
            <div className="form-group">
              <label>Mật Khẩu</label>
              <input
                type="password"
                name="matKhau"
                className="form-control"
                onChange={onChange}
              />
              {error && renderError()}
            </div>
            <button className="btn btn-success" type="submit">
              Đăng Nhập
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
