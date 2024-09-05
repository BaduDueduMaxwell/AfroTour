import React from "react";

export default function HeroHeading({ heading }) {
  return (
    <h1 className="text-4xl lg:text-5xl font-bold mt-10">
      {heading}
    </h1>
  );
}
