import React from "react";
import TripInfo from "./TripInfo";
import BookingForm from "./BookingForm";
import MapComponent from "./MapComponent";
import { CarouselCustomArrows } from "./CarouselCustomArrows"; // Import the carousel

export default function TripDetails() {
  const includedItems = [
    "3 nights Stay at Hanoi",
    "1 night Overnight stay - Halong bay cruise",
    "Breakfast, lunch, dinner",
    "E-VISA single entry",
    "All Transfers - Airport and Cruise",
    "City tour of HANOI - old quarter with Lunch",
  ];
  const excludedItems = ["Return flight ticket", "Meals not specified"];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic
  };

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 gap-8 mt-16 md:grid-cols-2">
      {/* Carousel: Full width for small to medium screens */}
      <div className="col-span-1 md:col-span-2">
        <CarouselCustomArrows />
      </div>

      {/* Trip Info: Full width for small to medium screens */}
      <div className="col-span-1">
        <TripInfo
          duration="3 Nights"
          description="Experience the vibrant culture, stunning landscapes, and delicious cuisine of Vietnam this summer."
          included={includedItems}
          excluded={excludedItems}
        />
      </div>

      {/* Booking Form: Full width for small to medium screens */}
      <div className="col-span-1">
        <BookingForm
          price="1,095,000.00"
          onSubmit={handleFormSubmit}
          namePlaceholder="Your name"
          emailPlaceholder="example@gmail.com"
          phonePlaceholder="(229) 555-2872"
          checkInPlaceholder="DD-MM-YYYY"
          checkOutPlaceholder="DD-MM-YYYY"
        />
      </div>

      {/* MapComponent: Full width for small to medium screens */}
      <div className="col-span-1 md:col-span-2">
        <MapComponent errorMessage="This page can't load Google Maps correctly." />
      </div>
    </div>
  );
}
