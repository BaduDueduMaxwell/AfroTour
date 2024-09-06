import React from "react";

export default function DestinationImage({ src, alt }) {
  return (
    <img src={src} alt={alt} className="h-80 w-72 object-cover rounded-t-xl" />
  );
}
