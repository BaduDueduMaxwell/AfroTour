import React, { useState } from "react";
import Input from "./Input";
import Checkbox from "./Checkbox";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../api/authService";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState(null);
  const [errors, setErrors] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  // Password validation regex
  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const validateForm = () => {
    const error = {};
    // Username validation
    if (!username.trim()) {
      errors.username = "Username is required.";
    } else if (username.length < 3) {
      errors.username = "Username must be at least 3 characters.";
    }

    // Email validation
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if (!email.trim()) {
    //   errors.email = "Email is required";
    // } else if (!emailRegex.test(email)) {
    //   errors.email = "Please enter a valid address.";
    // }

    // Password validation
    if (!password) {
      errors.password = "Password is required.";
    } else if (!validatePassword(password)) {
      ("Password must be at least 8 characters, include one letter, one number, and one special character.");
    }

    return errors;
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setErrors({});
    setFormError(null);
    setIsSubmitting(true);

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const userData = {
      username,
      password,
    };
    console.log("Form submitted");

    try {
      await login(userData);
      alert("Sigin successful");
      navigate("/");
    } catch (error) {
      console.error("Sign-in error", error);
      setFormError("Failed to sign in. Please check your credentials");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative flex flex-col rounded-xl p-10 bg-slate-50">
        <h4 className="block text-xl font-medium text-slate-800">Sign In</h4>
        <p className="text-slate-500 font-light">
          Welcome back! Enter your details to sign in.
        </p>
        {formError && <p className="text-red-600">{formError}</p>}
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
            {errors.username && (
              <p className="text-red-500 text-sm">{errors.username}</p>
            )}
            <Input
              label="Password"
              type="password"
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>
          <Checkbox label="Remember Me" id="check-2" />
          <button
            type="submit"
            className={`mt-4 w-full rounded-md bg-sky-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ${
              isSubmitting
                ? "bg-gray-400 pointer-events-none opacity-50"
                : "bg-sky-800 hover:bg-sky-700"
            }`}
          >
            {isSubmitting ? "Processing" : "Sign In"}
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
