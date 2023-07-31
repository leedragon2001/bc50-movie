import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actFetchAddUser } from "./slide/actions";

const AddUser = () => {
  const [user, setUser] = useState({
    taiKhoan: "",
    matKhau: "",
    email: "",
    phone: "",
    maNhom: "GP03",
    maLoaiNguoiDung: "KhachHang",
    hoTen: "",
  });
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.addUserReducer);

  const onChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(actFetchAddUser(user));
  };

  const renderError = () => {
    return error && <div>{error?.respone.data.cotent}</div>;
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <h1>Add User</h1>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label>Tài Khoản</label>
              <input
                type="text"
                name="taiKhoan"
                className="form-control"
                onChange={onChange}
              />
              {/* {error && renderError()} */}
            </div>
            <div className="form-group">
              <label>Mật Khẩu</label>
              <input
                type="password"
                name="matKhau"
                className="form-control"
                onChange={onChange}
              />
              {/* {error && renderError()} */}
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                name="email"
                className="form-control"
                onChange={onChange}
              />
              {/* {error && renderError()} */}
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input
                type="number"
                name="phone"
                className="form-control"
                onChange={onChange}
              />
              {/* {error && renderError()} */}
            </div>
            <div className="form-group">
              <label>Mã Loại Người Dùng</label>
              <select
                name="maLoaiNguoiDung"
                className="form-control"
                onChange={onChange}
              >
                <option value="KhachHang">Khách Hàng</option>
                <option value="QuanTri">Quản Trị</option>
              </select>

              {/* {error && renderError()} */}
            </div>
            <div className="form-group">
              <label>Họ Tên</label>
              <input
                type="text"
                name="hoTen"
                className="form-control"
                onChange={onChange}
              />
              {/* {error && renderError()} */}
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

export default AddUser;
