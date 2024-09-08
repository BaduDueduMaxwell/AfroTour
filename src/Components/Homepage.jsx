import Hero from "./Hero/Hero";
import PopularDestinations from "./Destinations/PopularDestinations";
import ClientArea from "./ClientArea/ClientArea";


export default function Homepage() {
  return (
    <div className="overflow-x-auto">
      <Hero />
      <PopularDestinations />
      <ClientArea />
    </div>
  );
}
