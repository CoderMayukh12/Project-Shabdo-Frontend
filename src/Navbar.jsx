// export default Navbar;
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import Hero from "./Hero-Section";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: "#", label: "Home" },
    { href: "#", label: "About Us" },
    { href: "#", label: "Why Shabdh?" },
    { href: "#", label: "Blogs" },
    { href: "#", label: "Contact Us" },
  ];

  const renderNavLinks = () =>
    navLinks.map((link) => (
      <a
        key={link.label}
        href={link.href}
        className="font-medium hover:text-primary block m-3 p-3 lg:inline lg:m-0 lg:p-0 lg:ml-12"
      >
        {link.label}
      </a>
    ));

  return (
    <>
      (
      <nav className="p-3 bg-white fixed top-0 left-0 right-0 z-20 shadow-md flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 flex-1">
          <img
            src="src/assets/Logo.png"
            alt="Logo"
            className="object-cover max-w-12 max-h-12"
          />
          <span className="text-lg font-medium font-display">Shabdh</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex">{renderNavLinks()}</div>

        {/* Sign in/Sign up Button for Desktop */}
        <div className="hidden lg:flex flex-1 justify-end">
          <button className="flex items-center gap-2 bg-primary text-white border border-blue-500 px-6 py-2 rounded-lg hover:bg-blue-600 hover:border-blue-600 lg:transform lg:transition-transform lg:duration-300 lg:hover:scale-105">
            <img src="./assets/asset 1.svg" alt="" />
            <span className="font-display font-medium">Sign in/Sign up</span>
            <FontAwesomeIcon icon={faArrowRight} fade />
          </button>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button className="p-2 lg:hidden" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isOpen ? faXmark : faBars} beatFade />
        </button>

        {/* Mobile Navigation Dialog */}
        {isOpen && (
          <div className="fixed inset-0 z-10 bg-white p-3 lg:hidden">
            <div className="flex justify-between">
              {/* Brand Logo */}
              <a href="#" className="flex items-center gap-2">
                <img
                  src="src/assets/Logo.png"
                  alt="Logo"
                  className="object-cover max-w-12 max-h-12"
                />
                <span className="text-lg font-medium font-display">Shabdo</span>
              </a>

              {/* Close Icon */}
              <button className="p-2" onClick={toggleMenu}>
                <FontAwesomeIcon
                  icon={faXmark}
                  beat
                  style={{ color: "#74C0FC" }}
                />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <div className="mt-6">{renderNavLinks()}</div>

            {/* Divider */}
            <div className="h-[1px] bg-gray-300 mt-6"></div>

            {/* Sign in/Sign up Button for Mobile */}
            <button className="mt-6 w-full flex items-center gap-2 bg-blue-500 text-white px-6 py-4 rounded-lg hover:bg-blue-600">
              <img src="./assets/asset 1.svg" alt="" />
              <span className="w-full text-center">Sign in/Sign up</span>
            </button>
          </div>
        )}
      </nav>
      );
    </>
  );
};

export default Navbar;
