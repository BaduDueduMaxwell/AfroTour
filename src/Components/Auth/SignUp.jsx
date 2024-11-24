import React, { useState } from "react";
import Input from "./Input";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../api/authService";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
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
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      errors.email = "Please enter a valid address.";
    }

    // Password validation
    if (!password) {
      errors.password = "Password is required.";
    } else if (!validatePassword(password)) {
      ("Password must be at least 8 characters, include one letter, one number, and one special character.");
    }

    return errors;
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setErrors({});
    setFormError(null);
    setIsSubmitting(true); // disable the button during submission

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const userData = {
      username,
      email,
      password,
    };
    console.log("Form submitted");

    try {
      await register(userData); // Pass the user data object
      alert("Registration successful!");
      navigate("/packages"); // Redirect to a protected route
    } catch (err) {
      console.error("Registration error", err);
      setFormError("Failed to sign up. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative flex flex-col rounded-xl p-10 bg-slate-50">
        <h4 className="block text-xl font-medium text-slate-800">Sign Up</h4>
        <p className="text-slate-500 font-light">
          Create your account by filling in the details below.
        </p>
        {formError && <p className="text-red-600">{formError}</p>}
        <form
          onSubmit={handleSignUp}
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
              label="Email"
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
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
          <button
            type="submit"
            disabled={isSubmitting}
            className={`mt-4 w-full rounded-md py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md ${
              isSubmitting
                ? "bg-gray-400 pointer-events-none opacity-50"
                : "bg-sky-800 hover:bg-sky-700"
            }`}
          >
            {isSubmitting ? "Processing..." : "Sign UP"}
          </button>
          <p className="flex justify-center mt-6 text-sm text-slate-600">
            Already have an account?
            <Link
              to="/signin"
              className="ml-1 text-sm font-semibold text-slate-700 underline"
            >
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
