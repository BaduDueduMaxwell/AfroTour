import React from 'react';

export default function Input({ label, type, id, placeholder }) {
  return (
    <div className="flex flex-col w-full my-5">
      <label htmlFor={id} className="text-left text-gray-500 mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="appearance-none border-2 border-sky-700 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
      />
    </div>
  );
}
