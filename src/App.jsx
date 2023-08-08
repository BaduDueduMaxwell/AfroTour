// import Sidenav from "./Components/Sidenav";
// import Homepage from "./Components/Homepage";
// import Footer from "./Components/Footer";
// import Packages from "./Components/PackagesPage";

// // function App() {
//     switch (window.location.pathname){
//         case "/":
//             break;
//             case "/Homepage"
//     }
//   return
// }

// export default App;

// import {
//   createBrowserRouter,
//   Routes,
//   Route,
//   Link,
//   NavLink,
//   createRoutesFromElements,
//   Router,
// } from "react-router-dom";

// pages
import Sidenav from "./Components/Sidenav";
import Homepage from "./Components/Homepage";
import Footer from "./Components/Footer";
import Packages from "./Components/PackagesPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Sidenav className="margin-nav"/>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="Packages" element={<Packages />} />
    </Routes>
    <Footer/>
    </>
  );
}

// function App(){
//   return (
//     <>
//     <Sidenav/>
//     <Homepage/>
//     <Footer/>
//     <Packages/>
//     </>
//   )
// }

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route>
//       <Route index element={<Sidenav />} />
//       <Route path="homepage" element={<Homepage />} />
//       <Route path="footer" element={<Footer />} />
//       <Route path="packages" element={<Packages />} />
//     </Route>
//   )
// );

// function App() {
//   return <RouterProvider router={router} />;
// }

export default App;
