// src/components/HeroParagraph/HeroParagraph.jsx
import React from "react";

export default function HeroParagraph({ text }) {
  return (
    <p className="text-sm mb-10 lg:text-base">
      {text}
    </p>
  );
}
