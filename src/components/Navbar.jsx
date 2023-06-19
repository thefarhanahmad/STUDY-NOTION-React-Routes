import React from "react";
import logo from "../assets/Logo.svg";
import { Link, NavLink } from "react-router-dom";
const Navbar = ({ isLoggedIn }) => {
  return (
    // wrapper
    <div className="bg-gray-800 w-full h-14 border-b-2 border-gray-700">
      {/* navbar */}
      <div className="m-auto w-10/12 h-full box-border overflow-hidden flex flex-row justify-between items-center text-gray-100">
        {/*nav items */}
        {/* logo */}
        <div>
          <Link to={"/"}>
            <img src={logo} alt="logo" width={180} />
          </Link>
        </div>

        {/* nav lists */}
        <div className="flex gap-4">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
        </div>

        {/* login/signup rooutes btn */}
        <div className="relative">
          {isLoggedIn ? (
            <div className="flex gap-4">
              <button className="border-2 border-gray-900 rounded-md px-2 py-1">
                <NavLink to={"/logout"}>Log out</NavLink>
              </button>
              <button className="border-2 border-gray-900 rounded-md px-2 py-1">
                <NavLink to={"/dashboard"}>Dashboard</NavLink>
              </button>
            </div>
          ) : (
            <div className="flex gap-4 ">
              <button className="border-2 border-gray-900 rounded-md px-2 py-1">
                <NavLink to={"/login"}>Log in</NavLink>
              </button>
              <button className="border-2 border-gray-900 rounded-md px-2 py-1">
                <NavLink to={"/signup"}>Sign up</NavLink>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
