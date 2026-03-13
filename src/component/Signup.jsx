import { User, Lock } from "lucide-react";
import logo from "./utils/photos/logo.svg";
import { useNavigate } from "react-router-dom";
export default function SignIn() {
  const navigate = useNavigate();
  return (
    <div className="h bg-white flex justify-center items-center">
      
      {/* Mobile Container */}
      <div className="w-full sm:w-[370px] min-h-screen bg-gradient-to-b from-[#8A6CAB] to-[#CCA776] px-4 py-8">

        {/* Logo */}
        <div className="text-center mt-2">
          <img
            src={logo}
            alt="Logo"
            className="mx-auto w-32"
          />
          
        </div>

        {/* Welcome Text */}
        <div className="mt-10">
          <h2 className="text-2xl text-white font-semibold">
            Welcome Back
          </h2>
          <p className="text-white/80 text-sm mt-1">
            Sign in to continue
          </p>
        </div>

        {/* Role Selection */}
        <div className="mt-8">
          <p className="text-xs text-gray-700 mb-3">SELECT ROLE</p>

          <div className="flex gap-3">
            <button className="flex-1 border border-purple-700 bg-white text-purple-700 py-2 rounded-full text-sm font-semibold hover:bg-purple-100">
              ADMIN
            </button>

            <button className="flex-1 bg-[#6E1A63] text-white py-2 rounded-full text-sm font-semibold">
              MIXER
            </button>
          </div>
        </div>

        {/* Username */}
        <div className="mt-6">
          <label className="text-xs text-gray-700">USERNAME</label>

          <div className="flex items-center bg-white rounded-lg mt-2 px-3 py-2">
            <User size={16} className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="ugarit"
              className="outline-none w-full text-sm"
            />
          </div>
        </div>

        {/* Password */}
        <div className="mt-5">
          <label className="text-xs text-gray-700">PASSWORD</label>

          <div className="flex items-center bg-white rounded-lg mt-2 px-3 py-2">
            <Lock size={16} className="text-gray-500 mr-2" />
            <input
              type="password"
              placeholder="******"
              className="outline-none w-full text-sm"
            />
          </div>
        </div>

        {/* Sign In Button */}
        <button onClick={() => navigate("/home")} className="w-full mt-8 bg-[#6E1A63] text-white py-3 rounded-lg font-semibold hover:bg-purple-900">
          Sign In
        </button>

      </div>
    </div>
  );
}