import { Mail, Lock, LogIn, Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toastSuccess, toastError } from "../util/tost"; // Fixed typo
import axios from "axios";
import { useState } from "react";
import {ToastContainer} from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;  

    if (!email || !password) {
      setIsLoading(false);
      return toastError("All fields are required");
    }

    const Userdata = { email, password };
   
    

    try {
      const res = await axios.post("http://localhost:5500/api/login", Userdata);
      console.log(res.data);
      
      const { success, message, jwtToken, email } = res.data;

      if (success) {
        toastSuccess(message);
        localStorage.setItem("token", jwtToken);
        localStorage.setItem("loggedInUser", email);

        setTimeout(() => {
          navigate("/home");
        }, 1000);
      } else {
        toastError(message);
      }
    } catch (error: any) {
      const backendMessage =
        error.response?.data?.details?.replace(/"/g, "") ||
        error.response?.data?.message ||
        "Login failed";
      toastError(backendMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-indigo-300">
      <form
        className="relative h-[54%] w-65 md:w-80 md:h-[330px] flex flex-col items-center justify-center py-3 md:py-5 md:px-3 rounded-xl shadow-[0px_3px_32px_-2px_rgba(0,0,0,0.5)] bg-white"
        onSubmit={handleLogin}
      >
        {/* Email */}
        <div className="relative w-4/5">
          <Mail
            className="absolute left-4 top-4 md:left-1.5 md:top-5 transform -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            name="email"
            type="email"
            placeholder="Enter email..."
            className="pl-10 pr-4 py-1 md:py-2 md:px-7 mb-4 w-full rounded-xl placeholder:text-[.8rem] md:placeholder:text-[1rem] shadow-[0px_3px_20px_-3px_rgba(0,0,0,0.4)] outline-none"
            disabled={isLoading}
          />
        </div>

        {/* Password */}
        <div className="relative w-4/5">
          <Lock
            className="absolute left-4 top-4 md:left-1.5 md:top-5 transform -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            className="pl-10 pr-10 py-1 md:py-2 md:px-7 mb-4 w-full rounded-xl placeholder:text-[.8rem] md:placeholder:text-[1rem] shadow-[0px_3px_20px_-3px_rgba(0,0,0,0.4)] outline-none"
            disabled={isLoading}
          />
          <button
            type="button"
            className="absolute right-4 top-4 md:right-1.5 md:top-5 transform -translate-y-1/2 text-gray-400"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isLoading}
          className={`flex items-center gap-2 py-1.5 px-5 rounded-xl text-sm md:py-2 md:px-7 text-white bg-indigo-500 hover:bg-indigo-400 transition-all duration-200 shadow-[0_0_5px_black] active:scale-90 ${
            isLoading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isLoading ? 'Logging in...' : 'Login'}
          {!isLoading && <LogIn size={16} />}
        </button>

        <p className="text-[.8rem] md:text-sm mt-5">
          Don't have an account?{" "}
          <Link to="/signup" className="text-indigo-700 font-semibold cursor-pointer">
            Signup
          </Link>
        </p>
      </form>
      <ToastContainer/>
    </div>
  );
};

export default Login;