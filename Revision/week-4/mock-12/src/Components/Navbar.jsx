import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineLogout } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { logoutSuccess } from "../Redux/Auth/action";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const name = useSelector((state) => state.auth.name);
  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutSuccess());
    alert("Logged out Successfully!!");
    navigate("/login");
  };
  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <div className="navContainer">
      <nav className="nav">
        <Link to={"/"}>Home</Link>
        {isAuth ? <p>{name}</p> : <Link to={"/signup"}>Signup</Link>}

        {isAuth ? (
          <div onClick={handleLogout}>
            <MdOutlineLogout size="40" />
            Louout
          </div>
        ) : (
          <div onClick={handleLogin}>
            <BiLogOut /> Login
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
