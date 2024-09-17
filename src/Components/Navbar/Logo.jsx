import React from "react";

export default function Logo() {
  return (
    <div>
      <a href="/" className="flex items-center">
        <img
          src="src/assets/afrotour.webp"
          className="h-8 mr-3"
          alt="AfroTour Logo"
        />
        <span className="self-center text-2xl font-semibold whitespace-nowrap text-slate-50">
          AfroTour
        </span>
      </a>
    </div>
  );
}
