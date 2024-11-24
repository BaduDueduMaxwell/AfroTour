// Navbar.jsx
import React, { useState } from "react";
import Logo from "./Logo";
import NavLink from "./NavLink";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const navItems = [
    { name: "Home", href: "/", active: true },
    { name: "Packages", href: "/packages" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Signup", href: "/signup" },
  ];

  const handleNav = () => {
    setNav(!nav); // Toggles the mobile menu
  };

  return (
    <div>
      <nav className="bg-gray-900 fixed w-full z-20 top-0 left-0  border-gray-600 p-5 flex items-center justify-between">
        {/* Logo Component */}
        <Logo />

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          {!nav ? (
            <AiOutlineMenu
              size={30}
              className="cursor-pointer text-slate-50"
              onClick={handleNav}
            />
          ) : (
            <AiOutlineClose
              size={30}
              className="cursor-pointer text-slate-50"
              onClick={handleNav}
            />
          )}
        </div>

        {/* Desktop and Mobile NavLinks */}
        <NavLink items={navItems} isMobile={nav} />
      </nav>
    </div>
  );
}
