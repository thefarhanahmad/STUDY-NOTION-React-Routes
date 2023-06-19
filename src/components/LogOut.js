import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineLogout } from "react-icons/ai";

const LogOut = ({ setLoggedIn }) => {
  const navigate = useNavigate();

  function logOutHandler(e) {
    e.preventDefault();
    navigate("/");
    setLoggedIn(false);
    toast.success("Logged out", { position: "top-center" });
  }

  return (
    <div className="flex flex-col justify-center items-center w-full h-full ">
      <button onClick={logOutHandler}>
        <div className="text-5xl p-4 bg-red-500 hover:bg-gray-600 transition-all duration-200 mb-1 shadow-lg rounded-full text-white -rotate-90">
          <AiOutlineLogout />
        </div>
        <span className="font-bold text-white shadow-md px-1">Log Out</span>
      </button>
    </div>
  );
};

export default LogOut;
