import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import image from "../assets/login.png";
import frame from "../assets/frame.png";
import { FcGoogle } from "react-icons/fc";

const Login = ({ setLoggedIn }) => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  // managing form data using usestate
  const [formDAta, setformData] = useState({
    emailAddress: "",
    password: "",
  });

  function dataHandler(e) {
    setformData((predata) => ({
      ...predata,
      [e.target.name]: e.target.value,
    }));
    console.log(formDAta);
  }

  // function to navigate routes
  function loginHandler(event) {
    event.preventDefault();
    navigate("/dashboard");
    setLoggedIn(true);
    toast.success("Logged in successfully !", { position: "top-center" });
  }

  // function to show password
  function changeEye(e) {
    e.preventDefault();
    if (showPassword === false) {
      setShowPassword(true);
    } else if (showPassword === true) {
      setShowPassword(false);
    }
  }
  return (
    // wrapper
    <div className="bg-gray-800 w-10/12  m-auto flex flex-wrap justify-evenly pt-10 overflow-hidden">
      {/* left side */}
      <div className=" w-[40%] gap-2 flex flex-col text-gray-100">
        <h1 className="text-2xl font-bold">Welcome Back</h1>
        <p className="text-sm font-semibold">
          Build skills for today,tomorrow and beyond.
        </p>
        <p className="text-sm font-semibold text-sky-400">
          Education to future proof your career.
        </p>

        {/* login form */}
        <form onSubmit={loginHandler}>
          <div className="flex flex-col gap-3">
            {/* email input */}
            <div className="flex flex-col w-[75%]">
              <label htmlFor="email" className="font-semibold">
                Email Address<sup className="text-red-800">*</sup>
              </label>
              <input
                required
                type="email"
                name="emailAddress"
                value={formDAta.emailAddress}
                id="email"
                onChange={dataHandler}
                placeholder="Enter email address"
                className="w-full rounded-md px-2 outline-none py-1 bg-gray-600 text-white"
              />
            </div>

            {/* password input */}
            <div className="flex flex-col relative w-[75%]">
              <label htmlFor="password" className="font-semibold">
                Password<sup className="text-red-800">*</sup>
              </label>
              <input
                required
                type={showPassword ? "text" : "password"}
                name="password"
                value={formDAta.password}
                id="password"
                onChange={dataHandler}
                placeholder="Password"
                className="w-full rounded-md px-2 outline-none py-1 bg-gray-600 text-white"
              />
              <span
                onClick={changeEye}
                className="text-xl absolute right-2 top-7 cursor-pointer"
              >
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </span>
              <Link
                className="absolute text-sky-400 -bottom-4 right-0 text-xs font-semibold"
                to="#"
              >
                Forgot Password
              </Link>
            </div>
            <button className="w-[75%] bg-yellow-50 rounded-md mt-10 flex text-black font-semibold justify-center items-center py-1">
              Sign in
            </button>
            <div className="text-white w-[75%] flex items-center justify-center">
              <div className="bg-white w-[45%] h-0.5 opacity-70"></div>
              <div className="px-1">OR</div>
              <div className="bg-white w-[45%] h-0.5 opacity-70"></div>
            </div>
          </div>
        </form>
        <button className="border text-white w-[75%] rounded-md mt-2 flex font-semibold justify-center items-center py-1">
          <FcGoogle className="mr-1" /> Sign in with Google
        </button>
      </div>

      {/* image */}
      <div className="w-[40%] relative">
        <div className="w-96 overflow-hidden absolute z-10 top-3 left-3">
          <img src={frame} alt="img" className="w-full h-full object-cover" />
        </div>
        <div className="w-96 overflow-hidden absolute z-20">
          <img src={image} alt="img" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Login;
