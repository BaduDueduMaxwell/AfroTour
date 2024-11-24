// src/components/Input.jsx
import React from "react";

export default function Input({ label, type, placeholder, value, onChange }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        className="mt-1 p-2 w-full border border-gray-300 rounded"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
