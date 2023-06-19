import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import img from "../assets/signup.png";
import frame from "../assets/frame.png";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const SignUp = ({ setLoggedIn }) => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // function to save data from form
  function getDataHandler(e) {
    e.preventDefault();
    setData((preData) => ({
      ...preData,
      [e.target.name]: e.target.value,
    }));
  }

  // functio to submit form
  function submitHandler(e) {
    e.preventDefault();
    if (data.password === data.confirmPassword) {
      console.log(data);
      toast.success("Account created successfully !", {
        position: "top-center",
      });
      navigate("/dashboard");
      setLoggedIn(true);
    } else {
      toast.error("password should be same", { position: "top-center" });
    }
  }

  // function to show password for PASSWORD & CONFIRMPASSWORD
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // switch b/w student and nstructor
  const [accountType, setAccountType] = useState("Student");

  function changeEye(e) {
    e.preventDefault();
    if (showPassword === false) {
      setShowPassword(true);
    } else if (showPassword === true) {
      setShowPassword(false);
    }
  }

  function changeEye1(e) {
    e.preventDefault();
    if (showPassword1 === false) {
      setShowPassword1(true);
    } else if (showPassword1 === true) {
      setShowPassword1(false);
    }
  }

  return (
    // wrapper
    <div className="bg-gray-800 w-10/12 h-auto  m-auto flex flex-wrap justify-evenly pt-10 overflow-hidden">
      {/* left side */}
      <div className=" w-[45%] gap-2 flex flex-col text-gray-100">
        <h1 className="text-2xl font-bold">
          Join the millions learning to code with StudyNotion for free
        </h1>
        <p className="text-sm font-semibold">
          Build skills for today,tomorrow and beyond.
        </p>
        <p className="text-sm font-semibold text-sky-400">
          Education to future proof your career.
        </p>

        {/* instructor/student */}
        <div className="bg-gray-900 mb-2 flex justify-between items-center rounded-full w-[50%] p-1">
          <button
            onClick={() => setAccountType("Student")}
            className="active:bg-slate-800 rounded-full px-4 py-1 w-[45%]"
          >
            Student
          </button>
          <button
            onClick={() => setAccountType("Instructor")}
            className="active:bg-slate-800 rounded-full px-4 py-1 w-[45%]"
          >
            Instructor
          </button>
        </div>

        {/* input areas */}
        <form onSubmit={submitHandler}>
          <div className="flex flex-col w-[75%] gap-4">
            <div className=" flex flew-row w-full gap-2">
              <div className="w-45%">
                <label htmlFor="firstName" className="font-semibold">
                  First Name<sup className="text-red-800">*</sup>
                </label>
                <input
                  required
                  type="text"
                  id="firstName"
                  name="firstname"
                  value={data.firstname}
                  onChange={getDataHandler}
                  placeholder="Enter first name"
                  className="w-full rounded-md px-2 outline-none py-1 bg-gray-600 text-white"
                />
              </div>
              <div className="w-45%">
                <label htmlFor="lastName" className="font-semibold">
                  Last Name<sup className="text-red-800">*</sup>
                </label>
                <input
                  required
                  id="lastName"
                  type="text"
                  name="lastname"
                  value={data.lastname}
                  onChange={getDataHandler}
                  placeholder="Enter last name"
                  className="w-full rounded-md px-2 outline-none py-1 bg-gray-600 text-white"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="font-semibold">
                Email Address<sup className="text-red-800">*</sup>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={data.email}
                placeholder="Enter email address"
                required
                onChange={getDataHandler}
                className="w-full rounded-md px-2 outline-none py-1 bg-gray-600 text-white"
              />
            </div>
            <div className="flex flew-row w-full gap-2 relative">
              <div className="w-[50%]">
                <label htmlFor="password" className="font-semibold">
                  Create Password<sup className="text-red-800">*</sup>
                </label>
                <input
                  type={showPassword1 ? "text" : "password"}
                  id="password"
                  name="password"
                  value={data.password}
                  placeholder="Enter password"
                  required
                  onChange={getDataHandler}
                  className="w-full rounded-md px-2 outline-none py-1 bg-gray-600 text-white"
                />
                <span
                  onClick={changeEye1}
                  className="text-xl absolute left-40 top-7 cursor-pointer"
                >
                  {showPassword1 ? <AiFillEyeInvisible /> : <AiFillEye />}
                </span>
              </div>
              <div className="w-[50%]">
                <label htmlFor="confirmPassword" className="font-semibold">
                  Confirm Password<sup className="text-red-800">*</sup>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={data.confirmPassword}
                  placeholder="Confirm password"
                  required
                  onChange={getDataHandler}
                  className="w-full rounded-md px-2 outline-none py-1 bg-gray-600 text-white"
                />
                <span
                  onClick={changeEye}
                  className="text-xl absolute right-2 top-7 cursor-pointer"
                >
                  {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                </span>
              </div>
            </div>
            <button className="w-full bg-yellow-50 rounded-md mt-2 flex text-black font-semibold justify-center items-center py-1">
              Create Account
            </button>
          </div>
        </form>
        <div className="text-white w-[75%] flex items-center justify-center">
          <div className="bg-white w-[45%] h-0.5 opacity-70"></div>
          <div className="px-1">OR</div>
          <div className="bg-white w-[45%] h-0.5 opacity-70"></div>
        </div>
        <button className="border text-white w-[75%] rounded-md mt-2 flex font-semibold justify-center items-center py-1">
          <FcGoogle className="mr-1" /> Sign in with Google
        </button>
      </div>
      <div className="">
        {/* right side image */}
        <div className="w-[50%]  relative mt-4">
          <div className="w-[450px] h-[350px] z-20 absolute -top-3 -left-3">
            <img src={img} alt="img" className="w-full h-full " />
          </div>
          <div className="w-[450px] h-[350px] z-10 ">
            <img src={frame} alt="img" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
