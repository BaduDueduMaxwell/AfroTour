import Hero from "../Components/Hero/Hero";
import PopularDestinations from "../Components/Destinations/PopularDestinations";
import ClientArea from "../Components/ClientArea/ClientArea";

export default function Homepage() {
  return (
    <div className="overflow-x-auto">
      <Hero />
      <PopularDestinations />
      <ClientArea />
    </div>
  );
}
