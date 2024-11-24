// src/api/axiosConfig.js
import axios from "axios";

// Create an Axios instance
const api = axios.create({
  baseURL: "http://127.0.0.1:5000/",  // Replace with your backend's base URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor for attaching token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for handling token refresh
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      
      try {
        const refreshToken = localStorage.getItem("refresh_token");
        if (refreshToken) {
          const { data } = await axios.post("http://localhost:5000/auth/refresh", {}, {
            headers: { Authorization: `Bearer ${refreshToken}` },
          });
          
          localStorage.setItem("access_token", data.access_token);
          originalRequest.headers.Authorization = `Bearer ${data.access_token}`;
          return api(originalRequest); // Retry the original request
        }
      } catch (err) {
        console.error("Refresh token expired or invalid, please log in again.");
        localStorage.clear();
        window.location.href = "/signin"; // Redirect to login page if refresh fails
      }
    }
    return Promise.reject(error);
  }
);

export default api;
