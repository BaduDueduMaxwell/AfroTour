// NavLink.jsx
import React from "react";

export default function NavLink({ items, isMobile }) {
  return (
    <div
      className={`${
        isMobile
          ? "absolute top-16 left-0 w-full h-screen bg-white dark:bg-gray-900 pl-5 ml-32 flex flex-col items-start justify-normal"
          : "hidden md:flex md:w-auto md:order-1"
      }`}
      id="navbar-sticky"
    >
      <ul
        className={`${
          isMobile
            ? "flex flex-col space-y-6"
            : "flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        }`}
      >
        {items.map((item, index) => (
          <li key={index}>
            <a
              href={item.href}
              className={`block py-2 pl-3 pr-4 rounded md:p-0 ${
                item.active
                  ? "text-slate-50 bg-sky-700 md:bg-transparent md:text-sky-700 md:dark:text-sky-500"
                  : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-700 dark:text-slate-50 dark:hover:bg-gray-700 dark:hover:text-slate-50 md:dark:hover:bg-transparent"
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
