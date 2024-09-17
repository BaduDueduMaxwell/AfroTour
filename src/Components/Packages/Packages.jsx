import React from "react";
import HeroHeading from "../Hero/HeroHeading";
import HeroParagraph from "../Hero/HeroParagraph";
import HeroButton from "../Hero/HeroButton";
import HeroImage from "../Hero/HeroImage";
import DestinationHeading from "../Destinations/DestinationHeading";
import DestinationCard from "../Destinations/DestinationCard";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Packages() {
  const headingContent = (
    <>
      Unforgettable <span className="text-sky-700">Travel</span> Experience's
    </>
  );

  const images = [
    {
      src: "https://holidays.wakanow.com/wp-content/uploads/elementor/thumbs/Homebanner-qgd04cczahrl2q530l1ycj25969t2dtosv4z4hmfx2.png",
      alt: "Santorini",
    },
    {
      src: "https://holidays.wakanow.com/wp-content/uploads/elementor/thumbs/Homebanner3-qgd03tk7ht1umiwe2cxeynsxdgugsfr22a39iyebdi.png",
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

  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate("/explore-packages");
  };
  return (
    <>
      <section>
        {" "}
        <div className="flex flex-col md:ml-10 lg:flex-row items-center ">
          {/* Left side: Heading, Paragraph, and Button */}
          <div className="w-full lg:w-5/12 mb-10 lg:mb-0">
            <div className="container mx-auto h-full ">
              <header className="container px-4 lg:flex flex-col h-full lg:mt-0">
                <div className="w-full">
                  <HeroHeading heading={headingContent} />
                  <div className="w-20 h-2 bg-sky-700 my-4"></div>
                  <HeroParagraph text={paragraphContent} />
                  <HeroParagraph text={paragraphContent} />
                  <HeroButton text="Explore the packages" />
                </div>
              </header>
            </div>
          </div>

          {/* Right side: Image */}
          <div className="container w-full lg:w-7/12">
            <HeroImage images={images} />
          </div>
        </div>
      </section>

      <section>
        <div className="flex justify-center mb-5">
          <DestinationHeading title="Packages Available" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-5 gap-x-4 justify-items-center p-10">
          <Link to="/trip-details">
            <DestinationCard
              imageSrc="https://images.unsplash.com/photo-1495562569060-2eec283d3391?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BhaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
              altText="Spain"
              destination="Barcelona, Spain"
              price="$1,490"
              originalPrice="$2,990"
              onClick={handleCardClick}
            />
          </Link>
          <Link to="/trip-details">
            <DestinationCard
              imageSrc="https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yb2Njb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60"
              altText="Morocco"
              destination="Fez, Morocco"
              price="$149"
              originalPrice="$199"
              onClick={handleCardClick}
            />
          </Link>
          <Link to="/trip-details">
            <DestinationCard
              imageSrc="https://images.unsplash.com/photo-1551918120-9739cb430c6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbGRpdmVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60"
              altText="Maldives"
              destination="Maldives"
              price="$149"
              originalPrice="$199"
              onClick={handleCardClick}
            />
          </Link>
          <Link to="/trip-details">
            <DestinationCard
              imageSrc="https://images.unsplash.com/photo-1549643276-fdf2fab574f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3BhaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
              altText="Italy"
              destination="Italy"
              price="$149"
              originalPrice="$199"
              onClick={handleCardClick}
            />
          </Link>
          <Link to="/trip-details">
            <DestinationCard
              imageSrc="https://images.unsplash.com/photo-1549643276-fdf2fab574f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3BhaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
              altText="Italy"
              destination="Italy"
              price="$149"
              originalPrice="$199"
              onClick={handleCardClick}
            />
          </Link>
          <Link to="/trip-details">
            <DestinationCard
              imageSrc="https://images.unsplash.com/photo-1551918120-9739cb430c6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbGRpdmVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60"
              altText="Maldives"
              destination="Maldives"
              price="$149"
              originalPrice="$199"
              onClick={handleCardClick}
            />
          </Link>
          <Link to="/trip-details">
            <DestinationCard
              imageSrc="https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yb2Njb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60"
              altText="Morocco"
              destination="Fez, Morocco"
              price="$149"
              originalPrice="$199"
              onClick={handleCardClick}
            />
          </Link>
          <Link to="/trip-details">
            <DestinationCard
              imageSrc="https://images.unsplash.com/photo-1495562569060-2eec283d3391?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BhaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
              altText="Spain"
              destination="Barcelona, Spain"
              price="$1,490"
              originalPrice="$2,990"
              onClick={handleCardClick}
            />
          </Link>
        </div>
      </section>
    </>
  );
}
