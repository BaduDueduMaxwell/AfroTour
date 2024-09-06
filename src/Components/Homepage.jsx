// import Navbar from "./Navbar";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import PopularDestinations from "./Destinations/PopularDestinations";
import ClientArea from "./ClientArea/ClientArea";


export default function Homepage() {
  return (
    <div className="overflow-x-auto">
      <Navbar />
      <Hero />
      <PopularDestinations />
      <ClientArea />
    </div>
  );
}
