import React, { useState, useEffect } from "react";

export default function HeroImage({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 1 second interval
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div className="relative w-full h-[50vh] lg:h-screen overflow-hidden">
      <img
        src={images[currentImageIndex].src}
        alt={images[currentImageIndex].alt}
        className="w-full h-full object-cover p-5 md:p-10 lg:p-0"
      />
    </div>
  );
}
