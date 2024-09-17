import React from 'react';

export default function About() {
  return (
    <section className="about-section bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold mt-10 mb-6">About AfroTour</h2>
          <p className="text-lg mb-6 text-left">
            AfroTour is a travel platform designed to connect you with the best
            destinations around the world. Whether you're looking to explore the rich
            cultures of Africa or visit iconic landmarks across the globe, AfroTour
            offers a seamless and unforgettable experience. Our mission is to make
            travel easy, accessible, and enjoyable for everyone.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center mt-8">
          <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <img
              src="https://images.unsplash.com/photo-1495562569060-2eec283d3391?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BhaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
              alt="AfroTour Experience"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full sm:w-1/2 lg:w-2/3 p-4">
            <p className="text-lg">
              Our platform provides personalized tour recommendations, flight
              bookings, and a variety of packages to suit your travel needs. AfroTour
              aims to celebrate the beauty of travel and create memories that last a
              lifetime. Join us as we explore the wonders of the world, one destination
              at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
