import React from "react";

const Sanpham = () => {
  return (
    <>
      <div className="form-group">
        <label>MaSP</label>
        <input type="text" className="form-control" placeholder="Mã Sản Phẩm" />
      </div>
      <div className="form-group">
        <label>TenSP</label>
        <input
          type="text"
          className="form-control"
          placeholder="Tên Sản Phẩm"
        />
      </div>
    </>
  );
};

export default Sanpham;
