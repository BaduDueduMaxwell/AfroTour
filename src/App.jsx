import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import PackagesPage from "./Pages/PackagesPage";
import TripDetailsPage from "./Pages/TripDetailsPage";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import AboutPage from "./Pages/AboutPage";
import Contact from "./Components/Contact/Contact";
import SignUp from "./Components/Auth/signup";
import SignIn from "./Components/Auth/SignIn";
// import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <>
      <Navbar className="margin-nav" />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        {/* <ProctectedRoute> */}
        <Route path="/" element={<Homepage />} />
        <Route path="packages" element={<PackagesPage />} />
        <Route path="/trip-details" element={<TripDetailsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
        {/* </ProctectedRoute> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
