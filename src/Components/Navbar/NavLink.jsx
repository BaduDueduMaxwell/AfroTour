// NavLink.jsx
import React from "react";

export default function NavLink({ items, isMobile }) {
  return (
    <div
      className={`${
        isMobile
          ? "absolute top-16 left-0 w-full h-screen  bg-gray-900 pl-5 ml-32 flex flex-col items-start justify-normal"
          : "hidden md:flex md:w-auto md:order-1"
      }`}
      id="navbar-sticky"
    >
      <ul
        className={`${
          isMobile
            ? "flex flex-col space-y-6"
            : "flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-900 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900"
        }`}
      >
        {items.map((item, index) => (
          <li key={index}>
            <a
              href={item.href}
              className={`block py-2 pl-3 pr-4 rounded md:p-0 ${
                item.active
                  ? "text-slate-50 bg-sky-700 md:bg-transparent "
                  : "hover:bg-gray-00 md:hover:text-sky-700 text-slate-50 hover:bg-gray-700 hover:text-slate-50 md:hover:bg-transparent"
              }`}
              aria-current={item.active ? "page" : undefined}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
