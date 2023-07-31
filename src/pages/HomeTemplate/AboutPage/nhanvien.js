import React from "react";

const Nhanvien = () => {
  return (
    <>
      <div className="form-group">
        <label>MaNV</label>
        <input
          type="text"
          className="form-control"
          placeholder="Mã Nhân Viên"
        />
      </div>
      <div className="form-group">
        <label>TenNV</label>
        <input
          type="text"
          className="form-control"
          placeholder="Tên Nhân Viên"
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="email" className="form-control" placeholder="Email" />
      </div>
    </>
  );
};

export default Nhanvien;
