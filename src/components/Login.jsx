import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {addUser} from "../utils/userSlice"
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constant";

const Login = () => {

  const [emailId, setEmailId] = useState("max@gmail.com")
  const [password, setPassword] = useState("Maxx@123")
  const [error, setError] = useState("")
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()

 const handleLogin =async ()=>{
    try {
      const res = await axios.post(
       BASE_URL + "/login",
        {
          emailId,
          password
        },
        {withCredentials: true}
      )
      dispatch(addUser(res.data))
      return navigate('/')
    } catch (err) {
      setError(err?.response?.data || "Something went wrong")
    }
  }

  return (
<div className="min-h-screen flex items-center justify-center bg-black px-4 py-10">
  <div className="w-full max-w-md overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 shadow-2xl">

    {/* Header */}
    <div className="border-b border-neutral-800 px-8 py-8 text-center">

      <h1 className="text-3xl font-semibold tracking-tight text-white">
        Welcome back
      </h1>

      <p className="mt-2 text-sm text-neutral-400">
        Login to your Dev Tinder account
      </p>
    </div>

    {/* Form */}
    <div className="space-y-5 px-8 py-8">

      {/* Email */}
      <fieldset className="fieldset">
        <legend className="fieldset-legend mb-1 text-sm font-medium text-neutral-300">
          Email address
        </legend>

        <input
          type="email"
          value={emailId}
          placeholder="you@example.com"
          autoComplete="email"
          onChange={(e) => setEmailId(e.target.value)}
          className="input h-12 w-full rounded-lg border-neutral-700 bg-neutral-900 text-white placeholder:text-neutral-500 focus:border-blue-500 focus:outline-none"
        />
      </fieldset>

      {/* Password */}
<fieldset className="fieldset">
  <legend className="fieldset-legend mb-1 text-sm font-medium text-neutral-300">
    Password
  </legend>

  <div className="relative">
    <input
      type={showPassword ? "text" : "password"}
      value={password}
      placeholder="Enter your password"
      autoComplete="current-password"
      onChange={(e) => setPassword(e.target.value)}
      className="input h-12 w-full rounded-lg border-neutral-700 bg-neutral-900 pr-20 text-white placeholder:text-neutral-500 focus:border-blue-500 focus:outline-none"
    />

    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="absolute inset-y-0 right-3 text-sm font-medium text-neutral-400 transition hover:text-white"
    >
      {showPassword ? "Hide" : "Show"}
    </button>
  </div>
</fieldset>

      {/* Error Message */}
      {error && (
        <div className="rounded-lg border border-red-900 bg-red-950/30 px-4 py-3 text-sm text-red-400">
          {error}
        </div>
      )}

      {/* Login Button */}
      <button
        type="button"
        onClick={handleLogin}
        className="btn mt-2 h-12 w-full rounded-lg border-blue-600 bg-blue-600 text-base font-semibold text-white shadow-none transition hover:border-blue-500 hover:bg-blue-500"
      >
        Login
      </button>

      {/* Footer */}
      <p className="pt-2 text-center text-sm text-neutral-500">
        Your developer journey continues here.
      </p>

    </div>
  </div>
</div>

  );
};

export default Login;
