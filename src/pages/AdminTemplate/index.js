import React, { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Navbar from "./_components/Navbar";
import { actTryLogin } from "./AuthPage/slide/actions";
import { useDispatch } from "react-redux";

const AdminTemplate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => dispatch(actTryLogin(navigate)), []);

  //kiem tra co login vao he thong chua
  if (!localStorage.getItem("UserAdmin")) {
    //redirect => login
    return <Navigate to="/login" replace />;
  }
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default AdminTemplate;
