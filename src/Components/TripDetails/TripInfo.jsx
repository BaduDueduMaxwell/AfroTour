import React from "react";

export default function TripInfo({
  duration,
  description,
  included,
  excluded,
}) {
  return (
    <div className="mb-8">
      <div className="bg-blue-50 p-4 rounded-md">
        <p className="text-xl font-bold">Duration</p>
        <p>{duration}</p>
      </div>
      <p className="my-6">{description}</p>

      <div>
        <h2 className="text-2xl font-bold mb-4">Included/Excluded</h2>
        <ul className="list-disc pl-5">
          {included.map((item, index) => (
            <li key={index} className="text-gray-500">
              {item}
            </li>
          ))}
          {excluded.map((item, index) => (
            <li key={index} className="text-gray-500">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
