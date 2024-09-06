import React from "react";
import DestinationCard from "./DestinationCard";
import DestinationHeading from "./DestinationHeading";

export default function PopularDestinations() {
  return (
    <section id="Projects" className="w-full mx-auto">
      {/* Center the heading */}
      <div className="flex justify-center mb-5">
        <DestinationHeading title="Popular Destinations" />
      </div>

      {/* Grid for cards: 1 column on mobile, 2 on tablets, 3 on desktops */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-y-5 gap-x-4 justify-items-center p-10">
        <DestinationCard
          imageSrc="https://images.unsplash.com/photo-1495562569060-2eec283d3391?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BhaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
          altText="Spain"
          destination="Barcelona, Spain"
          price="$1,490"
          originalPrice="$2,990"
        />
        <DestinationCard
          imageSrc="https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yb2Njb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60"
          altText="Morocco"
          destination="Fez, Morocco"
          price="$149"
          originalPrice="$199"
        />
        <DestinationCard
          imageSrc="https://images.unsplash.com/photo-1551918120-9739cb430c6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbGRpdmVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60"
          altText="Maldives"
          destination="Maldives"
          price="$149"
          originalPrice="$199"
        />
        <DestinationCard
          imageSrc="https://images.unsplash.com/photo-1549643276-fdf2fab574f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3BhaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
          altText="Italy"
          destination="Italy"
          price="$149"
          originalPrice="$199"
        />
         <DestinationCard
          imageSrc="https://images.unsplash.com/photo-1549643276-fdf2fab574f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3BhaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
          altText="Italy"
          destination="Italy"
          price="$149"
          originalPrice="$199"
        />
        <DestinationCard
          imageSrc="https://images.unsplash.com/photo-1551918120-9739cb430c6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbGRpdmVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60"
          altText="Maldives"
          destination="Maldives"
          price="$149"
          originalPrice="$199"
        />
        <DestinationCard
          imageSrc="https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yb2Njb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60"
          altText="Morocco"
          destination="Fez, Morocco"
          price="$149"
          originalPrice="$199"
        />
        <DestinationCard
          imageSrc="https://images.unsplash.com/photo-1495562569060-2eec283d3391?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BhaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
          altText="Spain"
          destination="Barcelona, Spain"
          price="$1,490"
          originalPrice="$2,990"
        />
        {/* Add more cards here */}
      </div>
    </section>
  );
}
