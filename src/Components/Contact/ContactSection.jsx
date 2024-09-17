// ContactSection.js
import React from "react";

export default function ContactSection() {
  return (
    <div className="flex flex-col md:flex-row p-8 shadow-lg mt-14 rounded-lg">
      {/* First column for contact header */}
      <div className="w-full md:w-1/2 p-6">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg">We are at your disposal 7 days a week!</p>
      </div>

      {/* Second column for contact details */}
      <div className="w-full md:w-1/2 flex flex-col justify-start">
        {/* Store Location */}
        <div className="flex items-start mb-4">
          <div className="mr-4">
            <span role="img" aria-label="location" className="text-orange-400">
              📍
            </span>
          </div>
          <div>
            <h3 className="font-semibold">Store Location</h3>
            <p>CY162 Blackburn Street, Accra-Ghana</p>
          </div>
        </div>

        {/* Phone Number */}
        <div className="flex items-start mb-4">
          <div className="mr-4">
            <span role="img" aria-label="phone" className="text-orange-400">
              📞
            </span>
          </div>
          <div>
            <h3 className="font-semibold">Phone Number</h3>
            <p>+234 908 5551 797</p>
            <p>+234 908 7738 270</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start mb-4">
          <div className="mr-4">
            <span role="img" aria-label="email" className="text-orange-400">
              ✉️
            </span>
          </div>
          <div>
            <h3 className="font-semibold">Email us</h3>
            <p>holidays@wakanow.com</p>
          </div>
        </div>

        {/* Business Hours */}
        <div className="flex items-start mb-4">
          <div className="mr-4">
            <span role="img" aria-label="clock" className="text-orange-400">
              ⏰
            </span>
          </div>
          <div>
            <h3 className="font-semibold">Business Hours</h3>
            <p>Mon-Sat: 08:00 AM - 05:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}
