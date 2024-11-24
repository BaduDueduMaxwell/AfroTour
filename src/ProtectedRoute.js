// src/ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isAuthenticated = !!localStorage.getItem("access_token");

  return isAuthenticated ? children : <Navigate to="/signin" />;
}
