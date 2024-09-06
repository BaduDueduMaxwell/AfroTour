// src/components/Hero/Hero.jsx
import React from "react";
import HeroHeading from "./HeroHeading";
import HeroParagraph from "./HeroParagraph";
import HeroButton from "./HeroButton";
import HeroImage from "./HeroImage";

export default function Hero() {
  const headingContent = (
    <>
      Let's <span className="text-sky-700">travel</span> the world together
    </>
  );

  const images = [
    {
      src: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FudG9yaW5pfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60",
      alt: "Santorini",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1661919210043-fd847a58522d?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFyaXN8ZW58MHx8MHx8fDA%3D",
      alt: "Paris",
    },
    {
      src: "https://images.unsplash.com/photo-1558642084-fd07fae5282e?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3BhaW58ZW58MHx8MHx8fDA%3D",
      alt: "Church in Spain",
    },
    {
      src: "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3hmb3JkJTIwc3RyZWV0fGVufDB8fDB8fHww",
      alt: "Oxford Street, London",
    },
  ];

  const paragraphContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae maiores neque eaque ea odit placeat, tenetur illum distinctio nulla voluptatum a corrupti beatae tempora aperiam quia id aliquam possimus aut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae maiores neque eaque ea odit placeat, tenetur illum distinctio nulla voluptatum a corrupti beatae tempora aperiam quia id aliquam possimus aut.`;

  return (
    <div className="flex flex-col md:ml-10 lg:flex-row items-center">
      {/* Left side: Heading, Paragraph, and Button */}
      <div className="w-full lg:w-5/12 mb-10 lg:mb-0">
        <div className="container mx-auto h-full ">
          <header className="container px-4 lg:flex flex-col h-full lg:mt-0">
            <div className="w-full">
              <HeroHeading heading={headingContent} />
              <div className="w-20 h-2 bg-sky-700 my-4"></div>
              <HeroParagraph text={paragraphContent} />
              <HeroParagraph text={paragraphContent} />
              <HeroButton text="Learn More" />
            </div>
          </header>
        </div>
      </div>

      {/* Right side: Image */}
      <div className="container w-full lg:w-7/12">
        <HeroImage images={images} />
      </div>
    </div>
  );
}
