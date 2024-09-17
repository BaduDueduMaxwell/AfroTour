import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function HeroButton({ text }) {
  return (
    <Link to="/trip-details">
      <button className="bg-sky-700 text-slate-50 text-lg sm:text-2xl font-medium px-3 py-2 sm:px-4 sm:py-2 rounded shadow">
        {text}
      </button>
    </Link>
  );
}
