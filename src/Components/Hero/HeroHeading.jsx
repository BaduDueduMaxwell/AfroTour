import React from "react";

export default function HeroHeading({ heading }) {
  return (
    <h1 className="text-5xl lg:text-6xl font-bold mt-20 text-gray-900">
      {heading}
    </h1>
  );
}
