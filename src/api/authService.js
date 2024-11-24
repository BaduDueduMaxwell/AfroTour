// src/api/authService.js
import api from "./axiosConfig";

// Login function
export const login = async (username, password) => {
  const response = await api.post("api/auth/login", { username, password });
  
  // Save the tokens to local storage
  localStorage.setItem("access_token", response.data.access_token);
  localStorage.setItem("refresh_token", response.data.refresh_token);
  
  return response.data;
};

// Register function with token storage
export const register = async ({ username, email, password }) => {
  const response = await api.post("api/auth/register", { username, email, password });
  
  // Save the tokens to local storage after successful registration
  localStorage.setItem("access_token", response.data.access_token);
  localStorage.setItem("refresh_token", response.data.refresh_token);

  return response.data;
};

// Logout function
export const logout = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
};
