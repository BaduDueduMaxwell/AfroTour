import React, { useState } from "react";
import Input from "./Input";
import Checkbox from "./Checkbox";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { login } from "../../api/authService";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post("http://localhost:5000/auth/login", {
        username,
        password,
      });

      // Save the JWT access and refresh tokens in local storage
      const { access_token, refresh_token } = response.data;
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("refresh_token", refresh_token);

      // Redirect user to a protected route, like the dashboard
      navigate("/dashboard");
    } catch (error) {
      console.error("Sign-in error", error);
      alert("Failed to sign in. Please check your credentials.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative flex flex-col rounded-xl p-10 bg-slate-50">
        <h4 className="block text-xl font-medium text-slate-800">Sign In</h4>
        <p className="text-slate-500 font-light">
          Welcome back! Enter your details to sign in.
        </p>
        <form
          onSubmit={handleSignIn}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 text-left"
        >
          <div className="mb-1 flex flex-col gap-6">
            <Input
              label="Username"
              type="text"
              placeholder="Your Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              label="Password"
              type="password"
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Checkbox label="Remember Me" id="check-2" />
          <button
            type="submit"
            className="mt-4 w-full rounded-md bg-sky-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            Sign In
          </button>

          <p className="flex justify-center mt-6 text-sm text-slate-600">
            Don&apos;t have an account?
            <Link
              to="/signup"
              className="ml-1 text-sm font-semibold text-slate-700 underline"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
