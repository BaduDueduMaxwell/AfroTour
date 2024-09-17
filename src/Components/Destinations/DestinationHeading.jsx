import React from "react";

export default function DestinationHeading({ title }) {
  return (
    <div>
      <h3 className="text-4xl font-extrabold ml-7 mb-2 mt-10 text-gray-900">
        {title}
      </h3>
      <div className="w-80 h-2 bg-sky-700 my-4 ml-12"></div>
    </div>
  );
}
