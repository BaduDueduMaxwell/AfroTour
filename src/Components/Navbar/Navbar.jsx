import React from "react";
import Logo from "./Logo";
import NavLink from "./NavLink";

export default function Navbar() {
  const navItems = [
    { name: "Home", href: "/", active: true },
    { name: "Packages", href: "/packages" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 p-5 flex items-center justify-between">
        <Logo />
        <NavLink items={navItems} />
      </nav>
    </div>
  );
}
