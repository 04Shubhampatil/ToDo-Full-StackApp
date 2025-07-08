import React from "react";
import { User, Mail, Lock, Send } from "lucide-react";
import { Link } from "react-router-dom";
import {ToastContainer} from "react-toastify"

const Singup = () => {

  return (
    <div className="h-screen flex items-center justify-center bg-indigo-300">
      <form className="relative h-[54%] w-65 md:w-80 md:h-[400px] flex flex-col items-center justify-center py-3 md:py-5 md:px-3 rounded-xl shadow-[0px_3px_32px_-2px_rgba(0,0,0,0.5)] bg-white">
        {/* Name Input */}
        <div className="relative w-4/5">
          <User
            className="absolute left-4 top-4  md:left-1.5 md:top-5 transform -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            className="pl-10 pr-4 py-1 md:py-2 md:px-7 mb-4 md:mb-4 w-full rounded-xl placeholder:text-[.8rem] md:placeholder:text-[1rem]
            shadow-[0px_3px_20px_-3px_rgba(0,0,0,0.4)] outline-none"
            type="text"
            placeholder="Enter name..."
          />
        </div>

        {/* Email Input */}
        <div className="relative w-4/5">
          <Mail
            className="absolute  left-4 top-4  md:left-1.5 md:top-5  transform -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            className="pl-10 pr-4 py-1 md:py-2 md:px-7 mb-4 md:mb-4 w-full rounded-xl placeholder:text-[.8rem] md:placeholder:text-[1rem]
            shadow-[0px_3px_20px_-3px_rgba(0,0,0,0.4)] outline-none"
            type="email"
            placeholder="Enter email..."
          />
        </div>

        {/* Password Input */}
        <div className="relative w-4/5">
          <Lock
            className="absolute  left-4 top-4  md:left-1.5 md:top-5  transform -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            className="pl-10 pr-4 py-1 md:py-2 md:px-7 mb-4 md:mb-4 w-full rounded-xl placeholder:text-[.8rem] md:placeholder:text-[1rem]
            shadow-[0px_3px_20px_-3px_rgba(0,0,0,0.4)] outline-none"
            type="password"
            placeholder="Enter password"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="flex items-center gap-2 py-1.5 px-5 rounded-xl text-sm md:py-2 md:px-7 text-white bg-indigo-500 hover:bg-indigo-400 transition-all duration-200 shadow-[0_0_5px_black] active:scale-90"
          
        >
           <Send size={16} />
          Signup
         
        </button>

        <p className="text-[.8rem] md:text-sm mt-5">
          Go to login page?
          <span className="text-indigo-700 font-semibold cursor-pointer" 
          >
            <Link to="/login">Login</Link>
          </span>
        </p>
      </form>
      <ToastContainer/>
    </div>
  );
};

export default Singup;
