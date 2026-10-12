import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constant";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLasttName] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailId,
          password,
        },
        { withCredentials: true },
      );
      dispatch(addUser(res.data));
      return navigate("/");
    } catch (err) {}
  };

  const handleSignUp = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/signup",
        { firstName, lastName, emailId, password },
        { withCredentials: true },
      );
      dispatch(addUser(res.data.data));
      return navigate("/profile");
    } catch (err) {
      setError(err?.response?.data || "Something went wrong");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-4 py-10 text-white">
      <div className="w-full max-w-md overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 shadow-2xl">
        {/* Header */}
        <div className="border-b border-neutral-800 px-8 py-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white">
            {isLogin ? "Welcome back" : "Welcome"}
          </h1>

          <p className="mt-2 text-sm text-neutral-400">
            {isLogin
              ? "Login to your Dev Tinder account"
              : "Sign up to your Dev Tinder account"}
          </p>
        </div>

        {/* Form */}
        <div className="space-y-5 px-8 py-8">
          {/* first & last Name*/}

          {!isLogin && (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <fieldset className="fieldset min-w-0">
                <legend className="fieldset-legend mb-1 text-sm font-medium text-neutral-300">
                  First Name
                </legend>

                <input
                  type="text"
                  value={firstName}
                  required
                  placeholder="First name"
                  onChange={(e) => setFirstName(e.target.value)}
                  className="input h-12 w-full rounded-xl border border-neutral-800 bg-neutral-900 text-white placeholder:text-neutral-600 focus:border-green-500 focus:outline-none"
                />
              </fieldset>

              <fieldset className="fieldset min-w-0">
                <legend className="fieldset-legend mb-1 text-sm font-medium text-neutral-300">
                  Last Name
                </legend>

                <input
                  type="text"
                  value={lastName}
                  required
                  placeholder="Last name"
                  onChange={(e) => setLasttName(e.target.value)}
                  className="input h-12 w-full rounded-xl border border-neutral-800 bg-neutral-900 text-white placeholder:text-neutral-600 focus:border-green-500 focus:outline-none"
                />
              </fieldset>
            </div>
          )}

          {/* Email*/}

          <fieldset className="fieldset">
            <legend className="fieldset-legend mb-1 text-sm font-medium text-neutral-300">
              Email address
            </legend>

            <input
              type="email"
              value={emailId}
              required
              placeholder="you@example.com"
              autoComplete="email"
              onChange={(e) => setEmailId(e.target.value)}
              className="input h-12 w-full rounded-xl border border-neutral-800 bg-neutral-900 text-white placeholder:text-neutral-600 focus:border-green-500 focus:outline-none"
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
                required
                placeholder="Enter your password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
                className="input h-12 w-full rounded-xl border border-neutral-800 bg-neutral-900 pr-20 text-white placeholder:text-neutral-600 focus:border-green-500 focus:outline-none"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 text-sm font-medium text-neutral-400 transition hover:text-green-400"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </fieldset>

          {/* Error Message */}
          {error && (
            <div className="rounded-xl border border-red-900/60 bg-red-950/30 px-4 py-3 text-sm text-red-400">
              {error}
            </div>
          )}

          {/* Login Button */}
          <button
            type="button"
            onClick={isLogin ? handleLogin : handleSignUp}
            className="btn mt-2 h-12 w-full rounded-xl border-green-600 bg-green-600 text-base font-semibold text-white shadow-none transition hover:border-green-500 hover:bg-green-500"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>

          <p
            className="cursor-pointer pt-2 text-center text-sm text-neutral-400 underline decoration-neutral-700 underline-offset-4 transition hover:text-green-400 hover:decoration-green-400"
            onClick={() => setIsLogin((value) => !value)}
          >
            {isLogin ? "New User? Signup here" : "Existing User? Login here"}
          </p>

          {/* Footer */}
          <p className="border-t border-neutral-800 pt-5 text-center text-xs tracking-wide text-neutral-500">
            DEVTINDER · CONNECT. COLLABORATE. GROW.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
