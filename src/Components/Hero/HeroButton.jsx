import React from "react";

export default function HeroButton({ text }) {
  return (
    <button className="bg-sky-700 text-slate-50 text-lg sm:text-2xl font-medium px-3 py-2 sm:px-4 sm:py-2 rounded shadow">
      {text}
    </button>
  );
}
