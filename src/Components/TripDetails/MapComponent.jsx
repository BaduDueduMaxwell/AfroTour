import React from "react";

export default function MapComponent({ errorMessage }) {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Tour Map</h2>
      {errorMessage ? (
        <div className="text-gray-900 p-4 border border-red-500 rounded">
          {errorMessage}
        </div>
      ) : (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3..."
          title="Tour Map"
          className="w-full h-64 border-0"
        />
      )}
    </div>
  );
}
