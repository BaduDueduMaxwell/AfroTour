import Homepage from "./Components/Homepage";
import Footer from "./Components/Footer/Footer";
import Packages from "./Components/PackagesPage";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar className="margin-nav" />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="Packages" element={<Packages />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
