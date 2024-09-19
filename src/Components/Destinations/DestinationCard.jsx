import React from "react";
import DestinationImage from "./DestinationImage";
import DestinationParagraph from "./DestinationParagraph";
import { Link } from "react-router-dom";

export default function DestinationCard({ imageSrc, altText, destination, price, originalPrice }) {
  return (
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
       <Link to="/trip-details">
        <DestinationImage src={imageSrc} alt={altText} />
        <div className="px-4 py-3 w-72">
          <span className="text-gray-400 mr-3 uppercase text-xs">Explore</span>
          <DestinationParagraph text={destination} />
          <div className="flex items-center">
            <p className="text-lg font-semibold text-black cursor-auto my-3">
              {price}
            </p>
            <del>
              <p className="text-sm text-gray-600 cursor-auto ml-2">
                {originalPrice}
              </p>
            </del>
          </div>
        </div>
      </Link>
    </div>
  );
}
