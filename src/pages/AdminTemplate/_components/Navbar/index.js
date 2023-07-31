import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actLogOut } from "pages/AdminTemplate/AuthPage/slide/actions";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark">
      <NavLink className="navbar-brand" to="#">
        Navbar
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "my-active nav-link" : "nav-link"
              }
              to="/admin/dashboard"
            >
              Dashboard
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "my-active nav-link" : "nav-link"
              }
              to="/admin/add-user"
            >
              Add User
            </NavLink>
          </li>
          <li className="nav-item ml-3">
            <button
              className="btn btn-info"
              onClick={() => dispatch(actLogOut(navigate))}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
