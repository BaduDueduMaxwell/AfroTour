import { Button } from "@material-tailwind/react";
import Sidenav from "./Sidenav";
import Footer from "./Footer";

export default function Homepage() {
  return (
    <div className="grid max-w pr-4 m-">
      <Sidenav />
      <div>
        <div className="flex flex-wrap">
          <div className="w-full sm:w-8/12 mb-10">
            <div className="container mx-auto h-full sm:p-10">
              <nav className="flex px-4 justify-between items-center">
                <div className="text-4xl font-bold mt-5">
                  AfroTour<span className="text-sky-700">.</span>
                </div>
                <div>
                  <img
                    src="https://image.flaticon.com/icons/svg/497/497348.svg"
                    alt=""
                    className="w-8"
                  />
                </div>
              </nav>
              <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
                <div className="w-full">
                  <h1 className="text-4xl lg:text-6xl font-bold">
                    Let's <span className="text-sky-700">travel</span> the world
                    together
                  </h1>
                  <div className="w-20 h-2 bg-red-700 my-4"></div>
                  <p className="text-xl mb-10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae maiores neque eaque ea odit placeat, tenetur
                    illum distinctio nulla voluptatum a corrupti beatae tempora
                    aperiam quia id aliquam possimus aut.
                  </p>
                  <button className="bg-sky-500 text-white text-2xl font-medium px-4 py-2 rounded shadow">
                    Learn More
                  </button>
                </div>
              </header>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FudG9yaW5pfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60"
            alt="Santorini"
            className="w-full h-48 object-cover sm:h-screen sm:w-4/12"
          />
        </div>
        <h3 className="text-3xl font-extrabold ml-7 mb-2 mt-4">
          Popular Destinations
        </h3>
        <div className="w-20 h-2 bg-red-700 my-4 ml-12"></div>
        <p className="text-xl mb-10"></p>

        <section
          id="Projects"
          className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
        >
          <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
              <img
                src="https://images.unsplash.com/photo-1495562569060-2eec283d3391?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BhaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
                alt="Spain"
                className="h-80 w-72 object-cover rounded-t-xl"
              />
              <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">
                  Explore
                </span>
                <p className="text-lg font-bold text-black truncate block capitalize">
                  Barcelona, Spain
                </p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black cursor-auto my-3">
                    $1,490
                  </p>
                  <del>
                    <p className="text-sm text-gray-600 cursor-auto ml-2">
                      $2,990
                    </p>
                  </del>
                  <div className="ml-auto">
                   
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
              <img
                src="https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yb2Njb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60"
                alt="morocco"
                className="h-80 w-72 object-cover rounded-t-xl"
              />
              <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">
                  Explore
                </span>
                <p className="text-lg font-bold text-black truncate block capitalize">
                  Fez, Morocco
                </p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black cursor-auto my-3">
                    $149
                  </p>
                  <del>
                    <p className="text-sm text-gray-600 cursor-auto ml-2">
                      $199
                    </p>
                  </del>
                  <div className="ml-auto">
                    
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
              <img
                src="https://images.unsplash.com/photo-1551918120-9739cb430c6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbGRpdmVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60"
                alt="maldives"
                className="h-80 w-72 object-cover rounded-t-xl"
              />
              <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">
                  Explore
                </span>
                <p className="text-lg font-bold text-black truncate block capitalize">
                  Maldives
                </p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black cursor-auto my-3">
                    $149
                  </p>
                  <del>
                    <p className="text-sm text-gray-600 cursor-auto ml-2">
                      $199
                    </p>
                  </del>
                  <div className="ml-auto">
                    
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
              <img
                src="https://plus.unsplash.com/premium_photo-1680902988862-0716ffff17c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG5ldyUyMHlvcmt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
                alt="New York"
                className="h-80 w-72 object-cover rounded-t-xl"
              />
              <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">
                  Explore
                </span>
                <p className="text-lg font-bold text-black truncate block capitalize">
                  New York
                </p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black cursor-auto my-3">
                    $149
                  </p>
                  <del>
                    <p className="text-sm text-gray-600 cursor-auto ml-2">
                      $199
                    </p>
                  </del>
                  <div className="ml-auto">
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-bag-plus"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                      />
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                    </svg> */}
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
              <img
                src="https://images.unsplash.com/photo-1529921879218-f99546d03a9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2hpbmF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
                alt="China"
                className="h-80 w-72 object-cover rounded-t-xl"
              />
              <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">
                  Explore
                </span>
                <p className="text-lg font-bold text-black truncate block capitalize">
                  China
                </p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black cursor-auto my-3">
                    $149
                  </p>
                  <del>
                    <p className="text-sm text-gray-600 cursor-auto ml-2">
                      $199
                    </p>
                  </del>
                  <div className="ml-auto">
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-bag-plus"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                      />
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                    </svg> */}
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href="#">
              <img
                src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9tZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
                alt="Rome"
                className="h-80 w-72 object-cover rounded-t-xl"
              />
              <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">
                  Explore
                </span>
                <p className="text-lg font-bold text-black truncate block capitalize">
                  Rome
                </p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black cursor-auto my-3">
                    $149
                  </p>
                  <del>
                    <p className="text-sm text-gray-600 cursor-auto ml-2">
                      $199
                    </p>
                  </del>
                  <div className="ml-auto">
                 
                  </div>
                </div>
              </div>
            </a>
          </div>
        </section>
      </div>

      {/* form */}
      <div className="container px-6 mx-auto">
        <div className="flex flex-col text-center md:text-left md:flex-row h-screen justify-evenly md:items-center">
          <div className="flex flex-col w-full">
            <div>
              {/* <svg
                className="w-20 h-20 mx-auto md:float-left fill-stroke text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                ></path>
              </svg> */}
            </div>
            <h1 className="text-5xl text-gray-800 font-bold">Client Area</h1>
            <p className="w-5/12 mx-auto md:mx-0 text-gray-500">
              Control and monitorize your website data from dashboard.
            </p>
          </div>
          <div className="w-full md:w-full lg:w-9/12 mx-auto md:mx-0">
            <div className="bg-white p-10 flex flex-col w-full shadow-xl rounded-xl">
              <h2 className="text-2xl font-bold text-gray-800 text-left mb-5">
                Sigin
              </h2>
              <form action="" className="w-full">
                <div id="input" className="flex flex-col w-full my-5">
                  <label for="username" className="text-gray-500 mb-2">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    placeholder="Please insert your username"
                    className="appearance-none border-2 border-sky-700 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                  />
                </div>
                <div id="input" className="flex flex-col w-full my-5">
                  <label for="password" className="text-gray-500 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Please insert your password"
                    className="appearance-none border-2 border-sky-700 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                  />
                </div>
                <div id="button" className="flex flex-col w-full my-5">
                  <button
                    type="button"
                    className="w-full py-4 bg-sky-700 rounded-lg text-white"
                  >
                    <div className="flex flex-row items-center justify-center">
                      <div className="mr-2"></div>
                      <div className="font-bold">Sigin</div>
                    </div>
                  </button>
                  <div className="flex justify-evenly mt-5">
                    <a
                      href="#"
                      className="w-full text-center font-medium text-gray-500"
                    >
                      Recover password!
                    </a>
                    <a
                      href="#"
                      className="w-full text-center font-medium text-gray-500"
                    >
                      Singup!
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
